/* ============================================================
   Dentipedia · Capa Firebase
   Proyecto: dentipedia-2c0dc
   - Alumnos: se identifican con su nombre + clave de grupo (sin login).
   - Docente: entra con Google, solo correos autorizados.
   - Buzón anónimo: colección aparte, sin identificador de autor.
   ============================================================ */

const FB_CONFIG = {
  apiKey: "AIzaSyB1HnZXTS3578GyeeWeNl_mG7PLqL7mG2g",
  authDomain: "dentipedia-2c0dc.firebaseapp.com",
  projectId: "dentipedia-2c0dc",
  storageBucket: "dentipedia-2c0dc.firebasestorage.app",
  messagingSenderId: "528697408289",
  appId: "1:528697408289:web:e3ca6e1b9f1b4347be1c60"
};

// Correos que pueden abrir el panel docente
const DOCENTES = [
  "dr.alvarado.ortodoncia@gmail.com",
  "miguel.alvarado@ucslp.net"
];

// Estado de la conexión
let FB = { app:null, db:null, auth:null, listo:false, online:false };

/* Carga los SDK de Firebase por CDN, solo una vez. */
function cargarScript(src){
  return new Promise((res, rej)=>{
    const s = document.createElement('script');
    s.src = src; s.onload = res; s.onerror = rej;
    document.head.appendChild(s);
  });
}

async function iniciarFirebase(){
  if(FB.listo) return FB.online;
  try{
    const base = "https://www.gstatic.com/firebasejs/10.12.2/";
    await cargarScript(base + "firebase-app-compat.js");
    await cargarScript(base + "firebase-firestore-compat.js");
    await cargarScript(base + "firebase-auth-compat.js");
    firebase.initializeApp(FB_CONFIG);
    FB.db = firebase.firestore();
    FB.auth = firebase.auth();
    FB.listo = true;
    FB.online = true;
    if(typeof pintarSync==='function') pintarSync('ok');
    if(typeof fbVigilarDocente==='function') fbVigilarDocente();
    return true;
  }catch(e){
    // Sin conexión la app sigue funcionando con localStorage
    FB.listo = true;
    FB.online = false;
    if(typeof pintarSync==='function') pintarSync('off');
    return false;
  }
}

/* ---------- ALUMNO ---------- */

/* Registra o actualiza al alumno y marca su conexión. */
async function fbRegistrarAlumno(alumno){
  if(!FB.online || !alumno) return;
  try{
    const ref = FB.db.collection('alumnos').doc(alumno.id);
    const doc = await ref.get();
    if(doc.exists){
      await ref.update({
        nombre: alumno.nombre,
        ultimaConexion: firebase.firestore.FieldValue.serverTimestamp(),
        conexiones: firebase.firestore.FieldValue.increment(1)
      });
    }else{
      await ref.set({
        nombre: alumno.nombre,
        id: alumno.id,
        creado: firebase.firestore.FieldValue.serverTimestamp(),
        ultimaConexion: firebase.firestore.FieldValue.serverTimestamp(),
        conexiones: 1
      });
    }
  }catch(e){ /* silencioso: no se interrumpe al alumno */ }
}

/* Guarda un resultado de quiz en el historial del alumno. */
async function fbGuardarResultado(r){
  if(!FB.online || !ALUMNO) return;
  try{
    await FB.db.collection('alumnos').doc(ALUMNO.id)
      .collection('quizzes').add({
        tema: r.tema,
        aciertos: r.aciertos,
        total: r.total,
        porcentaje: r.porcentaje,
        aprobado: r.porcentaje >= 70,
        fecha: firebase.firestore.FieldValue.serverTimestamp()
      });
    // resumen rápido en el doc del alumno, para el panel
    await FB.db.collection('alumnos').doc(ALUMNO.id).set({
      ultimoQuiz: { tema: r.tema, porcentaje: r.porcentaje,
                    fecha: firebase.firestore.FieldValue.serverTimestamp() }
    }, {merge:true});
  }catch(e){}
}

/* Marca en qué tema estuvo (para ver qué revisan). */
async function fbMarcarTema(temaId){
  if(!FB.online || !ALUMNO) return;
  try{
    await FB.db.collection('alumnos').doc(ALUMNO.id).set({
      temasVistos: { [temaId]: firebase.firestore.FieldValue.serverTimestamp() }
    }, {merge:true});
  }catch(e){}
}

/* ---------- BUZÓN ANÓNIMO ----------
   Colección aparte. Solo texto y fecha. Ningún dato del alumno.
   Las reglas de Firestore la hacen de solo-escritura para el público. */
async function fbEnviarSugerencia(texto){
  if(!FB.online) return { ok:false, motivo:'sin conexión' };
  const t = (texto||'').trim();
  if(t.length < 4) return { ok:false, motivo:'muy corto' };
  if(t.length > 1500) return { ok:false, motivo:'muy largo' };
  try{
    await FB.db.collection('sugerencias').add({
      texto: t,
      fecha: firebase.firestore.FieldValue.serverTimestamp()
    });
    return { ok:true };
  }catch(e){
    return { ok:false, motivo:'error' };
  }
}

/* ---------- DOCENTE ---------- */

async function fbLoginDocente(){
  if(!FB.online) { alert('No hay conexión con el servidor.'); return null; }
  const prov = new firebase.auth.GoogleAuthProvider();
  prov.setCustomParameters({ prompt: 'select_account' });
  // IMPORTANTE: la ventana emergente debe abrirse directo desde el toque del usuario,
  // sin ningún 'await' antes. La redirección falla en este dominio (ver nota abajo).
  try{
    const res = await FB.auth.signInWithPopup(prov);
    return validarDocente(res.user);
  }catch(e){
    const c = e && e.code;
    if(c === 'auth/popup-closed-by-user' || c === 'auth/cancelled-popup-request') return null;
    if(c === 'auth/popup-blocked'){
      // Último recurso: algunos navegadores integrados bloquean popups.
      try{
        sessionStorage.setItem('mm_login_docente','1');
        await FB.auth.signInWithRedirect(prov);
        return null;
      }catch(e2){ alert('No se pudo abrir Google (' + (e2.code||'error') + ').'); return null; }
    }
    if(c === 'auth/unauthorized-domain'){
      alert('Este dominio no está autorizado en Firebase (Authentication > Configuración > Dominios autorizados).');
      return null;
    }
    alert('No se pudo iniciar sesión (' + (c || 'error desconocido') + ').');
    return null;
  }
}

/* NOTA: signInWithRedirect pierde la sesión al volver cuando la app vive en un dominio
   distinto al authDomain (firebaseapp.com): el navegador bloquea el almacenamiento de
   terceros y el usuario regresa sin sesión y sin error. Por eso se usa popup. */

async function validarDocente(user){
  const correo = (user.email||'').toLowerCase();
  if(!DOCENTES.includes(correo)){
    await FB.auth.signOut();
    alert('Esta cuenta ('+correo+') no tiene acceso al panel docente.');
    return null;
  }
  return user;
}

/* Al volver de la redirección de Google, recoge el resultado. */
async function fbRecogerRedirect(){
  if(!FB.online) return null;
  try{
    const res = await FB.auth.getRedirectResult();
    if(res && res.user){
      const ok = await validarDocente(res.user);
      if(ok && sessionStorage.getItem('mm_login_docente')){
        sessionStorage.removeItem('mm_login_docente');
        return ok;
      }
    }
  }catch(e){}
  return null;
}

async function fbLogoutDocente(){
  try{ await FB.auth.signOut(); }catch(e){}
}

function fbEsDocente(){
  const u = FB.auth && FB.auth.currentUser;
  return !!(u && DOCENTES.includes((u.email||'').toLowerCase()));
}

/* Vigila la sesión: si el docente ya entró antes, Firebase lo recuerda
   y esto se dispara solo al abrir la app, activando el modo docente. */
function fbVigilarDocente(){
  if(!FB.online || !FB.auth) return;
  FB.auth.onAuthStateChanged(user=>{
    const esDoc = !!(user && DOCENTES.includes((user.email||'').toLowerCase()));
    if(typeof activarModoDocente === 'function') activarModoDocente(esDoc);
  });
}

/* Lista de alumnos con su avance, para el panel. */
async function fbListaAlumnos(){
  if(!FB.online) return [];
  try{
    const snap = await FB.db.collection('alumnos').orderBy('ultimaConexion','desc').get();
    return snap.docs.map(d=>({ id:d.id, ...d.data() }));
  }catch(e){ return []; }
}

/* Quizzes de un alumno concreto. */
async function fbQuizzesDe(alumnoId){
  if(!FB.online) return [];
  try{
    const snap = await FB.db.collection('alumnos').doc(alumnoId)
      .collection('quizzes').orderBy('fecha','desc').limit(60).get();
    return snap.docs.map(d=>d.data());
  }catch(e){ return []; }
}

/* Mensajes anónimos, para el panel. */
async function fbLeerSugerencias(){
  if(!FB.online) return [];
  try{
    const snap = await FB.db.collection('sugerencias').orderBy('fecha','desc').limit(200).get();
    return snap.docs.map(d=>({ id:d.id, ...d.data() }));
  }catch(e){ return []; }
}

/* Guardar asistencia de una fecha. */
async function fbGuardarAsistencia(fechaISO, presentes){
  if(!FB.online || !fbEsDocente()) return false;
  try{
    await FB.db.collection('asistencia').doc(fechaISO).set({
      fecha: fechaISO,
      presentes: presentes,
      registradoPor: FB.auth.currentUser.email,
      guardado: firebase.firestore.FieldValue.serverTimestamp()
    });
    return true;
  }catch(e){ return false; }
}

async function fbLeerAsistencia(fechaISO){
  if(!FB.online) return null;
  try{
    const d = await FB.db.collection('asistencia').doc(fechaISO).get();
    return d.exists ? d.data() : null;
  }catch(e){ return null; }
}


/* ---------- GRUPO, ASISTENCIA Y CALIFICACIONES (solo docente) ----------
   La lista del grupo vive en Firestore (no en el código): el repositorio es
   público y no debe contener nombres ni matrículas. */

/* null = no se pudo leer (sin conexión o reglas sin publicar); [] = lista vacía */
async function fbLeerGrupo(){
  if(!FB.online) return null;
  try{
    const snap = await FB.db.collection('grupo').orderBy('nombre').get();
    return snap.docs.map(d=>d.data());
  }catch(e){ return null; }
}

async function fbGuardarGrupo(lista, grupo, reemplazar){
  if(!FB.online) return { ok:false, motivo:'sin conexión' };
  if(!fbEsDocente()) return { ok:false, motivo:'requiere sesión de docente' };
  try{
    const col = FB.db.collection('grupo');
    const batch = FB.db.batch();
    const nuevos = new Set(lista.map(a=>a.matricula));
    lista.forEach(a=>{
      batch.set(col.doc(a.matricula), {
        matricula: a.matricula, nombre: a.nombre, grupo: grupo || '',
        actualizado: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge:true });
    });
    if(reemplazar){
      const snap = await col.get();
      snap.docs.forEach(d=>{ if(!nuevos.has(d.id)) batch.delete(col.doc(d.id)); });
    }
    await batch.commit();
    return { ok:true, n:lista.length };
  }catch(e){ return { ok:false, motivo:(e && e.code) || 'error' }; }
}

async function fbLeerAsistencias(){
  if(!FB.online) return null;
  try{
    const snap = await FB.db.collection('asistencia').get();
    return snap.docs.map(d=>d.data());
  }catch(e){ return null; }
}

async function fbLeerCalificaciones(){
  if(!FB.online) return {};
  try{
    const snap = await FB.db.collection('calificaciones').get();
    const m = {};
    snap.docs.forEach(d=>{ m[d.id] = d.data(); });
    return m;
  }catch(e){ return {}; }
}

async function fbGuardarCalificaciones(mapa){
  if(!FB.online) return { ok:false, motivo:'sin conexión' };
  if(!fbEsDocente()) return { ok:false, motivo:'requiere sesión de docente' };
  try{
    const col = FB.db.collection('calificaciones');
    const batch = FB.db.batch();
    Object.keys(mapa).forEach(mat=>{
      batch.set(col.doc(mat), Object.assign({}, mapa[mat], {
        actualizado: firebase.firestore.FieldValue.serverTimestamp()
      }), { merge:true });
    });
    await batch.commit();
    return { ok:true };
  }catch(e){ return { ok:false, motivo:(e && e.code) || 'error' }; }
}

async function fbLeerPonderacion(){
  if(!FB.online) return null;
  try{
    const d = await FB.db.collection('config').doc('ponderacion').get();
    return d.exists ? d.data() : null;
  }catch(e){ return null; }
}

async function fbGuardarPonderacion(p){
  if(!FB.online) return { ok:false, motivo:'sin conexión' };
  if(!fbEsDocente()) return { ok:false, motivo:'requiere sesión de docente' };
  try{
    await FB.db.collection('config').doc('ponderacion').set(p, { merge:true });
    return { ok:true };
  }catch(e){ return { ok:false, motivo:(e && e.code) || 'error' }; }
}

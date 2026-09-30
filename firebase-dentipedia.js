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
    return true;
  }catch(e){
    // Sin conexión la app sigue funcionando con localStorage
    FB.listo = true;
    FB.online = false;
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
  try{
    const prov = new firebase.auth.GoogleAuthProvider();
    const res = await FB.auth.signInWithPopup(prov);
    const correo = (res.user.email||'').toLowerCase();
    if(!DOCENTES.includes(correo)){
      await FB.auth.signOut();
      alert('Esta cuenta no tiene acceso al panel docente.');
      return null;
    }
    return res.user;
  }catch(e){
    if(e.code !== 'auth/popup-closed-by-user') alert('No se pudo iniciar sesión.');
    return null;
  }
}

async function fbLogoutDocente(){
  try{ await FB.auth.signOut(); }catch(e){}
}

function fbEsDocente(){
  const u = FB.auth && FB.auth.currentUser;
  return !!(u && DOCENTES.includes((u.email||'').toLowerCase()));
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

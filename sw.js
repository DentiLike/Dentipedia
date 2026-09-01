/* Mike Molares — Service Worker
   Sube la versión (CACHE) cada vez que publiques cambios,
   así los alumnos reciben la actualización en vez de la copia vieja. */
const CACHE = 'dentipedia-v49';

const BASE = self.registration.scope;
const ARCHIVOS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-192.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png',
  './Tema3_Interferencias_RC_OC.pdf',
  './Tema4_Trabajo_Balance.pdf',
  './Guia_Articulador_Semiajustable.pdf',
  './res_acabado_final.webp',
  './res_acceso_fresa.webp',
  './res_adhesivo.webp',
  './res_aislamiento.webp',
  './res_cavidad_limpia.webp',
  './res_control.webp',
  './res_dx_exploracion.webp',
  './res_dx_radiografia.webp',
  './res_fotocurado.webp',
  './res_fraguado_liner.webp',
  './res_grabado.webp',
  './res_incrementos.webp',
  './res_oclusion_marcas.webp',
  './res_profundidad.webp',
  './res_proteccion.webp',
  './res_pulido.webp',
  './Manual_Practicas_Oclusion.pdf',
  './Syllabus_Oclusion_2026_V4.pdf',
  './Tema1_Anatomia_ATM.pdf',
  './Tema5_Oclusion_Patologica.pdf',
  './Tema6_Clases_Relaciones_Patologicas.pdf',
  './Tema7_Trastornos_ATM.pdf',
  './Tema8_Trastornos_Musculares.pdf',
  './Tema9_Habitos_Parafuncionales.pdf',
  './Tema11_Ferulas_Oclusales.pdf',
  './foto01_frente_reposo.webp',
  './foto02_frente_sonrisa.webp',
  './foto03_tres_cuartos_der.webp',
  './foto04_perfil_der.webp',
  './foto05_tres_cuartos_izq.webp',
  './foto06_perfil_izq.webp',
  './foto07_frontal_oclusion.webp',
  './foto08_oclusal_sup.webp',
  './foto09_oclusal_inf.webp',
  './foto10_lateral_der.webp',
  './foto11_lateral_izq.webp',
  './foto12_sobremordida.webp',
  './og-dentipedia.jpg',
  './Tema2_Fotografia_Clinica.pdf'
];

self.addEventListener('install', evento => {
  evento.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(ARCHIVOS.map(a => new URL(a, BASE).href)))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())
  );
});

self.addEventListener('activate', evento => {
  evento.waitUntil(
    caches.keys()
      .then(nombres => Promise.all(
        nombres.filter(n => n !== CACHE).map(n => caches.delete(n))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', evento => {
  const req = evento.request;
  if (req.method !== 'GET') return;

  // Documentos (HTML): red primero, para que siempre vean la versión más reciente
  if (req.mode === 'navigate') {
    evento.respondWith(
      fetch(req)
        .then(resp => {
          const copia = resp.clone();
          caches.open(CACHE).then(c => c.put(req, copia));
          return resp;
        })
        .catch(() => caches.match(req).then(r => r || caches.match(new URL('./index.html', BASE).href)))
    );
    return;
  }

  // Resto (iconos, PDFs): caché primero, con respaldo a la red
  evento.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(resp => {
      if (resp && resp.status === 200 && resp.type === 'basic') {
        const copia = resp.clone();
        caches.open(CACHE).then(c => c.put(req, copia));
      }
      return resp;
    }).catch(() => hit))
  );
});

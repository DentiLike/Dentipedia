/* Mike Molares — Service Worker
   Sube la versión (CACHE) cada vez que publiques cambios,
   así los alumnos reciben la actualización en vez de la copia vieja. */
const CACHE = 'mikes-molares-v18';

const BASE = self.registration.scope;
const ARCHIVOS = [
  './',
  './index.html',
  './manifest.json',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/icon-maskable-192.png',
  './assets/icon-maskable-512.png',
  './assets/apple-touch-icon.png',
  './assets/og-dentipedia.jpg',
  './docs/Tema2_Fotografia_Clinica.pdf'
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

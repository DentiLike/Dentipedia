/* Dentipedia — Service Worker v70
   Estrategia: shell primero (arranca offline), contenido en segundo plano.
   Sube CACHE cada vez que publiques. */
const CACHE = 'dentipedia-v70';
const CACHE_SHELL = 'dentipedia-shell-v70';
const CACHE_DATA = 'dentipedia-data-v70';

const BASE = self.registration.scope;

/* Núcleo: lo mínimo para abrir la app sin red */
const SHELL = [
  './',
  './index.html',
  './styles.css',
  './data-temas.js',
  './data-quiz.js',
  './firebase-dentipedia.js',
  './data-casos.js',
  './data-glosario.js',
  './manifest.json',
  './sw.js',
  './favicon-32.png',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-192.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png',
  './logo-uc.png',
  './avatar-dr.png'
];

/* Contenido: PDFs, fotos, recursos (se cachean en segundo plano) */
const DATA = [
  // Vacío a propósito: los PDFs e imágenes NO se precargan.
  // Cada archivo se guarda en caché solo cuando el alumno lo abre,
  // así la app no satura los datos móviles en la primera carga.
  // (El fetch de assets ya cachea al vuelo lo que se use.)
];

function url(path) {
  return new URL(path, BASE).href;
}

/** Cachea uno a uno; no falla el lote si uno falla */
async function cacheOneByOne(cacheName, paths) {
  const cache = await caches.open(cacheName);
  await Promise.all(paths.map(async (p) => {
    try {
      const req = new Request(url(p), { cache: 'reload' });
      const resp = await fetch(req);
      if (resp && resp.ok) await cache.put(req, resp);
    } catch (e) {
      /* ignore individual failures */
    }
  }));
}

self.addEventListener('install', (evento) => {
  evento.waitUntil((async () => {
    // 1) Shell crítico: sin esto no arranca offline
    await cacheOneByOne(CACHE_SHELL, SHELL);
    // Activar de inmediato
    await self.skipWaiting();
    // 2) Ya no precargamos PDFs ni imágenes: se guardan al usarse.
  })());
});

self.addEventListener('activate', (evento) => {
  evento.waitUntil((async () => {
    const keep = new Set([CACHE_SHELL, CACHE_DATA, CACHE]);
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => !keep.has(k)).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

async function fromAnyCache(request) {
  const order = [CACHE_SHELL, CACHE_DATA, CACHE];
  for (const name of order) {
    const hit = await caches.match(request, { cacheName: name });
    if (hit) return hit;
  }
  // match sin restringir cacheName
  return caches.match(request);
}

async function putInShell(request, response) {
  try {
    const cache = await caches.open(CACHE_SHELL);
    await cache.put(request, response);
  } catch (e) {}
}

async function putInData(request, response) {
  try {
    const cache = await caches.open(CACHE_DATA);
    await cache.put(request, response);
  } catch (e) {}
}

self.addEventListener('fetch', (evento) => {
  const req = evento.request;
  if (req.method !== 'GET') return;

  const u = new URL(req.url);
  // Solo mismo origen
  if (u.origin !== self.location.origin) return;

  // Navegación / documento HTML: offline-first con actualización en red
  if (req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html')) {
    evento.respondWith((async () => {
      const cached = await fromAnyCache(req) || await fromAnyCache(url('./index.html'));
      const networkPromise = fetch(req).then(async (resp) => {
        if (resp && resp.ok) {
          await putInShell(req, resp.clone());
          // también index canónico
          try { await putInShell(url('./index.html'), resp.clone()); } catch (e) {}
        }
        return resp;
      }).catch(() => null);

      // Si hay caché, devolver ya (arranque rápido offline)
      if (cached) {
        networkPromise.catch(() => {}); // actualizar en background
        return cached;
      }
      // Sin caché: esperar red o fallar con página mínima
      const net = await networkPromise;
      if (net) return net;
      return new Response(
        '<!DOCTYPE html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Dentipedia</title><style>body{font-family:system-ui;background:#002F55;color:#fff;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;padding:24px;text-align:center}h1{color:#B0BC25;font-size:1.25rem}p{opacity:.85;line-height:1.5}</style></head><body><div><h1>Dentipedia</h1><p>Sin conexión y aún no hay datos guardados.<br>Conéctate una vez para instalar el contenido.</p></div></body></html>',
        { status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
      );
    })());
    return;
  }

  // Assets estáticos: caché primero
  evento.respondWith((async () => {
    const cached = await fromAnyCache(req);
    if (cached) {
      // Revalidar en segundo plano si hay red
      fetch(req).then(async (resp) => {
        if (resp && resp.ok) {
          const path = u.pathname;
          if (/\.(pdf|webp|jpg|jpeg|png)$/i.test(path)) await putInData(req, resp.clone());
          else await putInShell(req, resp.clone());
        }
      }).catch(() => {});
      return cached;
    }
    try {
      const resp = await fetch(req);
      if (resp && resp.ok) {
        const path = u.pathname;
        if (/\.(pdf|webp|jpg|jpeg|png)$/i.test(path)) await putInData(req, resp.clone());
        else await putInShell(req, resp.clone());
      }
      return resp;
    } catch (e) {
      return new Response('', { status: 503, statusText: 'Offline' });
    }
  })());
});

/* Mensaje desde la app: forzar precarga de datos */
self.addEventListener('message', (evento) => {
  if (evento.data === 'PRECACHE_DATA') {
    cacheOneByOne(CACHE_DATA, DATA).then(() => {
      if (evento.ports && evento.ports[0]) evento.ports[0].postMessage({ ok: true });
    }).catch(() => {
      if (evento.ports && evento.ports[0]) evento.ports[0].postMessage({ ok: false });
    });
  }
  if (evento.data === 'SKIP_WAITING') self.skipWaiting();
});

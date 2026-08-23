# Mike Molares — Auxiliar de Oclusión

Plataforma de apoyo académico para la materia de **Oclusión**
Dr. Miguel Alvarado Avilés · Universidad Cuauhtémoc

---

**URL pública:** https://dentipedia.dentilike.com.mx

## Cómo publicarlo en GitHub Pages

1. Sube **todo el contenido de esta carpeta** a tu repositorio, respetando la estructura:

```
index.html
manifest.json
sw.js
assets/
  icon-192.png
  icon-512.png
  icon-maskable-192.png
  icon-maskable-512.png
  apple-touch-icon.png
  favicon-32.png
docs/
  Tema1_Anatomia_ATM.pdf
  Syllabus_Oclusion_2026_V4.pdf
  Manual_Practicas_Oclusion.pdf
```

2. En el repo: **Settings → Pages → Source: Deploy from a branch**, rama `main`, carpeta `/ (root)`.

3. En **Settings → Pages → Custom domain**, escribe `dentipedia.dentilike.com.mx` y guarda.
   (El archivo `CNAME` ya viene incluido, así que puede que aparezca solo.)

4. En **GoDaddy → DNS de dentilike.com.mx**, agrega un registro:
   - Tipo: `CNAME`
   - Nombre: `dentipedia`
   - Valor: `TU-USUARIO.github.io`   ← con el punto final si GoDaddy lo pide
   - TTL: 1 hora

5. Espera a que propague (de 10 min a 1 hora). Cuando GitHub muestre la palomita
   verde, activa **Enforce HTTPS** en Settings → Pages.

> El HTTPS es obligatorio para que la app se pueda instalar en los celulares.

> **Importante:** la instalación como app (PWA) **solo funciona sobre HTTPS**.
> GitHub Pages ya da HTTPS, así que funcionará ahí. Abriendo el archivo
> directo desde el celular NO aparecerá la opción de instalar.

---

## Cómo agregar material nuevo a la Biblioteca

1. Sube el PDF a la carpeta `docs/`.
2. En `index.html`, busca la constante `RECURSOS` y agrega una línea:

```js
const RECURSOS = {
  tema1:     { url: PDF_TEMA1,  label:"Tema 1 · Anatomía ATM", file:"Tema1_Anatomia_ATM.pdf" },
  practicas: { url: PDF_MANUAL, label:"Manual de Prácticas",   file:"Manual_Practicas_Oclusion.pdf" },
  // nuevo:
  tema2:     { url: "docs/NombreDelArchivo.pdf", label:"Tema 2 · Nombre", file:"NombreDelArchivo.pdf" }
};
```

3. En el arreglo `CRONOGRAMA`, agrega `doc:"tema2"` a la sesión que corresponda:

```js
{sem:4, fecha:"01 Sep · Martes", tipo:"Clase", track:"salon", tema:"...", doc:"tema2"},
```

El documento aparecerá automáticamente como botón de descarga en esa sesión.

---

## Cada vez que publiques cambios

Abre `sw.js` y sube el número de versión:

```js
const CACHE = 'mike-molares-v2';   // v1 -> v2 -> v3 ...
```

Si no lo haces, los alumnos que ya instalaron la app seguirán viendo la versión vieja.

---

## Seguridad y privacidad — IMPORTANTE

Este proyecto tiene **dos archivos distintos**:

| Archivo | Para quién | Dónde va |
|---|---|---|
| `index.html` | Alumnos | GitHub Pages (público) |
| `profesor.html` | Dr. Alvarado | **SOLO en su dispositivo. NUNCA se sube.** |

**El archivo público NO contiene una sola línea del panel docente.** No hay
contraseña que adivinar ni pantalla oculta que encontrar: el código sencillamente
no existe ahí.

`profesor.html` viene en la carpeta `privado-profesor/` junto con copias de
`assets/` y `docs/`. Guárdelo en su celular y computadora, y ábralo directamente.
**No lo suba al repositorio.**

### Datos personales

La app **ya no contiene la lista de alumnos**. Cada quien escribe su nombre al
entrar, y ese nombre junto con su avance se guarda **solo en su propio
dispositivo** (localStorage). No se publica ni se envía nada a ningún servidor.

Esto se hizo a propósito: publicar nombres y matrículas de alumnos en un repo
público sería exponer datos personales de terceros.

---

## Accesos

- **Alumnos:** escriben su nombre en `index.html` y entran. Sin matrícula, sin contraseña.
- **Profesor:** abre `profesor.html` (su archivo privado) y entra directo al panel.

## Pendiente

Los quizzes son **diagnóstico, no calificación**: el alumno ve en qué le falta
estudiar. Si quiere reportarle sus dudas al Dr. Alvarado, lo hace con el botón de
WhatsApp al terminar un nivel.

Si en el futuro se quisiera centralizar el avance del grupo haría falta un
servidor. Hoy no existe esa dependencia, y eso es una ventaja: nada que
configurar, nada que pueda filtrarse.

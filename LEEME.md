# Mike Molares — Auxiliar de Oclusión

Plataforma de apoyo académico para la materia de **Oclusión**
Dr. Miguel Alvarado Avilés · Universidad Cuauhtémoc


## Cambios v81 — Avisos arriba del inicio
- Letrero arriba del inicio con avisos **automáticos** tomados del calendario (próximos 14 días): suspensión de clases y próxima evaluación, con "hoy / mañana / en N días". Funciona sin internet.
- **Aviso del docente**: menú ⋮ → 📢 Publicar aviso (o Panel docente → pestaña Aviso). Texto de hasta 240 caracteres, tipo (aviso/urgente) y fecha "mostrar hasta". Se guarda en Firestore (`config/aviso`) y aparece al abrir la app.
- El alumno puede cerrar el letrero con ✕ (reaparece al día siguiente o si cambia el contenido).
- Requiere reglas de Firestore para `config/aviso` (lectura pública, escritura solo docentes).

## Cambios v80 — Leer en la app desde el inicio y navegación con regreso

- **Inicio:** la tarjeta de próxima sesión ahora tiene "Leer en la app" (el mismo material que en Teoría) además de "Descargar PDF".
- **Navegación:** "Volver" regresa un paso (Biblioteca → Tema), el botón/gesto "atrás" del celular hace lo mismo y ya no saca de la app a mitad de camino. Nuevo botón 🏠 en la barra azul para ir al inicio desde cualquier pantalla.
- **Calendario:** las presentaciones de caso clínico pasan al 3 de diciembre. 24 y 26 de noviembre: asesoría del caso. 1 de diciembre: previo (borrador y retroalimentación).

## Cambios v78 — Fecha de examen parcial

- Calendario oficial de exámenes: Oclusión grupo B, martes 27 Oct (3.er parcial).
- La clase de férulas (conceptos) pasa al martes 3 Nov.

## Cambios v77 — Suspensión 29 Oct–2 Nov

- 29 Oct: suspensión de clases. 3 Nov (antes festivo): vuelve a ser clase, tema por confirmar.
- Guarda Michigan en 3 etapas: 5 Nov diseño y encerado · 12 Nov taller de materiales y acrilizado · 19 Nov ajuste y pulido.

## Cambios v76 — Material por práctica

- Listas de materiales para las prácticas del 15 y 22 Oct y las 4 etapas de la guarda Michigan (29 Oct–19 Nov).
- Las etapas 3 y 4 son lista base: falta confirmar tipo de acrílico y técnica.

## Cambios v75 — Laboratorio reprogramado

- 15 Oct: arco facial y registro · 22 Oct: montaje en articulador · 29 Oct–19 Nov: guarda Michigan en 4 etapas.
- Pendiente: reubicar la 2.ª evaluación parcial (antes 15 Oct) y la revisión de pacientes (antes 22 Oct).

## Cambios v74 — Anamnesis del dolor

- Nuevo apartado **🧠 Anamnesis del dolor** (presentación de 25 diapositivas) en el inicio y en los menús ⋮, visible para todos.
- Archivo `Anamnesis_Dolor_Miofascial.html`; en celular avisa que se gire en horizontal y se avanza deslizando.

## Cambios v73 — Glosario emergente en el recorrido docente

- Abreviaturas y símbolos (ACh, AChE, ATP, COX, AINE, PGE₂, CGRP, ATM, SNC, H⁺, K⁺, Ca²⁺, Aδ…) con subrayado punteado: al pasar el cursor o tocar muestran su significado.

## Cambios v72 — Recorrido docente (dolor miofascial)

- Nuevo archivo `Recorrido_Dolor_Miofascial_Docentes.html` (9 pasos + mapa, autocontenido).
- Botón **🔒 Recorrido docente** en la sesión del 13 Oct (junto a Leer en la app / Descargar PDF); solo aparece con sesión de docente.
- Ojo: el archivo está en el repo público; el candado es de interfaz, no de seguridad.
- Estilos del visor integrado (barra Volver/Abrir) que faltaban.

## Cambios v60 — Leer PDF en la app

- Botón **Leer PDF** en biblioteca / sesión (ya no solo descargar).
- Visor integrado con barra: Volver · Descargar · Abrir en otra pestaña.
- Si el celular no muestra el PDF en el marco, el alumno usa **Abrir**.

## Cambios v59 — Offline forzado / arranque rápido

- Service Worker en **2 capas**: shell (app) + datos (PDFs/fotos).
- Instalación **uno a uno** (ya no falla todo el caché si un PDF no baja).
- Navegación **cache-first**: abre offline de inmediato con datos guardados.
- Precarga de contenido en segundo plano tras instalar.
- Banner “Sin conexión · Usando datos guardados”.
- `storage.persist()` para que el sistema no borre el caché.
- Registro del SW al inicio (no espera al evento `load`).

## Cambios v58 — Diagnóstico TTM (Okeson)

- **Tema 13 · Diagnóstico de TTM**: diferencial músculo vs ATM (tabla de 7 criterios), clasificación completa, secuencia clínica y qué NO hacer.
- Integrado desde presentación Okeson 6.ª (historia, end-feel, maloclusión aguda, inflamatorios, hipomovilidad).
- Glosario: end-feel, deflexión, retrodiscitis.
- Quiz: preguntas nuevas de diferencial y miofascial vs dolor local.

## Cambios v57 — Casos en 2 pasos

- Cada caso pregunta primero **diagnóstico** y después **tratamiento**.
- Opciones menos obvias (distractores clínicos reales).
- Resolución completa al final del segundo paso.

## Cambios v56 — Simulador de casos clínicos

- Nueva sección **Simulador de casos clínicos** (botón al inicio + menú).
- 15 casos: 5 básico, 5 intermedio, 5 avanzado.
- Flujo: contexto → hallazgos → decisión → explicación → **resolución del caso**.
- Progreso guardado en el dispositivo del alumno.
- Temas: iatrogenia, clic asintomático, bruxismo, Angle vs Morris, bloqueo cerrado, interferencia de balance, dolor referido, férulas mal indicadas, casos crónicos y rehabilitación (criterios Okeson).

## Cambios v55 (mejoras completas Okeson)

### Nuevos materiales
- **Tema 12 · Criterios de oclusión funcional óptima (Okeson Cap. 5)**: contactos en cierre, guía anterior, lateralidad, oclusión mutuamente protegida, checklist clínico.
- **Ficha Angle vs Morris vs Okeson**: tabla comparativa de 1 página para eliminar la confusión de clases.
- **Ficha Diagnóstico TTM (Okeson)**: secuencia historia → exploración → clasificación músculo/articulación → tratamiento; qué NO hacer; checklist de férula.

### Glosario (67 términos)
- Sinónimos unificados: interferencia de balance = no trabajo; oclusión funcional óptima = mutuamente protegida.
- Nuevos: co-contracción protectora, dolor miofascial, función de grupo, terapia reversible.

### Cuestionarios (536 preguntas)
- Casos clínicos cortos (clic asintomático, dolor + interferencia, qué es FALSO según Okeson).
- Preguntas de errores comunes (férulas, Angle vs Morris).

### Service Worker
- `dentipedia-v55`


---

## Cambios v53–v55 (revisión Okeson)

- **Glosario ampliado** (+11 términos clave de Okeson):
  - Oclusión mutuamente protegida
  - Guía anterior / Guía canina
  - Fuerza lesiva
  - Facetas de desgaste
  - Relación Céntrica (RC) y ORC
  - Dimensión Vertical de Oclusión (DVO)
  - Interferencia oclusal
  - Clasificación de Morris (Clases I-V) y Angle (I-II-III) con advertencia clara de que son distintas
- **Tema 6 actualizado**: se refuerza que Morris ≠ Angle ≠ Okeson, se explica por qué aparecen “clase 4 y 5”, y se vincula con el enfoque de Okeson (capacidad de adaptación y fuerzas lesivas).
- Service Worker actualizado a `dentipedia-v54` (los alumnos recibirán la nueva versión al refrescar).



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

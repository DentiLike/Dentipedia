const TEMAS = {
  atm: {
    nombre: "Tema 1 · Anatomía de la ATM y conceptos básicos",
    corto: "Tema 1",
    titulo: "Anatomía de la ATM y conceptos básicos",
    chip: "Anatomía ATM",
    resumenTitulo: "Anatomía de la ATM y conceptos básicos",
    grupos: [
      {
        kw: ["fosa mandibular","cavidad glenoidea","hueso temporal","eminencia articular","tubérculo articular","porción escamosa"],
        r: `<b>Hueso temporal:</b> la fosa mandibular (cavidad glenoidea) es una depresión cóncava limitada por delante por la eminencia articular y por detrás por la fisura escamotimpánica. Su techo es una lámina ósea delgada, no diseñada para soportar carga directa.<br><br>La eminencia articular (tubérculo articular) es la prominencia convexa; su vertiente posterior es la superficie funcional real sobre la que se traslada el cóndilo y el disco. Entre más inclinada es esta vertiente, más altas pueden ser las cúspides posteriores.`
      },
      {
        kw: ["cóndilo","condilo","apófisis condilar","polo medial","polo lateral"],
        r: `<b>Cóndilo mandibular:</b> forma elíptica, con eje mediolateral de 15-20 mm (mucho más ancho que el anteroposterior, de 8-10 mm). Tiene dos polos: medial (más prominente) y lateral. La superficie articular de carga real está en la porción anterosuperior del cóndilo.`
      },
      {
        kw: ["esfenoides","alas mayores","apófisis pterigoides","pterigoides","espina del esfenoides","esfenomandibular"],
        r: `<b>Esfenoides:</b> hueso central de la base del cráneo, clave para el anclaje muscular mandibular. Las alas mayores (cara infratemporal) dan origen al haz superior del pterigoideo lateral. La lámina lateral de la apófisis pterigoides origina el haz inferior del pterigoideo lateral (cara externa) y el pterigoideo medial (cara interna, fosa pterigoidea). La espina del esfenoides es el punto de inserción craneal del ligamento esfenomandibular.`
      },
      {
        kw: ["maxilar superior","plano oclusal","base ósea fija"],
        r: `El <b>maxilar superior</b> es la base ósea fija del sistema. Su posición tridimensional determina el plano oclusal: es la plataforma contra la que la mandíbula ejerce fuerza.`
      },
      {
        kw: ["atm","articulacion temporomandibular","que es la atm","sistema estomatognatico","que es el sistema estomatognatico","generalidades","definicion"],
        r: `La <b>ATM (articulación temporomandibular)</b> es la articulación que une la mandíbula con el hueso temporal del cráneo. Es una articulación <b>bilateral y sinovial</b>, y su particularidad es que las dos trabajan siempre juntas: no puedes mover una sin la otra.<br><br>Sus componentes principales:<br>
        • <b>Óseos:</b> cóndilo mandibular, fosa mandibular y eminencia articular del temporal.<br>
        • <b>Disco articular:</b> divide la articulación en compartimento supradiscal (traslación) e infradiscal (rotación).<br>
        • <b>Ligamentos:</b> colaterales, temporomandibular, esfenomandibular y estilomandibular.<br>
        • <b>Músculos:</b> masetero, temporal, pterigoideos, suprahioideos e infrahioideos.<br>
        • <b>Inervación e irrigación:</b> nervio auriculotemporal (V3) y ramas de la carótida externa.<br><br>
        Pregúntame por cualquiera de estos componentes en específico y te doy el detalle completo del material.`
      },
      {
        kw: ["musculatura","los musculos","que musculos","hablame de los musculos","miotologia","musculos de la masticacion","pterigoideos","musculos pterigoideos","musculos de la atm"],
        r: `<b>Musculatura de la masticación (miotología):</b> el sistema estomatognático se mueve gracias a varios grupos musculares:<br><br>
        • <b>Masetero</b> y <b>temporal</b>: elevan la mandíbula (cierre).<br>
        • <b>Pterigoideo medial</b>: eleva, formando una "eslinga" con el masetero.<br>
        • <b>Pterigoideo lateral</b> (haz inferior y superior): protrusión, apertura y estabilización del disco.<br>
        • <b>Suprahioideos e infrahioideos</b>: apertura mandibular.<br>
        • <b>Cadena cervical</b> (ECM, trapecio): postura de la cabeza, muy ligada a la oclusión.<br><br>
        Pregúntame por cualquiera en específico (por ejemplo "pterigoideo lateral") y te doy el detalle completo.`
      },
      {
        kw: ["huesos de la atm","osteologia","que huesos participan","estructura osea","los huesos","condilos"],
        r: `<b>Osteología de la ATM:</b> cuatro huesos participan en el sistema: el <b>temporal</b> (fosa mandibular y eminencia articular), la <b>mandíbula</b> (cóndilo), el <b>esfenoides</b> (anclaje muscular) y el <b>maxilar superior</b> (base fija que determina el plano oclusal). Pregúntame por cualquiera en específico para más detalle.`
      },
      {
        kw: ["ligamentos de la atm","que ligamentos","los ligamentos"],
        r: `<b>Ligamentos de la ATM:</b> los <b>colaterales</b> fijan el disco a los polos del cóndilo. El <b>temporomandibular (lateral)</b> protege la zona retrodiscal. Como accesorios: el <b>esfenomandibular</b> limita la apertura máxima y el <b>estilomandibular</b> limita la protrusión extrema.`
      },
      {
        kw: ["masetero"],
        r: `<b>Masetero:</b> va del arco cigomático a la cara externa de la rama y ángulo mandibular. Función: elevación potente de la mandíbula (cierre) y ligera protrusión.`
      },
      {
        kw: ["temporal (músculo)","músculo temporal","fibras anteriores","fibras posteriores del temporal"],
        r: `<b>Temporal (músculo):</b> de la fosa temporal a la apófisis coronoides y borde anterior de la rama. Sus fibras anteriores elevan la mandíbula; las fibras posteriores hacen retrusión estricta.`
      },
      {
        kw: ["pterigoideo medial"],
        r: `<b>Pterigoideo medial:</b> de la fosa pterigoidea del esfenoides a la cara interna del ángulo mandibular. Función: elevación. Forma una "eslinga" muscular junto con el masetero.`
      },
      {
        kw: ["pterigoideo lateral","haz inferior","haz superior"],
        r: `<b>Pterigoideo lateral</b> tiene dos haces con funciones distintas:<br>• <b>Haz inferior</b> (lámina pterigoidea externa → cuello del cóndilo): protrusión y apertura bilateral; lateralidad hacia el lado opuesto si actúa de forma unilateral.<br>• <b>Haz superior</b> (ala mayor del esfenoides → cápsula y margen anterior del disco): estabilizador, se contrae durante el cierre para asentar el disco contra la eminencia.`
      },
      {
        kw: ["suprahioideos","digástrico","milohioideo","geniohioideo","infrahioideos","hueso hioides"],
        r: `<b>Suprahioideos</b> (vientre anterior del digástrico, milohioideo, geniohioideo): traccionan la mandíbula hacia abajo y atrás para la apertura. <b>Infrahioideos:</b> estabilizan el hioides contra la base del cuello, dando el anclaje firme para que los suprahioideos funcionen.`
      },
      {
        kw: ["esternocleidomastoideo","ecm","trapecio","cadena cervical","postura de cabeza adelantada","musculatura nucal"],
        r: `La oclusión depende también de la <b>postura cervical</b>. El ECM (esternón/clavícula → apófisis mastoides) estabiliza el cráneo durante la masticación; alteraciones oclusales suelen causar hipertonía en el ECM. El trapecio y la musculatura nucal mantienen la extensión de la cabeza. Nota clínica: una postura de cabeza adelantada tensa la fascia cervical y los suprahioideos, traccionando la mandíbula hacia abajo y atrás, alterando los contactos oclusales posteriores.`
      },
      {
        kw: ["trigémino","v par craneal","rama mandibular","v3","auriculotemporal","inervación de la atm","propiocepción de la atm","los nervios","nervios de la atm"],
        r: `<b>Inervación:</b> el nervio trigémino (V par), rama mandibular (V3), da toda la inervación motora de los músculos masticatorios. La inervación sensitiva/propioceptiva de la ATM corre principalmente por el nervio auriculotemporal (rama de V3), con aportes menores del masetérico y temporal profundo posterior. Se concentra en cápsula, ligamentos y tejido retrodiscal — <b>el disco articular central no tiene inervación</b>.`
      },
      {
        kw: ["irrigación","carótida externa","arteria temporal superficial","arteria maxilar interna","retorno venoso","plexo venoso pterigoideo","vena retromandibular","riego sanguineo","irrigacion sanguinea"],
        r: `<b>Irrigación:</b> ramas terminales de la carótida externa. Red posterior: arteria temporal superficial. Red anterior e inferior: arteria maxilar interna (ramas timpánica anterior y meníngea media). El retorno venoso va por el plexo venoso pterigoideo hacia la vena retromandibular; el plexo de la zona retrodiscal se ingurgita para ocupar el espacio de la fosa glenoidea durante la traslación condilar.`
      },
      {
        kw: ["disco articular","banda anterior","zona intermedia","banda posterior","compartimento supradiscal","compartimento infradiscal","menisco","meniscos","el disco"],
        r: `<b>Disco articular:</b> fibrocartílago denso que divide la articulación en compartimento supradiscal (traslación) e infradiscal (rotación pura). Su porción de carga es avascular y aneural. Tres zonas: <b>banda anterior</b> (2 mm, fusionada a cápsula y pterigoideo lateral superior), <b>zona intermedia</b> (1 mm, la más delgada, soporta las fuerzas funcionales) y <b>banda posterior</b> (3 mm, tope fisiológico que evita el desplazamiento posterior del cóndilo).`
      },
      {
        kw: ["zona bilaminar","tejido retrodiscal","lámina superior","lámina inferior","elastina","colágeno del disco"],
        r: `<b>Zona bilaminar (tejido retrodiscal):</b> lámina superior (rica en elastina, tracciona el disco hacia atrás al cerrar), lámina inferior (rica en colágeno, ancla el disco al cuello del cóndilo) y el tejido intermedio, muy vascularizado e inervado, sede del plexo venoso.`
      },
      {
        kw: ["líquido sinovial","ácido hialurónico","lubricina","lubricación de límite","lubricación exudativa"],
        r: `<b>Líquido sinovial:</b> ultrafiltrado del plasma con ácido hialurónico (viscosidad) y lubricina. Nutre el disco y da dos tipos de lubricación: de límite (evita fricción en movimiento) y exudativa (absorbe/libera bajo compresión estática).`
      },
      {
        kw: ["ligamento colateral","ligamento temporomandibular","ligamento esfenomandibular","ligamento estilomandibular"],
        r: `<b>Ligamentos:</b> los colaterales (discales) fijan el disco a los polos del cóndilo. El ligamento temporomandibular (lateral) protege la zona retrodiscal limitando el desplazamiento posterior excesivo del cóndilo. Como accesorios: el esfenomandibular limita la apertura máxima y el estilomandibular limita la protrusión extrema.`
      },
      {
        kw: ["esmalte","hidroxiapatita","prismas de esmalte","abfracción","abfracciones"],
        r: `<b>Esmalte:</b> 96% inorgánico (cristales de hidroxiapatita). Sus prismas están dispuestos perpendiculares a la dentina para resistir cargas axiales; las fuerzas laterales generan cizallamiento y abfracciones.`
      },
      {
        kw: ["dentina"],
        r: `<b>Dentina:</b> rica en colágeno, actúa como colchón bioelástico que disipa el estrés por debajo del esmalte.`
      },
      {
        kw: ["ligamento periodontal","lpd","isquemia","reabsorción ósea"],
        r: `<b>Ligamento periodontal (LPD):</b> sistema viscoelástico. Bajo cargas axiales distribuye fluidos y promueve osteogénesis; las fuerzas excéntricas producen isquemia y reabsorción ósea.`
      },
      {
        kw: ["curva de spee","curva de wilson"],
        r: `<b>Curva de Spee</b> (anteroposterior) y <b>curva de Wilson</b> (mediolateral): geometrías de compensación que permiten la desoclusión y centran las fuerzas masticatorias.`
      },
      {
        kw: ["relación céntrica","rc vs mic","máxima intercuspidación","mic"],
        r: `<b>RC vs MIC:</b> la Relación Céntrica es la posición articular superoanterior ortopédicamente estable; la Máxima Intercuspidación es el engranaje dentario. Son dos formas distintas de definir "dónde cierra" la mandíbula.`
      },
      {
        kw: ["mecanorreceptores","guía anterior","reflejo miotático","reflejo nociceptivo","propiocepción"],
        r: `Los mecanorreceptores periodontales de la <b>guía anterior</b> inhiben el trigémino para proteger el sistema. El reflejo miotático mantiene el tono postural; el reflejo nociceptivo protege contra traumas súbitos.`
      },
      {
        kw: ["ginglimo","ginglimo artrodial","ginglimoartrodial","que es ginglimo"],
        r: `<b>Gínglimo-artrodial</b> describe que la ATM combina <b>dos tipos de movimiento</b> en una sola articulación:<br><br>
        • <b>Gínglimo</b> = articulación en bisagra. Es la <b>rotación</b> pura, que ocurre en el compartimento <b>infradiscal</b> (entre cóndilo y disco).<br>
        • <b>Artrodial</b> = articulación deslizante. Es la <b>traslación</b>, que ocurre en el compartimento <b>supradiscal</b> (entre disco y temporal).<br><br>
        Por eso la mandíbula no solo gira como bisagra: en la apertura amplia el cóndilo además se desliza hacia adelante sobre la eminencia articular.`
      },
      {
        kw: ["bicondilea","que es bicondilea","bicondilar"],
        r: `<b>Bicondílea</b> significa que existen <b>dos cóndilos que funcionan como una sola unidad</b>: el derecho y el izquierdo.<br><br>
        La consecuencia clínica es la clave: <b>no puedes mover una ATM sin mover la otra</b>. Cualquier alteración en un lado repercute forzosamente en el contralateral — por eso un problema articular unilateral casi nunca se queda unilateral.`
      },
      {
        kw: ["diartrodial","que es diartrodial","diartrosis"],
        r: `<b>Diartrodial</b> quiere decir que es una <b>articulación sinovial de movimiento libre</b>. Sus características:<br><br>
        • Cavidad articular delimitada por una <b>cápsula</b>.<br>
        • <b>Membrana sinovial</b> que produce líquido sinovial.<br>
        • Superficies articulares que se deslizan con mínima fricción.<br><br>
        En la ATM esta cavidad está además <b>dividida en dos</b> por el disco articular, lo que la hace distinta de la mayoría de las diartrosis del cuerpo.`
      },
      {
        kw: ["articulacion compleja","porque es compleja","que la hace compleja"],
        r: `Se le llama <b>compleja</b> porque <b>tiene un disco articular interpuesto</b> entre las dos superficies óseas.<br><br>
        En anatomía, una articulación "simple" tiene dos superficies en contacto directo; una "compleja" tiene un tercer elemento entre ellas. El disco convierte a la ATM en dos articulaciones funcionales superpuestas: la supradiscal (traslación) y la infradiscal (rotación).`
      },
      {
        kw: ["sinovial","membrana sinovial","que es sinovial"],
        r: `<b>Sinovial</b> significa que la articulación tiene una <b>membrana que produce líquido sinovial</b>, un ultrafiltrado del plasma con ácido hialurónico y lubricina.<br><br>
        Ese líquido cumple dos funciones: <b>nutre el disco</b> (que es avascular) y da <b>lubricación</b> de dos tipos — de límite, que evita fricción durante el movimiento, y exudativa, que absorbe y libera líquido bajo compresión estática.`
      },
      {
        kw: ["oclusion","que es la oclusion","oclusion dentaria","definicion de oclusion"],
        r: `En el material, la <b>oclusión dentaria</b> se define como el <b>factor externo no articular</b> que dicta los movimientos y la estabilidad de todo el sistema estomatognático.<br><br>
        Esa es la idea central de la materia: la ATM no se mueve libremente como otras articulaciones — su función está condicionada por cómo engranan los dientes. Por eso el sistema estomatognático se considera una <b>unidad funcional indivisible</b>: articulación, músculos y dientes no se pueden analizar por separado.<br><br>
        Si quieres el detalle de cómo se clasifica la ATM, pregúntame por <b>gínglimo-artrodial</b>, <b>bicondílea</b> o <b>diartrodial</b>.`
      },
      {
        kw: ["concepto fundamental de oclusión","unidad funcional","clasificacion de la atm","como se clasifica la atm"],
        r: `El sistema estomatognático es una <b>unidad funcional indivisible</b>: sus movimientos y estabilidad están dictados por un factor externo no articular, la oclusión dentaria. La ATM es una articulación bicondílea, diartrodial, gínglimo-artrodial y compleja.`
      }
    ]
  }  ,
  foto: {
    nombre: "Tema 2 · Fotografía clínica dental",
    corto: "Tema 2",
    titulo: "Fotografía clínica dental",
    chip: "Fotografía clínica",
    resumenTitulo: "Protocolo de fotografía clínica dental",
    grupos: [
      {
        kw: ["para que sirve la fotografia","importancia de la fotografia","fotografia clinica","por que fotografiar","utilidad de la fotografia"],
        r: `La <b>fotografía clínica</b> es una herramienta <b>diagnóstica, legal y de comunicación</b> indispensable en la odontología moderna.<br><br>
        Sirve para:<br>
        • Analizar tejidos duros y blandos <b>en ausencia del paciente</b>.<br>
        • Es el <b>estándar de oro</b> para presentación de casos.<br>
        • Planificar tratamientos (ortodoncia y ortopedia maxilar).<br>
        • Dar <b>seguimiento longitudinal</b> del caso.<br><br>
        Pregúntame por el triángulo de exposición, las tomas extraorales o las intraorales.`
      },
      {
        kw: ["triangulo de exposicion","exposicion fotografica","pilares de la exposicion","conceptos basicos de fotografia"],
        r: `El <b>triángulo de exposición</b> son los tres pilares que hay que dominar para lograr fotos nítidas y estandarizadas:<br><br>
        • <b>Apertura del diafragma (f-stop):</b> controla la profundidad de campo. Cerrada (f/22 a f/32) para intraorales; media (f/8 a f/11) para extraorales.<br>
        • <b>Velocidad de obturación:</b> de 1/125 a 1/200, para evitar trepidación y sincronizar con el flash.<br>
        • <b>Sensibilidad ISO:</b> lo más baja posible (ISO 100 o 200) para evitar ruido visual.`
      },
      {
        kw: ["apertura","diafragma","f stop","fstop","profundidad de campo","f22","f32"],
        r: `La <b>apertura del diafragma (f-stop)</b> controla la <b>profundidad de campo</b>, es decir, qué tanto de la imagen queda enfocado.<br><br>
        • <b>Intraorales:</b> aperturas cerradas, <b>f/22 a f/32</b> — se necesita nitidez desde la línea media hasta los molares.<br>
        • <b>Extraorales:</b> aperturas medias, <b>f/8 a f/11</b>.`
      },
      {
        kw: ["velocidad de obturacion","obturacion","shutter","trepidacion","sincronizar flash"],
        r: `La <b>velocidad de obturación</b> recomendada es de <b>1/125 a 1/200</b>. Ese rango cumple dos cosas: evita la <b>trepidación</b> (foto movida) y permite <b>sincronizar con el flash</b>.`
      },
      {
        kw: ["iso","sensibilidad","ruido visual","ruido"],
        r: `El <b>ISO</b> debe mantenerse <b>lo más bajo posible: ISO 100 o 200</b>. Subirlo introduce <b>"ruido" visual</b>, que arruina el detalle diagnóstico de la imagen.`
      },
      {
        kw: ["tipos de fotografia","registro de caso","fotografia estandarizada","macro","estetica","artistica","diferencia entre fotografias"],
        r: `Hay <b>dos tipos</b> de fotografía en odontología, con fines distintos:<br><br>
        • <b>Registro de caso clínico (estandarizada):</b> imágenes objetivas con encuadres y proporciones fijas (<b>1:3</b> sonrisas, <b>1:10</b> rostro). Fin puramente diagnóstico y de <b>protección médico-legal</b>. Muestran la realidad clínica sin buscar el factor artístico.<br><br>
        • <b>Macro / estética / artística:</b> detalle extremo (<b>1:1</b>). Usa contrastadores y luces direccionales para resaltar texturas, mamelones y translucidez. Enfocada a laboratorios o marketing.`
      },
      {
        kw: ["fotografias extraorales","extraoral","para que sirven las extraorales","objetivo extraoral"],
        r: `Las <b>fotografías extraorales</b> sirven para evaluar la <b>simetría facial</b>, las proporciones de los tercios faciales, el biotipo facial, el soporte labial y el perfil del paciente. Son la base del diagnóstico ortodóntico y ortopédico integral.<br><br>
        Son tres tomas principales: <b>frontal en reposo</b>, <b>frontal en sonrisa</b> y <b>perfil derecho en reposo</b>.`
      },
      {
        kw: ["posicion del paciente","plano de frankfort","frankfort","como colocar al paciente","postura del paciente","entorno","fondo"],
        r: `<b>Posición del paciente y entorno para extraorales:</b><br><br>
        • De pie o sentado con <b>postura natural</b>, mirando a un punto fijo al horizonte.<br>
        • El <b>Plano de Frankfort</b> (tragus – borde infraorbitario) debe estar <b>estrictamente paralelo al piso</b>.<br>
        • <b>Rostro despejado:</b> cabello recogido detrás de las orejas, frente descubierta, sin lentes ni distractores.<br>
        • <b>Evitar sombras:</b> separar al paciente al menos <b>50 cm del fondo</b> (blanco, gris neutro o negro), y usar un segundo flash esclavo apuntando al fondo o flashes gemelos simétricos.`
      },
      {
        kw: ["frontal en reposo","reposo","competencia labial","mentoniano"],
        r: `<b>Frontal en reposo</b><br><br>
        • <b>Enfoque:</b> directo a los ojos del paciente.<br>
        • <b>Qué se debe ver:</b> rostro completo desde el nacimiento del cabello hasta la base del cuello. Orejas simétricamente visibles. Labios en descanso, sin forzar el sellado.<br>
        • <b>Para qué:</b> valorar asimetrías transversales, competencia labial, hipertonía del músculo mentoniano y la exposición en milímetros de los incisivos superiores en reposo.`
      },
      {
        kw: ["frontal en sonrisa","sonrisa","linea de sonrisa","corredor bucal","espacio negativo"],
        r: `<b>Frontal en sonrisa</b><br><br>
        • <b>Enfoque:</b> directo a los ojos del paciente.<br>
        • <b>Qué se debe ver:</b> expresión natural de alegría (sonrisa social plena), márgenes gingivales, espacio negativo y curva de la sonrisa.<br>
        • <b>Para qué:</b> analizar la <b>línea de sonrisa</b> (alta, media o baja), el <b>corredor bucal</b>, la consonancia del arco dentario con el labio inferior y la desviación de las líneas medias dentales respecto a la facial.`
      },
      {
        kw: ["perfil","perfil derecho","ricketts","linea estetica","angulo nasolabial","convexidad facial","submentoniano"],
        r: `<b>Perfil (derecho) en reposo</b><br><br>
        • <b>Enfoque:</b> a la zona del pómulo / ojo del lado derecho.<br>
        • <b>Qué se debe ver:</b> perfil estricto — <b>no se deben ver las pestañas del ojo izquierdo</b>. Comprende desde la glabela hasta el cartílago tiroides.<br>
        • <b>Para qué:</b> evaluar la convexidad facial, el ángulo nasolabial, la proyección del mentón, el perfil labial (competencia y límite en la <b>Línea Estética de Ricketts</b>) y el ángulo submentoniano.`
      },
      {
        kw: ["fotografias intraorales","intraoral","objetivo intraoral","para que sirven las intraorales"],
        r: `Las <b>fotografías intraorales</b> registran la <b>oclusión estática (MIC)</b>, el estado periodontal, la clasificación de Angle, las sobremordidas, la forma de las arcadas y las malposiciones dentarias.<br><br>
        Son cinco tomas: <b>frontal en oclusión</b>, <b>lateral derecha</b>, <b>lateral izquierda</b>, <b>oclusal superior</b> y <b>oclusal inferior</b>.`
      },
      {
        kw: ["condiciones clinicas","jeringa triple","secar","reflejos","saliva","guantes","dedos","limpieza"],
        r: `<b>Condiciones clínicas obligatorias para intraorales:</b><br><br>
        • Los dientes deben estar <b>limpios</b>.<br>
        • Es vital usar la <b>jeringa triple para secar</b> las superficies dentales y evitar <b>reflejos especulares de saliva</b>.<br>
        • Los <b>dedos o guantes del operador nunca deben aparecer</b> en la fotografía terminada.`
      },
      {
        kw: ["frontal en oclusion","mic","overbite","sobremordida vertical","lineas medias","retractor en c"],
        r: `<b>Frontal en oclusión (MIC)</b><br><br>
        • <b>Enfoque:</b> puntual en los incisivos laterales o caninos (<b>f/22 o f/32</b>) para asegurar nitidez desde la línea media hasta los molares.<br>
        • <b>Qué se debe ver:</b> desde los incisivos centrales hasta los primeros molares. El <b>plano oclusal perfectamente horizontal</b>. Los <b>retractores en "C"</b> deben despejar completamente comisuras y frenillos laterales.<br>
        • <b>Para qué:</b> evaluar el <b>overbite</b>, la coincidencia de líneas medias dentales, la nivelación de márgenes gingivales, el biotipo periodontal y el apiñamiento anterior.`
      },
      {
        kw: ["lateral derecha","lateral izquierda","laterales","relacion molar","angle","overjet","resalte","retractor en v","curva de spee"],
        r: `<b>Laterales derecha e izquierda (MIC)</b><br><br>
        • <b>Enfoque:</b> sobre la cúspide del canino o en el primer premolar.<br>
        • <b>Qué se debe ver:</b> plano oclusal estricto y horizontal, desde el incisivo lateral/central hasta el primer o segundo molar. El <b>retractor en "V" del lado a fotografiar tracciona fuertemente</b> la comisura hacia atrás; el del <b>lado opuesto solo se sostiene</b>, sin ejercer tensión.<br>
        • <b>Para qué:</b> determinar la <b>Relación Molar y Canina de Angle</b>, evaluar el <b>overjet</b>, la <b>Curva de Spee</b> y la calidad de la intercuspidación lateral.`
      },
      {
        kw: ["oclusal superior","oclusal inferior","oclusales","espejo","vaho","espejo empanado","forma de arcada","criterios de rechazo"],
        r: `<b>Oclusal superior e inferior</b><br><br>
        • <b>Enfoque:</b> central en la zona de los premolares, usando el <b>espejo fotográfico oclusal</b>.<br>
        • <b>Qué se debe ver:</b> la arcada completa en forma de <b>"U" o "V"</b>, desde los incisivos centrales hasta las caras oclusales de los últimos molares erupcionados. El lente debe estar <b>perpendicular al reflejo del espejo</b>.<br>
        • <b>Criterios de rechazo:</b> cortes en los bordes incisales, <b>vaho</b> (se evita calentando el espejo o echando aire con la jeringa) o la aparición del labio/nariz del paciente.<br>
        • <b>Para qué:</b> analizar forma de la arcada, constricción maxilar/mandibular, simetría transversal, giroversiones, apiñamiento o espaciamientos y morfología oclusal.`
      }
    ]
  }  ,
  interf: {
    nombre: "Tema 3 · Etiología de las interferencias oclusales",
    corto: "Tema 3",
    titulo: "Etiología de las interferencias oclusales",
    chip: "Interferencias y RC",
    resumenTitulo: "Etiología de las interferencias oclusales · RC y OC",
    grupos: [
      {
        kw: ["relación céntrica rc"],
        r: `<b>Relación céntrica (RC)</b><br><br>Posición <b>musculoesquelética estable</b> de la mandíbula, en la que los cóndilos se sitúan en su posición <b>más superior y anterior</b> dentro de la fosa, apoyados contra la vertiente posterior de la eminencia articular, <b>con el disco articular correctamente interpuesto</b>. Es una posición <b>articular</b>, no dentaria: existe aunque el paciente no tenga dientes. Es <b>registrable y reproducible</b>, y por eso sirve como punto de partida para el diagnóstico y para el montaje en articulador.`
      },
      {
        kw: ["máxima intercuspidación mic", "oclusión céntrica oc", "oclusión céntrica oc o máxima intercuspidación mic"],
        r: `<b>Oclusión céntrica (OC) o máxima intercuspidación (MIC)</b><br><br>Posición en la que los dientes presentan el <b>máximo número de contactos</b> entre sí. Es una posición <b>dentaria</b>: la determinan los dientes, no la articulación. Es la posición que el paciente encuentra por sí solo al morder.`
      },
      {
        kw: ["relación céntrica coincidente"],
        r: `<b>Relación céntrica coincidente</b><br><br>Cuando RC y MIC ocurren en la misma posición. Se considera la situación <b>más favorable</b>, porque el cierre dentario ocurre justo donde la articulación es estable. Se estima que solo una minoría de la población la presenta de forma natural.`
      },
      {
        kw: ["deslizamiento en centrica","deslizamiento","discrepancia rc mic","slide en centrica","primer contacto al cerrar"],
        r: `<b>Discrepancia RC–MIC y deslizamiento en céntrica</b><br><br>Cuando ambas posiciones no coinciden, al cerrar en RC aparece un <b>primer contacto</b> y la mandíbula <b>se desliza</b> hasta alcanzar la MIC. Ese recorrido se llama <b>deslizamiento en céntrica</b>. Se describe en tres sentidos: <b>vertical, horizontal y transversal</b>. Un deslizamiento pequeño y estrictamente anterosuperior suele tolerarse; uno amplio o con <b>componente lateral</b> es el de mayor significado patológico.`
      },
      {
        kw: ["contacto prematuro"],
        r: `<b>Contacto prematuro</b><br><br>Es el <b>primer contacto dentario</b> que ocurre durante el cierre en relación céntrica, antes de alcanzar la máxima intercuspidación. Es un fenómeno de la <b>posición de cierre</b>.`
      },
      {
        kw: ["interferencia oclusal"],
        r: `<b>Interferencia oclusal</b><br><br>Es el contacto que <b>obstaculiza o desvía</b> los movimientos mandibulares <b>excéntricos</b> (lateralidad y protrusión), impidiendo un deslizamiento armónico. La diferencia práctica: el prematuro estorba al <b>cerrar</b>; la interferencia estorba al <b>moverse</b>.`
      },
      {
        kw: ["interferencias centricas","interferencia centrica"],
        r: `<b>Interferencias céntricas</b><br><br>Contactos prematuros en el cierre en RC. Provocan el deslizamiento hacia MIC y, con él, una desviación mandibular repetida en cada deglución.`
      },
      {
        kw: ["lado de trabajo","interferencia del lado de trabajo"],
        r: `<b>Del lado de trabajo</b><br><br>Contacto en el lado hacia el que se desplaza la mandíbula, que <b>impide la desoclusión</b> armónica de los dientes posteriores. Suele darse entre vertientes internas de cúspides vestibulares superiores y vertientes externas de cúspides vestibulares inferiores.`
      },
      {
        kw: ["de no trabajo", "del lado de balance", "del lado de balance o de no trabajo"],
        r: `<b>Del lado de balance o de no trabajo</b><br><br>Contacto en el lado <b>opuesto</b> al movimiento. Es la <b>más lesiva</b> de todas: se produce en una zona cercana al fulcro articular, donde la palanca genera cargas elevadas, y ocurre además con los músculos elevadores en contracción. Se asocia con dolor muscular y articular.`
      },
      {
        kw: ["protrusivas"],
        r: `<b>Protrusivas</b><br><br>Contactos posteriores durante el movimiento protrusivo, que <b>deberían haber desocluido</b> por acción de la guía anterior. Indican una guía anterior insuficiente o dientes posteriores sobreerupcionados.`
      },
      {
        kw: ["causas dentarias","causas por los dientes","extrusion del antagonista","migracion dentaria"],
        r: `<b>Causas dentarias</b><br><br>• Caries y pérdida de estructura que modifica la anatomía oclusal.<br>• <b>Migraciones por ausencias no rehabilitadas</b>: inclinación de los dientes vecinos y <b>extrusión del antagonista</b>, que es una de las causas más frecuentes.<br>• Malposiciones y giroversiones.<br>• Erupción de terceros molares en mala posición.<br>• Desgastes irregulares que crean facetas no funcionales.`
      },
      {
        kw: ["causas iatrogenicas","iatrogenia","restauracion alta","causas por el operador"],
        r: `<b>Causas iatrogénicas</b><br><br>• <b>Restauraciones altas</b> o sin ajuste oclusal verificado con papel articular.<br>• Restauraciones con anatomía oclusal deficiente o puntos de contacto mal restablecidos.<br>• Prótesis fija o removible mal diseñada.<br>• Tratamientos de ortodoncia sin acabado oclusal adecuado.<br><i>Esta categoría es la más relevante para el alumno: es la que él mismo puede provocar o evitar.</i>`
      },
      {
        kw: ["causas periodontales"],
        r: `<b>Causas periodontales</b><br><br>Movilidad dentaria y <b>migración patológica</b> por pérdida de soporte, que modifican la posición de los dientes y generan contactos nuevos.`
      },
      {
        kw: ["causas articulares y musculares"],
        r: `<b>Causas articulares y musculares</b><br><br>Cambios en la posición condilar por <b>desplazamiento discal</b>, remodelado o artropatías, que modifican la relación entre las arcadas. También la hipertonía muscular sostenida.`
      },
      {
        kw: ["causas del desarrollo y esqueléticas"],
        r: `<b>Causas del desarrollo y esqueléticas</b><br><br>Discrepancias maxilomandibulares y maloclusiones que condicionan una relación oclusal desfavorable desde el inicio.`
      },
      {
        kw: ["hábitos parafuncionales"],
        r: `<b>Hábitos parafuncionales</b><br><br>El bruxismo y el apretamiento no solo son consecuencia: también <b>generan</b> desgastes y facetas que crean nuevas interferencias, cerrando un círculo de daño.`
      },
      {
        kw: ["sobre el diente y el periodonto"],
        r: `<b>Sobre el diente y el periodonto</b><br><br>Facetas de desgaste, <b>abfracciones cervicales</b>, fisuras y fracturas, hipersensibilidad, movilidad dentaria y ensanchamiento del espacio del ligamento periodontal (<b>trauma oclusal</b>).`
      },
      {
        kw: ["sobre el músculo"],
        r: `<b>Sobre el músculo</b><br><br>Hipertonía, fatiga y dolor miofascial, particularmente en masetero y temporal, y en la cadena cervical por compensación postural.`
      },
      {
        kw: ["sobre la articulación"],
        r: `<b>Sobre la articulación</b><br><br>Sobrecarga condilar, alteración de la posición del disco y sintomatología articular.`
      },
      {
        kw: ["exploración clínica"],
        r: `<b>Exploración clínica</b><br><br>• <b>Manipulación bimanual</b> para llevar la mandíbula a RC sin forzar.<br>• <b>Desprogramación</b> previa (JIG anterior, tope de Lucia o algodón entre incisivos) para eliminar la memoria muscular que lleva al paciente a su MIC habitual.<br>• <b>Papel articular de dos colores</b>: un color para céntrica, otro para excéntricos.<br>• Observar la <b>dirección y magnitud</b> del deslizamiento RC–MIC.`
      },
      {
        kw: ["registros y análisis"],
        r: `<b>Registros y análisis</b><br><br>Modelos de estudio <b>montados en articulador semiajustable</b> con arco facial y registro en RC. Es el único método que permite analizar los contactos sin la influencia de la propiocepción periodontal del paciente, que tiende a evitar el contacto molesto.`
      },
      {
        kw: ["función canina"],
        r: `<b>Función canina</b><br><br>En lateralidad, solo los <b>caninos</b> mantienen contacto y desocluyen todos los posteriores. El canino tiene raíz larga, buena proporción corona-raíz y abundantes propioceptores.`
      },
      {
        kw: ["función de grupo"],
        r: `<b>Función de grupo</b><br><br>El contacto en lateralidad se <b>reparte</b> entre varios dientes del lado de trabajo, distribuyendo la carga. Es una alternativa aceptable cuando el canino no puede asumir la guía.`
      },
      {
        kw: ["guía anterior"],
        r: `<b>Guía anterior</b><br><br>En protrusión, los <b>dientes anteriores</b> deben producir la desoclusión inmediata de los posteriores. Es un mecanismo <b>protector</b>: los mecanorreceptores periodontales anteriores inhiben la actividad de los músculos elevadores.`
      },
      {
        kw: ["principio general"],
        r: `<b>Principio general</b><br><br>En un esquema oclusal favorable: contactos <b>simultáneos, bilaterales y de igual intensidad</b> en céntrica, con cargas dirigidas por el <b>eje axial</b> de los dientes posteriores, y <b>desoclusión inmediata de posteriores</b> en todos los movimientos excéntricos.`
      }
    ]
  }  ,
  balance: {
    nombre: "Tema 4 · Lado de trabajo y lado de balance",
    corto: "Tema 4",
    titulo: "Lado de trabajo y lado de balance",
    chip: "Trabajo y balance",
    resumenTitulo: "Análisis de interferencias · trabajo y balance",
    grupos: [
      {
        kw: ["movimiento de lateralidad", "lateralidad", "que es la lateralidad"],
        r: `<b>Definición</b><br><br>Es el desplazamiento de la mandíbula hacia un lado. Es un movimiento <b>asimétrico</b>: los dos cóndilos hacen cosas distintas al mismo tiempo. Entender esa asimetría es la clave de todo el tema.`
      },
      {
        kw: ["lado de trabajo y balance", "cuales son los dos lados", "trabajo o balance"],
        r: `<b>Los dos lados</b><br><br>• <b>Lado de trabajo</b>: aquel <b>hacia donde</b> se desplaza la mandíbula. También se le llama lado activo o de rotación.<br>• <b>Lado de balance</b> o <b>de no trabajo</b>: el lado <b>contrario</b> al movimiento. También se le llama lado de orbitación o lado inactivo.<br><br>Regla práctica: si la mandíbula va hacia la derecha, el lado <b>derecho</b> es de trabajo y el <b>izquierdo</b> es de balance.`
      },
      {
        kw: ["condilo de trabajo", "condilo rotante", "rotacion condilar"],
        r: `<b>Cóndilo de trabajo (rotante)</b><br><br>Permanece prácticamente en su sitio y <b>rota</b> sobre su eje vertical. Al mismo tiempo puede efectuar un pequeño desplazamiento lateral hacia afuera conocido como <b>movimiento de Bennett</b> (desplazamiento lateral inmediato o progresivo, según el caso).`
      },
      {
        kw: ["condilo de balance", "condilo orbitante", "angulo de bennett"],
        r: `<b>Cóndilo de balance (orbitante)</b><br><br>Se desplaza <b>hacia abajo, adelante y hacia adentro</b>, recorriendo la vertiente posterior de la eminencia articular. El <b>ángulo de Bennett</b> describe la desviación hacia medial de esa trayectoria respecto al plano sagital.`
      },
      {
        kw: ["asimetria del movimiento", "por que no tocan en balance"],
        r: `<b>Consecuencia clínica de la asimetría</b><br><br>Como el cóndilo de balance <b>desciende</b>, del lado de balance se genera un <b>espacio</b> entre las arcadas. Por eso, en condiciones normales, <b>los dientes de ese lado no deben tocarse</b>.`
      },
      {
        kw: ["contacto en el lado de trabajo", "que pasa en trabajo"],
        r: `<b>En el lado de trabajo</b><br><br>El contacto es <b>esperado y funcional</b>, y puede darse de dos formas:<br>• <b>Función canina</b>: solo el canino mantiene contacto y desocluye a todos los posteriores.<br>• <b>Función de grupo</b>: el contacto se reparte entre canino, premolares y en ocasiones la cúspide mesiovestibular del primer molar.<br><br>El contacto normal ocurre entre las <b>vertientes internas de las cúspides vestibulares superiores</b> y las <b>vertientes externas de las cúspides vestibulares inferiores</b>.`
      },
      {
        kw: ["contacto en el lado de balance", "que pasa en balance"],
        r: `<b>En el lado de balance</b><br><br><b>No debe haber ningún contacto.</b> Cualquier toque en este lado se considera interferencia, sin excepción. Es el criterio más rotundo del análisis oclusal.`
      },
      {
        kw: ["donde se localizan las interferencias de trabajo"],
        r: `<b>Dónde se localizan</b><br><br>Habitualmente entre vertientes internas de cúspides vestibulares superiores y vertientes externas de cúspides vestibulares inferiores, en premolares y molares.`
      },
      {
        kw: ["cuando el contacto de trabajo es interferencia"],
        r: `<b>Por qué son interferencia si el contacto es esperado</b><br><br>Porque lo que se busca es una <b>desoclusión progresiva y armónica</b> de los posteriores. Cuando un diente posterior sostiene el contacto e <b>impide que los demás desocluyan</b>, deja de ser función y se convierte en obstáculo.`
      },
      {
        kw: ["efectos de las interferencias"],
        r: `<b>Efectos</b><br><br>Sobrecarga localizada, facetas de desgaste en las vertientes implicadas, movilidad del diente afectado y fatiga muscular del mismo lado.`
      },
      {
        kw: ["por que balance es lesiva", "interferencia mas lesiva"],
        r: `<b>Por qué son las más lesivas</b><br><br>Concurren tres factores:<br>• Se producen <b>cerca del fulcro articular</b>, donde el sistema actúa como palanca y multiplica la fuerza sobre el diente que contacta.<br>• Ocurren con los <b>músculos elevadores en plena contracción</b>.<br>• El paciente <b>no las percibe</b>, porque están fuera de su patrón consciente de masticación.`
      },
      {
        kw: ["donde aparecen las interferencias de balance", "tercer molar interferencia"],
        r: `<b>Dónde aparecen con más frecuencia</b><br><br>En la zona más posterior: segundos y terceros molares. Un tercer molar mal posicionado es sospechoso habitual, precisamente por su cercanía a la articulación.`
      },
      {
        kw: ["como analizar interferencias", "procedimiento de analisis", "papel articular dos colores"],
        r: `<b>Procedimiento</b><br><br>1. Secar las superficies oclusales.<br>2. Marcar primero la <b>céntrica</b> con papel articular de un color.<br>3. Cambiar al <b>segundo color</b> y pedir movimientos de lateralidad derecha e izquierda.<br>4. Repetir en protrusión.<br>5. Registrar en el odontograma qué diente y qué vertiente marcó, y en qué movimiento.`
      },
      {
        kw: ["interpretar las marcas", "que significa la marca"],
        r: `<b>Interpretación de las marcas</b><br><br>Una marca en el lado de trabajo puede ser función; una marca en el lado de balance <b>siempre</b> es interferencia. De ahí la importancia de usar dos colores: sin ellos no se distingue qué contacto corresponde a qué movimiento.`
      },
      {
        kw: ["limitacion en boca", "propiocepcion evita el contacto"],
        r: `<b>Limitación de la exploración en boca</b><br><br>La propiocepción periodontal hace que el paciente <b>evite instintivamente</b> el contacto molesto, así que puede no reproducir el movimiento completo. Por eso el análisis se complementa con <b>modelos montados en articulador semiajustable</b>, que carecen de ese reflejo.`
      },
      {
        kw: ["que se requiere para el montaje", "arco facial y registro"],
        r: `<b>Qué se requiere</b><br><br>Modelos montados con <b>arco facial</b> y <b>registro en relación céntrica</b>. Sin esos dos elementos, el análisis de movimientos excéntricos no es válido.`
      },
      {
        kw: ["que se observa en el articulador"],
        r: `<b>Qué se observa</b><br><br>Al simular la lateralidad se identifica con claridad si algún diente del lado de balance mantiene contacto, y si la desoclusión del lado de trabajo es progresiva o queda retenida por un solo diente.`
      },
      {
        kw: ["valor didactico del articulador"],
        r: `<b>Valor didáctico</b><br><br>Es el ejercicio que permite <b>ver</b> lo que en boca solo se intuye. Comparar lo marcado en el paciente con lo observado en el articulador es la mejor forma de educar el criterio.`
      }
    ]
  },

  patologica: {
    nombre: "Tema 5 · Oclusión patológica",
    corto: "Tema 5",
    titulo: "Oclusión patológica: causas directas e indirectas",
    chip: "Oclusión patológica",
    resumenTitulo: "Oclusión patológica · causas directas e indirectas",
    grupos: [
      { kw:["que es oclusion patologica","oclusion patologica","definicion de oclusion patologica"],
        r:"<b>Definición</b><br><br>Es aquella oclusión que <b>supera la capacidad de adaptación</b> del sistema estomatognático y produce daño en alguno de sus componentes: dientes, periodonto, músculos o articulación.<br><br>Ojo con esto: no toda oclusión ideal es sana ni toda maloclusión es patológica. Lo que define lo patológico no es la forma, es el <b>daño</b>. Un paciente con apiñamiento y sin signos de daño no tiene oclusión patológica; uno con oclusión aparentemente normal pero con desgaste severo y dolor muscular, sí." },
      { kw:["diferencia entre maloclusion y oclusion patologica","maloclusion vs patologica"],
        r:"<b>No son lo mismo</b><br><br>• <b>Maloclusión</b>: una desviación de la relación dentaria considerada normal. Es un criterio <b>morfológico</b>.<br>• <b>Oclusión patológica</b>: una oclusión que está causando daño. Es un criterio <b>funcional y biológico</b>.<br><br>Puede haber maloclusión sin patología y patología sin maloclusión evidente. Por eso el diagnóstico no se hace solo mirando los modelos." },
      { kw:["capacidad de adaptacion","adaptacion del sistema","tolerancia fisiologica"],
        r:"<b>La clave está en la adaptación</b><br><br>El sistema estomatognático tolera bastante. Ante una fuerza anormal puede adaptarse con remodelado óseo, desgaste fisiológico o cambios musculares, y seguir funcionando sin síntomas.<br><br>La patología aparece cuando la demanda <b>supera</b> esa capacidad. Esa capacidad varía entre personas: por eso dos pacientes con la misma interferencia pueden tener uno un cuadro doloroso y el otro nada." },
      { kw:["causas directas","cuales son las causas directas"],
        r:"<b>Causas directas</b><br><br>Son las que actúan <b>sobre la oclusión misma</b> y alteran el contacto entre los dientes:<br><br>• Interferencias oclusales en céntrica, trabajo o balance<br>• Contactos prematuros<br>• Pérdida dentaria no rehabilitada, con migración y extrusión<br>• Restauraciones en sobreoclusión o con anatomía incorrecta<br>• Desgaste dentario que altera las guías<br>• Tratamientos protésicos u ortodóncicos mal terminados<br>• Fracturas dentarias o radiculares" },
      { kw:["causas indirectas","cuales son las causas indirectas"],
        r:"<b>Causas indirectas</b><br><br>No alteran el contacto dentario, pero <b>modifican la carga</b> que ese contacto recibe:<br><br>• Hábitos parafuncionales: bruxismo y apretamiento<br>• Estrés y alteraciones del sueño<br>• Trastornos de la ATM previos<br>• Alteraciones posturales y respiración bucal<br>• Enfermedad periodontal, que reduce el soporte<br>• Deglución atípica y otros hábitos linguales<br>• Factores sistémicos como artritis o enfermedades del colágeno<br><br>Suelen ser las más difíciles de controlar, porque no se resuelven con ajuste oclusal." },
      { kw:["signos de oclusion patologica","como se detecta","hallazgos clinicos"],
        r:"<b>Qué buscar en la exploración</b><br><br>• <b>Dentario</b>: facetas de desgaste, abfracciones, fracturas de cúspides, movilidad<br>• <b>Periodontal</b>: ensanchamiento del ligamento en radiografía, migración dentaria, recesiones<br>• <b>Muscular</b>: dolor a la palpación, hipertrofia maseterina, fatiga al masticar<br>• <b>Articular</b>: ruidos, limitación de apertura, desviación al abrir, dolor preauricular<br><br>Ningún signo aislado hace el diagnóstico. Lo que lo hace es el <b>patrón</b>." },
      { kw:["trauma oclusal","trauma primario y secundario"],
        r:"<b>Trauma oclusal</b><br><br>Es la lesión del periodonto por fuerzas oclusales excesivas. Se divide en dos:<br><br>• <b>Trauma primario</b>: fuerza <b>excesiva</b> sobre un periodonto <b>sano</b>. Ejemplo típico: una restauración alta.<br>• <b>Trauma secundario</b>: fuerza <b>normal</b> sobre un periodonto <b>disminuido</b> por enfermedad periodontal previa.<br><br>La distinción importa porque el tratamiento cambia: en el primario ajustas la oclusión; en el secundario primero tienes que tratar la periodontitis." },
      { kw:["tratamiento de oclusion patologica","como se trata","plan de tratamiento"],
        r:"<b>Secuencia de manejo</b><br><br>1. <b>Diagnóstico</b> completo: historia, exploración, modelos montados, análisis oclusal<br>2. <b>Control de la causa indirecta</b> cuando existe: manejo del bruxismo, del estrés, de la periodontitis<br>3. <b>Terapia reversible</b> primero: férula oclusal, educación, fisioterapia<br>4. <b>Terapia irreversible</b> solo después y con indicación clara: ajuste oclusal, rehabilitación, ortodoncia<br><br>La regla de oro es empezar por lo reversible. Si desgastas esmalte sin diagnóstico, no hay marcha atrás." }
    ]
  },
  clases: {
    nombre: "Tema 6 · Clasificación de relaciones patológicas",
    corto: "Tema 6",
    titulo: "Clasificación de Morris de las relaciones patológicas",
    chip: "Clases I a V",
    resumenTitulo: "Clasificación de Morris de las relaciones patológicas",
    grupos: [
      { kw:["clasificacion de relaciones patologicas","clases i a v","cuales son las clases","clasificacion de morris","morris"],
        r:"<b>Clasificación de Morris</b><br><br>Está basada en las investigaciones del Dr. H. G. Morris. Sirve para entender cómo la presencia de <b>obstáculos físicos</b> predispone a que una oclusión se vuelva patológica.<br><br>• <b>Clase I</b> · relación protrusiva<br>• <b>Clase II</b> · relación retrusiva<br>• <b>Clase III</b> · relación vertical aumentada<br>• <b>Clase IV</b> · relación latero-protrusiva (relaciones laterales)<br>• <b>Clase V</b> · relación vertical disminuida<br><br>La presencia de <b>factores emocionales</b> en el cuadro clínico agrava y dificulta el tratamiento.<br><br><i>Fuente: Martínez Ross E. Rehabilitación y reconstrucción oclusal. Ediciones Cuéllar.</i>" },
      { kw:["clase i protrusiva","relacion protrusiva","clase i morris"],
        r:"<b>Clase I · Relación protrusiva</b><br><br>Cuando la mandíbula se acerca a su cierre oclusal, encuentra una <b>prematuridad, generalmente unilateral</b>, que la obliga a desviarse en dirección <b>lateroprotrusiva</b>.<br><br>Como consecuencia, los cóndilos se desplazan a <b>posiciones ectópicas</b>, lo que predispone al establecimiento de una oclusión no orgánica.<br><br>En un gran número de casos la prematuridad se encuentra entre los <b>primeros premolares</b>.<br><br>⚠️ Puede confundirse con una <b>Clase III de Angle</b> y con una <b>oclusión cruzada anterior</b>." },
      { kw:["clase ii retrusiva","relacion retrusiva","clase ii morris"],
        r:"<b>Clase II · Relación retrusiva</b><br><br>Existen <b>contactos distales</b> que obligan a la mandíbula a un <b>deslizamiento posterior</b> al cerrar, y los cóndilos son forzados a otra posición." },
      { kw:["clase iii vertical aumentada","dimension vertical aumentada","clase iii morris","supraoclusion"],
        r:"<b>Clase III · Relación vertical aumentada</b><br><br>Está ocasionada, la mayoría de las veces, por <b>obturaciones o prótesis colocadas en supraoclusión</b>.<br><br>Es decir, es una relación que con frecuencia se produce en el consultorio. Por eso importa verificar la oclusión de toda restauración antes de despedir al paciente." },
      { kw:["clase iv latero protrusiva","relacion lateroprotrusiva","relaciones laterales","clase iv morris","oclusion cruzada posterior"],
        r:"<b>Clase IV · Relación latero-protrusiva</b><br><i>También llamada relaciones laterales.</i><br><br>La mandíbula es desviada hacia la derecha o hacia la izquierda cuando el paciente hace el cierre final.<br><br>Se presenta en individuos con <b>oclusión cruzada posterior</b>, en la región de premolares o de molares. Al ir a ocluir, las cúspides antagonistas entran en contacto y desvían la mandíbula a una posición lateroprotrusiva, donde termina el cierre.<br><br>Esto impone un <b>esfuerzo muscular continuo</b> y mantiene en <b>alerta al sistema neuromuscular</b>, con consecuencias patológicas en articulaciones y dientes." },
      { kw:["clase v vertical disminuida","dimension vertical disminuida","clase v morris","colapso de mordida"],
        r:"<b>Clase V · Relación vertical disminuida</b><br><br>Puede ser causada por:<br>• <b>Pérdida o falta de piezas posteriores</b>, unilateral o bilateral<br>• <b>Desgaste oclusal o incisal excesivo</b><br>• <b>Erupción parcial</b> de la dentadura permanente<br><br>Cuando hay masticación unilateral, el cóndilo puede desviarse <b>hacia atrás y hacia la línea media del lado donde no existen dientes</b>, por la contracción muscular sin apoyo dentario." },
      { kw:["diferencia con angle","morris vs angle","no confundir con angle"],
        r:"<b>Morris no es Angle</b><br><br>Son dos clasificaciones distintas que comparten números:<br><br>• <b>Angle</b> describe la relación <b>anteroposterior entre los primeros molares</b>. Es morfológica.<br>• <b>Morris</b> describe los <b>obstáculos que desvían la mandíbula</b> al cerrar. Es funcional.<br><br>La confusión es real: la <b>Clase I de Morris</b> puede parecer una <b>Clase III de Angle</b>. Por eso, al hablar de clases, siempre hay que especificar de qué clasificación." }
    ]
  },
  atmtrast: {
    nombre: "Tema 7 · Trastornos de la ATM",
    corto: "Tema 7",
    titulo: "Trastornos del complejo articular",
    chip: "Trastornos ATM",
    resumenTitulo: "Trastornos de la articulación temporomandibular",
    grupos: [
      { kw:["trastornos de la atm","clasificacion de trastornos atm","tipos de trastornos"],
        r:"<b>Panorama general</b><br><br>Los trastornos temporomandibulares se agrupan en tres grandes bloques:<br><br>• <b>Alteraciones del complejo cóndilo-disco</b>: desplazamientos y luxaciones del disco<br>• <b>Incompatibilidad estructural</b> entre superficies articulares: alteraciones morfológicas, adherencias, subluxación<br>• <b>Trastornos inflamatorios</b>: sinovitis, capsulitis, retrodiscitis, artritis<br><br>A esto se suman los trastornos musculares, que se ven en el Tema 8 y que en la práctica son los más frecuentes." },
      { kw:["desplazamiento del disco","luxacion discal con reduccion","clic articular"],
        r:"<b>Desplazamiento discal con reducción</b><br><br>El disco está desplazado, casi siempre hacia <b>adelante y adentro</b>, cuando la boca está cerrada. Al abrir, el cóndilo lo recaptura y el disco vuelve a su posición: eso produce el <b>clic de apertura</b>. Al cerrar, el disco se vuelve a desplazar y suele haber un segundo clic, más suave, el <b>clic recíproco</b>.<br><br>Rasgos: apertura conservada, chasquido reproducible, dolor variable. La presencia de clic recíproco es lo que confirma la reducción." },
      { kw:["luxacion sin reduccion","bloqueo cerrado","closed lock"],
        r:"<b>Desplazamiento discal sin reducción</b><br><br>El disco está desplazado y el cóndilo <b>ya no logra recapturarlo</b> al abrir. El disco se convierte en un obstáculo mecánico.<br><br>Signos clave:<br>• Apertura <b>limitada</b>, típicamente por debajo de 30 mm<br>• <b>Desviación</b> de la línea media hacia el lado afectado al abrir<br>• <b>Desaparición del clic</b> que el paciente tenía antes<br>• Dolor al forzar la apertura<br><br>Que el clic desaparezca no es mejoría: suele ser progresión del cuadro. Es un dato que hay que preguntar dirigidamente." },
      { kw:["incompatibilidad de superficies","alteraciones morfologicas","adherencias","adhesiones","que son las adherencias","diferencia entre adherencia y adhesion"],
        r:"<b>Incompatibilidad estructural</b><br><br>Ocurre cuando las superficies articulares pierden su relación normal de deslizamiento.<br><br>• <b>Alteraciones morfológicas</b>: cambios de forma del cóndilo, la eminencia o el disco, por desarrollo, desgaste o remodelado. Producen ruidos reproducibles siempre en el mismo punto de la apertura.<br>• <b>Adherencias</b>: unión temporal entre superficies por falta de lubricación. Suelen ceder con el movimiento.<br>• <b>Adhesiones</b>: unión fibrosa <b>permanente</b>. No ceden solas y limitan de forma persistente." },
      { kw:["subluxacion","luxacion mandibular","hipermovilidad"],
        r:"<b>Subluxación y luxación</b><br><br>• <b>Subluxación</b>: el cóndilo sobrepasa la eminencia articular en apertura amplia, pero el paciente <b>puede volver solo</b>. Se acompaña de un salto y a veces un ruido sordo. Es un cuadro de hipermovilidad.<br>• <b>Luxación</b>: el cóndilo queda <b>bloqueado</b> por delante de la eminencia y el paciente <b>no puede cerrar</b> sin ayuda. Requiere reducción manual.<br><br>La diferencia práctica es esa: si vuelve solo es subluxación, si necesita maniobra es luxación." },
      { kw:["sinovitis y capsulitis","inflamacion articular"],
        r:"<b>Sinovitis y capsulitis</b><br><br>• <b>Sinovitis</b>: inflamación de la membrana sinovial. Dolor articular localizado, que aumenta con la función.<br>• <b>Capsulitis</b>: inflamación de la cápsula articular. Dolor a la palpación del polo lateral del cóndilo y a los movimientos que la tensan.<br><br>Ambas comparten un dato útil: puede aparecer una <b>mordida abierta posterior del lado afectado</b>, porque el derrame separa las superficies y desplaza el cóndilo hacia abajo." },
      { kw:["retrodiscitis","tejido retrodiscal"],
        r:"<b>Retrodiscitis</b><br><br>Inflamación de los tejidos retrodiscales, la zona bilaminar por detrás del disco. Es un tejido muy vascularizado e inervado, así que duele bastante.<br><br>Causas: traumatismo directo en el mentón, desplazamiento posterior del cóndilo, o una relación retrusiva mantenida.<br><br>Signo típico: dolor que aumenta al apretar los dientes, y mordida abierta posterior del lado afectado por el edema." },
      { kw:["poliartritis","artritis","osteoartritis atm","crepitacion","que es la crepitacion","ruido de arena","cambios degenerativos"],
        r:"<b>Artritis y poliartritis</b><br><br>• <b>Osteoartritis</b>: proceso degenerativo por sobrecarga. Crepitación, dolor de larga evolución y cambios óseos en imagen.<br>• <b>Poliartritis</b>: la ATM se afecta dentro de una enfermedad <b>sistémica</b>, como artritis reumatoide, psoriásica o lupus. Casi siempre es bilateral y se acompaña de afectación de otras articulaciones.<br><br>Dato relevante: en la artritis reumatoide juvenil el daño condilar puede alterar el crecimiento mandibular y producir micrognatia. Ante sospecha de poliartritis, interconsulta con reumatología." },
      { kw:["tendinitis temporal","tendinitis del temporal"],
        r:"<b>Tendinitis del temporal</b><br><br>Inflamación del tendón del músculo temporal en su inserción sobre la apófisis coronoides.<br><br>Se presenta como dolor en la región temporal que puede confundirse con cefalea o incluso con dolor dentario del maxilar. Aumenta con la palpación de la coronoides por vía intraoral y con la función.<br><br>Es un buen ejemplo de por qué el dolor orofacial exige diagnóstico diferencial: más de un paciente ha recibido tratamiento de conductos por un dolor que era muscular o tendinoso." },
      { kw:["exploracion de atm","como explorar la atm","palpacion articular","apertura maxima","cuanto debe abrir","rango de movimiento","lateralidad normal"],
        r:"<b>Exploración básica</b><br><br>• <b>Apertura máxima</b>: normal entre 40 y 55 mm interincisal. Menos de 40 mm es limitación.<br>• <b>Lateralidades y protrusiva</b>: se espera alrededor de 8 a 12 mm.<br>• <b>Trayectoria de apertura</b>: recta, desviada o en S. Una desviación que se corrige sugiere reducción discal; una que persiste sugiere restricción.<br>• <b>Palpación</b>: polo lateral del cóndilo y vía auricular.<br>• <b>Ruidos</b>: clic contra crepitación. El clic sugiere problema discal; la crepitación, cambio degenerativo.<br><br>Todo se registra con números, no con adjetivos." }
    ]
  },

  musculares: {
    nombre: "Tema 8 · Trastornos musculares",
    corto: "Tema 8",
    titulo: "Dolor muscular local, mioespasmos y dolor miofascial",
    chip: "Trastornos musculares",
    resumenTitulo: "Trastornos musculares masticatorios",
    grupos: [
      { kw:["trastornos musculares","dolor muscular masticatorio","tipos de dolor muscular"],
        r:"<b>Panorama</b><br><br>Los trastornos musculares son la causa <b>más frecuente</b> de dolor en el sistema masticatorio, por encima de los articulares. Los tres cuadros del programa son:<br><br>• <b>Dolor muscular local</b><br>• <b>Mioespasmo</b><br>• <b>Dolor miofascial</b><br><br>Se distinguen por la duración, la presencia de contracción y la existencia de puntos gatillo. Diferenciarlos importa porque el manejo cambia." },
      { kw:["dolor muscular local","mialgia local"],
        r:"<b>Dolor muscular local</b><br><br>Es la respuesta inicial del músculo a una sobrecarga o a un traumatismo. Corresponde a una mialgia no inflamatoria.<br><br>Características:<br>• Dolor <b>a la palpación</b> del músculo afectado<br>• Aumenta con la función y disminuye con el reposo<br>• Puede haber leve limitación de apertura<br>• <b>No</b> hay puntos gatillo ni dolor referido<br>• Es de instalación reciente<br><br>Es el cuadro de mejor pronóstico. Suele ceder retirando la causa y con manejo conservador." },
      { kw:["mioespasmo","espasmo muscular","contraccion involuntaria"],
        r:"<b>Mioespasmo</b><br><br>Contracción <b>involuntaria, súbita y sostenida</b> del músculo, de origen en el sistema nervioso central.<br><br>Características:<br>• Inicio <b>brusco</b><br>• Limitación <b>marcada</b> de la apertura<br>• Músculo firme y doloroso a la palpación<br>• Puede haber cambio agudo en la oclusión, porque el músculo contraído desplaza la mandíbula<br>• Duración corta, de horas a días<br><br>Es el que más asusta al paciente por lo repentino. Un mioespasmo del pterigoideo lateral inferior produce mordida abierta posterior del lado contrario." },
      { kw:["dolor miofascial","puntos gatillo","trigger points"],
        r:"<b>Dolor miofascial</b><br><br>Es un dolor muscular <b>regional y crónico</b> caracterizado por la presencia de <b>puntos gatillo</b>: bandas tensas dentro del músculo que, al palparse, reproducen un dolor <b>referido</b> a distancia.<br><br>Características:<br>• Evolución prolongada<br>• Dolor referido con patrón reproducible<br>• Sensación de fatiga y rigidez<br>• Frecuentemente asociado a estrés y a alteraciones del sueño<br><br>Lo que lo define y lo distingue de los otros dos es el <b>punto gatillo con dolor referido</b>." },
      { kw:["dolor referido","patrones de dolor referido"],
        r:"<b>Dolor referido</b><br><br>Es dolor que se percibe en un sitio <b>distinto</b> de donde está el origen. Explica muchos diagnósticos equivocados.<br><br>Patrones frecuentes:<br>• <b>Masetero</b> → dientes posteriores, oído, región mandibular<br>• <b>Temporal</b> → región temporal, dientes superiores, detrás del ojo<br>• <b>Esternocleidomastoideo</b> → cara, oído, región frontal<br>• <b>Pterigoideo lateral</b> → región del seno maxilar y ATM<br><br>De ahí la advertencia clásica: hay pacientes tratados endodónticamente por un dolor que era del masetero. Palpa antes de instrumentar." },
      { kw:["palpacion muscular","como palpar los musculos","exploracion muscular"],
        r:"<b>Cómo palpar</b><br><br>Presión firme y constante, aproximadamente 1 a 2 kg, sostenida entre 2 y 5 segundos, y siempre bilateral para comparar.<br><br>Músculos a explorar:<br>• <b>Masetero</b>: superficial y profundo, extraoral<br>• <b>Temporal</b>: haces anterior, medio y posterior<br>• <b>Pterigoideo medial</b>: intraoral, cara interna de la rama<br>• <b>Esternocleidomastoideo</b> y <b>trapecio</b>: cervicales, se exploran porque refieren a la cara<br><br>Registra si hay dolor, si hay dolor referido y a dónde refiere. Esa última parte es la que orienta el diagnóstico." },
      { kw:["tratamiento de trastornos musculares","manejo del dolor muscular"],
        r:"<b>Manejo</b><br><br>Siempre empezando por lo reversible:<br><br>• <b>Educación</b>: explicar el cuadro, retirar hábitos, dieta blanda temporal<br>• <b>Termoterapia</b> y ejercicios de estiramiento controlado<br>• <b>Férula oclusal</b> de estabilización<br>• <b>Fisioterapia</b><br>• <b>Farmacológico</b>: analgésicos, relajantes musculares en cuadros agudos<br>• <b>Manejo del estrés</b> y del sueño, que suelen ser el motor de fondo<br><br>Solo después, y con diagnóstico firme, se plantea terapia irreversible. La toxina botulínica es coadyuvante, no primera línea." }
    ]
  },
  habitos: {
    nombre: "Tema 9 · Hábitos parafuncionales",
    corto: "Tema 9",
    titulo: "Bruxismo, apretamiento y deglución",
    chip: "Hábitos parafuncionales",
    resumenTitulo: "Hábitos parafuncionales y deglución",
    grupos: [
      { kw:["que es parafuncion","hábitos parafuncionales","funcion vs parafuncion"],
        r:"<b>Función y parafunción</b><br><br>• La <b>función</b> es la actividad con propósito: masticar, deglutir, hablar. Sus contactos son breves e intermitentes, y las fuerzas se distribuyen.<br>• La <b>parafunción</b> es actividad <b>sin propósito funcional</b>. Sus contactos son prolongados y sostenidos, con fuerzas mayores y más concentradas.<br><br>La diferencia crítica es el tiempo. En masticación los dientes contactan pocos minutos al día; en parafunción pueden contactar horas. Eso es lo que rebasa la capacidad de adaptación." },
      { kw:["bruxismo","que es el bruxismo","tipos de bruxismo"],
        r:"<b>Bruxismo</b><br><br>Actividad repetitiva de la musculatura masticatoria caracterizada por <b>apretar o rechinar</b> los dientes.<br><br>Se clasifica por el momento:<br>• <b>Bruxismo del sueño</b>: actividad rítmica, se considera un fenómeno de origen central asociado a microdespertares<br>• <b>Bruxismo de vigilia</b>: predomina el apretamiento, muy ligado a estrés y concentración<br><br>Un punto que conviene tener claro: el consenso actual considera el bruxismo un <b>comportamiento</b>, no una enfermedad en sí. Puede ser factor de riesgo, y en algunos casos hasta protector frente a la apnea." },
      { kw:["apretamiento dental","clenching","apretamiento vs rechinamiento"],
        r:"<b>Apretamiento y rechinamiento</b><br><br>• <b>Apretamiento</b>: fuerza <b>estática</b>, sin desplazamiento. Predomina en vigilia. Produce dolor muscular, abfracciones y line alba en carrillo, pero poco desgaste.<br>• <b>Rechinamiento</b>: fuerza <b>dinámica</b>, con movimiento excéntrico. Predomina en sueño. Produce <b>facetas de desgaste</b> planas y brillantes que coinciden entre arcadas.<br><br>El dato que los diferencia en clínica es el desgaste: si hay facetas coincidentes, hubo movimiento." },
      { kw:["signos de bruxismo","como detectar bruxismo","diagnostico de bruxismo"],
        r:"<b>Signos a buscar</b><br><br>• Facetas de desgaste que <b>coinciden</b> al llevar los modelos a la posición excéntrica<br>• Hipertrofia maseterina<br>• Línea alba en la mucosa yugal e indentaciones en el borde lateral de la lengua<br>• Abfracciones cervicales<br>• Fracturas de cúspides o de restauraciones repetidas<br>• Dolor muscular matutino y cefalea al despertar<br>• Movilidad dentaria sin causa periodontal<br><br>El diagnóstico definitivo del bruxismo del sueño requiere polisomnografía; en consulta hablamos de bruxismo <b>probable</b> cuando hay signos clínicos más reporte del paciente." },
      { kw:["deglucion tipica","deglucion normal","deglucion madura"],
        r:"<b>Deglución típica</b><br><br>Es la deglución <b>madura</b>, la que se establece tras la transición de la infantil.<br><br>Características:<br>• Dientes en <b>contacto</b> durante la deglución<br>• Punta de la lengua apoyada en la <b>papila retroincisiva</b>, detrás de los incisivos superiores<br>• Contracción de los <b>elevadores</b> mandibulares<br>• <b>Sin</b> participación de la musculatura perioral<br><br>Se degluten alrededor de 600 a 1000 veces al día, así que un patrón alterado tiene efecto acumulativo importante." },
      { kw:["deglucion atipica","deglucion infantil","empuje lingual"],
        r:"<b>Deglución atípica</b><br><br>Persistencia del patrón infantil más allá de la edad esperada.<br><br>Características:<br>• Lengua <b>interpuesta</b> entre las arcadas<br>• Dientes <b>sin contacto</b> al deglutir<br>• Contracción evidente de la musculatura <b>perioral</b>: se ve el mentón arrugado y los labios tensos<br>• A veces movimiento compensatorio de cabeza<br><br>Consecuencias: mordida abierta anterior, protrusión de incisivos, mordida cruzada posterior por falta de estímulo transversal, y recidiva ortodóncica si no se corrige. Suele asociarse a respiración bucal, deglución con biberón prolongada o amígdalas hipertróficas." },
      { kw:["tratamiento de habitos","manejo del bruxismo","como tratar los habitos"],
        r:"<b>Manejo</b><br><br>Para bruxismo y apretamiento:<br>• Educación y toma de conciencia del hábito<br>• Higiene del sueño y manejo del estrés<br>• <b>Férula de estabilización</b>, que protege pero no cura el hábito<br>• Control de factores como cafeína, alcohol, tabaco y ciertos fármacos<br>• Descartar apnea del sueño cuando hay indicios<br><br>Para deglución atípica:<br>• <b>Terapia miofuncional</b> con fonoaudiología<br>• Corrección de la causa: respiración bucal, obstrucción de vía aérea<br>• Ortodoncia una vez controlado el hábito, no antes<br><br>En ambos casos: si no se controla la causa, la recidiva es cuestión de tiempo." }
    ]
  },
  articulador: {
    nombre: "Tema 10 · Montaje en articulador",
    corto: "Tema 10",
    titulo: "Arco facial, céntrica y posición habitual",
    chip: "Articulador",
    resumenTitulo: "Montaje de modelos en articulador semiajustable",
    grupos: [
      { kw:["que es un articulador","para que sirve el articulador","tipos de articulador"],
        r:"<b>Qué es y para qué sirve</b><br><br>Instrumento mecánico que reproduce la relación maxilomandibular y permite simular los movimientos fuera de la boca. La razón de fondo: en boca <b>no puedes ver</b> los contactos posteriores durante una lateralidad, porque la lengua y el carrillo estorban.<br><br>Tipos:<br>• <b>No ajustable</b> o de bisagra: solo abre y cierra<br>• <b>Semiajustable</b>: ajusta trayectoria condílea y ángulo de Bennett. Es el del curso<br>• <b>Totalmente ajustable</b>: reproduce el movimiento individual con registros pantográficos" },
      { kw:["arco facial","para que sirve el arco facial","que registra el arco facial"],
        r:"<b>Arco facial</b><br><br>Aquí está el malentendido más común: el arco facial <b>no registra la oclusión</b>. Registra la posición del maxilar superior respecto al <b>eje de bisagra terminal</b>.<br><br>Si montas sin arco facial, el radio de rotación del articulador no coincide con el del paciente y el arco de cierre es distinto. Los contactos que observes serán falsos, y el error crece mientras más te alejes de la posición de registro.<br><br>Puede ser <b>arbitrario</b>, con puntos anatómicos promedio, o <b>cinemático</b>, localizando el eje real." },
      { kw:["relacion centrica","que es relacion centrica","rc"],
        r:"<b>Relación céntrica</b><br><br>Posición determinada por la <b>articulación</b>, no por los dientes: cóndilos en su posición más superoanterior contra la vertiente posterior de la eminencia, con el disco correctamente interpuesto.<br><br>Es <b>independiente</b> del contacto dentario y, sobre todo, es <b>reproducible</b>. Por eso sirve como punto de partida del diagnóstico y como referencia para rehabilitar." },
      { kw:["posicion habitual","maxima intercuspidacion","mic"],
        r:"<b>Posición habitual de conveniencia</b><br><br>También llamada máxima intercuspidación. Es donde el paciente cierra <b>por costumbre</b>, guiado por sus propios dientes.<br><br>La determina la <b>oclusión</b>, no la articulación. Puede coincidir con relación céntrica o estar desplazada respecto a ella. Es una posición adaptada, no necesariamente sana." },
      { kw:["deslizamiento en centrica","diferencia entre rc y mic","slide"],
        r:"<b>Deslizamiento en céntrica</b><br><br>Es el recorrido de la mandíbula desde el primer contacto en relación céntrica hasta la posición habitual.<br><br>• Pequeño y <b>simétrico</b>, en el plano sagital, se considera fisiológico<br>• <b>Amplio</b> o con componente <b>lateral</b> marcado es un hallazgo que debe documentarse<br><br>Un deslizamiento lateral indica que el paciente está esquivando una interferencia, y ese desvío tiene costo muscular y articular. Es el vínculo directo con el tema de interferencias." },
      { kw:["desprogramacion","como desprogramar","por que desprogramar"],
        r:"<b>Desprogramación</b><br><br>La musculatura tiene <b>memoria</b> de la posición habitual. Si le pides al paciente que cierre sin más, va a su mordida de siempre y registras la posición equivocada.<br><br>Métodos:<br>• Rodillo de algodón o tope anterior durante algunos minutos<br>• Jig de Lucia<br>• Manipulación bimanual de Dawson<br><br>Sin desprogramar, tu registro de céntrica no es de céntrica. Es el error más frecuente de la práctica." },
      { kw:["errores de montaje","que arruina el montaje","fallas comunes"],
        r:"<b>Errores que arruinan el montaje</b><br><br>• <b>Presionar al cerrar</b> sobre la cera: se hunde el registro y baja la dimensión vertical<br>• <b>No apoyar el modelo en voladizo</b>: el peso del yeso fresco lo desvía<br>• <b>Burbujas o nódulos</b> en cúspides: contactos falsos<br>• <b>Omitir retenciones</b> en la base: el modelo se desprende de la platina<br>• <b>Mover el arco</b> al apretar tornillos: plano de referencia inclinado<br>• <b>Manipular antes del fraguado completo</b>: micromovimientos que no notas<br><br>Sobre la cera: la rosa toda estación se deforma a temperatura bucal. Para un montaje que vas a analizar, considera cera azul de registro o silicona." },
      { kw:["yeso para montaje","que yeso se usa","tipo de yeso"],
        r:"<b>Yesos del montaje</b><br><br>• El <b>modelo</b> se vacía en <b>tipo III</b>, yeso piedra: resiste el recorte y reproduce el detalle necesario<br>• El <b>montaje y el zócalo</b> se hacen en <b>tipo II</b>, yeso París: más blando y fácil de recortar<br><br>Usar tipo III para montar es desperdiciar material y trabajo de recorte. Usar tipo II para el modelo es garantizar que se fracture." }
    ]
  },
  ferulas: {
    nombre: "Tema 11 · Férulas oclusales",
    corto: "Tema 11",
    titulo: "Estabilización, reposicionamiento y plano posterior",
    chip: "Férulas oclusales",
    resumenTitulo: "Férulas oclusales · tipos e indicaciones",
    grupos: [
      { kw:["que es una ferula oclusal","para que sirve una ferula","guarda oclusal"],
        r:"<b>Qué es una férula</b><br><br>Aparato removible, generalmente de acrílico duro, que cubre las superficies oclusales de una arcada. Su función es <b>modificar temporalmente</b> la relación oclusal y distribuir las fuerzas.<br><br>Su mayor virtud es que es <b>reversible</b>. Por eso es la primera línea de tratamiento antes de cualquier terapia irreversible: si no funciona, se retira y el paciente queda como estaba.<br><br>Objetivos: proteger estructuras, relajar musculatura, reposicionar la mandíbula y servir como herramienta <b>diagnóstica</b>." },
      { kw:["ferula de estabilizacion","ferula miorrelajante","michigan"],
        r:"<b>Férula de estabilización</b><br><br>Es la más usada y la más versátil. También llamada miorrelajante o tipo Michigan.<br><br>Características:<br>• Cobertura <b>total</b> de la arcada<br>• Contactos <b>uniformes y simultáneos</b> de todos los dientes antagonistas en relación céntrica<br>• <b>Guía anterior</b> que desocluye los posteriores en movimientos excéntricos<br>• <b>Guía canina</b> en lateralidad<br>• Superficie plana y lisa<br><br>Indicaciones: bruxismo, dolor muscular, protección de restauraciones extensas. Uso habitual nocturno." },
      { kw:["ferula de reposicionamiento anterior","reposicionamiento","ferula de avance"],
        r:"<b>Férula de reposicionamiento anterior</b><br><br>Reposiciona la mandíbula <b>hacia adelante</b> para recapturar el disco desplazado y mantener una relación cóndilo-disco más favorable.<br><br>Indicación principal: desplazamiento discal <b>con reducción</b>, especialmente cuando hay dolor o el clic es reciente.<br><br>Advertencias que debes tener presentes:<br>• Uso <b>limitado en tiempo</b>, con controles frecuentes<br>• El uso prolongado puede producir <b>mordida abierta posterior</b> irreversible<br>• No es para todos los pacientes con clic: muchos clics asintomáticos no requieren tratamiento<br><br>Es la férula que más vigilancia exige." },
      { kw:["plano de mordida posterior","plano posterior","ferula posterior"],
        r:"<b>Plano de mordida posterior</b><br><br>Cubre únicamente los <b>dientes posteriores</b>, habitualmente con dos segmentos unidos por una barra lingual.<br><br>Indicaciones: casos que requieren cambios importantes de dimensión vertical o de posición mandibular, y algunos cuadros de mordida profunda severa.<br><br>Riesgo importante: al no cubrir los anteriores, permite la <b>extrusión</b> de los dientes no cubiertos. Es de uso <b>corto y muy controlado</b>. No es una férula de uso prolongado." },
      { kw:["plano de mordida anterior","nti","jig"],
        r:"<b>Plano de mordida anterior</b><br><br>Cubre solo los dientes anteriores. Produce desoclusión posterior inmediata y relajación muscular rápida, y por eso también se usa como desprogramador.<br><br>El mismo riesgo, invertido: permite <b>extrusión de los posteriores</b> y puede generar mordida abierta si se usa de forma prolongada.<br><br>Regla práctica: cualquier férula de cobertura <b>parcial</b> es de uso corto y con controles. Solo las de cobertura <b>total</b> admiten uso prolongado." },
      { kw:["criterios de una buena ferula","como ajustar una ferula","requisitos"],
        r:"<b>Criterios de una férula bien hecha</b><br><br>• <b>Retención</b> adecuada: se sostiene sola, entra y sale sin forzar<br>• <b>Estabilidad</b>: no bascula al presionar de un lado<br>• <b>Contactos puntiformes uniformes</b> en todos los antagonistas<br>• <b>Guía anterior</b> que desocluye posteriores en protrusiva<br>• <b>Guía canina</b> que desocluye el resto en lateralidad<br>• Superficie <b>lisa y pulida</b>, sin filos<br>• Grosor mínimo compatible con resistencia, habitualmente 2 a 3 mm en posteriores<br><br>El ajuste se verifica con papel de articular y se repite en los controles: la férula cambia con el uso." },
      { kw:["acrilico","monomero","manejo del acrilico","seguridad"],
        r:"<b>Manejo seguro del acrílico</b><br><br>El monómero de metilmetacrilato es <b>volátil, inflamable e irritante</b> para vía respiratoria, piel y mucosas. Además hay riesgo de sensibilización con la exposición repetida.<br><br>Medidas:<br>• Trabajar en área <b>ventilada</b><br>• <b>Guantes</b> y lentes de protección<br>• No inhalar los vapores directamente<br>• Mantener alejado de fuentes de calor<br>• Frascos <b>cerrados</b> cuando no se usan<br>• Curado en olla de presión, alrededor de 20 minutos<br><br>La polimerización es <b>exotérmica</b>: la pieza se calienta. Nunca se prueba en boca durante el fraguado." },
      { kw:["ferula no cura","limitaciones de las ferulas","que no hace una ferula"],
        r:"<b>Lo que una férula no hace</b><br><br>Es importante que se lo expliques al paciente desde el inicio:<br><br>• <b>No cura el bruxismo</b>. El paciente sigue apretando: lo que hace es proteger y distribuir la fuerza<br>• <b>No corrige la maloclusión</b><br>• <b>No sustituye</b> el diagnóstico ni el manejo de la causa de fondo<br><br>Si el paciente aprieta por estrés o por un trastorno del sueño y eso no se atiende, la férula protege los dientes pero el problema sigue. Es protección y diagnóstico, no curación." }
    ]
  },
};

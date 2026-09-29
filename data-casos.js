const CASOS = {
  basico: [
    {
      id: "b1",
      titulo: "Molestia al cerrar tras una resina",
      contexto: "Paciente de 32 años. Hace 3 días le colocaron una resina en el 26. Refiere que 'ese diente le estorba' al cerrar y tiene molestia en el masetero del mismo lado. No había tenido problemas antes de la restauración.",
      hallazgos: "Al cierre guiado hacia RC hay un contacto único en la resina del 26; desde ahí desliza ~1 mm hasta MIC. Palpación: masetero derecho sensible. Apertura 45 mm, sin ruidos articulares. Resto de la oclusión sin cambios respecto a su historia.",
      pasos: [
        {
          pregunta: "¿Cuál es el diagnóstico más probable?",
          opciones: [
            "Desplazamiento discal con reducción derecho",
            "Contacto prematuro por restauración en supraoclusión (relación vertical aumentada)",
            "Capsulitis de ATM derecha secundaria a bruxismo de inicio súbito",
            "Dolor miofascial primario del masetero sin causa oclusal"
          ],
          correcta: 1,
          explicacion: "El dato clave es la relación temporal: el síntoma aparece justo después de la resina y hay un prematuro localizado en esa restauración. Eso orienta a iatrogenia (Morris III / vertical aumentada), no a un trastorno discal ni a un miofascial 'primario'."
        },
        {
          pregunta: "¿Cuál es la primera conducta más adecuada?",
          opciones: [
            "Férula de reposicionamiento anterior 24 h durante 3 meses",
            "AINEs 10 días y reevaluar sin tocar la resina",
            "Identificar el prematuro con papel de articular y reducir la resina hasta contactos simultáneos; reevaluar músculo en días",
            "Tallado selectivo de caninos para 'desprogramar' y aliviar el masetero"
          ],
          correcta: 2,
          explicacion: "Si la causa es una restauración alta, el tratamiento de primera línea es corregirla. No se inicia terapia de TTM compleja ni tallados en otros dientes mientras el prematuro iatrogénico siga presente."
        }
      ],
      resolucion: "Se marca el prematuro, se reduce la resina hasta contactos múltiples y se verifica protrusiva y lateralidad. En 48 h cede la molestia maseterina. Control en 1 semana: asintomático."
    },
    {
      id: "b2",
      titulo: "Clic de años sin otros síntomas",
      contexto: "Mujer de 24 años. Clic en ATM izquierda desde los 18 años. Sin dolor, sin limitación, sin bloqueos. Consulta porque le dijeron que 'todo clic hay que tratarlo o se traba'.",
      hallazgos: "Apertura 48 mm. Clic recíproco izquierdo reproducible. Sin dolor a la palpación muscular ni articular. Oclusión estable. No refiere episodios de bloqueo.",
      pasos: [
        {
          pregunta: "¿Qué interpretas clínicamente?",
          opciones: [
            "Desplazamiento discal sin reducción intermitente que requiere férula urgente",
            "Desplazamiento discal con reducción, asintomático, sin datos de progresión actual",
            "Crepitación por cambio degenerativo precoz",
            "Luxación condilar recurrente"
          ],
          correcta: 1,
          explicacion: "Clic recíproco + apertura normal + sin dolor = desplazamiento con reducción. La ausencia de limitación y de bloqueos habla en contra de sin reducción o luxación. La crepitación es otro tipo de ruido."
        },
        {
          pregunta: "¿Qué le propones?",
          opciones: [
            "Férula de reposicionamiento anterior de entrada para 'recapturar el disco'",
            "Cirugía artroscópica preventiva",
            "Observación, educación (evitar boqueadas forzadas) y control; no tratar solo el ruido",
            "Tallado oclusal para eliminar el clic"
          ],
          correcta: 2,
          explicacion: "Okeson: no se trata el clic por sí solo. Si no hay dolor ni disfunción, la observación es válida. Reposicionamiento y cirugía no están indicados solo por el ruido."
        }
      ],
      resolucion: "Se explica el significado del clic, se dan medidas de higiene articular y control anual. No se indica férula ni cirugía."
    },
    {
      id: "b3",
      titulo: "Dolor al despertar y facetas",
      contexto: "Hombre de 40 años. Dolor maseterino al despertar que mejora a media mañana. Su pareja refiere rechinar nocturno. No tiene dolor al masticar durante el día.",
      hallazgos: "Facetas brillantes en caninos y premolares que coinciden entre arcadas. Hipertrofia maseterina bilateral. Apertura normal, sin clic. Hay una interferencia leve de balance derecha.",
      pasos: [
        {
          pregunta: "¿Cuál es el diagnóstico orientativo principal?",
          opciones: [
            "Artritis inflamatoria de ATM",
            "Dolor muscular asociado a bruxismo nocturno (con signos de sobrecarga oclusal)",
            "Desplazamiento discal bilateral sin reducción",
            "Neuralgia del trigémino atípica"
          ],
          correcta: 1,
          explicacion: "El patrón matutino + rechazo nocturno + facetas + hipertrofia orienta a bruxismo nocturno con sobrecarga muscular. No hay datos de artritis, bloqueo ni neuralgia."
        },
        {
          pregunta: "¿Plan inicial más coherente?",
          opciones: [
            "Eliminar de inmediato la interferencia de balance con tallado selectivo amplio",
            "Férula de estabilización nocturna, educación sobre parafunción y reevaluación; el ajuste oclusal definitivo se valora cuando haya estabilidad",
            "Férula de reposicionamiento porque existen facetas",
            "Ortodoncia para 'corregir la causa del bruxismo'"
          ],
          correcta: 1,
          explicacion: "Terapia reversible primero. Tallar en pleno periodo de hiperactividad es un error frecuente. La interferencia se documenta y se reevalúa después."
        }
      ],
      resolucion: "Férula de estabilización (cobertura total, contactos en RC, guía anterior/canina). A los 15 días el dolor matutino casi desaparece. Se mantiene uso nocturno y se pospone cualquier tallado."
    },
    {
      id: "b4",
      titulo: "Desviación al cerrar y 'Clase IV'",
      contexto: "En el laboratorio un compañero dice: 'es Clase IV, hay que tratarlo ya'. El paciente tiene cruzada posterior derecha y al cerrar la mandíbula se desvía hacia ese lado. No refiere dolor.",
      hallazgos: "Relación molar: Clase I de Angle bilateral. Desde RC, al cierre, desviación lateroprotrusiva hacia la derecha relacionada con contactos en la cruzada. Sin dolor muscular ni articular hoy.",
      pasos: [
        {
          pregunta: "¿Qué clasificación describe mejor el hallazgo funcional?",
          opciones: [
            "Clase IV de Angle",
            "Clase II de Morris (retrusiva)",
            "Clase IV de Morris (latero-protrusiva) por obstáculo en la cruzada; Angle sigue siendo I",
            "Clase III de Angle porque la mandíbula 'se adelanta' al desviar"
          ],
          correcta: 2,
          explicacion: "Angle solo tiene I–II–III (relación molar). Aquí el molar es Clase I. La desviación por obstáculo es Morris IV. Confundir ambas es el error clásico."
        },
        {
          pregunta: "¿Qué implica para el tratamiento?",
          opciones: [
            "Toda Clase IV de Morris obliga a cirugía",
            "El número de clase no dicta el tratamiento: se decide según daño, adaptación y criterios de oclusión funcional óptima",
            "Hay que tallar todos los molares del lado derecho en la primera cita",
            "Como es Angle I, se ignora la desviación siempre"
          ],
          correcta: 1,
          explicacion: "Okeson no trata 'números de clase'. Se trata el daño y se busca una oclusión tolerable. Un paciente adaptado y asintomático no se interviene igual que uno con dolor o desgaste activo."
        }
      ],
      resolucion: "Se documenta Angle I + Morris IV. Sin dolor ni daño activo: información y control. Si en el seguimiento aparecen facetas o síntomas, se planifica corrección de la cruzada y/o terapia oclusal."
    },
    {
      id: "b5",
      titulo: "Dolor preauricular de 10 días",
      contexto: "Paciente de 29 años. Dolor preauricular izquierdo de 10 días, aumenta al masticar y al abrir del todo. Niega traumatismo y tratamientos dentales recientes.",
      hallazgos: "Apertura 42 mm con dolor al final del movimiento. Polo lateral del cóndilo izquierdo sensible. Músculos masticatorios sin dolor relevante. Sin clic. Sin prematuro evidente en un primer barrido oclusal.",
      pasos: [
        {
          pregunta: "¿Orientación diagnóstica más probable?",
          opciones: [
            "Dolor miofascial del masetero con referido a oído",
            "Proceso inflamatorio local de la ATM (capsulitis/sinovitis o sobrecarga capsular)",
            "Desplazamiento discal sin reducción establecido",
            "Otitis media; el problema no es dental ni articular"
          ],
          correcta: 1,
          explicacion: "Dolor localizado en la articulación, mecánico (aumenta con función), con poca componente muscular y sin limitación marcada de bloqueo, orienta a inflamación capsular/sinovial más que a miofascial puro o a sin reducción."
        },
        {
          pregunta: "¿Primera línea de manejo?",
          opciones: [
            "Férula de reposicionamiento anterior inmediata",
            "Reposo relativo mandibular, dieta blanda, analgesia antiinflamatoria si procede, y reevaluación de oclusión/parafunción en días",
            "Tallado selectivo amplio en la primera visita",
            "Antibiótico de amplio espectro por posible infección articular"
          ],
          correcta: 1,
          explicacion: "Inflamación aguda: medidas reversibles y control. No saltar a reposicionamiento ni a ajuste irreversible sin más datos."
        }
      ],
      resolucion: "Dieta blanda, evitar chicle y bostezo forzado, AINE corto plazo. A los 10 días el dolor cedió. Se indaga bruxismo y se considera férula de estabilización si hay parafunción."
    }
  ],
  intermedio: [
    {
      id: "i1",
      titulo: "El clic se fue y ya no abre igual",
      contexto: "Mujer de 35 años. Durante años tuvo clic derecho. Desde hace 5 días 'ya no hace ruido', pero no puede abrir bien y duele al intentarlo.",
      hallazgos: "Apertura máxima 28 mm. Desviación hacia la derecha al abrir. Sin clic. Dolor en ATM derecha al forzar. Antecedente claro de clic recíproco.",
      pasos: [
        {
          pregunta: "¿Qué interpretas?",
          opciones: [
            "Mejoría espontánea del desplazamiento con reducción",
            "Progresión a desplazamiento discal sin reducción (bloqueo cerrado)",
            "Anquilosis ósea de instauración en 5 días",
            "Contractura aislada del digástrico derecho"
          ],
          correcta: 1,
          explicacion: "Desaparición del clic + limitación de apertura + desviación al lado afectado es el patrón clásico de paso a sin reducción. No es una mejoría."
        },
        {
          pregunta: "¿Manejo inicial más razonable?",
          opciones: [
            "Reducción manual forzada en silla y alta el mismo día",
            "Control del dolor, medidas físicas suaves, evitar forzar la apertura; férula de estabilización según tolerancia; reevaluación seriada",
            "Cirugía de disco en la primera semana",
            "Tallado selectivo para 'liberar el cóndilo'"
          ],
          correcta: 1,
          explicacion: "Fase aguda de bloqueo cerrado: enfoque reversible. Forzar, tallar o operar de entrada no es la secuencia de Okeson."
        }
      ],
      resolucion: "Analgesia, ejercicios controlados, férula de estabilización. A las 3 semanas apertura 38 mm con menos dolor. Se reevalúan hábitos y oclusión en frío."
    },
    {
      id: "i2",
      titulo: "Abfracciones de un lado y facetas del otro",
      contexto: "Paciente de 45 años. Abfracciones cervicales en premolares superiores derechos. Facetas en el lado izquierdo. Molestia muscular ocasional, sin bloqueos.",
      hallazgos: "En lateralidad izquierda contacta también el lado derecho (balance). Guía canina izquierda pobre. Facetas coincidentes en el lado de trabajo izquierdo.",
      pasos: [
        {
          pregunta: "¿Qué relaciona mejor los hallazgos?",
          opciones: [
            "Solo cepillado horizontal agresivo; la oclusión no interviene",
            "Sobrecarga lateral: interferencia de balance y/o guía de trabajo insuficiente, compatible con abfracciones y facetas",
            "Desplazamiento discal derecho activo",
            "Exceso de dimensión vertical por erupción pasiva generalizada"
          ],
          correcta: 1,
          explicacion: "Abfracciones + facetas + contacto de balance apuntan a fuerzas laterales lesivas. El cepillado puede contribuir, pero no explica el patrón oclusal."
        },
        {
          pregunta: "¿Secuencia terapéutica más prudente?",
          opciones: [
            "Tallado inmediato y amplio de todos los contactos de balance",
            "Documentar, controlar parafunción (férula de estabilización si hay hiperactividad), y decidir ajuste fino cuando el sistema esté estable",
            "Reposicionamiento anterior 6 meses",
            "Extraer premolares con abfracción"
          ],
          correcta: 1,
          explicacion: "La interferencia de balance es relevante, pero tallar en caliente con posible hiperactividad es riesgoso. Reversible primero, ajuste después."
        }
      ],
      resolucion: "Férula 6 semanas. Al ceder la molestia muscular, se elimina el contacto de balance con tallado mínimo y se refuerza la guía en el lado de trabajo."
    },
    {
      id: "i3",
      titulo: "Sin molares de un lado",
      contexto: "Hombre de 58 años. Perdió molares inferiores izquierdos hace años. Mastica casi solo del lado derecho. Dolor en ATM izquierda y aspecto de tercio inferior disminuido.",
      hallazgos: "Colapso posterior izquierdo. Desgaste mayor en el lado de trabajo derecho. Cóndilo izquierdo sensible a la palpación. Sin clic claro.",
      pasos: [
        {
          pregunta: "¿Qué problema funcional predomina?",
          opciones: [
            "Solo artrosis primaria independiente de la oclusión",
            "Pérdida de soporte posterior (vertical disminuida) con masticación unilateral y sobrecarga del lado contralateral / ATM del lado edéntulo",
            "Clase III esquelética no diagnosticada",
            "Anquilosis fibrosa bilateral"
          ],
          correcta: 1,
          explicacion: "El patrón de pérdida posterior + unilateralidad + dolor en el lado sin soporte encaja con colapso vertical y sobrecarga compensatoria (Morris V como marco descriptivo)."
        },
        {
          pregunta: "¿Prioridad terapéutica?",
          opciones: [
            "Solo AINEs crónicos",
            "Restituir soporte posterior (prótesis) y proteger de la sobrecarga; férula o provisional mientras se planifica la rehabilitación",
            "Férula de reposicionamiento de por vida sin rehabilitar",
            "Extraer el lado derecho para simetrizar"
          ],
          correcta: 1,
          explicacion: "Hay que devolver soporte y dejar de masticar sobre un solo lado. La férula puede ayudar de forma temporal, pero no sustituye la rehabilitación del sector edéntulo."
        }
      ],
      resolucion: "Provisional / prótesis para recuperar soporte y DVO. El dolor articular mejora al repartir la función. Luego prótesis definitiva."
    },
    {
      id: "i4",
      titulo: "Duele el 26 (ya endodonciado)",
      contexto: "El paciente insiste en que el dolor es del 26. En otro consultorio le hicieron endodoncia 'por si acaso' y el dolor continúa igual.",
      hallazgos: "26 sin signos de fracaso endodóntico ni infección. La palpación del masetero profundo reproduce el dolor que él localiza en el 26. Punto gatillo claro.",
      pasos: [
        {
          pregunta: "¿Diagnóstico más probable?",
          opciones: [
            "Fracaso endodóntico oculto que exige apicectomía",
            "Dolor miofascial con referido a territorio dentario",
            "Sinusitis maxilar derecha",
            "Neuropatía del alveolar superior posterior"
          ],
          correcta: 1,
          explicacion: "Si la palpación muscular reproduce el síntoma y el diente está en orden, el origen es muscular referido, no pulpar."
        },
        {
          pregunta: "¿Qué haces?",
          opciones: [
            "Repetir la endodoncia",
            "Tratar el músculo (punto gatillo, fisioterapia, control de parafunción) y evitar más tratamiento dental del 26 sin evidencia",
            "Extraer el 26",
            "Antibiótico de amplio espectro 14 días"
          ],
          correcta: 1,
          explicacion: "El tratamiento sigue al diagnóstico: músculo, no más odontología en un diente ya tratado sin datos de patología."
        }
      ],
      resolucion: "Educación sobre dolor referido, manejo del punto gatillo, férula nocturna si hay bruxismo. El 'dolor del 26' cede en ~2 semanas."
    },
    {
      id: "i5",
      titulo: "Férula que 'adelanta' desde hace meses",
      contexto: "Llega con férula de reposicionamiento anterior colocada hace 8 meses por un clic. Ahora solo contacta con los dientes de adelante y no logra ocluir molares.",
      hallazgos: "Contacto exclusivamente anterior. Posteriores sin contacto. El clic ya no está. Uso casi continuo de la férula de reposicionamiento.",
      pasos: [
        {
          pregunta: "¿Qué ha ocurrido?",
          opciones: [
            "Resultado terapéutico ideal y estable",
            "Cambio oclusal adverso por uso prolongado de reposicionamiento (mordida abierta posterior)",
            "Erupción espontánea solo de anteriores",
            "Fractura condilar no diagnosticada"
          ],
          correcta: 1,
          explicacion: "Okeson advierte que el reposicionamiento prolongado puede producir mordida abierta posterior. No es un desenlace deseable rutinario."
        },
        {
          pregunta: "¿Conducta?",
          opciones: [
            "Dejar la misma férula indefinidamente",
            "Suspender el reposicionamiento, estabilizar (férula de cobertura total o rehabilitación/ortodoncia según el caso) y no repetir reposicionamiento sin control estricto",
            "Aumentar el grosor anterior de la férula",
            "Tallar todos los anteriores hasta lograr contacto posterior inmediato en silla"
          ],
          correcta: 1,
          explicacion: "Hay que detener el mecanismo que generó el cambio y estabilizar. El tallado agresivo de anteriores en la misma cita no es el plan reflexivo."
        }
      ],
      resolucion: "Se retira el reposicionamiento. Se planifica estabilización y recuperación de contactos posteriores. Se documenta el efecto adverso."
    }
  ],
  avanzado: [
    {
      id: "a1",
      titulo: "Años de dolor y muchos tallados",
      contexto: "Mujer de 42 años. Cuatro años de dolor facial bilateral. Varios ajustes oclusales previos sin mejoría sostenida. Bruxismo diurno y nocturno. Ansiedad. Pide 'que le terminen de cuadrar la mordida'.",
      hallazgos: "Dolor muscular difuso (maseteros, temporales, cervicales), puntos gatillo, facetas extensas, interferencias residuales. ATM sin bloqueo. Caninos ya muy tallados en tratamientos previos.",
      pasos: [
        {
          pregunta: "¿Qué problema de enfoque arrastra el caso?",
          opciones: [
            "Faltó un tallado aún más agresivo de molares",
            "Se priorizó la corrección oclusal irreversible antes de controlar el componente muscular y la parafunción/factores centrales",
            "Debió operarse el disco en el primer año",
            "El diagnóstico real es solo neuralgia y la oclusión no importa"
          ],
          correcta: 1,
          explicacion: "Patrón de dolor muscular crónico + parafunción. Los tallados repetidos sin estabilizar el sistema suelen fracasar y pueden empeorar la guía."
        },
        {
          pregunta: "¿Cómo reordenas el plan?",
          opciones: [
            "Nueva sesión larga de tallado selectivo total",
            "Pausar ajustes irreversibles; férula de estabilización, fisioterapia, higiene de sueño y manejo de estrés; reevaluar oclusión solo con el sistema más estable",
            "Reposicionamiento anterior continuo 12 meses",
            "Rehabilitación fija completa en una semana"
          ],
          correcta: 1,
          explicacion: "Okeson: reversible y control del factor etiológico primero; oclusión definitiva después, si aún es necesaria."
        }
      ],
      resolucion: "Se detienen los tallados. Férula, fisioterapia y medidas de sueño/estrés. A los 3 meses el dolor bajó de forma importante. Solo entonces se revisa si queda alguna interferencia clínicamente relevante."
    },
    {
      id: "a2",
      titulo: "Bloqueo y la férula que 'empuja hacia adelante'",
      contexto: "Hombre de 31 años. Bloqueo cerrado izquierdo de 3 semanas. Apertura 26 mm. Pidió explícitamente 'la férula que empuja la mandíbula adelante' porque lo leyó en internet.",
      hallazgos: "Patrón de desplazamiento sin reducción izquierdo. Inflamación no severa. Deslizamiento céntrico ~1 mm. No hay evidencia de que una posición adelantada se mantenga estable sin aparato.",
      pasos: [
        {
          pregunta: "Sobre el reposicionamiento anterior en este momento, ¿qué es más exacto?",
          opciones: [
            "Está indicado en todo bloqueo cerrado de forma automática",
            "No es automático: se valora según dolor, tiempo de evolución y posibilidad real de beneficio; si se usa, es por tiempo limitado y con controles",
            "Debe usarse 24 h al día durante al menos un año",
            "Sustituye siempre a la fisioterapia y a la estabilización"
          ],
          correcta: 1,
          explicacion: "El reposicionamiento es una herramienta selectiva, no un protocolo universal de bloqueo. Tiene riesgos oclusales si se prolonga."
        },
        {
          pregunta: "¿Qué plan le ofreces de entrada?",
          opciones: [
            "Reposicionamiento 24 h y control en 6 meses",
            "Manejo conservador del dolor y la función, férula de estabilización según tolerancia, y decisión informada sobre reposicionamiento solo si hay indicación clara",
            "Cirugía de disco esta semana",
            "Tallado selectivo para desbloquear"
          ],
          correcta: 1,
          explicacion: "Se prioriza lo reversible y se evita prometer que 'empujar hacia adelante' resuelve todo bloqueo."
        }
      ],
      resolucion: "Estabilización + medidas conservadoras. A las 6 semanas apertura 35 mm. No se impuso reposicionamiento prolongado. Consentimiento documentado sobre límites."
    },
    {
      id: "a3",
      titulo: "Rehabilitación de dos arcadas",
      contexto: "Paciente que necesita rehabilitación extensa. Tuvo dolor muscular; hoy está controlado con férula. Presenta deslizamiento céntrico de ~2 mm e interferencias de balance en la MIC actual.",
      hallazgos: "RC localizable y reproducible. DVO aceptable. Músculos actualmente sin dolor. MIC habitual con contactos de balance.",
      pasos: [
        {
          pregunta: "¿Qué principio guía el diseño oclusal de la rehabilitación?",
          opciones: [
            "Copiar la MIC habitual con sus interferencias porque 'está adaptado'",
            "Organizar la oclusión en RC (o muy próxima) con criterios de oclusión funcional óptima: contactos estables, guía anterior, sin interferencias de balance",
            "Aumentar la DVO 6 mm por protocolo fijo en todos los casos",
            "Dejar solo contactos anteriores para 'proteger la ATM'"
          ],
          correcta: 1,
          explicacion: "En rehabilitaciones extensas Okeson orienta a una oclusión organizada según criterios del Cap. 5, no a perpetuar contactos lesivos."
        },
        {
          pregunta: "¿Secuencia práctica?",
          opciones: [
            "Definitivos directos en boca sin provisional",
            "Montaje con arco facial y RC → encerado/provisionales con los criterios → ajuste fino → definitivos",
            "Solo articulador de bisagra simple sin registro de arco facial",
            "Reposicionamiento anterior como oclusión definitiva de la prótesis"
          ],
          correcta: 1,
          explicacion: "La provisionalización permite probar la oclusión organizada antes de comprometer materiales definitivos."
        }
      ],
      resolucion: "Montaje en RC, encerado con contactos axiales posteriores, guía anterior/canina y sin balance. Provisionales bien ajustados; luego definitivos."
    },
    {
      id: "a4",
      titulo: "Mordida abierta posterior tras un golpe",
      contexto: "Adolescente con traumatismo mandibular hace 10 días. Dolor en ATM derecha, limitación y mordida abierta posterior de ese lado de aparición reciente.",
      hallazgos: "Apertura limitada. Contacto preferente anterior; laterales posteriores derechos sin contacto. Imagen pendiente/sospechosa de compromiso condilar. No hay restauración reciente alta.",
      pasos: [
        {
          pregunta: "¿Qué NO debes asumir?",
          opciones: [
            "Que toda mordida abierta posterior aguda post-trauma es un simple prematuro dental a tallar",
            "Que puede haber contusión o fractura condilar con cambio oclusal secundario",
            "Que el tallado irreversible de anteriores debe esperar al diagnóstico",
            "Que el control imagenológico importa"
          ],
          correcta: 0,
          explicacion: "Post-trauma, el cambio oclusal puede ser articular. Tallar anteriores 'para cerrar' sin diagnóstico puede ser un error grave."
        },
        {
          pregunta: "¿Conducta correcta?",
          opciones: [
            "Tallar anteriores en la primera visita hasta lograr contacto molar",
            "Evitar ajuste oclusal agresivo; completar diagnóstico (imagen), manejo de soporte del trauma y reevaluación oclusal diferida",
            "Férula que empuje el cóndilo hacia atrás con fuerza",
            "Extracciones de premolares inmediatas"
          ],
          correcta: 1,
          explicacion: "Primero causa articular/traumática; la oclusión se reevalúa cuando haya claridad diagnóstica y estabilidad."
        }
      ],
      resolucion: "TC: contusión condilar sin indicación quirúrgica. Manejo conservador. No se tallaron anteriores. Reevaluación oclusal a los 2–3 meses."
    },
    {
      id: "a5",
      titulo: "Clic + músculo + interferencia + 'arrégleme todo hoy'",
      contexto: "Paciente con clic, dolor maseterino, bruxismo e interferencia de balance. Pide que en una sola cita 'le cuadren los dientes y le quiten el clic para siempre'.",
      hallazgos: "Desplazamiento con reducción, dolor muscular local, facetas, interferencia de balance. Expectativa de solución total e inmediata.",
      pasos: [
        {
          pregunta: "¿Cómo conceptualizas el caso?",
          opciones: [
            "Un solo problema: la interferencia; eliminarla cura todo",
            "Caso mixto multifactorial (disco + músculo + parafunción + oclusión); el clic no es el único criterio de éxito",
            "Indicación quirúrgica de disco de entrada",
            "Problema exclusivamente psicológico"
          ],
          correcta: 1,
          explicacion: "Hay varios factores concurrentes. Reducirlo todo al tallado o a 'quitar el clic' es un marco incompleto."
        },
        {
          pregunta: "¿Cómo ordenas plan y comunicación?",
          opciones: [
            "Tallado total + reposicionamiento + promesa de que el clic no volverá",
            "Educar sobre límites (el clic puede persistir), priorizar control muscular y parafunción con estabilización, reevaluar la interferencia después; no garantizar la desaparición del ruido",
            "Ortodoncia express sin fase reversible",
            "Alta sin tratamiento porque es 'solo bruxismo'"
          ],
          correcta: 1,
          explicacion: "Expectativas realistas + terapia por etapas. El éxito se mide más por dolor y función que por silencio articular absoluto."
        }
      ],
      resolucion: "Educación, férula de estabilización, control del apretamiento diurno. A las 8 semanas menos dolor; el clic sigue pero no molesta. Ajuste conservador de la interferencia de balance. Controles."
    }
  ]
};

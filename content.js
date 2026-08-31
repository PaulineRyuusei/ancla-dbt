// Contenido resumido a partir del manual de psicoeducación DBT (Marsha Linehan / Psicoeducación Online).
// Organizado por los 4 módulos (ejes) de la Terapia Dialéctico Conductual.

const DBT_CONTENT = {
  mindfulness: {
    key: "mindfulness",
    title: "Mindfulness",
    subtitle: "Atención Plena",
    color: "mind",
    intro: "La habilidad base de todo el modelo DBT: aprender a estar presente, observar sin juzgar y actuar desde la Mente Sabia en lugar de dejarte arrastrar por el piloto automático.",
    sections: [
      {
        label: "Metas de la práctica",
        body: `
          <p>La práctica de mindfulness persigue tres metas:</p>
          <div class="tech">
            <div class="t-title">1. Reducir el sufrimiento e incrementar la felicidad</div>
            <div class="t-body">Disminuir el dolor, la tensión y el estrés; tomar el control de tu vida y tus acciones.</div>
          </div>
          <div class="tech">
            <div class="t-title">2. Incrementar el control sobre tu mente</div>
            <div class="t-body">En vez de que la mente te controle a ti, aprender a dirigirla con intención.</div>
          </div>
          <div class="tech">
            <div class="t-title">3. Experimentar la realidad como es</div>
            <div class="t-body">Vivir con los ojos totalmente abiertos: conexión con el entorno, compasión y valor propio.</div>
          </div>
          <div class="quote">"Todos los fenómenos son pasajeros. Permanece atento y no te aferres a nada. No te preocupes ni te detengas en lo que de ti no depende: apenas mores en algo, tu crecimiento se detendrá."</div>
        `
      },
      {
        label: "Los tres estados de la mente",
        body: `
          <div class="tech">
            <div class="t-title">Mente Racional</div>
            <div class="t-body">Fría, lógica, enfocada a objetivos y tareas. Cuando te gobierna, los hechos y la lógica mandan; los valores y sentimientos pasan a segundo plano.</div>
          </div>
          <div class="tech">
            <div class="t-title">Mente Emocional</div>
            <div class="t-body">Reactiva y dependiente del estado de ánimo, enfocada en emociones e impulsos. Cuando te gobierna, sientes y actúas por impulso; los hechos y la razón importan poco.</div>
          </div>
          <div class="tech">
            <div class="t-title">Mente Sabia</div>
            <div class="t-body">La intersección de las dos: la sabiduría profunda de cada persona. Identifica lo mejor de la razón y de la emoción, las integra y actúa conforme a lo importante aquí y ahora.</div>
          </div>
        `
      },
      {
        label: "Habilidades \u201cQUÉ\u201d — Observar · Describir · Participar",
        body: `
          <div class="tech">
            <div class="t-title">Observa</div>
            <div class="t-body">Nota las sensaciones que llegan por tus sentidos, con atención intencional al momento presente. No te aferres ni te enganches: deja que pensamientos y sentimientos pasen como nubes o como olas. Observa dentro y fuera de ti, sin poner palabras todavía.</div>
          </div>
          <div class="tech">
            <div class="t-title">Describe</div>
            <div class="t-body">Pon en palabras tu experiencia: etiqueta pensamientos como pensamientos, sentimientos como sentimientos y acciones como acciones. Diferénciate de tus interpretaciones y apégate a los hechos observables — quién, qué, cuándo, dónde. Si no lo percibes con los sentidos, no lo describas.</div>
          </div>
          <div class="tech">
            <div class="t-title">Participa</div>
            <div class="t-body">Entrégate por completo a lo que ocurre en el momento presente — bailar, limpiar, conversar. Vuélvete uno con la actividad, actúa intuitivamente desde la Mente Sabia y permítete fluir, respondiendo con espontaneidad.</div>
          </div>
        `
      },
      {
        label: "Habilidades \u201cCÓMO\u201d — Sin juicios · Con atención plena · Efectivamente",
        body: `
          <div class="tech">
            <div class="t-title">Sin juicios</div>
            <div class="t-body">Observa sin evaluar como bueno o malo; solo los hechos. Acepta cada momento como una manta extendida en el pasto: recibe la lluvia, el sol y cada hoja que cae. Reconoce tus valores y reacciones sin juzgarlas — y cuando te descubras juzgando, no te juzgues por juzgar.</div>
          </div>
          <div class="tech">
            <div class="t-title">Con atención plena (una cosa a la vez)</div>
            <div class="t-body">Entrégate al ahora. Cuando comas, come; cuando camines, camina; cuando te preocupes, preocúpate. Si te distraes, vuelve a lo que hacías, tantas veces como sea necesario.</div>
          </div>
          <div class="tech">
            <div class="t-title">Efectivamente</div>
            <div class="t-body">Ten claros tus objetivos y haz lo necesario para lograrlos. Enfócate en lo que funciona, no en tener la razón. Juega de acuerdo con las reglas de la situación real — no la que te gustaría tener — y suelta la terquedad.</div>
          </div>
        `
      },
      {
        label: "Ejercicios para practicar Mente Sabia",
        body: `
          <p>Ideas breves para entrar en contacto con la Mente Sabia:</p>
          <ul>
            <li><strong>Láminas de piedra en el lago:</strong> imagínate flotando lentamente hacia el fondo de un lago claro y tranquilo, notando la calma en la profundidad.</li>
            <li><strong>Escaleras en espiral:</strong> baja lentamente por una escalera que va hacia tu interior, sin forzarte a ir más allá de lo que quieras.</li>
            <li><strong>Respira "mente", exhala "sabia":</strong> dirige la atención a cada palabra hasta sentir que te fundes en la Mente Sabia.</li>
            <li><strong>Pregunta a la Mente Sabia:</strong> pregunta al inhalar, escucha (sin responderte) al exhalar.</li>
            <li><strong>¿Esto es Mente Sabia?:</strong> mientras inhalas pregúntate si tu acción o pensamiento lo es; escucha la respuesta al exhalar.</li>
            <li><strong>Expandir la consciencia:</strong> al exhalar, expande tu atención del interior hacia el espacio que te rodea.</li>
          </ul>
        `
      },
      {
        label: "Ideas para practicar Observar (por los sentidos)",
        body: `
          <p>El manual ofrece más de 60 micro-ejercicios agrupados por sentido; aquí un resumen práctico por categoría:</p>
          <div class="chips">
            <span class="chip">Vista</span><span class="chip">Oído</span><span class="chip">Olfato</span><span class="chip">Gusto</span><span class="chip">Tacto</span><span class="chip">Respiración</span><span class="chip">Pensamientos</span>
          </div>
          <div class="tech">
            <div class="t-title">Vista</div>
            <div class="t-body">Observa nubes acostado en el piso, contempla la naturaleza al caminar despacio, o mira a otra persona sin etiquetar sus emociones — solo la forma, el movimiento.</div>
          </div>
          <div class="tech">
            <div class="t-title">Oído</div>
            <div class="t-body">Detente y escucha la textura de los sonidos y los silencios entre ellos; nota el tono y timbre de una voz; escucha música con atención plena.</div>
          </div>
          <div class="tech">
            <div class="t-title">Olfato</div>
            <div class="t-body">Nota el aroma de tu jabón, del café recién abierto, de la comida al cocinar, del aire al caminar afuera.</div>
          </div>
          <div class="tech">
            <div class="t-title">Gusto</div>
            <div class="t-body">Pon algo en tu boca y nota el sabor completo, bocado a bocado, sin apresurarte.</div>
          </div>
          <div class="tech">
            <div class="t-title">Tacto</div>
            <div class="t-body">Nota tus pies dentro de los zapatos, la ropa sobre tu piel, la presión de la silla en tu espalda; toca una textura y explórala con curiosidad.</div>
          </div>
          <div class="tech">
            <div class="t-title">Respiración</div>
            <div class="t-body">Sigue el movimiento del vientre y el pecho al respirar, las pausas entre inhalar y exhalar, la sensación del aire en la nariz. Puedes sincronizar la respiración con tus pasos o con una canción.</div>
          </div>
          <div class="tech">
            <div class="t-title">Pensamientos</div>
            <div class="t-body">Observa tus pensamientos ir y venir como nubes en el cielo, hojas en un río o vagones de tren — sin subirte a ellos. Cuando una preocupación aparezca, desvía la atención a la sensación corporal más intensa y nota cuánto tarda en bajar.</div>
          </div>
        `
      },
      {
        label: "Practicar la habilidad de Describir",
        body: `
          <ul>
            <li>Describe patrones en las nubes, o lo que hace una persona frente a ti, siendo muy específico y evitando interpretar intenciones o juicios.</li>
            <li>Describe tus sentimientos apenas lleguen: <em>"El sentimiento de enojo se ha presentado en mí"</em>.</li>
            <li>Describe pensamiento + sentimiento + lo observado en otros: <em>"Cuando tú haces X, yo siento Y, y tengo Z pensamientos"</em>.</li>
            <li>Practica describir tu respiración contando cada inhalación y exhalación hasta 10, sin perder la cuenta.</li>
          </ul>
        `
      },
      {
        label: "Practicar la habilidad de Participar",
        body: `
          <ul>
            <li>Centra tu atención en el contacto de tu cuerpo con un objeto (el piso, la silla, las sábanas) y nota la conexión y el cuidado que te ofrece.</li>
            <li>Baila, canta o tararea mientras haces una actividad cotidiana, entregándote por completo.</li>
            <li>Involúcrate al 100% en lo que otra persona te está diciendo.</li>
            <li>Corre, practica un deporte o toma una clase de baile/improvisación enfocándote solo en eso.</li>
          </ul>
        `
      },
      {
        label: "Practicar el No Enjuiciamiento",
        body: `
          <ul>
            <li>Cuando notes un pensamiento enjuiciador, nómbralo: <em>"Un pensamiento enjuiciador ha llegado a mi mente"</em> — y cuenta cuántos aparecen.</li>
            <li>Reemplázalo describiendo los hechos, las consecuencias y tus propios sentimientos (recuerda: las emociones no son juicios).</li>
            <li>Observa tus expresiones faciales, postura y tono de voz de enjuiciamiento — y cámbialos conscientemente.</li>
            <li>Cuéntale a alguien tu día sin juicios, siendo concreta/o sobre lo que observaste directamente.</li>
            <li>Ante alguien con quien estás enojado/a, imagina su historia, sus miedos y esperanzas — trata de entenderlo.</li>
            <li>Cuando aparezca el juicio, practica una <strong>media sonrisa</strong> y <strong>manos dispuestas</strong>.</li>
          </ul>
        `
      },
      {
        label: "Practicar la Atención Plena en lo cotidiano",
        body: `
          <p>Convierte tareas diarias en práctica: prepara un té, lava los platos o la ropa, limpia la casa o toma un baño largo, realizando cada movimiento despacio y con plena consciencia. Si tu mente se distrae, sostén el aliento un momento y regresa suavemente, con media sonrisa.</p>
          <div class="tech">
            <div class="t-title">Meditación del "Uno"</div>
            <div class="t-body">Siéntate con la espalda recta. Repite mentalmente "uno" al inhalar y "uno" al exhalar. Cuando la mente se distraiga, vuelve gentilmente a la palabra, sin pelear con el deseo de moverte o parar — solo obsérvalo.</div>
          </div>
        `
      }
    ]
  },

  distress: {
    key: "distress",
    title: "Tolerancia al Malestar",
    subtitle: "Distress Tolerance",
    color: "dist",
    intro: "Habilidades para sobrevivir una crisis sin empeorar la situación: cómo aguantar el malestar intenso mientras pasa, en vez de actuar por impulso.",
    sections: [
      {
        label: "¿Cuándo estás en crisis?",
        body: `
          <p>Estás en crisis cuando la situación es <strong>altamente estresante</strong>, de <strong>corto plazo</strong> (no durará mucho) y genera <strong>mucha presión</strong> para resolverla ahora mismo.</p>
          <div class="subhead">Usa habilidades de supervivencia en crisis cuando:</div>
          <ul>
            <li>Tienes un dolor intenso que no puede aliviarse rápido.</li>
            <li>Actuar según tu emoción solo empeoraría las cosas.</li>
            <li>La mente emocional amenaza con abrumarte y necesitas ser efectivo/a.</li>
            <li>Estás abrumado/a pero tienes que cumplir con tus compromisos.</li>
            <li>La ansiedad es extrema y el problema no puede resolverse de inmediato.</li>
          </ul>
          <p>Estas habilidades son para sobrevivir el momento — no para resolver todos los problemas de tu vida, sino para hacerla una vida que valga la pena vivir.</p>
        `
      },
      {
        label: "STOP — freno de emergencia",
        body: `
          <div class="tech">
            <div class="t-title">S · No reacciones</div>
            <div class="t-body">¡Detente! ¡Congélate! No muevas ni un músculo. Tus emociones intentarán hacerte actuar sin pensar — mantente en control.</div>
          </div>
          <div class="tech">
            <div class="t-title">T · Toma distancia</div>
            <div class="t-body">Toma un tiempo fuera, suelta, respira profundo. No dejes que la emoción te lleve a actuar por impulso.</div>
          </div>
          <div class="tech">
            <div class="t-title">O · Observa</div>
            <div class="t-body">Pon atención a lo que sucede dentro y fuera de ti: ¿qué está pasando? ¿qué piensas y sientes? ¿qué hacen o dicen los demás?</div>
          </div>
          <div class="tech">
            <div class="t-title">P · Procede con precaución</div>
            <div class="t-body">Al decidir qué hacer, toma en cuenta tus pensamientos y sentimientos, la situación y lo que sienten los demás. Pregunta a la Mente Sabia: ¿qué acción mejoraría o empeoraría esto?</div>
          </div>
        `
      },
      {
        label: "TIP — cambia tu química corporal",
        body: `
          <p>Técnicas de acción rápida para bajar la activación fisiológica de una emoción intensa:</p>
          <div class="tech">
            <div class="t-title">Temperatura (agua fría)</div>
            <div class="t-body">Sostén la respiración y sumerge la cara en agua fría (~10°C) o pon una bolsa de hielo sobre ojos y mejillas durante 30 segundos. Activa el "reflejo de inmersión": baja el ritmo cardiaco y redirige la sangre al corazón y cerebro. Tarda 15–30 seg en hacer efecto y funciona mejor si te quedas quieto/a.<br><em>Precaución: si tienes alguna condición cardiaca, presión baja, tomas beta-bloqueadores o eres alérgico/a al frío, consulta a tu médico antes de usarla.</em></div>
          </div>
          <div class="tech">
            <div class="t-title">Ejercicio intenso</div>
            <div class="t-body">Gasta la energía del cuerpo por un periodo corto: corre, camina rápido, salta o levanta peso.</div>
          </div>
          <div class="tech">
            <div class="t-title">Respiración pausada</div>
            <div class="t-body">Respira profundo hasta llenar el vientre. Exhala más lento de lo que inhalas (por ejemplo, inhala 5 segundos y exhala en 7), a un ritmo de 5–6 respiraciones por minuto.</div>
          </div>
          <div class="tech">
            <div class="t-title">Relajación muscular pareada</div>
            <div class="t-body">Mientras respiras profundo, tensa un grupo muscular al inhalar (sin lastimarte) y suéltalo al exhalar diciendo mentalmente "relaja". Nota la diferencia entre tensión y calma.</div>
          </div>
        `
      },
      {
        label: "Relajación muscular pareada — paso a paso",
        body: `
          <ol style="margin:0 0 10px;padding-left:18px">
            <li>Ponte en una posición cómoda; afloja ropa apretada. Que ninguna parte del cuerpo se apoye sobre otra.</li>
            <li>Para cada grupo muscular, genera tensión apretando esa zona. Mantenla mientras inhalas 5–6 segundos.</li>
            <li>Suelta la tensión al exhalar, diciendo despacio "relaja".</li>
            <li>Observa la sensación de relajación por 10–15 segundos antes de pasar al siguiente grupo.</li>
          </ol>
          <p>Practica con los 16 grupos musculares y, después, con grupos medianos y grandes hasta poder tensar todo el cuerpo (como un robot) y destensarlo por completo (como un muñeco de trapo). Con práctica diaria, la palabra "relaja" por sí sola llegará a producir la relajación.</p>
        `
      },
      {
        label: "Auto-calmarse con los 5 sentidos",
        body: `
          <p>Calma <strong>no</strong> es lo mismo que relajación: calma significa mantenerte tranquilo/a dentro de la tormenta, con movimientos lentos, respiración y la atención puesta en lo importante del aquí y ahora.</p>
          <div class="tech">
            <div class="t-title">Vista</div>
            <div class="t-body">Mira las estrellas, un atardecer, una flor, ilustraciones de un libro; camina por un lugar bonito de la ciudad.</div>
          </div>
          <div class="tech">
            <div class="t-title">Oído</div>
            <div class="t-body">Escucha música relajante, sonidos de la naturaleza, o canta tus canciones favoritas.</div>
          </div>
          <div class="tech">
            <div class="t-title">Olfato</div>
            <div class="t-body">Usa tu jabón o loción favorita, enciende una vela aromática, hierve canela u hornea algo, huele el aire al abrir la ventana.</div>
          </div>
          <div class="tech">
            <div class="t-title">Gusto</div>
            <div class="t-body">Bebe una infusión o chocolate caliente, saborea un postre con consciencia plena, come algo lentamente y de a un bocado a la vez.</div>
          </div>
          <div class="tech">
            <div class="t-title">Tacto</div>
            <div class="t-body">Toma un baño largo, acaricia a tu mascota, date un masaje en los pies, ponte sábanas limpias, envuélvete en una cobija o abraza a alguien.</div>
          </div>
        `
      },
      {
        label: "Aceptación radical — paso a paso",
        body: `
          <ul>
            <li>Observa cómo te cuestionas o luchas con la realidad ("Debería ser de otro modo").</li>
            <li>Recuérdate que esa realidad desagradable ya sucedió y no puede cambiarse ("Esto es lo que pasó").</li>
            <li>Reconoce que una cadena de causas hizo que ocurriera este momento ("Así se dieron las cosas").</li>
            <li>Practica aceptar con todo tu ser — mente, cuerpo y espíritu. Puedes usar relajación, respiración, media sonrisa y manos dispuestas mientras piensas en lo que te cuesta aceptar.</li>
            <li>Practica <strong>acción opuesta</strong>: enlista qué harías si ya lo hubieras aceptado, y actúa como si así fuera.</li>
            <li>Permítete sentir la decepción, tristeza o pena que surja — aceptar no es estar de acuerdo, y puedes tener una vida que valga la pena vivir incluso con dolor.</li>
          </ul>
        `
      },
      {
        label: "Voluntad vs. Terquedad",
        body: `
          <p>La <strong>voluntad</strong> es la disposición a entrar y participar por completo en la vida: hacer justo lo que se necesita en cada situación, con todo el corazón, escuchando a la Mente Sabia.</p>
          <p>La <strong>terquedad</strong> es negarse a tolerar el momento, negarse a hacer los cambios necesarios, insistir en tener el control o pensar solo en lo que "yo" quiero ahora.</p>
          <div class="subhead">Voluntad paso a paso</div>
          <ol style="margin:0;padding-left:18px">
            <li>Observa que la terquedad está presente; etiquétala.</li>
            <li>Acéptala radicalmente — no puedes combatir la terquedad siendo terco/a.</li>
            <li>Cambia tu mente hacia la aceptación y la voluntad.</li>
            <li>Prueba una media sonrisa y una postura de manos dispuestas.</li>
            <li>Si la terquedad no cede, pregúntate: ¿cuál es la amenaza real?</li>
          </ol>
        `
      },
      {
        label: "Media sonrisa y manos dispuestas",
        body: `
          <div class="tech">
            <div class="t-title">Media sonrisa</div>
            <div class="t-body">Relaja la cara de la frente a la barbilla, aflojando cada músculo. Eleva ligeramente ambas comisuras de los labios — solo lo suficiente para sentirlo tú, sin que se note. Tu cara está conectada a tu cerebro: tu cuerpo se comunica con tu mente.</div>
          </div>
          <div class="tech">
            <div class="t-title">Manos dispuestas</div>
            <div class="t-body">De pie, sentado/a o acostado/a: afloja las manos, gira las palmas hacia arriba con los pulgares hacia afuera y los dedos relajados. Es una postura de apertura, no de lucha.</div>
          </div>
        `
      },
      {
        label: "Mindfulness para pensamientos recurrentes",
        body: `
          <ol style="margin:0 0 10px;padding-left:18px">
            <li><strong>Observa tus pensamientos</strong> como olas que van y vienen, sin suprimirlos, sin enjuiciarlos, sin engancharte — solo reconociendo su presencia.</li>
            <li><strong>Adopta curiosidad:</strong> pregúntate de dónde vienen; nota que cada pensamiento también se va.</li>
            <li><strong>Recuerda que tú no eres tus pensamientos:</strong> no tienes que actuarlos. Ese pensamiento catastrófico es tu Mente Emocional hablando.</li>
            <li><strong>No los bloquees ni los reprimas:</strong> pregúntate qué sensación están tratando de evitar. Permíteles ir y viniendo mientras observas tu respiración.</li>
          </ol>
        `
      }
    ]
  },

  emotion: {
    key: "emotion",
    title: "Regulación Emocional",
    subtitle: "Emotion Regulation",
    color: "emo",
    comingSoon: true,
    tagline: "Identificar, nombrar y modular las emociones en vez de que ellas te dirijan a ti.",
    note: "Este módulo aún no está incluido en tu manual de origen. Cuando tengas material de Regulación Emocional, lo puedes resumir aquí con la misma estructura que Mindfulness y Tolerancia al Malestar."
  },

  interpersonal: {
    key: "interpersonal",
    title: "Efectividad Interpersonal",
    subtitle: "Interpersonal Effectiveness",
    color: "inter",
    comingSoon: true,
    tagline: "Pedir lo que necesitas, decir que no, y mantener relaciones y autorrespeto al mismo tiempo.",
    note: "Este módulo aún no está incluido en tu manual de origen. Cuando tengas material de Efectividad Interpersonal, lo puedes resumir aquí con la misma estructura que Mindfulness y Tolerancia al Malestar."
  }
};

const DBT_ORDER = ["mindfulness", "distress", "emotion", "interpersonal"];

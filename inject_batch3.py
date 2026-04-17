import json

path = '/Users/yepz/JSweb/data/modules.json'
with open(path, 'r', encoding='utf-8') as f:
    data = json.load(f)

fullTexts = {

"1.17": """Existe una velocidad que el Universo ha declarado como el límite absoluto de todo lo que puede existir. No es una restricción de ingeniería que algún día superaremos con tecnología más avanzada. Es una barrera fundamental inscrita en el tejido mismo de la realidad: la **velocidad de la luz**, representada en física con la letra **c** = 299,792,458 metros por segundo, exactamente, en el vacío.

¿Por qué exactamente ese número? En 1983, la Conferencia General de Pesas y Medidas redefinió el metro en función de la velocidad de la luz, haciendo de **c** una constante definitoria del Sistema Internacional de Unidades. La velocidad de la luz no es solo rápida; es el parámetro más fundamental del cosmos. Todo lo que conocemos sobre el espacio y el tiempo está anclado en ese número.

Para comprender su magnitud, pongamos cifras cotidianas. La luz recorre los 384,400 km que separan la Tierra de la Luna en exactamente 1.28 segundos. Cuando ves la Luna en el cielo nocturno, la estás viendo tal como era hace 1.28 segundos. El Sol está a 8 minutos y 20 segundos luz; la luz que te llega ahora mismo salió del Sol cuando estabas haciendo otra cosa hace 8 minutos. La estrella más cercana al Sol, **Próxima Centauri**, está a 4.24 años luz: la luz tarda más de 4 años en llegar. La Galaxia de Andrómeda, la mayor vecina de la Vía Láctea, está a 2.537 millones de años luz. Cuando la observamos con un telescopio, estamos viendo el universo tal como era hace 2.5 millones de años; los primeros **Homo Habilis** caminaban por África cuando esa luz salió de Andrómeda.

La razón por la que nada puede superar **c** no es que "ningún motor sea suficientemente potente". Es que la física misma lo prohíbe. La Relatividad Especial de Einstein demuestra que a medida que un objeto con **masa** se acelera y se aproxima a la velocidad de la luz, su masa relativista aumenta indefinidamente. Para alcanzar exactamente **c**, se necesitaría una cantidad infinita de energía. Por tanto, solo los fotones —partículas sin masa en reposo— y las partículas de otras clases sin masa pueden viajar exactamente a **c**. Todo lo que tiene masa apenas puede aproximarse asintóticamente, sin jamás alcanzarla.

Hay algo más sorprendente: la constancia de **c** para todos los observadores. No importa si el observador está quieto o moviéndose. No importa si la fuente de luz se aleja o se acerca. La velocidad de la luz medida siempre será la misma. Esto contradice la física intuitiva de Newton, donde las velocidades se suman: si lanzas una pelota desde un tren en movimiento, su velocidad es la velocidad del tren más la velocidad del lanzamiento. Pero si enciendes una linterna desde un cohete que viaja al 90% de la velocidad de la luz, la luz no viaja al 190% de **c**. Viaja exactamente a **c**. Esta invariancia fue confirmada experimentalmente por el famoso experimento de **Michelson-Morley** en 1887, que paradójicamente intentó detectar el "éter" que supuestamente transportaba la luz y en cambio demostró la constancia de su velocidad.

Las consecuencias tecnológicas de la velocidad de la luz son inmediatas. En telecomunicaciones, la velocidad de la luz en la fibra óptica (aproximadamente 200,000 km/s dentro del vidrio) impone latencias mínimas que ninguna mejora de hardware puede eliminar. Una señal de Nueva York a Londres (5,570 km) tardar al menos 28 ms solo por la propagación. Los sistemas de trading de alta frecuencia gastan millones en reducir cada milisegundo de latencia física.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.2** (Págs. 21–22)
**📐 NGSS: HS-PS4-1 · HS-ESS1-1** — Aplicar las propiedades de la luz para explicar fenómenos astronómicos y tecnológicos.
**📋 RENAC: EC009 · Física Moderna · Electromagnetismo**
**💡 Standards World:** Velocidad de la Luz · c Constante · Relatividad Especial · Fotones · Masa Relativista · Experimento Michelson-Morley · Fibra Óptica · Años Luz""",

"1.18": """Una de las preguntas más profundas y desconcertantes que un ser humano puede hacerse no es filosófica sino cosmológica: ¿Tiene el Universo un borde? ¿Qué hay más allá? La respuesta de la ciencia moderna es al mismo tiempo satisfactoria y desconcertante: existe un **Universo Observable** con un horizonte definido, más allá del cual no podemos ver ni saber nada, no porque haya una pared o un borde físico, sino porque la luz de esas regiones no ha tenido tiempo suficiente para alcanzarnos.

El **Universo Observable** es una esfera centrada exactamente en donde estás tú ahora mismo. Su radio es aproximadamente 46,500 millones de años luz. Espera: si el Universo tiene 13,800 millones de años, ¿cómo puede su radio observable ser 46,500 millones de años luz si la luz solo puede viajar 13,800 millones de años luz desde el Big Bang? La respuesta está en la **expansión del espacio**: las regiones que emitieron luz hace 13,800 millones de años se han movido alejándose de nosotros durante ese tiempo, llevadas por la expansión del espacio. Hoy están a 46,500 millones de años luz aunque la luz que recibimos de ellas tardó solo 13,800 millones de años en llegar.

El horizonte del Universo Observable actúa como una **burbuja de información**: nada de lo que ocurra más allá de ese horizonte puede afectarnos ahora ni en el futuro cercano. Cualquier estrella, galaxia o evento más allá de ese límite está causalmente desconectado de nosotros para siempre. La **energía oscura** —que está acelerando la expansión del Universo— está haciendo que ese horizonte se aleje cada vez más rápido, lo que significa que con el tiempo galaxias que hoy son observables quedarán más allá del horizonte y dejarán de ser accesibles. En un futuro lejano, el Universo Observable desde la Tierra se irá vaciando de galaxias lejanas, que se alejarán a velocidades superiores a **c** (lo cual no viola la relatividad porque no son objetos moviéndose a través del espacio, sino el espacio mismo expandiéndose).

Dentro de ese Universo Observable, las estimaciones actuales apuntan a aproximadamente **2 billones de galaxias** (2×10¹²). Si cada galaxia contiene un promedio de 100 mil millones de estrellas, y si cada estrella tiene en promedio un sistema planetario, el número de planetas en el Universo Observable supera los 10²³ —más que el número de átomos en todos los granos de arena de todas las playas de la Tierra juntos. La probabilidad de que en esa vastedad solo exista vida en nuestro pequeño planeta rocoso ha preocupado a los científicos desde los años 1950, cuando el físico Enrico Fermi lo resumió en una pregunta que todavía nos persigue: **"¿Dónde están todos?"** La **Paradoja de Fermi** sigue sin respuesta.

El **Telescopio Espacial Hubble** y su sucesor, el **James Webb Space Telescope (JWST)**, han sido los instrumentos que han empujado nuestro horizonte observable hacia el pasado más lejano. En 2022, el JWST identificó galaxias formadas apenas 300-400 millones de años después del Big Bang, más brillantes y masivas de lo que los modelos predecían. Esta discrepancia está obligando a física y cosmólogos a revisar los modelos de formación galáctica temprana.

La existencia del horizonte observable también nos da una perspectiva humillante sobre nuestra posición cósmica: somos observadores en un punto arbitrario de uno de los 2 billones de universos observables posibles, cada uno centrado en un observador distinto. La ciencia no nos ha expulsado del centro del Universo —Copérnico hizo eso en 1543— nos ha revelado que no existe tal centro. Cada punto en el cosmos tiene su propio y único Universo Observable. El tuyo es genuinamente único.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.3 — La forma, dimensiones y datos del Cosmos** (Págs. 23–25)
**📐 NGSS: HS-ESS1-1 · HS-ESS1-2** — Usar la evidencia astronómica para construir explicaciones sobre la escala y estructura del Universo.
**📋 RENAC: EC009 · Cosmología y Astrofísica**
**💡 Standards World:** Universo Observable · Horizonte Cósmico · Expansión del Universo · Energía Oscura · Paradoja de Fermi · JWST · Hubble · 2 Billones de Galaxias""",

"1.19": """El 14 de febrero de 1990, la sonda espacial **Voyager 1** estaba a 6,000 millones de kilómetros de la Tierra, más allá de la órbita de Neptuno, cuando el astrónomo Carl Sagan convenció a la NASA de que girara la cámara y fotografiara el sistema solar interior por última vez antes de que los instrumentos ópticos fueran apagados para siempre. El resultado fue una de las imágenes más profundas jamás capturadas en la historia de la fotografía: un punto diminuto, apenas un píxel de luz azul pálido suspendido en un rayo de luz solar dispersada, flotando en la inmensidad del espacio. Era la Tierra.

Sagan llamó a esa imagen **"El Pálido Punto Azul"** y escribió sobre ella una reflexión que se convirtió en uno de los textos de divulgación científica más citados de la historia: *"Mirad de nuevo ese punto. Eso es aquí. Eso es hogar. Eso es nosotros. En él, todos los que amáis, todos los que conocéis, todos de los que hayáis oído hablar, todos los seres humanos que hayan existido alguna vez, vivieron sus vidas."*

La imagen tiene un poder conceptual inmenso porque confronta de manera visceral una verdad que la ciencia conoce pero que la mente humana cotidiana rara vez procesa: la **escala del Universo** hace que toda la historia humana, con sus guerras, sus imperios, sus descubrimientos y sus tragedias, haya ocurrido en un grano de polvo suspendido en un rayo de luz solar. No para paralizar la acción humana, sino para poner en perspectiva lo que realmente importa.

¿Qué hace tan especial a ese Pálido Punto Azul? En términos astronómicos, casi nada: es un planeta rocoso de tamaño mediano, en la **Zona de Habitabilidad** de una estrella amarilla enana de tipo G, en el brazo de Orión de una galaxia espiral barrada de tamaño mediocre entre los 2 billones de galaxias del Universo Observable. Pero en términos de complejidad organizada de la materia, es posiblemente el objeto más asombroso del que tengamos conocimiento: alberga vida, alberga consciencia, alberga arte, música, ciencia y tecnología. De entre todos los elementos del Universo, en este planeta polvo han surgido organismos capaces de preguntarse sobre el origen de las estrellas y los quarks.

El **azul** del punto no es arbitrario. La Tierra se ve azul desde el espacio por dos razones: el 71% de su superficie está cubierta de océanos, que absorben las longitudes de onda del rojo y reflejan el azul, y la atmósfera difunde preferentemente la luz azul (efecto **Rayleigh Scattering**), que es también la razón por la que el cielo diurno es azul. Sin esos océanos líquidos y sin esa atmósfera particular —producto de 3,800 millones de años de evolución biológica que acumuló el oxígeno liberado por la fotosíntesis— el punto sería gris o marrón, como Marte.

El legado de esta imagen fue conceptual y también práctico: inspiró una generación de astrónomos, biólogos y científicos planetarios a dedicar sus carreras a entender qué hace habitable a un planeta, y a buscar otros puntos azules pálidos orbitando otras estrellas. Hoy, los telescopios espaciales del programa **TESS** de NASA y el **JWST** buscan activamente exoplanetas con señales de vapor de agua, oxígeno y metano en sus atmósferas: las rubricas de la vida tal como la conocemos.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.3** (Págs. 23–24)
**📐 NGSS: HS-ESS1-1 · HS-ESS2-4** — Analizar evidencia sobre las condiciones que hacen habitable a la Tierra.
**📋 RENAC: EC009 · Astronomía y Habitabilidad Planetaria**
**💡 Standards World:** Pálido Punto Azul · Carl Sagan · Voyager 1 · Zona de Habitabilidad · Rayleigh Scattering · Océanos · Atmósfera · TESS · JWST""",

"1.20": """Si redujéramos el Sol al tamaño de una pelota de baloncesto y lo colocáramos en el centro de Los Ángeles, la estrella más cercana —**Alfa Centauri**— estaría en la Ciudad de México. Esta analogía, aunque simplificada, captura la realidad más chocante de la astronomía: incluso nuestros vecinos estelares están a distancias que hacen que cualquier viaje interplanetario humano actual parezca absolutamente trivial en comparación.

**Alfa Centauri** no es una estrella sino un sistema estelar triple, a 4.37 años luz de la Tierra. Tiene tres componentes: **Alfa Centauri A** es una estrella amarilla muy similar al Sol (tipo G2V), ligeramente más grande y brillante. **Alfa Centauri B** es una estrella naranja más pequeña (tipo K1V). Ambas orbitan compartiendo un centro de masa, creando un sistema binario que completa una vuelta en 79.9 años. El tercer componente, **Próxima Centauri**, es una enana roja diminuta que orbita a enormes distancias del par central y actualmente está ligeramente más cerca de la Tierra: 4.24 años luz, el objeto estelar más cercano a nuestro Sol.

En 2016, astrónomo del European Southern Observatory (ESO) anunciaron el descubrimiento de un exoplaneta orbitando **Próxima Centauri** en la zona de habitabilidad: **Próxima b**. Con una masa de al menos 1.17 veces la de la Tierra y un período orbital de 11.2 días (está muy cerca de su estrella enana), es candidato a albergar agua líquida. Sin embargo, las enanas rojas como Próxima son propensas a llamaradas estelares violentas que podrían bombardear el planeta con radiación ultravioleta y rayos X, haciendo problemática la habitabilidad a largo plazo.

El concepto de **año luz** que define estas distancias es fundamental. Un año luz no es una medida de tiempo, sino de distancia: es cuánto recorre la luz en exactamente un año a su velocidad de 300,000 km/s. Un año luz equivale a 9.461 × 10¹² km, o aproximadamente **9.5 billones de kilómetros**. La sonda **Voyager 1**, que viaja a unos 17 km/s (la sonda hecha por el hombre más rápida de la historia), tardará más de 75,000 años en recorrer un año luz. Llegar a Alfa Centauri con la tecnología actual tomaría unos 300,000 años.

¿Es posible algún día llegar allí en una sola vida humana? El proyecto **Breakthrough Starshot**, fundado en 2016 por el físico Stephen Hawking y el empresario Yuri Milner, propone enviar una flota de nanosondas del tamaño de un chip aceleradas por un **láser de tierra** hasta el 20% de la velocidad de la luz. A esa velocidad, llegarían a Alfa Centauri en 20 años. Cada sonda pesaría gramos, costaría centavos de producir y llevaría cámaras y sensores para fotografiar la atmósfera de Próxima b. La tecnología de propulsión de vela de luz (light sail) que utilizaría está basada en la misma presión de radiación que empuja las colas de los cometas lejos del Sol.

Estudiar el vecindario estelar más cercano nos pone cara a cara con la pregunta más fundamental para el futuro de la humanidad: ¿somos capaces de convertirnos en una **civilización multiplanetaria e interestelar**? La respuesta depende de avances en física, ingeniería de materiales, propulsión y biología que todavía están en sus infancias. Pero el viaje, en la imaginación, ya ha comenzado.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.3** (Pág. 24)
**📐 NGSS: HS-ESS1-1 · HS-ESS1-2** — Usar modelos astronómicos para comprender las escalas de distancia en el Universo.
**📋 RENAC: EC009 · Exploración Espacial y Astrofísica**
**💡 Standards World:** Alfa Centauri · Próxima Centauri · Años Luz · Exoplanetas · Breakthrough Starshot · Vela Láser · Zona de Habitabilidad · Sistema Estelar Triple""",

"1.21": """Todo en el Universo está en movimiento. Las galaxias no están estáticas en el espacio sino flotando en corrientes gravitacionales, acercándose y alejándose unas de otras dependiendo de la geometría del espacio-tiempo local y el dominio de la energía oscura a grandes escalas. Y nuestra Galaxia, la Vía Láctea, tiene una cita inevitableconfigured en el calendario cósmico: dentro de aproximadamente **4,500 millones de años**, chocará con nuestra galaxia vecina, **Andrómeda** (M31), en un evento que los astrónomos ya han bautizado con el portmanteau **Lactómeda** (*Milky Way* + *Andromeda*).

Andrómeda es la galaxia espiral más grande del **Grupo Local** —el pequeño clúster de unas 50 galaxias al que pertenece la Vía Láctea— y se acerca a nosotros actualmente a una velocidad de aproximadamente 110 kilómetros por segundo. No la vemos acercarse a simple vista porque está a 2.537 millones de años luz, pero los astrónomos del **Telescopio Espacial Hubble** midieron en 2012 su movimiento lateral con precisión suficiente para confirmar que la colisión es prácticamente inevitable.

Pero "colisión" es una palabra engañosa cuando hablamos de galaxias. Las estrellas, a pesar de que una galaxia contiene cientos de miles de millones de ellas, están separadas por distancias tan vastas que la probabilidad de que dos estrellas choquen directamente durante la fusión es extremadamente baja. El Sol y sus planetas casi con toda seguridad no serán destruidos directamente por el impacto. Lo que sí ocurrirá es una **danza gravitacional** de millones de años: las galaxias se atraerán mutuamente, pasarán una "a través" de la otra, se alejarán, serán atraídas de nuevo por la gravedad y finalmente, tras múltiples pases, se fusionarán en una sola galaxia elíptica gigante en unos 7,000 millones de años.

Las consecuencias para el Sistema Solar aún son inciertas. Las simulaciones computacionales muestran que hay una probabilidad no despreciable de que el Sistema Solar sea expulsado a regiones mucho más alejadas del centro de la nueva galaxia fusionada, o incluso que sea catapultado completamente fuera de ella. También habrá períodos de intensa formación estelar mientras las nubes de gas de ambas galaxias colisionan y se comprimen, creando oleadas de nuevas estrellas —una actividad "starburst"— visible en galaxias en fusión que hemos observado con el Hubble en millones de galaxias lejanas.

Para cuando Lactómeda ocurra, el Sol se estará acercando al final de su vida de secuencia principal. Habrá comenzado a expandirse hacia una **Gigante Roja**, potencialmente absorbiendo las órbitas de Mercurio, Venus y posiblemente la Tierra. Si todavía existe humanidad en ese momento —o cualquier descendiente de la humanidad lo suficientemente evolucionado para seguir siendo reconocible— habrá tenido tiempo de sobra de migrar a otros sistemas estelares.

La historia de **Lactómeda** nos enseña algo profundo sobre la escala del cosmos y la naturaleza de la estabilidad: nada es permanente incluso a escalas astronómicas. Las galaxias colisionan, las estrellas mueren y dan a luz nuevas estrellas, y el Universo continúa organizando materia en estructuras cada vez más complejas. Somos observadores privilegiados de este proceso, equipados con telescopios y matemáticas capaces de predecir eventos que ocurrirán en 4,500 millones de años con razonable precisión.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.3** (Págs. 24–25)
**📐 NGSS: HS-ESS1-1 · HS-ESS1-2** — Analizar modelos de evolución estelar y galáctica basados en evidencia astronómica.
**📋 RENAC: EC009 · Astrofísica y Dinámica Galáctica**
**💡 Standards World:** Lactómeda · Andrómeda · Vía Láctea · Fusión Galáctica · Grupo Local · Danza Gravitacional · Starburst · Gigante Roja · Hubble""",

"1.22": """En la **Estación Espacial Internacional (ISS)**, a 408 km sobre la superficie terrestre, los astronautas flotan. Duermen en sacos de dormir sujetos a la pared. Comen alimentos rehidratables con cucharas magnéticas para evitar que los trozos floten hacia los equipos. El agua no cae sino que forma esferas perfectas que ruedan por el aire. Esta experiencia, que llamamos **microgravedad**, es uno de los entornos más fascinantes y desafiantes que el ser humano ha habitado y plantea preguntas fundamentales tanto de fisica como de biología.

Lo primero que hay que aclarar es el mito más popular de la exploración espacial: los astronautas de la ISS no flotan porque "no hay gravedad en el espacio". La gravedad terrestre a 408 km de altitud sigue siendo aproximadamente el **90%** de la que sentimos en la superficie. Los astronautas flotan porque están en **caída libre constante**. La ISS orbita la Tierra a 7.66 km/s —cerca de 28,000 km/h. A esa velocidad, la curvatura de la Tierra "se aleja" tan rápido como la ISS cae hacia ella por la gravedad. El resultado neto es que la estación está cayendo infinitamente sin llegar a impactar, y todos los ocupantes y objetos dentro caen junto con ella a la misma tasa. Esto crea la sensación de flotación: no hay superficie que "empuje" hacia arriba en ninguna dirección.

El término **microgravedad** es más preciso que "cero gravedad" porque en la ISS sí existen perturbaciones gravitacionales muy pequeñas causadas por el arrastre atmosférico residual, la presión de radiación solar y las diferencias gravitacionales entre puntos distintos de la estación (mareas gravitacionales). Los instrumentos científicos ultraprecisosas de la ISS registran aceleraciones de hasta 10⁻⁶ g (una millonésima de la gravedad terrestre), lo que da nombre al término "micro".

¿Por qué es tan valiosa la microgravedad como entorno de investigación? Porque elimina la **convección** — el mezclado de fluidos por diferencias de densidad causado por la gravedad — lo que permite crecer cristales de proteínas con una perfección imposible en la Tierra. Los cristales más perfectos de insulina humana, de virus importantes en medicina y de superconductores de alta temperatura se han cultivado en la ISS. También permite estudiar **procesos de combustión** en condiciones donde las llamas forman esferas perfectas (sin convección que las deforme), revelando mecanismos de quema que son más eficientes y menos contaminantes, con aplicaciones directas en el diseño de motores.

La ISS es también el laboratorio de **biología espacial** más valioso que tenemos: en su interior se han hecho cultivos de plantas, se ha estudiado el comportamiento de bacterias en microgravedad (que pueden volverse más agresivas y resistentes a antibióticos, un hallazgo preocupante para las misiones largas), y se investiga el **deterioro fisiológico** de los astronautas que el siguiente módulo cubre en profundidad.

En total, la ISS ha albergado a más de **270 astronautas** de 20 países. Ha realizado más de 3,000 experimentos científicos desde su primer módulo lanzado en 1998. Es, sin duda, la obra de ingeniería y cooperación internacional más compleja en la historia de la humanidad.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.4 — Gravedad** (Págs. 26–28)
**📐 NGSS: HS-PS2-1 · HS-PS2-4** — Analizar datos sobre la interacción gravitacional en sistemas de referencia en caída libre.
**📋 RENAC: EC009 · Física Aplicada · Exploración Espacial**
**💡 Standards World:** ISS · Microgravedad · Caída Libre · Órbita · Convección · Biología Espacial · Cristales de Proteína · 7.66 km/s""",

"1.23": """El cuerpo humano fue diseñado por la evolución para funcionar bajo una fuerza de gravedad específica: **1G**, la gravedad de la superficie terrestre, equivalente a una aceleración de 9.81 m/s². Cada sistema de tu cuerpo —esquelético, muscular, cardiovascular, vestibular— fue optimizado durante millones de años de evolución para operar en este rango gravitacional preciso. Sacar a un ser humano de este entorno por períodos prolongados tiene consecuencias fisiológicas profundas y complejas que la medicina espacial lleva décadas estudiando.

La **pérdida de densidad ósea** es uno de los efectos más severos de la microgravedad. En condiciones de 1G, el esqueleto soporta constantemente el peso del cuerpo. Esta carga mecánica estimula a los osteoblastos (células que construyen hueso) a depositar nuevas capas de mineral óseo. En microgravedad, sin esa carga, los osteoblastos se desaceleran y los osteoclastos (que reabsorben hueso) continúan trabajando, resultando en pérdidas de masa ósea de entre **1-2% por mes**, principalmente en los huesos de cadera, fémur y columna lumbar. Un astronauta que pasa 6 meses en la ISS puede perder tanta masa ósea como una persona con osteoporosis de 10 años. El ejercicio intensivo —2 horas diarias en la ISS— mitiga pero no elimina este efecto.

La atrofia **muscular** sigue un patrón similar. Sin la necesidad de soportar el peso corporal, los músculos antigravitatorios —glúteos, cuádriceps, pantorrillas, espinales— se atrofian rápidamente. Los astronautas reportan dificultad para caminar durante las primeras horas tras el retorno a la Tierra después de misiones largas. La reconversión muscular tarda semanas.

En el sistema **cardiovascular**, el fluido corporal —normalmente jalado hacia abajo por la gravedad, manteniendo mayor volumen en las piernas— se redistribuye uniformemente. El resultado inmediato es una sensación de "cabeza llena" o congestión facial, similar a estar boca abajo durante horas. A largo plazo, el corazón detecta el exceso de fluido en el torso y reduce la producción de plasma sanguíneo: hay un 10-15% menos de volumen sanguíneo total tras pocas semanas en órbita. Al regresar a la gravedad, este volumen reducido puede causar mareos e hipotensión ortostática.

Quizás el efecto más alarmante descubierto en la última década es la **neurooftalmología espacial** o Síndrome del Daño Visual Intracraneal (VIIP). El fluido cefalorraquídeo, sin gravedad para mantenerse en el nivel de la médula espinal, acumula mayor presión en el cráneo. Esta presión intracraneal aumentada aplana el globo ocular y presiona el nervio óptico, produciendo cambios en la visión que en algunos casos son permanentes. Cerca del 40% de los astronautas de misiones de larga duración reportan deterioro visual. Es actualmente uno de los mayores obstáculos médicos para los planes de viajes a Marte.

El impacto de la **radiación** fuera de la magnetósfera terrestre es otro factor crítico. En la Tierra, nuestro planeta nos protege con su campo magnético y la atmósfera. En el espacio profundo, los rayos cósmicos galácticos y las erupciones solares impactan el ADN de las células, aumentando el riesgo de cáncer. La dosis de radiación en la ISS (dentro de la magnetósfera) es aproximadamente 10 veces mayor que en la superficie terrestre. En un viaje a Marte (fuera de la magnetósfera), sería entre 100 y 1,000 veces mayor sin protección adecuada.

La fisiología humana en el espacio nos recuerda cuán profundamente somos criaturas de la Tierra. Adaptar nuestra biología para habitar otros mundos —o crear tecnologías que compensen los efectos de la microgravedad y la radiación— es uno de los mayores desafíos de la **bioingeniería** del siglo XXI.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.4** (Págs. 27–28)
**📐 NGSS: HS-LS1-3 · HS-LS1-7** — Planificar y llevar a cabo investigaciones sobre cómo los sistemas corporales responden a los cambios ambientales.
**📋 RENAC: EC009 · Biología Espacial · Medicina de Exploración**
**💡 Standards World:** 1G · Pérdida Ósea · Atrofia Muscular · Cardiovascular · VIIP · Radiación Cósmica · Microgravedad · Osteoblastos · Bioingeniería"""
}

for ch in data['chapters']:
    for m in ch['modules']:
        if m['id'] in fullTexts:
            m['fullText'] = fullTexts[m['id']]

with open(path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

count = sum(1 for ch in data['chapters'] for m in ch['modules'] if 'fullText' in m)
print(f"✅ Batch 3 complete. {count} modules now have fullText content.")

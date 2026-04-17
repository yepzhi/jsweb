import json

path = '/Users/yepz/JSweb/data/modules.json'
with open(path, 'r', encoding='utf-8') as f:
    data = json.load(f)

fullTexts = {

"1.52": """A 22,000 millones de kilómetros de la Tierra, más allá de cualquier planeta del sistema solar, viaja una nave lanzada en 1977 que, casi 50 años después, sigue enviando datos científicos. La **Voyager 1** es el objeto fabricado por el ser humano que ha viajado más lejos en la historia. No usa paneles solares —a esa distancia, la luz solar es demasiado tenue. Su corazón energético son tres pequeñas esferas de **Plutonio-238** que generan electricidad mediante el calor de su propio decaimiento radiactivo. Bienvenido al mundo de los **RTGs: Generadores Termoeléctricos de Radioisótopos**.

Un RTG es elegantemente simple en concepto. Se toma un isótopo radiactivo que emite calor al desintegrarse (generalmente Pu-238, con una vida media de 87.7 años), se convierte ese calor en electricidad mediante el **Efecto Seebeck** (una corriente eléctrica que surge cuando dos materiales diferentes están a distintas temperaturas) y ¡listo! Una batería nuclear compacta, silenciosa, sin partes móviles, que funciona durante décadas sin mantenimiento.

El Efecto Seebeck fue descubierto en 1821 por el físico alemán **Thomas Johann Seebeck**. No es eficiente en términos absolutos (los RTGs convierten apenas el 6-8% del calor en electricidad), pero en el espacio profundo donde el Sol está demasiado lejos, donde no hay viento ni combustible, es la única opción viable. Las misiones **Pioneer**, **Voyager**, **Galileo**, **Cassini**, **New Horizons**, la rover **Curiosity** y la rover **Perseverance** usan o usaron RTGs para su energía.

El Pu-238 es ideal para RTGs porque emite principalmente radiación alfa, que es fácil de blindar (un cuaderno puede detenerla) y genera mucho calor. Además, su vida media de 87 años significa que el RTG pierde solo el 0.8% de su potencia por año, perfecta para misiones largas. Un RTG moderno de 4.8 kg produce inicialmente unos 110 watts eléctricos, comparable a una bombilla de luz. Pequeño para estándares terrestres, pero más que suficiente para los instrumentos científicos de una nave espacial.

Los RTGs también tienen aplicaciones terrestres. Durante la Guerra Fría, la Unión Soviética instaló cientos de RTGs en faros y balizas de navegación remotas en el Ártico. Muchos fueron abandonados al colapsar la URSS, y su recuperación segura se convirtió en un desafío de no-proliferación nuclear. En medicina, las versiones miniaturizadas (betavoltaicas) alimentan algunos marcapasos cardíacos implantados que duran décadas sin cirugía de reemplazo de batería.

La tecnología RTG nos demuestra que la radiactividad —percibida frecuentemente como un peligro— puede ser una herramienta extraordinaria cuando se comprende y controla. Sin el decaimiento del plutonio, no habríamos explorado Plutón, no sabríamos cómo es la heliópausa (el límite del sistema solar) y Marte no tendría ojos. La física nuclear ha puesto naves en los confines del Universo.

---
**🔖 Bluebook v1 · Capítulo II, Sección 2.1** (Págs. 43–44)
**📐 NGSS: HS-PS3-3 · HS-ESS1-4** — Diseñar soluciones de conversión de energía basadas en principios de termoelectricidad y radiactividad.
**📋 RENAC: ET005 · Tecnología Espacial y Energía Nuclear**
**💡 Standards World:** RTG · Plutonio-238 · Efecto Seebeck · Voyager · Termoelectricidad · Vida Media · Misiones Espaciales · Betavoltaicas""",

"1.53": """Tu ADN es un archivo de información increíblemente denso, comprimido en una doble hélice de apenas 2 nanómetros de ancho que, desplegada, mediría casi 2 metros de largo. Cada día, las células de tu cuerpo experimentan entre 10,000 y 1,000,000 daños en este ADN, causados por factores internos (radicales libres del metabolismo) y externos. Uno de los más poderosos agresores externos es la **Radiación**, y entender cómo la maneja tu cuerpo es entender la frontera entre la reparación y el cáncer.

Existen dos tipos importantes de radiación en términos biológicos. La **Radiación No Ionizante** (luz visible, ondas de radio, microondas) tiene baja energía y generalmente solo calienta los tejidos sin dañar el ADN directamente. La **Radiación Ionizante** (rayos X, rayos gamma, partículas alfa y beta) tiene suficiente energía para arrancar electrones de los átomos, creando **Iones** y **Radicales Libres** altamente reactivos dentro de la célula.

Cuando la radiación ionizante golpea una molécula de ADN, puede ocurrir una **Rotura de Cadena Simple** (más fácil de reparar) o una **Rotura de Doble Cadena** (la más peligrosa). Las células tienen sofisticados mecanismos de reparación del ADN, como el sistema de **Escisión de Nucleótidos** y la **Recombinación Homóloga**, que normalmente corrigen estos daños con precisión. Sin embargo, si la reparación falla o es imprecisa, puede generarse una **Mutación**: un cambio permanente en la secuencia del ADN.

La mayoría de las mutaciones son inofensivas o incluso silenciosas. Pero si una mutación afecta a los genes que controlan la división celular (como los **Proto-Oncogenes** o los **Genes Supresores de Tumores**), la célula puede empezar a dividirse de forma descontrolada. Esto es el inicio del **Cáncer**. Consecuentemente, la exposición a radiación ionizante es uno de los factores de riesgo carcinogénico mejor documentados en la historia de la medicina.

Paradójicamente, esta misma propiedad destructiva de la radiación la convierte en un tratamiento contra el cáncer. La **Radioterapia** usa haces de rayos X o partículas para dañar el ADN de las células tumorales de forma preferencial, ya que las células cancerosas se dividen más rápido y tienen peores mecanismos de reparación que las células sanas. El reto es apuntar con precisión para minimizar el daño colateral.

La radiación también ocurre de forma natural. Los vuelos de larga distancia suben a altitudes donde la atmósfera protege menos, y los astronautas en la ISS reciben dosis de radiación significativamente mayores que en la Tierra. El entendimiento molecular del daño por radiación al ADN es crucial para diseñar los escudos y las intervenciones farmacológicas que protegerán a los futuros astronautas en misiones a Marte.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.5** (Págs. 35–37)
**📐 NGSS: HS-LS1-1 · HS-PS1-8** — Analizar y explicar los mecanismos de daño y reparación del ADN a nivel molecular.
**📋 RENAC: EC009 · Biología Molecular y Radioprotección**
**💡 Standards World:** ADN · Radiación Ionizante · Rotura de Doble Cadena · Mutación · Proto-Oncogén · Radioterapia · Reparación de ADN · Radicales Libres""",

"1.54": """Cada proceso en el universo que involucra energía —el fuego de una vela, el disparo de una neurona, la explosión de una estrella— está gobernado por las leyes de la **Termodinámica**. Estas leyes son absolutas; no admiten excepciones ni negociaciones, y definen los límites fundamentales de lo que es posible en cualquier sistema físico.

La **Primera Ley de la Termodinámica** es la ley de la conservación de energía: la energía no se crea ni se destruye, solo se transforma. Cuando quemas gasolina en un motor, la energía química se convierte en energía mecánica (movimiento) y calor. El total siempre se conserva. Esto implica que es imposible construir una **Máquina de Movimiento Perpetuo** que genere más energía de la que consume: prohibida por la Primera Ley.

La **Segunda Ley de la Termodinámica** introduce el concepto más profundo y filosófico de la física: la **Entropía**. La entropía es una medida del desorden o aleatoriedad de un sistema. La Segunda Ley dice que la entropía total de un sistema aislado siempre aumenta o permanece constante; nunca disminuye espontáneamente. Dicho de otra forma: el universo tiende naturalmente hacia el desorden. Un huevo roto no se reensambla solo; el calor fluye del objeto caliente al frío, no al revés; la taza de café se enfría, nunca se calienta sola.

Esta es la razón profunda por la que el tiempo parece tener una dirección: el **Arrow of Time** o Flecha del Tiempo. Las ecuaciones de la física son simétricas en el tiempo (funcionan igual hacia adelante y hacia atrás), pero la entropía creciente marca la dirección preferida. El universo va desde el Big Bang (estado de muy baja entropía, muy ordenado) hacia el futuro (creciente desorden). El destino último podría ser la **Muerte Térmica del Universo**: un estado de máxima entropía donde todo está a la misma temperatura y no puede ocurrir ningún proceso.

La **Tercera Ley** establece que a medida que la temperatura se acerca al **Cero Absoluto** (-273.15°C o 0 Kelvin), la entropía de un sistema cristalino perfecto tiende a cero. Esto significa que no podemos enfriar un sistema hasta exactamente el cero absoluto en un número finito de pasos; siempre habrá un poco de energía residual atrapada. En laboratorios modernos, los físicos han alcanzado temperaturas de apenas un millonésimo de Kelvin por encima del cero absoluto usando técnicas de enfriamiento láser para estudiar el **Condensado de Bose-Einstein**, un estado de la materia donde todos los átomos colapsan en el mismo estado cuántico mínimo.

Para la ingeniería, la termodinámica es el límite de eficiencia de toda máquina. El **Ciclo de Carnot** define la eficiencia máxima teórica de un motor térmico dependiendo de sus temperaturas de operación. Ningún motor real puede ser más eficiente que el de Carnot. Esta es la razón por la que los ingenieros siempre buscan operar motores a temperaturas cada vez más altas: no por capricho, sino porque la física lo exige.

---
**🔖 Bluebook v1 · Capítulo II, Sección 2.2 — Termodinámica** (Págs. 46–48)
**📐 NGSS: HS-PS3-1 · HS-PS3-4** — Desarrollar modelos para ilustrar los conceptos de energía, entropía y transferencia de calor.
**📋 RENAC: EC009 · Física Térmica e Ingeniería de Procesos**
**💡 Standards World:** Termodinámica · Entropía · Primera Ley · Segunda Ley · Cero Absoluto · Ciclo de Carnot · Muerte Térmica · Bose-Einstein""",

"1.55": """Cuando los astrónomos mapean las galaxias y calculan toda la gravedad que debería existir basada en la materia visible (estrellas, gas, polvo), encuentran un problema enorme: las galaxias giran demasiado rápido para la cantidad de materia que vemos. Deberían desintegrarse, pero no lo hacen. Algo invisible las está sujetando. A ese "algo" lo llamamos **Materia Oscura**, y representa el 27% de toda la energía-masa del universo.

El término "oscura" no significa que sea negra o que esté en la sombra; significa que no emite, absorbe ni refleja luz electromagnética de ningún tipo. No podemos verla con ningún telescopio actual, ya sea en luz visible, rayos X, infrarrojos o radio. Solo la detectamos indirectamente, a través de su efecto gravitacional sobre la materia visible. Es como detectar un barco invisible por las olas que deja en el agua.

La evidencia de la materia oscura viene de múltiples fuentes independientes. Las **Curvas de Rotación Galáctica** (pioneras de **Vera Rubin** en los años 70) muestran que las estrellas en los bordes de las galaxias giran igual de rápido que las del centro, algo imposible si toda la masa estuviera en el núcleo visible. El **Lensing Gravitacional** (la curvatura de la luz de objetos distantes por campos gravitacionales) revela halos de materia invisible alrededor de cúmulos de galaxias. Y la formación de las estructuras a gran escala del cosmos solo tiene sentido si una gran parte de la materia no interactuó con la luz en el universo temprano.

¿Qué es la materia oscura? Los candidatos más populares son los **WIMPs** (Partículas Masivas de Interacción Débil), hipotéticas partículas que interactuarían con la materia ordinaria solo a través de la gravedad y la fuerza débil. Detectores gigantescos como XENON1T, enterrados kilómetros bajo tierra para evitar la interferencia de radiación cósmica, buscan el rarísimo evento de un WIMP chocando con un núcleo de xenón. Hasta ahora, nada.

Otras hipótesis incluyen los **Axiones** (partículas extremadamente ligeras propuestas originalmente para resolver un problema de física de partículas), los **Agujeros Negros Primordiales** (formados en el Big Bang antes de que hubiera estrellas) o incluso modificaciones a la ley de la **Gravitación** (**MOND** o Dinámica Newtoniana Modificada). Ninguna explica todos los datos de forma satisfactoria.

La materia oscura es el mayor misterio de la física moderna. Sabemos con certeza que existe porque vemos su efecto gravitacional, pero no tenemos idea de qué es. Es el 27% del universo que nos mira desde las sombras, y desentrañar su naturaleza será probablemente la mayor revolución científica del siglo XXI.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.2 — Cosmología** (Págs. 20–22)
**📐 NGSS: HS-ESS1-2** — Construir explicaciones usando evidencia observacional sobre la estructura y composición del universo.
**📋 RENAC: EC009 · Cosmología y Astrofísica Observacional**
**💡 Standards World:** Materia Oscura · WIMP · Vera Rubin · Curvas de Rotación · Lensing Gravitacional · Axión · Halo Galáctico · MOND""",

"1.56": """Si la Materia Oscura es el misterio del 27%, la **Energía Oscura** es el misterio del 68%. Juntas forman el 95% de todo el universo. Solo el 5% restante es la materia "normal" que estudiamos en libros de texto, que vemos con telescopios, y de la que estamos hechos nosotros. El universo es, en su inmensa mayoría, algo que no entendemos.

La Energía Oscura fue descubierta en 1998 de forma completamente inesperada. Equipos de astrónomos liderados por **Saul Perlmutter**, **Brian Schmidt** y **Adam Riess** (que compartirían el Premio Nobel de Física 2011) estaban usando supernovas de Tipo Ia como "velas estándar" para medir la expansión del universo, esperando confirmar que la expansión se estaba frenando por la gravedad. Encontraron exactamente lo opuesto: la expansión del universo se está **acelerando**.

Para que la expansión se acelere, debe haber una fuerza que se opone a la gravedad a escala cósmica. Einstein ya había sospechado algo así cuando introdujo en sus ecuaciones la **Constante Cosmológica (Λ)** como una "energía del vacío" que contrarrestaba la gravedad. La descartó más tarde llamándola su "mayor error". Resulta que tenía razón desde el principio: hay una energía intrínseca al espacio vacío que actúa como una repulsión a gran escala.

La naturaleza de la Energía Oscura es completamente desconocida. El modelo más popular la trata como una **Constante Cosmológica**: una densidad de energía uniforme y constante del espacio vacío. Otras teorías la modelan como un campo dinámico llamado **Quintaesencia**, que puede variar en el tiempo y el espacio. Conocer si la energía oscura es constante o dinámica determinará el destino final del universo: una expansión que se estabiliza, una que se acelera para siempre (el **Big Freeze**), o incluso una que se vuelve tan violenta que desgarra el tejido del espacio (el **Big Rip**).

En el **Gran Desgarro** (Big Rip), la aceleración de la expansión se volverá tan extrema que terminará con la expansión del universo. Primero se separarán los cúmulos de galaxias, luego las galaxias mismas, luego los sistemas solar, luego los planetas, luego los átomos, y finalmente, el espacio-tiempo mismo se desgarrará hace un tiempo finito en el futuro.

La Energía Oscura es el mayor enigma de la cosmología. Su estudio requiere combinar la relatividad general de Einstein con la mecánica cuántica, precisamente las dos teorías que todavía no hemos logrado unificar. La **Teoría de Cuerdas** y las teorías de **Multiverso** ofrecen marcos matemáticos posibles, pero su verificación experimental es, por ahora, imposible.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.2** (Págs. 20–22)
**📐 NGSS: HS-ESS1-2** — Analizar datos astronómicos para construir argumentos sobre la composición y evolución del universo.
**📋 RENAC: EC009 · Cosmología Teórica y Observacional**
**💡 Standards World:** Energía Oscura · Constante Cosmológica · Big Freeze · Big Rip · Supernovas · Aceleración Cósmica · Nobel 2011 · Quintaesencia""",

"1.57": """¿Es la luz una onda o una partícula? Durante siglos, esta pregunta dividió a la física en dos campos. Newton insistía en que la luz eran "corpúsculos" (partículas). Huygens y Maxwell demostraron que era una onda electromagnética. Entonces llegó Einstein con los fotones y lo complicó todo. La respuesta resulto ser: **las dos cosas a la vez**, y ese es quizás el hecho más extraño y revolucionario de la física del siglo XX.

Un **Fotón** es el cuanto de luz —el paquete mínimo indivisible de energía electromagnética. La energía de un fotón es E = hf, donde h es la constante de Planck (h ≈ 6.63 × 10⁻³⁴ J·s) y f es la frecuencia de la luz. La luz ultravioleta tiene fotones de mayor energía que la luz roja, por eso el UV puede dañar el ADN de tu piel y la luz roja no.

El fenómeno de la **Dualidad Onda-Partícula** fue confirmado definitivamente por el **Experimento de la Doble Rendija**. Si disparas electrones (o fotones) uno a uno hacia una barrera con dos rendijas y observas dónde llegan en una pantalla detrás, aparece un **Patrón de Interferencia**, como si cada partícula pasara por ambas rendijas simultáneamente y se interfiriera a sí misma. Sin embargo, si pones un detector en las rendijas para "mirar" por cuál pasa cada partícula, el patrón de interferencia desaparece. El simple acto de observar colapsa el comportamiento de onda al de partícula. Este experimento es la demostración más clara de la **Mecánica Cuántica**: la realidad a escala subatómica existe en superposición hasta que es observada.

La **Ecuación de Schrödinger** describe cómo evoluciona esta función de onda, y su cuadrado da la probabilidad de encontrar una partícula en cada punto del espacio. Esto significa que la física cuántica es fundamentalmente probabilística: no puedes predecir exactamente dónde estará un electrón, solo las probabilidades de encontrarlo en distintos lugares.

Esta dualidad tiene consecuencias tecnológicas masivas. El **Efecto Fotoeléctrico** (que Einstein explicó con fotones y le valió el Nobel) es el principio detrás de las células solares y los sensores CMOS de tu cámara. El **Efecto Túnel Cuántico** (donde los electrones "atraviesan" barreras gracias a su comportamiento ondulatorio) es el principio que permite que funcionen los transistores modernos a escala nanométrica. La mecánica cuántica no es solo filosofía abstracta; es la base de cada chip de silicio fabricado en el mundo.

La dualidad onda-partícula nos enseña que nuestra intuición cotidiana, formada en el mundo macroscópico, falla completamente a escala atómica. El universo cuántico no es raro; nosotros somos los raros, demasiado grandes para percibir la realidad en su forma más fundamental.

---
**🔖 Bluebook v1 · Capítulo II, Sección 2.1** (Págs. 44–46)
**📐 NGSS: HS-PS4-1 · HS-PS4-3** — Usar modelos matemáticos para describir comportamientos de onda y las propiedades de la luz como onda y como partícula.
**📋 RENAC: EC009 · Física Cuántica y Óptica**
**💡 Standards World:** Fotón · Dualidad Onda-Partícula · Experimento de Doble Rendija · Ecuación de Schrödinger · Efecto Fotoeléctrico · Efecto Túnel · Constante de Planck · Mecánica Cuántica""",

"1.58": """Todo lo que existe emite o interactúa con algún tipo de radiación electromagnética. Tu cuerpo irradia calor infrarrojo (por eso los visores de visión nocturna te pueden detectar en la oscuridad). El microondas de tu cocina emite microondas que hacen vibrar las moléculas de agua de la comida. Los rayos X atraviesan tus tejidos blandos pero no tus huesos. Toda esta diversidad es parte de una sola familia: el **Espectro Electromagnético**.

La radiación electromagnética viaja en forma de **ondas transversales** de campos eléctricos y magnéticos perpendiculares entre sí, que se propagan en el vacío a la velocidad de la luz (c ≈ 3×10⁸ m/s). Lo que distingue a los diferentes tipos de radiación es únicamente su **frecuencia** (cuántas oscilaciones por segundo) o, equivalentemente, su **longitud de onda** (distancia entre dos crestas consecutivas). Frecuencia y longitud de onda son inversamente proporcionales: λ = c/f.

El espectro va desde las ondas de **Radio** (longitudes de onda de kilómetros, muy baja energía) hasta los **Rayos Gamma** (longitudes de onda de femtómetros, energía extremadamente alta). De menor a mayor energía: Radio → Microondas → Infrarrojo → Luz Visible → Ultravioleta → Rayos X → Rayos Gamma. La franja de luz visible que nuestros ojos pueden detectar (400 nm a 700 nm de longitud de onda) representa una fracción mínima de este espectro colosal.

La naturaleza de la interacción de cada tipo de radiación con la materia depende de su energía. La **Microondas** hace resonar moléculas polares (como el agua). El **Infrarrojo** es absorbido como calor. El **Ultravioleta** puede romper enlaces químicos (quemarse al sol es daño UV al ADN de la piel). Los **Rayos X** penetran tejidos blandos pero son absorbidos por el calcio de los huesos. Los **Rayos Gamma** son los más penetrantes y peligrosos para la materia viva.

Esta diversidad de propiedades hace que diferentes partes del espectro sean útiles para astronomía de distintas maneras. El telescopio **Chandra** observa el universo en Rayos X, revelando gas extremadamente caliente alrededor de agujeros negros. El telescopio **Spitzer** usaba infrarrojo para ver a través de nubes de polvo que bloquean la luz visible. El radiotelescopio **ALMA** en Chile observa en milímetros para estudiar la formación de planetas. El universo luce radicalmente diferente dependiendo de con qué "ojos" lo mires.

Para los **Ingenieros de Telecomunicaciones**, el espectro radioeléctrico es un recurso finito y de enorme valor económico. La asignación de frecuencias para 5G, WiFi, Bluetooth, GPS, transmisión de TV satelital y vuelos de aviación debe coordinarse internacionalmente para evitar interferencias, por lo que organismos como la **UIT** (Unión Internacional de Telecomunicaciones) regulan su uso globalmente. El espectro es el "terreno" sobre el que se construye toda la comunicación inalámbrica moderna.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.6** (Págs. 37–38)
**📐 NGSS: HS-PS4-1 · HS-PS4-5** — Evaluar preguntas sobre el uso de modelos de onda para describir el espectro electromagnético.
**📋 RENAC: ET002 · Telecomunicaciones y Física de Ondas**
**💡 Standards World:** Espectro Electromagnético · Frecuencia · Longitud de Onda · Infrarrojo · Ultravioleta · Rayos X · Radio · Rayos Gamma""",

"1.59": """Imagina que pudieras identificar la composición química exacta de una estrella a 10,000 años luz de distancia, sin enviar ninguna sonda, sin tomar ninguna muestra. Solo con luz. Esto es exactamente lo que hace la **Espectroscopía**, y es una de las herramientas más poderosas jamás desarrolladas por la ciencia.

Cuando la luz blanca pasa a través de un prisma, se descompone en los colores del arcoíris. Esto ocurre porque cada color (cada longitud de onda) se refracta a un ángulo diferente en el cristal. Lo que Newton observó fue el **Espectro Continuo**: todos los colores presentes sin interrupciones. Pero cuando la luz pasa primero a través de un gas antes de llegar al prisma, el resultado es diferente: el arcoíris aparece con finísimas **Líneas Oscuras** (de absorción) en posiciones muy específicas.

Estas líneas oscuras son la firma química del gas. Cada elemento absorbe (y emite) luz solo en longitudes de onda muy específicas, determinadas por los niveles de energía de sus electrones. Cuando un fotón de exactamente la energía correcta choca con un electrón, este salta a un nivel de energía superior, absorbiendo el fotón. Cuando cae de vuelta, emite un fotón de la misma energía exacta. Esto crea líneas inmutables, como un **Código de Barras Atómico** único para cada elemento.

El astrónomo alemán **Joseph von Fraunhofer** catalogó en 1814 más de 570 líneas oscuras en el espectro solar. Décadas después, se descubrió que cada línea correspondía a un elemento específico. Así supimos que el Sol contiene helio antes de que este gas fuera descubierto en la Tierra (el nombre "helio" viene de Helios, el dios griego del Sol). La espectroscopía no solo nos dice qué hay en las estrellas, sino también su **temperatura**, **velocidad** y **campo magnético**.

El **Efecto Doppler** en el espectro es crucial para la cosmología. Cuando una fuente de luz se aleja de ti, sus líneas espectrales se desplazan hacia el rojo (**Corrimiento al Rojo** o Redshift). Cuando se acerca, se desplazan hacia el azul. **Edwin Hubble** usó el corrimiento al rojo de las galaxias para descubrir en 1929 que el universo se expande: las galaxias se alejan de nosotros a velocidades proporcionales a su distancia. La espectroscopía reveló la expansión del universo.

Hoy, la espectroscopía es usada para detectar **exoplanetas** (planetas fuera del sistema solar) mediante el método de velocidad radial: observar cómo el tirón gravitacional de un planeta hace que su estrella se mueva ligeramente hacia y lejos de nosotros, creando un patrón de Redshift y Blueshift periódico. También identifica la composición de las atmósferas de esos planetas, buscando biosignatures de vida: oxígeno, metano, ozono.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.2** (Págs. 21–22)
**📐 NGSS: HS-ESS1-2 · HS-PS4-1** — Usar información del espectro electromagnético para obtener evidencia sobre la composición del universo.
**📋 RENAC: EC009 · Astronomía Observacional y Astrofísica**
**💡 Standards World:** Espectroscopía · Líneas de Absorción · Fraunhofer · Efecto Doppler · Redshift · Hubble · Exoplanetas · Código de Barras Atómico""",

"1.60": """Pocas herramientas han transformado nuestra comprensión del cosmos como los grandes telescopios espaciales. El **Telescopio Espacial Hubble** y su sucesor, el **Telescopio Espacial James Webb (JWST)**, son los ojos más grandes y poderosos que la humanidad ha puesto en el espacio, y juntos han redibujado el mapa del universo observable.

El **Hubble** fue lanzado en 1990 y, a pesar de un defecto inicial en su espejo primario (corregido en 1993 por astronautas en una misión de servicio), se convirtió en el instrumento científico más productivo de la historia. Opera principalmente en luz visible e infrarrojo cercano, orbitando a 547 km de altitud, por encima de la atmósfera que distorsiona las imágenes terrestres. Entre sus logros: medir con precisión la **Constante de Hubble** (la tasa de expansión del universo), descubrir que los agujeros negros supermasivos residen en el centro de casi todas las galaxias grandes, y capturar imágenes de galaxias formadas apenas 400 millones de años después del Big Bang.

El **JWST**, lanzado el 25 de diciembre de 2021 y operativo desde julio de 2022, es 100 veces más poderoso que el Hubble en infrarrojo. Opera en el punto **Lagrange L2** del sistema Tierra-Sol, a 1.5 millones de km de la Tierra, donde la sombra de un escudo solar ultra delgado mantiene sus detectores a -233°C para que el propio calor del telescopio no interfiera con las débilísimas señales infrarrojas del universo lejano.

El infrarrojo es clave para ver el universo temprano porque la expansión del cosmos estira la luz de las galaxias más lejanas hacia longitudes de onda mayores (**redshift cosmológico**). Las primeras galaxias, que emitieron luz ultravioleta y visible, nos llegan hoy como infrarrojo. El JWST ya ha detectado galaxias de apenas **300 millones de años** de edad tras el Big Bang, mucho más formadas de lo que los modelos predecían, obligando a los cosmólogos a revisar los modelos de formación galáctica.

El JWST también es revolucionario para el estudio de exoplanetas. Puede analizar el espectro de la atmósfera de planetas lejanos cuando estos transitan frente a su estrella, buscando moléculas como agua, metano, CO₂ y oxígeno: potenciales **biosignatures** o señales de vida. La pregunta "¿estamos solos?" podría acercarse a una respuesta con este telescopio.

Los telescopios espaciales son el triunfo de la colaboración internacional y la ingeniería extrema. El JWST involucró a más de 10,000 personas de 14 países durante 25 años de desarrollo. Su espejo plegable de 6.5 metros de diámetro, que tuvo que desplegarse perfectamente en el espacio después del lanzamiento, es la hazaña de ingeniería de precisión más compleja jamás realizada. Cada imagen que nos envía es un telegrama desde los confines del tiempo.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.2** (Págs. 20–22)
**📐 NGSS: HS-ESS1-2 · HS-ESS1-1** — Analizar datos de telescopios espaciales para evaluar modelos sobre la formación y evolución del universo.
**📋 RENAC: EC009 · Astrofísica Instrumental y Cosmología**
**💡 Standards World:** Hubble · Webb JWST · Infrarrojo · Redshift Cosmológico · Punto Lagrange · Constante de Hubble · Biosignatures · Galaxias Primordiales""",

"1.61": """En 1905, un empleado de la oficina de patentes de Berna llamado **Albert Einstein** publicó cuatro artículos científicos que cambiaron el curso de la física para siempre. Uno de ellos contenía la ecuación más famosa del mundo: **E = mc²**. Tan corta que cabe en una camiseta. Tan profunda que redefinió nuestra comprensión de la materia, la energía, el espacio y el tiempo.

La ecuación dice que la energía (E) y la masa (m) son la misma cosa, solo que en diferentes formas, relacionadas por el cuadrado de la velocidad de la luz (c = 3×10⁸ m/s). Como c² es un número enormemente grande (9×10¹⁶), incluso una masa diminuta contiene una cantidad de energía colosal. Un gramo de materia completamente convertida en energía equivale a la explosión de aproximadamente 20 bombas atómicas de las usadas en Hiroshima.

Este no es un resultado trivial o abstracto. Es la explicación de por qué brilla el Sol. En las reacciones de fusión solar, cuatro núcleos de hidrógeno se fusionan en uno de helio. Pero el helio pesa un 0.7% menos que los cuatro hidrógenos por separado. Esa minúscula diferencia de masa (el **defecto de masa**) se convierte completamente en energía según E=mc². El Sol convierte **4 millones de toneladas de masa en energía por segundo**, lo que equivale a 3.8 × 10²⁶ watts de potencia radiada al espacio.

En las bombas nucleares y los reactores de fisión, la conversión de masa en energía también opera, aunque la fracción convertida es mucho menor (cerca del 0.1% de la masa del combustible). En la aniquilación de materia y antimateria, la conversión es del 100%: toda la masa se transforma en fotones gamma. Si pudiéramos aprovechar la antimateria como combustible, un solo gramo podría alimentar un cohete hasta Marte.

La ecuación también predice que un objeto en movimiento tiene más masa (masa relativista) que en reposo. Esto tiene consecuencias prácticas en los aceleradores de partículas: cuanto más aceleran un protón, más pesado se vuelve, requiriendo más energía para acelerarlo aún más. Por eso, aunque el LHC inyecta 6.5 TeV de energía por protón, estos nunca alcanzarán exactamente la velocidad de la luz, solo podrán aproximarse a ella asintóticamente.

E=mc² unificó conceptos que antes eran completamente separados: la materia dejó de ser solo "sustancia sólida" y pasó a ser "energía densificada". Cambió la forma en que los científicos piensan sobre la naturaleza de la realidad. Y, lamentablemente para Einstein, que era pacifista, también pavimentó el camino hacia la era nuclear. La ciencia da poder; la humanidad decide cómo lo usa.

---
**🔖 Bluebook v1 · Capítulo II, Sección 2.1** (Págs. 44–45)
**📐 NGSS: HS-PS3-1** — Crear representaciones y modelos que usen información de datos para demostrar la conservación de la energía.
**📋 RENAC: EC009 · Física Relativista y Energía Nuclear**
**💡 Standards World:** E=mc2 · Albert Einstein · Relatividad Especial · Defecto de Masa · Fusión Nuclear · Velocidad de la Luz · Antimateria · Potencia Solar""",

"1.62": """¿Cómo sabemos que algo es verdad en ciencia? ¿Por qué podemos confiar que las vacunas funcionan, que el cambio climático es real o que el universo tiene 13,800 millones de años? La respuesta no es fe ni autoridad: es el **Método Científico**, el sistema más poderoso que la humanidad ha desarrollado para distinguir la verdad del error y de la ilusión.

El método científico no es un algoritmo rígido de pasos, sino una filosofía de aproximación a la realidad basada en evidencia, repetición y honestidad intelectual. Comienza con la **Observación**: notamos algo que nos intriga o que no comprendemos. Luego formulamos una **Hipótesis**: una explicación provisional, falsable y comprobable a través de experimentos. "Falsable" es la palabra clave: una hipótesis que no puede ser refutada en principio no es científica.

El siguiente paso es el **Experimento Controlado**: diseñamos una prueba que, idealmente, aísla la variable que queremos estudiar y controla todas las demás. En un experimento clínico, esto se llama **ensayo aleatorio controlado con doble ciego**: ni el paciente ni el médico saben quién recibe el tratamiento real o el placebo, eliminando el **Efecto Placebo** y los sesgos inconscientes.

Si los resultados apoyan la hipótesis, esta se convierte en **Teoría**: no en el sentido coloquial de "suposición", sino en el sentido científico de "explicación amplia y verificada que unifica muchas observaciones". La Teoría de la Evolución, la Teoría de la Relatividad y la Teoría Atómica no son "solo teorías" en el sentido popular; son los marcos explicativos más sólidamente probados que tenemos. Una teoría científica puede ser refinada o ampliada con nueva evidencia, pero raramente descartada por completo a menos que surja evidencia masiva y consistente en su contra.

La **Revisión por Pares** (peer review) es el mecanismo que la comunidad científica usa para validar los resultados: antes de publicarse, un estudio es evaluado críticamente por otros expertos que no participaron en la investigación. La **Reproducibilidad** es igualmente esencial: si un experimento solo funciona en un laboratorio, sus resultados son sospechosos. La ciencia se construye sobre resultados que pueden ser reproducidos por cualquier equipo, en cualquier parte del mundo.

El método científico no es infalible. Los científicos son humanos y cometen errores, tienen sesgos y a veces se equivocan. Pero el sistema en su conjunto tiene mecanismos autocorrectivos: los errores se descubren, se publican correcciones, y la comprensión colectiva avanza. Es el sistema más honesto y eficaz que la humanidad ha construido para conocer la realidad. Y es la base de toda la tecnología que usamos cada día.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.7 — Metodología** (Págs. 38–40)
**📐 NGSS: HS-ETS1-3** — Evaluar una solución a un problema complejo del mundo real usando el proceso de diseño de ingeniería y el método científico.
**📋 RENAC: EC009 · Metodología Científica y Criterios de Evaluación**
**💡 Standards World:** Método Científico · Hipótesis · Experimento Controlado · Teoría · Revisión por Pares · Reproducibilidad · Falsabilidad · Efecto Placebo""",

"1.63": """La ciencia nos ha dado antibióticos, vacunas, inteligencia artificial, energía atómica, edición genética y la capacidad de terraformar mundos. Pero el poder sin responsabilidad puede ser devastador. Por eso, paralelo al avance técnico, existe un campo igualmente crucial: la **Ética en la Ciencia**, la reflexión sobre lo que *podemos* hacer vs. lo que *debemos* hacer.

La ética científica tiene dimensiones múltiples. La primera es la **Integridad en la Investigación**: la obligación de reportar resultados honestamente, sin fabricar ni falsificar datos. La historia de la ciencia incluye episodios oscuros, como el caso de **Hwang Woo-suk**, el científico coreano que publicó artículos fraudulentos sobre clonación de células madre humanas, destruyendo su carrera y retrasando el campo. La comunidad científica tiene mecanismos para detectar el fraude, pero depende fundamentalmente de la honestidad individual.

La segunda dimensión es la **Ética de la Investigación con Sujetos Humanos**. Los experimentos médicos del siglo XX revelaron abusos escalofriantes, como el **Estudio Tuskegee** (donde a hombres afroamericanos con sífilis se les negó tratamiento por décadas para estudiar el progreso de la enfermedad). Como respuesta, se desarrolló el **Informe Belmont** y los principios de **Consentimiento Informado**, **Beneficencia** y **Justicia** que hoy rigen toda la investigación con humanos.

La tercera dimensión es el **Impacto Tecnológico**. Cuando Fritz Haber desarrolló el proceso de síntesis del amoniaco (que hoy alimenta a la mitad del mundo), también desarrolló las armas químicas usadas en la Primera Guerra Mundial. Los físicos del **Proyecto Manhattan** crearon la bomba atómica, y muchos pasaron el resto de sus vidas lidiando con el peso de esa decisión. **J. Robert Oppenheimer**, director científico del proyecto, dijo al ver la primera prueba nuclear: "Me he convertido en la Muerte, el destructor de mundos."

Hoy, los dilemas éticos se acumulan más rápido que nunca. **CRISPR** permite editar el genoma humano: ¿debemos hacer bebés genéticamente modificados para eliminar enfermedades hereditarias? La **Inteligencia Artificial** puede tomar decisiones de vida o muerte en vehículos autónomos: ¿quién es responsable moralmente? Los **Deepfakes** pueden crear videos falsos de personas en situaciones comprometedoras: ¿cómo protegemos la verdad?

Un científico STEM del siglo XXI no solo debe dominar el conocimiento técnico, sino también tener el criterio ético para anticipar las consecuencias de sus descubrimientos. La ciencia sin ética es poder sin dirección. Y el mundo ya ha visto suficientes veces a dónde lleva eso.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.7** (Págs. 39–40)
**📐 NGSS: HS-ETS1-1** — Analizar un problema de diseño complejo que incluya las dimensiones éticas, económicas y sociales de la solución.
**📋 RENAC: EC009 · Ética Profesional en Ciencia y Tecnología**
**💡 Standards World:** Ética Científica · Integridad · Consentimiento Informado · CRISPR · Proyecto Manhattan · Tuskegee · IA y Responsabilidad · Impacto Tecnológico""",

"1.64": """Has completado el capítulo más denso y emocionante del curriculum JóvenesSTEM: la historia del universo, la materia y la ciencia. Desde los primeros microsegundos del Big Bang hasta las fronteras del conocimiento cuántico, has recorrido 13,800 millones de años de historia cósmica en módulos de lectura profunda. Ahora la pregunta es: ¿qué vas a hacer con todo lo que aprendiste?

La respuesta está en la identidad que este programa quiere que construyas: la de un **Agente de Cambio STEM**. No se trata solo de aprobar un examen o acumular certificados. Se trata de adoptar una forma de pensar y de actuar que transforma tu comunidad, tu país y eventualmente, el mundo.

¿Qué define a un Agente de Cambio STEM? Primera característica: piensa con **evidencia**, no con rumores. Cuando alguien te dice algo alarmante o increíble, preguntas: ¿qué evidencia lo respalda? ¿Ha sido reproducido por otros científicos? Esta actitud crítica es hoy más valiosa que nunca en un mundo inundado de desinformación.

Segunda característica: ve **problemas como sistemas**, no como eventos aislados. La escasez de agua en tu ciudad no es "culpa de la sequía": es la interacción de cambio climático, uso agrícola, infraestructura obsoleta y política pública. Un Agente de Cambio STEM mapea estos sistemas y busca intervenciones en los puntos de palanca más efectivos.

Tercera característica: **colabora sin fronteras**. Los mayores logros científicos de nuestra época —el JWST, el LHC, el Proyecto Genoma Humano, las vacunas de ARNm para COVID-19— fueron proyectos de colaboración masiva internacional. La ciencia no tiene nacionalidad. El próximo gran descubrimiento puede involucrar a un joven de Tijuana, una investigadora de Lagos y un ingeniero de Tokio trabajando juntos en tiempo real.

Cuarta característica: **comunica** lo que sabes. De nada sirve el conocimiento guardado. Los Agentes de Cambio STEM escriben, crean, explican, enseñan. Plataformas como YouTube, TikTok, Instagram y podcasts son medios poderosos para democratizar el conocimiento científico y llegar a jóvenes que jamás pisarán una universidad de élite. Tú puedes ser ese puente.

Quinta característica: actúan con **responsabilidad ética**, como aprendiste en el módulo anterior. El poder técnico sin brújula moral ha causado algunas de las peores catástrofes de la historia humana. Los Agentes de Cambio STEM reflexionan sobre el impacto de sus creaciones antes de lanzarlas al mundo.

El Universo te tomó 13,800 millones de años para forjarte. Usaste el 100% de esa inversión cósmica para llegar hasta aquí. La única pregunta que queda es: ¿qué vas a construir con ello?

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.7 — ADN Científico** (Págs. 39–40)
**📐 NGSS: HS-ETS1-1 · HS-ETS1-2** — Analizar evidencia para desarrollar soluciones a problemas complejos del mundo real con dimensiones éticas.
**📋 RENAC: EC009 · Formación STEM Integral y Liderazgo Científico**
**💡 Standards World:** Agente de Cambio · Pensamiento Crítico · Sistemas Complejos · Ética STEM · Comunicación Científica · Colaboración Global · Liderazgo · Certificación JóvenesSTEM"""
}

for ch in data['chapters']:
    for m in ch['modules']:
        if m['id'] in fullTexts:
            m['fullText'] = fullTexts[m['id']]

with open(path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

count = sum(1 for ch in data['chapters'] for m in ch['modules'] if 'fullText' in m)
ch1_done = sum(1 for m in data['chapters'][0]['modules'] if 'fullText' in m)
ch1_total = len(data['chapters'][0]['modules'])
print(f"✅ Batches 8-9 complete.")
print(f"   Cap I: {ch1_done}/{ch1_total} módulos completados")
print(f"   Total plataforma: {count} módulos con fullText")

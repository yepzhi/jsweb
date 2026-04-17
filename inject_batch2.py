import json

path = '/Users/yepz/JSweb/data/modules.json'
with open(path, 'r', encoding='utf-8') as f:
    data = json.load(f)

fullTexts = {

"1.9": """Si el Big Bang fue el acto de creación del Universo, el **Carbono** es el material con el que el Universo decidió hacer la vida. De los 118 elementos en la tabla periódica, ninguno se compara con la versatilidad química del carbono. Tiene exactamente cuatro electrones en su capa exterior —cuatro manos listas para enlazarse— lo que le permite construir cadenas, anillos, ramas y estructuras tridimensionales de una complejidad que ningún otro elemento puede igualar.

Para entender el poder del carbono, imagina todas las formas de construcción posibles. El **grafito** de tu lápiz y el **diamante** más duro que existe están hechos del mismo material: carbono puro. La diferencia es únicamente cómo están organizados sus átomos. En el grafito, los átomos se apilan en láminas planas que se deslizan fácilmente entre sí, dejando marcas sobre el papel. En el diamante, cada átomo de carbono está enlazado tetraédricamente a cuatro vecinos en una red cúbica perfectísima, lo que lo convierte en el material natural más duro conocido, capaz de rayar cualquier otra sustancia.

En 2004, Andre Geim y Kostya Novoselov en la Universidad de Manchester lograron aislar una sola capa atómica de grafito usando nada más que cinta adhesiva. La llamaron **grafeno**. Esta lámina de un átomo de grosor es 200 veces más resistente que el acero, conduce la electricidad mejor que el cobre, es casi completamente transparente y es el material más delgado jamás creado. Por este descubrimiento ganaron el **Premio Nobel de Física** en 2010. El grafeno promete revolucionar la electrónica, las baterías, los filtros de agua y los materiales de construcción del siglo XXI.

Pero el carbono no se limita a las estructuras sólidas. En la química orgánica —que es, literalmente, la química de los seres vivos— el carbono es absolutamente central. Se calculan casi **10 millones de compuestos orgánicos** conocidos, todos basados en esqueletos de carbono. Los cuatro grupos fundamentales de macromoléculas de la vida —**carbohidratos**, **lípidos**, **proteínas** y **ácidos nucleicos**— están todos construidos sobre cadenas de carbono. Sin carbono no hay aminoácidos, sin aminoácidos no hay proteínas, sin proteínas no hay catálisis química, sin catálisis no hay metabolismo, sin metabolismo no hay vida.

La razón por la que el carbono es tan central para la biología es la estabilidad de sus **enlaces covalentes**. Los enlaces C-C, C-H, C-O y C-N son lo suficientemente fuertes para mantener moléculas complejas intactas durante millones de años —como los combustibles fósiles que son carbono orgánico preservado de hace 300 millones de años— pero lo suficientemente quebrantables bajo las condiciones correctas para que las enzimas puedan romperlos y reorganizarlos durante el metabolismo celular.

El **carbono-14**, un isótopo radiactivo del carbono, es la herramienta con la que los arqueólogos y paleoantropólogos datifican objetos orgánicos de hasta 50,000 años de antigüedad. Los organismos vivos incorporan carbono-14 de la atmósfera durante su vida. Al morir, dejan de incorporarlo y el existente comienza a decaer con una **vida media** de 5,730 años. Midiendo la proporción de carbono-14 restante en una muestra, se puede calcular cuándo murió el organismo. Es el reloj atómico de la historia humana.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.1** (Pág. 16)
**📐 NGSS: HS-PS1-1 · HS-LS1-6** — Usar el modelo de estructura atómica para predecir propiedades de los elementos y explicar cómo el carbono soporta la química de la vida.
**📋 RENAC: EC009 · Química Orgánica y Bioquímica**
**💡 Standards World:** Carbono · Grafeno · Grafito · Diamante · Carbohidratos · Lípidos · Proteínas · Ácidos Nucleicos · Carbono-14 · Datación Radiométrica""",

"1.10": """En 1953, en un laboratorio de la Universidad de Cambridge, James Watson y Francis Crick contemplan un modelo de metal y alambre que acaban de ensamblar. Es la primera representación física de la estructura del **ADN** —el Ácido Desoxirribonucleico— y su geometría, elegante y simétrica, cambiará la biología para siempre. La llaman la **doble hélice**: dos cadenas de **nucleótidos** enrolladas en espiral alrededor de un eje común, como una escalera de caracol de información molecular.

Cada nucleótido del ADN está compuesto por tres partes: un azúcar (**desoxirribosa**), un grupo fosfato y una de las cuatro **bases nitrogenadas**: **Adenina (A)**, **Timina (T)**, **Guanina (G)** o **Citosina (C)**. Las dos cadenas de la hélice están unidas por puentes de hidrógeno entre bases complementarias: la Adenina siempre se empareja con la Timina (A-T), y la Guanina siempre con la Citosina (G-C). Esta complementariedad específica es la clave del mecanismo de replicación del ADN: para copiar la información genética, las dos cadenas se separan y cada una sirve de molde para sintetizar una cadena nueva, idéntica.

La escala de lo que el ADN logra en términos de almacenamiento de información es absolutamente abrumadora. El **genoma humano** —el conjunto completo de ADN de una célula humana— contiene aproximadamente 3,200 millones de pares de bases. Si los imprimiéramos en papel, llenarían 200 volúmenes de una enciclopedia. Si pudieras desenrollar y estirar todo el ADN de una sola célula humana, mediría aproximadamente **2 metros de largo**. El cuerpo humano tiene entre 37 y 40 billones de células, lo que significa que el ADN total de tu cuerpo, si lo estiraras, llegaría de la Tierra al Sol y de regreso más de 300 veces.

Pero el ADN no es simplemente información almacenada de manera estática. Es un código funcional que se lee, copia y ejecuta en tiempo real en cada célula viva. El mecanismo de **transcripción** convierte las instrucciones del ADN en **ARN mensajero (mARN)**, que viaja fuera del núcleo hacia los ribosomas. Allí, el proceso de **traducción** convierte la secuencia de bases del ARN en una cadena de aminoácidos, lo que resulta en una proteína funcional. Este flujo de información —ADN → ARN → Proteína— es lo que el biólogo molecular Francis Crick denominó en 1958 el **dogma central de la biología molecular**, y sigue siendo el fundamento de toda la biología moderna.

El **Proyecto Genoma Humano**, completado en 2003 tras 13 años de trabajo internacional con un costo de 3,000 millones de dólares, logró secuenciar por primera vez la totalidad del genoma humano. Hoy, gracias a tecnologías como la secuenciación de alto rendimiento (Next-Generation Sequencing, **NGS**), podemos secuenciar un genoma completo en menos de 24 horas por menos de 1,000 dólares. Esta revolución genómica está abriendo puertas a la medicina personalizada, donde los tratamientos se diseñan específicamente para el ADN de cada paciente.

La tecnología **CRISPR-Cas9**, descubierta en 2012 por Jennifer Doudna y Emmanuelle Charpentier (Premio Nobel de Química 2020), permite editar el ADN con una precisión sin precedentes. Funciona como unas tijeras moleculares guiadas por una secuencia de ARN que localiza exactamente el fragmento de ADN que se desea modificar y lo corta. Esto abre posibilidades enormes: corregir mutaciones genéticas causantes de enfermedades hereditarias, desarrollar cultivos resistentes a plagas o crear terapias contra el cáncer. El código que lleva tres mil millones de años escribiéndose en cada ser vivo está, por primera vez, en nuestras manos para ser editado.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.1** (Págs. 16–17)
**📐 NGSS: HS-LS1-1 · HS-LS3-1** — Construir una explicación sobre cómo el ADN codifica la información hereditaria y guía la síntesis de proteínas.
**📋 RENAC: EC009 · Genética Molecular y Biotecnología**
**💡 Standards World:** ADN · Doble Hélice · Nucleótidos · Adenina · Timina · Guanina · Citosina · Genoma · ARN · CRISPR · Proyecto Genoma Humano""",

"1.11": """La vida en la Tierra no ha sido un progreso lineal y sereno hacia la complejidad. Ha sido una historia de catástrofes, resurrecciones y reinvenciones radicales. A lo largo de los 3,800 millones de años de historia de la vida, la Tierra ha experimentado al menos **cinco extinciones masivas** que eliminaron entre el 50% y el 96% de todas las especies del planeta. Cada una de ellas fue seguida, millones de años después, por un renacimiento explosivo de nueva diversidad biológica.

La más devastadora de todas fue la **Extinción del Pérmico-Triásico** hace 252 millones de años, conocida como la "Gran Mortandad". Eliminó aproximadamente el **96% de todas las especies marinas** y el 70% de las especies terrestres. El principal sospechoso fue un evento de volcanismo masivo en lo que hoy es Siberia, donde erupciones volcánicas durante decenas de miles de años liberaron cantidades colosales de dióxido de carbono (CO₂) y dióxido de azufre (SO₂) en la atmósfera. El resultado fue un calentamiento global extremo, acidificación de los océanos, lluvia ácida y un colapso de los ecosistemas marinos que tardó 10 millones de años en recuperarse.

Estas extinciones masivas nos enseñan algo fundamental sobre la **evolución**: la selección natural no siempre favorece a los más fuertes o a los más grandes. Favorece a los más adaptativos en el contexto de cambio ambiental de su época. Los dinosaurios no eran organismos fallidos; eran los seres dominantes durante 165 millones de años. Pero cuando el environment cambió abruptamente, la combinación de su gran tamaño, sus altos requerimientos calóricos y sus ciclos reproductivos lentos los puso en desventaja fatal.

Un patrón interesante que los paleontólogos han observado es la **radiación adaptativa** que sigue a cada extinción. Cuando los nichos ecológicos quedan desocupados tras una extinción, las pocas especies sobrevivientes se diversifican explosivamente para ocuparlos. Los mamíferos, que convivieron como pequeñas criaturas nocturnas con los dinosaurios durante 165 millones de años sin poder competir con ellos, explotaron en diversidad tras la extinción K-T. En apenas 10-15 millones de años, ocuparon desde el océano (ballenas) hasta el aire (murciélagos) hasta la cima de la cadena alimentaria terrestre (felinos, elefantes, primates).

Hoy, muchos científicos argumentan que estamos en medio de la **Sexta Extinción Masiva**, causada esta vez no por volcanes ni meteoritos sino por la actividad humana. La tasa de extinción actual se estima entre 100 y 1,000 veces mayor que la tasa de extinción de fondo sin intervención humana. La pérdida de hábitat, la contaminación, el cambio climático y la sobre-explotación de recursos están eliminando especies a un ritmo sin precedentes en los últimos 65 millones de años. La diferencia con las extinciones anteriores es que nosotros somos both la causa y la única especie capaz de frenarla.

El estudio de las extinciones masivas tiene también una aplicación práctica urgente en la astrobiología: buscar en el registro geológico los biomarcadores de estas catástrofes nos ayuda a identificar qué señales en la atmósfera de exoplanetas estudiados por el telescopio Webb podrían indicar extinciones en progreso en otros mundos.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.1** (Págs. 17–18)
**📐 NGSS: HS-LS4-1 · HS-LS4-2** — Comunicar evidencias científicas sobre la evolución de la vida a través del tiempo geológico, incluyendo extinciones masivas.
**📋 RENAC: EC009 · Paleontología y Evolución**
**💡 Standards World:** Extinciones · Evolución · Gran Mortandad · Pérmico-Triásico · Radiación Adaptativa · Sexta Extinción · Selección Natural · Registro Fósil""",

"1.12": """Hace 66 millones de años, un objeto de entre 10 y 15 kilómetros de diámetro —del tamaño de una ciudad mediana— viajaba a 20 kilómetros por segundo a través del sistema solar. No había nadie en la Tierra para verlo venir. En el actual Golfo de México, frente a la costa de la Península de Yucatán, México, este asteroide entró a la atmósfera terrestre y generó en los últimos segundos de su caída una bola de fuego 10,000 veces más brillante que el Sol. El impacto liberó una energía equivalente a **1,000 millones de bombas atómicas** del tipo Hiroshima detonadas simultáneamente. El cráter resultante, llamado **Chicxulub**, mide 180 kilómetros de diámetro y fue descubierto enterrado bajo los sedimentos del Golfo de México en 1978 por los geólogos Glen Penfield y Antonio Camargo.

Este evento es conocido como la **extinción K-T** (o K-Pg en la nomenclatura moderna), el límite entre el período Cretácico (K) y el Paleógeno (Pg). La "K" viene del griego "Kreta" (cretáceo) y la "T" de Terciario. La evidencia de este evento está registrada literalmente en las rocas de todo el planeta: una delgada capa de **iridio** —un elemento extraordinariamente raro en la corteza terrestre pero abundante en los asteroides— aparece exactamente en el límite K-T en todos los estratos geológicos del mundo. Esta "capa de iridio" fue descubierta por el equipo del físico Luis Álvarez y su hijo geólogo Walter Álvarez en 1980, y fue la clave que apuntó hacia un impacto cósmico como causa de la extinción.

Las consecuencias inmediatas del impacto fueron apocalípticas: tsunamis de kilómetros de altura, incendios forestales globales generados por los fragmentos incandescentes que volvieron a caer desde el espacio, y una eyección de polvo, hollín y sulfatos a la estratosfera que bloqueó la luz solar durante meses o incluso años. Sin luz solar, la fotosíntesis se detuvo. Sin fotosíntesis, se colapsó la base de las cadenas alimentarias tanto terrestres como marinas. Las temperaturas globales cayeron drásticamente —el llamado **"invierno de impacto"**— antes de que el CO₂ liberado por los incendios causara un calentamiento a largo plazo.

Los **dinosaurios no avianos** —todos los dinosaurios excepto los que llevaron líneas evolutivas hacia las aves modernas— se extinguieron. Junto con ellos desaparecieron los reptiles marinos como mosasaurios y plesiosaurios, los pterosaurios voladores, y aproximadamente el 75% de todas las especies del planeta.

Pero el asteroide de Chicxulub no solo destruyó: también abrió el camino para nosotros. Los mamíferos que sobrevivieron eran pequeños, muchos eran nocturnos y podían subsistir con dietas variadas en las condiciones post-impacto. Con los dinosaurios fuera del escenario, los mamíferos se diversificaron explosivamente durante los siguientes millones de años, ocupando los nichos ecológicos vacíos. Sin el asteroide de Chicxulub, los primates probablemente nunca habrían dominado la Tierra. Sin los primates, no habría homínidos. Sin homínidos, no habría **Homo Sapiens**. Una roca espacial de 15 kilómetros, impactando en la punta de Yucatán hace 66 millones de años, fue literalmente una condición necesaria para tu existencia.

La **NASA** y la **ESA** actualmente monitorean cerca de 2,000 asteroides clasificados como Objetos Potencialmente Peligrosos (PHAs). En 2022, la misión **DART** (Double Asteroid Redirection Test) de NASA impactó exitosamente el asteroide Dimorphos y alteró su órbita en un 4%, demostrando que la humanidad tiene la tecnología para desviar un asteroide con suficiente tiempo de anticipación. Hemos convertido la lección de los dinosaurios en tecnología de supervivencia.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.1** (Pág. 17)
**📐 NGSS: HS-ESS1-6 · HS-LS4-1** — Analizar evidencias de eventos catastróficos y su efecto en la diversidad de la vida.
**📋 RENAC: EC009 · Geología Histórica y Paleontología**
**💡 Standards World:** Chicxulub · Extinción K-T · Iridio · Dinosaurios · Invierno de Impacto · Asteroide · DART · Objetos Potencialmente Peligrosos""",

"1.13": """Hace 7 millones de años, en el continente africano, una población de primates se dividió. Un grupo siguió la línea evolutiva que llevaría a los chimpancés modernos. Otro grupo tomó un camino diferente, eventualmente caminando erguido, desarrollando manos con pulgares opositores capaces de precisión, y finalmente pensando de formas que ningún primate había intentado antes. Este segundo grupo nos incluye a nosotros: el **género Homo**.

El registro fósil documenta este viaje con una secuencia impresionante. El **Australopithecus africanus**, que existió hace entre 3 y 2 millones de años, ya caminaba bípeda pero tenía un cerebro de apenas 450 cm³ (comparado con nuestros 1,400 cm³). El **Homo habilis**, hace 2.4 millones de años, fue el primero en fabricar herramientas de piedra toscas pero deliberadas. El **Homo erectus**, hace 1.9 millones de años, fue el primero en salir de África y colonizar Asia y Europa, y es el primer homínido del que tenemos evidencia de uso controlado del **fuego**.

El fuego fue un punto de inflexión evolutivo sin paralelo. No solo por el calor y la protección que ofrecía. El primatólogo y biólogo evolutivo Richard Wrangham propone en su "hipótesis de la cocción" que cocer los alimentos aumentó radicalmente la disponibilidad de calorías y redujo el tiempo digestivo necesario, liberando energía para un metabolismo cerebral más intenso. El intestino se redujo —porque ya no necesitaba procesar fibra cruda durante horas— y el cerebro creció. El fuego literalmente nos hizo más inteligentes.

El **Homo Sapiens** anatómicamente moderno aparece en el registro fósil africano hace aproximadamente 300,000 años, con las herramientas más recientes apuntando a 315,000 años en Jebel Irhoud, Marruecos. Pero el comportamiento moderno —capacidad simbólica, arte, lenguaje complejo, comercio de recursos a larga distancia— emergió más tarde, en la llamada "**Explosión Cultural**" hace aproximadamente 50,000 años. Las cuevas de Lascaux en Francia y Altamira en España conservan pinturas rupestres de 17,000-20,000 años de antigüedad que representan la cumbre de este despertar cognitivo: animales en movimiento, perspectiva rudimentaria, deliberada representación simbólica del mundo.

La secuenciación del **genoma humano** moderno ha refinado enormemente nuestro entendimiento de la dispersión global de nuestra especie. El análisis del ADN mitocondrial —que se hereda exclusivamente de la madre— indica que todos los humanos modernos descendemos de una pequeña población que salió de África hace aproximadamente 70,000 años, posiblemente a través del estrecho de Bab-el-Mandeb que separa Etiopía de Yemen. Los estudios genómicos también han revelado que los humanos modernos tuvieron hibridación genética con los **Neandertales** (para las poblaciones fuera de África, entre 1-4% del ADN) y con los **Denisovanos** (especialmente en poblaciones del sudeste asiático y Oceanía).

La **Inteligencia STEM** que estás desarrollando hoy es el exponente más reciente de esta ascensión cognitiva. Desde el primer *homo habilis* que talló un filo de sílex, hasta el programador que escribe código para un cohete espacial, el impulso es el mismo: usar la inteligencia para transformar el entorno en herramientas que amplíen nuestras capacidades.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.1** (Págs. 17–19)
**📐 NGSS: HS-LS4-1 · HS-LS4-4** — Construir una explicación basada en evidencia fósil y genética sobre la evolución del Homo Sapiens.
**📋 RENAC: EC009 · Anthropología Biológica y Evolución Humana**
**💡 Standards World:** Homo Sapiens · Australopithecus · Homo Erectus · Fuego · Cerebro · Genoma Humano · ADN Mitocondrial · Neandertales · Evolución""",

"1.14": """Antes de Einstein, el espacio y el tiempo eran dos cosas separadas. El espacio era el escenario vacío e inmutable donde ocurrían los eventos del cosmos. El tiempo era un río que fluía igual para todos en todas partes. Newton los describía así y funcionaba perfectamente para predecir el movimiento de los planetas, las mareas y las trayectorias de los proyectiles. Pero a las velocidades extremas y en presencia de masas enormes, el modelo newtoniano fallaba. Le hacía falta algo más profundo.

En 1905, un empleado de la Oficina de Patentes de Berna publicó un artículo que cambiaría para siempre nuestra comprensión del universo. Albert Einstein, entonces con 26 años y sin acceso a laboratorios, basándose puramente en experimentos mentales, propuso la **Teoría de la Relatividad Especial**. Su postulado fundamental: la velocidad de la luz en el vacío (**c** = 300,000 km/s) es la misma para todos los observadores, sin importar su movimiento relativo. Esta idea aparentemente simple detonó consecuencias que reescribieron la física entera.

Diez años después, en 1916, Einstein publicó la **Teoría de la Relatividad General** —su obra maestra—, que ampliaba la relatividad especial para incluir la gravedad. Su insight radical: la gravedad no es una fuerza que actúa a distancia como propuso Newton. La gravedad es la curvatura del **espacio-tiempo**, el tejido cuadridimensional que combina los tres ejes espaciales con el tiempo en una entidad unificada. Un objeto masivo, como el Sol, curva el espacio-tiempo a su alrededor como una bolera de boliche colocada sobre un trampolín elástico. Los planetas no orbitan el Sol porque sean "jalados" por la gravedad; orbitan porque siguen las curvas naturales del espacio-tiempo distorsionado alrededor del Sol.

Para visualizarlo, imagina una sábana extendida y tensa horizontalmente. Coloca una bola de boliche en el centro: la tela se curva. Ahora lanza una pequeña canica cerca del borde: la canica rodará en espiral hacia la bola de boliche, siguiendo la curvatura de la tela. Eso es exactamente lo que hacen los planetas respecto al Sol, y lo que hace la Tierra respecto a la Luna: no se persiguen, sino que siguen la geometría del espacio que la masa curva.

La confirmación espectacular de la Relatividad General llegó durante el **eclipse solar total de 1919**. El astrónomo Arthur Eddington viajó a la isla Príncipe frente a la costa occidental africana y midió la posición de varias estrellas visibles cerca del Sol durante el eclipse. Encontró que sus posiciones aparentes estaban ligeramente desplazadas respecto a su posición normal, exactamente en la cantidad predicha por Einstein. La gravedad del Sol curvaba literalmente los rayos de luz de esas estrellas. El espacio-tiempo era real, medible y exactamente como Einstein lo describía.

En 2015, la colaboración científica **LIGO** (Laser Interferometer Gravitational-Wave Observatory) detectó directamente por primera vez las **ondas gravitacionales**: ondulaciones en el tejido del espacio-tiempo generadas por la fusión de dos agujeros negros a 1,300 millones de años luz de distancia. Esta detección, que ganó el Nobel de Física 2017 para Kip Thorne, Rainer Weiss y Barry Barish, confirmó una de las predicciones más extraordinarias de la Relatividad General. Cada vez que dos objetos masivos se aceleran mutuamente, crean ondas en el espacio-tiempo que se propagan a la velocidad de la luz. El cosmos "retumba" con estas ondas y ahora tenemos los "oídos" para escucharlas.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.2 — La Red Espacio-Tiempo** (Págs. 20–22)
**📐 NGSS: HS-PS2-4 · HS-ESS1-1** — Usar las matemáticas para representar las relaciones entre objetos en sistemas gravitacionales.
**📋 RENAC: EC009 · Física Moderna y Relatividad**
**💡 Standards World:** Espacio-Tiempo · Relatividad General · Relatividad Especial · Curvatura · Ondas Gravitacionales · LIGO · Eclipse 1919 · Einstein""",

"1.15": """Una de las predicciones más contraintuitivas de la física moderna es que el tiempo no es una constante universal. No fluye igual para todos en todo lugar. El tiempo es **elástico**: se estira y se comprime dependiendo de la velocidad a la que te mueves y de la gravedad que sientes. A este fenómeno se le llama **dilatación temporal**, y no es ciencia ficción. Es física experimental medida con relojes atómicos de una precisión de femtosegundos.

La dilatación temporal tiene dos formas distintas, ambas predichas por Einstein:

**1. Dilatación temporal por velocidad (Relatividad Especial):** Cuanto más rápido te mueves a través del espacio, más lento fluye tu tiempo respecto a un observador estático. Si viajaras en una nave espacial a, digamos, el 99% de la velocidad de la luz durante lo que para ti serían 7 años, al regresar a la Tierra descubrirías que han pasado más de 49 años. Tus amigos habrían envejecido, y tú apenas habrías cumplido 7 años más. Este efecto, llamado **la paradoja de los gemelos**, ha sido verificado experimentalmente enviando relojes atómicos ultraprecistas en aviones y comparándolos con relojes idénticos en tierra: los relojes que viajaron en avión avanzan menos, exactamente en la cantidad predicha por la relatividad especial.

**2. Dilatación temporal gravitacional (Relatividad General):** La gravedad también dilata el tiempo. Cerca de un objeto muy masivo, donde la curvatura del espacio-tiempo es mayor, el tiempo fluye más lento que lejos del mismo. En la superficie de la Tierra, el tiempo fluye ligeramente más lento que en el espacio, donde la gravedad es menor. Esta diferencia es de apenas 38 microsegundos por día para los satélites del **GPS** a 20,200 km de altitud, pero acumulada produce errores de posicionamiento de kilómetros si no se corrige.

El sistema de **Posicionamiento Global (GPS)** es la demostración tecnológica más cotidiana de que la relatividad no es teoría académica sino ingeniería aplicada. Los 31 satélites GPS que orbitan la Tierra llevan relojes atómicos de cesio de precisión extrema. Dos efectos relativistas operan simultáneamente:
- La dilatación temporal especial (por su velocidad orbital de 3.9 km/s) hace sus relojes más lentos en **7 microsegundos por día**.
- La dilatación temporal gravitacional (por estar lejos de la masa terrestre) hace sus relojes más rápidos en **45 microsegundos por día**.
- El efecto neto es que los relojes GPS avanzan **+38 microsegundos por día** más rápido que en la superficie.

A 300,000 km/s (velocidad de la luz), 38 microsegundos de error corresponden a 11.4 km de error en posición. Los ingenieros del GPS compensan esto ajustando la frecuencia de los relojes satelitales antes del lanzamiento para que, una vez en órbita y sometidos a los efectos relativistas, coincidan exactamente con los relojes terrestres. Cada vez que usas el GPS de tu teléfono para navegar, la física relativista de Einstein está trabajando invisiblemente para darte coordenadas precisas.

La dilatación temporal también es relevante ahora que planificamos viajes a Marte y más allá. Las tripulaciones en el espacio envejecerán ligeramente más lento que sus familias en la Tierra. Es pequeño pero medible. En el largo plazo de los viajes interestelares, los efectos se magnifican enormemente.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.2** (Págs. 20–21)
**📐 NGSS: HS-PS2-4 · HS-ESS1-1** — Aplicar razonamiento científico para comprender los efectos de la gravedad y la velocidad sobre el espacio-tiempo.
**📋 RENAC: EC009 · Física Moderna · Relatividad y sus Aplicaciones**
**💡 Standards World:** Dilatación Temporal · Relatividad General · Relatividad Especial · GPS · Relojes Atómicos · Paradoja de los Gemelos · Microsegundos""",

"1.16": """Cada vez que abres Google Maps y obtienes tu ubicación exacta en alguna calle de tu ciudad, estás siendo beneficiario de una de las redes de ingeniería más sofisticadas que la humanidad ha construido, y de la correcta aplicación de la física relativista de Albert Einstein. El **GPS** —Global Positioning System— es un sistema de navegación por satélite que funciona triangulando tu posición usando señales de radio de múltiples satélites en órbita simultáneamente.

La arquitectura del sistema GPS está compuesta por tres segmentos. El **segmento espacial** consta de 31 satélites operativos (de los 24 mínimos necesarios para cobertura global) distribuidos en 6 planos orbitales a 20,200 km de altitud, con una inclinación de 55 grados respecto al ecuador. Esta disposición garantiza que en cualquier punto de la Tierra, en cualquier momento, haya al menos 4 satélites visibles sobre el horizonte. El **segmento de control** es una red de estaciones terrestres en varias ubicaciones del globo que monitorean y actualizan continuamente los parámetros orbitales y los relojes de cada satélite. El **segmento de usuario** es tu receptor GPS —el de tu teléfono, tu auto o un dispositivo especializado.

El principio de funcionamiento es la **trilateración** (no triangulación, que requiere ángulos; la trilateración usa distancias). Cada satélite GPS transmite continuamente una señal de radio que incluye dos datos fundamentales: la posición exacta del satélite en ese instante y la marca de tiempo exacta de la transmisión. Tu receptor GPS recibe esta señal y calcula cuánto tiempo tardó en llegar. Multiplicando ese tiempo por la velocidad de la luz (300,000 km/s), obtiene la distancia al satélite. Con una sola distancia, tu receptor sabe que estás en algún punto sobre una **esfera** centrada en ese satélite. Con dos, estás en la intersección de dos esferas: un **círculo**. Con tres, en la intersección de tres esferas: dos **puntos** (uno de los cuales está generalmente dentro de la Tierra, lo que lo descarta automáticamente). Con cuatro satélites, el cuarto permite corregir el error del reloj del receptor —que es mucho menos preciso que los atómicos de los satélites— y obtener la posición en tres dimensiones con precisión de metros.

Las aplicaciones militares del GPS fueron su razón original de existencia. El Departamento de Defensa de Estados Unidos desarrolló el sistema a partir de 1973, y fue declarado operativo en 1995. La versión civil estuvo originalmente degradada intencionalmente (SA, Selective Availability) hasta que en el año 2000 el presidente Clinton ordenó desactivar esta degradación, mejorando la precisión civil de 100 metros a menos de 10 metros instantáneamente.

Hoy, el GPS tiene competidores. Rusia opera el **GLONASS** (31 satélites), Europa el **Galileo** (30 satélites con precisión civil de 1 metro), China el **BeiDou** (35 satélites) e India el **NavIC**. Los teléfonos modernos reciben señales de múltiples constelaciones simultáneamente, combinando mediciones para lograr precisiones inferiores al metro en condiciones óptimas.

Las consecuencias del GPS van mucho más allá de la navegación: precisión en la agricultura de satélite, sincronización de redes eléctricas y telecomunicaciones (que necesitan timestamps de nanosegundos), guía de aviones y barcos, monitoreo de movimiento de placas tectónicas y hasta medición del rebote isostático post-glacial de la corteza terrestre en Escandinavia. El GPS es la infraestructura invisible que conecta el mundo físico con el digital.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.2** (Pág. 21)
**📐 NGSS: HS-PS4-5 · HS-ESS1-1** — Entender cómo los principios físicos de las ondas y la relatividad se aplican en sistemas tecnológicos reales.
**📋 RENAC: ET002 · Tecnología de Posicionamiento Global y Telecomunicaciones**
**💡 Standards World:** GPS · Satélite · Trilateración · Relojes Atómicos · Velocidad de la Luz · GLONASS · Galileo · BeiDou · Relatividad Aplicada"""
}

# Inject into modules
for ch in data['chapters']:
    for m in ch['modules']:
        if m['id'] in fullTexts:
            m['fullText'] = fullTexts[m['id']]

with open(path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

count = sum(1 for ch in data['chapters'] for m in ch['modules'] if 'fullText' in m)
print(f"✅ Batch 2 complete. {count} modules now have fullText content.")

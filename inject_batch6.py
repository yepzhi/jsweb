import json

path = '/Users/yepz/JSweb/data/modules.json'
with open(path, 'r', encoding='utf-8') as f:
    data = json.load(f)

fullTexts = {

"1.36": """Cuando una estrella masiva —una que tiene al menos ocho veces la masa de nuestro Sol— llega al final de su vida, no se apaga suavemente. En su lugar, protagoniza el evento más violento y energético del Universo: una **Supernova**. Durante unos pocos días, una sola estrella puede brillar con la intensidad de toda una galaxia de cien mil millones de soles, liberando en un segundo más energía de la que el Sol emitirá en toda su vida de diez mil millones de años.

Existen dos tipos principales de supernovas. La **Tipo Ia** ocurre en sistemas binarios donde una enana blanca "vampiriza" materia de su estrella compañera hasta que alcanza un límite crítico (el Límite de Chandrasekhar) y explota como una bomba termonuclear perfecta. Estas son usadas por los astrónomos como "velas estándar" para medir distancias en el cosmos profundo. La **Tipo II**, o de colapso de núcleo, ocurre cuando una estrella súper gigante agota su combustible y su propio peso la aplasta instantáneamente.

Lo que sucede durante esos segundos de agonía es alquimia pura. En la explosión, las temperaturas y presiones son tan extremas que se fusionan elementos más pesados que el hierro, como el **Oro**, el **Platino** y el **Uranio**. Cada gramo de oro en las joyas de la Tierra fue forjado en el corazón de una supernova que explotó hace miles de millones de años. Sin estas explosiones, el Universo sería un lugar estéril, compuesto solo de hidrógeno y helio. Las supernovas son las "sembradoras" de la química compleja del cosmos.

Además de crear elementos, las supernovas lanzan ondas de choque a través del espacio interestelar. Estas ondas comprimen las nubes de gas y polvo cercanas, disparando el nacimiento de **nuevas estrellas** y sistemas solares. En cierto sentido, nuestro propio Sistema Solar nació gracias a las cenizas de una supernova ancestral que empujó nuestra nube primordial hace 4,600 millones de años.

El estudio de las supernovas ha revolucionado nuestra comprensión del Universo. En 1998, al observar supernovas lejanas, los científicos descubrieron que el Universo no solo se está expandiendo, sino que se está acelerando. Este descubrimiento llevó a la postulación de la **Energía Oscura**, una fuerza misteriosa que compone el 68% del cosmos.

Hoy en día, telescopios automáticos escanean el cielo cada noche buscando estos destellos de muerte estelar. Localizar una supernova a tiempo permite a los astrofísicos estudiar la física de la materia en condiciones que jamás podremos replicar en la Tierra, dándonos pistas sobre el origen de los elementos y el destino final del tiempo mismo.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.1 — Evolución Estelar** (Págs. 14–16)
**📐 NGSS: HS-ESS1-3** — Comunicar información sobre cómo las estrellas producen elementos mediante la fusión y explosiones finales.
**📋 RENAC: EC009 · Astrofísica de Alta Energía**
**💡 Standards World:** Supernova · Tipo Ia · Tipo II · Nucleosíntesis · Límite de Chandrasekhar · Energía Crítica · Alquimia Cósmica""",

"1.37": """En el corazón de una estrella masiva, la fusión nuclear es una lucha constante contra la gravedad. Durante millones de años, la estrella fusiona hidrógeno en helio, luego helio en carbono, y así sucesivamente, creando elementos cada vez más pesados. Pero esta escalera de energía tiene un escalón final infranqueable: el **Hierro**. Los astrofísicos llaman al hierro "el asesino de estrellas", y por una razón física muy poderosa.

Hasta legar al silicio, cada reacción de fusión libera energía (es una reacción exotérmica). Esa energía crea una presión hacia afuera que sostiene a la estrella contra su propio peso colosal. Sin embargo, el **Núcleo de Hierro** es diferente. Fusionar hierro no libera energía; al contrario, *consume* energía. Cuando la estrella intenta fusionar hierro, el motor nuclear que la mantenía viva se detiene en seco. La presión hacia afuera desaparece instantáneamente.

En una fracción de segundo, la gravedad gana la batalla. Sin energía que la sostenga, las capas externas de la estrella, que tienen la masa de varios soles, caen hacia el centro a una velocidad de 70,000 kilómetros por segundo (aproximadamente el 25% de la velocidad de la luz). Cuando este material choca contra el núcleo de hierro ultra denso, rebota con una fuerza titánica, creando la onda de choque que desintegra la estrella en una supernova.

El hierro no solo es el final de la vida de una estrella; es también un componente fundamental de nuestra propia existencia. El hierro que corre por tu sangre, transportando oxígeno a tus células en la **hemoglobina**, fue el mismo elemento que detuvo el motor de una estrella masiva hace eones. Somos seres que dependen vitalmente del "residuo nuclear" más estable y peligroso del Universo.

Este proceso de **Nucleosíntesis Estelar** nos enseña sobre la estabilidad atómica. El átomo de hierro (Fe-56) tiene el núcleo más fuertemente unido de la naturaleza. Por debajo del hierro, los átomos quieren fusionarse; por encima del hierro (como el uranio), los átomos tienden a la fisión. El hierro es el punto de equilibrio máximo, el valle energético hacia el cual todo el Universo tiende a caer.

Entender por qué el hierro detiene a las estrellas nos permite diseñar mejores modelos en **Física Nuclear** aplicada aquí en la Tierra. Es la demostración de que las leyes que rigen lo más pequeño (el núcleo atómico) determinan el destino de lo más grande (las estrellas gigantes). La historia del hierro es la historia del límite de la materia.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.1** (Págs. 15–16)
**📐 NGSS: HS-PS1-8 · HS-ESS1-1** — Desarrollar modelos sobre la liberación de energía y la estabilidad del núcleo atómico.
**📋 RENAC: EC009 · Física Nuclear Estelar**
**💡 Standards World:** Hierro · Nucleosíntesis · Estabilidad Atómica · Valle Energético · Colapso de Núcleo · Exotérmico · Endotérmico · Hemoglobina""",

"1.38": """Si comprimieras toda la masa del Sol en una esfera que cupiera dentro de una ciudad pequeña, tendrías una **Estrella de Neutrones**. Es el objeto más denso que conocemos que aún tiene una superficie sólida. Una sola cucharadita de material de una estrella de neutrones pesaría mil millones de toneladas en la Tierra; es como meter toda la flota de automóviles del mundo en un terrón de azúcar.

Estas estrellas nacen del colapso de supernovas tipo II. Durante el colapso, la presión es tan bestial que los electrones son empujados dentro de los protones, convirtiéndolos en neutrones. Lo que queda es una bola de neutrones puros de apenas 20 kilómetros de diámetro, mantenida por algo llamado **Presión de Degeneración de Neutrones**, una ley de la mecánica cuántica que impide que los neutrones ocupen el mismo espacio.

La gravedad en la superficie de una estrella de neutrones es dos mil millones de veces más fuerte que en la Tierra. Si dejaras caer un malvavisco desde un metro de altura sobre su superficie, golpearía con la energía de una bomba atómica. El campo magnético de estos objetos es también trillones de veces más potente que el terrestre, capaz de distorsionar los átomos en formas de agujas alargadas.

Debajo de su delgada corteza de hierro, la materia de una estrella de neutrones entra en un estado exótico llamado **Pasta Nuclear**. Debido a la competencia entre la fuerza nuclear fuerte y la repulsión eléctrica, los neutrones se organizan en estructuras que parecen láminas de lasaña o tubos de espagueti. Estudiar esta "pasta" nos ayuda a entender cómo se comporta la materia en las densidades más altas permitidas por la física.

En 2017, la humanidad presenció por primera vez el choque de dos estrellas de neutrones a través de **Ondas Gravitacionales**. Este evento, llamado kilonova, confirmó que estas colisiones son la fuente principal de elementos como el oro y el platino en el Universo. Fue la primera vez que escuchamos y vimos un evento cósmico simultáneamente.

Las estrellas de neutrones son los laboratorios definitivos de la física extrema. En ellas, la relatividad general de Einstein y la mecánica cuántica de Planck se encuentran cara a cara. Entender estos faros de materia ultra densa es el paso previo para comprender el misterio más profundo del espacio-tiempo: los agujeros negros.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.1** (Pág. 16)
**📐 NGSS: HS-PS2-4 · HS-ESS1-1** — Analizar fuerzas gravitatorias y campos magnéticos extremos en objetos compactos.
**📋 RENAC: EC009 · Física de la Materia Condensada**
**💡 Standards World:** Estrella de Neutrones · Densidad Extrema · Pasta Nuclear · Presión de Degeneración · Kilonova · Ondas Gravitacionales · Ferromagnetismo""",

"1.39": """Cuando una estrella de neutrones gira a velocidades increíbles —algunas lo hacen cientos de veces por segundo— actúa como un faro cósmico. Estos objetos se llaman **Púlsares**. Emiten haces de radiación electromagnética (ondas de radio, rayos X o rayos gamma) desde sus polos magnéticos. Si la Tierra está en el camino de esos haces, detectamos pulsos de luz con una precisión de reloj atómico.

El descubrimiento de los púlsares en 1967 por **Jocelyn Bell Burnell** fue tan extraño que inicialmente se les llamó "LGM-1" (Little Green Men), pensando que podrían ser señales de una civilización extraterrestre. Sin embargo, pronto se comprendió que eran objetos naturales sujetos a las leyes de la conservación del **Momento Angular**: al igual que una patinadora sobre hielo gira más rápido cuando retrae sus brazos, una estrella de neutrones gira frenéticamente al colapsar desde un tamaño gigante a solo unos kilómetros.

Los púlsares son los cronómetros más exactos del Universo. Algunos pulsan con tal regularidad que podrían ser usados como un **GPS Galáctico**. De hecho, la placa de las sondas **Voyager** lanzadas en los años 70 incluye un mapa de 14 púlsares que indica la posición exacta de la Tierra en la Vía Láctea para cualquier civilización que lo encuentre.

Existe un tipo especial de púlsar llamado **Magnetar**. Estos tienen los campos magnéticos más poderosos del Universo. Un magnetar a mitad de camino a la Luna podría borrar las tarjetas de crédito de toda la Tierra y arrancarte los átomos del cuerpo simplemente con su flujo magnético. Afortunadamente, los magnetares conocidos están a miles de años luz de distancia.

Para los científicos, los púlsares son herramientas de precisión. Al observar cómo cambia el "tic-tac" de un púlsar cuando es orbitado por otro objeto, podemos poner a prueba la **Relatividad General** de Einstein con una precisión sin precedentes. Hemos detectado planetas orbitando púlsares, un descubrimiento asombroso ya que esos mundos tuvieron que sobrevivir a la explosión de una supernova.

Los púlsares nos enseñan que el Universo es dinámico y está lleno de energía rotacional. Son restos de soles muertos que, gracias a su velocidad y magnetismo, siguen enviando señales a través de los siglos, ayudándonos a mapear el cosmos y a entender la estabilidad del tiempo mismo.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.1** (Pág. 16)
**📐 NGSS: HS-PS4-5 · HS-ESS1-4** — Evaluar la validez de modelos del movimiento de objetos en sistemas estelares.
**📋 RENAC: ET002 · Astronomía Observacional y Telecomunicaciones**
**💡 Standards World:** Púlsar · Radiación Electromagnética · Momento Angular · Magnetar · Reloj Atómico · GPS Galáctico · Jocelyn Bell Burnell · Conservación del Giro""",

"1.40": """Imagina un lugar donde la gravedad es tan fuerte que ni siquiera la luz —lo más rápido que existe— puede escapar. Un lugar donde las leyes conocidas de la física se rompen y el tiempo parece detenerse. Bienvenido al **Agujero Negro**, la frontera final del espacio y el tiempo.

Un agujero negro nace cuando el núcleo de una estrella súper masiva (más de 20 veces la masa del Sol) colapsa. Sin ninguna fuerza capaz de detener la gravedad, la materia se comprime infinitamente en un punto de volumen cero y densidad infinita llamado **Singularidad**. Alrededor de este punto existe una "frontera de no retorno" llamada el **Horizonte de Eventos**. Una vez que cruzas esa línea, no hay forma de volver, ni siquiera con un cohete de luz.

Lo más fascinante de los agujeros negros es cómo distorsionan el **Espacio-Tiempo**. Según la relatividad de Einstein, un objeto masivo curva el tejido del espacio como una bola de boliche sobre una cama elástica. Un agujero negro crea un "pozo" tan profundo que nada puede salir. Si estuvieras cerca de un agujero negro, el tiempo pasaría mucho más lento para ti que para alguien en la Tierra. Una hora cerca de un agujero negro pesado podría equivaler a décadas en el resto del universo.

Si intentaras entrar en uno de tamaño estelar, sufrirías un proceso llamado **Espaguetización**: la gravedad en tus pies sería mucho más fuerte que en tu cabeza, estirándote como una cuerda de pasta hasta desintegrarte. Sin embargo, en los agujeros negros supermasivos (como los que hay en el centro de las galaxias), podrías cruzar el horizonte de eventos sin sentir nada de inmediato, aunque estarías irremediablemente condenado.

En 2019, la humanidad obtuvo la primera imagen real de un agujero negro (M87*) gracias al **Event Horizon Telescope**. No vimos el agujero en sí (porque es negro), sino la sombra que proyecta sobre el gas ardiente que lo rodea. Esta imagen confirmó que Einstein tenía razón sobre la estructura de estos titanes invisibles.

Los agujeros negros no son solo "aspiradoras cósmicas"; son motores fundamentales que regulan el crecimiento de las galaxias. Al emitir potentes **Jets de Plasma** desde sus polos, afectan la formación de estrellas a miles de años luz de distancia. Entender los agujeros negros es entender la paradoja de la información y la posibilidad de que nuestro universo sea, en realidad, un holograma proyectado desde una superficie lejana.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.1** (Pág. 16)
**📐 NGSS: HS-PS2-4 · HS-ESS1-1** — Desarrollar modelos matemáticos para describir la gravitación en condiciones extremas.
**📋 RENAC: EC009 · Astrofísica Teórica y Cosmología**
**💡 Standards World:** Agujero Negro · Horizonte de Eventos · Singularidad · Espaguetización · Dilatación Temporal · Espacio-Tiempo · M87* · Jets de Plasma""",

"1.41": """Todo lo que ves a tu alrededor —este texto, el aire que respiras, tu propio cuerpo— está hecho de piezas diminutas e indivisibles llamadas átomos. Pero la idea de que la materia está compuesta de bloques fundamentales no es nueva; es una historia de 2,500 años de curiosidad humana que llamamos la **Historia Atómica**.

Todo comenzó en la antigua Grecia, cerca del año 400 a.C., cuando el filósofo **Demócrito** propuso que si dividías un trozo de materia una y otra vez, eventualmente llegarías a una partícula que ya no se podría cortar. La llamó **Átomo**, que en griego significa "indivisible". Sin embargo, esta idea fue ignorada durante casi dos milenios a favor de la teoría de Aristóteles de los cuatro elementos (tierra, aire, agua y fuego).

No fue sino hasta 1803 que el químico inglés **John Dalton** resucitó el átomo. Dalton observó que los elementos químicos siempre se combinaban en proporciones de números enteros. Concluyó que los átomos eran pequeñas esferas sólidas y que cada elemento tenía átomos diferentes. Este fue el nacimiento de la química moderna.

A finales del siglo XIX, **J.J. Thomson** descubrió que los átomos no eran indivisibles. Al experimentar con rayos catódicos, encontró el **Electrón**, una partícula cargada negativamente. Propuso el modelo del "budín de pasas": un átomo era una esfera de carga positiva con electrones incrustados. Pero este modelo duró poco. En 1911, **Ernest Rutherford** bombardeó una fina lámina de oro con partículas alfa y descubrió que los átomos eran mayormente espacio vacío, con un núcleo diminuto y denso en el centro.

En 1913, **Niels Bohr** perfeccionó el modelo proponiendo que los electrones orbitaban el núcleo en niveles de energía específicos, como los planetas alrededor del Sol. Finalmente, el desarrollo de la **Mecánica Cuántica** en los años 20 (con investigadores como Schrödinger y Heisenberg) nos mostró que los electrones no son pequeñas esferas en órbita, sino que existen en nubes de probabilidad llamadas **Orbitales Atómicos**.

Hoy sabemos que los átomos son fábricas de energía y que su estructura interna determina todas las propiedades de la materia: desde por qué el agua es líquida hasta cómo funciona tu cerebro. La historia atómica es el viaje del ser humano desde la filosofía pura hasta la manipulación de la realidad a escala nanoscópica para crear tecnología, medicina y energía.

---
**🔖 Bluebook v1 · Capítulo II, Sección 2.1 — Modelos Atómicos** (Págs. 40–42)
**📐 NGSS: HS-PS1-1** — Usar la tabla periódica como herramienta para predecir las propiedades de los elementos basadas en su estructura atómica.
**📋 RENAC: EC009 · Historia de la Ciencia y Química General**
**💡 Standards World:** Demócrito · Dalton · Thomson · Rutherford · Bohr · Modelo Cuántico · Orbitales · Estructura Atómica""",

"1.42": """Si el átomo es el bloque de construcción de la materia, el **Protón** es el "DNI" o la identidad de cada elemento. La cantidad de protones que tiene un átomo en su núcleo es lo que define qué elemento es. Si un átomo tiene 1 protón, es Hidrógeno; si tiene 6, es Carbono; si tiene 79, es Oro. Cambiar el número de protones es, literalmente, convertir un elemento en otro, el sueño de los antiguos alquimistas.

El **Núcleo Atómico** es un lugar de contradicciones extremas. Está compuesto por protones (con carga positiva) y neutrones (sin carga). Como las cargas iguales se repelen, los protones deberían salir disparados en todas direcciones. La razón por la que el núcleo se mantiene unido es gracias a la **Fuerza Nuclear Fuerte**, la fuerza más poderosa del Universo, que actúa como un pegamento súper potente pero solo a distancias increíblemente cortas.

Los protones no son puntos elementales; tienen su propia estructura interna. Están formados por tres partículas más pequeñas llamadas **Quarks** (dos \"up\" y uno \"down\"). Estas piezas están unidas por partículas de intercambio llamadas **Gluones**. Entender el protón es sumergirse en la **Cromodinámica Cuántica**, una de las teorías más complejas y exitosas de la física moderna.

Los neutrones juegan un papel vital como "estabilizadores" del núcleo. Sin suficientes neutrones, la repulsión eléctrica entre los protones rompería el átomo. Los átomos de un mismo elemento que tienen diferentes cantidades de neutrones se llaman **Isótopos**. Algunos isótopos son estables, mientras que otros son radiactivos y se descomponen con el tiempo, emitiendo energía que podemos usar en medicina nuclear o para generar electricidad.

La masa del protón es aproximadamente 1,836 veces mayor que la del electrón. De hecho, casi toda la masa de tu cuerpo está concentrada en los protones y neutrones de tus núcleos atómicos. Sin embargo, el volumen del núcleo es un billón de veces más pequeño que el del átomo completo. Esto significa que eres, fundamentalmente, **espacio vacío** mantenido por campos de fuerza. Si elimináramos el espacio vacío de todos los átomos que componen a todos los seres humanos del mundo, la humanidad entera cabría dentro de un terrón de azúcar.

El estudio de la estructura nuclear nos ha dado el poder de la **Fusión** (unir núcleos) y la **Fisión** (romper núcleos). Es la base de la estabilidad del universo y la clave para entender cómo se recicla la materia desde el Big Bang hasta los laboratorios científicos de hoy en día.

---
**🔖 Bluebook v1 · Capítulo II, Sección 2.1** (Pág. 42)
**📐 NGSS: HS-PS1-1 · HS-PS1-8** — Relacionar la estructura del núcleo con las propiedades químicas y la estabilidad atómica.
**📋 RENAC: EC009 · Química Inorgánica y Física Nuclear de Partículas**
**💡 Standards World:** Protón · Neutrón · Isótopos · Quarks · Gluones · Fuerza Nuclear Fuerte · Estabilidad Atómica · Masa Atómica""",

"1.43": """Todo lo que sucede en el Universo, desde la caída de una manzana hasta la explosión de una estrella o el funcionamiento de tu teléfono celular, está gobernado por solo cuatro interacciones fundamentales. Estas son las **4 Fuerzas de la Naturaleza**, y juntas forman el "manual de usuario" de la realidad.

La primera es la **Gravedad**. Es la fuerza más familiar pero, curiosamente, la más débil de todas. La gravedad atrae todo lo que tiene masa hacia todo lo que tiene masa. Su alcance es infinito, lo que le permite mantener a los planetas en órbita y a las galaxias unidas. Según Einstein, la gravedad no es solo un tirón, sino la curvatura del espacio-tiempo. Sin gravedad, el universo sería una sopa de gas que jamás se transformaría en estrellas o planetas.

La segunda es la **Fuerza Electromagnética**. Esta fuerza une a los electrones con los núcleos para formar átomos y a los átomos entre sí para formar moléculas. Es la responsable de la luz, la electricidad, el magnetismo y de que no te hundas en el suelo (tus electrones repelen a los electrones del piso). Es miles de millones de veces más fuerte que la gravedad, pero solo actúa sobre partículas con carga eléctrica.

La tercera es la **Fuerza Nuclear Fuerte**. Es el pegamento definitivo. Mantiene unidos a los quarks para formar protones y neutrones, y a estos para formar el núcleo atómico. Su alcance es minúsculo, apenas el tamaño de un núcleo, pero su fuerza es tal que puede superar la repulsión eléctrica entre protones positivos. Es la fuente de la energía que hace brillar al Sol mediante la fusión.

La cuarta es la **Fuerza Nuclear Débil**. Aunque su nombre suena poco impresionante, es vital para la vida. Es la responsable de ciertos tipos de desintegración radiactiva y permite que un neutrón se convierta en un protón. Sin la fuerza débil, el Sol no podría realizar las reacciones nucleares que nos dan calor. Es la fuerza que permite que la materia "cambie de identidad".

El gran sueño de la física moderna es la **Gran Unificación** o la **Teoría del Todo**. Los científicos creen que al principio del Big Bang, estas cuatro fuerzas eran en realidad una sola "Superfuerza". A medida que el universo se enfrió, se separaron como el agua se separa del aceite. Unificar la gravedad (relatividad) con las otras tres fuerzas (mecánica cuántica) es el desafío más grande de la ciencia actual.

Entender las 4 fuerzas es entender las cuerdas que mueven las marionetas del cosmos. Cada vez que lanzas un balón, usas un imán o respiras, estás interactuando con estas leyes fundamentales que han permanecido constantes desde el inicio de los tiempos.

---
**🔖 Bluebook v1 · Capítulo II, Sección 2.1** (Págs. 44–45)
**📐 NGSS: HS-PS2-4 · HS-PS2-5** — Planificar y realizar investigaciones para comparar las fuerzas gravitatorias, eléctricas y magnéticas.
**📋 RENAC: EC009 · Física de Campos y Fuerzas Fundamentales**
**💡 Standards World:** Gravedad · Electromagnetismo · Fuerza Nuclear Fuerte · Fuerza Nuclear Débil · Teoría del Todo · Fotón · Gluón · Bosón W y Z"""
}

# Inject into modules
for ch in data['chapters']:
    for m in ch['modules']:
        if m['id'] in fullTexts:
            m['fullText'] = fullTexts[m['id']]

with open(path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

count = sum(1 for ch in data['chapters'] for m in ch['modules'] if 'fullText' in m)
print(f"✅ Batch 6 complete. {count} modules now have fullText content.")

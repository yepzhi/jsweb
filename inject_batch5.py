import json

path = '/Users/yepz/JSweb/data/modules.json'
with open(path, 'r', encoding='utf-8') as f:
    data = json.load(f)

fullTexts = {

"1.28": """Imagina que estás sumergido en el fondo de un océano de gas. No lo sientes porque has vivido ahí toda tu vida, pero cada centímetro de tu piel está siendo presionado por una mezcla invisible de moléculas que llamamos **aire**. El aire no es una sustancia única; es un cóctel químico perfectamente equilibrado que permite no solo que respiremos, sino que el fuego arda, que los sonidos viajen y que el calor del Sol no se escape instantáneamente al espacio.

La composición del aire terrestre es una de las "marcas registradas" de nuestro planeta. El **Nitrógeno (N₂)** es el componente mayoritario, ocupando el 78.08% de la atmósfera. El nitrógeno es un gas inerte, lo que significa que no reacciona fácilmente con otras sustancias. Su presencia es vital porque diluye el oxígeno; si la atmósfera fuera de oxígeno puro, cualquier chispa causaría incendios incontrolables y la vida orgánica se oxidaría demasiado rápido.

El segundo componente es el **Oxígeno (O₂)**, con un 20.95%. El oxígeno es el motor de la vida aeróbica y de la combustión. Lo más fascinante es que este oxígeno no estaba aquí originalmente. Hace 3,500 millones de años, la atmósfera terrestre casi no tenía oxígeno libre. Fue la invención de la **fotosíntesis** por las cianobacterias lo que comenzó a liberar oxígeno como un subproducto de desecho, en lo que se conoce como el Gran Evento de Oxidación. Básicamente, respiramos el "aire purificado" por plantas y microbios durante eones.

El 0.93% restante es **Argón**, un gas noble totalmente inerte. Y luego está el último 0.04%, que aunque parece insignificante, determina el destino del clima planetario: los **gases de efecto invernadero**, principalmente el **Dióxido de Carbono (CO₂)**. El CO₂ es el bloque de construcción de todas las plantas mediante la fotosíntesis, pero también es el gas que atrapa el calor infrarrojo de la superficie. Antes de la Revolución Industrial, el CO₂ estaba en 280 partes por millón (ppm); hoy estamos superando las 420 ppm, un nivel no visto en millones de años.

Además de estos gases, el aire contiene **vapor de agua** en concentraciones variables (del 0% en desiertos al 4% en selvas tropicales), que es el responsable de las nubes, la lluvia y la mayor parte del efecto invernadero natural. También contiene **aerosoles**: partículas diminutas de polvo, polen, ceniza volcánica y sales marinas que sirven como núcleos de condensación para que se formen las gotas de lluvia.

Entender la composición del aire es vital para la ingeniería química y ambiental. Por ejemplo, el proceso **Haber-Bosch** extrae nitrógeno del aire para fabricar fertilizantes, una tecnología que permite alimentar a casi la mitad de la población mundial actual. Sin la capacidad de manipular los componentes invisibles del aire, la civilización moderna colapsaría.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.5 — Atmósfera** (Págs. 31–33)
**📐 NGSS: HS-ESS2-6 · HS-ESS2-4** — Desarrollar un modelo cuantitativo de la atmósfera y el ciclo del carbono.
**📋 RENAC: EC009 · Ciencias Atmosféricas y Química Ambiental**
**💡 Standards World:** Nitrógeno · Oxígeno · Argón · CO2 · Efecto Invernadero · Fotosíntesis · Vapor de Agua · Aerosoles""",

"1.29": """Aunque parezca ligero como una pluma, el aire tiene peso. Si pudieras aislar una columna de aire de un centímetro cuadrado que fuera desde el nivel del mar hasta el borde del espacio, pesaría aproximadamente 1.03 kilogramos. Eso significa que, en este momento, tienes cientos de kilogramos de aire presionando sobre tus hombros y cabeza. La razón por la que no te aplasta es porque tus fluidos internos y el aire dentro de tus pulmones ejercen la misma presión hacia afuera. Estamos perfectamente equilibrados con nuestro entorno. Esta fuerza se llama **Presión Atmosférica**.

La presión atmosférica fue medida por primera vez de forma científica por **Evangelista Torricelli** en 1643. Torricelli llenó un tubo de vidrio con mercurio, lo invirtió en un plato y observó que el mercurio no se vaciaba completamente, sino que se detenía exactamente a una altura de 760 milímetros. Concluyó que era el peso del aire exterior el que empujaba el mercurio del plato hacia arriba dentro del tubo. Así nació el primer **barómetro**.

La unidad de medida estándar es la **Atmósfera (atm)**, donde 1 atm equivale a 101,325 pascales (Pa) o 14.7 libras por pulgada cuadrada (psi). Sin embargo, la presión no es constante; disminuye rápidamente con la **altitud**. A medida que subes una montaña, hay menos masa de aire por encima de ti, por lo que la presión baja. A la altura del Everest (8,848 m), la presión es apenas un tercio de la del nivel del mar. Esto significa que hay menos moléculas de oxígeno disponibles en cada inhalación, por lo que los montañistas necesitan oxígeno suplementario o periodos de aclimatación extrema.

Esta diferencia de presión es la que genera el **viento**. El aire siempre se desplaza desde las zonas de alta presión (anticiclones) hacia las de baja presión (borrascas). En un mapa meteorológico, las líneas que unen puntos de igual presión se llaman **isobaras**. Cuando las isobaras están muy juntas, significa que la presión cambia muy rápido en una distancia corta, lo que resulta en vientos fuertes y tormentas.

Para la ingeniería aeronáutica, la presión es el principio fundamental que permite el **vuelo**. Según el **Principio de Bernoulli**, el aire que se mueve más rápido por la parte superior curva de un ala ejerce menos presión que el aire más lento que va por debajo. Esa diferencia de presión crea una fuerza neta hacia arriba llamada **sustentación**, que permite a un avión de 500 toneladas despegar del suelo.

La presión también afecta la temperatura a la que hierven los líquidos. En la Ciudad de México, que está a 2,240 metros de altura, el agua hierve a unos 92°C en lugar de los 100°C del nivel del mar. Esto ocurre porque al haber menos presión atmosférica empujando las moléculas de agua hacia abajo, estas necesitan menos energía térmica para escapar al aire en forma de vapor. Entender la presión es entender cómo se mueve el clima, cómo vuelan los aviones y hasta cómo funcionan nuestras propias células.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.5** (Págs. 32–34)
**📐 NGSS: HS-PS2-1 · HS-ESS2-4** — Analizar datos para predecir cambios climáticos basados en sistemas de presión.
**📋 RENAC: EC009 · Física de Fluidos y Meteorología**
**💡 Standards World:** Presión Atmosférica · Barómetro · Pascal · Altitud · Isóbara · Principio de Bernoulli · Sustentación · Punto de Ebullición""",

"1.30": """Si quieres ver lo que sucede cuando el efecto invernadero se sale de control, no mires a la Tierra; mira a Venus. A menudo llamado el "gemelo malvado" de la Tierra, Venus tiene casi el mismo tamaño, masa y composición rocosa que nuestro planeta. Pero ahí terminan las similitudes. Venus es el lugar más caliente de todo el sistema solar, con una temperatura superficial constante de 465°C, suficiente para fundir el plomo. Y la razón no es su cercanía al Sol, sino su atmósfera: un **Efecto Invernadero Desbocado**.

La atmósfera de Venus es 90 veces más densa que la de la Tierra. Está compuesta en un 96% por **Dióxido de Carbono (CO₂)**. En la Tierra, el carbono está mayormente atrapado en las rocas y los océanos; en Venus, todo ese carbono terminó en el aire. La radiación solar atraviesa las nubes de ácido sulfúrico y llega a la superficie, pero cuando el planeta intenta irradiar ese calor de vuelta al espacio en forma de infrarrojos, el CO₂ lo atrapa con una eficiencia brutal. El calor no puede escapar, elevando la temperatura hasta niveles infernales.

Venus es una lección astronómica sobre la importancia del **balance energético**. En la Tierra, disfrutamos de un "efecto invernadero benigno" gracias a un equilibrio cíclico: el CO₂ es absorbido por los océanos y convertido en piedra caliza mediante procesos geológicos de millones de años. En Venus, estos procesos se detuvieron, probablemente porque los océanos primitivos se evaporaron debido al calor creciente, eliminando el mecanismo para "limpiar" el CO₂ de la atmósfera.

La presión en la superficie de Venus es tan alta que sería equivalente a estar a 900 metros bajo el océano terrestre: los humanos y sus máquinas serían aplastados en segundos. De hecho, las sondas soviéticas **Venera** que lograron aterrizar allí en los años 70 y 80 solo sobrevivieron entre 20 y 120 minutos antes de ser destruidas por la combinación de calor extremo, presión y lluvia ácida.

Estudiar el infierno de Venus es fundamental para entender el **Cambio Climático** en la Tierra. Venus nos muestra el "techo térmico" de un planeta rocoso. Aunque la Tierra no se convertirá en Venus mañana, el aumento acelerado de CO₂ en nuestra atmósfera por la quema de combustibles fósiles nos está moviendo en esa dirección climática. Venus sirve como el sistema de advertencia más grande del vecindario solar: el equilibrio de una atmósfera es frágil, y una vez que se rompe el ciclo de retroalimentación del carbono, el resultado es irreversible a escalas humanas de tiempo.

La **Exobiología** también usa a Venus como modelo. Algunos científicos proponen que en las capas altas de la atmósfera venusina, donde las temperaturas y presiones son similares a las de la Tierra, podrían existir microbios extremófilos viviendo en las nubes. En 2020, la detección de **fosfina** —un gas frecuentemente asociado con la vida— en las nubes de Venus reabrió el debate sobre si el planeta más hostil del sistema solar podría esconder vida en sus cielos.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.3** (Pág. 24)
**📐 NGSS: HS-ESS2-4 · HS-ESS3-5** — Usar evidencia de otros planetas para explicar el impacto del efecto invernadero.
**📋 RENAC: EC009 · Astronomía y Ciencias del Clima**
**💡 Standards World:** Venus · Efecto Invernadero · CO2 · Balance Energético · Presión Atmosférica · Venera · Cambio Climático · Retroalimentación""",

"1.31": """La Tierra tiene un escudo invisible que nos protege de la mayor amenaza del espacio profundo: el **Viento Solar**. Sin este escudo, la atmósfera terrestre habría sido arrancada hace millones de años, convirtiendo nuestro mundo en un desierto estéril como Marte. Este escudo es la **Magnetósfera**, un campo magnético colosal generado en las profundidades de nuestro planeta.

El origen de este campo está en el **Núcleo Externo** de la Tierra, una capa de 2,200 km de espesor hecha de hierro y níquel fundidos. Debido a la rotación del planeta y al calor que emana del núcleo interno sólido, este metal líquido está en constante movimiento convectivo. Como el hierro es un excelente conductor eléctrico, este movimiento genera corrientes eléctricas masivas que, a su vez, producen el campo magnético. Este proceso se conoce como el **Efecto Dinamo**.

La magnetósfera se extiende miles de kilómetros en el espacio, formando una burbuja protectora en forma de lágrima que desvía la mayoría de las partículas cargadas (protones y electrones) que emite el Sol. Cuando una ráfaga fuerte de viento solar choca contra la magnetósfera, las partículas son canalizadas por las líneas de campo hacia los polos norte y sur. Al chocar con los gases de la alta atmósfera, estas partículas emiten luz, creando el espectáculo más hermoso de la naturaleza: las **Auroras Boreales** y Australes.

Sin embargo, el campo magnético no es estático. A lo largo de la historia geológica de la Tierra, los polos norte y sur magnéticos se han intercambiado lugares cientos de veces, un fenómeno llamado **Inversión de los Polos**. La última ocurrió hace unos 780,000 años. Estas inversiones pueden durar miles de años y, durante la transición, el campo magnético se debilita, dejando al planeta —y a nuestra tecnología— más vulnerable a la radiación solar.

Para la civilización tecnológica, la magnetósfera es crítica. Una **Tormenta Geomagnética** masiva, causada por una erupción solar dirigida a la Tierra, puede inducir corrientes eléctricas en las redes de alta tensión, quemando transformadores a escala nacional y dejando ciudades enteras sin electricidad durante meses. En 1859, el llamado **Evento Carrington** fue tan fuerte que provocó auroras visibles en el Caribe y quemó los cables del telégrafo en Europa y América. Si un evento así ocurriera hoy, los daños a los satélites, los sistemas de GPS y la red eléctrica global serían catastróficos.

Entender la magnetósfera es entender la habitabilidad planetaria. Marte perdió su campo magnético global hace 4,000 millones de años cuando su núcleo se enfrió demasiado. Sin protección, el viento solar barrió su atmósfera y evaporó sus océanos. La Tierra sigue viva y azul gracias a que su corazón de hierro fundido sigue latiendo, generando el abrazo magnético que nos mantiene a salvo.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.6 — Geofísica** (Págs. 35–37)
**📐 NGSS: HS-PS2-5 · HS-ESS2-1** — Planificar y llevar a cabo investigaciones sobre la naturaleza de las fuerzas magnéticas y su efecto protector.
**📋 RENAC: EC009 · Geofísica y Magnetismo**
**💡 Standards World:** Magnetósfera · Núcleo Externo · Efecto Dinamo · Viento Solar · Auroras · Tormenta Geomagnética · Evento Carrington · Inversión de Polos""",

"1.32": """¿Dónde termina la Tierra y empieza el espacio? No hay una línea pintada en el cielo ni un cambio abrupto en la oscuridad. Lo que hay es una transición gradual donde las moléculas del aire se vuelven cada vez más escasas hasta que, finalmente, el concepto de "atmósfera" deja de tener sentido. Esta última frontera se llama la **Exósfera**.

La exósfera comienza aproximadamente a los 500-700 kilómetros de altura y se extiende hasta unos 10,000 kilómetros escoltando al planeta. En esta capa, el aire es tan tenue que los átomos y las moléculas están separados por cientos de kilómetros. Aquí, las partículas no chocan entre sí como lo hacen cerca de la superficie; en su lugar, siguen trayectorias balísticas curvas bajo la gravedad. Algunas de estas partículas se mueven tan rápido que alcanzan la **velocidad de escape** y se pierden para siempre en el espacio exterior.

A pesar de ser casi un vacío, la exósfera es el hogar de la mayoría de nuestros satélites artificiales y de la **Estación Espacial Internacional (ISS)**. Sin embargo, para fines legales y de aviación, el mundo utiliza una frontera artificial llamada la **Línea de Kármán**, situada a 100 kilómetros de altura. Por encima de esta línea, el aire es tan delgado que un ala aeronáutica normal no puede generar sustentación a menos que el vehículo se mueva a velocidades orbitales. Cruzar la Línea de Kármán es lo que te define oficialmente como un astronauta.

Pero hay otra frontera más sutil descubierta en 1958: los **Cinturones de Van Allen**. Son dos regiones en forma de dona dentro de la magnetósfera donde partículas cargadas de alta energía del Sol quedan atrapadas por el campo magnético. El cinturón interior es rico en protones de alta energía, y el exterior en electrones. Estos cinturones son peligrosos para los seres humanos; los astronautas de las misiones **Apollo** tuvieron que cruzar estas zonas lo más rápido posible para minimizar la dosis de radiación recibida.

Hoy en día, la exósfera se ha poblado de "basura espacial": restos de satélites viejos y cohetes que orbitan a 28,000 km/h. Un pequeño tornillo a esa velocidad tiene la energía cinética de una granada de mano. Este problema, conocido como el **Síndrome de Kessler**, sugiere que si seguimos acumulando basura, llegará un punto en que las colisiones en cadena harán que el acceso al espacio sea imposible para futuras generaciones.

La exósfera nos recuerda que somos un sistema abierto. La Tierra no es una cápsula sellada; está constantemente liberando hidrógeno y helio al espacio mientras recibe toneladas de polvo de meteoritos y energía solar. Somos un planeta que respira hacia el cosmos a través de su frontera más externa y sutil.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.5** (Pág. 34)
**📐 NGSS: HS-ESS1-4 · HS-PS2-4** — Usar modelos matemáticos para predecir el movimiento de objetos en la exósfera y el espacio.
**📋 RENAC: ET002 · Tecnología Satelital y Aeronáutica**
**💡 Standards World:** Exósfera · Línea de Kármán · Cinturones de Van Allen · Basura Espacial · Síndrome de Kessler · Velocidad de Escape · Trayectoria Balística""",

"1.33": """Toda la energía que mueve el mundo, desde el calor de tu piel hasta la electricidad de tu ciudad, viene en última instancia de reacciones que ocurren en el corazón de los átomos. Hay dos formas de liberar esta energía nuclear: rompiendo átomos grandes o pegando átomos pequeños. Son los procesos de **Fisión** y **Fusión**, y entender la diferencia es clave para el futuro energético de la humanidad.

La **Fisión Nuclear** ocurre cuando el núcleo de un átomo pesado, como el **Uranio-235**, es golpeado por un neutrón y se divide en dos núcleos más pequeños. Esta división libera una cantidad enorme de energía en forma de calor y radiación, además de más neutrones que pueden chocar con otros átomos de uranio. Si este proceso se controla, tenemos una central nuclear que genera electricidad limpia (sin emisiones de CO₂); si no se controla, tenemos una **reacción en cadena** explosiva. El gran desafío de la fisión es que genera residuos radiactivos que permanecen peligrosos durante miles de años.

La **Fusión Nuclear**, por otro lado, es el proceso opuesto. Ocurre cuando dos núcleos ligeros, generalmente de **Hidrógeno**, se unen para formar un núcleo más pesado de Helio. Este es el proceso que alimenta a las estrellas y al Sol. La fusión libera mucha más energía que la fisión y no produce residuos radiactivos de larga vida. El combustible necesario (isótopos de hidrógeno como el deuterio) se puede extraer del agua de los océanos, lo que la convertiría en una fuente de energía prácticamente inagotable.

¿Por qué no usamos fusión para generar electricidad hoy? Porque es extremadamente difícil de lograr en la Tierra. Para que dos núcleos se unan, deben superar la enorme fuerza de repulsión eléctrica que existe entre sus cargas positivas. Esto solo ocurre a temperaturas de **100 millones de grados centígrados**, mucho más caliente que el centro del Sol. A esa temperatura, la materia se convierte en un **Plasma** que debe ser confinado mediante campos magnéticos ultrapoderosos en máquinas llamadas **Tokamaks**.

El proyecto internacional **ITER**, que se construye en Francia, es el mayor experimento científico de la historia. Su objetivo es demostrar que podemos obtener más energía de la fusión de la que gastamos en calentar el plasma. Si el ITER tiene éxito, la humanidad habrá "embotellado una estrella", logrando una fuente de energía barata, segura y eterna.

Tanto la fisión como la fusión demuestran la famosa ecuación de Einstein, **E=mc²**. Una minúscula cantidad de masa (m) que se pierde durante la reacción se convierte en una cantidad gigantesca de energía (E), porque se multiplica por el cuadrado de la velocidad de la luz (c²). Somos seres hechos de átomos que han aprendido a liberar la energía que los mantiene unidos.

---
**🔖 Bluebook v1 · Capítulo II, Sección 2.1 — Física Nuclear** (Págs. 42–45)
**📐 NGSS: HS-PS1-8** — Desarrollar modelos para ilustrar los cambios en la composición del núcleo del átomo y la energía liberada.
**📋 RENAC: ET005 · Energía Nuclear y Tecnologías de Generación**
**💡 Standards World:** Fisión · Fusión · Uranio-235 · Hidrógeno · ITER · Tokamak · Reacción en Cadena · E=mc2""",

"1.34": """En el interior de las estrellas más masivas que nuestro Sol, ocurre una danza química invisible que es responsable de la mayor parte del nitrógeno y el oxígeno que hoy respiras. Se llama el **Ciclo C-N-O** (Carbono-Nitrógeno-Oxígeno), y es uno de los métodos más eficientes que tiene la naturaleza para convertir hidrógeno en helio y liberar energía estelar.

Mientras que las estrellas pequeñas como el Sol usan mayormente la cadena "protón-protón", las estrellas con más de 1.3 veces la masa solar recurren al ciclo C-N-O. En este proceso, el **Carbono-12** actúa como un **catalizador**. Esto significa que el carbono ayuda a que la reacción ocurra rápidamente pero sale intacto al final del ciclo para ser usado nuevamente. Es como un obrero en una línea de ensamblaje que une piezas sin convertirse él mismo en parte del producto final.

El ciclo funciona así: un núcleo de Carbono-12 captura un protón (hidrógeno) para convertirse en Nitrógeno-13, luego decae a Carbono-13, captura otro protón para volver a ser Nitrógeno, captura otro más para ser Oxígeno-15, y finalmente, tras una última colisión, libera un núcleo de Helio y vuelve a ser Carbono-12. El resultado neto es que **4 núcleos de Hidrógeno se fusionan en 1 de Helio**, liberando una cantidad masiva de fotones y neutrinos en el proceso.

Este ciclo es extremadamente sensible a la **temperatura**. Solo comienza a ser dominante cuando el núcleo de la estrella alcanza unos 15 o 17 millones de grados Kelvin. En estrellas súper masivas, donde las temperaturas centrales son aún más altas, el ciclo C-N-O ocurre a una velocidad frenética, lo que hace que estas estrellas brillen con una intensidad cegadora y consuman su combustible en apenas unos millones de años en lugar de miles de millones.

La importancia del ciclo C-N-O para la vida es fundamental. Durante estas reacciones, pequeñas cantidades de nitrógeno y oxígeno se escapan del ciclo y se acumulan en la estrella. Cuando estas estrellas masivas finalmente explotan como **Supernovas**, lanzan este nitrógeno y oxígeno al espacio interestelar. Esa es la fuente del aire que respiras y de las moléculas de nitrógeno en tu ADN. Literalmente, tu capacidad de pensar y respirar hoy depende de una reacción nuclear que ocurrió en el corazón de una estrella masiva hace eones.

El estudio del ciclo C-N-O también es clave en la **Astrofísica de Neutrinos**. Como estas reacciones emiten neutrinos con energías específicas, los detectores en la Tierra (como el Borexino en Italia) pueden "ver" directamente lo que está pasando en el centro de las estrellas, confirmando nuestras teorías sobre cómo funciona el motor del Universo.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.1** (Págs. 13–15)
**📐 NGSS: HS-PS1-8 · HS-ESS1-3** — Comunicar información científica sobre cómo las estrellas producen elementos mediante la fusión.
**📋 RENAC: EC009 · Astrofísica Estelar**
**💡 Standards World:** Ciclo C-N-O · Catalizador · Fusión Nuclear · Carbono-12 · Helio · Supernova · Neutrinos · Nucleosíntesis""",

"1.35": """A todas las estrellas les llega el momento de morir, y el Sol no es la excepción. Dentro de unos 5,000 millones de años, el Sol agotará el hidrógeno en su núcleo y comenzará una transformación dramática que lo convertirá en una **Gigante Roja**. Este es el destino final de la mayoría de las estrellas de masa baja y media, y es uno de los procesos más majestuosos y destructivos del cosmos.

¿Por qué una estrella se vuelve gigante al morir? Cuando el hidrógeno se acaba, el núcleo de la estrella —hecho ahora de helio— pierde la presión hacia afuera que le daba la fusión nuclear. La gravedad, que nunca descansa, comienza a comprimir el núcleo ferozmente. Esta compresión genera un calor tan intenso que comienza a fusionar el hidrógeno que quedaba en una capa alrededor del núcleo. Este calor repentino hace que las capas externas de la estrella se expandan enormemente, cientos de veces su diámetro original.

El Sol se expandirá tanto que probablemente engullirá a Mercurio y Venus. La Tierra, si no es devorada, se convertirá en una roca calcinada bajo un Sol que ocupará la mayor parte de nuestro cielo y brillará con un tono rojo intenso. A pesar de ser mucho más grandes, las Gigantes Rojas tienen una temperatura superficial menor (unos 3,000 K), lo que les da su color característico pero una **luminosidad** total miles de veces superior a la actual.

En esta fase ocurre el "**Flash del Helio**": el núcleo se calienta tanto que el helio comienza a fusionarse en carbono y oxígeno mediante el proceso triple alfa. La estrella vive una "segunda juventud" breve y turbulenta. Pero el helio también se acaba. Para una estrella como el Sol, no hay masa suficiente para fusionar el carbono. Las capas externas, ya muy débiles, se desprenden suavemente al espacio formando una hermosa **Nebulosa Planetaria**.

Lo que queda en el centro es el cadáver estelar: una **Enana Blanca**. Es un objeto del tamaño de la Tierra pero con la masa del Sol, tan denso que una cucharada de su material pesaría toneladas. Las enanas blancas no tienen fusión; solo brillan con el calor residual durante billones de años hasta enfriarse y convertirse en enanas negras invisibles.

Las Gigantes Rojas son las grandes recicladoras del Universo. Al expandirse y soltar sus capas externas enriquecidas con carbono y oxígeno, siembran el espacio con los ingredientes necesarios para que nazcan nuevas estrellas y, eventualmente, nuevos planetas con potencial para la vida. El final del Sol será, en realidad, el abono para el futuro del cosmos.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.1** (Págs. 14–15)
**📐 NGSS: HS-ESS1-1 · HS-ESS1-3** — Usar el modelo del ciclo de vida de las estrellas para predecir su evolución y la producción de elementos.
**📋 RENAC: EC009 · Evolución Estelar**
**💡 Standards World:** Gigante Roja · Enana Blanca · Nebulosa Planetaria · Flash del Helio · Ciclo de Vida Estelar · Fusión de Helio · Luminosidad · Supervivencia Planetaria"""
}

# Inject into modules
for ch in data['chapters']:
    for m in ch['modules']:
        if m['id'] in fullTexts:
            m['fullText'] = fullTexts[m['id']]

with open(path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

count = sum(1 for ch in data['chapters'] for m in ch['modules'] if 'fullText' in m)
print(f"✅ Batch 5 complete. {count} modules now have fullText content.")

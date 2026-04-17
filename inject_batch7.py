import json

path = '/Users/yepz/JSweb/data/modules.json'
with open(path, 'r', encoding='utf-8') as f:
    data = json.load(f)

fullTexts = {

"1.44": """Durante décadas, la física fue construyendo un catálogo de partículas: electrones, protones, neutrones, quarks, neutrinos... La pregunta era inevitable: ¿hay un sistema que las organice a todas? La respuesta es el **Modelo Estándar de la Física de Partículas**, el manual de instrucciones más preciso jamás escrito sobre los bloques fundamentales de la realidad.

El Modelo Estándar clasifica todas las partículas conocidas en dos grandes familias. Los **Fermiones** son las partículas de materia —los quarks y los leptones— y obedecen el **Principio de Exclusión de Pauli**: dos fermiones idénticos no pueden ocupar el mismo estado cuántico simultáneamente. Esto es lo que hace que la materia sea sólida; los electrones de un átomo no colapsan todos sobre el núcleo porque la mecánica cuántica los prohíbe. Los **Bosones**, en cambio, son las partículas que transmiten las fuerzas: el fotón (electromagnetismo), los bosones W y Z (fuerza débil) y los gluones (fuerza fuerte). Los bosones no tienen restricciones de ocupación; de hecho, prefieren estar juntos, lo que permite crear láseres donde millones de fotones se mueven exactamente igual.

La belleza matemática del Modelo Estándar es que está construido sobre principios de **Simetría**. Cada fuerza se describe a través de una "simetría de gauge", que es básicamente una invariancia matemática que dicta cómo las partículas interactúan. El electromagnetismo obedece la simetría U(1); la fuerza débil, SU(2); y la fuerza fuerte, SU(3). Estas tres juntas forman el grupo SU(3)×SU(2)×U(1), que es el corazón algebraico de toda la física moderna.

Una de las predicciones más osadas del Modelo Estándar fue la existencia del **Bosón de Higgs**, una partícula asociada al campo que da masa a todas las demás. Sin el campo de Higgs, los quarks y electrones no tendrían masa y el universo sería plasma de luz pura. El Modelo Estándar predijo esta partícula en 1964, y tardamos casi 50 años en construir una máquina suficientemente poderosa para detectarla.

Sin embargo, el Modelo Estándar tiene límites conocidos. **No incluye la gravedad**, que sigue siendo descrita por la Relatividad General de Einstein y que aún no ha podido ser cuantizada. Tampoco explica la **Materia Oscura** (que representa el 27% del universo) ni la **Energía Oscura** (el 68%). Además, no explica por qué existe más materia que antimateria. Estas brechas son el motor que impulsa a la nueva generación de físicos teóricos.

A pesar de sus limitaciones, el Modelo Estándar es la teoría más exitosa de la historia de la ciencia. Sus predicciones coinciden con los experimentos con una precisión de más de diez decimales. Es el mapa más fino que tenemos del territorio de lo infinitamente pequeño, y nos enseña que debajo de toda la diversidad del universo hay una elegancia matemática sorprendente.

---
**🔖 Bluebook v1 · Capítulo II, Sección 2.1 — Física de Partículas** (Págs. 44–46)
**📐 NGSS: HS-PS1-8** — Desarrollar modelos para ilustrar la naturaleza de la materia a nivel subatómico y las fuerzas que la rigen.
**📋 RENAC: EC009 · Física de Partículas Elementales**
**💡 Standards World:** Modelo Estándar · Fermiones · Bosones · Quarks · Leptones · Simetría de Gauge · Principio de Pauli · Fotón""",

"1.45": """Si el Modelo Estándar es el manual teórico del universo, el **CERN** y su **Gran Colisionador de Hadrones (LHC)** son el taller experimental donde ponemos ese manual a prueba. Ubicado en la frontera entre Francia y Suiza, a 100 metros bajo tierra, el LHC es la máquina más compleja jamás construida por la humanidad. Su circunferencia mide 27 kilómetros y costó más de 10,000 millones de dólares. ¿Por qué tanto esfuerzo? Para recrear las condiciones del Universo en sus primeras fracciones de segundo.

El principio de funcionamiento del LHC es deceptivamente simple: tomar dos haces de **protones**, acelerarlos en sentidos opuestos hasta que alcancen el 99.9999991% de la velocidad de la luz, y luego hacerlos chocar. En ese momento de colisión, la energía cinética gigantesca se convierte en masa (recuerda: E=mc²), y nacen brevísimamente partículas que normalmente no existen en nuestro universo frío. Los detectores —enormes como catedrales— fotografían esas partículas antes de que desaparezcan en microsegundos.

Para acelerar los protones, el LHC usa **imanes superconductores** enfriados a -271°C, más fríos que el espacio exterior. Estos imanes crean campos magnéticos 100,000 veces más fuertes que el de la Tierra, suficientes para doblar la trayectoria de partículas que se mueven casi a la luz. La tecnología de superconductividad desarrollada para el LHC tiene aplicaciones directas en los nuevos trenes maglev, los escáneres MRI de los hospitales y los proyectos de fusión nuclear como ITER.

En julio de 2012, los experimentos ATLAS y CMS del LHC anunciaron el descubrimiento que el mundo esperaba: el **Bosón de Higgs**. Peter Higgs, uno de los científicos que lo predijo en 1964, estaba en la sala cuando se hizo el anuncio con 80 años. Fue una de las pocas veces en la historia donde teoría y experimento se unieron ante el propio inventor en vida.

El LHC también busca señales de física **Más Allá del Modelo Estándar (BSM)**. Partículas supersimétricas, dimensiones extra predichas por la Teoría de Cuerdas, o la materia oscura en forma de **WIMPs** (partículas masivas de interacción débil). Cada colisión es una ventana al pasado más remoto del cosmos y un laboratorio para pruebas que jamás podríamos realizar de forma natural.

El CERN es también la cuna del **World Wide Web**. En 1989, el científico Tim Berners-Lee propuso un sistema de intercambio de información para los investigadores del laboratorio, y esa red interna se convirtió en la internet que hoy conecta al mundo entero. El colisionador de partículas más grande del planeta accidentalmente inventó la herramienta de comunicación más importante de la historia moderna.

---
**🔖 Bluebook v1 · Capítulo II, Sección 2.1** (Págs. 44–45)
**📐 NGSS: HS-PS1-8 · HS-PS2-4** — Evaluar datos de experimentos de alta energía para comprender las partículas fundamentales.
**📋 RENAC: ET005 · Instrumentación Científica de Alta Energía**
**💡 Standards World:** CERN · LHC · Protones · Superconductividad · Bosón de Higgs · WIMP · ATLAS · World Wide Web""",

"1.46": """Por décadas, el **Bosón de Higgs** fue el Santo Grial de la física. Era la única pieza del Modelo Estándar que no había sido detectada experimentalmente, y su ausencia era como tener un rompecabezas completo al que le falta la pieza central. En julio de 2012, dos experimentos independientes en el CERN confirmaron su existencia. Foi quizás el mayor logro científico del siglo XXI hasta la fecha.

¿Pero por qué es tan importante? La respuesta tiene que ver con por qué las cosas tienen masa. En 1964, el físico escocés **Peter Higgs** (y otros científicos de forma independiente) propuso que el universo está lleno de un campo invisible y omnipresente: el **Campo de Higgs**. Las partículas fundamentales "nadan" a través de este campo, y según cuánto interactúen con él, adquieren mayor o menor masa. Los fotones no interactúan en absoluto, por eso no tienen masa y viajan a la velocidad de la luz. Los quarks interactúan fuertemente, por eso son pesados.

Una analogía famosa: imagina que el campo de Higgs es como una sala llena de periodistas. Si entra un desconocido, pasa sin que nadie lo moleste (como el fotón). Pero si entra una celebridad, todos se agolpan a su alrededor, ralentizando su movimiento. Esa resistencia es lo que experimentamos como **masa**. El Bosón de Higgs es la "partícula de excitación" del campo, como una ola en el océano es una excitación del agua.

Detectar el bosón fue una proeza tecnológica monumental. El LHC producía billones de colisiones por segundo, y el bosón de Higgs aparecía en apenas una de cada diez mil millones. Los algoritmos de inteligencia artificial y el análisis de **Big Data** que se desarrollaron para filtrar esta aguja en el pajar digital son hoy la base de sistemas de IA que se usan en medicina, climatología y finanzas.

Ahora que lo hemos detectado, los físicos miden sus propiedades con precisión creciente. Una desviación mínima podría ser la puerta hacia la físca **Más Allá del Modelo Estándar**. ¿Hay múltiples bosones de Higgs? ¿El campo de Higgs está relacionado con la inflación cósmica que expandió el universo en sus primeros instantes? ¿Puede el Higgs ser el vínculo entre la materia ordinaria y la materia oscura?

El Bosón de Higgs es la demostración más poderosa de que las matemáticas abstractas escritas en una pizarra pueden predecir la realidad física con medio siglo de antelación. Es la victoria más grande del **Método Científico** en la historia moderna.

---
**🔖 Bluebook v1 · Capítulo II, Sección 2.1** (Pág. 45)
**📐 NGSS: HS-PS1-8** — Comunicar información científica sobre cómo la física de partículas explica el origen de la masa.
**📋 RENAC: EC009 · Cosmología y Física Teórica**
**💡 Standards World:** Bosón de Higgs · Campo de Higgs · Masa · Modelo Estándar · CERN · Big Data · Simetría de Ruptura · Método Científico""",

"1.47": """Si los protones son la "identidad" de un átomo, los **Isótopos** son sus "versiones alternativas". Dos átomos del mismo elemento tienen siempre el mismo número de protones, pero pueden tener diferente número de **neutrones**. Esas variantes se llaman isótopos, y sus propiedades pueden ser radicalmente distintas: desde completamente estables e inofensivos hasta peligrosamente radiactivos.

Tomemos el hidrógeno como ejemplo. El hidrógeno normal (**Protio**, H-1) tiene 1 protón y 0 neutrones. El **Deuterio** (H-2) tiene 1 protón y 1 neutrón, y es estable; se usa en reactores nucleares y en la investigación de fusión. El **Tritio** (H-3) tiene 1 protón y 2 neutrones, y es radiactivo; se desintegra emitiendo radiación beta. Los tres son "hidrógeno" porque tienen 1 protón, pero sus comportamientos son completamente distintos.

¿Por qué algunos isótopos son estables y otros no? Todo tiene que ver con el equilibrio entre la **Fuerza Nuclear Fuerte** (que une los nucleones) y la **Repulsión Eléctrica** (que empuja a los protones entre sí). Cuando un núcleo tiene demasiados neutrones o demasiados protones para el tamaño de su núcleo, el equilibrio falla y el átomo busca estabilizarse desintegrándose y emitiendo energía. Este proceso es la **Radioactividad**.

La aplicación más conocida de los isótopos es la **Datación por Carbono-14**. El C-14 es un isótopo radiactivo del carbono que se forma en la atmósfera cuando los rayos cósmicos bombardean el nitrógeno. Todos los seres vivos lo incorporan en sus tejidos mientras están vivos. Cuando mueren, dejan de incorporar C-14 y el que tienen empieza a desintegrarse a un ritmo conocido (con una «vida media» de 5,730 años). Midiendo cuánto C-14 queda en un fósil o artefacto arqueológico, podemos calcular con precisión cuándo murió el organismo.

En medicina nuclear, los isótopos son herramientas de diagnóstico y tratamiento. El **Tecnecio-99m** es el isótopo más usado en diagnósticos por imagen; emite rayos gamma que los escáneres detectan para visualizar tumores, fracturas óseas o bloqueos vasculares sin cirugía. El **Yodo-131** se usa para tratar el cáncer de tiroides: la tiroides absorbe yodo de forma natural, y esta versión radiactiva destruye las células cancerosas desde adentro.

En la industria, los isótopos permiten **detectar grietas** en tuberías y estructuras sin abrirlas, usando radiación de penetración controlada. Son también el combustible de los **RTGs** (Generadores Termoeléctricos de Radioisótopos) que alimentan las sondas espaciales como Voyager y Curiosity en los confines del sistema solar, donde la luz solar es demasiado débil para los paneles solares.

---
**🔖 Bluebook v1 · Capítulo II, Sección 2.1** (Págs. 42–44)
**📐 NGSS: HS-PS1-8** — Desarrollar modelos para ilustrar los cambios en la composición del núcleo durante la desintegración radiactiva.
**📋 RENAC: EC009 · Química Nuclear y Radioisótopos**
**💡 Standards World:** Isótopos · Deuterio · Tritio · Carbono-14 · Tecnecio-99m · Datación Radiométrica · Fuerza Nuclear · Radiactividad""",

"1.48": """Un átomo eléctricamente neutro tiene exactamente el mismo número de protones positivos que de electrones negativos. Pero esta neutralidad puede romperse. Cuando un átomo gana o pierde uno o más electrones, se convierte en un **Ion** —una partícula con carga eléctrica neta— y este cambio transforma radicalmente sus propiedades químicas y su capacidad para reaccionar con el entorno.

Los iones con carga positiva (porque perdieron electrones) se llaman **Cationes**, y los de carga negativa (porque ganaron electrones) se llaman **Aniones**. El proceso de formación de iones se llama **Ionización**, y puede ocurrir por calor, luz, colisiones de alta energía o reacciones químicas. En el interior del Sol, toda la materia existe como plasma, un estado donde los iones y sus electrones están completamente separados a temperaturas de millones de grados.

La química de los iones es fundamental para la vida. Los **Iones de Sodio (Na⁺) y Potasio (K⁺)** son los responsables de los impulsos eléctricos que viajan por tus neuronas. Cuando tienes un pensamiento, abres esta aplicación o mueves un dedo, es un flujo controlado de estos iones a través de las membranas celulares lo que transmite la señal. Sin iones, no hay electricidad biológica, no hay vida.

En tecnología, los iones son el corazón de las **Baterías de Litio**, que alimentan todos tus dispositivos electrónicos. En una batería de ion-litio, cuando se descarga, los iones de litio (Li⁺) viajan del ánodo al cátodo a través de un electrolito. Cuando se recarga, el proceso se invierte. La capacidad de mover iones de forma controlada y reversible es lo que hace que estas baterías puedan cargarse miles de veces. La investigación en nuevos materiales iónicos busca baterías más densas, más rápidas de cargar y más seguras para los próximos vehículos eléctricos.

Los iones también son la base de los **Sistemas de Propulsión Iónica** usados en naves espaciales. En lugar de quemar combustible (caro y pesado), estos motores ionizan xenón y aceleran los iones con campos eléctricos hasta velocidades de más de 40 km/s. Esto es 10 veces más eficiente que los cohetes convencionales, aunque la fuerza generada es mínima (como el peso de una hoja de papel). Para misiones de larga duración en el espacio, donde la eficiencia importa más que la potencia inmediata, la propulsión iónica es el futuro.

En medicina, los **Aceleradores de Protones** («Terapia Protónica») usan haces de iones para destruir tumores con una precisión milimétrica. A diferencia de la radioterapia convencional, los protones liberan casi toda su energía exactamente en el punto del tumor (efecto Bragg), minimizando el daño a tejidos sanos circundantes. Es la aplicación médica más precisa de la física de iones disponible hoy.

---
**🔖 Bluebook v1 · Capítulo II, Sección 2.1** (Págs. 43–44)
**📐 NGSS: HS-PS1-2 · HS-PS3-3** — Planificar investigaciones para recolectar evidencias sobre propiedades de iones y transferencias de energía.
**📋 RENAC: EC009 · Electroquímica e Ingeniería de Energía**
**💡 Standards World:** Iones · Cationes · Aniones · Ionización · Batería de Ion-Litio · Propulsión Iónica · Terapia Protónica · Plasma""",

"1.49": """En 1896, el físico francés **Henri Becquerel** dejó un trozo de mineral de uranio sobre una placa fotográfica envuelta en papel negro. Varios días después, al revelar la placa, encontró la silueta del mineral grabada con perfecta nitidez. El uranio había emitido algo —sin ninguna fuente de luz ni calor— que había atravesado el papel y expuesto la emulsión. Fue el descubrimiento accidental de la **Radiactividad**, y cambió la historia de la ciencia.

La radiactividad ocurre cuando el núcleo de un átomo es inestable y busca alcanzar un estado de menor energía desprendiéndose de partículas o liberando energía. Este proceso es completamente natural; existe en minerales, en el suelo, en el cuerpo humano (el potasio de tus plátanos es 0.01% K-40, un isótopo radiactivo) y en el espacio profundo. La clave es la dosis: la radiactividad es peligrosa a altas intensidades, pero omnipresente e inevitable en cantidades pequeñas.

Existen tres tipos principales de radiación. La **Radiación Alfa** consiste en núcleos de helio emitidos del núcleo; es la más ionizante pero la menos penetrante (una hoja de papel la detiene). La **Radiación Beta** son electrones de alta energía; penetra varios milímetros de tejido y requiere una capa de aluminio para bloquearla. La **Radiación Gamma** son fotones de altísima energía; tiene poder de penetración extremo y requiere bloques de plomo o concreto denso para atenuarla significativamente.

**Marie Curie** y su esposo Pierre fueron los primeros en estudiar sistemáticamente la radiactividad, término que ella misma acuñó. Marie descubrió dos elementos nuevos: el **Polonio** y el **Radio**, y fue galardonada con el Premio Nobel en dos disciplinas distintas (Física y Química), siendo la primera persona en la historia en lograrlo. Irónicamente, la causa de su muerte fue la anemia aplásica, causada por décadas de exposición a la radiación que ella misma estaba descubriendo.

Hoy, la radiactividad controlada tiene aplicaciones masivas en **Medicina Nuclear**: los escáneres PET (Tomografía de Emisión de Positrones) inyectan glucosa radiactiva en el cuerpo y mapean la actividad metabólica de las células, revelando tumores cancerosos con alta precisión. El **Cobalto-60** se usa para esterilizar material quirúrgico y alimentos sin calor. Y los **RTGs** (Generadores de Radioisótopos) alimentan sondas como Curiosity y New Horizons en los rincones más remotos del sistema solar.

La radiactividad es una ventana directa al núcleo del átomo. Estudiarla reveló la estructura del núcleo, la existencia de nuevas partículas (el neutrino fue predicho para explicar la conservación de energía en la desintegración beta) y nos dio las herramientas para descifrar la historia del universo a través de la geología y la arqueología.

---
**🔖 Bluebook v1 · Capítulo II, Sección 2.1** (Págs. 42–44)
**📐 NGSS: HS-PS1-8** — Desarrollar modelos para ilustrar los cambios durante la desintegración radiactiva y sus aplicaciones.
**📋 RENAC: EC009 · Física Nuclear y Radioprotección**
**💡 Standards World:** Radiactividad · Alfa · Beta · Gamma · Marie Curie · Uranio · PET · RTG""",

"1.50": """¿Cómo saben los arqueólogos que una momia tiene 3,000 años? ¿Cómo confirman los geólogos que una roca tiene 500 millones de años? La respuesta está en uno de los conceptos más elegantes de la física nuclear: la **Vida Media** (o semivida), un reloj atómico perfectamente regular incrustado en la naturaleza misma.

La vida media de un isótopo radiactivo es el tiempo que tarda exactamente la mitad de los átomos de una muestra en desintegrarse. Es una ley estadística: no puedes predecir cuándo un átomo específico va a desintegrarse, pero si tienes millones de átomos, el comportamiento colectivo es perfectamente predecible. Si empiezas con 1,000 gramos de un isótopo con vida media de 100 años, después de 100 años tendrás 500 gramos; después de 200 años, 250 gramos; después de 300 años, 125 gramos. Una curva de decaimiento exponencial perfecta.

El **Carbono-14** tiene una vida media de 5,730 años. Todos los seres vivos incorporan C-14 en sus tejidos mientras están vivos (del CO₂ atmosférico). Cuando mueren, el C-14 que tienen empieza a desintegrarse. Midiendo la proporción de C-14 restante, podemos fechar materiales orgánicos con una precisión de ±40 años. Esta técnica, la **Datación Radiocarbónica**, fue desarrollada por Willard Libby en 1949 y le valió el Premio Nobel de Química en 1960.

Para materiales más antiguos, los geólogos usan el **Uranio-238** (vida media: 4,468 millones de años) y el **Potasio-40** (1,250 millones de años). Midiendo las proporciones entre el isótopo padre y los isótopos hijos generados por su desintegración en rocas minerales, podemos fechar la formación de la corteza terrestre, la edad de las rocas lunares traídas por el Apollo, y el origen del sistema solar. Es la única forma en que conocemos la edad de la Tierra: 4,543 millones de años.

En medicina, la vida media es crítica para el diseño de tratamientos. El **Tecnecio-99m** tiene una vida media de solo 6 horas: el tiempo suficiente para realizar un diagnóstico por imagen pero lo bastante corto para que la radiación del paciente se disipe rápidamente. El **Iodo-131** (vida media: 8 días) es ideal para tratar hipertiroidismo: irradiando la tiroides el tiempo justo para destruir el tejido problemático.

La vida media es también la razón por la que los residuos nucleares siguen siendo peligrosos durante milenios. El **Plutonio-239** tiene una vida media de 24,100 años, lo que significa que debemos almacenarlo de forma segura durante cien mil años para que se vuelva relativamente inofensivo. Este es uno de los mayores desafíos éticos e ingenieriles de nuestra civilización.

---
**🔖 Bluebook v1 · Capítulo II, Sección 2.1** (Págs. 43–44)
**📐 NGSS: HS-PS1-8** — Usar modelos matemáticos de decaimiento exponencial para predecir la vida media de isótopos.
**📋 RENAC: EC009 · Física Nuclear y Geocronología**
**💡 Standards World:** Vida Media · Carbono-14 · Decaimiento Exponencial · Datación Radiocarbónica · Uranio-238 · Tecnecio-99m · Residuos Nucleares · Nobel de Química""",

"1.51": """El 6 de agosto de 1945, a las 8:15 de la mañana, una bomba llamada "Little Boy" explotó sobre **Hiroshima**, Japón. Liberó la energía equivalente a 15,000 toneladas de TNT en una fracción de segundo, destruyendo 13 km² de ciudad e iniciando la era nuclear. Esta devastación fue posible gracias a un fenómeno descubierto en 1938 en un laboratorio de Berlín: la **Fisión del Uranio**.

La fisión del Uranio-235 ocurre cuando un neutrón lento colisiona con un núcleo de U-235. El núcleo, inestable tras absorber el neutrón, se divide en dos fragmentos más ligeros (generalmente Bario y Kriptón) y libera 2-3 neutrones adicionales junto con una cantidad enorme de energía. Estos neutrones liberados pueden entonces colisionar con otros átomos de U-235, liberando más neutrones, creando una **Reacción en Cadena**. Si la masa de uranio supera un "tamaño crítico" y no hay ningún control, la reacción se vuelve exponencialmente explosiva en microsegundos.

En una **Central Nuclear**, la fisión es controlada mediante **Barras de Control** (generalmente de cadmio o boro) que absorben los neutrones en exceso, regulando la velocidad de la reacción para mantenerla en un nivel estable que genere calor. Este calor hierve agua, el vapor mueve una turbina, y la turbina genera electricidad. La física del siglo XX convirtiendo calor atómico en electricidad usando los mismos principios básicos que una central de carbón, pero sin emisiones de CO₂.

El gran desafío de la fisión nuclear es el **Combustible y los Residuos**. El uranio natural contiene solo 0.7% de U-235 (el isótopo fisionable); el resto es U-238, que no fisiona fácilmente. El proceso de **Enriquecimiento** concentra el U-235 mediante centrifugadoras. Los residuos incluyen isótopos radiactivos de larga vida media como el Plutonio-239, que representan un problema de gestión durante decenas de miles de años.

Hoy existen 440 reactores nucleares activos en 30 países, generando el 10% de la electricidad mundial sin emisiones de CO₂ durante su operación. En un contexto de crisis climática, la energía nuclear de **Gen IV** (reactores más seguros, más eficientes y con menor generación de residuos) está experimentando un renacimiento. Empresas como NuScale y TerraPower están diseñando **Pequeños Reactores Modulares (SMRs)** del tamaño de un contenedor que podrían revolutionar la generación distribuida de energía limpia.

La fisión del uranio es la representación más poderosa de la ecuación E=mc²: una masa infinitesimal de material se convierte en una energía que puede destruir ciudades o alimentar millones de hogares. La diferencia está únicamente en el control. La ciencia da el poder; la ética y la ingeniería deciden cómo se usa.

---
**🔖 Bluebook v1 · Capítulo II, Sección 2.1** (Págs. 42–44)
**📐 NGSS: HS-PS1-8** — Comunicar cómo los modelos de fisión nuclear explican la liberación de energía y sus aplicaciones tecnológicas.
**📋 RENAC: ET005 · Energía Nuclear y Política Energética**
**💡 Standards World:** Fisión · Uranio-235 · Reacción en Cadena · Barras de Control · Enriquecimiento · SMR · Plutonio-239 · E=mc2""",
}

for ch in data['chapters']:
    for m in ch['modules']:
        if m['id'] in fullTexts:
            m['fullText'] = fullTexts[m['id']]

with open(path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

count = sum(1 for ch in data['chapters'] for m in ch['modules'] if 'fullText' in m)
print(f"✅ Batch 7 complete. {count} modules now have fullText content.")

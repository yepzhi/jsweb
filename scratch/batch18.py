import json

updates = {
"2.3.1": """A finales de los años 90, la informática se enfrentaba a un muro invisible: el cable. Aunque las computadoras eran cada vez más potentes y portátiles, seguían encadenadas a una toma de pared RJ45 para acceder a la red. La solución no vino de una sola empresa, sino de una coalición de gigantes que entendieron que la compatibilidad era la clave del éxito. Así nació la **Arquitectura WiFi (el ecosistema de estándares de comunicación inalámbrica basado en las normas IEEE 802.11 que permite la interconexión de dispositivos electrónicos de forma inalámbrica a través de una red de área local o WLAN; su nombre, acuñado por la empresa Interbrand, es una abreviatura comercial de \"Wireless Fidelity\", diseñada para ser tan pegadiza como la marca 'Hi-Fi' en el audio)**. El WiFi es, posiblemente, la tecnología que más ha cambiado nuestra relación con el espacio físico y el trabajo.

Técnicamente, el WiFi opera bajo el estándar **IEEE 802.11 (un conjunto de especificaciones de control de acceso al medio y capa física para implementar la comunicación inalámbrica en bandas de frecuencia de 2.4, 5 y 6 GHz; fue desarrollado por el Instituto de Ingenieros Eléctricos y Electrónicos —IEEE— y se ha convertido en la norma universal que garantiza que una laptop fabricada en Asia funcione perfectamente con un router fabricado en América)**. Para un estudiante STEM, el 802.11 es el ejemplo supremo de cómo la estandarización global permite la explosión de un mercado masivo.

En el corazón de la arquitectura WiFi se encuentra el **Punto de Acceso (Access Point / AP — el dispositivo de hardware que actúa como el nodo central de una red inalámbrica, recibiendo la conexión a internet por cable y retransmitiéndola como ondas de radio para que otros dispositivos se conecten; en los hogares, el AP suele estar integrado dentro del 'módem' o router que entrega el proveedor de internet)**. El AP gestiona el tráfico de datos, asegurando que cada paquete llegue al dispositivo correcto mediante el uso de direcciones MAC únicas.

Para organizar la comunicación, el WiFi utiliza una técnica llamada **CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance — un protocolo de control de acceso al medio en el que un dispositivo 'escucha' el canal de radio antes de transmitir para asegurarse de que esté libre; si detecta que otra señal está pasando, espera un tiempo aleatorio antes de volver a intentarlo, evitando así que los paquetes de datos choquen en el aire y se pierdan)**. Es el código de conducta que permite que 20 personas en un café usen el mismo WiFi sin que la red se colapse.

Otro componente vital es el **SSID (Service Set Identifier — el nombre único de hasta 32 caracteres que identifica a una red inalámbrica específica; es lo que ves en la lista de conexiones de tu teléfono y permite que los dispositivos se diferencien entre la red de tu casa y la de tu vecino, incluso si ambas operan en la misma frecuencia)**.

Finalmente, la arquitectura WiFi es totalmente compatible con el estándar **Ethernet (IEEE 802.3 — el estándar de redes de área local por cable; aunque el medio físico es diferente —aire vs. cobre—, el lenguaje que usan para empaquetar los datos es el mismo, lo que permite una transición invisible de la información entre el mundo inalámbrico y el mundo cableado)**.

**Casos de Estudio y Aplicaciones Reales**

El caso de estudio que lanzó al WiFi al estrellato mundial fue el lanzamiento del **iBook de Apple en 1999 (AirPort)**. Steve Jobs hizo una demostración histórica en la que navegó por internet mientras pasaba la laptop a través de un hula-hula para demostrar que no había cables. Apple fue la primera empresa en ofrecer una tarjeta WiFi integrada y un punto de acceso asequible para el mercado masivo. Este momento no solo salvó a Apple financieramente, sino que obligó a toda la industria de PC a adoptar el estándar 802.11b, convirtiendo al WiFi en un requisito estándar para cualquier computadora portátil desde entonces.

En la actualidad, un caso de estudio masivo es la **Infraestructura WiFi de los Estadios Inteligentes**. En lugares como el Estadio del Tottenham Hotspur en Londres, se instalan más de 1,600 puntos de acceso WiFi de alta densidad ocultos bajo los asientos. Estos sistemas utilizan controladores inteligentes que balancean la carga de miles de usuarios simultáneamente, permitiendo que 60,000 personas compartan videos de los goles en tiempo real sin saturar la red celular. Este uso del WiFi demuestra que, con una arquitectura bien diseñada, el espectro libre de 2.4 y 5 GHz puede manejar densidades de datos que antes se consideraban imposibles.

**Conclusión Estratégica**

La arquitectura WiFi es el tejido conectivo de la sociedad moderna. Nos ha dado la libertad de trabajar y aprender desde cualquier lugar, transformando nuestra arquitectura urbana y doméstica. Para un estudiante STEM, el WiFi es una lección de diplomacia tecnológica: cómo un grupo de competidores se unió para crear un estándar (IEEE 802.11) que benefició a toda la humanidad. Dominar los principios del WiFi es entender cómo la colaboración técnica y la ingeniería de radio pueden eliminar las barreras físicas del acceso al conocimiento.

🔖 Bluebook v1 · Capítulo II, Sección 2.1.2 — WiFi (Págs. 77–78)
📐 NGSS: HS-PS4-2 — Evaluate questions about the advantages of digital transmission and storage of information (comparing wired vs wireless LAN).
📋 RENAC: EC009 · Arquitectura de Redes WLAN
💡 Standards World: WiFi · IEEE 802.11 · Punto de Acceso (AP) · CSMA/CA · SSID · Ethernet · WLAN · Interbrand""",

"2.3.2": """Cuando el espectro de 2.4 GHz y 5 GHz se saturó debido a la explosión de dispositivos IoT, teléfonos y laptops, el WiFi se enfrentó a una crisis de congestión. La respuesta de la ingeniería fue la actualización más ambiciosa en dos décadas. El **WiFi 6 y 6E (los estándares basados en la norma IEEE 802.11ax; mientras que el WiFi 6 optimiza la eficiencia en las bandas existentes, el WiFi 6E —Extended— abre por primera vez la banda de 6 GHz para uso civil, añadiendo una autopista de datos gigante y libre de interferencias que permite velocidades de hasta 11 Gbps)**. El WiFi 6 no es solo más rápido; es más inteligente.

El cambio fundamental del WiFi 6 es pasar de un sistema que atiende a un dispositivo a la vez a uno que atiende a todos simultáneamente. Esto se logra mediante el **BSS Coloring (Coloración de Conjunto de Servicios Básicos — una técnica que asigna un 'color' o identificador numérico a cada red inalámbrica para que los dispositivos puedan ignorar el tráfico de las redes vecinas que usan el mismo canal; esto permite que muchas redes WiFi coexistan en el mismo espacio sin interferir entre sí, eliminando el problema de los vecinos que 'ralentizan' tu internet)**. Es como si cada conversación en una fiesta tuviera su propia frecuencia de color para no distraerse.

Técnicamente, el WiFi 6E introduce los **Canales de 160 MHz (anchos de banda ultra-extensos que permiten el paso de una cantidad masiva de datos simultáneamente; en la banda de 6 GHz, hay espacio para hasta siete de estos canales sin que se solapen entre sí, lo que es vital para aplicaciones como la Realidad Virtual inalámbrica y el streaming de video 8K sin retrasos)**.

Para ahorrar energía, el WiFi 6 introdujo el **TWT (Target Wake Time — una función que permite al router y al dispositivo acordar tiempos específicos para 'despertarse' y transmitir datos; esto permite que los dispositivos IoT y smartphones mantengan sus radios apagadas durante más tiempo, extendiendo la vida de la batería de forma significativa)**. Es una innovación clave para el futuro del hogar inteligente.

El uso de la **Banda de 6 GHz (un nuevo espectro que va desde los 5.925 GHz hasta los 7.125 GHz; a diferencia de las bandas de 2.4 y 5 GHz que están llenas de señales viejas y lentas, la banda de 6 GHz es exclusiva para dispositivos WiFi 6E, asegurando que nada degrade la velocidad de los equipos más modernos)**.

Finalmente, el WiFi 6 utiliza una modulación extremadamente densa llamada **1024-QAM (un método que permite transmitir 10 bits de datos por cada símbolo de radio, un aumento del 25% sobre el WiFi 5; esto se traduce en una eficiencia espectral mucho mayor, permitiendo que cada segundo de aire transporte más información útil)**.

**Casos de Estudio y Applications Reales**

Un caso de estudio de vanguardia es el uso de **WiFi 6E en Hospitales de Alta Tecnología**. En entornos médicos, la interferencia puede ser peligrosa. Al usar la banda de 6 GHz exclusiva, los hospitales pueden conectar robots de cirugía y sistemas de monitoreo de signos vitales con la garantía de que ninguna interferencia de smartphones de visitantes o microondas afectará la conexión. El WiFi 6E proporciona la confiabilidad de un cable con la movilidad necesaria en un quirófano, permitiendo transmisiones de imágenes médicas en 4K en tiempo real para diagnósticos remotos instantáneos.

Otro caso masivo es la **Realidad Virtual Inalámbrica (Meta Quest, HTC Vive)**. Para que la VR sea inmersiva y no cause mareos, la latencia debe ser menor a 20ms y el flujo de datos debe ser constante. Antes del WiFi 6, las gafas de VR necesitaban un cable grueso conectado a la PC. Gracias al WiFi 6E y sus canales de 160 MHz en la banda de 6 GHz, ahora es posible tener una experiencia de VR de alta fidelidad sin cables, permitiendo total libertad de movimiento en entornos educativos y de entrenamiento industrial complejos.

**Conclusión Estratégica**

El WiFi 6 y 6E representan la madurez de las comunicaciones inalámbricas de corto alcance. Nos enseñan que la solución a la congestión no es solo más espectro, sino una gestión más eficiente de la interferencia y el tiempo. Para un estudiante STEM, el WiFi 6 es una lección de optimización: cómo hacer que miles de dispositivos hablen al mismo tiempo sin gritarse unos a otros. Con el WiFi 6E, el aire se ha vuelto tan capaz como la fibra óptica, sentando las bases para una nueva era de computación espacial e inmersiva.

🔖 Bluebook v1 · Capítulo II, Sección 2.1.2 — WiFi (Págs. 77–78)
📐 NGSS: HS-PS4-1 — Use mathematical representations to support a claim regarding relationships among frequency and data speed (1024-QAM efficiency).
📋 RENAC: EC009 · Estándares WiFi 6 y 6E
💡 Standards World: WiFi 6 · WiFi 6E · 802.11ax · BSS Coloring · Banda de 6 GHz · TWT · 1024-QAM · Canal de 160 MHz""",

"2.3.3": """Para entender por qué el WiFi moderno es capaz de manejar tantos dispositivos sin colapsar, debemos mirar debajo del capó y entender las dos tecnologías maestras que lo hacen posible. La primera es un cambio en cómo se divide el aire, y la segunda es un cambio en cómo se dirigen las señales. Hablamos de **OFDMA y MU-MIMO (las dos innovaciones tecnológicas clave introducidas en el estándar WiFi 6; OFDMA divide los canales en pequeñas subunidades para atender a múltiples usuarios a la vez, mientras que MU-MIMO permite que el router use sus múltiples antenas para hablar con varios dispositivos en diferentes direcciones físicas simultáneamente)**. Estas tecnologías son las que eliminan el odiado \"lag\" en redes compartidas.

Empecemos con **OFDMA (Orthogonal Frequency Division Multiple Access — una técnica que divide un solo canal de radio en cientos de subportadoras más pequeñas llamadas 'unidades de recursos' o RU; en lugar de que un dispositivo ocupe todo el canal para enviar un pequeño mensaje, el router puede empaquetar mensajes de 10 o 20 dispositivos diferentes en una sola transmisión, aprovechando cada milisegundo de aire disponible)**. Es como pasar de un camión que solo lleva un paquete por viaje a un servicio de paquetería eficiente que llena el camión con miles de sobres antes de salir.

Luego tenemos **MU-MIMO (Multiple User - Multiple Input Multiple Output — una tecnología que permite que un punto de acceso se comunique con múltiples dispositivos de forma simultánea utilizando diferentes flujos espaciales; a través de cálculos matemáticos complejos, el router 'moldea' la forma de la señal de radio para que llegue con fuerza a un dispositivo e ignore a los demás, permitiendo que hasta 8 dispositivos descarguen datos a máxima velocidad al mismo tiempo)**. MU-MIMO es lo que permite que una familia de cuatro personas pueda ver Netflix, jugar en línea y estar en una videollamada sin que nadie note una caída de velocidad.

Técnicamente, el MU-MIMO del WiFi 6 es **Bidireccional (a diferencia del WiFi 5, que solo podía enviar datos a múltiples usuarios —enlace descendente—, el WiFi 6 también puede recibir datos de múltiples usuarios simultáneamente —enlace ascendente—; esto es vital para las videollamadas de Zoom y las clases en línea donde el usuario está enviando su video constantemente)**.

Un concepto avanzado asociado es el **Beamforming (Formación de Haz — técnica en la cual el router detecta la ubicación física de tu dispositivo y concentra la energía de sus antenas hacia esa dirección específica, en lugar de emitir la señal en un círculo perfecto de 360 grados; esto aumenta el alcance efectivo y la estabilidad de la conexión, especialmente en los límites de la cobertura)**.

Finalmente, el uso de **Unidades de Recursos (RU — las piezas mínimas de espectro en las que se divide un canal bajo OFDMA; el router asigna dinámicamente más o menos RUs a cada dispositivo dependiendo de si está enviando un simple mensaje de texto o un flujo de video 4K, optimizando la capacidad total de la red)**.

**Casos de Estudio y Aplicaciones Reales**

Un caso de estudio excelente es el de las **Aulas Digitales de Nueva Generación**. En un salón de clases moderno, 40 estudiantes pueden tener tablets conectadas simultáneamente para un examen interactivo. Antes del OFDMA, los estudiantes que terminaban primero y enviaban sus respuestas bloqueaban momentáneamente la red para los demás. Con OFDMA y MU-MIMO, el router del aula puede recibir las respuestas de todos los estudiantes al mismo tiempo en milisegundos, asegurando que la experiencia educativa sea fluida y que la tecnología no sea un obstáculo para el aprendizaje.

Otro caso es el de las **Casas con Alta Densidad de IoT**. Un hogar moderno puede tener 50 dispositivos conectados: bombillas, termostatos, cámaras, enchufes y electrodomésticos. Aunque estos dispositivos envían muy pocos datos, el protocolo WiFi antiguo los atendía uno por uno, causando un retraso masivo para los dispositivos importantes como la TV o la laptop. Gracias al OFDMA del WiFi 6, el router puede gestionar todos estos pequeños sensores IoT en un solo ciclo de transmisión, dejando los canales grandes libres para que la familia disfrute de su entretenimiento sin interrupciones.

**Conclusión Estratégica**

OFDMA y MU-MIMO son el cerebro y los músculos del WiFi moderno. Nos enseñan que la eficiencia espectral no se trata solo de ir más rápido, sino de ser más ordenado y paralelo. Para un estudiante STEM, estas tecnologías representan la aplicación práctica de las matemáticas de matrices y el procesamiento de señales avanzado. Entender cómo el WiFi divide el tiempo, la frecuencia y el espacio es fundamental para diseñar las redes que sostendrán el metaverso y la automatización total de nuestras ciudades. El futuro inalámbrico es, por definición, multi-usuario y multi-canal.

🔖 Bluebook v1 · Capítulo II, Sección 2.1.2 — WiFi (Págs. 77–78)
📐 NGSS: HS-PS4-5 — Communicate technical information about how technological devices use wave behavior to transmit and capture information (Spatial multiplexing and sub-carriers).
📋 RENAC: EC009 · Tecnologías OFDMA y MU-MIMO
💡 Standards World: OFDMA · MU-MIMO · Beamforming · Unidades de Recursos (RU) · Eficiencia Espectral · Paralelismo · Latencia · WiFi 6""",

"2.3.4": """A finales de los años 90, un grupo de ingenieros en la empresa Ericsson se propuso eliminar el desorden de cables que conectaban los teléfonos móviles con sus accesorios. Se inspiraron en un antiguo rey vikingo, Harald \"Diente Azul\" Gormsson, conocido por unificar a las tribus de Dinamarca y Noruega. Así nació la **Arquitectura Bluetooth (una tecnología de red de área personal inalámbrica —WPAN— diseñada para el intercambio de datos a corto alcance en la banda ISM de 2.4 GHz; a diferencia del WiFi, el Bluetooth se enfoca en el consumo ultra bajo de energía y la conexión automática ad-hoc entre dispositivos cercanos)**. Hoy, el Bluetooth es el estándar universal para periféricos, audio y salud digital.

Para un estudiante STEM, el Bluetooth es una lección magistral de **Resiliencia ante la Interferencia (debido a que opera en la misma banda de 2.4 GHz que el WiFi y los microondas, el Bluetooth tuvo que inventar una forma de sobrevivir en un entorno electromagnético muy ruidoso; lo logró mediante una técnica llamada FHSS —Frequency Hopping Spread Spectrum— o Salto de Frecuencia por Espectro Ensanchado)**.

Técnicamente, el Bluetooth utiliza el **FHSS (una técnica en la que el dispositivo cambia de frecuencia de radio 1,600 veces por segundo, saltando entre 79 canales diferentes de 1 MHz cada uno; si un canal está ocupado o tiene interferencia, el Bluetooth simplemente salta al siguiente tan rápido que la conexión de audio o datos nunca se interrumpe)**. Esta técnica fue inspirada originalmente por una invención de la actriz y científica Hedy Lamarr durante la Segunda Guerra Mundial.

En la arquitectura Bluetooth, los dispositivos se organizan en **Piconets (una red pequeña formada por hasta 8 dispositivos conectados, donde uno actúa como 'Maestro' y los otros como 'Esclavos'; el maestro dicta el patrón de salto de frecuencia que todos los esclavos deben seguir para mantenerse sincronizados)**. Varias piconets pueden entrelazarse para formar una **Scatternet**, permitiendo comunicaciones más complejas.

El Bluetooth se divide en **Clases de Potencia (que determinan su alcance: la Clase 1 tiene un alcance de hasta 100 metros y es común en computadoras; la Clase 2 tiene un alcance de 10 metros y es la más común en celulares y audífonos; y la Clase 3 tiene apenas 1 metro de alcance, ideal para dispositivos médicos corporales)**.

Finalmente, la arquitectura Bluetooth se basa en **Perfiles (un conjunto de especificaciones que definen qué puede hacer el dispositivo; por ejemplo, el perfil A2DP permite transmitir audio estéreo de alta calidad, mientras que el perfil HFP permite controlar las funciones de manos libres del celular desde un auto)**.

**Casos de Estudio y Aplicaciones Reales**

El caso de estudio más exitoso del Bluetooth es la **Revolución del Audio Inalámbrico (AirPods, Bose, Sony)**. Antes del Bluetooth 5.0, el audio inalámbrico a menudo se cortaba o tenía baja calidad. Gracias a las mejoras en el ancho de banda y la estabilidad del estándar, el Bluetooth ha logrado que el 90% de los usuarios de smartphones prefieran audífonos inalámbricos. Esto permitió a los fabricantes de celulares eliminar el puerto de audífonos (jack 3.5mm), liberando espacio interno para baterías más grandes y haciendo los dispositivos más resistentes al agua, demostrando cómo una tecnología inalámbrica puede cambiar el diseño industrial del hardware global.

En el ámbito de la **Seguridad Industrial**, el Bluetooth se utiliza para la monitorización de maquinaria en entornos peligrosos. Pequeños sensores Bluetooth se colocan en motores y turbinas para medir vibraciones y temperatura. Los ingenieros pueden recopilar estos datos desde una distancia segura usando una tablet, sin tener que acercarse a piezas móviles o zonas de alta temperatura. El bajo costo y la conexión automática del Bluetooth han permitido que fábricas enteras se vuelvan \"inteligentes\" de forma económica, demostrando que la conectividad de corto alcance es una herramienta de seguridad y eficiencia industrial masiva.

**Conclusión Estratégica**

La arquitectura Bluetooth es el ejemplo perfecto de \"conectar y olvidar\". Nos enseña que la tecnología más exitosa es la que se vuelve invisible para el usuario. Para un estudiante STEM, el Bluetooth es un recordatorio de que la robustez (FHSS) y la especialización (Perfiles) son tan importantes como la velocidad pura. El Bluetooth ha unificado nuestros accesorios personales en un ecosistema coherente, y su evolución hacia el bajo consumo asegura que seguirá siendo el lenguaje con el que nuestro cuerpo y nuestros objetos personales se comuniquen en las próximas décadas.

🔖 Bluebook v1 · Capítulo II, Sección 2.1.3 — Bluetooth (Págs. 79)
📐 NGSS: HS-PS4-2 — Evaluate questions about the advantages of digital transmission (focusing on low power vs high speed tradeoffs).
📋 RENAC: EC009 · Arquitectura Bluetooth y Redes WPAN
💡 Standards World: Bluetooth · FHSS · Piconet · Banda ISM · Perfiles Bluetooth · Clase de Potencia · WPAN · Hedy Lamarr""",

"2.3.5": """A medida que el Internet de las Cosas (IoT) comenzó a llenar nuestras vidas de pequeños dispositivos —relojes inteligentes, sensores de ritmo cardiaco, etiquetas de rastreo y sensores de hogar—, la versión tradicional del Bluetooth se volvió demasiado hambrienta de energía. Así nació la revolución más importante en la historia de esta tecnología: el **Bluetooth Low Energy (BLE / Bluetooth LE — una variante del estándar Bluetooth diseñada específicamente para dispositivos que necesitan funcionar durante meses o incluso años con una sola batería de botón; introducido con la versión 4.0, el BLE utiliza un método de conexión mucho más eficiente que permite que el dispositivo duerma la mayor parte del tiempo, despertándose solo por milisegundos para enviar datos)**. El BLE es el lenguaje oficial de la tecnología usable (wearables).

Para un estudiante STEM, el BLE es una lección de **Optimización Energética (mientras que el Bluetooth clásico mantiene una conexión constante similar a una llamada telefónica, el BLE funciona como el envío de un telegrama rápido; solo utiliza energía cuando hay algo importante que decir)**. Esta diferencia fundamental es lo que permite que tu reloj inteligente dure una semana con una carga en lugar de solo unas horas.

Técnicamente, el BLE opera en los mismos 2.4 GHz, pero utiliza **40 Canales de 2 MHz (en lugar de los 79 canales de 1 MHz del Bluetooth clásico; de estos 40 canales, 3 están reservados exclusivamente para el 'Advertising' o anuncio, que es cuando el dispositivo grita al aire '¡Aquí estoy!' para que tu teléfono lo encuentre sin gastar energía buscando en todo el espectro)**.

El BLE utiliza una arquitectura de datos llamada **GATT (Generic Attribute Profile — un marco de trabajo que define cómo se intercambian los datos en una conexión BLE; organiza la información en 'Servicios' y 'Características'; por ejemplo, un monitor de ritmo cardiaco tiene un 'Servicio de Ritmo Cardiaco' con una 'Característica de Medición' que contiene el número de latidos por minuto)**. Este orden jerárquico hace que el BLE sea extremadamente fácil de programar para los desarrolladores.

Una innovación reciente es el **Bluetooth Mesh (una tecnología de red en malla que permite que miles de dispositivos BLE se comuniquen entre sí pasando el mensaje de un nodo a otro; esto extiende el alcance del Bluetooth de unos pocos metros a cubrir edificios enteros, como hoteles o fábricas, sin necesidad de routers WiFi adicionales)**.

Finalmente, el estándar **Bluetooth 5.2 y posteriores** ha introducido el **LE Audio (que utiliza un nuevo códec llamado LC3 para transmitir sonido de alta calidad con la mitad del consumo de energía, permitiendo audífonos mucho más pequeños y funciones como 'Auracast', donde una sola TV en un aeropuerto puede transmitir audio a cientos de personas simultáneamente por Bluetooth LE)**.

**Casos de Estudio y Aplicaciones Reales**

El caso de estudio más global y reciente del BLE fue el **Rastreo de Contactos durante la Pandemia (Apple-Google Exposure Notification)**. Los smartphones utilizaban Bluetooth LE para emitir identificadores anónimos de forma constante. Si dos personas estaban cerca por más de 15 minutos, sus teléfonos intercambiaban estos códigos sin gastar casi nada de batería. Si una persona resultaba positiva, el sistema podía alertar a todas las personas que habían estado cerca. Esta fue la mayor implementación de BLE en la historia, demostrando que una tecnología de corto alcance y bajo consumo puede ser una herramienta de salud pública masiva.

Otro caso masivo es el de las **Etiquetas de Rastreo (Apple AirTag, Samsung SmartTag)**. Estas pequeñas monedas tecnológicas utilizan BLE para enviar una señal que puede ser detectada por cualquier otro smartphone de la misma marca que pase cerca. Gracias al consumo ultra bajo del BLE, una AirTag puede funcionar durante más de un año con una pequeña batería CR2032. Este ecosistema de rastreo global basado en BLE ha resuelto el problema de perder objetos valiosos, demostrando cómo millones de nodos pasivos pueden colaborar para crear una red de localización mundial invisible y eficiente.

**Conclusión Estratégica**

El Bluetooth LE es la tecnología que hizo posible el Internet de las Cosas personal. Nos enseña que para ser masivo, un sistema debe ser, ante todo, eficiente. Para un estudiante STEM, el BLE es el ejemplo perfecto de cómo rediseñar un protocolo desde cero manteniendo la compatibilidad de frecuencia pero cambiando totalmente la lógica de consumo. El futuro de la tecnología que llevamos puesta y de los miles de sensores que nos rodearán depende de la capacidad del BLE para seguir siendo el estándar de comunicación más ligero y persistente del planeta.

🔖 Bluebook v1 · Capítulo II, Sección 2.1.3 — Bluetooth (Págs. 79)
📐 NGSS: HS-ETS1-3 — Evaluate a solution to a complex real-world problem based on prioritized criteria and trade-offs (Power consumption vs Data throughput).
📋 RENAC: EC009 · Redes Bluetooth Low Energy (BLE)
💡 Standards World: Bluetooth LE (BLE) · GATT · Advertising Channels · Bluetooth Mesh · LE Audio · LC3 Codec · Auracast · Wearables""",

"2.3.6": """A medida que nuestra vida privada, financiera y profesional se trasladó a las ondas de radio del WiFi, la seguridad se convirtió en el campo de batalla más crítico de la informática. Las redes inalámbricas son, por naturaleza, inseguras: cualquiera con una antena puede \"escuchar\" los datos que viajan por el aire. Para proteger esta información, se crearon los estándares de **Seguridad WPA2 y WPA3 (Wi-Fi Protected Access; los protocolos de seguridad diseñados para encriptar el tráfico WiFi y autenticar a los usuarios; mientras que WPA2 ha sido el estándar durante más de una década, WPA3 es la nueva generación que corrige vulnerabilidades históricas y hace que las redes públicas sean mucho más seguras)**. La seguridad WiFi es el muro digital que protege tu privacidad.

Entender la seguridad inalámbrica es entender la **Criptografía (la práctica y el estudio de técnicas para la comunicación segura en presencia de terceros; en el WiFi, esto implica el uso de algoritmos matemáticos para convertir tus datos en un código ilegible para cualquiera que no tenga la clave correcta; para un estudiante STEM, la seguridad WiFi es una lección de matemáticas aplicadas a la protección de derechos civiles en la era digital)**.

El estándar **WPA2 (basado en el algoritmo de encriptación AES —Advanced Encryption Standard—, utiliza un proceso llamado 'Four-Way Handshake' para verificar que tanto el router como el dispositivo tienen la clave correcta antes de permitir la conexión; aunque fue muy robusto, sufrió una vulnerabilidad famosa llamada KRACK que permitía a los atacantes interceptar el tráfico en ciertas condiciones)**. WPA2 sigue siendo el mínimo aceptable para cualquier red hoy en día.

Para superar las debilidades de su predecesor, surgió el **WPA3 (que introduce el protocolo SAE —Simultaneous Authentication of Equals—, el cual elimina la posibilidad de ataques de 'fuerza bruta' donde un hacker prueba millones de contraseñas por segundo; con WPA3, cada intento de contraseña fallido requiere una interacción real, haciendo que hackear una contraseña larga sea matemáticamente imposible en el tiempo de vida de un ser humano)**.

Una de las mejores funciones de WPA3 es el **Cifrado de Datos Individual (en redes WiFi abiertas —como las de un aeropuerto o café—, WPA3 encripta de forma única el tráfico de cada usuario, incluso si no hay una contraseña de red; esto evita que alguien en la misma mesa pueda 'olfatear' tus contraseñas o datos bancarios, algo que era un riesgo masivo en WPA2)**.

Finalmente, el concepto de **Forward Secrecy (Secreto Hacia Adelante — una característica del WPA3 que asegura que, incluso si alguien logra obtener la contraseña de la red en el futuro, no podrá usarla para desencriptar los datos que capturó y guardó en el pasado; esto garantiza que tu historial de navegación permanezca privado de forma permanente)**.

**Casos de Estudio y Aplicaciones Reales**

Un caso de estudio crítico fue el **Ataque KRACK en 2017**. Investigadores descubrieron que casi todos los dispositivos WiFi del mundo (bajo WPA2) podían ser engañados para reinstalar una clave de encriptación ya usada, permitiendo a un atacante leer el tráfico del usuario. Este evento causó pánico global y obligó a empresas como Microsoft, Google y Apple a lanzar parches de emergencia en cuestión de días. Este caso demostró que incluso los estándares más confiables pueden tener fallas lógicas profundas y que la ciberseguridad es un proceso de mejora constante, no un producto terminado.

En el mundo empresarial y gubernamental, el uso de **WPA3-Enterprise** es obligatorio para proteger secretos de estado y propiedad intelectual. Este nivel de seguridad no usa una sola contraseña para todos, sino que utiliza certificados digitales únicos para cada empleado y servidores de autenticación (RADIUS). Si un empleado pierde su laptop o es despedido, su acceso se revoca instantáneamente sin afectar a los demás. El WPA3-Enterprise es lo que permite que el trabajo remoto sea seguro para las organizaciones más críticas del mundo, demostrando que la ingeniería de protocolos es la base de la soberanía de la información moderna.

**Conclusión Estratégica**

La seguridad WPA2 y WPA3 es el contrato de confianza que tenemos con la tecnología inalámbrica. Nos enseña que la privacidad no es automática, sino que debe ser diseñada y defendida con matemáticas avanzadas. Para un estudiante STEM, el estudio de estos protocolos es fundamental para entender que la tecnología siempre tiene vulnerabilidades y que nuestra responsabilidad como creadores es anticiparnos a los riesgos. WPA3 es el estándar que finalmente nos permite vivir en un mundo inalámbrico con la misma tranquilidad con la que vivimos detrás de una puerta con llave.

🔖 Bluebook v1 · Capítulo II, Sección 2.1.5 — Seguridad de Redes Inalámbricas (Págs. 82–83)
📐 NGSS: HS-ETS1-1 — Analyze a major global challenge to specify criteria and constraints for solutions (Securing wireless data against cyber-attacks).
📋 RENAC: EC009 · Seguridad en Redes Inalámbricas (WPA2/WPA3)
💡 Standards World: WPA2 · WPA3 · AES · SAE · Cifrado Individual · Forward Secrecy · KRACK · Criptografía · Autenticación SAE"""
}

with open('/Users/yepz/JSweb/data/modules.json', 'r') as f:
    data = json.load(f)

count = 0
for chapter in data['chapters']:
    for module in chapter['modules']:
        if module['id'] in updates:
            module['fullText'] = updates[module['id']]
            count += 1

with open('/Users/yepz/JSweb/data/modules.json', 'w') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print(f"Updated {count} modules for Chapter II (Batch 18)")
for mid, text in updates.items():
    words = len(text.split())
    print(f"  {mid}: {words} words / {len(text)} chars")

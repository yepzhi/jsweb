const questions = [
    {
        category: "Ciencia",
        question: "¿Cuál es el elemento químico más abundante en el universo?",
        options: [
            "A) Oxígeno",
            "B) Carbono",
            "C) Hidrógeno",
            "D) Hierro"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Qué evento dio origen al universo según la cosmología moderna?",
        options: [
            "A) Colisión de galaxias",
            "B) El Big Bang",
            "C) Explosión solar",
            "D) Formación de la Tierra"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Qué es un átomo?",
        options: [
            "A) Unidad de información",
            "B) Célula humana",
            "C) La unidad fundamental de la materia",
            "D) Partícula de luz"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Qué describe la Gravedad en la relatividad?",
        options: [
            "A) Fuerza magnética",
            "B) La curvatura del espacio-tiempo",
            "C) Presión atmosférica",
            "D) Fuerza fuerte"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Cuánto tarda la luz del Sol en llegar a la Tierra?",
        options: [
            "A) 1 segundo",
            "B) 8 minutos",
            "C) 1 hora",
            "D) 24 horas"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Qué proceso produce la energía del Sol?",
        options: [
            "A) Combustión",
            "B) Fisión nuclear",
            "C) Fusión nuclear de hidrógeno",
            "D) Decaimiento radiactivo"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Qué es el espectro electromagnético?",
        options: [
            "A) Aura luminosa",
            "B) Gases de estrellas",
            "C) Rango completo de frecuencias de radiación (radio, luz, rayos X)",
            "D) Velocidad de la luz"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Qué postula el Modelo Estándar sobre el núcleo atómico?",
        options: [
            "A) Solo tiene electrones",
            "B) Está formado por protones y neutrones (hechos de quarks)",
            "C) No tiene masa",
            "D) Es indivisible"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Qué es el CERN?",
        options: [
            "A) Un centro espacial internacional",
            "B) La Organización Europea para la Investigación Nuclear",
            "C) Un colisionador de agujeros negros",
            "D) Un observatorio astronómico"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Qué molécula contiene las instrucciones genéticas de la vida?",
        options: [
            "A) Lípido",
            "B) Carbohidrato",
            "C) ADN (Ácido Desoxirribonucleico)",
            "D) Proteína"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Tecnología",
        question: "¿Qué significan las siglas 5G?",
        options: [
            "A) 5 Gigabytes",
            "B) Quinta generación de redes celulares",
            "C) 5 Gigahertz constantes",
            "D) 5 Grados de cobertura"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología",
        question: "¿Cuál es la principal diferencia entre pantallas LCD y OLED?",
        options: [
            "A) OLED usa tubos de rayos catódicos",
            "B) En OLED cada píxel genera su propia luz sin retroiluminación",
            "C) LCD tiene colores más oscuros",
            "D) LCD es más caro"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología",
        question: "¿Qué sensores dominan la fotografía digital actual?",
        options: [
            "A) Película 35mm",
            "B) Sensores CCD y CMOS",
            "C) Tubos de vacío",
            "D) Láseres de estado sólido"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología",
        question: "¿Cómo funciona un láser?",
        options: [
            "A) Modulando fotones a través de campos magnéticos oscilantes",
            "B) Amplificando luz mediante emisión estimulada de radiación y resonadores ópticos",
            "C) Aumentando la gravedad cuántica local focalizada",
            "D) Generando plasmas vibrantes paralelos en un vacío sellado"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología",
        question: "¿Qué es la memoria RAM en informática?",
        options: [
            "A) Almacenamiento permanente",
            "B) Memoria de trabajo temporal y volátil indispensable para el Procesador",
            "C) Disco externo",
            "D) Una batería"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología",
        question: "¿Por qué un disco SSD es superior a un HDD?",
        options: [
            "A) Dura literalmente para siempre",
            "B) Usa memoria flash sin partes mecánicas móviles, siendo mucho más veloz",
            "C) Usa discos magnéticos de mayor tamaño",
            "D) No requiere electricidad para guardar datos"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología",
        question: "¿Qué química predomina en baterías de dispositivos móviles?",
        options: [
            "A) Níquel-Cadmio",
            "B) Plomo-ácido",
            "C) Iones de litio (Li-ion)",
            "D) Alcalinas"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Tecnología",
        question: "¿Qué representa la 'Nube' (Cloud)?",
        options: [
            "A) Clima computacional",
            "B) Almacenamiento y servicios en servidores remotos conectados a Internet",
            "C) Un chip interno",
            "D) Humo en los cables"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología",
        question: "¿Qué es un procesador (CPU)?",
        options: [
            "A) El almacenamiento",
            "B) La pantalla",
            "C) El chip que ejecuta instrucciones de código y cálculos (el cerebro)",
            "D) La tarjeta gráfica"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Programación",
        question: "¿Qué es la programación por código?",
        options: [
            "A) Hablar con la máquina",
            "B) Conjunto de instrucciones estructuradas en lenguajes informáticos para ejecutar tareas",
            "C) Diseño gráfico manual",
            "D) Ensamblaje físico de hardware"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Programación",
        question: "¿Cuál es el rol del Desarrollo Web Front-End?",
        options: [
            "A) Gestionar bases de datos",
            "B) Crear la interfaz gráfica y experiencia directa del usuario en el navegador",
            "C) Configurar servidores en la nube",
            "D) Diseñar hardware"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Programación",
        question: "¿De qué se encarga el Desarrollo Back-End?",
        options: [
            "A) Colores de la página",
            "B) Animaciones 3D",
            "C) Lógica de servidor, bases de datos y seguridad detrás de escena",
            "D) Venta de productos"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Programación",
        question: "¿Qué significan las siglas UI y UX?",
        options: [
            "A) Unión e Intersección",
            "B) User Interface (Interfaz visual) y User Experience (Experiencia de uso)",
            "C) Unidad de Imagen y Uso X",
            "D) User Internet y User XML"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Qué se organiza dentro de la Tabla Periódica?",
        options: [
            "A) Las estrellas más cercanas",
            "B) Todos los elementos químicos conocidos",
            "C) Los ecosistemas del planeta",
            "D) Las ecuaciones matemáticas fundamentales"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Programación",
        question: "¿En qué se basa el Machine Learning?",
        options: [
            "A) Reglas lógicas y condicionales estrictas",
            "B) Sistemas que aprenden de grandes volúmenes de datos identificando patrones sin programación explícita",
            "C) Bases de datos vacías autogeneradas",
            "D) Circuitos de hardware analógicos"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Programación",
        question: "¿Qué es un lenguaje de programación (ej. Python)?",
        options: [
            "A) Idioma alienígena",
            "B) Un idioma humano",
            "C) Reglas sintácticas para comunicarse e instruir a las máquinas",
            "D) Un programa traductor de inglés a español"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Programación",
        question: "¿Para qué sirve HTML en la web?",
        options: [
            "A) Animaciones complejas",
            "B) Definir la estructura básica y el contenido",
            "C) Manejar la base de datos",
            "D) Proteger contra virus"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Lógica",
        question: "¿Por qué el cielo despejado se ve azul?",
        options: [
            "A) Reflejo del agua",
            "B) La atmósfera dispersa la luz azul más que otros colores (Dispersión de Rayleigh)",
            "C) Los gases son azules",
            "D) Espejismo estelar"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Lógica",
        question: "¿Qué es una Hipótesis científica?",
        options: [
            "A) Verdad absoluta",
            "B) Suposición educada sujeta a prueba y experimentación",
            "C) Opinión popular",
            "D) Ley inmutable"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Lógica",
        question: "¿Cuáles son pasos clave del Método Científico?",
        options: [
            "A) Observación, hipótesis, experimentación y análisis",
            "B) Duda, llanto, negación y asimilación",
            "C) Lectura, copia, impresión y debate",
            "D) Votación, creencia, mito y fe"
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Cuál es la velocidad aproximada de la luz en el vacío?",
        options: [
            "A) 300,000 kilómetros por segundo",
            "B) 343 metros por segundo",
            "C) 1,000 kilómetros por hora",
            "D) 30,000 kilómetros por hora"
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Lógica",
        question: "Si un TV cuesta $5,000 MXN y tiene 30% de descuento directo, pagarás:",
        options: [
            "A) $3,500",
            "B) $6,000",
            "C) $7,000",
            "D) $8,500"
        ],
        answer: 0,
        points: 1
    },
    {
        category: "STEM",
        question: "¿Qué significa STEM?",
        options: [
            "A) Sistemas Teóricos y Modelos",
            "B) Ciencia, Tecnología, Ingeniería y Matemáticas (siglas en inglés)",
            "C) Seguro a Todo Empleado Municipal",
            "D) Sistema de Telecomunicaciones Moderno"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cultura Digital",
        question: "¿Qué fomenta el 'Código Abierto' (Open Source)?",
        options: [
            "A) Restringir programas",
            "B) Que el código fuente sea público para usar, estudiar, modificar y distribuir colaborativamente",
            "C) Cobrar licencias carísimas",
            "D) Ocultar la tecnología"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cultura Digital",
        question: "¿Qué es un 'Bug' en programación?",
        options: [
            "A) Un estilo visual",
            "B) Un error o fallo en el código que causa resultados inesperados",
            "C) Un premio a la calidad",
            "D) Un tipo de memoria temporal"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Ciencia",
        question: "Para comprobar si una planta necesita luz, la mejor prueba es:",
        options: [
            "A) Plantar una sola a oscuras",
            "B) Un cuarto oscuro vacío",
            "C) Tener dos plantas iguales germinando, pero dejar a una a oscuras como control",
            "D) Escribir un ensayo teórico"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Qué nos indica la reproducibilidad de un experimento (mismo resultado 100 veces)?",
        options: [
            "A) Alta confiabilidad y rigor científico",
            "B) Falsedad estadística",
            "C) Que es pura suerte aleatoria",
            "D) Que la magia existe"
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Por qué hierve el agua a menor temperatura en lo alto de una gran montaña?",
        options: [
            "A) Por los dioses del hielo",
            "B) Por el frío exterior que quema la olla",
            "C) Porque a mayor altitud hay menor presión atmosférica sobre el líquido",
            "D) El agua no hierve ahí"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Tecnología",
        question: "¿Qué es una VPN (Red Privada Virtual)?",
        options: [
            "A) Aplicación que acelera el internet de paga",
            "B) Tecnología que cifra y protege la conexión de navegación en internet, ocultando la actividad",
            "C) Antivirus de disco duro portátil",
            "D) Memoria en la nube barata"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología",
        question: "¿A qué denominamos 'App' en tecnología móvil?",
        options: [
            "A) Cualquier procesador",
            "B) Programa de software diseñado para realizar una actividad específica para el usuario",
            "C) Antena de WiFi",
            "D) Batería portátil inteligente"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología",
        question: "¿Qué significan las siglas HDMI?",
        options: [
            "A) Hardware Device Memory Input",
            "B) High-Definition Multimedia Interface (interfaz estándar para audio y video digital sin compresión)",
            "C) Heavy Data Micro Intelligence",
            "D) Highly Digital Manual Interface"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología",
        question: "¿Qué función cumple un 'Transistor' en microchips?",
        options: [
            "A) Luz intermitente",
            "B) Ser un pequeño interruptor digital (1/0) o amplificador de señales, fundamento de las PC",
            "C) Batería infinita de larga duración estática",
            "D) Ventilador del procesador CPU"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Programación",
        question: "¿A qué se llama Algoritmo en programación de software puro?",
        options: [
            "A) Un procesador muy caro",
            "B) Cable de oro",
            "C) Conjunto ordenado, finito e inequívoco de instrucciones matemáticas para resolver un problema",
            "D) Virus clásico destruye discos"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Programación",
        question: "¿Por qué son demandados los lenguajes de programación en la actualidad?",
        options: [
            "A) Para leer libros antiguos digitalizados",
            "B) Porque son la clave para controlar, diseñar y automatizar toda la revolución de máquinas y software",
            "C) Simplemente porque se ven estéticos",
            "D) Por una tradición histórica obsoleta"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Cómo se llama la fuerza que mantiene unidos al protón y neutrón en el núcleo central atómico?",
        options: [
            "A) Gravedad",
            "B) Fuerza electromagnética repulsiva",
            "C) Interacción nuclear fuerte",
            "D) Interacción débil"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Ciencia",
        question: "La antimateria está caracterizada porque:",
        options: [
            "A) No tiene masa",
            "B) No existe en el universo",
            "C) Sus partículas tienen igual masa que la materia pero carga eléctrica opuesta",
            "D) Solo es vista en cuentos"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Ciencia",
        question: "Según las teorías de Origen de Vida, ¿de qué están mayormente compuestos los organismos terrestres?",
        options: [
            "A) Hierro",
            "B) Compuestos orgánicos basados crucialmente en Carbono (carbohidratos, lípidos, proteínas)",
            "C) Cobre libre",
            "D) Níquel sólido"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Innovación",
        question: "¿Qué beneficio práctico ofrece la Nano-biotecnología en la sociedad moderna?",
        options: [
            "A) Hacer pintura transparente",
            "B) Fusión para combatir enfermedades mediante manipulación molecular, genética e implantar biosensores",
            "C) Navegar más rápido",
            "D) Eliminar los virus de software de computadora"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Innovación",
        question: "¿Qué propone o persigue lograr la IA moderna según el análisis profundo tecnológico?",
        options: [
            "A) Crear humanos robots metálicos soldados pesados automáticos",
            "B) Superar el intelecto elaborando sistemas que identifican patrones masivos de datos para resolver sin ser explícitamente programados",
            "C) Animación en tiempo real pura de cine 3d",
            "D) Vender procesadores más costosos"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "STEM",
        question: "¿Por qué el modelo STEM impacta firmemente en la riqueza del país?",
        options: [
            "A) Solo ensambla",
            "B) Paga impuestos caros y frena negocios",
            "C) Impulsa desde su base a inventar, crear código nuevo e innovar tecnología exportable que solventa carencias",
            "D) Por tener nombres llamativos ingleses de negocios turbios"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Ciencia",
        question: "La lógica nos dice una explosión tiende a desacelerar conforme pase el tiempo, según un descubrimiento hecho en 1929 por Edwin Hubble, el Universo...",
        options: [
            "A) Esta desacelerando",
            "B) Esta acelerando",
            "C) Esta inmóvil",
            "D) Se está contrayendo lentamente"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Qué es la fusión termonuclear?",
        options: [
            "A) Es presionar átomos con presión y calor hasta que se unen y forman uno nuevo",
            "B) Es dividir átomos con presión y calor hasta que se separan en dos átomos individuales",
            "C) Es el enfriamiento de núcleos atómicos para cristalizarlos en metales pesados",
            "D) Es un fenómeno químico que emite radiación infrarroja únicamente"
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Hace cuanto tiempo se estima que sucedió lo que conocemos como Big Bang?",
        options: [
            "A) Hace 3 mil millones de años.",
            "B) Hace casi 14 mil millones de años.",
            "C) Hace casi 10 mil millones de años.",
            "D) Hace unos 4 mil millones de años."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Qué es la Teoría General de la Relatividad?",
        options: [
            "A) Es una teoría que describe como el espacio y el tiempo se curvan en presencia de gravedad.",
            "B) Es una teoría que describe como la gravedad se curva con la velocidad de un objeto.",
            "C) Es una teoría que describe como el tiempo es relativo a la conciencia de las personas.",
            "D) Es una teoría que explica la composición atómica del acero."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Ciencia",
        question: "Al caer un rayo en la distancia en una tormenta, ¿Qué sucede con la luz y el sonido?",
        options: [
            "A) Escuchamos primero el ruido y luego vemos el rayo.",
            "B) Escuchamos y vemos al mismo tiempo.",
            "C) Vemos primero la luz y luego escuchamos el rayo.",
            "D) El sonido siempre viaja más rápido en zonas húmedas."
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Cuál es el nombre y distancia de la estrella más cercana al Sol?",
        options: [
            "A) Sirius, 8 años luz.",
            "B) Vega, 3 años luz.",
            "C) Alpha Centauri, 4 años luz.",
            "D) Andrómeda, 10 millones de años."
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Cómo se llama la galaxia que se dirige hacia nosotros con curso de colisión y en cuanto tiempo ocurrirá?",
        options: [
            "A) Andrómeda y colisionará con la vía lactea en 2.5 mil millones de años.",
            "B) Galaxia Triángulo y colisionará con la vía láctea en 500 millones de años.",
            "C) Andrómeda y colisionará con la vía lactea en mil millones de años.",
            "D) Las Nebulosas de Orión y colisionará mañana."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Ciencia",
        question: "Del total de toda la masa del Sistema Solar ¿Que porcentaje aproximado concentra el Sol?",
        options: [
            "A) 99%",
            "B) 95%",
            "C) 90%",
            "D) 70%"
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Cuál es la temperatura promedio del espacio intergaláctico?",
        options: [
            "A) -270 grados celcius.",
            "B) 24 grados celcius.",
            "C) 0 grados celcius.",
            "D) Mayor de 100 grados celcius."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Ciencia",
        question: "En 1687, afirmó que cualquier objeto con masa posee gravedad y su relación directa a mayor masa mayor gravedad y la describió como una 'misteriosa acción a distancia'.",
        options: [
            "A) Issac Newton",
            "B) Albert Einstein",
            "C) Max Planck",
            "D) Galileo Galilei"
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Cuál es el valor más cercano a 1G ó fuerza de gravedad en la tierra?",
        options: [
            "A) 10.12 m/s2",
            "B) 6.7 m/s2",
            "C) 9.8 m/s2",
            "D) 1.5 m/s2"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Qué pasa con el tiempo según a teoría de la relatividad general de Albert Einstein si se viaja una velocidad cercana a 'c' (velocidad de la luz)?",
        options: [
            "A) El tiempo es más rápido para el viajero astronauta.",
            "B) Los tiempos son los mismos ya que al desacelerar se revierte la dilatación del tiempo provocada.",
            "C) El tiempo es más lento para el viajero y más rápido para el observador.",
            "D) Ambos colisionan en diferentes tiempos dimensionales sin verse afectados."
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Cómo sería un cuerpo humano si la gravedad en la Tierra fuera el doble ó más?",
        options: [
            "A) Resultaría en una estatura más baja y cuerpos más robustos.",
            "B) Resultaría en una estatura más alta y cuerpos menos robustos.",
            "C) Los humanos desarrollarían colas como reptiles grandes.",
            "D) No habría alteración física anatómica documentable a largo plazo."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿A qué altura sobre el nivel del mar se considera que se está en el espacio?",
        options: [
            "A) 100 kilómetros",
            "B) 80 kilómetros",
            "C) 90 kilómetros",
            "D) 10,000 metros"
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Ciencia",
        question: "Si los planetas del Sistema Solar no estuvieran girando alrededor del Sol a su velocidad determinada. ¿Caerían directamente hacia el Sol?",
        options: [
            "A) Sí, serían atraidos directamente.",
            "B) No, porque cada planeta tiene su masa, su propia gravedad y se mantendrían en equilibrio donde mismo.",
            "C) Se detendrían permanentemente y rebotarían si se alejan mucho.",
            "D) Caerían entre ellos mismos antes de tocar la corona solar por gravedad atada."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Cuál es el elemento mayor constituyente de nuestra atmósfera?",
        options: [
            "A) Oxígeno",
            "B) Nitrógeno",
            "C) Carbono",
            "D) Helio"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Qué planeta tiene 90 veces más la presión atmosférica de la tierra?",
        options: [
            "A) Júpiter",
            "B) Venus",
            "C) Saturno",
            "D) Marte"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Dónde se formaron los elementos, como el Helio, Oxígeno, Carbono, etc.?",
        options: [
            "A) En el interior de estrellas como el Sol y en supernovas.",
            "B) A altas temperaturas en las capas internas de la Tierra primitiva.",
            "C) En el Big Bang y fueron esparcidos por la misma explosión al instante 0.",
            "D) Dentro de los volcanes inactivos terrestres hace millones de siglos."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Ciencia",
        question: "En la actualidad, ¿Bajo que proceso funcionan todas las plantas nucleares de generación de energía eléctrica?",
        options: [
            "A) Fusión nuclear.",
            "B) Fisión nuclear.",
            "C) Fricción neutrónica.",
            "D) Interacción bosónica."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Qué proceso nuclear produce más energía?",
        options: [
            "A) Fusión nuclear.",
            "B) Fisión nuclear.",
            "C) Fricción controlada de radiación oscura.",
            "D) Magnetismo inverso electroquivalente."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Qué es la secuencia principal? De la que forman parte el 90% de las estrellas del Universo.",
        options: [
            "A) Se refiere a estrellas que convierten Hidrógeno en Helio.",
            "B) Se refiere a estrellas que convierten Helio en Oxígeno.",
            "C) Se refiere a estrellas que convierten Hidrógeno en Carbono.",
            "D) Se refiere a estrellas que consumen helio y agua galáctica."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Cada cuanto se estima que ocurren Supernovas en nuestra Galaxia?",
        options: [
            "A) Se estiman dos ó tres cada siglo.",
            "B) Se estima una cada siglo.",
            "C) Suelen ocurrir una cada 14 millones de años.",
            "D) Surgen a diario sin falta."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Como finalizará su vida nuestro Sol?",
        options: [
            "A) Como una Supernova titánica explosiva.",
            "B) Como un agujero negro que devorará todo nuestro sistema solar.",
            "C) Como una gigante roja para después dejar una enana blanca.",
            "D) Como una estrella de neutrones."
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Qué es el CERN y FermiLab?",
        options: [
            "A) Son lugares donde se investigan sobre la fusión nuclear para generar electricidad gratuita.",
            "B) Son lugares donde se colisionan partículas para descubrir los secretos del Universo.",
            "C) Son lugares donde se colisionan partículas para generar micro agujeros negros e investigarlos.",
            "D) Son los centros astronómicos de la Antártida especializados en materia oscura."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Cuál es el único elemento que fue creado por completo 100% durante el Big Bang?",
        options: [
            "A) Hidrógeno",
            "B) Carbono",
            "C) Oxígeno",
            "D) Silicio"
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Qué son las hormonas?",
        options: [
            "A) Son mensajeras, después de ser secretadas viajan por todo el torrente sanguíneo llevando instrucciones de activación/desactivación de funciones muy variadas.",
            "B) Son excretadas al exterior para atraer al sexo opuesto de forma olfativa biológica.",
            "C) Son medicamentos biológicos utilizados para regular y coagular puramente en casos de venas rotas.",
            "D) Son células que destruyen patógenos peligrosos o virus intracelulares nocivos."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Ciencia",
        question: "A nivel de estructura atómica, ¿Cuál es la principal diferencia entre un elemento y otro?",
        options: [
            "A) La temperatura y campo estelar natural donde fue creado.",
            "B) Solo el elemento de carbono los hace orgánicos o artificiales.",
            "C) El numero ó cantidad de protones, neutrones y electrones.",
            "D) El peso y estado en que fueron recolectados la primera vez por un ser vivo."
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Qué parte del atomo concentra más del 99% de su masa?",
        options: [
            "A) En los electrones que orbitan por su energía cinética inmensa en vació interrelacional.",
            "B) El núcleo del mismo donde están los protones y neutrones contenidos altamente fuertemente.",
            "C) En la nube de probabilidad magnética que cubre el isótopo reactivo.",
            "D) Distribuida uniformemente a lo largo de su órbita final exterior radiactiva."
        ],
        answer: 1,
        points: 1
    }
];

export default questions;

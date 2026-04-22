import json

# Correct content for 2.3.3 (from Batch 18)
ofdma_text = """Para entender por qué el WiFi moderno es capaz de manejar tantos dispositivos sin colapsar, debemos mirar debajo del capó y entender las dos tecnologías maestras que lo hacen posible. La primera es un cambio en cómo se divide el aire, y la segunda es un cambio en cómo se dirigen las señales. Hablamos de **OFDMA y MU-MIMO (las dos innovaciones tecnológicas clave introducidas en el estándar WiFi 6; OFDMA divide los canales en pequeñas subunidades para atender a múltiples usuarios a la vez, mientras que MU-MIMO permite que el router use sus múltiples antenas para hablar con varios dispositivos en diferentes direcciones físicas simultáneamente)**. Estas tecnologías son las que eliminan el odiado \"lag\" en redes compartidas.

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
📐 NGSS: HS-PS4-5 — Communicate technical information about how some technological devices use wave behavior to transmit and capture information (Spatial multiplexing and sub-carriers).
📋 RENAC: EC009 · Tecnologías OFDMA y MU-MIMO
💡 Standards World: OFDMA · MU-MIMO · Beamforming · Unidades de Recursos (RU) · Eficiencia Espectral · Paralelismo · Latencia · WiFi 6"""

# Correct content for 2.4.3 (Camarena)
camarena_text = """En la historia de la tecnología, pocos nombres brillan con tanta luz propia como el del ingeniero mexicano que le dio color al mundo. Mientras las potencias mundiales luchaban por perfeccionar la televisión en blanco y negro, un joven de Guadalajara estaba experimentando con filtros y motores en su propio laboratorio casero. Así nació el **Sistema Tricromático Secuencial de Campos (el primer sistema de televisión a color funcional y patentado en el mundo, creado por Guillermo González Camarena en 1940; su invención permitió que las imágenes dejaran de ser una escala de grises para convertirse en una representación vibrante de la realidad, utilizando la rotación de filtros de colores primarios sincronizados con la señal de video)**. Camarena no solo inventó una tecnología; inventó una nueva forma de percibir la información.

Para un estudiante STEM, la obra de Camarena es una lección de **Ingeniería de Sistemas y Creatividad bajo Restricciones (en 1940, no existían sensores de color ni pantallas de fósforos RGB complejos; Camarena resolvió el problema mediante un ingenioso método electromecánico que añadía color a los tubos de rayos catódicos existentes, demostrando que la innovación a menudo consiste en mejorar lo que ya funciona de una manera inesperada)**. El concepto central era la **Rueda de Color (un disco con filtros rojo, verde y azul que giraba a alta velocidad frente a la cámara y frente al televisor, sincronizado perfectamente con la velocidad de escaneo de la imagen)**.

Técnicamente, el sistema de Camarena se basaba en la **Persistencia Retiniana (el fenómeno por el cual el ojo humano retiene una imagen durante una fracción de segundo; al mostrar una imagen roja, luego una verde y luego una azul de forma extremadamente rápida —60 campos por segundo—, el cerebro del espectador fusiona los tres colores y percibe una imagen a todo color sin parpadeo)**. Es un ejemplo primitivo pero brillante de procesamiento de información analógica en tiempo real.

Un hito fundamental fue la **Patente de 1940 (registrada en México y Estados Unidos cuando Camarena tenía solo 23 años; su patente fue tan sólida que incluso la NASA la utilizó décadas después para las misiones espaciales Voyager, ya que el sistema secuencial era más ligero, simple y resistente a las interferencias que los sistemas de color más complejos de la época)**.

Camarena también fue un pionero en las **Telecomunicaciones Sociales (fundó el Canal 5 en México —XHGC, donde las últimas letras son sus iniciales— y dedicó gran parte de su esfuerzo a usar la televisión para la alfabetización y la educación a distancia, demostrando que la ingeniería debe tener un propósito social para ser verdaderamente trascendente)**.

Finalmente, su legado se consolidó con el desarrollo del **Sistema Bicolor Simplificado (una versión más económica de la televisión a color que facilitó que las personas con menos recursos pudieran acceder a esta tecnología, demostrando su compromiso con la democratización del acceso a la ciencia y la cultura)**.

**Casos de Estudio y Aplicaciones Reales**

El caso de estudio más impresionante del sistema de Camarena es su uso por la **NASA en las misiones Voyager y Apolo**. Durante las décadas de los 60 y 70, la NASA necesitaba enviar imágenes a color desde el espacio profundo con un ancho de banda muy limitado y equipos que no pesaran demasiado. El sistema secuencial de color de Camarena era perfecto porque permitía capturar el color con un solo sensor (una sola cámara) usando un disco giratorio, en lugar de necesitar tres cámaras separadas. Las primeras imágenes nítidas de Júpiter y Saturno que la humanidad vio fueron posibles gracias a la tecnología desarrollada originalmente en un laboratorio de la Ciudad de México por un joven que solo quería que la TV se viera como la vida real.

Otro caso de impacto es la **Creación de la Telesecundaria en México**. Camarena creía firmemente que la televisión podía llevar la escuela a los lugares más remotos donde no había maestros. Utilizando su infraestructura de transmisión y sus conocimientos técnicos, ayudó a cimentar las bases de lo que hoy es uno de los sistemas de educación a distancia más grandes del mundo. Este uso de la tecnología de pantallas para cerrar la brecha educativa demuestra que la ingeniería STEM no termina en el dispositivo, sino en cómo ese dispositivo transforma la vida de las personas, convirtiendo a Camarena en un héroe nacional y un referente global de la ingeniería con conciencia.

**Conclusión Estratégica**

Guillermo González Camarena nos enseñó que la genialidad no tiene nacionalidad ni edad. Nos mostró que con filtros, motores y una comprensión profunda de la biología humana (la visión), se puede resolver uno de los desafíos técnicos más grandes del siglo XX. Para un estudiante STEM, Camarena es la inspiración máxima: un joven que empezó desarmando radios viejos y terminó guiando los ojos de la humanidad hacia las estrellas. Su sistema de color es un recordatorio de que la simplicidad y la elegancia técnica a menudo superan a la complejidad costosa, y que el objetivo de todo inventor debe ser iluminar el mundo, un color a la vez.

🔖 Bluebook v1 · Capítulo II, Sección 2.2 — Tecnología de Pantallas (Págs. 84–86)
📐 NGSS: HS-PS4-5 — Communicate technical information about how some technological devices use the principles of wave behavior and wave interactions (Color theory and filters).
📋 RENAC: EC009 · Historia de la Televisión a Color y Camarena
💡 Standards World: Guillermo González Camarena · TV a Color · Sistema Tricromático · Persistencia Retiniana · Filtros RGB · NASA Voyager · Telecomunicación Educativa · Patente STEM"""

with open('data/modules.json', 'r') as f:
    data = json.load(f)

for chapter in data['chapters']:
    for module in chapter['modules']:
        if module['id'] == '2.3.3':
            module['fullText'] = ofdma_text
        if module['id'] == '2.4.3':
            module['fullText'] = camarena_text

with open('data/modules.json', 'w') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print("Fixed modules 2.3.3 and 2.4.3")

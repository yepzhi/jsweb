import json

updates = {
"2.1.2": """El lugar donde vivimos ha dejado de ser una estructura estática de cemento y ladrillos para convertirse en un organismo reactivo que se anticipa a nuestras necesidades. La tecnología ya no está solo sobre la mesa, sino dentro de las paredes. Hablamos de la **Domótica y Hogar Inteligente (Home Automation / Smart Home — la integración de tecnología en el diseño de viviendas para automatizar el control de la iluminación, la climatización, la seguridad y los electrodomésticos; busca mejorar la eficiencia energética, la comodidad y la seguridad mediante sistemas interconectados)**. Es la transición de la casa pasiva a la vivienda inteligente.

Para un estudiante STEM, la domótica es una lección de **Automatización de Lazo Cerrado (Closed-Loop Automation — sistemas donde un sensor mide una variable, como la temperatura, y un controlador ajusta automáticamente el sistema para mantener un valor deseado sin intervención humana; es la base de la eficiencia en el hogar moderno)**.

Técnicamente, el corazón del hogar inteligente es el **Hub o Centro de Control (Smart Home Hub — un dispositivo o software que actúa como el cerebro central, traduciendo los diferentes lenguajes de comunicación —como Zigbee, Z-Wave o WiFi— para que todos los dispositivos puedan trabajar juntos en una sola interfaz)**.

Un concepto "WOW" es el **Geofencing (Delimitación Geográfica — una tecnología que utiliza el GPS de tu smartphone para crear un perímetro virtual alrededor de tu casa; permite que el hogar inteligente 'sepa' cuándo estás llegando para encender las luces y ajustar el aire acondicionado antes de que cruces la puerta, o que se asegure de cerrar todas las cerraduras cuando te alejas)**. Es la casa que responde a tu presencia física.

Para la eficiencia, la domótica utiliza la **Climatización Inteligente (Smart HVAC — sistemas que aprenden tus horarios y las condiciones climáticas externas para optimizar el uso de energía, reduciendo las facturas de electricidad en un 30% mientras mantienen el confort perfecto; es la ingeniería aplicada al ahorro y la sostenibilidad doméstica)**.

Esto nos lleva a la **Seguridad Proactiva (sensores de movimiento, cámaras con inteligencia artificial capaz de distinguir entre una mascota y un intruso, y cerraduras biométricas que eliminan la necesidad de llaves físicas, convirtiendo el hogar en una fortaleza digital infranqueable pero accesible para sus dueños)**.

Finalmente, la integración con la **Red Eléctrica Inteligente (Smart Grid — donde el hogar no solo consume energía, sino que puede decidir cuándo cargar su batería o vender el exceso de energía solar a la ciudad, convirtiendo a cada casa en una pequeña planta de energía participativa)**.

**Casos de Estudio y Aplicaciones Reales**

El caso de estudio que cambió la industria fue el **Termostato Nest de Google**. Fue el primer dispositivo domótico masivo que utilizó algoritmos de aprendizaje para programarse solo. Al analizar cuándo la gente subía o bajaba la temperatura, Nest aprendió los patrones de comportamiento de millones de hogares, logrando ahorros energéticos masivos a escala nacional. Este éxito demostró que la domótica no es un lujo, sino una herramienta de eficiencia colectiva, impulsando a ingenieros de todo el mundo a diseñar sensores más baratos y precisos que hoy encontramos en casi cualquier dispositivo doméstico.

En la actualidad, el estándar **Matter** (respaldado por Amazon, Apple y Google) es el caso de estudio de interoperabilidad global. Antes de Matter, tener un hogar inteligente era un caos de aplicaciones diferentes que no hablaban entre sí. Matter creó un lenguaje universal que permite que una bombilla de cualquier marca funcione con cualquier asistente de voz de forma segura. Este hito de la estandarización industrial demuestra que el futuro de la ingeniería no se trata de crear sistemas cerrados, sino de colaborar para crear ecosistemas abiertos que beneficien al usuario final, haciendo que el hogar inteligente sea accesible, confiable y escalable para todos.

**Conclusión Estratégica**

La domótica y el hogar inteligente nos enseñan que la tecnología más avanzada es aquella que se vuelve invisible y servicial. Nos muestran que el diseño de espacios debe centrarse en el bienestar humano y la eficiencia de recursos. Para un estudiante STEM, la domótica es un campo ideal para aprender sobre redes, sensores y desarrollo de aplicaciones. El hogar del futuro no será solo un lugar donde vivir, sino un copiloto inteligente que nos ayude a ahorrar tiempo, energía y a vivir de forma más segura. Estamos construyendo los cimientos de una civilización donde cada edificio es una terminal de inteligencia y sostenibilidad.

🔖 Bluebook v1 · Capítulo II, Sección 2.1 — Tecnologías Inalámbricas (Págs. 72)
📐 NGSS: HS-ETS1-2 — Design a solution to a complex real-world problem by breaking it down into smaller, more manageable problems (Smart home modularity).
📋 RENAC: EC009 · Sistemas Domóticos e Inmóticos
💡 Standards World: Domótica (Home Automation) · Smart Home · Geofencing · Hub · Interoperabilidad · Matter · Eficiencia Energética · Smart Grid""",

"2.2.3": """A finales de la década de 1970, el mundo de las comunicaciones sufrió una transformación que rompería las cadenas de los cables telefónicos para siempre. Por primera vez, era posible hablar por teléfono mientras caminabas por la calle o conducías un auto. Hablamos de la **Evolución Celular: 1G (First Generation / Primera Generación — el primer estándar de telefonía móvil comercial basado en señales analógicas; permitía únicamente la transmisión de voz y utilizaba la tecnología de Reutilización de Frecuencias para dividir el territorio en "células" o celdas, permitiendo que miles de personas usaran la red simultáneamente)**. Fue el nacimiento de la movilidad total.

Para un estudiante STEM, el 1G es una lección de **Ingeniería de Radio Analógica (Analog Radio Engineering — donde la voz se transmitía modulando la frecuencia de una onda de radio de forma continua; aunque era revolucionario, tenía problemas de interferencia, falta de seguridad y una calidad de sonido similar a la de un radio de banda ciudadana)**.

Técnicamente, el sistema estrella fue el **AMPS (Advanced Mobile Phone System — el estándar analógico desarrollado por Bell Labs que dominó las Américas; utilizaba la técnica FDMA para asignar a cada usuario una frecuencia específica durante su llamada)**. Sin embargo, no existía el concepto de datos; el 1G era puramente para hablar.

Un concepto "WOW" es el **Handoff (Transferencia de Llamada — el proceso crítico por el cual la red detecta que un usuario se está moviendo de una celda a otra y transfiere la señal de una antena a la siguiente sin que la llamada se corte; es la base técnica que permite que el teléfono sea 'móvil' y no solo inalámbrico)**.

El dispositivo icónico de esta era fue el **Motorola DynaTAC 8000X (apodado "el ladrillo" debido a su tamaño y peso; costaba casi 4,000 dólares y su batería duraba solo 30 minutos, pero demostró que el sueño de la comunicación personal en cualquier lugar era físicamente posible)**.

Para la eficiencia, el 1G introdujo la **Reutilización de Frecuencias (Frequency Reuse — la idea de usar las mismas frecuencias en celdas que no estuvieran juntas para evitar interferencias, permitiendo que la red creciera infinitamente simplemente añadiendo más antenas pequeñas)**.

Finalmente, el límite del 1G fue su **Falta de Encriptación (cualquiera con un escáner de radio podía escuchar las conversaciones de los demás, lo que impulsó la necesidad de crear la siguiente generación digital: el 2G)**.

**Casos de Estudio y Aplicaciones Reales**

El caso de estudio que definió la movilidad fue la **Primera llamada celular en 1973**. Martin Cooper, ingeniero de Motorola, realizó la primera llamada desde una calle de Nueva York a su rival en AT&T utilizando un prototipo del DynaTAC. Este momento no fue solo una prueba técnica, sino el inicio de una industria de billones de dólares. Cooper demostró que la gente quería llamar a personas, no a lugares (como una casa u oficina). Este hito de la ingeniería de telecomunicaciones cambió la sociología humana, permitiendo que la coordinación y la información estuvieran disponibles en tiempo real en movimiento, un cambio que hoy damos por hecho pero que empezó con ese "ladrillo" analógico.

En la actualidad, el legado del 1G vive en los **Sistemas de Radio Crítica (LMR / Land Mobile Radio)** usados por policías y bomberos. Aunque hoy son digitales, el concepto de comunicación directa y robusta por voz en movimiento nació con el 1G. Al estudiar cómo los ingenieros de los 70 resolvieron el problema de la saturación de frecuencias y el handoff, los estudiantes actuales pueden entender los cimientos sobre los que se construyeron el 4G y 5G. El 1G nos enseñó que el aire es el recurso más valioso para la comunicación y que la ingeniería celular es, ante todo, una ingeniería de gestión del espectro electromagnético para la libertad humana.

**Conclusión Estratégica**

La primera generación celular nos enseña que toda gran revolución comienza con un paso audaz y, a menudo, pesado. Nos muestra que la movilidad es un deseo humano fundamental que la tecnología debe satisfacer. Para un estudiante STEM, el 1G es el punto de partida para entender la propagación de ondas, la modulación y la arquitectura de red. Aunque hoy parezca primitivo, los problemas que resolvieron los ingenieros del 1G son los mismos que enfrentamos hoy, solo que a una escala mucho mayor. Sin el "ladrillo" y la señal analógica, no tendríamos el mundo interconectado que disfrutamos hoy.

🔖 Bluebook v1 · Capítulo II, Sección 2.1.1 — Evolución de la red celular (Págs. 72)
📐 NGSS: HS-PS4-2 — Evaluate questions about the advantages of using digital transmission and storage of information (Contrasting 1G analog with future digital generations).
📋 RENAC: EC009 · Sistemas de Telefonía Celular Analógica
💡 Standards World: 1G · AMPS · Analógico (Analog) · FDMA · Handoff · Reutilización de Frecuencias · Motorola DynaTAC · Modulación de Frecuencia""",

"2.2.5": """En la década de 1990, el mundo de la telefonía móvil dejó de ser un juguete de lujo para unos pocos y se convirtió en una herramienta masiva y personal. Fue el momento en que la voz se convirtió en código binario y el teléfono aprendió a enviar letras. Hablamos de la **Evolución Celular: 2G (Second Generation / Segunda Generación — el primer estándar de comunicaciones móviles totalmente digital; permitió una calidad de voz superior, mayor seguridad mediante encriptación y el nacimiento del servicio de mensajes cortos, el SMS)**. Fue la digitalización de la sociedad móvil.

Para un estudiante STEM, el 2G es una lección de **Eficiencia Espectral (Spectral Efficiency — la capacidad de meter a muchos más usuarios en la misma cantidad de espectro radioeléctrico mediante el uso de señales digitales que ocupan menos espacio que las analógicas)**.

Técnicamente, el mundo se dividió en dos estándares principales:
1.  **GSM (Global System for Mobile Communications — el estándar europeo que conquistó el mundo, basado en la tecnología TDMA, que divide el tiempo en pequeñas ranuras para que varios usuarios compartan la misma frecuencia)**.
2.  **CDMA (Code Division Multiple Access — el estándar desarrollado por Qualcomm en EE.UU., que utiliza códigos matemáticos únicos para cada llamada, permitiendo que todos hablen al mismo tiempo en la misma frecuencia sin interferirse)**.

Un concepto "WOW" es la **Tarjeta SIM (Subscriber Identity Module — una pequeña computadora en un chip que almacena tu identidad y tus llaves de seguridad; por primera vez, tu número de teléfono pertenecía a ti y no al aparato, permitiendo cambiar de teléfono simplemente moviendo la tarjeta)**. Es el inicio de la identidad digital portátil.

La gran revolución para el usuario fue el **SMS (Short Message Service — un protocolo que aprovechaba los canales de señalización vacíos para enviar mensajes de hasta 160 caracteres; lo que empezó como un servicio técnico se convirtió en el lenguaje de toda una generación)**.

Para la seguridad, el 2G introdujo la **Encriptación de Llamadas (donde la voz se codifica matemáticamente para que nadie pueda escucharla con un escáner, garantizando la privacidad que el 1G no tenía)**.

Finalmente, el 2G evolucionó hacia el **GPRS y EDGE (generaciones 2.5G y 2.75G) que permitieron las primeras conexiones a internet móvil, abriendo la puerta a los correos electrónicos y la navegación web básica en el celular)**.

**Casos de Estudio y Aplicaciones Reales**

El caso de estudio que transformó la economía global fue el sistema **M-Pesa en Kenia**. Utilizando la red 2G y los mensajes SMS, M-Pesa permitió que millones de personas sin cuenta bancaria pudieran enviar y recibir dinero, pagar facturas y ahorrar usando su celular. Al convertir el saldo telefónico en dinero digital, el 2G bancarizó a naciones enteras en África y Asia mucho antes de que existieran los smartphones modernos. Este éxito demostró que una tecnología simple pero robusta y segura puede resolver problemas sociales masivos, convirtiendo al celular en la herramienta más potente para la inclusión financiera del siglo XXI.

En la actualidad, el legado del 2G vive en el **Internet de las Cosas Masivo (mIoT)**. Muchas máquinas, medidores de luz y alarmas de seguridad siguen usando redes 2G debido a su enorme cobertura y bajísimo consumo de batería. Al estudiar el 2G, los ingenieros actuales aprenden cómo diseñar protocolos de comunicación que prioricen la eficiencia y la simplicidad. Aunque el 2G se esté apagando en muchos países para dar paso al 5G, sus principios de división por tiempo y código siguen siendo la base de la ingeniería de redes moderna. El 2G nos enseñó que la digitalización es la clave para la escala masiva y la seguridad global.

**Conclusión Estratégica**

La segunda generación celular nos enseña que el software es el que da el verdadero valor al hardware. Nos mostró que la comunicación no es solo voz, sino datos e identidad. Para un estudiante STEM, el 2G es la base para entender la criptografía, la multiplexación y el procesamiento digital de señales. Fue la generación que puso un teléfono en el bolsillo de miles de millones de personas y que nos enseñó a escribir con los pulgares. Sin el 2G y la tarjeta SIM, la revolución del smartphone nunca hubiera tenido una red segura y masiva sobre la cual nacer.

🔖 Bluebook v1 · Capítulo II, Sección 2.1.1 — Evolución de la red celular (Págs. 72)
📐 NGSS: HS-PS4-2 — Evaluate questions about the advantages of using digital transmission and storage of information (Highlighting binary encoding and encryption of 2G).
📋 RENAC: EC009 · Sistemas de Comunicación Digital GSM / CDMA
💡 Standards World: 2G · GSM · CDMA · Tarjeta SIM · SMS · Encriptación (Encryption) · GPRS · Digitalización (Digitization) · TDMA"""
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

print(f"Reconstructed {count} modules for Chapter II (Batch 24)")
for mid, text in updates.items():
    words = len(text.split())
    print(f"  {mid}: {words} words / {len(text)} chars")

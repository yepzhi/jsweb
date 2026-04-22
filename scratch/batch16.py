import json

updates = {
"2.2.3": """En la década de los 70, el concepto de un teléfono que no estuviera atado a una pared por un cable de cobre era el epítome de la libertad tecnológica. Sin embargo, para que esta libertad fuera posible, la ingeniería tuvo que resolver un problema geométrico y físico masivo. Así nació la **Red Celular de Primera Generación (1G — el primer estándar de comunicación móvil inalámbrica analógica; se basó en una arquitectura de \"células\" geográficas —generalmente en forma de hexágonos— donde cada célula tenía su propia antena de baja potencia para evitar interferencias con células lejanas que usaran la misma frecuencia; desplegada comercialmente por primera vez en 1979 por NTT en Japón)**. El 1G fue el cimiento de todo lo que conocemos hoy en telecomunicaciones.

La gran innovación del 1G no fue solo la radio, sino la idea de la **Reutilización de Frecuencias (Frequency Reuse — técnica de diseño de redes celulares que permite utilizar los mismos canales de radio en diferentes ubicaciones geográficas, siempre que estén lo suficientemente separadas para que la interferencia sea despreciable; esto permitió que miles de usuarios pudieran hablar simultáneamente en una ciudad usando un número limitado de canales disponibles)**. Sin esta técnica, solo unas pocas docenas de personas podrían haber usado teléfonos móviles al mismo tiempo en todo Nueva York o Ciudad de México. El 1G utilizaba modulación de frecuencia (FM), similar a la radio que escuchas en el auto, pero para conversaciones privadas.

El estándar más famoso en América fue el **AMPS (Advanced Mobile Phone System — el estándar de red celular analógica de primera generación desarrollado por los Laboratorios Bell; operaba en la banda de 800 MHz y dividía el espectro en canales de 30 kHz; aunque revolucionario, carecía de seguridad, lo que permitía que las conversaciones fueran interceptadas fácilmente con escáneres de radio comunes)**. Al ser analógico, el 1G transmitía la voz directamente como ondas continuas, lo que consumía mucho ancho de banda y era muy sensible al ruido estático y las interferencias.

Un desafío técnico del 1G era el **Handoff (Traspaso — el proceso mediante el cual una red móvil transfiere una llamada o sesión de datos activa de una antena —o célula— a otra a medida que el usuario se desplaza por el área de cobertura; en el 1G, este proceso era a menudo brusco y causaba breves silencios o incluso la caída de la llamada si la señal de la nueva antena no era lo suficientemente fuerte)**. Los ingenieros de la época pasaron años perfeccionando los algoritmos de decisión para que el teléfono supiera exactamente cuándo soltar una antena y agarrar la siguiente.

Además, los sistemas 1G utilizaban la técnica **FDMA (Frequency Division Multiple Access — método de acceso al medio que permite a varios usuarios compartir un canal de comunicación dividiendo el ancho de banda disponible en canales de frecuencia separados y asignando un canal único a cada usuario durante la duración de su llamada)**. Era como si cada conversación tuviera su propio carril exclusivo en una autopista, lo cual era muy ineficiente comparado con los métodos digitales actuales, pero fue lo mejor que la tecnología de finales de los 70 podía ofrecer.

**Casos de Estudio y Aplicaciones Reales**

El despliegue de **NTT en Tokio (1979)** es el caso de estudio que inició la era móvil. Tokio, una de las ciudades más densamente pobladas del mundo, fue el campo de pruebas perfecto para la arquitectura celular. El sistema tuvo que lidiar con edificios masivos que bloqueaban las señales y una demanda que superó todas las expectativas. El éxito de NTT demostró que la gente estaba dispuesta a pagar precios exorbitantes por la portabilidad, lo que impulsó a empresas como Motorola y Ericsson a invertir miles de millones en mejorar la infraestructura global.

Otro caso interesante es el uso de teléfonos 1G en la **Bolsa de Valores de Wall Street** en los años 80. Los corredores de bolsa fueron los primeros adoptantes masivos. Tener la capacidad de ejecutar una orden de compra o venta mientras caminaban por la calle o desde sus autos (los famosos \"car phones\") les daba una ventaja competitiva de segundos que valía fortunas. Sin embargo, este uso también reveló la vulnerabilidad del 1G: espías industriales usaban escáneres para escuchar las conversaciones de los brokers, lo que aceleró la necesidad de crear la segunda generación (2G) que fuera digital y encriptada.

**Conclusión Estratégica**

El 1G fue el \"ladrillo\" fundamental de la conectividad moderna. Aunque hoy nos parezca primitivo con su voz llena de estática y nula capacidad de datos, resolvió los problemas más difíciles de la arquitectura de red móvil: la geometría de las células y la gestión del espectro limitado. Para un estudiante STEM, estudiar el 1G es entender cómo la ingeniería puede tomar un recurso natural escaso y multiplicarlo mediante el ingenio geométrico y físico. Fue el primer paso de un viaje que nos llevaría de simples llamadas de voz a la internet global en la palma de la mano.

🔖 Bluebook v1 · Capítulo II, Sección 2.1.1 — Evolución de la red celular (Págs. 72–73)
📐 NGSS: HS-PS4-2 — Evaluate questions about the advantages of using digital transmission and storage of information (comparing analog vs digital).
📋 RENAC: EC009 · Telefonía Móvil y Sistemas Analógicos
💡 Standards World: 1G · AMPS · NTT · Reutilización de Frecuencias · Handoff · FDMA · Modulación Analógica · Red Celular""",

"2.2.4": """Si existe un objeto que simboliza el exceso, el poder y la ambición tecnológica de los años 80, es sin duda el \"ladrillo\". El **Motorola DynaTAC 8000X (el primer teléfono móvil portátil del mundo disponible comercialmente, lanzado en 1983; diseñado por Rudy Krolopp y basado en los prototipos de Martin Cooper; pesaba casi 800 gramos y medía 33 centímetros de largo, lo que le valió el apodo de \"ladrillo\" o \"zapato\")** no era solo un teléfono; era una declaración de que el futuro había llegado, aunque todavía fuera muy pesado.

Para un estudiante STEM, el DynaTAC es una lección de ingeniería de compromiso. En 1983, la electrónica no estaba miniaturizada. Para lograr que un dispositivo fuera \"portátil\" y tuviera suficiente potencia de radio para alcanzar una torre celular a varios kilómetros, Motorola tuvo que sacrificar todo lo demás: peso, tamaño y, sobre todo, autonomía. El diseño del DynaTAC es un testimonio de la era pre-Litio, donde las baterías eran masivas y poco eficientes, y los componentes de radiofrecuencia requerían grandes disipadores de calor y antenas extensibles.

Técnicamente, el DynaTAC utilizaba una **Batería de Níquel-Cadmio (NiCd — un tipo de batería recargable que utiliza hidróxido de óxido de níquel y cadmio metálico como electrodos; en el DynaTAC, esta batería tardaba 10 horas en cargarse por completo y solo ofrecía unos 30 minutos de tiempo de conversación antes de agotarse; sufría gravemente del \"efecto memoria\", donde la batería perdía capacidad si no se descargaba completamente antes de recargarla)**. Esta limitación energética es lo que definía la experiencia del usuario en los 80.

La potencia de transmisión del dispositivo era de aproximadamente **0.6 Watts (una potencia considerablemente alta para un dispositivo que se sostiene cerca de la cabeza, comparada con los estándares actuales; esta potencia era necesaria porque en los 80 las torres celulares estaban mucho más dispersas que hoy, y el teléfono necesitaba una señal muy fuerte para compensar la baja sensibilidad de los receptores analógicos de la época)**. Esto hacía que el dispositivo se calentara notablemente durante una llamada.

El costo original del DynaTAC era de **3,995 dólares (que ajustado a la inflación actual supera los 12,000 dólares; esto lo convertía en un objeto de lujo absoluto, destinado a altos ejecutivos, médicos de urgencia y celebridades)**. La ingeniería detrás de su teclado de goma y su pantalla de LED rojos (que solo mostraba números) era lo máximo en interfaces de usuario de su tiempo, pero hoy nos recuerda lo lejos que hemos llegado en ergonomía y diseño.

Su antena era del tipo **Antena de Látigo (Whip Antenna — una antena monopolo flexible de un cuarto de longitud de onda que debe ser extendida para maximizar la ganancia de recepción y transmisión; en el DynaTAC, la antena era una parte integral de su silueta icónica y era fundamental para mantener la conexión en el sistema AMPS de 800 MHz)**.

**Casos de Estudio y Aplicaciones Reales**

La primera llamada comercial realizada con un DynaTAC ocurrió el **13 de octubre de 1983**. Bob Barnett, presidente de Ameritech Mobile Communications, llamó desde su Chrysler convertible frente al estadio Soldier Field en Chicago a nada menos que el nieto de Alexander Graham Bell, quien se encontraba en Alemania. Esta llamada no solo fue una hazaña técnica, sino un evento mediático que demostró que el concepto de \"teléfono de coche\" estaba siendo superado por el de \"teléfono de persona\".

En la cultura popular, el DynaTAC es recordado por la película **Wall Street (1987)**, donde el personaje Gordon Gekko lo utiliza en la playa para dar instrucciones financieras. Este momento consolidó la imagen del teléfono móvil como una herramienta de dominación y éxito rápido. Sin embargo, para los ingenieros de Motorola, el éxito real fue demostrar que podían meter un transmisor de radio completo, un sintetizador de frecuencia, un microprocesador básico y una batería en un solo paquete que no requiriera una mochila de cables, sentando las bases de la miniaturización extrema que veríamos en las décadas siguientes.

**Conclusión Estratégica**

El DynaTAC 8000X fue el prototipo de nuestra obsesión actual con los dispositivos móviles. Aunque hoy nos reímos de su tamaño y su batería de 30 minutos, representó el momento exacto en que la humanidad decidió que la comunicación debía ser personal y no espacial. Como ingenieros y científicos, el DynaTAC nos enseña que el primer paso hacia la perfección suele ser un \"ladrillo\": pesado, costoso y limitado, pero cargado con la visión de un mundo que nunca volvería a estar desconectado.

🔖 Bluebook v1 · Capítulo II, Sección 2.1.1 — Evolución de la red celular (Págs. 72–73)
📐 NGSS: HS-PS3-3 — Design, build, and refine a device that works within given constraints to convert one form of energy into another form of energy (Battery to RF energy).
📋 RENAC: EC009 · Historia de los Dispositivos Móviles
💡 Standards World: DynaTAC 8000X · Motorola · Martin Cooper · Batería NiCd · RF Power · Antena de Látigo · Miniaturización · Historia STEM""",

"2.2.5": """En 1991, el mundo de las telecomunicaciones experimentó su propio \"momento de la caída del muro\". Pasamos de la era de las ondas analógicas ruidosas a la era de la precisión binaria. Así nació la **Red Celular de Segunda Generación (2G / GSM — Global System for Mobile Communications; el primer estándar de telefonía móvil totalmente digital; lanzado comercialmente en Finlandia en 1991, revolucionó la industria al introducir la digitalización de la voz, el cifrado de seguridad y el icónico servicio de mensajes cortos —SMS—)**. El 2G fue el sistema operativo que permitió que el celular se volviera global.

La transición al 2G no fue solo un cambio de hardware, sino un cambio de paradigma matemático. En lugar de enviar la voz como una onda continua, el 2G la convertía en unos y ceros. Esto permitió el uso de la **Compresión de Voz (Voice Compression — algoritmos que analizan la señal de audio y eliminan la información redundante antes de transmitirla, permitiendo que la misma cantidad de espectro pueda transportar hasta 8 veces más llamadas que el sistema analógico; fue la clave para que la telefonía móvil se volviera masiva y barata)**. Por primera vez, el espectro de radio se volvió eficiente.

Una innovación técnica fundamental del 2G fue el **Cifrado Digital (Digital Encryption — el proceso de codificar la información de la voz y los datos mediante algoritmos matemáticos complejos antes de enviarlos por el aire; a diferencia del 1G, donde cualquiera con un escáner podía escuchar, el 2G hizo que las conversaciones móviles fueran privadas y seguras, lo que permitió su uso masivo en negocios y gobierno)**. Esta seguridad fue lo que dio confianza a los consumidores para adoptar la tecnología.

El sistema GSM introdujo la **Tarjeta SIM (Subscriber Identity Module — un circuito integrado inteligente que almacena de forma segura la clave de servicio del suscriptor y permite a los usuarios cambiar de teléfono simplemente moviendo la tarjeta; separó por primera vez la identidad del usuario del hardware del dispositivo, creando un mercado global de teléfonos libres)**. La SIM es, posiblemente, el dispositivo de seguridad más exitoso de la historia.

Para compartir el espectro, el 2G utilizó **TDMA (Time Division Multiple Access — método de acceso al medio que permite a varios usuarios compartir la misma frecuencia de radio dividiendo la señal en diferentes ranuras de tiempo; cada usuario tiene asignada una fracción de segundo para transmitir sus datos, tan rápida que el oído humano percibe una conversación continua)**. Fue como pasar de carriles exclusivos en una autopista a un sistema de teletransporte coordinado por milisegundos.

Además, el 2G trajo el **Roaming Internacional (un servicio que permite a un cliente utilizar su teléfono móvil mientras viaja fuera de la zona de cobertura de su red local, conectándose a la red de otro operador; gracias al estándar GSM unificado en Europa y luego en el mundo, un usuario podía aterrizar en otro país y su teléfono seguía funcionando instantáneamente)**.

**Casos de Estudio y Aplicaciones Reales**

El caso de **Finlandia y Nokia** en los 90 es legendario. Finlandia, un país pequeño y gélido, se convirtió en el epicentro de la revolución móvil gracias a que fue el primero en adoptar el estándar GSM. Nokia pasó de fabricar papel y botas de goma a ser el líder mundial en telefonía. El éxito del GSM en Europa demostró que los estándares abiertos y unificados permiten una innovación mucho más rápida que los sistemas cerrados y propietarios. Nokia 1011 fue el primer teléfono GSM producido en masa, y su capacidad de enviar SMS cambió para siempre la forma en que los jóvenes se comunicaban.

Otro caso de estudio crítico es la **Revolución del SMS en las economías emergentes**. En países con infraestructura de internet nula en los 90, el 2G permitió el surgimiento de servicios como **M-Pesa** en Kenia. M-Pesa utilizaba los simples mensajes de texto del 2G para permitir que las personas enviaran dinero de un teléfono a otro sin necesidad de un banco. Este uso del 2G para la inclusión financiera demostró que una red digital básica pero robusta puede transformar la economía de naciones enteras mucho más rápido que los cables tradicionales.

**Conclusión Estratégica**

El 2G fue la digitalización del mundo. Nos dio seguridad, eficiencia y la capacidad de enviar datos (aunque fueran solo 160 caracteres a la vez). Para un estudiante STEM, el 2G es el ejemplo perfecto de cómo los estándares compartidos pueden crear un mercado global. Aprendimos que la información digital es más resiliente que la analógica y que la verdadera potencia de una red no está en sus cables, sino en sus algoritmos de compresión y seguridad. El 2G puso los cimientos de la privacidad digital que hoy damos por sentada.

🔖 Bluebook v1 · Capítulo II, Sección 2.1.1 — Evolución de la red celular (Págs. 72–73)
📐 NGSS: HS-PS4-5 — Communicate technical information about how some technological devices use the principles of wave behavior and wave interactions with matter to transmit and capture information and energy.
📋 RENAC: EC009 · Redes Digitales GSM
💡 Standards World: 2G · GSM · Tarjeta SIM · Cifrado Digital · TDMA · Compresión de Voz · SMS · Roaming""",

"2.2.6": """Justo cuando el mundo se estaba acostumbrando a enviar mensajes de texto y hacer llamadas digitales, surgió una nueva hambre tecnológica: la necesidad de estar siempre conectados a internet. El **GPRS (General Packet Radio Service — una extensión del estándar GSM que permite la transmisión de datos por paquetes a través de la red celular; conocido como la generación 2.5G, fue la primera tecnología que permitió una conexión de datos \"siempre activa\", eliminando la necesidad de marcar un número de acceso cada vez que se quería entrar a la red)**. Fue el nacimiento de la internet móvil real.

Antes del GPRS, para usar datos en un celular tenías que hacer una llamada de datos (Circuit Switching), lo cual era lento y costoso porque pagabas por minuto, no por megabyte. El GPRS cambió esto mediante la **Conmutación de Paquetes (Packet Switching — método de comunicación en el que los datos se dividen en pequeños trozos o \"paquetes\" que se envían de forma independiente a través de la red y se reensamblan en el destino; esto permite que muchos usuarios compartan el mismo canal de radio de forma mucho más eficiente, ya que la red solo se ocupa cuando se están enviando o recibiendo datos activamente)**. Es la misma tecnología que usa la internet de tu casa.

Para adaptar la internet a las pequeñas pantallas y procesadores limitados de principios de los 2000, se creó el **WAP (Wireless Application Protocol — un estándar abierto internacional para aplicaciones que utilizan comunicaciones inalámbricas; permitía acceder a portales de información simplificados —sitios WAP— que mostraban noticias, clima y resultados deportivos en formato de texto básico y gráficos rudimentarios)**. Aunque hoy parece primitivo, el WAP fue el precursor de las aplicaciones móviles modernas.

La velocidad del GPRS era de unos **40 kbps (kilobits por segundo — una velocidad extremadamente lenta para los estándares actuales, equivalente a apenas el 4% de un solo megabit; sin embargo, era suficiente para revisar correos electrónicos de solo texto y descargar tonos de llamada monofónicos)**. El GPRS utilizaba múltiples \"ranuras de tiempo\" del sistema GSM para lograr esta velocidad, sumando la capacidad de varios canales de voz.

Con el GPRS también llegaron los **MMS (Multimedia Messaging Service — una evolución del SMS que permitía enviar mensajes con fotos, sonidos y videos cortos; aunque eran caros y lentos de enviar, fueron la primera vez que los usuarios compartieron contenido visual de forma inalámbrica a través de la red celular)**. Esto impulsó a los fabricantes a empezar a incluir cámaras en los teléfonos.

Además, el GPRS introdujo el concepto de **Contexto PDP (Packet Data Protocol Context — un conjunto de información almacenado en el teléfono y en la red que define la sesión de datos del usuario, incluyendo su dirección IP y los parámetros de calidad de servicio; es lo que permite que tu teléfono mantenga la conexión a internet de forma persistente mientras te mueves)**.

**Casos de Estudio y Aplicaciones Reales**

El lanzamiento del **Ericsson T68i** en 2002 es un caso de estudio clave. Fue uno de los primeros teléfonos con pantalla a color y soporte completo para GPRS y MMS. Para enviar una foto, tenías que comprar una pequeña cámara que se conectaba por la parte inferior del teléfono. El GPRS permitía que esa foto (de bajísima resolución) llegara al correo electrónico de otra persona en cuestión de minutos. Este dispositivo demostró que el futuro del celular no era hablar, sino ver y compartir, sentando las bases de lo que 10 años después sería Instagram.

Otro caso masivo fue el auge de **BlackBerry**. Los dispositivos BlackBerry utilizaban la red GPRS para su famoso servicio \"Push Email\". A diferencia de otros teléfonos donde tenías que entrar manualmente a revisar tu correo, BlackBerry mantenía un canal GPRS abierto y el servidor \"empujaba\" el correo al teléfono instantáneamente. Esta capacidad de estar siempre conectado y recibir notificaciones en tiempo real convirtió a BlackBerry en la herramienta indispensable para todos los ejecutivos del mundo a principios de los 2000, demostrando que la eficiencia del GPRS para datos pequeños era revolucionaria.

**Conclusión Estratégica**

El GPRS fue la primera vez que el celular dejó de ser un teléfono para convertirse en un terminal de internet. Nos enseñó la eficiencia de la conmutación de paquetes y nos dio la libertad de estar \"siempre conectados\". Para un estudiante STEM, el GPRS es una lección sobre cómo extender una tecnología existente (GSM) para darle nuevas capacidades sin tener que reconstruir toda la red desde cero. Fue el puente necesario entre el mundo de la voz y el mundo de los datos infinitos que vendría con el 3G y el 4G.

🔖 Bluebook v1 · Capítulo II, Sección 2.1.1 — Evolución de la red celular (Págs. 72–73)
📐 NGSS: HS-ETS1-2 — Design a solution to a complex real-world problem by breaking it down into smaller, more manageable problems that can be solved through engineering (Optimizing bandwidth for data).
📋 RENAC: EC009 · Redes 2.5G y Datos Móviles
💡 Standards World: GPRS · 2.5G · Conmutación de Paquetes · WAP · MMS · Contexto PDP · Push Email · Siempre Activo""",

"2.2.7": """Antes de que la tecnología 3G estuviera lista para el despliegue masivo, la industria necesitaba una forma de exprimir hasta la última gota de velocidad de la infraestructura 2G existente. Así nació **EDGE (Enhanced Data rates for GSM Evolution — una tecnología de telefonía móvil digital que permite velocidades de transmisión de datos mejoradas como una extensión sobre las redes GSM existentes; conocida como 2.75G o \"pre-3G\", triplicó la velocidad del GPRS utilizando la misma infraestructura de antenas)**. EDGE fue el último gran suspiro de la era 2G.

La magia de EDGE no residía en poner más antenas, sino en cambiar la forma en que las ondas de radio transportaban los datos. Mientras que el GPRS usaba una modulación simple, EDGE introdujo la **Modulación 8-PSK (8-Phase Shift Keying — un método de modulación digital que cambia la fase de la onda portadora en ocho niveles diferentes, permitiendo que cada símbolo transmitido represente tres bits de información en lugar de uno solo; esto triplicó instantáneamente el ancho de banda sin cambiar la frecuencia de radio)**. Es un ejemplo brillante de cómo las matemáticas y el procesamiento de señales pueden mejorar el hardware sin tocar un solo tornillo.

La velocidad de EDGE alcanzaba hasta los **500 kbps (0.5 Mbps — una velocidad que, por primera vez, permitía una navegación web rudimentaria que se sentía algo fluida; en su momento, era competitiva con las conexiones de internet por cable telefónico —dial-up— de los hogares)**. Con EDGE, descargar una canción en formato MP3 (de baja calidad) era finalmente posible, aunque tomaba varios minutos.

Técnicamente, EDGE introdujo el **MCS (Modulation and Coding Scheme — un sistema que permite a la red ajustar automáticamente la complejidad de la modulación y el nivel de corrección de errores basándose en la calidad de la señal; si estás cerca de la antena, EDGE usa MCS-9 para máxima velocidad; si te alejas, baja a MCS-1 para asegurar que el dato llegue aunque sea lento)**. Esta adaptabilidad es lo que hace que las redes modernas sean tan robustas.

EDGE fue la tecnología que dio vida a la primera generación de aplicaciones que requerían datos constantes, como los **Navegadores Web Completos en el móvil (como Opera Mini, que comprimía las páginas web en sus servidores antes de enviarlas al teléfono para que cargaran rápido sobre la red EDGE)**. También permitió la descarga de juegos Java más complejos y los primeros ringtones \"reales\" (tonos MP3).

En el ecosistema de red, EDGE se conoce como una tecnología de **Retrocompatibilidad (Backward Compatibility — la capacidad de un sistema tecnológico para funcionar con versiones anteriores de sí mismo; las redes EDGE podían servir a teléfonos GPRS antiguos, y los teléfonos EDGE podían funcionar en redes que aún no se habían actualizado, asegurando una transición suave para los usuarios)**.

**Casos de Estudio y Aplicaciones Reales**

El caso de estudio más icónico de la tecnología EDGE es el **iPhone Original (2007)**. Cuando Steve Jobs presentó el iPhone, no tenía 3G (una decisión muy criticada), sino que dependía de la red EDGE de AT&T. Apple diseñó Mobile Safari para ser tan eficiente que, incluso sobre la red EDGE de 0.5 Mbps, la experiencia de navegar por internet se sentía revolucionaria. El iPhone demostró que un software excepcionalmente bien diseñado podía compensar las limitaciones de una red \"pre-3G\", convirtiendo a EDGE en la red que soportó el nacimiento de la era de los smartphones modernos.

Otro caso interesante fue el uso de EDGE en **zonas rurales de Europa y América Latina**. Debido a que actualizar una antena de GPRS a EDGE solo requería una actualización de software y algunas tarjetas de procesamiento nuevas (sin cambiar las antenas masivas), EDGE permitió llevar internet de \"banda ancha móvil\" a miles de pueblos pequeños años antes de que el 3G o 4G fueran rentables. Esta capacidad de aprovechar la infraestructura existente para cerrar la brecha digital es una de las mayores contribuciones sociales de la ingeniería de redes móviles.

**Conclusión Estratégica**

EDGE nos enseñó que la eficiencia no siempre viene de construir algo nuevo, sino de entender mejor lo que ya tenemos. Mediante el uso de modulación avanzada y esquemas de codificación adaptativos, EDGE estiró los límites de la física de los 90 hasta las necesidades de los 2000. Para un estudiante STEM, EDGE es un recordatorio de que el procesamiento de señales y las matemáticas aplicadas son tan potentes como el hardware físico. Fue el puente final que nos dejó en la puerta de la verdadera banda ancha móvil que el 3G abriría de par en par.

🔖 Bluebook v1 · Capítulo II, Sección 2.1.1 — Evolución de la red celular (Págs. 72–73)
📐 NGSS: HS-PS4-1 — Use mathematical representations to support a claim regarding relationships among the frequency, wavelength, and speed of waves.
📋 RENAC: EC009 · Redes 2.75G y EDGE
💡 Standards World: EDGE · 2.75G · Modulación 8-PSK · MCS · Retrocompatibilidad · Mobile Safari · Eficiencia Espectral · Pre-3G"""
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

print(f"Updated {count} modules for Chapter II (Batch 16)")
for mid, text in updates.items():
    words = len(text.split())
    print(f"  {mid}: {words} words / {len(text)} chars")

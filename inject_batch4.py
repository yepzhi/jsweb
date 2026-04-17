import json

path = '/Users/yepz/JSweb/data/modules.json'
with open(path, 'r', encoding='utf-8') as f:
    data = json.load(f)

fullTexts = {

"1.24": """Cada vez que un cohete despega de la plataforma de lanzamiento en Cabo Cañaveral, en Baikonur o en Hainan, está librando una batalla contra una de las fuerzas más antiguas e inflexibles del Universo: la **gravedad**. Para que cualquier objeto llegue al espacio y permanezca en órbita, debe superar la cantidad de energía que la gravedad de la Tierra ejerce para mantenerlo en la superficie. Esta cantidad crítica tiene un nombre específico: **velocidad de escape**.

La **velocidad de escape** es la velocidad mínima necesaria para que un objeto salga del campo gravitacional de un cuerpo celeste sin necesitar más propulsión adicional. Para la Tierra, este valor es de **11.2 km/s** (equivalente a 40,320 km/h). A esa velocidad, la energía cinética del objeto es exactamente igual a la energía potencial gravitacional que lo une a la Tierra. Si lo lanzas a exactamente 11.2 km/s en cualquier dirección que no intersecte la superficie, el objeto escapará de la Tierra sin necesitar más combustible.

La fórmula que describe la velocidad de escape fue derivada directamente de las ecuaciones de **Newton** y la conservación de energía:

**v_e = √(2GM/r)**

Donde **G** es la Constante Gravitacional Universal, **M** es la masa del cuerpo del que se escapa y **r** es la distancia desde el centro del cuerpo. Esta ecuación revela algo fascinante: la velocidad de escape depende de la **densidad** del objeto, no solo de su masa. Una esfera del tamaño del Sol pero con la densidad de un agujero negro tendría una velocidad de escape mayor que la velocidad de la luz —y eso es precisamente la definición física de un **agujero negro**: un objeto cuya velocidad de escape supera **c**.

En la práctica, los cohetes actuales nunca alcanzan los 11.2 km/s de golpe. Esto requeriría una cantidad de combustible astronómica. En cambio, usan una combinación de técnicas:

**1. La Ecuación de Tsiolkovsky** describe la relación entre el cambio de velocidad de un cohete, la velocidad de expulsión de los gases y la razón de masa combustible/masa total. La tiranía de esta ecuación es brutal: para duplicar el delta-V (cambio de velocidad) de un cohete, necesitas cuadrar la cantidad de combustible. Es por eso que los cohetes son mayoritariamente combustible.

**2. Los Multietapas** (staging) solucionan parcialmente este problema. El cohete Saturn V que llevó a los Apollo a la Luna tenía tres etapas: cada etapa se separaba cuando su combustible se agotaba, reduciendo el peso que las etapas superiores tenían que acelerar.

**3. La Asistencia Gravitacional** (slingshot) permite a naves espaciales ganar velocidad "gratis" pasando cerca de planetas y robándoles un poco de su momento angular. La sonda Voyager 2 usó cuatro asistencias gravitacionales (Júpiter, Saturno, Urano, Neptuno) para alcanzar velocidades de salida del sistema solar que habrían sido imposibles solo con su propelente.

**4. El Punto de Lanzamiento** importa. Lanzar desde el Ecuador (como lo hace SpaceX desde sus plataformas marinas) aprovecha la velocidad rotacional de la Tierra en el Ecuador: 465 m/s de velocidad "gratis" gracias a la rotación terrestre.

El futuro de la propulsión espacial busca romper las cadenas de la Ecuación de Tsiolkovsky con tecnologías radicalmente distintas: propulsión iónica, velas de luz, motores de fusión nuclear y propulsión por **antimateral** — que liberaría 1,000 veces más energía por kilogramo que el mejor combustible químico. Cada mejora en **impulso específico** (la eficiencia del motor) puede reducir dramáticamente el tamaño y costo de una misión.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.4 — Gravedad** (Págs. 28–30)
**📐 NGSS: HS-PS2-1 · HS-PS3-1** — Aplicar conceptos de energía cinética y potencial para analizar el movimiento de objetos en campos gravitacionales.
**📋 RENAC: EC009 · Mecánica Newtoniana · Exploración Espacial**
**💡 Standards World:** Velocidad de Escape · 11.2 km/s · Cohetes · Ecuación de Tsiolkovsky · Multietapas · Asistencia Gravitacional · Delta-V · Impulso Específico""",

"1.25": """En la historia de la física, hay un momento legendario que resume el poder de observar el mundo cotidiano con ojos curiosos. Según la historia —que probablemente tiene mucho de mítica pero contiene verdad conceptual—, **Isaac Newton** estaba sentado bajo un manzano en Woolsthorpe, Lincolnshire, Inglaterra, en 1666 cuando una manzana cayó al suelo frente a él. En lugar de ignorarlo como cualquiera haría, Newton se preguntó: ¿por qué la manzana siempre cae perpendicularmente al suelo? ¿Por qué no cae en otra dirección? ¿Acaso la misma fuerza que tira de la manzana alcanza hasta la Luna?

La respuesta a esas preguntas fue la **Ley de la Gravitación Universal**, quizás la generalización matemática más poderosa de la historia de la ciencia. Publicada en su obra *Principia Mathematica* en 1687, la ley dice en su esencia:

**F = G × (M₁ × M₂) / r²**

Donde **F** es la fuerza de atracción gravitacional entre dos masas M₁ y M₂, **r** es la distancia entre sus centros de masa y **G** es la Constante Gravitacional Universal (6.674 × 10⁻¹¹ N·m²/kg²). Esta fórmula aparentemente simple tiene un poder predictivo extraordinario: con ella, Newton fue capaz de explicar por qué los planetas orbitan el Sol en elipses (Kepler lo había descrito, pero no explicado), por qué las mareas suben y bajan en sincronía con la Luna, y por qué los cometas regresan en períodos predecibles.

La constante **G** es uno de los números más fundamentales y también uno de los más difíciles de medir con precisión. La primera medición directa de G fue realizada por Henry Cavendish en 1798 usando una balanza de torsión de extrema sensibilidad, en un experimento que también permitió calcular por primera vez la masa de la Tierra. Incluso hoy, G es la constante fundamental que conocemos con menor precisión relativa, con errores de medición de partes por millón, comparado con otras constantes conocidas con partes por billón.

Una implicación crucial de la fórmula es la dependencia con el cuadrado de la distancia (la **ley del inverso del cuadrado**). Si te alejas de la Tierra al doble de distancia, la gravedad que sientes es cuatro veces menor. Al triple de distancia, nueve veces menor. Esta relación garantiza que la gravedad disminuye con la distancia pero nunca llega a cero completamente —en teoría, la gravitación de la Tierra alcanza hasta el último confín del Universo Observable, aunque de manera inmeasurablemente débil.

La **Fuerza G** en la cotidianidad no es solo la razón por la que caemos. Es la que mantiene nuestra atmósfera acumulada alrededor del planeta (sin gravedad, las moléculas de aire se escaparían al espacio). Es la que hace que los océanos permanezcan líquidos sobre la superficie. Es la que genera las mareas. Es la que permite que nuestro sistema digestivo funcione (el peristaltismo ayuda, pero la gravedad facilita el flujo descendente y la orientación del sistema digestivo de los vertebrados fue moldeada evolutivamente asumiendo una fuerza gravitacional de 1G).

Newton transformó la humanidad porque demostró que el Universo funciona según **leyes matemáticas precisas y universales** que aplican desde una manzana hasta las galaxias. La misma ecuación que describe la caída de un objeto desde un puente describe la órbita de la Vía Láctea alrededor del Gran Atractor. Esta unidad de las leyes físicas a todas las escalas es la premisa fundamental de la ciencia moderna.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.4 — Gravedad** (Págs. 26–30)
**📐 NGSS: HS-PS2-1 · HS-PS2-4** — Usar las leyes de Newton para predecir el movimiento de objetos bajo interacciones gravitacionales.
**📋 RENAC: EC009 · Mecánica Clásica y Gravitación**
**💡 Standards World:** Newton · Fuerza G · Gravitación Universal · Principia Mathematica · Constante G · Ley Inverso del Cuadrado · Cavendish · Mareas""",

"1.26": """Cuando se habla de órbitas, la imagen instintiva es un planeta girando alrededor de una estrella fija y estática. Pero esta imagen es técnicamente incorrecta. Ningún cuerpo astronómico orbita alrededor de otro. Todos los cuerpos del sistema solar —incluyendo el Sol— orbitan alrededor de un punto común llamado el **baricentro**: el centro de masa del sistema.

El **baricentro** es el punto en el que, si colgaras un sistema de cuerpos como si fuera un móvil, estaría perfectamente balanceado. En un sistema de dos cuerpos, está siempre en la línea que los une, a una distancia del centro de cada uno inversamente proporcional a su masa. Esto significa que el baricentro siempre está más cerca del cuerpo más masivo.

En el sistema Tierra-Luna, el baricentro se encuentra a unos 4,671 km del centro de la Tierra, que tiene un radio de 6,371 km. Esto significa que el baricentro está aproximadamente **1,700 km** por debajo de la superficie terrestre. Técnicamente, la Tierra oscila o "bambolea" alrededor de este punto interior mientras la Luna orbita. Este bamboleo es pequeño pero medible con instrumentos geodésicos de precisión, e incluso tiene efectos sutiles en los relojes atómicos terrestres.

Para el sistema Sol-Júpiter, el dinamismo es mucho más dramático. La masa de Júpiter es 317 veces la masa de la Tierra y su efecto gravitacional sobre el Sol es significativo. El baricentro Sol-Júpiter se ubica a aproximadamente 742,000 km del centro del Sol —ligeramente **fuera de la fotosfera solar** (la superficie visible, que tiene un radio de 696,000 km). Esto significa que el Sol realiza una pequeña órbita alrededor de este punto exterior, con un período de casi 12 años.

Este movimiento del Sol tiene una aplicación astronómica brillante: es la base de uno de los métodos principales para detectar **exoplanetas**. El método de la **velocidad radial** (o método Doppler) monitorea el ligero bamboleo que un planeta causa en su estrella. Cuando la estrella se mueve hacia nosotros por el tirón de su planeta, la luz que emite se comprime ligeramente (se desplaza hacia el azul). Cuando se aleja, la luz se estira (se desplaza hacia el rojo). Estos desplazamientos Doppler de apenas metros por segundo son detectables con espectrómetros de alta resolución y han permitido descubrir cientos de exoplanetas.

La danza de los **baricentros** escala hasta las galaxias enteras. Las mismas leyes se aplican: dos galaxias que se orbitan mutuamente lo hacen alrededor de su baricentro compartido. La Vía Láctea y Andrómeda ya se están influenciando mutuamente con sus campos gravitacionales y el baricentro del sistema Vía Láctea-Andrómeda-Grupo Local determina la dinámica a gran escala de nuestro vecindario cósmico.

Entender los baricentros también es esencial para la **estabilidad de misiones espaciales**: las misiones al **Punto de Lagrange L2** (como el JWST) explotan la geometría del baricentro Tierra-Sol para orbitar en un punto donde las fuerzas gravitacionales y centrífugas se equilibran, permitiendo al telescopio mantenerse relativamente estático respecto a la Tierra con un mínimo de combustible correctivo.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.4** (Págs. 28–29)
**📐 NGSS: HS-PS2-1 · HS-ESS1-2** — Usar modelos matemáticos de gravedad para explicar las órbitas en sistemas de múltiples cuerpos.
**📋 RENAC: EC009 · Mecánica Orbital y Astrofísica**
**💡 Standards World:** Baricentro · Centro de Masa · Bamboleo · Método Radial · Exoplanetas · Doppler · Puntos de Lagrange · JWST · Dinámica Orbital""",

"1.27": """¿Por qué la Tierra tiene océanos líquidos, Venus es un infierno de 465°C y Marte tiene desiertos helados? La respuesta no está solo en la composición de los planetas sino en su distancia exacta a su estrella. Existe un rango de distancias orbitales alrededor de cualquier estrella donde las temperaturas permiten que el agua exista en estado líquido en la superficie de un planeta rocoso. Los astrónomicos llaman a este rango la **Zona de Habitabilidad**, y coloquialmente también se conoce como la **Zona de Ricitos de Oro**: no demasiado caliente, no demasiado fría, sino exactamente como debe ser.

Para el Sol, la zona de habitabilidad convencional se extiende aproximadamente entre **0.95 y 1.67 Unidades Astronómicas** (UA), donde 1 UA es la distancia media Tierra-Sol (149.6 millones de km). La Tierra orbita a exactamente 1 UA, cómodamente dentro de esta zona. Venus orbita a 0.72 UA —demasiado cerca— y Marte a 1.52 UA, en el borde exterior.

Pero la zona de habitabilidad no es una línea fija; es dinámica y depende de múltiples factores:

**Luminosidad estelar:** Mientras más luminosa es una estrella, su zona de habitabilidad está más alejada. Las enanas rojas (como Próxima Centauri) tienen zonas de habitabilidad muy cercanas —a distancias menores que la de Mercurio al Sol. Las estrellas azules masivas las tienen muy alejadas.

**Composición atmosférica:** La **atmósfera** es un amplificador de temperatura. Venus tiene una atmósfera densa de CO₂ que crea un efecto invernadero extremo, elevando su temperatura superficial de unos -15°C (sin atmósfera) a 465°C. Marte, con su atmósfera delgada, pierde el calor solar rápidamente. La Tierra mantiene sus temperaturas habitables gracias a un **efecto invernadero moderado** —CO₂, vapor de agua, metano— que eleva la temperatura media global unos 33°C por encima de lo que tendría sin atmósfera. Sin este efecto invernadero natural, la temperatura media terrestre sería de -18°C y los océanos estarían congelados.

**Retroalimentaciones climáticas:** El ciclo carbono-silicato de la Tierra actúa como un termostato planetario a largo plazo. Si el planeta se enfría, la glaciación avanza, reduce la erosión de silicatos, disminuye el consumo de CO₂ atmosférico, el CO₂ volcánico se acumula, aumenta el efecto invernadero y el planeta se calienta. Si se calienta demasiado, la erosión aumenta, el CO₂ se consume más rápido y el planeta se enfría. Este ciclo opera en escalas de millones de años y ha mantenido la Tierra habitable durante 3,800 millones de años.

El concepto de zona de habitabilidad también se ha ampliado en la última década. Los astrobiólogos ahora hablan de la **zona de habitabilidad subsuperficial**: océanos de agua líquida mantenidos bajo superficies de hielo por calor interno (como en Europa, la luna de Júpiter, o Encélado, luna de Saturno). Estas lunas están fuera de la zona de habitabilidad convencional, pero la actividad mareomotriz causada por la gravedad del planeta anfitrión calienta sus interiores lo suficiente para mantener océanos líquidos. Son hoy los candidatos más prometedores para encontrar vida microbiana dentro del sistema solar.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.3** (Págs. 23–24)
**📐 NGSS: HS-ESS1-1 · HS-ESS2-4** — Evaluar evidencia sobre las condiciones que hacen habitable a un planeta.
**📋 RENAC: EC009 · Astrobiología y Ciencias Planetarias**
**💡 Standards World:** Zona de Habitabilidad · Ricitos de Oro · Efecto Invernadero · Unidad Astronómica · Ciclo Carbono-Silicato · Europa · Encélado · Exoplanetas · Atmósfera"""
}

for ch in data['chapters']:
    for m in ch['modules']:
        if m['id'] in fullTexts:
            m['fullText'] = fullTexts[m['id']]

with open(path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

count = sum(1 for ch in data['chapters'] for m in ch['modules'] if 'fullText' in m)
print(f"✅ Batch 4 complete. {count} modules now have fullText content.")

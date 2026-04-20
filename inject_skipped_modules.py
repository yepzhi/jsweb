# -*- coding: utf-8 -*-
import json

path = '/Users/yepz/JSweb/data/modules.json'

with open(path, 'r', encoding='utf-8') as f:
    data = json.load(f)

fullTexts = {
    "1.22": """En la **Estación Espacial Internacional (ISS — International Space Station; un laboratorio de investigación en órbita terrestre baja que orbita a unos 408 km de altitud; es el objeto artificial más grande en el espacio y un esfuerzo de colaboración entre 15 naciones)**, los objetos parecen no tener peso. A menudo se piensa que esto ocurre porque 'no hay gravedad' en el espacio, pero esto es un mito físico. A esa altitud, la gravedad terrestre es todavía el 90% de la que sentimos en la superficie. Los astronautas flotan porque están en un estado de **caída libre (Free Fall — el movimiento de un cuerpo donde la única fuerza que actúa sobre él es la gravedad; en órbita, un objeto cae hacia la Tierra pero se mueve horizontalmente tan rápido que la curvatura del planeta se aleja debajo de él, resultando en un descenso perpetuo sin impacto)** constante respecto a la Tierra.

Este entorno se define técnicamente como **microgravedad (Microgravity — condición en la que las personas u objetos parecen no tener peso; aunque hay gravedad, la aceleración de caída libre anula la sensación de peso; se llama 'micro' porque existen pequeñas perturbaciones gravitacionales o aceleraciones residuales de millonésimas de G)**. En estas condiciones, la **convección (Convection — el movimiento de fluidos causado por diferencias de densidad bajo la gravedad; el aire caliente sube porque es menos denso que el frío; en microgravedad, la convección se detiene, lo que permite observar procesos químicos y físicos —como la formación de cristales o la combustión— de forma puramente molecular)** se detiene. Sin convección, las llamas de fuego en la ISS son esferas azules perfectas y los cristales de proteínas crecen con una simetría y pureza imposibles de alcanzar en laboratorios terrestres, lo que permite avances críticos en medicina y ciencia de materiales.""",
    "1.23": """Nuestra biología es un producto directo de vivir en un entorno de **1G (One G — la aceleración estándar de la gravedad en la superficie de la Tierra, aproximadamente 9.81 m/s²; es la fuerza bajo la cual evolucionaron todos los sistemas biológicos terrestres)**. Cuando sacamos a un humano de este entorno por meses, el cuerpo comienza a atrofiarse. El sistema más afectado es el esquelético: los **osteoblastos (Osteoblasts — células responsables de la síntesis y mineralización del hueso para su crecimiento y reparación; requieren el estrés mecánico de la gravedad y el peso para activarse; sin este estímulo en el espacio, su actividad disminuye drásticamente)** dejan de recibir la señal de 'carga' y los huesos empiezan a desmineralizarse, perdiendo calcio a un ritmo de hasta un 1.5% mensual.

El sistema cardiovascular también sufre una **redistribución de fluidos (Fluid Shift — el desplazamiento del volumen sanguíneo y cefalorraquídeo hacia la parte superior del cuerpo en microgravedad; en la Tierra, la gravedad tira de los fluidos hacia las piernas; en el espacio, suben al torso y la cabeza, causando congestión nasal, inflamación facial y un aumento de la presión intracraneal)**. Esto puede causar el **síndrome VIIP (Visual Impairment and Intracranial Pressure — condición detectada en astronautas de misiones largas donde el aumento de presión en el cráneo aplana el globo ocular y presiona el nervio óptico, causando cambios en la visión que pueden ser permanentes)**. Para combatir estos efectos, los astronautas deben realizar ejercicio intensivo durante horas al día, usando dispositivos que simulan la carga gravitacional mediante resistencia mecánica, esencial para el éxito de futuras misiones tripuladas a Marte.""",
    "1.24": """Para que un cohete pueda abandonar la Tierra y viajar hacia otros mundos, debe alcanzar una velocidad crítica que le permita superar la atracción gravitatoria del planeta de forma definitiva. Esta es la **velocidad de escape (Escape Velocity — la velocidad mínima que un objeto sin propulsión adicional necesita para alejarse infinitamente de un cuerpo masivo; no depende de la masa del objeto que escapa, sino de la masa y el radio del planeta; para la Tierra, este valor es de 11.2 km/s o unos 40,320 km/h)**. Superar los 11.2 km/s requiere una cantidad inmensa de energía, lo que expone la **tiranía de la ecuación del cohete (Rocket Equation / Tsiolkovsky's Equation — formulada por Konstantin Tsiolkovsky en 1903; establece que para aumentar la velocidad de un cohete, hay que quemar combustible, pero ese combustible también tiene masa que hay que acelerar; esto genera un crecimiento exponencial de la masa del cohete respecto a la carga útil final)**.

Debido a esta limitación física, los ingenieros utilizan el **despegue por etapas (Staging — técnica de ingeniería donde un cohete se divide en secciones que se descartan una vez agotado su combustible; esto reduce la masa muerta que el resto del cohete debe acelerar, permitiendo alcanzar velocidades orbitales y de escape con mayor eficiencia)**. Además, las misiones interplanetarias a menudo emplean la **asistencia gravitatoria (Gravity Assist / Slingshot Maneuver — el uso del movimiento relativo y la gravedad de un planeta para alterar el camino y la velocidad de una nave espacial; permite ganar o perder energía 'gratis' sin gastar combustible, técnica vital para que sondas como las Voyager o la misión Juno alcancen las regiones exteriores del sistema solar)**. La velocidad de escape es el 'precio de la entrada' al sistema solar, y entenderla es fundamental para diseñar cualquier misión que aspire a convertir a la humanidad en una especie multiplanetaria."""
}

updated = 0
for ch in data['chapters']:
    for m in ch['modules']:
        if m['id'] in fullTexts:
            m['fullText'] = fullTexts[m['id']]
            updated += 1

with open(path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print(f"✅ {updated} módulos (1.22-1.24) actualizados correctamente.")

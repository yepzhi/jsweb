import json

path = '/Users/yepz/JSweb/data/modules.json'
with open(path, 'r', encoding='utf-8') as f:
    data = json.load(f)

fullTexts = {
"2.77": """En la fusión nuclear, el objetivo es unir los núcleos de hidrógeno más livianos para liberar energía. Pero no todos los tipos de hidrógeno son iguales. El candidato más prometedor para los reactores de fusión del futuro no es el hidrógeno ordinario, sino el **Deuterio**, un isótopo del hidrógeno con un protón y un neutrón adicional en su núcleo.

El Deuterio es notablemente abundante: aproximadamente 1 de cada 6,400 moléculas de agua del océano contiene deuterio en lugar de hidrógeno ordinario. Esto significa que los océanos de la Tierra son un depósito de combustible de fusión virtualmente inagotable. Si pudiéramos extraer y usar todo el deuterio de los océanos, tendríamos suficiente energía para alimentar a la civilización terrestre durante millones de años.

¿Por qué el Deuterio y no el hidrógeno ordinario para la fusión? Las reacciones D-T (Deuterio-Tritio) y D-D (Deuterio-Deuterio) tienen una **Tasa de Reacción** mucho más alta que la de protón-protón que ocurre en el Sol. El Sol tarda miles de millones de años en fusionar su hidrógeno porque la reacción protón-protón requiere que los dos protones se acerquen lo suficiente como para que la fuerza débil convierta uno en neutrón, un proceso rarísimo. El Deuterio ya tiene ese neutrón, haciéndolo mucho más reactivo.

En la reacción D-T: Deuterio + Tritio → Helio-4 + Neutrón libre + 17.6 MeV de energía. Esta es la reacción principal que el proyecto ITER busca sostener. El tritio es radiactivo y escaso, pero puede **reproducirse** dentro del propio reactor al irradiar litio con los neutrones que produce la fusión, creando un ciclo de combustible sustentable. Esta "cría de tritio" es uno de los desafíos técnicos más complejos del proyecto.

El Deuterio también se usa hoy en investigación científica. El "agua pesada" (D₂O, donde ambos hidrógenos son deuterio) es un moderador de neutrones más eficiente que el agua normal y se usa en algunos diseños de reactores de fisión (como el CANDU canadiense) para desacelerar los neutrones sin absorberlos, permitiendo usar uranio natural sin enriquecer.

En medicina, los compuestos marcados con Deuterio se usan en farmacología para estudiar la **Farmacocinética**: al reemplazar hidrógenos por deuterios en moléculas de fármacos, los científicos rastrean cómo se metaboliza el medicamento en el cuerpo, ya que el enlace C-D es más estable y difícil de romper que el C-H, alterando la vida media del fármaco.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.1** (Págs. 14–16)
**📐 NGSS: HS-PS1-8** — Desarrollar modelos para ilustrar los cambios en la composición del núcleo y la energía liberada en la fusión.
**📋 RENAC: ET005 · Física Nuclear Aplicada y Energía de Fusión**
**💡 Standards World:** Deuterio · Tritio · Fusión D-T · ITER · Agua Pesada · Isótopos · Cría de Tritio · Farmacocinética""",

"2.80": """En la búsqueda de temperaturas extremadamente bajas —las más frías alcanzadas en el universo observable— los científicos han desarrollado una técnica extraordinaria: el **Enfriamiento por Láser** o **Magnetic Cooling**. Este proceso, aparentemente paradójico (usar luz para enfriar materia), es la base de algunos de los avances más importantes de la física del siglo XXI.

¿Cómo puede la luz, que normalmente calienta las cosas, servir para enfriar? La clave está en el **Efecto Doppler** a escala atómica. Si un átomo se mueve hacia un rayo láser, los fotones del láser parecen tener mayor frecuencia desde el punto de vista del átomo (corrimiento Doppler azul). Si ajustamos el láser a una frecuencia ligeramente menor que la resonancia del átomo, solo los átomos que se mueven hacia el rayo absorberán los fotones, recibiendo un "golpe" que desacelera su movimiento. Al aplicar seis rayos láser desde todas las direcciones, atrapamos los átomos en una "melaza óptica" que los desacelera en todas las dimensiones.

Esta técnica permite alcanzar temperaturas de millonésimas de Kelvin, cerca del **Cero Absoluto** pero sin poder alcanzarlo. Para ir más lejos, se combina con el **Enfriamiento Adiabático Magnético**: una nube de átomos previamente enfriados por láser se atrapa en un campo magnético. Al reducir gradualmente la intensidad del campo, los átomos más energéticos escapan, llevándose la energía cinética consigo (como el vapor caliente que escapa de una taza de café). El proceso se llama "enfriamiento por evaporación".

Combinando estas técnicas, los físicos logran crear el **Condensado de Bose-Einstein (BEC)**: un estado de la materia donde un gas diluido se enfría tanto que todos los átomos colapsan en el mismo estado cuántico mínimo, comportándose como una sola "superpartícula" cuántica. El BEC fue predicho por Einstein y Satyendra Nath Bose en 1924 y finalmente creado en laboratorio en 1995 por Eric Cornell, Carl Wieman y Wolfgang Ketterle, quienes ganaron el **Nobel de Física 2001**.

El Magnetic Cooling y el BEC tienen aplicaciones revolucionarias. Son la base de los relojes atómicos más precisos del mundo, que pierden menos de un segundo cada 300 millones de años y que permiten la navegación GPS ultra precisa. También son fundamentales para la investigación en **Computación Cuántica**, donde los qubits necesitan operar a temperaturas cercanas al cero absoluto para mantener la coherencia cuántica.

Esta tecnología demuestra que los límites de lo posible en física no son los de la intuición cotidiana. Enfriar con luz, atrapar átomos con imanes, hacer que millones de partículas se comporten como una sola: el universo cuántico es más extraño y más útil de lo que cualquier generación anterior pudo imaginar.

---
**🔖 Bluebook v1 · Capítulo I, Sección 1.6** (Págs. 37–38)
**📐 NGSS: HS-PS2-5 · HS-PS3-4** — Planificar investigaciones para recolectar evidencias sobre campos magnéticos y transferencias de energía en sistemas cuánticos.
**📋 RENAC: EC009 · Física de Bajas Temperaturas y Tecnología Cuántica**
**💡 Standards World:** Magnetic Cooling · Enfriamiento Láser · Condensado de Bose-Einstein · Cero Absoluto · Efecto Doppler Atómico · Computación Cuántica · Nobel 2001 · Reloj Atómico"""
}

for ch in data['chapters']:
    for m in ch['modules']:
        if m['id'] in fullTexts:
            m['fullText'] = fullTexts[m['id']]

with open(path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

ch1_done = sum(1 for m in data['chapters'][0]['modules'] if 'fullText' in m)
ch1_total = len(data['chapters'][0]['modules'])
total = sum(1 for ch in data['chapters'] for m in ch['modules'] if 'fullText' in m)
print(f"✅ Cap I COMPLETO: {ch1_done}/{ch1_total} módulos")
print(f"   Total plataforma: {total} módulos con fullText")

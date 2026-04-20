# PENDIENTES DE REDACCIÓN — CAPÍTULOS II Y III
# JóvenesSTEM · Currículo STEM 213 módulos
# Última actualización: Abril 2026

---

## Contexto y Metodología de Redacción

Este documento es la guía de continuación para la generación del contenido `fullText` de los módulos de los Capítulos II y III del currículo JóvenesSTEM.

### ¿Qué es el fullText?
Cada módulo en `data/modules.json` tiene un campo `fullText` con texto de **900-1000 palabras** en estilo **divulgativo y storytelling**, siguiendo esta estructura:

1. **Gancho narrativo** — Primera oración impactante para capturar la atención.
2. **Estándar de Extensión**: **1000 palabras** promedio (mínimo 950). Esto asegura la meta de 50+ horas totales.
3. **Divulgación de Alto Impacto**: El contenido NO debe ser básico. Debe incluir datos curiosos, términos avanzados y explicaciones que sorprendan al lector.
4. **Formato Bilingüe y Conceptual**: 
    - Los términos técnicos o estándares clave deben ir en **negritas** y con su traducción al inglés entre paréntesis. Ejemplo: `**Agujero Negro (Black Hole)**`.
    - **Definiciones Inline**: Para conceptos complejos (ej. Singularidad, Entropía, Qubits), se debe añadir una breve descripción simplificada entre paréntesis inmediatamente después del término para evitar ambigüedades. Ejemplo: `**Singularidad (punto de densidad infinita donde las leyes de la física se rompen)**`.
5. **Footer Estándar**: Siempre con estos 4 marcadores (detectados por el parser del modal):

```
**🔖 Bluebook v1 · Capítulo X, Sección X.X — [Título]** (Págs. XX–XX)
**📐 NGSS: HS-XXX-X (Standard Description)** — [Descripción larga]
**📋 RENAC: EC009 · [Área temática]**
**💡 Standards World:** Concepto1 (Term1) · Concepto2 (Term2) · ...
```

> **IMPORTANTE sobre RENAC:** Si el módulo está alineado al sector tecnológico usar `ET002` (Telecomunicaciones) o `ET005` (Energía). Para ciencias usar `EC009`. Si el estándar RENAC específico no es claro, escribir: `📋 RENAC / SEP-CONOCER: Alineado en evaluación · [Área temática]`

### ¿Cómo se inyectan?
Usando scripts Python así:
```python
import json
path = '/Users/yepz/JSweb/data/modules.json'
with open(path) as f: data = json.load(f)
fullTexts = { "2.1": "...", "2.2": "..." }
for ch in data['chapters']:
    for m in ch['modules']:
        if m['id'] in fullTexts: m['fullText'] = fullTexts[m['id']]
with open(path, 'w') as f: json.dump(data, f, indent=2, ensure_ascii=False)
```

### Referencia de archivos clave
- **JSON fuente**: `/Users/yepz/JSweb/data/modules.json`
- **Libro fuente**: `/Users/yepz/JSweb/bookdatabase/extracted_content_chapters.txt`
- **Bluebook v2**: `/Users/yepz/JSweb/bookdatabase/Bluebook v2.md`
- **Scripts de inyección existentes**: `inject_batch1.py` → `inject_cap1_final.py`
- **Renderizado del modal**: `app.js` función `openReader()`
- **Renderizado tutor**: `tutor.js` sección de carga de `rawContent`

---

## Estado del Capítulo I (COMPLETADO ✅)

Cubren desde el Big Bang (1.1) hasta Agente de Cambio STEM (1.64), incluyendo los módulos intercalados 2.77 (Deuterio) y 2.80 (Magnetic Cooling).

### 🚀 Extensiones Bluebook v2 (Nuevos)
| ID | Título | Notas (v2) |
|----|--------|------------|
| 1.65 | Helio 3: Combustible Lunar | Minería en la Luna para fusión nuclear |
| 1.66 | Tritio y Fusión | El poder de las estrellas en la Tierra |
| 1.67 | Motores Espaciales de Fusión | Viajes interplanetarios rápidos |
| 1.68 | JWST Successor (2040) | La próxima gran mirada al cosmos profundo |
| 0.1 | 10 Mandamientos de la Ciencia | Los principios éticos y lógicos de la investigación |

---

## CAPÍTULO II — Pendientes de Redacción (76 módulos)

**Unidad 2: Tecnología (Aplicada e Innovación)**

Estos módulos siguen la cronología de la tecnología del Bluebook, desde IoT hasta CRISPR y Neuralink. Muchos son técnicos pero deben mantenerse accesibles para estudiantes de 12-18 años. Usar analogías con videojuegos, smartphones, YouTube cuando sea posible.

### Sección: IoT y Conectividad (2.1 – 2.5)

| ID | Título | Referencias Bluebook | NGSS sugerido |
|----|--------|---------------------|---------------|
| 2.1 | Internet de las Cosas (IoT) | Cap II, Sec 2.3 | HS-ETS1-2 |
| 2.2 | Sensores del Hogar | Cap II, Sec 2.3 | HS-PS4-5 |
| 2.3 | Ecosistemas Digitales | Cap II, Sec 2.3 | HS-ETS1-1 |
| 2.4 | El Espectro de Radio | Cap II, Sec 2.4 | HS-PS4-1 |
| 2.5 | Alcance vs Intensidad | Cap II, Sec 2.4 | HS-PS4-1 |

### Sección: Circuitos y Física de Ondas
| ID | Título | Notas |
|----|--------|-------|
| 2.78 | Circuitos LC: Ondas Vivas | Resonancia en circuitos LC, radio AM/FM |

### Sección: Evolución de Redes Móviles (2.6 – 2.17)
| ID | Título | Notas |
|----|--------|-------|
| 2.6 | Redes 1G: El Inicio (AMPS) | Historia del teléfono celular analógico |
| 2.7 | DynaTAC 8000X | El primer teléfono móvil comercial de Motorola (1983) |
| 2.8 | Redes 2G: La Era Digital (GSM) | Digitalización de voz, SMS, criptografía básica |
| 2.9 | GPRS y Datos (2.5G) | Primera internet móvil lenta |
| 2.10 | EDGE: Pre-3G (2.75G) | Mejora incremental antes del 3G real |
| 2.11 | Redes 3G: UMTS y CDMA | Video llamadas, internet real en el móvil |
| 2.12 | HSPA+: El 3.5G | La generación del smart entre 3G y 4G |
| 2.13 | 4G LTE | La revolución del streaming y las apps |
| 2.14 | Agregación de Portadoras | Técnica para aumentar velocidad en 4G/5G |
| 2.15 | Redes 5G | Ultra baja latencia, IoT masivo, mmWave |
| 2.16 | Latencia del 5G | Por qué 1ms cambia todo (autos autónomos, cirugía remota) |
| 2.17 | mmWave vs Sub-6GHz | Las dos frecuencias del 5G y sus trade-offs |

### Sección: WiFi y Bluetooth (2.18 – 2.23)
| ID | Título | Notas |
|----|--------|-------|
| 2.18 | WiFi Architecture | 802.11, puntos de acceso, routers |
| 2.19 | WiFi 6 y 6E | OFDMA, espacios de 6GHz, eficiencia en entornos densos |
| 2.20 | OFDMA y MU-MIMO | La física detrás de WiFi 6 |
| 2.21 | Bluetooth Architecture | Piconet, frequency hopping, BLE |
| 2.22 | Bluetooth LE | BLE para wearables y beacons |
| 2.23 | WPA2 y WPA3 | Seguridad de redes WiFi y por qué importa |

### Sección: MetaLenses y Óptica Plana
| ID | Título | Notas |
|----|--------|-------|
| 2.79 | MetaLenses: Óptica Plana | Nanoantenas planas que reemplazan lentes convexas |

### Sección: Historia y Tecnología de Pantallas (2.24 – 2.37)
| ID | Título | Notas |
|----|--------|-------|
| 2.24 | Historia: TV Mecánica | Nipkow disc, la primera TV mecánica |
| 2.25 | Philo Farnsworth y el CRT | Inventor olvidado de la TV electrónica |
| 2.26 | Guillermo G. Camarena | Inventor mexicano del sistema de TV en color |
| 2.27 | Monitor de Plasma | Gas noble ionizado para producir luz |
| 2.28 | LCD TFT | Cristales líquidos y transistores de película delgada |
| 2.29 | IPS vs VA | Comparativa de paneles LCD modernos |
| 2.30 | LED LCD Backlight | Retroiluminación LED directa y edge-lit |
| 2.31 | Full Array & Local Dimming | Control de zonas para mejor contraste |
| 2.32 | Quantum Dots (qDOT) | Nanocristales semiconductores para colores puros |
| 2.33 | OLED Architecture | Electroluminiscencia orgánica, cada pixel emite luz propia |
| 2.34 | MicroLED | El futuro de las pantallas: LEDs inorgánicos de micra de tamaño |
| 2.35 | Resolución: 4K y Píxeles | Densidad de píxeles, PPI, 8K |
| 2.36 | Refresh Rate (Hz) | 60Hz vs 120Hz vs 144Hz para gaming y video |
| 2.37 | HDR y Dolby Vision | Alto rango dinámico, 10-bit color |

### Sección: Física de la Luz y Cámaras (2.38 – 2.47)
| ID | Título | Notas |
|----|--------|-------|
| 2.38 | Física de la Luz | Reflexión, refracción, dispersión |
| 2.39 | Dualidad Onda-Partícula | Profundización en el contexto de cámaras |
| 2.40 | Biología: Conos y Bastones | Cómo el ojo humano percibe el color |
| 2.41 | Frame Rate & FPS | La ciencia del movimiento en video |
| 2.42 | Sensor CMOS | Cómo funciona el sensor de tu cámara |
| 2.43 | ISO y Sensibilidad | El ruido fotónico y la sensibilidad del sensor |
| 2.44 | OIS: Estabilización Mecánica | Giróscopos y actuadores para estabilizar imágenes |
| 2.45 | Lytro: Profundidad de Campo | Cámara plenóptica que captura el campo de luz completo |
| 2.46 | Lidar y ToF (3D) | Tiempo de vuelo para mapear el mundo en 3D |
| 2.47 | QIS (Quanta Image Sensor) | Sensor que detecta fotones individuales |

### Sección: Láseres y Fibra Óptica (2.48 – 2.49)
| ID | Título | Notas |
|----|--------|-------|
| 2.48 | LASER Physics | Emisión estimulada, coherencia, aplicaciones |
| 2.49 | Fibra Óptica | Reflexión total interna, ancho de banda, latencia |

### Sección: Historia de la Computación y Hardware (2.50 – 2.67)
| ID | Título | Notas |
|----|--------|-------|
| 2.50 | ENIAC: El Origen | Primera computadora electrónica programable (1945) |
| 2.51 | El Transistor (1947) | Bell Labs, el invento que cambió el mundo |
| 2.52 | Microprocesadores y SoC | Intel 4004 hasta el Apple M3 Ultra |
| 2.53 | CPU vs GPU | Diferencias arquitectónicas y para qué sirve cada uno |
| 2.54 | Nodos de Litografía (nm) | Lo que significan los "nm" en chips (7nm, 3nm, 2nm) |
| 2.55 | Ley de Moore | La profecía autocumplida y su declive |
| 2.56 | Retraso de Transmisión | Latencia en comunicación entre chips y en redes |
| 2.57 | FinFET: Transistores 3D | La solución a los límites 2D de los transistores |
| 2.58 | Jerarquía de Memoria | Registros → L1 → L2 → L3 → RAM → SSD |
| 2.59 | RAM DDR4 vs DDR5 | Diferencias técnicas y velocidad |
| 2.60 | GDDR: Memoria Gráfica | Por qué la GPU necesita su propia RAM |
| 2.61 | HDD: Discos Magnéticos | Platos magnéticos, cabezales, densidad de datos |
| 2.62 | SSD: Silencio Sólido | NAND Flash, celdas MLC/TLC/QLC |
| 2.63 | NVMe y PCIe Lanes | El protocolo que liberó la velocidad de los SSDs |
| 2.64 | Puertos: USB-C & Thunderbolt | Unificación de conectores y velocidades |
| 2.65 | Batería de Ion-Litio | Química, ciclos de carga, degradación |
| 2.66 | Baterías de Estado Sólido | El futuro de la energía portátil |
| 2.67 | MEMS: Micro-Máquinas | Acelerómetros, giroscopios, microspeakers |

### Sección: Materiales y Nanotecnología (2.68 – 2.74)
| ID | Título | Notas |
|----|--------|-------|
| 2.68 | Biometría: FaceID | Luz infraestructurada, Dot Projector, red neuronal |
| 2.69 | Silicio y Semiconductores | La física del semiconductor, dopaje, diodos |
| 2.70 | Grafeno: El Material 2D | Propiedades extraordinarias del carbono 2D |
| 2.71 | Nanotubos de Carbono | CNTs para transistores post-silicio |
| 2.72 | Gorilla Glass | Vidrio aluminosilicato tratado con iones de potasio |
| 2.73 | Nanomedicina | Nanopartículas para diagnóstico y drug delivery |
| 2.74 | CRISPR: Edición Genética | Cas9 como tijera molecular del ADN |

### Sección: Tecnología de Frontera y Ética (2.75 – 2.76)
| ID | Título | Notas |
|----|--------|-------|
| 2.75 | Chips Neurales (Neuralink) | Interface cerebro-computadora, electrodos, BCI |
| 2.76 | Ética STEM del Futuro | Responsabilidad del tecnólogo, regulación de IA, privacidad |

### Sección: Computación Cuántica (2.81 – 2.82)
| ID | Título | Notas |
|----|--------|-------|
| 2.81 | QBits: El Reinado de la Incertidumbre | Superposición, entrelazamiento y el qubit |
| 2.82 | SHA-256 vs Hardware Cuántico | Por qué la computación cuántica amenaza la criptografía actual |

---

## CAPÍTULO III — Pendientes de Redacción (72 módulos)

**Unidad 3: Ingeniería y Gran Lógica (Futuro y Código)**

Este capítulo abarca energía, biotecnología e ingeniería de software. Es el más técnico del currículo. Para los módulos de programación, usar ejemplos de código real breve (1-2 líneas) cuando ayude a la comprensión narrativa.

### Sección: Energía Alternativa y Radiación (3.1 – 3.7)
| ID | Título | Notas |
|----|--------|-------|
| 3.1 | Células de Combustible PEM | Electrólisis inversa, helio + O2 = agua + electricidad |
| 3.2 | Platino vs Nanotubos | Catalizadores para la célula PEM |
| 3.3 | Radiación Electromagnética | Recapitulación aplicada desde ingeniería |
| 3.4 | Radiación Ionizante | Tipos, dosis, unidades (Sievert, Gray) |
| 3.5 | Isótopos y Radiactividad | Aplicaciones industriales y médicas extendidas |
| 3.6 | Alpha Decay (Factor Q=20) | Cálculo de daño biológico de la radiación alfa |
| 3.7 | Beta Decay (Betavoltaicas) | Conversión de energía beta en electricidad |

### Sección: Biotecnología (3.10 – 3.15)
| ID | Título | Notas |
|----|--------|-------|
| 3.10 | CRISPR Cas9: Edición de Vida | Expansión técnica del módulo 2.74 con más ingeniería |
| 3.11 | El Proyecto Genoma Humano | Historia, logros e implicaciones de secuenciar los 3 mil millones de bases |
| 3.12 | Ingeniería Proteica (Proteoma) | Proteínas como máquinas moleculares, AlphaFold |
| 3.13 | Human Connectome Project | Mapeo de las conexiones neuronales del cerebro |
| 3.14 | Wearables y Salud (EKG) | Sensores corporales, Apple Watch EKG, oxímetros |
| 3.15 | Robótica: Boston Dynamics | Control, actuadores, percepción y IA en robots físicos |

### Sección: Fundamentos de Programación (3.20 – 3.25)
| ID | Título | Notas |
|----|--------|-------|
| 3.20 | Lenguaje Máquina (Binario) | Cómo el CPU ejecuta instrucciones en bits |
| 3.21 | Compiladores vs Intérpretes | La diferencia entre C++ y Python en ejecución |
| 3.22 | Lógica Algorítmica | Big O, algoritmos de sort, la mente del programador |
| 3.23 | Paradigma Estructurado | Programación secuencial, condicionales, bucles |
| 3.24 | POO (Orientada a Objetos) | Clases, objetos, herencia, polimorfismo |
| 3.25 | Programación Reactiva | Estado, observables, streams de datos |

### Sección: Historia Pioneros de la Computación (3.97 – 3.101)
| ID | Título | Notas |
|----|--------|-------|
| 3.97 | Babbage y la Máquina | Máquina diferencial y analítica, el primer CPU mecánico |
| 3.98 | Ada Lovelace: La Primera Coder | Algoritmo para la máquina de Babbage, nota G |
| 3.99 | Alan Turing y Enigma | Máquina Bombe, Turing completo, test de Turing |
| 3.100 | Grace Hopper y el Primer 'Bug' | Compilador A-0, el término "bug" viene de una polilla real |
| 3.101 | Margaret Hamilton y Apollo 11 | Software del módulo lunar, acuñó el término "software engineering" |

### Sección: Web y Frontend (3.30 – 3.34 y 3.40 – 3.44)
| ID | Título | Notas |
|----|--------|-------|
| 3.30 | Netscape y el Origen de JS | Brendan Eich, 10 días para crear JavaScript |
| 3.31 | HTML: El Esqueleto | Hipertexto, etiquetas semánticas, DOM |
| 3.32 | CSS: El Estilo | Cascada, especificidad, Flexbox, Grid |
| 3.33 | JS: La Interactividad | Event loop, callbacks, promesas, async/await |
| 3.34 | Internet vs La Web | TCP/IP, DNS, HTTP — son sistemas distintos |
| 3.40 | Frontend vs Backend | El cliente y el servidor: arquitectura web |
| 3.41 | Protocolo HTTP | Request-Response, headers, status codes |
| 3.42 | Request y Response | Cómo viaja una petición web |
| 3.43 | Métodos HTTP: CRUD | GET, POST, PUT, DELETE y su relación con bases de datos |
| 3.44 | API REST / RESTful | Contratos de interfaz entre sistemas |

### Sección: Motores y Frameworks (3.50 – 3.53)
| ID | Título | Notas |
|----|--------|-------|
| 3.50 | Motores de Navegador (V8) | JIT compilation, V8 de Chrome, SpiderMonkey |
| 3.51 | Motores de Renderizado | Blink, Gecko, WebKit — cómo el navegador dibuja la pantalla |
| 3.52 | El DOM y el VDOM | Árbol del documento y la solución de React con DOM virtual |
| 3.53 | Bibliotecas: JQuery | El origen de la manipulación del DOM simplificada |

### Sección: Arquitectura MVC (3.60 – 3.62)
| ID | Título | Notas |
|----|--------|-------|
| 3.60 | Modelo (Datos) | La capa de datos en MVC |
| 3.61 | Vista (Interfaz) | La capa de presentación |
| 3.62 | Controlador (Puente) | La lógica de negocio entre modelo y vista |

### Sección: Herramientas de Desarrollo (3.70 – 3.71)
| ID | Título | Notas |
|----|--------|-------|
| 3.70 | Git: Control de Versiones | Commits, branches, merge, GitHub |
| 3.71 | Visual Studio Code (IDE) | Extensiones, terminal integrada, debugging |

### Sección: Plataformas y Lenguajes (3.80 – 3.82 y 3.90 – 3.91)
| ID | Título | Notas |
|----|--------|-------|
| 3.80 | Python: Ciencia de Datos | NumPy, Pandas, Matplotlib — el stack de ciencia de datos |
| 3.81 | Desarrollo Móvil Nativo | Swift para iOS, Kotlin para Android |
| 3.82 | Híbrido: Flutter e Ionic | Un código para iOS y Android simultáneamente |
| 3.90 | WebAssembly (Wasm) | Ejecutar código C++/Rust en el navegador a velocidad nativa |
| 3.91 | Progressive Web Apps (PWA) | Apps web que funcionan offline como apps nativas |

### Sección: Lenguajes Especializados (3.35 – 3.37 y 3.45 – 3.48 y 3.55 – 3.57)
| ID | Título | Notas |
|----|--------|-------|
| 3.35 | C-Sharp (#) y .NET | Microsoft, Unity, aplicaciones enterprise |
| 3.36 | Unity: Motores de Juego | Game loops, física, shaders, scripting en C# |
| 3.37 | OpenGL: Gráficos 2D/3D | Pipeline gráfica, vértices, fragmentos, GPU |
| 3.45 | Computación Invisible | Sistemas embebidos, microcontroladores, firmware |
| 3.46 | C y C++: Los Cimientos | Memoria manual, punteros, el padre de todos los lenguajes de sistemas |
| 3.47 | Arduino: Hardware Libre | Prototipado físico con C++, el entry point del hardware |
| 3.48 | Rust: Seguridad de Memoria | Memory safety sin garbage collector |
| 3.55 | SQL: El Lenguaje de Datos | Consultas a bases de datos relacionales |
| 3.56 | Golang: El Lenguaje de Google | Concurrencia nativa, compilado, microservicios |
| 3.57 | TypeScript: JS Escalable | Tipado estático sobre JavaScript |

### Sección: Seguridad y Diseño (3.65 – 3.66 y 3.75 – 3.76)
| ID | Título | Notas |
|----|--------|-------|
| 3.65 | Seguridad Defensiva | Firewalls, parches, principio de mínimo privilegio |
| 3.66 | Hacker Ético (Ofensivo) | Pentesting, Bug Bounties, CVE |
| 3.75 | UX: User Experience | Investigación de usuario, flujos, pruebas de usabilidad |
| 3.76 | UI: User Interface | Sistemas de diseño, componentes, tokens de diseño |

### Sección: Tipos de Datos y Lógica (3.85 – 3.87)
| ID | Título | Notas |
|----|--------|-------|
| 3.85 | Integer vs Float | Números enteros, decimales, precisión y overflow |
| 3.86 | Strings y Booleanos | Manipulación de texto y lógica verdadero/falso |
| 3.87 | Ciclos: For y While | El lazo como herramienta fundamental de programación |

| 3.95 | Machine Learning (ML) | Tipos de aprendizaje, redes neuronales, entrenamiento |
| 3.96 | IA en tu Cámara | Segmentación de escena, bokeh artificial, Super Res Zoom |

### Sección: Innovación y Potencia (Bluebook v2)
| ID | Título | Notas |
|----|--------|-------|
| 3.102 | The Patent World | Propiedad intelectual, registro de inventos, patentes famosas |
| 3.103 | Electricidad de Potencia | Transformadores masivos, red eléctrica nacional, voltajes |
| 3.104 | Maravillas de la Electricidad | Fenómenos eléctricos extremos y aplicaciones industriales |

---

## Resumen de Pendientes

| Capítulo | Total módulos | Completados | **Pendientes** |
|----------|--------------|-------------|--------------|
| Cap I | 66 | **66** | 0 ✅ |
| Cap II | 76 | 0 | **76** |
| Cap III | 72 | 0 | **72** |
| **Total** | **213** | **66** | **148** |

---

## Orden de Prioridad Recomendado para Batches Futuros

1. **Cap II Sección Tecnológica** (2.1-2.23): IoT, espectro de radio y evolución de redes. Son los más solicitados por estudiantes modernos.
2. **Cap II Pantallas y Cámaras** (2.24-2.47): Alta demanda visual y narrativa.
3. **Cap II Hardware** (2.50-2.67): La columna vertebral del mundo digital.
4. **Cap III Pioneros** (3.97-3.101): Narrativas históricas fáciles de escribir con alto impacto emocional.
5. **Cap III Código** (3.20-3.25, 3.30-3.34): Los módulos más técnicos, requieren ejemplos de código.
6. **Cap III IA y ML** (3.95-3.96): Máximo interés de mercado.

---

*Generado por Antigravity AI · JóvenesSTEM Platform · 2026*

import json
import re

with open('data/modules.json', 'r') as f:
    data = json.load(f)

def update_standards(module, new_stds):
    if 'fullText' in module:
        # Update Standards World list
        match = re.search(r'Standards World:\*\*?\s*(.*)', module['fullText'])
        if match:
            existing_stds = [s.strip() for s in re.split(r'[·,]', match.group(1))]
            # Add only if not present
            for ns in new_stds:
                if ns.lower() not in [e.lower() for e in existing_stds]:
                    existing_stds.append(ns)
            
            new_line = "**💡 Standards World:** " + " · ".join(existing_stds)
            module['fullText'] = re.sub(r'\*\*?💡 Standards World:\*\*?.*', new_line, module['fullText'])

def update_footer(module, ngss=None, ec009=None, book=None):
    if 'fullText' in module:
        if ngss:
            if '📐 NGSS:' not in module['fullText']:
                module['fullText'] = module['fullText'].replace('🔖 Bluebook', f'📐 NGSS: {ngss} 🔖 Bluebook')
            else:
                module['fullText'] = re.sub(r'📐 NGSS:.*', f'📐 NGSS: {ngss}', module['fullText'])
        
        if ec009:
            if '📋 RENAC' not in module['fullText']:
                module['fullText'] = module['fullText'].replace('💡 Standards World', f'📋 RENAC: {ec009} 💡 Standards World')
            else:
                module['fullText'] = re.sub(r'📋 RENAC:.*', f'📋 RENAC: {ec009}', module['fullText'])

updates = {
    "1.0.1": {
        "stds": ["STEM", "Innovación", "Automatización", "IA", "Nanotecnología", "Biotecnología"],
        "ngss": "Science & Engineering Practices · Constructing Explanations",
        "ec009": "EC009 · Introducción a STEM"
    },
    "1.0.2": {
        "stds": ["Método Científico", "Falsabilidad", "Leyes Científicas", "Teoría Científica"],
        "ngss": "Scientific Literacy · Nature of Science",
        "ec009": "EC009 · Epistemología y Metodología"
    },
    "1.1.1": {"stds": ["Big Bang", "Plasma de Quarks-Gluones", "CBR"]},
    "1.1.2": {"stds": ["Quark", "Hadrones", "Leptones"]},
    "1.1.3": {"stds": ["Positrón", "Antimateria", "Violación CP"]},
    "1.7.2": {"stds": ["Protón", "Neutrón", "Electrón", "Átomo"]},
    "1.1.10": {"stds": ["Código Genético", "ADN", "CRISPR"]},
    "1.1.13": {"stds": ["Euarchonta", "Hominización", "Evolución"]},
    "1.7.5": {"stds": ["CERN", "LHC", "Física de Partículas"]},
    "1.8.8": {"stds": ["Termodinámica", "Entropía", "Leyes del Calor"]}
}

for chapter in data['chapters']:
    for module in chapter['modules']:
        if module['id'] in updates:
            upd = updates[module['id']]
            if "stds" in upd: update_standards(module, upd['stds'])
            update_footer(module, ngss=upd.get('ngss'), ec009=upd.get('ec009'))

with open('data/modules.json', 'w') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print("Modules updated with missing standards and metadata.")

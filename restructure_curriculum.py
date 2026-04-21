import json
import os

# Source path
MODULES_PATH = '/Users/yepz/JSweb/data/modules.json'

def get_id_range(start, end, prefix="1."):
    return [f"{prefix}{i}" for i in range(start, end + 1)]

def restructure():
    with open(MODULES_PATH, 'r', encoding='utf-8') as f:
        data = json.load(f)

    # 1. Identify "v2" modules to move to Chapter 4
    v2_ids = ["2.77", "2.78", "2.79", "2.80", "2.81", "2.82"]
    v2_modules = []

    # Backup modules before moving
    all_modules_flat = []
    for chapter in data['chapters']:
        all_modules_flat.extend(chapter['modules'])

    # Search and extract v2
    v2_extracts = [m for m in all_modules_flat if m['id'] in v2_ids]
    
    # Remove from original chapters
    for chapter in data['chapters']:
        chapter['modules'] = [m for m in chapter['modules'] if m['id'] not in v2_ids]

    # 2. Re-map Chapter 1
    ch1 = next(ch for ch in data['chapters'] if ch['id'] == "ch1")
    ch1_mapping = [
        ("1.1", get_id_range(1, 13, "1.")),
        ("1.2", get_id_range(14, 17, "1.")),
        ("1.3", get_id_range(18, 21, "1.")),
        ("1.4", ["1.25", "1.22", "1.23", "1.24", "1.26", "1.27"]),
        ("1.5", get_id_range(18, 32, "1.") if False else ["1.28", "1.29", "1.30", "1.31", "1.32"]),
        ("1.6", get_id_range(33, 40, "1.")),
        ("1.7", get_id_range(41, 46, "1.")),
        ("1.8", get_id_range(47, 54, "1.")),
        ("1.9", get_id_range(57, 60, "1.")),
        ("1.10", ["1.55", "1.56", "1.61"]),
        ("1.11", get_id_range(62, 64, "1."))
    ]

    new_ch1_modules = []
    for sec_idx, (sec_label, old_ids) in enumerate(ch1_mapping):
        sec_num = sec_idx + 1
        # Find these modules in the original ch1 set
        for mod_idx, oid in enumerate(old_ids):
            mod = next((m for m in ch1['modules'] if m['id'] == oid), None)
            if mod:
                new_id = f"1.{sec_num}.{mod_idx + 1}"
                mod['id'] = new_id
                # Fix title
                title_text = mod['title']
                if ' ' in title_text:
                    prefix_part, rest = title_text.split(' ', 1)
                    if prefix_part.replace('.','').isdigit():
                        title_text = rest
                mod['title'] = f"{new_id} {title_text}"
                new_ch1_modules.append(mod)
    ch1['modules'] = new_ch1_modules

    # 3. Re-map Chapter 2
    ch2 = next(ch for ch in data['chapters'] if ch['id'] == "ch2")
    ch2_mapping = [
        ("2.1", get_id_range(1, 3, "2.")),
        ("2.2", get_id_range(4, 17, "2.")),
        ("2.3", get_id_range(18, 23, "2.")),
        ("2.4", get_id_range(24, 37, "2.")),
        ("2.5", get_id_range(38, 47, "2.")),
        ("2.6", get_id_range(48, 57, "2.")),
        ("2.7", get_id_range(58, 64, "2.")),
        ("2.8", get_id_range(65, 68, "2.")),
        ("2.9", get_id_range(69, 76, "2."))
    ]

    new_ch2_modules = []
    for sec_idx, (sec_label, old_ids) in enumerate(ch2_mapping):
        sec_num = sec_idx + 1
        for mod_idx, oid in enumerate(old_ids):
            mod = next((m for m in ch2['modules'] if m['id'] == oid), None)
            if mod:
                new_id = f"2.{sec_num}.{mod_idx + 1}"
                mod['id'] = new_id
                title_text = mod['title']
                if ' ' in title_text:
                    prefix_part, rest = title_text.split(' ', 1)
                    if prefix_part.replace('.','').isdigit():
                        title_text = rest
                mod['title'] = f"{new_id} {title_text}"
                new_ch2_modules.append(mod)
    ch2['modules'] = new_ch2_modules

    # 4. Re-map Chapter 3
    ch3 = next(ch for ch in data['chapters'] if ch['id'] == "ch3")
    ch3_mapping = [
        ("3.1", ["3.1", "3.2"]),
        ("3.2", ["3.3", "3.4", "3.5", "3.6", "3.7"]),
        ("3.3", ["3.10", "3.11", "3.12", "3.13", "3.14", "3.15"]),
        ("3.4", ["3.20", "3.21", "3.22", "3.97", "3.98", "3.99", "3.100", "3.101"]),
        ("3.5", ["3.23", "3.24", "3.25", "3.30", "3.31", "3.32", "3.33", "3.34", "3.35", "3.36", "3.37"]),
        ("3.6", ["3.40", "3.41", "3.42", "3.43", "3.44", "3.45", "3.46", "3.47", "3.48", "3.50", "3.51", "3.52", "3.53"]),
        ("3.7", ["3.55", "3.56", "3.57", "3.60", "3.61", "3.62", "3.70", "3.71", "3.80", "3.81", "3.82", "3.90", "3.91", "3.65", "3.66", "3.75", "3.76", "3.85", "3.86", "3.87", "3.95", "3.96"])
    ]

    new_ch3_modules = []
    for sec_idx, (sec_label, old_ids) in enumerate(ch3_mapping):
        sec_num = sec_idx + 1
        for mod_idx, oid in enumerate(old_ids):
            mod = next((m for m in ch3['modules'] if m['id'] == oid), None)
            if mod:
                new_id = f"3.{sec_num}.{mod_idx + 1}"
                mod['id'] = new_id
                title_text = mod['title']
                if ' ' in title_text:
                    prefix_part, rest = title_text.split(' ', 1)
                    if prefix_part.replace('.','').isdigit():
                        title_text = rest
                mod['title'] = f"{new_id} {title_text}"
                new_ch3_modules.append(mod)
    ch3['modules'] = new_ch3_modules

    # 5. Build Chapter 4
    ch4 = next((ch for ch in data['chapters'] if ch['id'] == "ch4"), None)
    if not ch4:
        ch4 = {"id": "ch4", "title": "Capítulo IV · Nuevos Temas BlueBook v2", "modules": []}
        data['chapters'].append(ch4)

    # v2 items in requested order (already extracted into v2_extracts)
    # v2_ids = ["2.77", "2.80", "2.78", "2.79", "2.81", "2.82"]
    
    placeholders = [
        (1, "4.1.1", "2.77"), # Deuterio
        (2, "4.1.2", None),   # Combustibles
        (3, "4.1.3", "2.78"), # Circuitos LC
        (4, "4.1.4", None),   # Patent
        (5, "4.1.5", None),   # Electricity
        (6, "4.1.6", None),   # JWST
        (7, "4.1.7", None),   # Potencia
        (8, "4.1.8", "2.79"), # MetaLens
        (9, "4.1.9", "2.80"), # Magnetic Cooling
        (10, "4.1.10", None), # Mandamientos
        (11, "4.1.11", None), # English
        (12, "4.1.12", "2.81"), # QBits (and SHA-256)
        (13, "4.1.13", None), # Timeline
        (14, "4.1.14", None), # NGSS Eng
        (15, "4.1.15", None), # NGSS Phys
        (16, "4.1.16", None), # NGSS Life
        (17, "4.1.17", None)  # NGSS Space
    ]
    
    final_ch4 = []
    for p_idx, p_id, p_oid in placeholders:
        if p_oid:
            mod = next((m for m in v2_extracts if m['id'] == p_oid), None)
            if mod:
                mod['id'] = p_id
                title_text = mod['title']
                if ' ' in title_text:
                    prefix_part, rest = title_text.split(' ', 1)
                    if prefix_part.replace('.','').isdigit(): title_text = rest
                mod['title'] = f"{p_id} {title_text}"
                final_ch4.append(mod)
        else:
            titles = {
                "4.1.2": "Combustibles de Fusión y Motores Espaciales",
                "4.1.4": "The Patent World",
                "4.1.5": "Electricity Wonders",
                "4.1.6": "Next JWST Successor 2040",
                "4.1.7": "Eléctrica de Potencia",
                "4.1.10": "Top 10 Mandamientos de la Ciencia",
                "4.1.11": "English STEM Literacy",
                "4.1.13": "Timeline: Babbage to Python",
                "4.1.14": "NGSS: Engineering Design",
                "4.1.15": "NGSS: Physical Sciences Storyline",
                "4.1.16": "NGSS: Life Sciences Storyline",
                "4.1.17": "NGSS: Space Sciences Storyline"
            }
            final_ch4.append({
                "id": p_id,
                "title": f"{p_id} {titles.get(p_id, 'Nuevo Tema')}",
                "duration": "15 min",
                "fullText": "Próximamente..."
            })
    
    ch4['modules'] = final_ch4

    # Save
    with open(MODULES_PATH, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print("Restructuring complete!")

if __name__ == "__main__":
    restructure()

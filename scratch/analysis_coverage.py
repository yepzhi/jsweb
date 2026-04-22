import json
import re

# Load modules.json
with open('data/modules.json', 'r') as f:
    data = json.load(f)

# Extract Standards World from modules (Chapter Intro and Chapter I)
site_standards = set()
module_data = {}

for chapter in data['chapters']:
    if chapter['id'] in ['ch_intro', 'ch1']:
        for m in chapter['modules']:
            mid = m['id']
            # Get standards from fullText or alignmentFooter or keyPoints
            m_stds = []
            
            # Check for "Standards World:" in fullText
            if 'fullText' in m:
                match = re.search(r'Standards World:\*\*?\s*(.*)', m['fullText'])
                if match:
                    stds = [s.strip() for s in re.split(r'[·,]', match.group(1))]
                    m_stds.extend(stds)
            
            # Also check alignmentFooter
            if 'alignmentFooter' in m:
                # Sometimes standards are here too
                pass # Already mostly in fullText for HIFI
            
            # Use keyPoints as fallback/addition
            if 'keyPoints' in m:
                m_stds.extend(m['keyPoints'])
                
            module_data[mid] = {
                "title": m['title'],
                "standards": [s for s in m_stds if s],
                "has_ref": "Bluebook" in m.get('alignmentFooter', '') or "Bluebook" in m.get('fullText', '') or "bookReference" in m,
                "has_ngss": "NGSS" in m.get('alignmentFooter', '') or "NGSS" in m.get('fullText', ''),
                "has_ec009": "EC009" in m.get('alignmentFooter', '') or "EC009" in m.get('fullText', '')
            }
            for s in m_stds:
                site_standards.add(s.lower())

# Expected standards from book (Chapter I summary)
book_standards_ch1 = [
    "Átomo", "Elemento", "Protón", "Neutrón", "Electrón", "Quark", "Fotón", 
    "Positrón", "Antimateria", "CBR", "CERN", "Fusión", "Disco de Acreción", 
    "Molécula Orgánica", "Código Genético", "Carbohidratos", "Lípidos", 
    "Ácidos Nucleicos", "ADN", "Nucleótidos", "Euarchonta"
]

# Check coverage
missing = [s for s in book_standards_ch1 if s.lower() not in site_standards]

print("--- COVERAGE ANALYSIS ---")
print(f"Missing from book's Ch1 list: {missing}")

print("\n--- REFERENCE AUDIT (Chapter I) ---")
for mid in sorted(module_data.keys()):
    if mid.startswith("1.") or mid.startswith("ch_intro"):
        m = module_data[mid]
        status = []
        if not m['has_ref']: status.append("MISSING BOOK REF")
        if not m['has_ngss']: status.append("MISSING NGSS")
        if not m['has_ec009']: status.append("MISSING EC009")
        
        if status:
            print(f"{mid} ({m['title']}): {', '.join(status)}")
        else:
            # print(f"{mid}: OK")
            pass

print("\n--- SITE STRUCTURE AUDIT ---")
# Check if 1.65, etc exist in any chapter
all_ids = []
for c in data['chapters']:
    for m in c['modules']:
        all_ids.append(m['id'])

for target in ["1.65", "1.66", "1.67", "1.68", "0.1"]:
    if target in all_ids:
        print(f"ID {target} FOUND in site (not moved or still using old ID)")
    else:
        # Check if titles exist elsewhere
        found = False
        for c in data['chapters']:
            for m in c['modules']:
                if any(kw in m['title'] for kw in ["Helio 3", "Tritio", "JWST Successor", "Mandamientos"]):
                    print(f"TITLE MATCH for '{target}': Found as {m['id']} - {m['title']}")
                    found = True
                    break
        if not found:
            print(f"ID {target} NOT FOUND by ID or Title")

import json

with open('/Users/yepz/JSweb/data/modules.json', 'r') as f:
    data = json.load(f)

for chapter in data['chapters']:
    print(f"\n### {chapter['title']} ({chapter['id'].upper()})")
    print("| ID | Título | Estado |")
    print("|----|--------|--------|")
    for mod in chapter['modules']:
        status = "✅" if "fullText" in mod and len(mod['fullText']) > 500 else "❌"
        # Special case for "Próximamente"
        if mod.get('fullText') == "Próximamente...":
            status = "❌"
        print(f"| {mod['id']} | {mod['title']} | {status} |")

import json

with open('data/modules.json', 'r') as f:
    data = json.load(f)

results = {}
for chapter in data['chapters']:
    if chapter['id'] == 'ch2':
        for module in chapter['modules']:
            results[module['id']] = {
                "words": len(module.get('fullText', '').split()),
                "hifi": len(module.get('fullText', '').split()) >= 1000
            }

print(json.dumps(results, indent=2))

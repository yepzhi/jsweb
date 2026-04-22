import json

with open('data/modules.json', 'r') as f:
    data = json.load(f)

results = {}
for chapter in data['chapters']:
    if chapter['id'] in ['ch1', 'ch_intro']:
        for module in chapter['modules']:
            results[module['id']] = {
                "words": len(module['fullText'].split()),
                "hifi": len(module['fullText'].split()) >= 1000
            }

print(json.dumps(results, indent=2))

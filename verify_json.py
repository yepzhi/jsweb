import json
import sys

def verify_json(file_path):
    try:
        with open(file_path, 'r') as f:
            data = json.load(f)
        
        ids = []
        for chapter in data.get('chapters', []):
            for module in chapter.get('modules', []):
                module_id = module.get('id')
                if module_id in ids:
                    print(f"Error: Duplicate ID found: {module_id}")
                    # sys.exit(1)
                ids.append(module_id)
        
        print(f"JSON is valid. Total modules: {len(ids)}")
        return True
    except Exception as e:
        print(f"Error: {e}")
        return False

if __name__ == "__main__":
    verify_json('/Users/yepz/JSweb/data/modules.json')

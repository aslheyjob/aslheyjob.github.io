import csv
import json

js_path = r'c:\Users\Val\Desktop\aslhey\aslheyjob.github.io\js\products.js'
csv_path = r'c:\Users\Val\Desktop\aslhey\aslheyjob.github.io\data.csv'

objects = []
current_id = 254

with open(csv_path, 'r', encoding='utf-8') as f:
    reader = csv.reader(f)
    for row in reader:
        if not row: continue
        name = row[1].replace('"', '\\"')
        link = row[8] # shortlink
        
        # image can be left empty as it is not provided
        obj = f'''    {{
        "id": {current_id},
        "name": "{name}",
        "category": "shopee",
        "price": 0.00,
        "oldPrice": null,
        "description": "Oferta Shopee. Clique para conferir.",
        "image": "",
        "link": "{link}",
        "highlight": false
    }}'''
        objects.append(obj)
        current_id += 1

with open(js_path, 'r', encoding='utf-8') as f:
    content = f.read()

if "\n];" in content:
    idx = content.rfind("\n];")
    new_content = content[:idx] + ",\n" + ",\n".join(objects) + "\n];" + content[idx+3:]
else:
    idx = content.rfind("];")
    new_content = content[:idx] + ",\n" + ",\n".join(objects) + "\n];" + content[idx+2:]

with open(js_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Added {len(objects)} products.")

const fs = require('fs');
const readline = require('readline');

const js_path = 'c:\\Users\\Val\\Desktop\\aslhey\\aslheyjob.github.io\\js\\products.js';
const csv_path = 'c:\\Users\\Val\\Desktop\\aslhey\\aslheyjob.github.io\\data.csv';

let current_id = 254;
const objects = [];

const fileStream = fs.createReadStream(csv_path);

const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
});

rl.on('line', (line) => {
    if (!line.trim()) return;
    // Parse CSV line simply: it uses commas, but some names might be quoted or not.
    // We can just use a simple regex split for CSV
    const row = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || line.split(',');

    // A simpler strategy: since the provided format doesn't have commas inside the string fields except price (like "31,90")
    // Let's just do a basic split by comma. But price is quoted e.g. "31,90".
    // Let's use string manipulation:
    let parts = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
        if (line[i] === '"') {
            inQuotes = !inQuotes;
        } else if (line[i] === ',' && !inQuotes) {
            parts.push(current);
            current = '';
        } else {
            current += line[i];
        }
    }
    parts.push(current);

    const name = parts[1] ? parts[1].replace(/"/g, '\\"') : '';
    const link = parts[8] || parts[parts.length - 1]; // short link is last or 8th

    const obj = `    {
        "id": ${current_id},
        "name": "${name}",
        "category": "shopee",
        "price": 0.00,
        "oldPrice": null,
        "description": "Oferta Shopee. Clique para conferir.",
        "image": "",
        "link": "${link}",
        "highlight": false
    }`;

    objects.push(obj);
    current_id++;
});

rl.on('close', () => {
    let content = fs.readFileSync(js_path, 'utf8');
    const insertText = objects.join(',\n');

    if (content.includes('\n];')) {
        const idx = content.lastIndexOf('\n];');
        content = content.slice(0, idx) + ',\n' + insertText + '\n];' + content.slice(idx + 3);
    } else {
        const idx = content.lastIndexOf('];');
        content = content.slice(0, idx) + ',\n' + insertText + '\n];' + content.slice(idx + 2);
    }

    fs.writeFileSync(js_path, content, 'utf8');
    console.log(`Added ${objects.length} products.`);
});

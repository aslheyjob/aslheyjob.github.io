const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../js/products.js');

try {
    const originalContent = fs.readFileSync(filePath, 'utf8');

    // Function to fix string if it looks like Mojibake
    const fixMojibake = (str) => {
        try {
            // Try to reverse the double-encoding
            // Identify if the string typically contains Mojibake patterns
            if (!/[\u00C0-\u00FF]/.test(str)) return str; // Optimization: only process if has high-bit chars

            const buffer = Buffer.from(str, 'binary');
            const decoded = buffer.toString('utf8');

            // Heuristic: If valid UTF-8 (no replacement chars) and different, accept it.
            // Using \uFFFD is the standard replacement char.
            if (!decoded.includes('\uFFFD') && decoded !== str) {
                return decoded;
            }
        } catch (e) {
            // ignore
        }
        return str;
    };

    // We process line by line to be safe, or just the values?
    // Processing the whole file content might be risky if there are random bytes.
    // However, JS source code is mostly ASCII.
    // The Mojibake is essentially in the string literals.

    // Let's replace line by line.
    const lines = originalContent.split(/\r?\n/);
    const fixedLines = lines.map(line => {
        // Attempt to fix the whole line.
        // If the line contains "name": "...", checking the whole line might be fine 
        // because "name": "..." contains ASCII keys.
        // ASCII chars (0-127) are the same in UTF-8 and Latin1.
        // So fixing the whole line works for ASCII parts too!
        // Buffer.from("abc", 'binary') -> <61 62 63> -> utf8 "abc".
        return fixMojibake(line);
    });

    fs.writeFileSync(filePath, fixedLines.join('\n'), 'utf8');
    console.log('Encoding fix complete.');

} catch (e) {
    console.error('Error:', e);
}

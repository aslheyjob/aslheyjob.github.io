const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../js/products.js');

try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Extract the array part safely
    const startMarker = 'window.products = [';
    const endMarker = '];';
    const startIndex = content.indexOf(startMarker);
    const endIndex = content.lastIndexOf(endMarker);

    if (startIndex === -1 || endIndex === -1) {
        console.error('Could not find window.products array');
        process.exit(1);
    }

    const arrayStr = content.substring(startIndex + startMarker.length, endIndex);

    // Evaluate the array string to checking validity (using Function constructor is safer than eval for local scripts, but JSON.parse is best if strict JSON)
    // Since the file is JS objects (keys not quoted?), we can't use JSON.parse directly if keys aren't quoted.
    // However, looking at the previous file content, keys ARE quoted ("id": 106).
    // The previous append might have been loose.
    // Let's use a regex approach to just formatting or try to eval it.

    // Function wrap to evaluate the array
    const products = new Function('return [' + arrayStr + ']')();

    // Reformat
    const formattedArray = JSON.stringify(products, null, 4);

    // Reconstruct file
    const newContent = content.substring(0, startIndex + startMarker.length) +
        '\n' + formattedArray.substring(1, formattedArray.length - 1) + // remove [ and ]
        '\n' + content.substring(endIndex);

    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('Successfully formatted products.js');

} catch (e) {
    console.error('Error formatting:', e);
}

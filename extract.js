const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '..', 'Frame 2.svg');
const publicDir = path.join(__dirname, 'public');

if (!fs.existsSync(publicDir)){
    fs.mkdirSync(publicDir, { recursive: true });
}

console.log('Reading SVG...');
const svgContent = fs.readFileSync(svgPath, 'utf8');

console.log('Extracting Base64 image...');
const searchStr = 'xlink:href="data:image/png;base64,';
const startIndex = svgContent.indexOf(searchStr);

if (startIndex !== -1) {
    const base64Start = startIndex + searchStr.length;
    const endIndex = svgContent.indexOf('"', base64Start);
    const base64Data = svgContent.substring(base64Start, endIndex);
    fs.writeFileSync(path.join(publicDir, 'bg.png'), base64Data, 'base64');
    console.log('Successfully saved bg.png');
} else {
    console.log('Could not find base64 image in SVG.');
}

console.log('Extracting foreground overlay...');
const lines = svgContent.split('\n');
const pathLines = lines.filter(line => line.includes('<path') && line.includes('fill="white"'));
if (pathLines.length > 0) {
    const combinedPaths = pathLines.join('\n');
    const newSvg = `<svg width="1098" height="730" viewBox="0 0 1098 730" fill="none" xmlns="http://www.w3.org/2000/svg">\n${combinedPaths}\n</svg>`;
    fs.writeFileSync(path.join(publicDir, 'foreground.svg'), newSvg, 'utf8');
    console.log('Successfully saved foreground.svg');
} else {
    console.log('Could not find foreground paths.');
}

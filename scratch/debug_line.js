const fs = require('fs');
const content = fs.readFileSync('d:\\harmaintravels\\app\\umrah-taxi-services\\UmrahTaxiPageClient.tsx', 'utf8');
const lines = content.split('\n');
const line316 = lines[315]; // 0-indexed
console.log(`Line 316 content: "${line316}"`);
console.log(`Line 316 length: ${line316.length}`);
for (let i = 0; i < line316.length; i++) {
    console.log(`Char ${i}: ${line316.charCodeAt(i)} ('${line316[i]}')`);
}

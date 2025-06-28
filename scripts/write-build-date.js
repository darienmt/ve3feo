const fs = require('fs');
const path = require('path');

const buildDate = new Date().toISOString();
const outPath = path.join(__dirname, '../src/build-date.json');

fs.writeFileSync(outPath, JSON.stringify({ buildDate }, null, 2));
console.log('Build date written:', buildDate);

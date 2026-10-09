const fs = require('fs');
let c = fs.readFileSync('src/data/vehicles.ts', 'utf8');
c = c.replace(/avif-alpha'/g, "avif-alpha.avif'");
c = c.replace(/avif-alpha"/g, 'avif-alpha.avif"');
fs.writeFileSync('src/data/vehicles.ts', c);
console.log('Updated vehicles.ts');

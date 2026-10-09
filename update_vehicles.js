
const fs = require('fs');
const path = 'D:/car-dealer/public/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors';
const files = fs.readdirSync(path);

const colorMap = {};
files.forEach(f => {
  let match = f.match(/^([a-zA-Z0-9]+)-(\d+)-(\d+)_/);
  if (!match) match = f.match(/^([a-zA-Z0-9]+)-(\d+)_/);
  if (match) {
    const color = match[1];
    const frame = parseInt(match[2]);
    if (!colorMap[color]) colorMap[color] = [];
    colorMap[color].push({ frame, file: f });
  }
});
Object.keys(colorMap).forEach(c => colorMap[c].sort((a,b) => a.frame - b.frame));
const getArr = (c) => {
  const m = Object.keys(colorMap).filter(k => k.toLowerCase() === c.toLowerCase().replace(/[^a-z]/g, ''));
  if (m.length > 0 && colorMap[m[0]].length >= 35) {
     return colorMap[m[0]].slice(0, 36).map(obj => '/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/' + obj.file);
  }
  return [];
};

let content = fs.readFileSync('D:/car-dealer/src/data/vehicles.ts', 'utf8');

// Use string replace instead of rebuilding everything
// First we will add hasDayNight and rotationArray to VehicleColor interface if not there
if (!content.includes('hasDayNight?: boolean;')) {
    content = content.replace('hex: string;', 'hex: string;\n  rotationArray?: string[];\n  hasDayNight?: boolean;');
}

const colorsToReplace = [
  'Dandeli Drizzle', 'Pristine White', 'Atlas Black', 'Daytona Grey', 'Sunlit Yellow', 
  'Oberon Black', 'Cosmic Gold', 'Fearless Red', 'Atomic Orange', 'Meteor Bronze', 
  'Opera Blue', 'High Street Gold', 'Flame Red', 'Opal White', 'Pure Grey', 'Virtual Sunrise'
];

colorsToReplace.forEach(c => {
  const arr = getArr(c);
  // Find { name: 'Color', hex: '#...' } and replace with { name: 'Color', hex: '#...', rotationArray: [...], hasDayNight: ... }
  const regex = new RegExp('{ *name: *\\\'' + c + '\\\'.*?hex: *\\\'.*?\\\' *(?:, *rotationArray: *\\[.*?\\])? *(?:, *hasDayNight: *(?:true|false))? *}', 'g');
  
  content = content.replace(regex, (match) => {
     const hexMatch = match.match(/hex: *\'([^\']+)\'/);
     const hex = hexMatch ? hexMatch[1] : '#FFFFFF';
     if (arr.length > 0) {
        return '{ name: \'' + c + '\', hex: \'' + hex + '\', rotationArray: ' + JSON.stringify(arr) + ' }';
     } else {
        return '{ name: \'' + c + '\', hex: \'' + hex + '\', rotationArray: [], hasDayNight: true }';
     }
  });
});

fs.writeFileSync('D:/car-dealer/src/data/vehicles.ts', content);
console.log('vehicles.ts successfully patched!');


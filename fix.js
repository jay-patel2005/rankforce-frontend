const fs = require('fs');
const path = require('path');
const dir = 'd:/automytee/jd/rankwithjd/client/src/components/sections/services';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
files.forEach(f => {
  const filePath = path.join(dir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/ease:\s*\"([a-zA-Z]+)\"/g, 'ease: \"$1\" as any');
  fs.writeFileSync(filePath, content);
});
console.log('Fixed framer-motion ease types');

const fs = require('fs');
const path = require('path');

const root = __dirname;
const dist = path.join(root, 'dist');
const pub = path.join(root, 'public');

[dist, pub].forEach(target => {
  if (!fs.existsSync(target)) fs.mkdirSync(target, { recursive: true });
  fs.copyFileSync(path.join(root, 'index.html'), path.join(target, 'index.html'));
  ['css', 'js', 'assets'].forEach(dir => {
    const srcDir = path.join(root, dir);
    const destDir = path.join(target, dir);
    if (fs.existsSync(srcDir)) {
      fs.cpSync(srcDir, destDir, { recursive: true });
    }
  });
});

console.log('Build completed: files exported to dist/ and public/');

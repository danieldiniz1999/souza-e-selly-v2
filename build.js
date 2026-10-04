const fs = require('fs');
const path = require('path');

const root = __dirname;
const dist = path.join(root, 'dist');
const pub = path.join(root, 'public');

[dist, pub].forEach(target => {
  if (!fs.existsSync(target)) fs.mkdirSync(target, { recursive: true });

  ['index.html', '404.html'].forEach(file => {
    const src = path.join(root, file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(target, file));
    }
  });

  ['css', 'js', 'assets'].forEach(dir => {
    const srcDir = path.join(root, dir);
    const destDir = path.join(target, dir);
    if (fs.existsSync(srcDir)) {
      fs.cpSync(srcDir, destDir, { recursive: true, force: true });
    }
  });
});

console.log('Build completed: all static files mirrored to dist/ and public/');

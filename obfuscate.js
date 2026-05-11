const fs = require('fs');
const path = require('path');
const JavaScriptObfuscator = require('javascript-obfuscator');

const srcDir = path.join(__dirname, '_src');
const destDir = __dirname;

// Archivos principales con propiedad intelectual de JSweb
const filesToObfuscate = ['app.js', 'tutor.js', 'cert.js', 'progress.js', 'tts.js', 'auth.js'];

if (!fs.existsSync(srcDir)) {
  console.log('Creando directorio _src/ y moviendo archivos originales...');
  fs.mkdirSync(srcDir);
  
  filesToObfuscate.forEach(file => {
    const originalPath = path.join(destDir, file);
    const newPath = path.join(srcDir, file);
    if (fs.existsSync(originalPath)) {
      fs.copyFileSync(originalPath, newPath);
      console.log(`✅ Movido ${file} a _src/${file}`);
    }
  });
  console.log('\\n[!] Los archivos originales ahora viven en _src/. Desde ahora debes editar esos archivos.\\n');
}

filesToObfuscate.forEach(file => {
  const srcPath = path.join(srcDir, file);
  const destPath = path.join(destDir, file);
  
  if (fs.existsSync(srcPath)) {
    console.log(`Ofuscando ${file}...`);
    const code = fs.readFileSync(srcPath, 'utf8');
    
    const obfuscationResult = JavaScriptObfuscator.obfuscate(code, {
      compact: true,
      controlFlowFlattening: true,
      controlFlowFlatteningThreshold: 0.5,
      deadCodeInjection: false,
      debugProtection: false,
      disableConsoleOutput: false,
      identifierNamesGenerator: 'hexadecimal',
      log: false,
      numbersToExpressions: true,
      renameGlobals: false,
      selfDefending: true,
      simplify: true,
      splitStrings: true,
      splitStringsChunkLength: 15,
      stringArray: true,
      stringArrayCallsTransform: true,
      stringArrayEncoding: ['base64'],
      stringArrayIndexShift: true,
      stringArrayRotate: true,
      stringArrayShuffle: true,
      stringArrayWrappersCount: 1,
      stringArrayWrappersType: 'variable',
      stringArrayThreshold: 0.75,
      unicodeEscapeSequence: false
    });
    
    fs.writeFileSync(destPath, obfuscationResult.getObfuscatedCode());
    console.log(`🚀 Listo: ${file} ofuscado en la raíz.`);
  }
});

console.log('\\n✨ Proceso de ofuscación completado. Recuerda usar npm run build cuando modifiques los archivos en _src/');

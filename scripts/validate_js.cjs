const fs = require('fs');
const acorn = require('acorn');

const moduleFiles = [
  '_src/app.js',
  '_src/auth.js',
  '_src/cert.js',
  '_src/progress.js',
  '_src/tts.js',
  '_src/tutor.js',
  'cloudflare_worker.js'
];

const scriptFiles = [
  'obfuscate.js',
  'check_login.js'
];

let failed = false;

function validate(file, sourceType) {
  try {
    const code = fs.readFileSync(file, 'utf8');
    acorn.parse(code, {
      ecmaVersion: 'latest',
      sourceType,
      allowHashBang: true
    });
    console.log(`OK ${file}`);
  } catch (err) {
    failed = true;
    console.error(`FAIL ${file}: ${err.message}`);
  }
}

moduleFiles.forEach((file) => validate(file, 'module'));
scriptFiles.forEach((file) => validate(file, 'script'));

process.exit(failed ? 1 : 0);

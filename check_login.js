const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err.toString()));
  
  await page.goto('https://yepzhi.com/jsweb/login', { waitUntil: 'networkidle2' });
  
  // Wait a bit
  await new Promise(r => setTimeout(r, 2000));
  
  const content = await page.content();
  console.log("Has clerk mounted?", content.includes('clerk-modal'));
  
  await browser.close();
})();

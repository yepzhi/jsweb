const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  console.log("Checking https://yepzhi.com/jsweb/login...");
  
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err.toString()));
  
  await page.goto('https://yepzhi.com/jsweb/login', { waitUntil: 'networkidle2' });
  
  // Wait a bit more for Clerk
  await new Promise(r => setTimeout(r, 5000));
  
  const content = await page.content();
  console.log("Container innerHTML:", await page.evaluate(() => document.getElementById('clerk-sign-in')?.innerHTML));
  
  await browser.close();
})();

import puppueteer from 'puppeteer';

(async () => {
  const browser = await puppueteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.com');
  await page.screenshot({ path: 'google.png' });

  await browser.close();
})();

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  
  console.log('Navigating to https://tata.cars/ ...');
  await page.goto('https://tata.cars/', { waitUntil: 'networkidle2', timeout: 60000 });
  
  await new Promise(r => setTimeout(r, 5000));
  
  const bodyHandle = await page.$('body');
  const { height } = await bodyHandle.boundingBox();
  await bodyHandle.dispose();

  const viewportHeight = 1080;
  const scrollIncrement = viewportHeight * 0.7;
  let currentPosition = 0;
  let screenshotIndex = 1;

  while (currentPosition < height) {
    await page.evaluate((y) => window.scrollTo(0, y), currentPosition);
    await new Promise(r => setTimeout(r, 1500));
    
    await page.screenshot({ path: `artifacts/reference-screenshots/homepage_desktop_part${screenshotIndex}.png` });
    
    console.log(`Captured homepage part ${screenshotIndex}`);
    currentPosition += scrollIncrement;
    screenshotIndex++;
    if (screenshotIndex > 30) break;
  }

  console.log('Navigating to cars listing...');
  await page.goto('https://tata.cars/cars', { waitUntil: 'networkidle2', timeout: 60000 }).catch(e => console.log('Cars page err', e));
  await new Promise(r => setTimeout(r, 3000));
  await page.screenshot({ path: `artifacts/reference-screenshots/cars_listing.png`, fullPage: true });

  await browser.close();
  console.log('Screenshots captured successfully.');
})();

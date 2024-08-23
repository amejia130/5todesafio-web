const puppeteer = require('puppeteer');
const { PercySnapshot } = require('@percy/jest');

describe('Visual Regression Tests', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Homepage should match the snapshot', async () => {
    await page.goto('https://amazon.com');
    const screenshot = await page.screenshot();
    PercySnapshot('Homepage');
  });
});

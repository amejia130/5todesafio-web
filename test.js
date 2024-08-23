const puppeteer = require('puppeteer');
const percySnapshot = require('@percy/puppeteer');

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
    await page.goto('https://example.com');
    await percySnapshot(page, 'Homepage');
  });
});

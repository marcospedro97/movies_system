// import faker from 'faker';
import puppetter from 'puppeteer';

describe('Index load', () => {
    test('successfully', async () =>{
        const browser = await puppetter.launch();
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/')
        await page.waitForSelector('#root')
        const content = await page.$('h3');
        expect(content).toContain('Guia do mochileiro das galaxias')
    })
})
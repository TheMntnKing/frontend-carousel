#!/usr/bin/env node
import { createRequire } from 'module';
import { execSync } from 'child_process';
import { readFileSync, unlinkSync } from 'fs';
import { resolve } from 'path';

// Resolve playwright: local first, then global
let pw;
try {
    pw = await import('playwright');
} catch {
    try {
        const globalRoot = execSync('npm root -g', { encoding: 'utf-8' }).trim();
        const require = createRequire(`file://${globalRoot}/`);
        pw = require('playwright');
    } catch {
        console.error('Playwright not found. Install it: npm install -g playwright && npx playwright install chromium');
        process.exit(1);
    }
}

const { chromium } = pw;
const input = resolve(process.argv[2]);
const output = resolve(process.argv[3]);
const slideSize = 1080;

const browser = await chromium.launch();
const page = await browser.newPage();

await page.goto(`file://${input}`, { waitUntil: 'networkidle' });

// Wait for fonts to load
await page.waitForTimeout(2000);

// Get all slides
const slides = await page.$$('.slide');
const images = [];

for (let i = 0; i < slides.length; i++) {
    const path = `/tmp/carousel-slide-${i}.png`;
    await slides[i].screenshot({ path, clip: { x: 0, y: 0, width: slideSize, height: slideSize } });
    images.push(path);
}

// Combine PNGs into PDF
const pdfPage = await browser.newPage();

let pdfHtml = `<!DOCTYPE html><html><head><style>
    * { margin: 0; padding: 0; }
    body { width: ${slideSize}px; }
    img { width: ${slideSize}px; height: ${slideSize}px; display: block; page-break-after: always; }
    img:last-child { page-break-after: auto; }
</style></head><body>`;

for (const img of images) {
    const data = readFileSync(img);
    const base64 = data.toString('base64');
    pdfHtml += `<img src="data:image/png;base64,${base64}" />`;
}

pdfHtml += '</body></html>';
await pdfPage.setContent(pdfHtml, { waitUntil: 'networkidle' });
await pdfPage.pdf({
    path: output,
    width: `${slideSize}px`,
    height: `${slideSize}px`,
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
});

await browser.close();
console.log(`PDF saved to ${output}`);

// Cleanup temp files
for (const img of images) {
    unlinkSync(img);
}

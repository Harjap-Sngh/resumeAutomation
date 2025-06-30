// scripts/generateResume.js

const puppeteer = require("puppeteer");

async function generatePDF() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  // Navigate to your resume page
  await page.goto("http://localhost:3000", {
    waitUntil: "networkidle0",
  });

  // Wait for Resume component to render (optional if no loading delay)
  await page.waitForSelector("main");

  // Generate high-quality, A4 multi-page PDF
  await page.pdf({
    path: "resume.pdf",
    format: "A4",
    printBackground: true,
    margin: {
      top: "1.15cm",
      bottom: "1.15cm",
      left: "1.15cm",
      right: "1.15cm",
    },
  });

  await browser.close();
  console.log("✅ resume.pdf generated successfully!");
}

generatePDF();

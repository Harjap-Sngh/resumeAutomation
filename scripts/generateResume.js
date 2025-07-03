import prompt from "../data/prompt.js";
import jobDescription from "../data/jobDescription.js";
import data from "../data/data.js";
import * as dotenv from "dotenv";
import puppeteer from "puppeteer";
import fs from "fs";
import axios from "axios";

dotenv.config();

const geminiURL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent";
const apiKey = process.env.GEMINI_API_KEY;

async function askGemini(prompt) {
  const response = await axios.post(
    `${geminiURL}?key=${apiKey}`,
    {
      contents: [{ parts: [{ text: prompt }] }],
    },
    {
      headers: { "Content-Type": "application/json" },
    }
  );

  const text = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("No valid response from Gemini.");
  return text;
}

async function updateResumeData() {
  const fullPrompt = `
${prompt}

--- Resume Data (object stays the same, just improve the content) ---
${JSON.stringify(data, null, 2)}

--- Job Description ---
${JSON.stringify(jobDescription, null, 2)}
  `.trim();

  console.log("🤖 Sending to Gemini...");
  const responseText = await askGemini(fullPrompt);

  const jsStart = responseText.indexOf("{");
  const jsEnd = responseText.lastIndexOf("}") + 1;
  const jsCode = responseText.slice(jsStart, jsEnd);

  fs.writeFileSync("../resume/data/data.js", `module.exports = ${jsCode};\n`);
  console.log("✅ Updated data.js with Gemini-enhanced content.");
}

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });

  await page.pdf({
    path: "resume.pdf",
    format: "A4",
    printBackground: true,
    margin: {
      top: "1.27cm",
      bottom: "1.27cm",
      left: "1.27cm",
      right: "1.27cm",
    },
  });

  await browser.close();
  console.log("📄 Generated resume.pdf");
}

async function generateCoverLetter() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/cover", { waitUntil: "networkidle0" });

  await page.pdf({
    path: "coverLetter.pdf",
    format: "A4",
    printBackground: true,
    margin: {
      top: "2.00cm",
      bottom: "2.27cm",
      left: "2.27cm",
      right: "2.27cm",
    },
  });

  await browser.close();
  console.log("📄 Generated coverLetter.pdf");
}

(async () => {
  try {
    // await updateResumeData();
    await new Promise((r) => setTimeout(r, 2000));
    await generatePDF();
    await generateCoverLetter();
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
})();

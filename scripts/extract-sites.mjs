import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";

const ROOT = process.cwd();
const sites = [
  {
    key: "alignflow",
    url: "https://alignflow-fluid-demo.squarespace.com/",
    outDir: "docs/research/alignflow-fluid-demo",
    shotDir: "docs/design-references/alignflow-fluid-demo",
    imgDir: "public/images/alignflow",
  },
  {
    key: "ludobolcato",
    url: "https://www.ludobolcato.com/",
    outDir: "docs/research/ludobolcato",
    shotDir: "docs/design-references/ludobolcato",
    imgDir: "public/images/ludobolcato",
  },
];

function ensure(dir) {
  fs.mkdirSync(path.join(ROOT, dir), { recursive: true });
}

function cleanUrl(u) {
  try {
    const url = new URL(u);
    // Prefer highest res for squarespace
    if (url.hostname.includes("squarespace") && !url.searchParams.has("format")) {
      url.searchParams.set("format", "1500w");
    } else if (url.searchParams.get("format") && !["1500w", "2500w", "original"].includes(url.searchParams.get("format"))) {
      url.searchParams.set("format", "1500w");
    }
    return url.toString().replace(/\s+/g, "%20");
  } catch {
    return null;
  }
}

function baseKey(u) {
  try {
    const url = new URL(u);
    // strip format variants so same image downloads once
    const base = url.pathname;
    return createHash("md5").update(base).digest("hex").slice(0, 12);
  } catch {
    return createHash("md5").update(u).digest("hex").slice(0, 12);
  }
}

function extFrom(u, contentType) {
  const p = new URL(u).pathname.toLowerCase();
  if (p.endsWith(".png")) return ".png";
  if (p.endsWith(".webp")) return ".webp";
  if (p.endsWith(".gif")) return ".gif";
  if (p.endsWith(".svg")) return ".svg";
  if (p.endsWith(".jpg") || p.endsWith(".jpeg")) return ".jpg";
  if (contentType?.includes("png")) return ".png";
  if (contentType?.includes("webp")) return ".webp";
  if (contentType?.includes("gif")) return ".gif";
  if (contentType?.includes("svg")) return ".svg";
  return ".jpg";
}

async function download(url, destPath) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; clone-bot/1.0)" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const ext = extFrom(url, res.headers.get("content-type"));
  const final = destPath.endsWith(ext) ? destPath : destPath + ext;
  fs.writeFileSync(final, buf);
  return path.relative(ROOT, final);
}

async function extractSite(browser, site) {
  ensure(site.outDir);
  ensure(site.shotDir);
  ensure(site.imgDir);

  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  });

  console.log(`\n=== ${site.key}: navigating ===`);
  await page.goto(site.url, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForSelector("body", { timeout: 15000 });
  // Let images/fonts settle without waiting for perpetual network activity
  await page.waitForTimeout(5000);
  try {
    await page.waitForLoadState("networkidle", { timeout: 15000 });
  } catch {
    /* Squarespace often keeps long-polls open */
  }

  // Accept cookie banners if any
  for (const sel of [
    'button:has-text("Accept")',
    'button:has-text("Accept All")',
    'button:has-text("I Agree")',
    '[data-qa="btn-accept-cookies"]',
    ".sqs-cookie-banner-v2-accept",
  ]) {
    try {
      const btn = page.locator(sel).first();
      if (await btn.isVisible({ timeout: 800 })) await btn.click({ timeout: 1000 });
    } catch {
      /* ignore */
    }
  }
  await page.waitForTimeout(500);

  // Screenshots
  await page.screenshot({
    path: path.join(ROOT, site.shotDir, "desktop-full.png"),
    fullPage: true,
  });
  await page.screenshot({
    path: path.join(ROOT, site.shotDir, "desktop-hero.png"),
    fullPage: false,
  });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(800);
  await page.screenshot({
    path: path.join(ROOT, site.shotDir, "mobile-full.png"),
    fullPage: true,
  });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.waitForTimeout(500);

  // Design tokens + structure
  const data = await page.evaluate(() => {
    function styles(el) {
      if (!el) return null;
      const cs = getComputedStyle(el);
      const pick = [
        "fontFamily",
        "fontSize",
        "fontWeight",
        "lineHeight",
        "letterSpacing",
        "color",
        "backgroundColor",
        "backgroundImage",
        "padding",
        "margin",
        "maxWidth",
        "borderRadius",
        "boxShadow",
        "textTransform",
        "display",
        "gap",
      ];
      const o = {};
      for (const p of pick) {
        const v = cs[p];
        if (v && v !== "none" && v !== "normal" && v !== "auto" && v !== "0px" && v !== "rgba(0, 0, 0, 0)") o[p] = v;
      }
      return o;
    }

    const body = document.body;
    const headers = [...document.querySelectorAll("h1,h2,h3,h4")].slice(0, 40).map((el) => ({
      tag: el.tagName.toLowerCase(),
      text: (el.textContent || "").trim().replace(/\s+/g, " ").slice(0, 200),
      styles: styles(el),
    }));

    const buttons = [...document.querySelectorAll("a.sqs-block-button-element, a.sqs-button-element--primary, a.sqs-button-element--secondary, .sqs-block-button-element--medium, button, a[class*='button']")]
      .slice(0, 30)
      .map((el) => ({
        text: (el.textContent || "").trim().replace(/\s+/g, " ").slice(0, 80),
        href: el.href || el.getAttribute("href"),
        styles: styles(el),
      }));

    const navLinks = [...document.querySelectorAll("nav a, .header-nav-item a, .header-menu-nav-item a")]
      .map((a) => ({ text: (a.textContent || "").trim(), href: a.href }))
      .filter((x) => x.text);

    const sections = [...document.querySelectorAll("section, [data-section-theme], .page-section")]
      .slice(0, 30)
      .map((sec, i) => {
        const cs = getComputedStyle(sec);
        const bgImg = cs.backgroundImage;
        const imgs = [...sec.querySelectorAll("img")].map((img) => ({
          src: img.currentSrc || img.src,
          alt: img.alt,
          w: img.naturalWidth,
          h: img.naturalHeight,
        }));
        return {
          index: i,
          id: sec.id || null,
          classes: (sec.className || "").toString().slice(0, 120),
          bg: cs.backgroundColor,
          bgImage: bgImg && bgImg !== "none" ? bgImg.slice(0, 300) : null,
          minHeight: cs.minHeight,
          padding: cs.padding,
          textSample: (sec.innerText || "").trim().replace(/\s+/g, " ").slice(0, 280),
          images: imgs.slice(0, 12),
        };
      });

    const allImgs = [...document.querySelectorAll("img")]
      .map((img) => ({
        src: img.currentSrc || img.src,
        alt: img.alt || "",
        w: img.naturalWidth,
        h: img.naturalHeight,
      }))
      .filter((x) => x.src && !x.src.startsWith("data:"));

    // background images from style
    const bgUrls = [];
    document.querySelectorAll("*").forEach((el) => {
      const bg = getComputedStyle(el).backgroundImage;
      if (bg && bg !== "none") {
        const m = [...bg.matchAll(/url\(["']?([^"')]+)["']?\)/g)];
        for (const x of m) {
          if (x[1] && !x[1].startsWith("data:")) bgUrls.push(x[1]);
        }
      }
    });

    // favicons
    const icons = [...document.querySelectorAll('link[rel*="icon"]')].map((l) => ({
      href: l.href,
      sizes: l.sizes?.toString(),
      rel: l.rel,
    }));

    // sample palette from key elements
    const sampleEls = [
      body,
      document.querySelector("header"),
      document.querySelector("h1"),
      document.querySelector("h2"),
      document.querySelector("p"),
      document.querySelector("a"),
      document.querySelector("footer"),
      ...document.querySelectorAll("section"),
    ].filter(Boolean).slice(0, 40);

    const colors = new Set();
    for (const el of sampleEls) {
      const cs = getComputedStyle(el);
      colors.add(cs.color);
      colors.add(cs.backgroundColor);
      colors.add(cs.borderColor);
    }

    const fonts = new Set();
    for (const el of [...document.querySelectorAll("h1,h2,h3,p,a,body,button,span")].slice(0, 80)) {
      fonts.add(getComputedStyle(el).fontFamily);
    }

    return {
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.content || "",
      bodyStyles: styles(body),
      headers,
      buttons,
      navLinks,
      sections,
      allImgs,
      bgUrls: [...new Set(bgUrls)],
      icons,
      colors: [...colors].filter((c) => c && c !== "rgba(0, 0, 0, 0)"),
      fonts: [...fonts],
      fullText: (document.body.innerText || "").slice(0, 12000),
    };
  });

  fs.writeFileSync(
    path.join(ROOT, site.outDir, "extraction.json"),
    JSON.stringify(data, null, 2)
  );
  fs.writeFileSync(path.join(ROOT, site.outDir, "FULL_TEXT.txt"), data.fullText);

  // Download unique images
  const urlSet = new Map();
  for (const img of data.allImgs) {
    const cleaned = cleanUrl(img.src);
    if (!cleaned) continue;
    const key = baseKey(cleaned);
    if (!urlSet.has(key)) urlSet.set(key, { url: cleaned, alt: img.alt, kind: "img" });
  }
  for (const bg of data.bgUrls) {
    const cleaned = cleanUrl(bg);
    if (!cleaned) continue;
    const key = baseKey(cleaned);
    if (!urlSet.has(key)) urlSet.set(key, { url: cleaned, alt: "bg", kind: "bg" });
  }
  for (const ic of data.icons) {
    const cleaned = cleanUrl(ic.href);
    if (!cleaned) continue;
    const key = baseKey(cleaned);
    if (!urlSet.has(key)) urlSet.set(key, { url: cleaned, alt: "icon", kind: "icon" });
  }

  const assetMap = {};
  let i = 0;
  for (const [key, meta] of urlSet) {
    i++;
    const dest = path.join(ROOT, site.imgDir, `${meta.kind}-${key}`);
    try {
      const rel = await download(meta.url, dest);
      assetMap[meta.url] = rel;
      console.log(`  downloaded ${i}/${urlSet.size}: ${rel}`);
    } catch (e) {
      console.warn(`  fail ${meta.url}: ${e.message}`);
    }
  }

  fs.writeFileSync(
    path.join(ROOT, site.outDir, "assets.json"),
    JSON.stringify(assetMap, null, 2)
  );

  // PAGE topology
  const topology = [
    `# PAGE_TOPOLOGY — ${site.key}`,
    "",
    `Source: ${site.url}`,
    `Title: ${data.title}`,
    "",
    "## Nav",
    ...data.navLinks.map((n) => `- ${n.text}: ${n.href}`),
    "",
    "## Sections",
    ...data.sections.map(
      (s) =>
        `### Section ${s.index}\n- bg: ${s.bg}\n- padding: ${s.padding}\n- minHeight: ${s.minHeight}\n- text: ${s.textSample}\n- images: ${s.images.length}\n`
    ),
    "",
    "## Fonts",
    ...data.fonts.map((f) => `- ${f}`),
    "",
    "## Colors",
    ...data.colors.slice(0, 40).map((c) => `- ${c}`),
  ].join("\n");
  fs.writeFileSync(path.join(ROOT, site.outDir, "PAGE_TOPOLOGY.md"), topology);

  console.log(`=== ${site.key}: done — ${Object.keys(assetMap).length} assets ===`);
  await page.close();
  return data;
}

const browser = await chromium.launch({ headless: true });
try {
  for (const site of sites) {
    await extractSite(browser, site);
  }
} finally {
  await browser.close();
}
console.log("\nAll extractions complete.");

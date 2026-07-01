import fs from "fs";
import path from "path";

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, files);
    else if (ent.name === "page.tsx") files.push(p);
  }
  return files;
}

function enhanceOpenGraph(content) {
  if (content.includes("createPageMetadata(")) return content;
  if (!content.includes("alternates") || !content.includes("canonical")) return content;
  if (/openGraph:\s*\{[^}]*title:/s.test(content)) return content;

  const titleMatch = content.match(/\n\s*title:\s*("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/);
  const descMatch = content.match(/\n\s*description:\s*("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/);
  const canonicalMatch = content.match(/canonical:\s*("([^"]+)"|'([^']+)'|`([^`]+)`)/);

  if (!titleMatch || !descMatch || !canonicalMatch) return content;

  const title = titleMatch[1];
  const description = descMatch[1];
  const canonical = canonicalMatch[2] || canonicalMatch[3] || canonicalMatch[4];

  let updated = content;

  if (/openGraph:\s*\{[^}]*url:/s.test(updated)) {
    updated = updated.replace(
      /openGraph:\s*\{[^}]*\},?/s,
      `openGraph: {\n    title: ${title},\n    description: ${description},\n    url: "${canonical}",\n    type: "website",\n  },`
    );
  } else {
    updated = updated.replace(
      /(alternates:\s*\{[^}]*\},?)/s,
      `$1\n  openGraph: {\n    title: ${title},\n    description: ${description},\n    url: "${canonical}",\n    type: "website",\n  },`
    );
  }

  if (!/twitter:\s*\{/s.test(updated)) {
    updated = updated.replace(
      /(openGraph:\s*\{[^}]*\},?)/s,
      `$1\n  twitter: {\n    card: "summary_large_image",\n    title: ${title},\n    description: ${description},\n  },`
    );
  }

  return updated;
}

const root = path.resolve("app");
let count = 0;

for (const file of walk(root)) {
  const content = fs.readFileSync(file, "utf8");
  const updated = enhanceOpenGraph(content);
  if (updated !== content) {
    fs.writeFileSync(file, updated);
    count++;
  }
}

console.log(`Enhanced openGraph on ${count} pages.`);

import fs from "fs";
import path from "path";

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (!["node_modules", ".next", ".git", "scripts"].includes(ent.name)) {
        walk(p, files);
      }
    } else if (/\.(tsx?|jsx?)$/.test(ent.name)) {
      files.push(p);
    }
  }
  return files;
}

function fixInternalHrefs(content) {
  return content.replace(
    /(href(?:\s*:\s*|=)\s*['"])(\/[^'"#?]*?)(['"])/g,
    (m, pre, p, suf) => {
      if (p === "/" || p.endsWith("/")) return m;
      return `${pre}${p}/${suf}`;
    }
  );
}

function fixBlogFiles(content, file) {
  if (file.includes("BlogListing.tsx")) {
    content = content.replace(
      /return pageNum === 1 \? "\/blog\/?" : `\/blog\/page\/\$\{pageNum\}\/?`;/,
      'return pageNum === 1 ? "/blog/" : `/blog/page/${pageNum}/`;'
    );
    content = content.replace(/`\/\$\{post\.id\}`/g, "`/${post.id}/`");
  }
  if (file.includes("BlogNavigation.tsx")) {
    content = content.replace(/`\/\$\{([^}]+)\}`/g, "`/${$1}/`");
  }
  return content;
}

function addOpenGraphUrl(content, file) {
  if (!file.includes("page.tsx")) return content;
  if (/openGraph:\s*\{[^}]*url:/s.test(content)) return content;

  const canonMatch = content.match(
    /alternates:\s*\{\s*canonical:\s*["']([^"']+)["']/
  );
  if (!canonMatch) return content;

  const canonical = canonMatch[1];
  return content.replace(
    /(alternates:\s*\{\s*canonical:\s*["'][^"']+["'],?\s*\})(,?)/,
    `$1,$2\n  openGraph: {\n    url: "${canonical}",\n  },`
  ).replace(/,\s*,/g, ',').replace(/\},\s*,\s*openGraph/g, '},\n  openGraph');
}

const root = path.resolve(".");
const files = walk(root);
let updated = 0;

for (const file of files) {
  let content = fs.readFileSync(file, "utf8");
  const orig = content;
  content = fixInternalHrefs(content);
  content = fixBlogFiles(content, file);
  content = addOpenGraphUrl(content, file);
  if (content !== orig) {
    fs.writeFileSync(file, content);
    updated++;
  }
}

console.log(`Updated ${updated} files.`);

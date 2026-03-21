/**
 * Patches webpack ConcatenationScope.js to fix JSON.parse("") crash on Node 23+
 * This is a known webpack bug where hex-decoded module references can be empty strings.
 */
const fs = require("fs");
const path = require("path");

const filePath = path.join(
  __dirname,
  "..",
  "node_modules",
  "webpack",
  "lib",
  "ConcatenationScope.js"
);

if (!fs.existsSync(filePath)) {
  console.log("webpack ConcatenationScope.js not found, skipping patch.");
  process.exit(0);
}

let content = fs.readFileSync(filePath, "utf8");

const original = `ids:
				match[2] === "ns"
					? []
					: JSON.parse(Buffer.from(match[2], "hex").toString("utf8")),`;

const patched = `ids:
				match[2] === "ns"
					? []
					: (() => { const s = Buffer.from(match[2], "hex").toString("utf8"); return s ? JSON.parse(s) : []; })(),`;

if (content.includes(patched)) {
  console.log("webpack ConcatenationScope.js already patched.");
  process.exit(0);
}

if (content.includes(original)) {
  content = content.replace(original, patched);
  fs.writeFileSync(filePath, content, "utf8");
  console.log("Patched webpack ConcatenationScope.js for Node 23+ compatibility.");
} else {
  console.log("Could not find expected code in ConcatenationScope.js, skipping patch.");
}

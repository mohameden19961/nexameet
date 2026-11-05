#!/usr/bin/env node
/**
 * Génère content.js à partir des fichiers Markdown du dépôt.
 *
 * Le site de documentation (index.html) n'utilise pas fetch : tout le contenu
 * est embarqué dans content.js. Cela permet d'ouvrir index.html directement
 * (file://) sans serveur local, et de publier le site sur GitHub Pages.
 *
 * Usage :
 *   node tools/build-content.js
 */

"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const OUTPUT = path.join(ROOT, "content.js");
const COLLECTIONS = ["docs", "architecture"];

const documents = {};

function addFile(relativePath) {
  const absolutePath = path.join(ROOT, relativePath);
  const key = relativePath.split(path.sep).join("/");
  documents[key] = fs.readFileSync(absolutePath, "utf8");
}

function walk(relativeDirectory) {
  const absoluteDirectory = path.join(ROOT, relativeDirectory);
  const entries = fs
    .readdirSync(absoluteDirectory, { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name, "fr", { numeric: true }));

  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    const child = path.join(relativeDirectory, entry.name);
    if (entry.isDirectory()) {
      walk(child);
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
      addFile(child);
    }
  }
}

addFile("README.md");
for (const collection of COLLECTIONS) {
  if (fs.existsSync(path.join(ROOT, collection))) walk(collection);
}

const banner = [
  "/*",
  " * Fichier généré automatiquement — ne pas modifier à la main.",
  " * Source : README.md, docs/*.md et architecture/*.md",
  " * Régénérer avec : node tools/build-content.js",
  " */",
  "",
].join("\n");

fs.writeFileSync(
  OUTPUT,
  banner + "window.NEXAMEET_DOCS = " + JSON.stringify(documents, null, 2) + ";\n",
  "utf8"
);

const count = Object.keys(documents).length;
const size = Math.round(fs.statSync(OUTPUT).size / 1024);
console.log(`content.js généré : ${count} documents, ${size} Ko.`);

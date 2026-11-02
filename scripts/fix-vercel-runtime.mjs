// @astrojs/vercel 7.x only knows Node 18 and 20, and writes "nodejs18.x" for any
// newer Node. Vercel has retired both, so after `astro build` this sets each
// function's runtime to the Node major that actually ran the build (see
// "engines" in package.json). Remove once the adapter is upgraded.
import fs from 'node:fs';
import path from 'node:path';

const runtime = `nodejs${process.versions.node.split('.')[0]}.x`;
const root = path.join('.vercel', 'output', 'functions');

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name === '.vc-config.json') {
      const config = JSON.parse(fs.readFileSync(full, 'utf8'));
      if (config.runtime !== runtime) {
        console.log(`${full}: ${config.runtime} -> ${runtime}`);
        config.runtime = runtime;
        fs.writeFileSync(full, JSON.stringify(config, null, '\t'));
      }
    }
  }
}
walk(root);

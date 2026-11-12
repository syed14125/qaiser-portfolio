// A small, dependency-free server for the exported production website.
import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('out');
const port = Number(process.env.PORT || 3000);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.pdf': 'application/pdf', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8' };
const server = http.createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url || '/', 'http://localhost').pathname);
    let file = path.resolve(root, '.' + pathname);
    if (!file.startsWith(root + path.sep) && file !== root) { res.writeHead(403); res.end(); return; }
    try { if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html'); } catch { file = path.join(root, '404.html'); res.statusCode = 404; }
    let contents;
    try { contents = await readFile(file); } catch { contents = await readFile(path.join(root, '404.html')); file = '404.html'; res.statusCode = 404; }
    res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    if (req.method === 'HEAD') res.end(); else res.end(contents);
  } catch { res.writeHead(400); res.end('Bad request'); }
});
server.listen(port, () => console.log(`Portfolio production preview: http://localhost:${port}`));

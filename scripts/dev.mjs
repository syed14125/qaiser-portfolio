// Accept standard Next flags and the managed preview host/port flags.
import { spawn } from 'node:child_process';
const incoming = process.argv.slice(2);
const args = ['dev'];
for (let i = 0; i < incoming.length; i++) {
  if (incoming[i] === '--strictPort') continue;
  args.push(incoming[i] === '--host' ? '--hostname' : incoming[i]);
}
if (!args.includes('--hostname')) args.push('--hostname', '0.0.0.0');
const child = spawn(process.execPath, ['node_modules/next/dist/bin/next', ...args], { stdio: 'inherit' });
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => child.kill(signal));
child.on('exit', code => process.exit(code ?? 0));

import { exec, execFile, spawn, fork, spawnSync, execSync, execFileSync } from 'child_process';

const child = spawn('node', ['child.ts'], { cwd: __dirname });

child.stdout.on('data', (chunk) => {
  const str = Buffer.from(chunk).toString('utf-8');
  console.log(str);
});

// import { spawn, spawnSync, fork, exec, execSync, execFile, execFileSync } from 'child_process';

// new Array(10).fill(null).forEach((value, index) => {
//   const spawnChild = spawn('node', ['child.ts'], { cwd: __dirname });
//   const execChild = exec('node child.ts', { cwd: __dirname });

//   spawnChild?.stdout?.on('data', (chunk) => {
//     const str = Buffer.from(chunk).toString('utf-8');
//     console.log(index, str);
//   });

//   execChild?.stdout?.on('data', (chunk) => {
//     const str = Buffer.from(chunk).toString('utf-8');
//     console.log(index, str);
//   });
// });

import { demo } from '@/child';

console.log(demo);

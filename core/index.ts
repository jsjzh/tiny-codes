import { exec, execFile, spawn, fork, spawnSync, execSync, execFileSync } from 'child_process';

execSync('pwd', { stdio: 'inherit' });
spawnSync('pwd', { stdio: 'inherit' });

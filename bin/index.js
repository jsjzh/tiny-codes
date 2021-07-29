/* eslint-disable @typescript-eslint/no-require-imports */
const chokidar = require('chokidar');
const { execSync } = require('child_process');
const path = require('path');

const root = path.resolve(__dirname, '../');

const handles = {
  add: (path, stats) => {
    console.log(`增加了 ${path} 文件`);
    // watcher.add(path);
  },
  addDir: (path, stats) => {
    console.log(`增加了 ${path} 文件夹`);
    // watcher.add(path);
  },
  change: (path, stats) => {
    console.log(`${path} 文件改变，重新执行 npm run dev`);
    execSync('npm run dev', { cwd: root, stdio: 'inherit' });
  },
  unlink: (path, stats) => {
    console.log(`移除了 ${path} 文件`);
    // watcher.unwatch(path);
  },
  unlinkDir: (path, stats) => {
    console.log(`移除了 ${path} 文件夹`);
    // watcher.unwatch(path);
  },
};

const watcher = chokidar
  .watch('./core', { cwd: root })
  .on('all', (event, path, stats) => handles[event](path, stats));

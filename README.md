# tiny-codes

这个仓库具体都会用来放小 demo 的代码，由于可能会有很多不同课题的 demo，所以这里就用 branch 来作区分

由于 `node_modules` 会被加入 `.gitignore` 列表，所以不同的 demo 或许需要重新安装依赖

## 说明

### .husky

#### \_

由 `husky install` 自动生成

#### commit-msg

关联 @commitlint/cli 和 `.commitlintrc.js` 文件，检测 commit-msg 是否符合规范

#### pre-commit

执行 `git commit -m "xxx"` 之前会运行的代码，若抛出错误则不进行 commit 操作

### package.json

#### scripts

##### add

`git add .`

##### commit

`git-cz`

相关 commitizen 和 cz-conventional-changelog

##### release

`standard-version --no-verify --release-as $1`

相关 standard-version，运行时使用 `npm run release -r major|minor|patch`

##### dev

`ts-node -r tsconfig-paths/register ./core/index.ts --files`

相关 ts-node 和 tsconfig-paths，可直接运行 typescript 代码

##### prebuild

`npm run clear && npm run test && npm run fix`

##### clear

`rm -rf log src typings`

##### build

`npm run build:ts`

##### build:ts

`tsc --project ./`

使用 typescript 将 `.ts` 转为 `.js`，输出到 src 目录

##### test

`npm run test:ts && npm run test:jest`

##### test:ts

`tsc --project ./ --noEmit`

测试是否通过 typescript 验证

##### test:jest

`jest test/\*`

运行 jest 测试代码

##### fix

`npm run prettier:fix && npm run eslint:fix`

##### eslint:fix

`eslint --fix --ext .ts --output-file ./log/eslint-error.json.log --format json core/\*`

使用 eslint 检测并修复代码，若有 error 会抛出异常，并把 log 日志输出到 `./log/eslint-error.json.log` 文件

##### prettier:fix

`prettier --check --write core/\*`

使用 prettier 自动格式化代码并保存

##### prepare

`husky install`

相关 husky，在 >4 的版本中，husky 使用了 git 新增的 api，更改了 git 的配置文件，增加了 git hook

[详细说明](https://zhuanlan.zhihu.com/p/366786798)

#### dependencies

tslib

#### devDependencies

##### jest test typescript 相关依赖

- @babel/core
- @babel/preset-env
- @babel/preset-typescript
- @types/jest
- babel-jest
- jest

##### eslint 相关依赖

- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- eslint
- eslint-config-alloy

##### prettier 相关依赖

- prettier

##### git commit 规范检测

- @commitlint/cli
- @commitlint/config-conventional
- commitizen
- cz-conventional-changelog
- husky

##### 自动生成 git tag 和 CHANGELOG.md 和 update package.json version 相关依赖

- standard-version

##### 其他依赖

- @types/node
- ts-node
- tsconfig-paths
- typescript

## Demo List

```
git clone -b demo/xxx https://github.com/jsjzh/tiny-codes.git
```

- demo/node-child-process

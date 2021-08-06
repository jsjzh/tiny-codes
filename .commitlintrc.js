/**
 * feat:     新功能
 * fix:      错误修复
 * docs:     仅文档更改
 * style:    不影响代码含义的更改（空白、格式、缺少分号等）
 * refactor: 既不修复 bug 也不添加功能的代码更改
 * test:     添加缺失的测试或更正现有测试
 * perf:     提高性能的代码更改
 * build:    影响构建系统或外部依赖项的更改（示例范围：gulp、brocoli、npm）
 * ci:       对 CI 配置文件和脚本的更改（示例范围：Travis、Circle、BrowserStack、SauceLabs）
 * chore:    不修改 src 或测试文件的其他更改
 * revert:   恢复以前的提交
 */
module.exports = { extends: ['@commitlint/config-conventional'] };

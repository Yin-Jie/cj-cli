const { program } = require('commander')

const checkVersion = require('../scripts/checkVersion')
const commandsOptions = require('../commands/index')

const pkg = require('../package.json')

// 检查node版本
checkVersion()

// 遍历commands命令
Object.values(commandsOptions).forEach((item) => {
  const { command, description, action } = item
  program.command(command).description(description).action(action)
})

/**
 * 默认 -V输出版本信息
 * 可以通过重写的信息，-v 输出包名和版本号信息
 */
program.version(`${pkg.version}`, '-v', '--version').usage('<command> [options]')

// 配置命令

// 解析命令行
program.parse(process.argv)

// 没有参数时，输出帮助信息
if (!process.argv.slice(2).length) {
  program.outputHelp()
}

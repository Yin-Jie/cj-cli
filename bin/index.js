#!/usr/bin/env node

const { program } = require('commander')
const semver = require('semver')
const chalk = require('chalk')
const pkg = require('../package.json')

const requiredVersion = pkg.engines.node

// 检查node版本
const ok = semver.satisfies(process.version, requiredVersion, { includePrerelease: true })

if (!ok) {
  console.log(
    chalk.red(
      `You are using Node ${process.version}, but this version of ` +
        `requires Node ${requiredVersion}.\nPlease upgrade your Node version.`
    )
  )
  process.exit(-1)
}

/**
 * 默认 -V输出版本信息
 * 可以通过重写的信息，-v 输出包名和版本号信息
 */
program.version(`${pkg.version}`, '-v', '--version').usage('<command> [options]')

// 配置命令
program
  .command('create <project-name>')
  .description('create a new project from template')
  .action((name) => {
    console.log('name', name)
  })

// 解析命令行
program.parse(process.argv)

// 没有参数时，输出帮助信息
if (!process.argv.slice(2).length) {
  program.outputHelp()
}

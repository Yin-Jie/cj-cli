import chalk from 'chalk'
const log = console.log

const yellow = (msg: string) => log(chalk.yellow(msg))
const red = (msg: string) => log(chalk.red(msg))
const green = (msg: string) => log(chalk.green(msg))

export default {
  yellow,
  red,
  green,
}

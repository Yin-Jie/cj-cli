const chalk = require('chalk')

const yellow = (msg) => console.log(chalk.yellow(msg))

const red = (msg) => console.log(chalk.red(msg))

const green = (msg) => console.log(chalk.green(msg))

export default {
  yellow,
  red,
  green,
}

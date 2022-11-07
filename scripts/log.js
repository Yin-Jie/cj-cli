const chalk = require('chalk')

module.exports = {
  yellow: (msg) => {
    console.log(chalk.yellow(msg))
  },
  red: (msg) => {
    console.log(chalk.red(msg))
  },
  green: (msg) => {
    console.log(chalk.green(msg))
  },
}

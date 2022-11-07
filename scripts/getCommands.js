const globby = require('globby')

// 获取command路径下的命令
module.exports = () => {
  const commandsPath = globby.sync('../commands/*.js', { cwd: __dirname, deep: 1 }) || []
  return commandsPath
}

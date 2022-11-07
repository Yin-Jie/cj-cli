const semver = require('semver')
const pkg = require('../package.json')
const logger = require('./log')

const requiredVersion = pkg.engines.node

// 检查node版本
module.exports = () => {
  const ok = semver.satisfies(process.version, requiredVersion, { includePrerelease: true })

  if (!ok) {
    logger.red(
      `你当前使用的Node版本 ${process.version}, 但脚手架需要 Node版本 ${requiredVersion}.\n请升级你的Node版本`
    )

    process.exit(-1)
  }
}

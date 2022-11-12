import log from './log'

const semver = require('semver')
const pkg = require('../package.json')

const requiredVersion = pkg.engines.node

// 检查node版本
export default () => {
  const ok = semver.satisfies(process.version, requiredVersion, { includePrerelease: true })

  if (!ok) {
    log.red(
      `你当前使用的Node版本 ${process.version}, 但脚手架需要 Node版本 ${requiredVersion}.\n请升级你的Node版本`
    )

    process.exit(-1)
  }
}

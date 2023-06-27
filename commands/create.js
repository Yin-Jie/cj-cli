import logger from '../scripts/log'

const fs = require('fs-extra')
const inquirer = require('inquirer')
const { execFileSync } = require('child_process')
const download = require('download-git-repo')
const handlebars = require('handlebars')
const ora = require('ora')

let spinner

export default {
  command: 'create <project-name>',
  description: '初始化项目',
  action: async (projectName) => {
    const isExist = fs.existsSync(projectName)

    // 已存在同名
    if (isExist) {
      const { override } = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'override',
          message: '当前目录中已经存在同名的文件夹/项目。是否覆盖?',
          default: false,
        },
      ])
      if (override) {
        fs.removeSync(projectName)
      } else {
        logger.red('停止创建项目。')
        process.exit(-1)
      }
    }

    const gitAuthor = execFileSync('git', ['config', 'user.name'], { encoding: 'utf-8' })
    const gitEmail = execFileSync('git', ['config', 'user.email'], { encoding: 'utf-8' })

    const { description, author, email } = await inquirer.prompt([
      {
        type: 'input',
        name: 'description',
        message: '项目描述',
      },
      {
        type: 'input',
        name: 'author',
        message: '你的名字',
        default: gitAuthor.trim(),
      },
      {
        type: 'input',
        name: 'email',
        message: '你的邮箱',
        default: gitEmail.trim(),
      },
    ])

    spinner = ora('拉取远程模版中 loading...').start()
    download('jayyoonn/template-vite-vue-ts', projectName, (err) => {
      if (err) {
        spinner.fail(`拉取模版失败${err}`)
        return
      }
      const packagePath = `${projectName}/package.json`
      const packageContent = fs.readFileSync(packagePath, 'utf-8')

      // 使用handlebars解析模板引擎
      const packageResult = handlebars.compile(packageContent)({
        description,
        author,
        email,
        name: projectName,
      })

      // 将解析后的结果重写到package.json文件中
      fs.writeFileSync(packagePath, packageResult)
      spinner.succeed('创建项目成功!!')
    })
  },
}

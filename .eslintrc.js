module.exports = {
  // 停止在父级目录中寻找配置
  root: true,

  // 配置多个环境
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },

  // 让prettier的解析作为eslint的一部分
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    // 支持最新的ECMASript语法
    ecmaVersion: 'latest',
  },

  // 关闭和eslint中以及和其他拓展中有冲突的规则
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'off',
  },
}

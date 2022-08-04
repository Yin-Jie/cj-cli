#!/usr/bin/env node

const program = require("commander");
const semver = require("semver");
const chalk = require("chalk");
const package = require("../package.json");

const requiredVersion = package.engines.node;

// 检查node版本
const ok = semver.satisfies(process.version, requiredVersion);

if (!ok) {
  console.log(
    chalk.red(
      "You are using Node " +
        process.version +
        ", but this version of " +
        "requires Node " +
        requiredVersion +
        ".\nPlease upgrade your Node version."
    )
  );
  process.exit(-1);
}

// -V 输出包名和版本号信息
program
  .version(`${package.name} ${package.version}`)
  .usage("<command> [options]");

// 配置命令行选项
program.option("-c, --create", "根据模版初始化项目");

program.parse(process.argv);

// const options = program.opts();
// console.log(options);

// //
// program.command("create <project-name>").description("基于模版初始化一个项目");

// const options = program.opts();
// if (options.debug) console.log(options);
// console.log("pizza details:");
// if (options.small) console.log("- small pizza size");
// if (options.pizzaType) console.log(`- ${options.pizzaType}`);

#! /usr/bin/env node
// 这个注释可不是多余，所有的 node cli 必须在开头包含此注释，否则命令就没法正常运行，这句注释就是指该命令在 node 环境下运行，所以请务必不要省略此注释！
import { program } from 'commander';
import chalk from 'chalk';
import create from './create/index.js';
import { LOGO, VERSION } from './config/index.js';
const main = () => {
  // 版本信息
  program.version(`\r\n  VERSION:${chalk.cyan.bold(VERSION)}
    ${chalk.cyan.bold(LOGO)}`);
  // help
  program.on('--help', function () {
    console.log(`\r\n终端执行 ${chalk.cyan.bold('z-great-cli <command> --help')} 获取更多命令详情\r\n`);
  });
  program.name(chalk.cyan('z-great-cli')).usage(`${chalk.yellow('<command>')} [options]`);
  create();
  program.parse(process.argv);
};
export default main;

#! /usr/bin/env node
// 这个注释可不是多余，所有的 node cli 必须在开头包含此注释，否则命令就没法正常运行，这句注释就是指该命令在 node 环境下运行，所以请务必不要省略此注释！
import { VERSION } from './config.js';
// chalk
import chalk from 'chalk';
// commander
import { program } from 'commander';
/**
 * 接受用户输入的信息
 * 创建项目package.json并且安装依赖
 * 创建空项目(可以理解为：复制预先配置好的项目文件)
 */
// const inquirer = require('inquirer');

// inquirer
//   .prompt([
//     {
//       type: 'input', //type： input, number, confirm, list, checkbox ...
//       name: 'name', // key 名
//       message: '请输入您的项目名称', // 提示信息
//       default: 'my-vue-project', // 默认值
//     },
//   ])
//   .then((answers) => {
//     // 打印互用输入结果
//     console.log(answers);
//   });
// 输出版本
program.version(
  `\r\n  ${chalk.cyan.bold(VERSION)}
  ${chalk.cyan.bold('1231')}`
);

console.log(chalk.red('测试'));
program.name(chalk.cyan('z')).usage(`${chalk.yellow('<command>')} [options]`);

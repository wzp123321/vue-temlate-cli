import path from 'path-browserify';
import fs from 'fs-extra';
import dirOverlay from './dirOverlay.js';
import downloadRepo from './downloadRepo.js';
import { program } from 'commander';
import chalk from 'chalk';

/**
 * 创建新项目
 * @param projectName - 项目名
 * @param options - 命令参数
 */
const create = async (projectName: string, options: { [key: string]: any }) => {
  // 获取当前工作目录
  const cwd = process.cwd();
  // 拼接得到项目目录
  const targetDirectory = path.join(cwd, projectName);
  // 判断目录是否存在
  const existFlag = fs.existsSync(targetDirectory);
  if (existFlag) {
    await dirOverlay(options, projectName, targetDirectory);
  } else {
    await downloadRepo(projectName);
  }
};

export default () => {
  program
    .command('create <project-name>')
    .description(chalk.cyan('创建新项目'))
    .option('-f,--force', chalk.red('如果目录已存在，将覆盖原项目，请谨慎使用'))
    .action(create);
};

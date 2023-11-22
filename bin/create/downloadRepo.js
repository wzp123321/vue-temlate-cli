import chalk from 'chalk';
import path from 'node:path';
import { loadingUtils, userCheckUtils, downloadGitRepo } from '../utils/index.js';
/**
 * 执行创建命令
 * @param projectType - 项目类型 "library" | "react" | "vue" | "uniapp" | "koa" | nest""
 * @param projectName - 项目名称
 * @param targetDirectory - 目标存储路径
 */
const execCreate = async (projectType, projectName) => {
  /**
   * download(repository, destination, options, callback)\
   * 尽量不要配置clone: true（github，gitlab等公开库），很容易出现128
   * 下载一个 git repository 到 destination 文件夹，配置参数 options, 和 callback回调.
   */
  // 会下载到当前目录下的test-test文件夹下
  switch (projectType) {
    case 'vue':
      loadingUtils(
        '正在下载模板，请稍后...',
        () => downloadGitRepo('wzp123321/vue-vite-template', path.join(process.cwd(), projectName)),
        { projectName },
      );
      break;
    case 'library':
    case 'react':
    case 'uniapp':
    case 'koa':
    case 'nest':
      console.log(chalk.gray.bold(`\r\n  开发中，敬请期待...\r\n`));
      break;
  }
};
/**
 * 创建项目
 * @param projectName - 项目名称
 * @param targetDirectory - 目标存储路径
 */
export default async (projectName) => {
  console.log(
    chalk.red.bold(`\r\n  请注意：本 cli 下大部分模板采用 vite 构建，node 版本需要 14.18+ 或 16+ 或更高\r\n`),
  );
  const projectType = await userCheckUtils();
  await execCreate(projectType, projectName);
};

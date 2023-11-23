import chalk from 'chalk';
import ora from 'ora';
import path from 'node:path';
import fs from 'fs-extra';
import { userCheckUtils } from '../utils/index.js';
/**
 * 执行创建命令
 * @param params   projectType- 项目类型 "react" | "vue" | "uniapp";typescript - 是否需要typescript
 * @param projectName - 项目名称
 */
const execCreate = async (params, projectName) => {
  const { projectType, typescript } = params;

  const spinner = ora('模板下载中...');
  spinner.start(); // 开启加载
  try {
    const cwd = process.cwd();
    const root = path.join(cwd, projectName);
    const renameFiles = {
      _gitignore: '.gitignore',
    };
    // 根据选项拼接模板文件夹
    const templateDir = path.join(process.cwd(), `template/template-${projectType}${typescript ? '-ts' : ''}`);
    // 写文件
    const write = async (file, content) => {
      const targetPath = renameFiles[file] ? path.join(root, renameFiles[file]) : path.join(root, file);
      if (content) {
        await fs.writeFile(targetPath, content);
      } else {
        await fs.copy(path.join(templateDir, file), targetPath);
      }
    };
    const files = await fs.readdir(templateDir);
    for (const file of files) {
      await write(file);
    }
    // 修改下载下来模板的package.json文件
    const targetJSON = fs.readJsonSync(path.resolve(templateDir, `package.json`));
    targetJSON.name = path.basename(root);
    await write('package.json', JSON.stringify(targetJSON, null, 2));

    // 下载成功
    spinner.succeed(`${chalk.black.bold('下载成功！执行以下命令打开并运行项目:')}
      \r\n  ${chalk.gray.bold(`cd ${projectName}`)}
      \r\n  ${chalk.gray.bold('npm install')}
      \r\n  ${chalk.gray.bold('npm run dev')}
      \r\n  ${chalk.gray.bold('问题、意见、建议请反馈至：https://github.com/wzp123321/vue-vite-template/issues')}
      `);
  } catch (error) {
    console.log('error----', error);
    // 下载失败
    spinner.fail(`下载失败：${error.code}`);
  }
};
/**
 * 创建项目
 * @param projectName - 项目名称
 */
export default async (projectName) => {
  console.log(
    chalk.red.bold(`\r\n  请注意：本 cli 下大部分模板采用 vite 构建，node 版本需要 14.18+ 或 16+ 或更高\r\n`),
  );
  const { projectType, typescript } = await userCheckUtils();
  await execCreate({ projectType, typescript }, projectName);
};

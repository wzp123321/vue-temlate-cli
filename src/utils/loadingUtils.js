import ora from 'ora';
import chalk from 'chalk';

/**
 * 睡觉函数
 * @param {Number} delay 睡眠时间
 */
const sleep = (delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(false);
    }, delay);
  });
};

/**
 * 加载中方法
 * @param message - 提示信息
 * @param callback - 执行的回调
 * @param projectName - 项目名
 * @returns
 */
export const loadingUtils = async (message, callback, other) => {
  const spinner = ora(message);
  spinner.start(); // 开启加载
  try {
    const res = await callback();
    // 加载成功
    spinner.succeed(
      `${chalk.black.bold('下载成功！执行以下命令打开并运行项目:')}
      \r\n  ${chalk.gray.bold(`cd ${other?.projectName}`)}
      \r\n  ${chalk.gray.bold('npm install')}
      \r\n  ${chalk.gray.bold('npm run dev')}
      \r\n  ${chalk.gray.bold(
        '问题、意见、建议请反馈至：https://github.com/wzp123321/vue-vite-template/issues'
      )}
      `
    );
    return res;
  } catch (error) {
    console.log('error----------', error);
    // 加载失败
    spinner.fail('请求失败，正在重试...');
    await sleep(1000);
    // 重新拉取
    return loading(message, callback, other);
  }
};

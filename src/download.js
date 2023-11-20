// 模板下载
import util from 'node:util';
import path from 'node:path';
import download from 'download-git-repo';

export const downloadGitRepo = util.promisify(download);

/**
 * 下载模板
 */
export const downloadUtil = (projectName) => {
  /**
   * download(repository, destination, options, callback)\
   * 尽量不要配置clone: true（github，gitlab等公开库），很容易出现128
   * 下载一个 git repository 到 destination 文件夹，配置参数 options, 和 callback回调.
   */
  // 会下载到当前目录下的test-test文件夹下
  downloadGitRepo(
    'wzp123321/vue-vite-template',
    path.join(process.cwd(), projectName),
    (res) => {
      console.log('res------------', res);
    }
  );
};

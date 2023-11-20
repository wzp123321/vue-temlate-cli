// 模板下载
import util from 'node:util';
import download from 'download-git-repo';
export const downloadGitRepo = util.promisify(download);

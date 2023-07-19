import util from 'node:util';
import download from 'download-git-repo';

export const downloadGitRepo = util.promisify(download);

// 下面是伪代码
downloadGitRepo(`direct: 仓库地址`, '存放的目标地址', { clone: true });

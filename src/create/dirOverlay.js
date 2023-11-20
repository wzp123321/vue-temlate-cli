/**
 * 项目覆盖
 */
import fs from 'fs-extra';
import downloadRepo from './downloadRepo';
import { userCheckUtils } from '../utils/index';
/**
 * 如果目录已经存在时调用
 * @param options - 命令参数
 * @param targetDirectory - 目标路径
 */
export default async (options, projectName, targetDirectory) => {
    // 判断是否使用 --force 参数
    if (options.force) {
        // 删除重名目录
        await fs.remove(targetDirectory);
        await downloadRepo(projectName);
    }
    else {
        const { isOverwrite } = await userCheckUtils();
        // 覆盖
        if (isOverwrite) {
            // 先删除掉原有重名目录
            await fs.remove(targetDirectory);
            await downloadRepo(projectName);
        }
    }
};

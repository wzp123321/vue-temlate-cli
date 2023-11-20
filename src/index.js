#! /usr/bin/env node
// 这个注释可不是多余，所有的 node cli 必须在开头包含此注释，否则命令就没法正常运行，这句注释就是指该命令在 node 环境下运行，所以请务必不要省略此注释！

import { askCreateType } from './useCheck.js';
import ora from 'ora';
import chalk from 'chalk';
import { downloadUtil } from './download.js';
import { TEMPLATE_URL } from './config.js';

const spinner = ora('loading');

spinner.start(); // 开启加载

spinner.succeed('成功');

spinner.fail('请求失败，正在重试...');
// askCreateType();

downloadUtil(TEMPLATE_URL);

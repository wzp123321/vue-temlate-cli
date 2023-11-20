import fs from 'fs-extra';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filenameNew = fileURLToPath(import.meta.url);
const __dirnameNew = path.dirname(__filenameNew);

const ROOT_DIR = path.resolve(__dirnameNew, '../../');
const { version } = fs.readJSONSync(path.resolve(ROOT_DIR, 'package.json'));
// 版本
export const VERSION = version;
// logo
export const LOGO = `
██╗    ██╗ █████╗ ███╗   ██╗███████╗██████╗ 
██║    ██║██╔══██╗████╗  ██║╚══███╔╝██╔══██╗
██║ █╗ ██║███████║██╔██╗ ██║  ███╔╝ ██████╔╝
██║███╗██║██╔══██║██║╚██╗██║ ███╔╝  ██╔═══╝ 
╚███╔███╔╝██║  ██║██║ ╚████║███████╗██║     
 ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝     
                                            `;

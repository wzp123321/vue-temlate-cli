"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadGitRepo = void 0;
const node_util_1 = __importDefault(require("node:util"));
const download_git_repo_1 = __importDefault(require("download-git-repo"));
exports.downloadGitRepo = node_util_1.default.promisify(download_git_repo_1.default);
// 下面是伪代码
(0, exports.downloadGitRepo)(`direct: 仓库地址`, '存放的目标地址', { clone: true });

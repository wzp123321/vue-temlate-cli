"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const chalk_1 = __importDefault(require("chalk"));
// import { create } from './commands';
// import { BRAND_LOGO, VERSION } from './const';
const runner = () => {
    commander_1.program.name(chalk_1.default.cyan('xwg')).usage(`${chalk_1.default.yellow('<command>')} [options]`);
    // program.version(
    //   `\r\n  ${chalk.cyan.bold(VERSION)}
    //   ${chalk.cyan.bold(BRAND_LOGO)}`,
    // );
    // create();
    commander_1.program.on('--help', function () {
        console.log(`\r\n终端执行 ${chalk_1.default.cyan.bold('xwg <command> --help')} 获取更多命令详情\r\n`);
    });
    commander_1.program.parse(process.argv);
};
exports.default = runner;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * loading
 */
const ora_1 = __importDefault(require("ora"));
const spinner = (0, ora_1.default)("loading");
spinner.start(); // 开启加载
spinner.succeed("成功");
spinner.fail("请求失败，正在重试...");

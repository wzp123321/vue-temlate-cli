/**
 * loading
 */
import ora from "ora";

const spinner = ora("loading");

spinner.start(); // 开启加载

spinner.succeed("成功");

spinner.fail("请求失败，正在重试...");

/*
 * @Author: wanzp
 * @Date: 2023-06-11 22:57:48
 * @LastEditors: wanzp
 * @LastEditTime: 2023-06-11 23:04:30
 * @Description:
 */
const program = require("commander");

program
  .version("1.0.0", "-v, --version")
  .command("init <name>")
  .action((name) => {
    console.log(name);
  });
program.parse(process.argv);

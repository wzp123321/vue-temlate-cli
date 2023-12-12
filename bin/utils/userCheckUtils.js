import Inquirer from 'inquirer';
export const prompt = async (prompts) => {
  return await new Inquirer.prompt(prompts);
};
/** 询问要创建的项目类型 */
export const userCheckUtils = async () => {
  const { projectType, typescript } = await prompt([
    // 返回值为 Promise
    // 具体配置参见：https://www.npmjs.com/package/inquirer#questions
    {
      type: 'list',
      name: 'projectType',
      message: '请选择你要创建的项目类型',
      choices: [
        { name: 'vue', value: 'vue' },
        { name: 'react', value: 'react' },
        { name: 'uniapp', value: 'uniapp' },
        { name: 'web-H5', value: 'web-H5' },
      ],
    },
    {
      type: 'list',
      name: 'typescript',
      message: '是否使用typescript',
      choices: [
        { name: '是', value: 'true' },
        { name: '否', value: 'false' },
      ],
    },
  ]);
  return { projectType, typescript };
};

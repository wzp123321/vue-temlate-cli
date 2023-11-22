import Inquirer from 'inquirer';
export const prompt = async (prompts) => {
    return await new Inquirer.prompt(prompts);
};
/** 询问要创建的项目类型 */
export const userCheckUtils = async () => {
    const { projectType } = await prompt([
        // 返回值为 Promise
        // 具体配置参见：https://www.npmjs.com/package/inquirer#questions
        {
            type: 'list',
            name: 'projectType',
            message: '请选择你要创建的项目类型',
            choices: [
                { name: 'vue', value: 'vue' },
                { name: 'uniapp', value: 'uniapp' },
            ],
        },
    ]);
    return projectType;
};

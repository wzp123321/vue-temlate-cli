# 1.修改 package.json 配置

```
 "bin": {
    "z-vue-cli": "./src/index.js"
  },
```

<br/>
<br/>

# 2.npm link 链接到全局

```
pnpm link --global ./
```

<br/>
<br/>

# 3.chalk

为终端输出的文字增加各种各样的颜色

```
pnpm install chalk --dev
```

<br/>
<br/>

# 4.commander

解析用户在终端输入的命令及参数，例如 create、--help 等

```
pnpm install commander
```

<br/>
<br/>

# 5.inquirer

给用户提供各种交互，包括输入、选择等，例如提示用户选择项目的创建类型，其可以提供输入框、radio、checkbox 等强大的交互控件

```
pnpm install inquirer
```

<br/>
<br/>

# 6.ora

增加 loading，例如下载模板时增加 loading

```
pnpm install ora
```

<br/>
<br/>

# 7.fs-extra

fs 模块的增强，支持更强大的文件读写操作

```
pnpm install fs-extra
```

<br/>
<br/>

# 8.download-git-repo

下载模板

```
pnpm install download-git-repo
```

<br/>
<br/>

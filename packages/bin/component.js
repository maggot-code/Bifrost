/*
 * @Author: maggot-code
 * @Date: 2021-06-23 16:30:42
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-06-24 11:31:30
 * @Description: file content
 */
const { program } = require('commander');
const path = require('path');
const fs = require('fs');
const {
    argv
} = process;

const camelCase = (string) => {
    // const rex = /-(\w)/g;
    // return string.replace(rex, (_, str) => str.toUpperCase());

    const baseString = string.split('-');
    return baseString.map(str => str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase()).join("");
};

const ComponentRun = (componentName) => {
    const caseName = `B${camelCase(componentName)}`;
    const baseName = `b-${componentName}`;

    const rootDir = createComponentList(componentName, caseName);

    createSrcList(rootDir, baseName);
}

const createComponentList = (componentName, name) => {
    const cwd = process.cwd();

    const dir = path.resolve(cwd, `${componentName}`);

    const checkFile = fs.existsSync(dir);

    if (checkFile) return dir;

    fs.mkdirSync(dir);

    // 生成index.ts文件
    createEnterFile(dir, name);

    return dir;
};

const createSrcList = (rootDir, baseName) => {
    const dir = `${rootDir}/src`;

    const checkFile = fs.existsSync(dir);

    if (checkFile) return dir;

    fs.mkdirSync(dir);

    // 生成vue模板
    createVueTemplate(dir, baseName);
};

const createEnterFile = (dir, name) => {
    const content = `
import type { App } from 'vue';
import ${name} from './src/index.vue';

${name}.install = (app: App): void => {
    const { name } = ${name};

    app.component(name, ${name});
}

export default ${name};
    `;

    fs.writeFileSync(`${dir}/index.ts`, content);
};

const createVueTemplate = (dir, baseName) => {
    const content = `
<template>
    <div class="${baseName}">${baseName}</div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
    name: "${baseName}",

    components: {},

    props: {},

    computed: {},

    setup() {},

    beforeCreate() {},

    created() {},
});
</script>
    `;

    fs.writeFileSync(`${dir}/index.vue`, content);
};

program
    .name("component")
    .version("0.0.1", '-v, --version')

// 创建项目指令
program
    .command('add <component-name>')
    .description('project <项目名称>')
    .action(ComponentRun)

// 设置需要解析的参数，省略参数，直接使用 process.argv
program.parse(argv);

// 没有参数的情况下，输出参数帮助文档
if (argv.slice(2).length <= 0) { program.outputHelp() }
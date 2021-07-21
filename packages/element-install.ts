/*
 * @Author: maggot-code
 * @Date: 2021-07-12 13:40:23
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-07-12 17:25:11
 * @Description: file content
 */
import type { App } from 'vue';
import 'element-plus/packages/theme-chalk/src/base.scss';

import {
    // Basic
    ElRow,
    ElCol,
    ElButton,
    ElButtonGroup,
    // Form
    ElForm,
    ElFormItem,
    ElInput,
    ElInputNumber,
    // Data
    // Notice
    // Navigation
    // Others
    ElImage
} from 'element-plus';

const components: any[] = [
    // Basic
    ElRow,
    ElCol,
    ElButton,
    ElButtonGroup,
    // Form
    ElForm,
    ElFormItem,
    ElInput,
    ElInputNumber,
    // Data
    // Notice
    // Navigation
    // Others
    ElImage
];

const plugins: any[] = [];

const componentsInstall = (components: any[] = []) => (app: App) => {
    components.forEach(component => {
        const { name } = component;

        app.component(name, component);
    });
}

const pluginsInstall = (plugins: any[] = []) => (app: App) => plugins.forEach(plugin => app.use(plugin));

export {
    components,
    plugins
}

export default {
    ElementComponents: componentsInstall(components),
    ElementPlugins: pluginsInstall(plugins),
};
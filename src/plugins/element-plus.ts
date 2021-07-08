/*
 * @Author: maggot-code
 * @Date: 2021-06-22 17:43:55
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-07-06 15:23:46
 * @Description: file content
 */
import type { App } from 'vue';
import 'element-plus/packages/theme-chalk/src/base.scss';

import {
    // Basic
    ElButton,
    ElButtonGroup,
    // Form
    ElInput,
    ElInputNumber,
    // Data
    // Notice
    // Navigation
    // Others
    ElImage
} from 'element-plus';

const components: any[] = [
    ElButton,
    ElButtonGroup,
    ElInput,
    ElInputNumber,
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
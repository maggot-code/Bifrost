/*
 * @Author: maggot-code
 * @Date: 2021-06-22 17:43:55
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-06-23 09:49:54
 * @Description: file content
 */
import type { App } from 'vue';
import 'element-plus/packages/theme-chalk/src/base.scss';

import {
    // Basic
    ElButton,
    ElButtonGroup,
    // Form
    // Data
    // Notice
    // Navigation
    // Others

} from 'element-plus';

const components: any[] = [
    ElButton,
    ElButtonGroup,
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
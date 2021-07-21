/*
 * @Author: maggot-code
 * @Date: 2021-06-19 23:09:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-07-12 13:41:05
 * @Description: file content
 */
import { createApp } from 'vue';

import App from '@/App.vue';

import ElementInstall from '@pkg/element-install';

const { ElementComponents, ElementPlugins } = ElementInstall;

const app = createApp(App);

ElementComponents(app);

ElementPlugins(app);

app.mount('#app');

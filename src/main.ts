/*
 * @Author: maggot-code
 * @Date: 2021-06-19 23:09:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-06-23 10:52:20
 * @Description: file content
 */
import { createApp } from 'vue';

import App from '@/App.vue';

import ElementInstall from '@ps/element-plus';

const { ElementComponents, ElementPlugins } = ElementInstall;

const app = createApp(App);

ElementComponents(app);

ElementPlugins(app);

app.mount('#app');

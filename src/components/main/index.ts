/*
 * @Author: maggot-code
 * @Date: 2021-06-23 09:47:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-06-23 09:55:28
 * @Description: file content
 */
import type { App } from 'vue';
import BMain from './src/index.vue';

BMain.install = (app: App): void => {
    const { name } = BMain;

    app.component(name, BMain);
}

export default BMain;


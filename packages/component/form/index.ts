/*
 * @Author: maggot-code
 * @Date: 2021-06-23 15:08:25
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-06-23 15:10:35
 * @Description: file content
 */
import type { App } from 'vue';
import BForm from './src/index.vue';

BForm.install = (app: App): void => {
    const { name } = BForm;

    app.component(name, BForm);
}

export default BForm;
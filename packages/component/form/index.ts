/*
 * @Author: maggot-code
 * @Date: 2021-07-12 14:39:46
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-07-14 16:43:12
 * @Description: file content
 */

import type { App } from 'vue';
import BiForm from './src/index.vue';

BiForm.install = (app: App): void => {
    const { name } = BiForm;

    app.component(name, BiForm);
}

export default BiForm;

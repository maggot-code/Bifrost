
import type { App } from 'vue';
import BiInput from './src/index.vue';

BiInput.install = (app: App): void => {
    const { name } = BiInput;

    app.component(name, BiInput);
}

export default BiInput;

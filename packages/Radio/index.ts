import { App, Plugin } from 'vue';
import TVURadio from './src/index.vue';

export const RadioPlugin: Plugin = {
  install(app: App) {
    app.component('tvu-radio', TVURadio);
  },
};

export { TVURadio };

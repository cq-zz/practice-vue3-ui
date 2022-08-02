import { App, Plugin } from 'vue';
import TVUButton from './src/index.vue';

export const ButtonPlugin: Plugin = {
  install(app: App) {
    app.component('tvu-button', TVUButton);
  },
};

export { TVUButton };
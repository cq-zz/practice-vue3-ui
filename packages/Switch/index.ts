import { App, Plugin } from 'vue';
import TVUSwitch from './src/index.vue';

export const SwitchPlugin: Plugin = {
  install(app: App) {
    app.component('tvu-switch', TVUSwitch);
  },
};

export { TVUSwitch };
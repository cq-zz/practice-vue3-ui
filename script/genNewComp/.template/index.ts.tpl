import { App, Plugin } from 'vue';
import {{ componentName }} from './src/index.vue';

export const {{ componentName }}Plugin: Plugin = {
  install(app: App) {
    app.component('my-{{ componentClassName }}', {{ componentName }});
  },
};

export {
  {{ componentName }},
};

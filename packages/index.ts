/* eslint-disable */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import { App, Plugin } from 'vue';

import { ButtonPlugin } from './Button';
import { SwitchPlugin } from './Switch';
import { RadioPlugin } from './Radio';

const MYKitPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app);
    SwitchPlugin.install?.(app);
    RadioPlugin.install?.(app);
  },
};

export default MYKitPlugin;

export * from './Button'
export * from './Switch'
export * from './Radio'
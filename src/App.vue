<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import { reactive } from 'vue'
import ComponentList from '../packages/list.json';

const data = reactive({
  links: ComponentList.map(item => ({
    path: `/components/${item.componentName}`,
    name: item.componentName + ' ' + item.componentZhName
  }))
})

</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <div class="tiny-vue3-ui-doc">
    <aside>
      <router-link v-for="(link, index) in data.links" :key="index" :to="link.path">{{ link.name }}</router-link>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body {
  margin: 0;
  padding: 0;
}
.tiny-vue3-ui-doc {
  display: flex;
  min-height: 100vh;
  aside {
    display: flex;
    flex-direction: column;
    width: 200px;
    padding: 15px;
    border-right: 1px solid #ccc;

    >a {
      margin-top: 10px;
      color: #000000d9;
    }
  }
  main {
    width: 100%;
    flex: 1;
    padding: 15px;
  }
}
</style>

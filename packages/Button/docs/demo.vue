
<script setup lang="ts">
  const onClick = (num, event) => { console.log(`我是第 ${num} 个自定义按钮`, event) }
</script>
<template>
  <div>
    <tvu-button @click="onClick(1, $event)" type="default">default</tvu-button>
    <tvu-button @click="onClick(2, $event)" type="primary">primary</tvu-button>
    <tvu-button @click="onClick(3, $event)" type="success" size="small">success</tvu-button>
    <tvu-button @click="onClick(4, $event)" type="warn" size="normal">warn</tvu-button>
    <tvu-button @click="onClick(5, $event)" type="error" size="large">error</tvu-button>
  </div>
</template>
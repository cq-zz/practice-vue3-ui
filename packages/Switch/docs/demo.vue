
<script setup lang="ts">
  const onChange = (checked) => { console.log("当前状态", checked) }
</script>
<template>
  <div>
    <tvu-switch @change="onChange"></tvu-switch>
    <tvu-switch @change="onChange" checked="true"></tvu-switch>
  </div>
</template>
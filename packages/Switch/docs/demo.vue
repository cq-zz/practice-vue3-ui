
<script setup lang="ts">
  const onChange = (checked) => { console.log("ε½εηΆζ", checked) }
</script>
<template>
  <div>
    <tvu-switch @change="onChange"></tvu-switch>
    <tvu-switch @change="onChange" checked="true"></tvu-switch>
  </div>
</template>
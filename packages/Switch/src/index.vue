<script setup>
defineProps(['visible', 'checked'])
defineEmits(['change'])
</script>

<template>
    <input
        type="checkbox"
        class="tvu_switch"
        :checked="checked || false"
        @change="$emit('change', $event.target.checked)"
    />
</template>

<style scoped lang="less">
input[type="checkbox"].tvu_switch {
    outline: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    width: 40px;
    height: 20px;
    background: #ccc;
    border-radius: 10px;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
}

input[type="checkbox"].tvu_switch::after {
    content: "";
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0, 0, 2px, #999;
    transition: 0.4s;
    top: 2px;
    position: absolute;
    left: 2px;
}

input[type="checkbox"].tvu_switch:checked {
    background: #1890ff;
}

/* 当input[type=checkbox]被选中时：伪元素显示下面样式 位置发生变化 */
input[type="checkbox"].tvu_switch:checked::after {
    content: "";
    position: absolute;
    left: 55%;
    top: 2px;
}
</style>
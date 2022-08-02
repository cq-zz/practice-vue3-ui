<script setup>
    defineProps(['type', 'size'])
    defineEmits(['click']);
</script>

<template>
    <button
        class="tvu_button"
        :class="[type ? 'tvu_' + type + '_button' : 'tvu_default_button', size ? 'tvu_' + size + '_button' : 'tvu_normal_button']"
        @click="$emit('click', $event)"
    >
        <slot></slot>
    </button>
</template>

<style scoped lang="less">
.tvu_button {
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    margin-right: 20px;
    border: 0;

    &:hover {
        box-shadow: 0 0 5px gray;
    }
}

.tvu_default_button {
    color: gray;
}

.tvu_primary_button {
    background-color: #1890FF;
    color: #fff;
}

.tvu_error_button {
    background-color: red;
    color: #fff;
}

.tvu_success_button {
    background-color: green;
    color: #fff;
}

.tvu_warn_button {
    background-color: orange;
    color: #fff;
}

.tvu_small_button {
    padding: 4px 6px;
}

.tvu_normal_button {
    padding: 8px 12px;
}

.tvu_large_button {
    padding: 12px 18px;
}
</style>
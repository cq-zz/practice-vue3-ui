<script setup>
import { ref, onMounted, computed, nextTick } from 'vue'
import Prism from 'prismjs';
import '../assets/prism.css'; // 主题 CSS

const isDev = import.meta.env.MODE === 'development';

const props = defineProps(['componentName', 'demoName']);

const sourceCode = ref(''); // 源码
const codeVisible = ref(false); // 源码状态

onMounted(async () => {
    if (isDev) {
        sourceCode.value = (
            await import(/* @vite-ignore */ `../../packages/${props.componentName}/docs/${props.demoName}.vue?raw`)
        ).default;
    } else {
        sourceCode.value = await fetch(`/packages/${props.componentName}/docs/${props.demoName}.vue`).then((res) => res.text());
    }
    // 在源码全部渲染好了后执行高亮
    await nextTick();
    Prism.highlightAll();
});

const previewSourceCode = computed(() => {
    return sourceCode.value;
    // return sourceCode.value.replace(/'\.\.\/\.\.\/index'/g, `'@tencent/tvu'`);
});

// 查看源码
const showSourceCode = () => {
    codeVisible.value = !codeVisible.value;
};
</script>
<template>
    <div class="tvu_preview">
        <section>
            <slot></slot>
        </section>
        <div v-show="codeVisible" class="source_code">
            <pre class="language-html"><code class="language-html">{{ previewSourceCode }}</code></pre>
        </div>
        <div class="preview_bottom">
            <span name="Code" @click="showSourceCode">查看代码</span>
        </div>
    </div>
</template>

<style scoped lang="less">
pre {
    line-height: 0;
}
.tvu_preview {
    border: 4px;
    border: 1px dashed #e7e7e7;
    padding: 10px;
    border-bottom: 1px dashed #e7e7e7;
    section {
        margin: 15px;
    }
    .source_code {
        max-height: 500px;
    }
    .language-html {
        margin: 0;
        padding: 0 15px;
    }
    .preview_bottom {
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px dashed #e7e7e7;

        > span {
            cursor: pointer;
        }
    }
}
</style>
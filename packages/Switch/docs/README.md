<script setup>
    import demo from './demo.vue'
</script>

## Switch 开关

### 代码演示
<Preview componentName="Switch" demoName="demo">
    <demo />
</Preview>

### 属性
属性名 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`checked` | 状态 | boolean | true、false | `false` | 否


### 事件
事件名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
`change` | 点击 | params、$event | params 原生的 dom event
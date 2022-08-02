<script setup>
    import demo from './demo.vue'
</script>

## Button 按钮

### 代码演示
<Preview componentName="Button" demoName="demo">
    <demo />
</Preview>

### 属性
属性名 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`type` | 类型 | string | priamry、success、warn、error | `default` | 否 
`size` | 尺寸 | string | small、normal、large | `normal` | 否

### 事件
事件名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
`click` | 点击 | params、$event | params 原生的 dom event
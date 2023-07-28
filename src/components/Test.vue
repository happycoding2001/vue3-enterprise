// Test.vue
<template>
  <div>{{ props.count }}</div>
</template>

<script setup>
const props = defineProps({ count: Number })
const testFn = () => {
  console.log('这是测试方法')
}

defineExpose({ testFn })
</script>

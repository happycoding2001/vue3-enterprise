<template>
  <div>{{ props.count }}</div>
</template>

<script>
export default {
  name: 'Test',
  props: {
    count: Number
  },
  setup(props) {
    const testFn = () => {
      console.log('我是测试方法')
    }
    return {
      props,
      testFn // 将这个测试方法 return 出去
    }
  }
}
</script>

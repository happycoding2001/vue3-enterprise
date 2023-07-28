<template>
  <div>
    <h1>{{ state.search }}</h1>
    <button @click="handleSearch">改变查询字段</button>
  </div>

</template>

<script setup>
import { reactive, watchEffect } from 'vue'
let timer = null
let state = reactive({
  search: Date.now()
})
watchEffect((onInvalidate) => {
  console.log(`监听查询字段${state.search}`)
  timer = setTimeout(() => {
    console.log('模拟接口异步请求，3 秒之后返回详情信息')
  }, 3000)
  onInvalidate(() => {
    console.log('清除');
    clearTimeout(timer);
  })
})

const handleSearch = () => {
  state.search = Date.now()
}
</script>

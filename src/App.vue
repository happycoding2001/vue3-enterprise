<template>
  <div>
    <h1>{{ state.search }}</h1>
    <button @click="handleSearch">改变查询字段</button>
  </div>

</template>

<script setup>
import { reactive, watch } from 'vue'
let timer = null
let state = reactive({
  search: Date.now(),
  a:1,
  b:'b',
})
watch(() => {
  return state.a
}, (nextData, preData) => {
  console.log('preData', preData)
  console.log('nextData', nextData)
})

const handleSearch = () => {
  state.search = Date.now()
  state.a++
}
</script>

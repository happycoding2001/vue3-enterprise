<!--App.vue-->
<template>
  <div>
    <h1>提供/注入</h1>
    <Father />
  </div>

</template>

<script setup>
import { provide } from 'vue'
import Father from './components/Father.vue'

provide('name', '陈尼克') // 单个声明形式
provide('info', {
  work: '前端开发',
  age: '18'
}) // 多个声明形式
</script>

<template>
  <Test @add="add" :count="count"></Test>
  <button @click="add">点击</button>
</template>

<script setup>
import { ref } from 'vue'
import Test from './components/Test.vue'

const count = ref(0)
count.value=10



const add = ()=>{
  count.value+=10
}
</script>

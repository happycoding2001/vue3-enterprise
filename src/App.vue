<template>
  <Test :count="count" ref="TestRef"></Test>
</template>

<script setup>
import { ref } from 'vue'
import Test from './components/Test.vue'

const count = ref(1)
const TestRef = ref()
console.log('TestRef', TestRef)

</script>

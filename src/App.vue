<template>
  <div ref='shisanRef'>十三</div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const shisanRef = ref(null)
onMounted(() => {
  console.log(shisanRef)
})
</script>

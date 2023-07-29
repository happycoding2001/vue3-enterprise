<template>
  <div>
    <h1>提供/注入</h1>
    <Father />
  </div>

</template>

<script>
import Father from './components/Father.vue'

export default {
  components: {
    Father
  },
  provide: {
    name: '陈尼克'
  }
}
</script>

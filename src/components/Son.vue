<!--Son.vue-->
<template>
    <div>我是儿子，{{ name }}</div>
  </template>
  
  <script>
  export default {
    name: 'Son',
    inject: ['name']
  }
  </script>
  
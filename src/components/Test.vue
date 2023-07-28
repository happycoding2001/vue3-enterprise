<template>
    <div @click="add">{{ props.count }}</div>
  </template>
  
  <script setup>
  const props = defineProps({ count: Number })
  console.log('props', props)
  const emit = defineEmits(['add'])

  const add = ()=>{
    emit('add')
  }
  </script>
  
<template>
  <div>
      <input ref="inputRef" />
      <button @click="handleClick">Click me</button>
  </div>
</template>
<script>

import { ref } from'vue';
export default {
setup() {
  const inputRef = ref(null);
  const handleClick = () => {
    inputRef.value.value=10;
  };
  return {
    inputRef,
    handleClick,
  };
},
};
</script>
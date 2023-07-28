<template>
  <div>
      <MyComponent :ref="refHandler" />
  </div>
</template>
<script>
import { ref, onMounted } from 'vue';
import MyComponent from './components/Test.vue';

export default {
components: {
  MyComponent,
},
setup() {
  const refHandler = (el) => {
    console.log(el); // 打印组件实例或DOM元素
  };
  onMounted(() => {
    console.log(refHandler.value); 
  });
  return {
    refHandler,
  };
},
};
</script>
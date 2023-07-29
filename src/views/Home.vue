<!--Home.vue-->
<template>
<router-link :to="{path:'/about',query:{id:1}}">Home</router-link>
<div @click="linkTo">跳转</div>
</template>

<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()
const linkTo = () => {
    
    router.push('/about')
}

</script>

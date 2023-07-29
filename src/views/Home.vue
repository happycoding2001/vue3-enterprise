<!--Home.vue-->
<template>
<router-link :to="{path:'/about',query:{id:1}}">Home</router-link>
<div @click="linkTo">跳转{{ENV}}</div>
</template>

<script setup>
const ENV = import.meta.env
import {
    useRouter
} from 'vue-router'
const router = useRouter()
const linkTo = () => {

    router.push('/about')
}

</script>

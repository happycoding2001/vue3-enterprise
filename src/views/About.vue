<!--About.vue-->
<template>
<p>About</p>
<button @click="backTo">回到Home</button>
</template>

<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()

const backTo = () => {
    router.push({
        name: 'home',
        params: {
            id: 1
        }
    })
}
</script>

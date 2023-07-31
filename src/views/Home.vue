<!--Home.vue-->
<template>
<router-link :to="{path:'/about',query:{id:1}}">Home</router-link>
<div @click="linkTo">跳转{{ENV}}</div>
 
<el-button type="primary">主要按钮</el-button>
<el-input v-model="val"></el-input>
<el-button @click="save" type="primary">存</el-button>
<el-button @click="load" type="primary">取</el-button>
<el-icon><Setting /></el-icon>

</template>

<script setup>
import {ref} from 'vue'
import {Setting} from '@element-plus/icons-vue'

import {localGet,localSet,localRemove} from '@/utils'
const ENV = import.meta.env
import {
    useRouter
} from 'vue-router'
const router = useRouter()
const linkTo = () => {

    router.push('/about')
}
const val = ref(123)
const save = ()=>{
    localSet('tt','ssds'+val.value)
}
const load = ()=>{
   val.value = localGet('tt')
}
</script>

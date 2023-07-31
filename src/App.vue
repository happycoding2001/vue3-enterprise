<template>
    <div class="layout">
      <el-container class="container">
        <el-aside class="aside">
          <!--系统名称+logo-->
          <div class="head">
            <div>
              <img src="//s.weituibao.com/1582958061265/mlogo.png" alt="logo">
              <span>vue3 admin</span>
            </div>
          </div>
          <!--一条为了美观的线条-->
          <div class="line" />
          <el-menu
            background-color="#222832"
            text-color="#fff"
            :router="true"
          >
            <!--一级栏目-->
            <el-sub-menu index="1">
              <template #title>
                <span>Dashboard</span>
              </template>
              <!--二级栏目-->
              <el-menu-item-group>
                <el-menu-item index="/"><el-icon><DataLine /></el-icon>系统介绍</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
        </el-aside>
        <!--右边内容布局-->
        <el-container class="content">
        <div class="main">
            <!--将 <router-view></router-view> 移到这里，并且用单标签-->
            <router-view />
        </div>
        </el-container>

      </el-container>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App'
  }
  </script>
  
  <style scoped>
  .layout {
    min-height: 100vh;
    background-color: #ffffff;
  }
  .container {
    height: 100vh;
  }
  .aside {
    width: 200px!important;
    background-color: #222832;
  }
  .head {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
  }
  .head > div {
    display: flex;
    align-items: center;
  }
  
  .head img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  .head span {
    font-size: 20px;
    color: #ffffff;
  }
  .line {
    border-top: 1px solid hsla(0,0%,100%,.05);
    border-bottom: 1px solid rgba(0,0,0,.2);
  }
  </style>
  
  <style>
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  </style>
  
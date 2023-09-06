<template>
    <el-container>
      <el-aside style="width: 100px;margin-top: 20px;">
        <switch></switch>
      </el-aside>
      <el-main> 
        <flask class="flask-area"></flask>
      </el-main>
    </el-container>
  </template>
 
  <script>
  import Flask from './Flask.vue';
  export default {
    beforeRouteEnter(to, from, next) {
      // 添加背景色 margin:0;padding:0是为了解决vue四周有白边的问题
      document.querySelector('body').setAttribute('style', 'margin:0;padding:0')
      next()
    },
    name: 'AppFlask',
    components: { Flask }
  }
  </script>
    
  <style scoped>
  .flask-area {
    width: 990px;
    margin-left: auto;
    margin-right: auto;
  }
  </style>
    
    
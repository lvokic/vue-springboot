<template>
    <el-container>
      <el-aside style="width: 100px;margin-top: 20px;">
        <switch></switch>
      </el-aside>
      <el-main> 
        <test class="test-area"></test>
      </el-main>
    </el-container>
  </template>
  
  <script>
  import Test from './Test.vue';
  export default {
    beforeRouteEnter(to, from, next) {
      // 添加背景色 margin:0;padding:0是为了解决vue四周有白边的问题
      document.querySelector('body').setAttribute('style', 'margin:0;padding:0')
      next()
    },
    name: 'AppTest',
    components: { Test }
  }
  </script>
    
  <style scoped>
  .test-area {
    width: 990px;
    margin-left: auto;
    margin-right: auto;
  }
  </style>
    
    
<template>
  <el-container>
    <el-main>
      <div class="flask-area">
        <flask></flask>
      </div>
      <div class="upload-area">
        <upload></upload>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import Flask from './Flask.vue';
import Upload from './Upload.vue';

export default {
  beforeRouteEnter(to, from, next) {
    // 添加背景色 margin:0;padding:0是为了解决vue四周有白边的问题
    document.querySelector('body').setAttribute('style', 'margin:0;padding:0');
    next();
  },
  name: 'AppFlask',
  components: { Flask, Upload },
};
</script>

<style scoped>
.flask-area,
.upload-area {
  width: 700px;
  margin: 20px auto; /* 居中显示，上下外边距为 20px */
}
</style>

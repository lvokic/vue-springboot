<template>
  <el-container>
    <el-main>
      <div class="upload-download-container">
        <div class="upload-area">
          <upload></upload>
        </div>
        <div class="dectect-area">
          <detect></detect>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import Upload from './Upload.vue';
import Download from './Download.vue';
import Detect from './Detect.vue';

export default {
  name: 'AppFlask',
  components: { Detect, Upload, Download },
};
</script>

<style scoped>
.upload-download-container {
  padding-top: 80px;
  position: relative; /* 设置相对定位，以便子元素可以使用 z-index */
}


.upload-area,
.download-area{
  width: 100%; /* 使组件占据整个宽度 */
  padding: 20px; /* 添加一些内边距 */
  box-sizing: border-box; /* 内边距不会增加元素的实际宽度 */
}


</style>

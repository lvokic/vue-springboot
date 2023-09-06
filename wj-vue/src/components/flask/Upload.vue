<template>
  <div class="upload">
    <el-upload
      ref="uploadRef"
      class="upload-demo"
      drag
      :action="uploadUrl"
      :multiple="true"
      :before-upload="beforeUpload"
      :on-success="handleSuccess"
      :on-error="handleError"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件,且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: 'Upload',
  data() {
    return {
      uploadUrl: 'http://127.0.0.1:5000/api-flask/upload/',
    };
  },
  methods: {
    handleSuccess(response, file) {
      // 处理成功上传后的响应
      console.log(response);
      // 可以在这里更新Vue组件中的数据或者显示上传成功信息
    },
    handleError(error, file) {
      // 处理上传失败的情况
      console.error(error);
      // 可以在这里显示上传失败信息
    },
    beforeUpload(file) {
      // 可以在这里添加一些上传前的逻辑，例如文件类型、大小等的验证
      console.log('Before Upload:', file);
      return true; // 返回 true 才会执行上传操作
    },
    triggerUpload() {
      // 手动触发文件上传
      this.$refs.uploadRef.submit();
    },
  },
};
</script>

<style scoped>
.upload {
  margin-top: 10px;
}
</style>

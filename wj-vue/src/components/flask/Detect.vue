<template>
    <div>
      <input type="file" @change="uploadImage">
      <button @click="detectObjects">开始检测</button>
  
      <!-- 显示上传的图像 -->
      <div v-if="uploadedImage">
        <h3>上传的图像</h3>
        <img :src="uploadedImage" alt="Uploaded Image">
      </div>
  
      <!-- 显示检测结果图像 -->
      <div v-if="resultImage">
        <h3>检测结果</h3>
        <img :src="resultImage" alt="Detection Result">
      </div>
  
      <!-- 提供检测结果文件下载链接 -->
      <div v-if="resultFile">
        <h3>检测结果文件</h3>
        <a :href="resultFile" download="result_image.jpg">下载检测结果</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Detect',
    data() {
      return {
        uploadedImage: '', // 用于显示上传的图像
        resultImage: '',   // 用于显示检测结果图像
        resultFile: null,  // 用于提供检测结果文件下载链接
        selectedImage: null,
      };
    },
    methods: {
      uploadImage(event) {
        this.selectedImage = event.target.files[0];
        // 显示上传的图像
        this.uploadedImage = URL.createObjectURL(this.selectedImage);
      },
      detectObjects() {
        const formData = new FormData();
        formData.append('image', this.selectedImage);
  
        this.$axios2.post('/detect', formData, {
          responseType: 'blob' // 指定响应类型为二进制数据（文件）
        })
        .then(response => {
          // 创建一个 Blob 对象表示检测结果文件
          const blob = new Blob([response.data], { type: 'image/jpeg' });
          // 生成一个临时的文件下载链接
          const url = window.URL.createObjectURL(blob);
          // 更新检测结果文件链接
          this.resultFile = url;
          // 更新检测结果图像链接
          this.resultImage = url; // 此处应该是检测结果图像的链接
        })
        .catch(error => {
          console.error(error);
        });
      },
    },
  };
  </script>
  
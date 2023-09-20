<template>
    <div>
      <img :src="imageUrl" alt="Image">
      <p class="image-escrpition">图片检测结果</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Download',
    data() {
      return {
        imageUrl: 'http://127.0.0.1:5000/api-flask/download', // Flask后端提供的图片URL
      };
    },
    methods: {
      downloadImage() {
        // 创建一个链接元素
        const link = document.createElement('a');
        link.href = this.imageUrl;
        link.download = 'image.jpg'; // 可以根据需要更改文件名
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
    },
  };
  </script>
  
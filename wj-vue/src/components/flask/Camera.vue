<template>
    <div>
      <img ref="videoPlayer" width="640" height="480">
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sourceUrl: 'http://127.0.0.1:5000/api-flask/video_feed'
      };
    },
    mounted() {
      this.initImageStream();
    },
    methods: {
      initImageStream() {
        const img = this.$refs.videoPlayer;
  
        // 定时请求后端获取图片流，并显示在前端
        setInterval(() => {
          img.src = this.sourceUrl + '?' + new Date().getTime();
        }, 500); // 每隔1秒更新图像流（根据后端提供图像的频率调整）
      }
    }
  };
  </script>
  
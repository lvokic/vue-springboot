<template>
  <div class="Flask">
    <!-- ... 其他组件内容 ... -->
    <div>
      <h2>Messages:</h2>
      <el-table :data="messages" style="width: 100%">
        <el-table-column label="Message" prop="message"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Flask',
  data() {
    return {
      dialogVisible: false,
      flaskdata: [],
      messages: []  // 用于存储消息的数组
    };
  },
  mounted() {
    this.fetchMessages(); // 调用获取消息的方法
  },
  methods: {
    fetchMessages() {
      this.$axios2.get('/messages')
        .then((response) => {
          if (response && response.status === 200) {
            // 更新 messages 数组
            this.messages = response.data.messages.map(message => ({ message }));
          }
        })
        .catch((error) => {
          console.error('Failed to fetch messages:', error);
        });
    }
  }
};
</script>

<style>
/* 可以添加一些自定义的样式来调整表格的外观 */
.Flask {
  margin-top: 100px;
  color: aqua;
}

.el-table {
  border: 1px solid #000000; /* 表格边框颜色 */
  background-color: #412424; /* 表格背景颜色 */
}

.el-table thead th {
  background-color: #551e1e; /* 表头背景颜色 */
  color: rgb(39, 30, 30); /* 表头文字颜色 */
}

</style>

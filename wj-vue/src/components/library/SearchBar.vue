<template>
    <div style="margin-bottom: 10px;display: flex;justify-content: center;align-items: center">
    <el-input
      @keyup.enter.native="searchClick"
      placeholder="..."
      prefix-icon="el-icon-search"
      size="small"
      style="width: 500px;margin-right: 10px;margin-top: 60px;"
      v-model="keywords">
    </el-input>
    <el-button size="small" type="primary" icon="el-icon-search" @click="searchClick" style="margin-top: 60px;">搜索</el-button>
  </div>
</template>

<script>
export default {
    beforeRouteEnter(to, from, next) {
        // 添加背景色 margin:0;padding:0是为了解决vue四周有白边的问题
        document.querySelector('body').setAttribute('style', 'margin:0;padding:0')
        next()
    },
    name: 'SearchBar',
    data() {
        return {
            keywords: '',
            books: [],
            cardLoading: []
        }
    },
    methods: {
        searchClick() {
            this.$emit('onSearch')
        }
    }
}
</script>

<style scoped></style>
<template>
  <body id="poster">
    <el-menu :default-active="'/index'" router mode="horizontal" background-color="black" text-color="white"
      active-text-color="#ffd04b" style="min-width: 1200px;border: 0px;">
      <el-menu-item v-for="(item, i) in navList" :key="i" :index="item.name">
        {{ item.navItem }}
      </el-menu-item>
      <a href="#nowhere" style="color: whitesmoke;float: right;padding: 20px;">Else</a>
      <span style="position: absolute;padding-top: 20px;right: 43%;font-size: 20px;font-weight: bold"><Title>User_Data</Title></span>
    </el-menu>
  </body>
</template>
 
<script>
export default {
  beforeRouteEnter(to, from, next) {
    // 添加背景色 margin:0;padding:0是为了解决vue四周有白边的问题
    document.querySelector('body').setAttribute('style', 'margin:0;padding:0')
    next()
  },

  name: 'NavMenu',
  data() {
    return {
      navList: [
        { name: '/index', navItem: '首页' },
        { name: '/flask', navItem: 'Flask' },
        { name: '/library', navItem: '数据库' },
        { name: '/admin', navItem: 'Query' },
        { name: '/test', navItem: '测试数据' }
      ]
    }
  }
}
</script>

<style scoped>
#poster {
  background: url("../../assets/bg.jpeg");
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}

body {
  margin: 0px;
  border: 0px;
  padding: 0px;
  /* margin: 边缘空白 */
}

a {
  text-decoration: none;
}

span {
  pointer-events: none;
}
</style>

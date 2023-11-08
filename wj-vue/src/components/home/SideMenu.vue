<template>
    <el-menu class="categories" default-active="0" active-text-color="#ffd04b" text-color="white"
        background-color="transparent" style="border: 0px;">
        <el-menu-item index="0">
            <i class="el-icon-menu"></i>
            <span slot="title">
                <router-link to="/tempandhumi" style="text-decoration: none">温度&湿度</router-link>
            </span>
        </el-menu-item>
        <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">
                <router-link to="/light" style="text-decoration: none">光敏</router-link>
            </span>
        </el-menu-item>
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">
                <router-link to="/smoke" style="text-decoration: none">烟雾</router-link>
            </span>
        </el-menu-item>
        <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span slot="title">
                <router-link to="/decibel" style="text-decoration: none">分贝</router-link>
            </span>
        </el-menu-item>
  </el-menu>
</template>

<script>
export default {
    name: 'SideMenu',
}
</script>

<style scoped>
.categories {
    position: fixed;
    margin-left: 45%;
    left: -600px;
    top: 100px;
    width: 150px;

}
</style>
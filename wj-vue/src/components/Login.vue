<template>
    <body id="poster">
        <el-form class="login-container" label-position="left" label-width="0px">
            <h3 class="login_title">系统登录</h3>
            <el-form-item>
                <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item style="width: 100%">
                <el-button type="primary" style="width: 100%;background: #505458;border: none"
                    v-on:click="login">登录</el-button>
            </el-form-item>
        </el-form>
    </body>
</template>
  
<script>
export default {
    name: 'Login',
    data() {
        return {
            loginForm: {
                username: 'admin',
                password: '123'
            },
            responseResult: []
        }
    },
    methods: {
        login() {
            var _this = this
            console.log(this.$store.state)
            this.$axios
                .post('/login', {
                    username: this.loginForm.username,
                    password: this.loginForm.password
                })
                .then(successResponse => {
                    if (successResponse.data.code === 200) {
                        _this.$store.commit('login',_this.loginForm)
                        var path = this.$route.query.redirect
                        this.$router.replace({ path: path === '/' || path === undefined ? 'index' : path})
                    }
                })
                .catch(failResponse => {
                })
        }
    }
}
</script>
  
<style>
#poster {
    background:url("../assets/eva.png") no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    /* cover: 将背景图像扩展到足以覆盖背景区域 */
    position: fixed;
    /* fixed: 固定定位 */
}

body{
    margin: 0px;
    /* margin: 边缘空白 */
}

.login-container {
    border-radius: 15px;
    /* 圆角边框 */
    background-clip: padding-box;
    /* 背景被裁剪到内边距框 */
    margin: 140px auto;
    width: 360px;
    padding: 35px 35px 15px 35px;
    /* 上右下左内边距 */
    background: #d4cfcf;
    border: 1px solid #7b6b6b;
    box-shadow: 0 0 25px #b5abab;
}

.login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #2f3943;
}
</style>
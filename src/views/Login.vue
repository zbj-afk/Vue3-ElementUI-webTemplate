<template>
    <div class="login">
        <p>后台登陆页面</p>
        <el-form label-width="80px" :model="user">
            <el-form-item label="用户名">
                <el-input v-model="user.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input placeholder="请输入密码" v-model="user.password" show-password></el-input>
            </el-form-item>
        </el-form>
        <el-button @click="submit" class="btn" type="primary">登录</el-button>
    </div>
</template>

<script>
import { reactive } from 'vue'
import { ElMessage } from 'element-plus';
import { $http } from '../http/index.js';
import router from '../router/index.js';
export default {
    name: 'Login',
    setup() {
        let user = reactive({
            name: '',
            password: ''
        })
        let submit = () => {
            if (!user.name || !user.password) {
                ElMessage.error('请填写账号密码');
                return
            }
            // $http.get('url', {
            //     user
            // }).then(res => {
            //     router.push('/home')
            // })
            router.push('/home')
        }
        return {
            user,
            submit
        }
    }
}
</script>

<style>
.login {
    width: 300px;
    margin: auto auto;
    border: 1px solid;
    border-radius: 10px;
    padding: 20px
}

p {
    text-align: center;
}

.btn {
    width: 100%;
}
</style>
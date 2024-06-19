<template>
  <div class="home">
    <el-container>
      <el-header class="top">
        <el-row :gutter="20">
          <el-col :span="16">
            <img class="logo" src="../assets/logo.png" alt="">
          </el-col>
          <el-col :span="8">
            <div class="info">
              <span class="name">GGBond</span>
              <el-button class="btn" type="text" @click="logOut">退出</el-button>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu router = 'true' class="el-menu-vertical-demo" >
            <el-menu-item v-for="i in tabList" :router="i.path" :key="i.title" :index="i.name" >
              <template #title>{{i.title}}</template>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import router from '../router/index';
export default {
  name: 'HomeView',
  setup() {
    let tabList = router.options.routes[0].children;
    let logOut = () => {
            router.push('/')
        }
    return {
      tabList,
      logOut
    };
  },
};
</script>
<style lang="scss" scoped>
.top {
  background: #efefef;
  padding: 5px;

  .logo {
    width: 50px;
  }

  .info {
    justify-content: flex-end;
    display: flex;
    margin-left: 10px;
  }

  .name {
    padding-top: 8px;
  }

  .btn {
    width: 30px;
    margin-left: 10px;
  }
}
</style>

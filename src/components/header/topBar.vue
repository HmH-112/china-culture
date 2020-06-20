<template>
  <el-row class="topbar">
    <el-col>
      <p>您好，欢迎你来到国学在线网站</p>
      <div class="m-user" v-if="!$store.state.userName">
        <router-link class="login" :to="{name:'login'}">立即登陆</router-link>
        <router-link class="register" :to="{name:'register'}">注册</router-link>
      </div>
      <div class="m-user" v-else>
        <p>您好！{{$store.state.userName}}</p>
        <div @click="quit">
          <router-link class="to-login" :to="{name:'default'}">退出</router-link>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  methods: {
    quit() {
      this.$store.commit("setUserName", "");
      const expires = 900 * 24 * 60 * 60 * 1000;
      const date = new Date(+new Date() - expires);
      document.cookie = `login=true;expires=${date.toUTCString(expires)}`;
    }
  }
};
</script>
<style lang="scss">
.topbar {
  font-family: KaiTi;
  background-color: #f8f8f8;
  .el-col {
    width: 1190px;
    height: 40px;
    margin: 0 auto;
    line-height: 40px;
    float: none;
    display: flex;
    justify-content: space-between;
    color: #999;
    font-size: 14px;
    .login,
    .register {
      font-size: 15px;
      color: #999;
      &.login {
        margin-right: 20px;
        color: #a61e26;
      }
      &.register:hover {
        color: #a61e26;
      }
    }
    p {
      display: inline;
      margin-right: 20px;
    }
    div {
      display: inline;
      .to-login {
        font-size: 15px;
        color: #999;
        &:hover {
          color: #a61e26;
        }
      }
    }
  }
}
</style>
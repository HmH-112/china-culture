<template>
  <div class="page-login">
    <div class="form">
      <h4 v-if="error" class="tips">{{error}}</h4>
      <p>
        <span>账号登陆</span>
      </p>
      <el-input
        :class="{error: error && !userName}"
        v-model="userName"
        placeholder="手机号/用户名/邮箱"
        prefix-icon="el-icon-user"
      ></el-input>
      <el-input
        :class="{error: error && !password}"
        v-model="password"
        type="password"
        placeholder="密码"
        prefix-icon="el-icon-lock"
      ></el-input>
      <div class="foot">
        <a href="#">忘记密码?</a>
      </div>
      <el-button type="primary" class="btn-login" @click="submit">登陆</el-button>
      <p class="reg">
        <span>还没有账号？</span>
        <router-link :to="{ name:'register'}">免费注册</router-link>
      </p>
    </div>
  </div>
</template>
<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      userName: "",
      password: "",
      error: ""
    };
  },
  methods: {
    submit() {
      if (!this.userName) {
        this.error = "请输入账号";
        return false;
      }
      if (!this.password) {
        this.error = "请输入密码";
        return false;
      }
      api
        .login({
          appkey: "HmH__1569747692124",
          userName: this.userName,
          password: this.password
        })
        .then(res => {
          if (res.data.status == "success") {
            this.$router.push({ name: "default" });
            this.$store.commit("setUserName", this.userName);
            const expires = 900 * 24 * 60 * 60 * 1000;
            const date = new Date(+new Date() + expires);
            document.cookie = `login=true;expires=${date.toUTCString(expires)}`;
          } else {
            this.error = res.data.msg;
          }
        });
    }
  }
};
</script>
<style lang="scss">
.page-login {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/images/blank.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .form {
    width: 290px;
    padding: 30px 20px;
    background: #fff;
    opacity: 0.9;
    position: relative;
    left: 65%;
    top: 40%;
    transform: translateY(-50%);
    border-radius: 15px;
    .tips {
      margin-bottom: 15px;
      padding: 10px;
      border: 1px solid #f5d8a7;
      border-radius: 2px;
      background: #fff6db;
      font-size: 12px;
      padding-left: 26px;
    }
    .el-input {
      margin-top: 15px;
    }
    .foot {
      margin-top: 15px;
      float: right;
      font-size: 12px;
      a {
        color: rgb(228, 44, 57);
      }
    }
    .btn-login {
      width: 100%;
      height: 38px;
      margin-top: 10px;
      background-color: #a61e26;
      border-color: #a61e26;
    }
    .reg {
      padding-top: 10px;
      font-size: 14px;
      a {
        color: rgb(228, 44, 57);
      }
    }
    .error {
      input {
        border-color: red;
      }
    }
  }
}
</style>
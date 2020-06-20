<template>
  <div class="page-register">
    <div class="header">
      <header>
        <a href="#" class="site-logo"></a>
        <div class="login">
          <span>已有账号？</span>
          <router-link :to="{name:'login'}">登陆</router-link>
        </div>
      </header>
    </div>
    <div class="content">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="ruleForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" @input="input" autocomplete="off"></el-input>
          <div class="pw-strength">
            <div :class="['bar', strengthClass]"></div>
            <div class="letter">
              <span>弱</span>
              <span>中</span>
              <span>强</span>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import api from "@/api/index.js";
export default {
  data() {
    var validateUser = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("请输入用户名"));
      } else if (value.length < 4 || value.length > 16) {
        callback(new Error("用户名必须为4-16位的字母数字下划线组成"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        userName: "",
        pass: "",
        checkPass: ""
      },
      strengthClass:"",
      rules: {
        userName: [{ validator: validateUser, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          api.register({
            userName:this.ruleForm.userName,
            password:this.ruleForm.pass,
            rePassword:this.ruleForm.checkPass,
            appkey:"HmH__1569747692124"
          }).then(res=>{
            if(res.data.status == "success"){
              this.$router.push({name:"login"})
            }else{
                alert(res.data.msg)
            }
          })
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.strengthClass="";
    },
    input() {
      const regStr = /(\w)+/g;
      const regNum = /(\d)+/g;
      const reg = /_/g;
      const strongth =
        this.ruleForm.pass.match(reg) &&
        this.ruleForm.pass.match(regStr) &&
        this.ruleForm.pass.match(regNum);

      if (
        this.ruleForm.pass.length > 20 ||
        (this.ruleForm.pass.length > 7 && strongth)
      ) {
        this.strengthClass = "strong";
      } else if (this.ruleForm.pass.length < 7) {
        this.strengthClass = "week";
      } else if (!this.ruleForm.pass) {
        this.strengthClass = "";
      } else {
        this.strengthClass = "normal";
      }
    }
  }
};
</script>
<style lang="scss">
.page-register {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/images/blank.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .header {
    border-bottom: 2px solid #a61e26;
    min-width: 980px;
    header {
      margin: 0 auto;
      width: 980px;
      padding: 10px 0;
      .login {
        float: right;
        height: 36px;
        line-height: 36px;
        span {
          font-size: 14px;
          vertical-align: sub;
        }
        a {
          padding: 5px 10px;
          background-color: #a61e26;
          color: aliceblue;
        }
      }
      &::after {
        content: "";
        display: block;
        clear: both;
      }
    }
  }
  .content {
    margin: 0 auto;
    width: 980px;
    box-sizing: border-box;
    padding: 100px 275px 0 275px;
    .pw-strength {
      position: relative;
      width: 330px;
      top: 2px;
      left: 0;
      background-color: #eee;
      .bar {
        height: 20px;
        width: 0;
        overflow: hidden;
        transition: all 0.4s linear;
        &.week {
          width: 108px;
          background: #f76120;
        }
        &.normal {
          width: 218px;
          background: #ff8900;
        }
        &.strong {
          width: 330px;
          background: #5bab3c;
        }
      }
      .letter {
        position: absolute;
        top: 0;
        left: 0;
        span {
          display: block;
          float: left;
          text-align: center;
          height: 20px;
          line-height: 20px;
          width: 108px;
          color: #fff;
          &:not(:nth-of-type(3)){
            border-right: 2px solid #fff;
          }
        }
      }
    }
    .el-form-item__label {
      color: #000;
      font-weight: 900;
    }
    .el-form-item__error {
      font-weight: bold;
    }
    .el-button--primary {
      background-color: #a61e26;
      border-color: #a61e26;
      &:hover {
        background-color: #b36265;
        border-color: #b36265;
      }
    }
    .el-button--default {
      &:hover {
        color: #a61e26;
        background-color: #fdfafa;
        border-color: #c9b9ba;
      }
      &:focus {
        color: #a61e26;
        background-color: #fdfafa;
        border-color: #c9b9ba;
      }
    }
  }
}
</style>
<template>
  <div class="head-wrap">
    <h1 class="logo-wrap">
      <img src="@/assets/images/logo.png" alt="logo" />
    </h1>
    <div class="nav">
      <ul>
        <li>
          <router-link :to="{name:'home'}">首页</router-link>
        </li>
        <li>
          <router-link :to="{name:'poem'}">诗词</router-link>
        </li>
        <li>
          <router-link :to="{name:'famous'}">名句</router-link>
        </li>
        <li>
          <router-link :to="{name:'author'}">作者</router-link>
        </li>
        <li>
          <router-link :to="{name:'books'}">古籍</router-link>
        </li>
      </ul>
    </div>
    <search-bar />
  </div>
</template>

<script>
import searchBar from "./searchBar";
export default {
  components: {
    searchBar
  }
};
</script>

<style lang="scss">
.head-wrap {
  width: 1190px;
  padding: 30px 15px 0 15px;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  .nav {
    flex: 1;
    margin-left: 20px;
    ul {
      width: 80%;
      display: flex;
      justify-content: space-around;
      li {
        width: 100px;
        height: 100%;
        text-align: center;
        line-height: 68px;
        a {
          display: inline-block;
          height: 45px;
          font: 22px KaiTi;
          color: #888;
          font-weight: bold;
          transition: all 0.1s linear;
          &:hover {
            font: 24px KaiTi;
            font-weight: bold;
            color: #a61e26;
            border-bottom: 2px solid #a61e26;
          }
        }
        .active {
          font: 24px KaiTi;
          font-weight: bold;
          color: #a61e26;
          border-bottom: 2px solid #a61e26;
        }
      }
    }
  }
  .el-input {
    width: 300px !important;
    transform: translateY(30%);
  }
}
</style>
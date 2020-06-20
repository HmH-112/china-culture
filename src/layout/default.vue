<template>
  <el-container>
    <el-header>
      <my-header />
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <my-footer />
    </el-footer>
  </el-container>
</template>
<script>
import MyHeader from "@/components/header/index";
import MyFooter from "@/components/footer/index";
export default {
  components: {
    MyHeader,
    MyFooter
  }
};
</script>
<style lang="scss">
.el-container {
  .el-header {
    padding: 0 !important;
    height: 100% !important;
  }
  .el-main{
    padding: 0 !important;
  }
  .el-footer {
    background-color: #333;
    padding: 0 !important;
    height: 100% !important;
  }
}
</style>
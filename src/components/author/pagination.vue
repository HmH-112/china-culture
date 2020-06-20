<template>
   <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="6"
      layout="prev, pager, next, jumper"
      :total="18">
    </el-pagination>
</template>

<script>
export default {
    data() {
        return {
            currentPage:1
        }
    },
     methods: {
      handleSizeChange(val) {
        // eslint-disable-next-line no-console
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        // eslint-disable-next-line no-console
        console.log(`当前页: ${val}`);
      }
    },
}
</script>

<style>

</style>
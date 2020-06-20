<template>
  <el-autocomplete
    v-model="state"
    :fetch-suggestions="querySearchAsync"
    placeholder="输入作者查找对应诗词"
    @select="handleSelect"
  >
    <el-button slot="append" icon="el-icon-search" @click="peomSearch"></el-button>
  </el-autocomplete>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      restaurants: [],
      state: "",
      timeout: null
    };
  },
  methods: {
    peomSearch() {
      if (this.state) {
        axios.get("http://localhost:8080/data/peom.json").then(res => {
          const list = res.data.filter(ele => {
            return ele.author.includes(this.state);
          });
          if (list.length !== 0) {
            this.$store.commit("getpoemSearch", list);
            if(this.$router.history.current.path !== "/poem/search"){
              this.$router.push({ path: "poem/search" });
            }
          }else{
            alert("非常抱歉，未找到您要搜索的诗人");
          }
        });
      } else {
        alert("请输入您想要搜索的诗人");
      }
    },
    loadAll() {
      return [
        { value: "李白" },
        { value: "苏轼" },
        { value: "陶渊明" },
        { value: "刘禹锡" },
        { value: "范仲淹" }
      ];
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      // eslint-disable-next-line no-console
      console.log(item);
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  }
};
</script>

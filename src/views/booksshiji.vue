<template>
  <div class="lunyu">
    <books-nav :meta="lunyu" :biaoti="guji" @change="changeBook" :i="i"/>
    <show v-for="item in list" :key="item.name" :every="item" />
  </div>
</template>

<script>
import axios from "axios";
import BooksNav from "@/components/books/nav";
import Show from "@/components/books/show";
export default {
  data() {
    return {
      guji: "史记(十二本纪)",
      i:1,
      lunyu: [
        { nav: "五帝本纪", IsActive: true },
        { nav: "夏本纪", IsActive: false },
        { nav: "殷本纪", IsActive: false },
        { nav: "周本纪", IsActive: false },
        { nav: "秦本纪", IsActive: false },
        { nav: "秦始皇本纪", IsActive: false },
        { nav: "项羽本纪", IsActive: false },
        { nav: "高祖本纪", IsActive: false },
        { nav: "吕太后本纪", IsActive: false },
        { nav: "孝文本纪", IsActive: false },
        { nav: "孝景本纪", IsActive: false },
        { nav: "孝武本纪", IsActive: false }
      ],
      list:[]
    };
  },
  components: {
    BooksNav,
    Show
  },
  created() {
    axios.get("http://localhost:8080/data/books.json").then(res => {
      this.list = res.data[1].wenzhang.filter(ele => {
        return ele.name.includes("五帝本纪");
      });
    });
  },
  methods: {
    changeBook(newList){
      this.list = newList
    }
  },
};
</script>

<style lang="scss">
.lunyu {
  width: 1190px;
  margin: 0 auto;
  font-family: KaiTi;
}
</style>
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
      guji: "论语",
      i:0,
      lunyu: [
        { nav: "学而篇", IsActive: true },
        { nav: "为政篇", IsActive: false },
        { nav: "八佾篇", IsActive: false },
        { nav: "里仁篇", IsActive: false },
        { nav: "公冶长篇", IsActive: false },
        { nav: "雍也篇", IsActive: false },
        { nav: "述而篇", IsActive: false },
        { nav: "泰伯篇", IsActive: false },
        { nav: "子罕篇", IsActive: false },
        { nav: "乡党篇", IsActive: false },
        { nav: "先进篇", IsActive: false },
        { nav: "颜渊篇", IsActive: false },
        { nav: "子路篇", IsActive: false },
        { nav: "宪问篇", IsActive: false },
        { nav: "卫灵公篇", IsActive: false },
        { nav: "季氏篇", IsActive: false },
        { nav: "阳货篇", IsActive: false },
        { nav: "微子篇", IsActive: false },
        { nav: "子张篇", IsActive: false },
        { nav: "尧曰篇", IsActive: false }
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
      this.list = res.data.filter(ele => {
        return ele.path.includes(this.$route.query.id);
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
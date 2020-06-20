<template>
  <div class="books">
    <intro v-for="(item,index) in list" :key="item.author" :meta="item" :index="index" />
  </div>
</template>

<script>
import axios from "axios";
import Intro from "@/components/books/intro";
export default {
  data() {
    return {
      list: []
    };
  },
  components: {
    Intro
  },
  created() {
    axios.get("http://localhost:8080/data/books.json").then(res => {
      this.list = res.data;
    });
  }
};
</script>

<style lang="scss">
.books {
  width: 1190px;
  margin: 0 auto;
  font-family: KaiTi;
  .intro {
    margin: 20px auto;
    width: 940px;
    box-sizing: border-box;
    box-shadow: 0px 1px 5px 0px rgb(122, 119, 119);
    padding: 20px;
    position: relative;
    min-height: 195px;
    .img {
      cursor: pointer;
      float: left;
      margin-right: 20px;
    }
    h1 {
      font-size: 30px;
      margin-bottom: 10px;
      a{
        color: #000;
        &:hover{
          color: #a61e26;
        }
      }
      .horn {
        margin-left: 10px;
        cursor: pointer;
      }
    }
    p {
      font-size: 20px;
    }
  }
}
</style>
<template>
  <div class="author">
    <dynasty @change="changeDynasty" />
    <intro v-for="(item,index) in list" :key="item.author" :meta="item" :index="index" />
    <pagination />
  </div>
</template>

<script>
import axios from "axios";
import Dynasty from "@/components/author/dynasty";
import Intro from "@/components/author/intro";
import Pagination from "@/components/author/pagination";
export default {
  data() {
    return {
      list: []
    };
  },
  components: {
    Dynasty,
    Intro,
    Pagination
  },
  created() {
    axios.get("http://localhost:8080/data/author.json").then(res => {
      this.list = res.data.filter(ele => {
          return ele.dynasty.includes("先秦");
        });
    });
  },
  methods: {
    changeDynasty(newList) {
      this.list = newList
    }
  }
};
</script>

<style lang="scss">
.author {
  width: 1190px;
  margin: 0 auto;
  font-family: KaiTi;
  .dynasty {
    padding: 10px 20px 15px 20px;
    width: 900px;
    margin: 20px auto;
    box-shadow: 0px 1px 5px 0px rgb(122, 119, 119);
    h1 {
      font-size: 30px;
      padding-bottom: 5px;
      border-bottom: 1px solid #cac6c6;
    }
    dl {
      display: flex;
      font-size: 20px;
      padding: 15px 10px 0 0;
      justify-content: space-between;
      dt {
        font-weight: bold;
      }
      dd {
        cursor: pointer;
        &:hover {
          font-weight: bold;
          color: #a61e26;
        }
      }
      .active {
        font-weight: bold;
        color: #a61e26;
      }
    }
  }
  .intro {
    margin: 0 auto;
    width: 940px;
    box-sizing: border-box;
    box-shadow: 0px 1px 5px 0px rgb(122, 119, 119);
    padding: 20px;
    position: relative;
    margin-bottom: 20px;
    min-height: 195px;
    .img {
      float: left;
      margin-right: 20px;
    }
    h1 {
      font-size: 30px;
      margin-bottom: 10px;
      .horn {
        cursor: pointer;
      }
    }
    p {
      font-size: 20px;
    }
  }
  .el-pagination {
    width: 940px;
    margin: 20px auto;
  }
}
</style>
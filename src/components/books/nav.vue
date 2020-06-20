<template>
  <div class="books-nav">
    <h1>{{biaoti}}</h1>
    <ul>
      <li
        :class="{active : item.IsActive}"
        v-for="item in meta"
        :key="item.nav"
        @click="change(item)"
      >·{{item.nav}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["meta", "biaoti","i"],
  methods: {
    change(item) {
      axios.get("http://localhost:8080/data/books.json").then(res => {
        const newlist = res.data[this.i].wenzhang.filter(ele => {
          return ele.name.includes(item.nav);
        });
        this.$emit("change", newlist);
      });
      this.meta.forEach(element => {
        element.IsActive = false;
      });
      item.IsActive = true;
    }
  }
};
</script>

<style lang="scss">
.books-nav {
  width: 940px;
  margin: 20px auto;
  box-shadow: 0px 1px 5px 0px rgb(122, 119, 119);
  box-sizing: border-box;
  padding: 15px 20px 20px 20px;
  border-radius: 10px;
  h1 {
    font-size: 30px;
    padding-bottom: 10px;
    border-bottom: 1px solid #dad9d1;
  }
  ul {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    li {
      cursor: pointer;
      width: 200px;
      text-align: center;
      font-size: 20px;
      line-height: 200%;
      &:hover {
        color: #a61e26;
        font-weight: bold;
      }
    }
    .active {
      color: #a61e26;
      font-weight: bold;
    }
  }
}
</style>
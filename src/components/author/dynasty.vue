/* eslint-disable no-console */
<template>
  <div class="dynasty">
    <h1>{{h1dynasty}}</h1>
    <dl>
      <dt>朝代:</dt>
      <dd
        :class="{active : item.IsActive}"
        v-for="item in dynasty"
        :key="item.nav"
        @click="change(item)"
      >{{item.nav}}</dd>
    </dl>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      h1dynasty: "先秦",
      dynasty: [
        { nav: "先秦", IsActive: true },
        { nav: "两汉", IsActive: false },
        { nav: "魏晋", IsActive: false },
        { nav: "南北朝", IsActive: false },
        { nav: "隋代", IsActive: false },
        { nav: "唐代", IsActive: false },
        { nav: "五代", IsActive: false },
        { nav: "宋代", IsActive: false },
        { nav: "金朝", IsActive: false },
        { nav: "元代", IsActive: false },
        { nav: "明代", IsActive: false },
        { nav: "清代", IsActive: false }
      ]
    };
  },
  methods: {
    change(item) {
      this.h1dynasty = item.nav;
      this.active(item);
      axios.get("http://localhost:8080/data/author.json").then(res => {
        const newList = res.data.filter(ele => {
          return ele.dynasty.includes(item.nav);
        });
        this.$emit("change",newList);
      });
    },
    active(item) {
      this.dynasty.forEach(element => {
        element.IsActive = false;
      });
      item.IsActive = true;
    }
  }
};
</script>

<style>
</style>
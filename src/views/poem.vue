<template>
  <div class="poem">
    <sons v-for="(item,index) in cont" :key="item.name" :every="item" :index="index" />
  </div>
</template>

<script>
import axios from "axios";
import Sons from "@/components/poem/sons";
export default {
  data() {
    return {
      cont: []
    };
  },
  components: {
    Sons
  },
  created() {
    axios.get("http://localhost:8080/data/peom.json").then(res => {
      this.cont = res.data;
    });
  }
};
</script>

<style lang="scss">
.poem {
  width: 1190px;
  margin: 0 auto;
  font-family: KaiTi;
}
</style>
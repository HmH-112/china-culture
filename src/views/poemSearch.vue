<template>
  <div class="poem-search">
    <sons v-for="(item,index) in $store.state.poemSearch" :key="item.name" :every="item" :index="index"/>
  </div>
</template>

<script>
import Sons from "@/components/poem/sons";
export default {
  components: {
    Sons
  }
};
</script>

<style lang="scss">
.poem-search {
  width: 1190px;
  margin: 0 auto;
  font-family: KaiTi;
  min-height: 700px;
}
</style>
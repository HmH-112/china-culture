<template>
  <div class="introduce">
    <h2>中国国学</h2>
    <p v-for="(item,index) in p" :key="index">{{item}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      p:["国学，是以先秦经典及诸子百家学说为根基，它涵盖了两汉经学、魏晋玄学、隋唐道学、宋明理学、明清实学和同时期的先秦诗赋、汉赋、六朝骈文",
      "、唐宋诗词、元曲与明清小说并历代史学等一套完整的文化",
      "、学术体系。中国历史上“国学”是指以“国子监”为首的官学，自 “西学东渐”后相对西学而言泛指“中国传统思想文化学术”。"]
    }
  },
};
</script>

<style>
</style>
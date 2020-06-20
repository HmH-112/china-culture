<template>
  <div class="slide">
    <el-carousel height="383px" :interval="4000">
      <el-carousel-item v-for="item in imgList" :key="item.url">
        <img :src="item.img" alt />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgList: [
        {
          url: "#xxx",
          img: require("../../assets/images/carousel-one.jpg")
        },
        {
          url: "#ass",
          img: require("../../assets/images/carousel-two.jpg")
        },
        {
          url: "#bss",
          img: require("../../assets/images/carousel-three.jpg")
        },
        {
          url: "#css",
          img: require("../../assets/images/carousel-four.jpg")
        },
        {
          url: "#dss",
          img: require("../../assets/images/carousel-five.jpg")
        }
      ]
    };
  }
};
</script>
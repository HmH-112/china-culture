<template>
  <div class="home">
    <carousel />
    <introduce />
    <watch />
  </div>
</template>

<script>
import Carousel from "@/components/home/carousel";
import Introduce from "@/components/home/introduce";
import Watch from"@/components/home/watch";
export default {
  components: {
    Carousel,
    Introduce,
    Watch
  }
};
</script>

<style lang="scss">
.home {
  font-family: KaiTi;
  width: 1190px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 40px;
  .slide {
    float: left;
    width: 900px;
    transition: all .5s linear;
    &:hover{
      box-shadow: 0px 10px 15px 0px rgb(122, 119, 119);
    }
    img {
      height: 100%;
      width: 100%;
    }
  }
  .introduce {
    float: right;
    width: 280px;
    height: 383px;
    box-sizing: border-box;
    border: 1px solid #eeeeee;
    background-image: url("../assets/images/background.jpg");
    background-size: cover;
    background-position-x: -195px;
    transition: all .5s linear;
    &:hover{
      box-shadow: 0px 10px 15px 0px rgb(122, 119, 119);
    }
    h2 {
      font-size: 26px;
      padding: 10px 0 0 10px;
    }
    p {
      font-size: 20px;
      padding: 0 0 0 10px;
      &:nth-of-type(1) {
        padding: 15px 0 0 10px;
      }
    }
  }
  .watch {
    width: 100%;
    float: left;
    p {
      font-size: 40px;
      padding: 100px 0 60px 0;
      font-weight: bold;
      text-align: center;
      text-shadow: 10px 5px #eeeeee
    }
    .m-video {
      width: 870px;
      height: 500px;
      margin: 0 auto;
      justify-content:space-between;
      align-content: space-between;
      flex-wrap:wrap;
      display: flex;
      perspective-origin: 800px;
      transform-style: preserve-3d;
      div{
        width: 400px;
        height: 224px;
        box-shadow: 0px 10px 15px 0px rgb(122, 119, 119);
        transition: all .5s linear;
        &:hover{
          box-shadow: none;
        }
      }
    }
  }
  &::after {
    content: "";
    display: block;
    clear: both;
  }
}
</style>
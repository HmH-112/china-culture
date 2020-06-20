<template>
  <div class="sons">
    <div class="cont">
      <div class="button">
        <el-button type="warning" circle @click="yi">译</el-button>
        <el-button type="success" circle @click="zhu">注</el-button>
        <el-button type="danger" circle @click="shang">赏</el-button>
        <el-button type="primary" circle @click="song">诵</el-button>
      </div>
      <h1>{{every.name}}</h1>
      <p class="source">{{every.author}}</p>
      <div class="contson">
        <p v-for="i in every.duanluo" :key="i.yuan">
          {{i.yuan}}
          <span class="yiwen" v-if="yiwen">
            <br />
            {{i.yi}}
          </span>
          <span class="zhushi" v-if="zhushi">
            <br />
            {{i.zhu}}
          </span>
        </p>
        <audio class="song" :src="every.audio"></audio>
        <p class="shangxi" v-if="shangxi">{{every.shangxi}}</p>
      </div>
    </div>
    <div class="tag">{{every.tag}}</div>
  </div>
</template>

<script>
export default {
  props: ["every", "index"],
  data() {
    return {
      yiwen: false,
      zhushi: false,
      shangxi: false
    };
  },
  methods: {
    yi() {
      this.yiwen = !this.yiwen;
    },
    zhu() {
      this.zhushi = !this.zhushi;
    },
    shang() {
      this.shangxi = !this.shangxi;
    },
    song() {
      const vedioPlayer = document.getElementsByClassName("song")[this.index];
      if (vedioPlayer.paused) {
        vedioPlayer.play();
      } else {
        vedioPlayer.pause();
      }
    }
  }
};
</script>

<style lang="scss">
.sons {
  width: 940px;
  margin: 20px auto;
  box-shadow: 0px 1px 5px 0px rgb(122, 119, 119);
  box-sizing: border-box;
  padding: 15px 20px 20px 20px;
  border-radius: 10px;
  .cont {
    .button {
      float: right;
      .el-button {
        font-family: KaiTi;
        font-size: 15px;
        margin-left: 20px;
      }
    }
    h1 {
      font-size: 30px;
      margin-bottom: 10px;
    }
    .source {
      font-size: 18px;
      margin-bottom: 10px;
    }
    .contson {
      font-size: 20px;
      p {
        margin-bottom: 10px;
        span {
          line-height: 200%;
          &.yiwen {
            color: #af9100;
          }
          &.zhushi {
            color: #1aaf5d;
          }
        }
      }
      .shangxi {
        color: #f56c6c;
        padding-top: 20px;
        border-top: 1px solid #dad9d1;
        line-height: 200%;
      }
    }
  }
  .tag {
    cursor: pointer;
    padding-top: 10px;
    border-top: 1px solid #dad9d1;
    color: #adadaa;
  }
}
</style>
<template>
  <div class="famous">
    <div class="famous-nav">
      <dl v-for="(item,index) in nav" :key="index">
        <dt>{{item.name}}:</dt>
        <dd
          v-for="i in item.child"
          :key="i.name"
          :class="{active: i.isActive}"
          :data="i.class"
          @click="api($event,i)"
        >{{i.name}}</dd>
      </dl>
    </div>
    <div class="visit">
      <h1 class="origin">{{visit.origin}}</h1>
      <p class="author">{{visit.author}}</p>
      <div class="content">{{visit.content}}</div>
      <div class="category">{{visit.category}}</div>
      <el-button type="success" round @click="getApi">换一句</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      a: "https://v1.jinrishici.com/all",
      nav: [
        {
          name: "抒情",
          child: [
            {
              name: "爱情",
              class: "/shuqing/aiqing",
              isActive: false
            },
            {
              name: "友情",
              class: "/shuqing/youqing",
              isActive: false
            },
            {
              name: "离别",
              class: "/shuqing/libie",
              isActive: false
            },
            {
              name: "思念",
              class: "/shuqing/sinian",
              isActive: false
            },
            {
              name: "思乡",
              class: "/shuqing/sixiang",
              isActive: false
            },
            {
              name: "伤感",
              class: "/shuqing/shanggan",
              isActive: false
            },
            {
              name: "孤独",
              class: "/shuqing/gudu",
              isActive: false
            },
            {
              name: "闺怨",
              class: "/shuqing/guiyuan",
              isActive: false
            },
            {
              name: "悼亡",
              class: "/shuqing/daowang",
              isActive: false
            },
            {
              name: "怀古",
              class: "/shuqing/huaigu",
              isActive: false
            },
            {
              name: "爱国",
              class: "/shuqing/aiguo",
              isActive: false
            },
            {
              name: "感恩",
              class: "/shuqing/ganen",
              isActive: false
            }
          ]
        },
        {
          name: "四季",
          child: [
            {
              name: "春天",
              class: "/siji/chuntian",
              isActive: false
            },
            {
              name: "夏天",
              class: "/siji/xiatian",
              isActive: false
            },
            {
              name: "秋天",
              class: "/siji/qiutian",
              isActive: false
            },
            {
              name: "冬天",
              class: "/siji/dongtian",
              isActive: false
            }
          ]
        },
        {
          name: "山水",
          child: [
            {
              name: "庐山",
              class: "/shanshui/lushan",
              isActive: false
            },
            {
              name: "泰山",
              class: "/shanshui/taishan",
              isActive: false
            },
            {
              name: "长江",
              class: "/shanshui/changjiang",
              isActive: false
            },
            {
              name: "黄河",
              class: "/shanshui/huanghe",
              isActive: false
            },
            {
              name: "江河",
              class: "/shanshui/jianghe",
              isActive: false
            },
            {
              name: "西湖",
              class: "/shanshui/xihu",
              isActive: false
            },
            {
              name: "瀑布",
              class: "/shanshui/pubu",
              isActive: false
            }
          ]
        },
        {
          name: "天气",
          child: [
            {
              name: "写风",
              class: "/tianqi/xiefeng",
              isActive: false
            },
            {
              name: "写云",
              class: "/tianqi/xieyun",
              isActive: false
            },
            {
              name: "写雨",
              class: "/tianqi/xieyu",
              isActive: false
            },
            {
              name: "写雪",
              class: "/tianqi/xiexue",
              isActive: false
            },
            {
              name: "彩虹",
              class: "/tianqi/caihong",
              isActive: false
            },
            {
              name: "太阳",
              class: "/tianqi/taiyang",
              isActive: false
            },
            {
              name: "月亮",
              class: "/tianqi/yueliang",
              isActive: false
            },
            {
              name: "星星",
              class: "/tianqi/xingxing",
              isActive: false
            }
          ]
        },
        {
          name: "人物",
          child: [
            {
              name: "女子",
              class: "/renwu/nvzi",
              isActive: false
            },
            {
              name: "父亲",
              class: "/renwu/fuqin",
              isActive: false
            },
            {
              name: "母亲",
              class: "/renwu/muqin",
              isActive: false
            },
            {
              name: "老师",
              class: "/renwu/laoshi",
              isActive: false
            },
            {
              name: "儿童",
              class: "/renwu/ertong",
              isActive: false
            }
          ]
        },
        {
          name: "人生",
          child: [
            {
              name: "励志",
              class: "/rensheng/lizhi",
              isActive: false
            },
            {
              name: "哲理",
              class: "/rensheng/zheli",
              isActive: false
            },
            {
              name: "青春",
              class: "/rensheng/qingchu",
              isActive: false
            },
            {
              name: "时光",
              class: "/rensheng/shiguang",
              isActive: false
            },
            {
              name: "梦想",
              class: "/rensheng/mengxiang",
              isActive: false
            },
            {
              name: "读书",
              class: "/rensheng/dushu",
              isActive: false
            },
            {
              name: "战争",
              class: "/rensheng/zhanzheng",
              isActive: false
            }
          ]
        },
        {
          name: "生活",
          child: [
            {
              name: "乡村",
              class: "/shenghuo/xiangcun",
              isActive: false
            },
            {
              name: "田园",
              class: "/shenghuo/tianyuan",
              isActive: false
            },
            {
              name: "边塞",
              class: "/shenghuo/baisai",
              isActive: false
            },
            {
              name: "写桥",
              class: "/shenghuo/xieqiao",
              isActive: false
            }
          ]
        },
        {
          name: "节日",
          child: [
            {
              name: "春节",
              class: "/jieri/chunjie",
              isActive: false
            },
            {
              name: "元宵节",
              class: "/jieri/yuanxiaojie",
              isActive: false
            },
            {
              name: "寒食节",
              class: "/jieri/hanshijie",
              isActive: false
            },
            {
              name: "清明节",
              class: "/jieri/qingmingjie",
              isActive: false
            },
            {
              name: "端午节",
              class: "/jieri/duanwujie",
              isActive: false
            },
            {
              name: "七夕节",
              class: "/jieri/qixijie",
              isActive: false
            },
            {
              name: "中秋节",
              class: "/jieri/zhongqiujie",
              isActive: false
            },
            {
              name: "重阳节",
              class: "/jieri/chongyangjie",
              isActive: false
            }
          ]
        },
        {
          name: "动物",
          child: [
            {
              name: "写鸟",
              class: "/dongwu/xieniao",
              isActive: false
            },
            {
              name: "写马",
              class: "/dongwu/xiema",
              isActive: false
            },
            {
              name: "写猫",
              class: "/dongwu/xiemao",
              isActive: false
            }
          ]
        },
        {
          name: "植物",
          child: [
            {
              name: "梅花",
              class: "/zhiwu/meihua",
              isActive: false
            },
            {
              name: "梨花",
              class: "/zhiwu/lihua",
              isActive: false
            },
            {
              name: "桃花",
              class: "/zhiwu/taohua",
              isActive: false
            },
            {
              name: "荷花",
              class: "/zhiwu/hehua",
              isActive: false
            },
            {
              name: "菊花",
              class: "/zhiwu/juhua",
              isActive: false
            },
            {
              name: "柳树",
              class: "/zhiwu/liushu",
              isActive: false
            },
            {
              name: "叶子",
              class: "/zhiwu/yezi",
              isActive: false
            },
            {
              name: "竹子",
              class: "/zhiwu/zhuzi",
              isActive: false
            }
          ]
        },
        {
          name: "食物",
          child: [
            {
              name: "写酒",
              class: "/shiwu/xiejiu",
              isActive: false
            },
            {
              name: "写茶",
              class: "/shiwu/xiecha",
              isActive: false
            },
            {
              name: "荔枝",
              class: "/shiwu/lizhi",
              isActive: false
            }
          ]
        }
      ],

      visit: {
        origin: "",
        author: "",
        content: "",
        category: ""
      }
    };
  },
  mounted() {
    this.getApi();
  },
  methods: {
    api(e, i) {
      this.nav.forEach(element => {
        element.child.forEach(ele => {
          ele.isActive = false;
        });
      });
      i.isActive = !i.isActive;
      const api = e.target.getAttribute("data");
      this.a = `https://v1.jinrishici.com${api}`;
      this.getApi();
    },
    getApi() {
      axios.get(this.a).then(res => {
        // eslint-disable-next-line no-console
        console.log(res);
        this.visit.origin = res.data.origin;
        this.visit.author = res.data.author;
        this.visit.content = res.data.content;
        this.visit.category = res.data.category.slice(4);
      });
    }
  }
};
</script>

<style lang="scss">
.famous {
  width: 1190px;
  margin: 0 auto;
  font-family: KaiTi;
  .famous-nav {
    width: 775px;
    padding: 10px 10px 5px 10px;
    border: 2px dotted #1aaf5d;
    margin: 20px auto;
    margin-bottom: 50px;
    dl {
      display: flex;
      font-size: 20px;
      margin-top: 5px;
      border-bottom: 1px dashed #1aaf5d;
      &:last-child {
        border: none;
      }
      dt {
        font-weight: bold;
      }
      dd {
        cursor: pointer;
        padding: 0 10px;
        transition: all 0.2s linear;
        &:hover {
          background-color: #1aaf5d;
          color: #fff;
        }
      }
      .active {
        background-color: #1aaf5d;
        color: #fff;
      }
    }
  }
  .visit {
    text-align: center;
    position: relative;
    padding-top: 70px;
    margin-bottom: 150px;
    transition: all 0.5s linear;
    .origin {
      font-size: 50px;
      margin-bottom: 5px;
    }
    .author {
      font-size: 25px;
    }
    .content {
      margin-top: 20px;
      font-size: 40px;
      margin-bottom: 30px;
    }
    .category {
      font-size: 20px;
      position: absolute;
      top: 0;
      left: 120px;
      font-weight: bold;
      color: #1aaf5d;
      border: 1px dotted #1aaf5d;
      padding: 5px;
      border-radius: 15px;
      cursor: pointer;
      transition: all 0.2s linear;
      &:hover {
        color: #fff;
        background-color: #1aaf5d;
      }
    }
    .el-button {
      padding: 9px 60px;
      color: #1aaf5d;
      font-weight: 600;
      border: 2px solid #1aaf5d;
      background-color: #fff;
      transition: all 0.2s linear;
      &:hover {
        color: #fff;
        background-color: #1aaf5d;
      }
    }
  }
}
</style>
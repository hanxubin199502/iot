<template>
  <div class="header" :class="{ act: scrollTag }">
    <div class="min-header">
      <div
        style="float:left;margin-right:38px;line-height:74px;"
        @click="changeTab(0)"
      >
        <span class="logo"></span>
        <span class="logo-text"></span>
      </div>
      <ul>
       
       
        <li @click="changeTab(1)">关于我们</li>
        <li @click="changeTab(2)">产品与方案</li>
        <li @click="changeTab(3)">新闻中心</li>
        <li @click="changeTab(4)">案例分析</li>
        <li @click="changeTab(5)">联系我们</li>
        <li @click="changeTab(6)">物联平台入口</li>
   
      </ul>
      <!-- <p class="right_p">
        <span style="margin-right:32px;" @click="changeTab(6)">开发者社区</span>
        <span>
          <i @click="denglu">管理控制台</i> |
          <i>中文站</i>
        </span>
        <button class="dl" @click="denglu">登录</button>
      </p> -->
    </div>
  </div>
</template>

<script>
// import eventVue from '../../event.js'
export default {
  data() {
    return {
      prodListNum: 0,
      productList: [], //产品列表
      solutionListNum: 0,
      solutionList: [], //解决方案
      scrollTag: false,
      solutionLists: [],
      showProduct: false,
      activeTab: 1
    };
  },
  created() {
    // this.getProduction();
    // this.getSolution();

    // 根据flag判断头部导航class
    location.hash.search(/showflag/) != -1
      ? (this.scrollTag = true)
      : (this.scrollTag = false);
  },
  mounted() {
    if (location.hash.search(/showflag/) == -1) {
      window.addEventListener("scroll", this.handleScroll);
    }
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    changeActive(n) {
      this.activeTab = n;
    },
    leave() {
      this.showProduct = false;
      this.activeTab = 1;
    },
    over() {
      this.showProduct = true;
    },
    denglu() {
      let url = "";
      url = location.href;

      if (url.indexOf("www-dev.iot.com") > -1) {
        window.open("http://saas-dev.iot.com");
      } else if (url.indexOf("http://localhost") > -1) {
        window.open("http://localhost:8081");
      } else if (url.indexOf("www-qa.iot.com") > -1) {
        window.open("http://saas.iot.com");
      } else if (url.indexOf("www-prod.iot.com") > -1) {
        window.open("http://saas-prod.iot.com");
      } else if (url.indexOf("www.bysiot.com") > -1) {
        window.open("http://portal.bysiot.com");
      }
    },
    // 获取产品列表
    getProduction() {
      let params = {
        productContextStatus: 2,
        productContextType: 1
      };
      this.$http
        .get(
          this.$api.getApiAddress(
            "/operationplatformmgn/o/saas/platform-productContext/query_productContext_list",
            "API_ROOT"
          ),
          params
        )
        .then(res => {
          this.prodListNum = Math.ceil(res.data.length / 6);
          if (this.prodListNum > 0) {
            for (var i = 1; i <= this.prodListNum; i++) {
              this.productList.push(res.data.slice((i - 1) * 6, 6 * i));
            }
          }

          this.$bus.$emit("productList", this.productList);
        });
    },
    // 获取解决方案列表
    getSolution() {
      let params = {
        solutionType: 1,
        solutionStatus: 2
      };
      this.$http
        .get(
          this.$api.getApiAddress(
            "/operationplatformmgn/o/saas/platform-solution/query_solution_list",
            "API_ROOT"
          ),
          params
        )
        .then(res => {
          this.solutionLists = res.data;
          this.solutionListNum = Math.ceil(res.data.length / 6);
          if (this.solutionListNum > 0) {
            for (var i = 1; i <= this.solutionListNum; i++) {
              this.solutionList.push(res.data.slice((i - 1) * 6, 6 * i));
            }
          } else {
            this.solutionList.push(res.data);
          }

          this.$bus.$emit("solutionList", this.solutionLists);
        });
    },
    // 页面跳转
    changeTab(num, id) {
      switch (num) {
        case 0: //点击logo返回首页
          this.$router.push("/homePage");
          break;
        case 1: //产品
          this.$router.push({
            path: '/aboutUs'
          });
          break;
        // case 2: //解决方案
        //   this.$router.push({
        //     path: "/solutions" + id
        //   });
        //   break;
        // case 3: //合作
        //   this.$router.push("/cooperate");
        //   break;
        // case 4: //新闻与动态
        //   this.$router.push("/news");
        //   break;
        case 5: //联系我们
        this.$router.push("/contactUs");
        break;
        case 6: //物联平台入口
          this.$router.push("/platformEntrance");
          break;
      }
    },
    // 解决方案跳转
    solutionJump(num) {
      switch (num) {
        case 1:
          this.$router.push("/smart-building");
          break;
        case 2:
          this.$router.push("/economic-park");
          break;
      }
    },
    handleScroll() {
      let top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      if (top > 0) {
        this.scrollTag = true;
      } else {
        this.scrollTag = false;
      }
    }
  }
};
</script>
<style lang="less">
.el-popper[x-placement^="bottom"] {
  margin-top: 38px !important;
}
.el-popover {
  //   padding: 12px 0px;
  ul {
    display: inline-block;
    vertical-align: top;
    padding: 0 15px;
  }

  li {
    cursor: pointer;
    width: 230px;
    padding: 5px 10px;
    border-bottom: 1px solid #f0f0f0;
    &:last-child {
      border-bottom: none;
    }
    &:first-child {
      padding: 0 10px 13px 10px;
    }
    img {
      display: inline-block;
      width: 13px;
      height: 13px;
      vertical-align: center;
    }
    .production {
      display: inline-block;
      font-size: 14px;
      color: #2d2d2d;
      &:hover {
        color: #228ee8;
      }
      // margin-top: 10px;
    }
    span {
      margin-top: 7px;
      color: #767976;
      display: block;
      font-size: 12px;
    }
  }
}
</style>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 78px;
  z-index: 300;
  background: transparent;
  position: fixed;
  top: 0;
  span {
    cursor: pointer;
  }
  &:hover {
    background: #053982;
  }
  .min-header {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    .right_p {
      float: right;
      color: #fff;
      line-height: 78px;
      font-size: 14px;
    }
    .logo {
      width: 28px;
      display: inline-block;
      height: 31px;
      vertical-align: middle;
      background: url(../../assets/images/logo.png);
      background-size: 100%;
    }
    .logo-text {
      width: 78px;
      height: 18px;
      display: inline-block;
      vertical-align: middle;
      background: url(../../assets/images/logo-text.png);
      background-size: 100%;
      margin-left: 8px;
    }
    > ul {
    //   display: inline-block;
      float:right;

      > li {
        cursor: pointer;
        float: left;
        padding: 0 15px;
        color: #fff;
        line-height: 78px;
        user-select: none;
        font-size: 15px;
        &:hover {
          color: #2791e9;
        }

        .production {
          font: 16px "MicrosoftYaHei";
          color: #2d2d2d;
        }

        .product_box {
          width: 100%;
          height: 500px;
          position: fixed;
          top: 74px;
          left: 0;
          background: #0f4592;
          .min {
            width: 1200px;
            margin: 0 auto;
            height: 100%;
            ul {
              padding: 10px 0;
              width: 180px;
              background: #053982;
              position: relative;
            }
            .active {
              background: #228ee8;
              color: #fff;
            }
            li {
              line-height: 40px;
              text-align: center;
              color: #fff;

              .info_box {
                position: absolute;
                top: 0;
                left: 180px;
                height: 500px;
                width: 1020px;
                padding: 30px 38px;
                text-align: left;

                h3 {
                  font-size: 18px;
                  color: #fff;
                  font-weight: 400;
                  .dayu {
                    font-family: "宋体";
                    color: #2791e9;
                  }
                }
                .div5 {
                  width: 120px;
                }
                > div {
                  width: 206px;
                  float: left;
                  height: 200px;
                  p {
                    color: #c7defd;
                    font-size: 12px;
                    line-height: 45px;
                    &:hover {
                      color: #3ba1f6;
                    }
                  }
                  .p1 {
                    color: #fff !important;
                    font-size: 15px;
                    margin-top: 13px;
                  }
                }
              }
            }
          }
        }
      }
    }
    .dl {
      width: 57px;
      height: 24px;
      line-height: 24px;
      border: 1px solid #fff;
      background: transparent;
      color: #fff;
      margin-left: 32px;
      cursor: pointer;
    }
  }
}
.act {
  background: #053982;
}
</style>

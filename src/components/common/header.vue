<template>
  <div class="header" :class="{act:scrollTag}">
    <div class="min-header">
      <div style="float:left;margin-right:38px" @click="changeTab(0)">
        <span class="logo"></span>
        <span class="logo-text"></span>
      </div>
      <ul>
        <li>
          <!-- 产品下拉框 -->
          <el-popover placement="bottom" :width="190*prodListNum" trigger="hover">
            <span slot="reference">产品</span>
            <ul v-for="(item,index) in productList" :key="index">
              <li v-for="(item1,index1) in productList[index]" :key="index1" @click="changeTab(1,item1.id)">
                <img :src="item1.outlineImagesPath" alt>
                <span class="production">{{item1.productName}}</span>
                <span>{{item1.productOutline}}</span>
              </li>
            </ul>
          </el-popover>
        </li>
        <li>
          <!-- 解决方案下拉框 -->
          <el-popover placement="bottom" :width="190*solutionListNum" trigger="hover">
            <span slot="reference">解决方案</span>
            <ul v-for="(item,index) in solutionList" :key="index">
              <li v-for="(item1,index1) in solutionList[index]" :key="index1" @click="changeTab(2,item1.id)">
                <img :src="item1.outlineImagesPath" alt>
                <span class="production">{{item1.solutionName}}</span>
                <span>{{item1.solutionOutline}}</span>
              </li>
            </ul>
          </el-popover>
        </li>
        <li @click="changeTab(3)">合作</li>
        <li @click="changeTab(4)">新闻与动态</li>
        <li @click="changeTab(5)">关于我们</li>
      </ul>
      <p style="float:right;color:#fff">
        <span style="margin-right:32px;" @click="changeTab(6)">开发者社区</span>
        <span>
          <i @click="denglu">管理控制台</i> |
          <i>中文站</i>
        </span>
        <button class="dl" @click="denglu">登录</button>
      </p>
    </div>
  </div>
</template>

<script>
// import eventVue from '../../event.js'
export default {
  data() {
    return {
      prodListNum:0,
      productList: [], //产品列表
      solutionListNum:0,
      solutionList: [], //解决方案
      scrollTag: false,
    };
  },
  created() {
    this.getProduction();
    this.getSolution();
    this.forFooter()
    // 设置导航栏在非开发者停止scoll变化
    location.hash == "#/developer"
      ? (this.scrollTag = true)
      : (this.scrollTag = false)
  },
  mounted() {
    if (
      location.hash.search("developer") == -1
    ) {
      window.addEventListener("scroll", this.handleScroll);
    }
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
  // 给footer 传值
    forFooter() {
            let busInfo = ['asddasd','asdsdasdsd']
            this.$bus.$emit("fromHeader",busInfo)
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
        productStatus: 2,
        productContextType:1
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
          this.prodListNum = Math.ceil( res.data.length / 6) 
          if(this.prodListNum>0) {
            for(var i=1;i<=this.prodListNum;i++) {
                this.productList.push(res.data.slice((i-1)*6,6*i))
            }
          }

          this.$bus.$emit("productList",res.data)
          })
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
          this.solutionListNum = Math.ceil( res.data.length / 6) 
          if(this.solutionListNum>0) {
            for(var i=1;i<=this.solutionListNum;i++) {
                this.solutionList.push(res.data.slice((i-1)*6,6*i))
            }
          }
          this.$bus.$emit("solutionList",res.data)
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
            path: "/products"+id,
          });
          break;
        case 2: //解决方案
          this.$router.push({
            path: "/solutions"+id,
          });
          break;
        case 3: //合作
          this.$router.push("/cooperate");
          break;
        case 4: //新闻与动态
          this.$router.push("/news");
          break;
        case 5: //关于我们
          window.open("https://www.beyondsoft.com/about/index.html");
          break;
        case 6: //开发者社区
          this.$router.push("/developer");
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
.el-popover {
  padding: 12px 15px;
  ul {
    display: inline-block;
    vertical-align: top;
    padding: 0 15px;

  }
  li {
      cursor: pointer;
    width: 140px;
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
  z-index: 99;
  background: transparent;
  position: fixed;
  span {
      cursor: pointer;
  }
  &:hover {
    background: #053982;
    // z-index: 1;
  }
  .min-header {
    width: 1200px;
    height: 100%;
    line-height: 78px;
    margin: 0 auto;
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
    ul {
      display: inline-block;
      li {
          cursor: pointer;
        float: left;
        margin: 0 15px;
        color: #fff;
        .production {
          font: 16px "MicrosoftYaHei";
          color: #2d2d2d;
        }
        span {
          display: block;
          float: left;
          width: 100%;
        }
        &:hover {
          color: #228ee8;
        }
      }
    }
    .dl {
      width: 57px;
      height: 24px;
      line-height:24px;
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
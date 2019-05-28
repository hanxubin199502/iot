<template>
  <div class="news_detail">
    <headerBar/>
    <div class="news_banner">
      <div class="center">
        <div class="new_menu">News</div>
      </div>
    </div>

    <div class="new_mainbox center clearfix">
      <div class="left_nav">
        <ul>
          <li>公司介绍</li>
          <li @click="jumpBack(1)" :class="{active:newsType=='1'}">新闻动态</li>
          <li @click="jumpBack(2)" :class="{active:newsType=='2'}">产品动态</li>
          <li @click="jumpBack(2)" :class="{active:newsType=='3'}">合作福利</li>
          <li>生态合作</li>
          <li>联系我们</li>
        </ul>
      </div>
      <!-- 新闻主体 -->
      <div class="right_newslist">
        <div class="newsitem">
          <h1>{{news.newsTheme}}</h1>
          <span>发布于</span>
          <span>{{news.newsType == 1?'新闻动态':news.newsType == 2?'产品动态':'合作福利'}}</span>
          <span>发布时间：</span>
          <span>{{$moment(news.updateTime).format('YYYY-MM-DD HH:mm:ss')}}</span>
          <p>{{news.newsAbstract}}</p>
          <p v-html="news.newsContent"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import footerBar from "../common/footer";
import headerBar from "../common/header";
export default {
  components: {
    footerBar,
    headerBar
  },
  data() {
    return {
      newsType: "1",
      news: []
    };
  },
  created() {
    this.newsType = this.$route.query.newsType;
    this.news.id = this.$route.params.id;
    console.log(this.newsType)
    this.getList();
  },
  methods: {
    //   获取列表
    getList() {
      let params = {
        newsId: this.news.id
      };
      this.$http
        .get(
          this.$api.getApiAddress(
            "/operationplatformmgn/o/saas/platform-news/query_news",
            "API_ROOT"
          ),
          params
        )
        .then(res => {
          console.log(res);
          this.news = res.data;
        });
    },
    //    跳回
    jumpBack(typeid) {
      this.$router.push({
        path: "/news",
        query: {
          newsType: typeid
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.news_detail {
  .news_banner {
    position: relative;
    padding-top: 78px;
    background: url(../../assets/images/new-background.png) no-repeat center
      center;
    background-size: 1920px 224px;
    text-align: center;
    color: #ffffff;
    height: 224px;
    line-height: 150px;
    width: 100%;
    font-size: 54px;
    .new_menu {
      position: absolute;
      bottom: 0;
      float: left;
      width: 160px;
      height: 57px;
      line-height: 76px;
      background-color: #003f98;
      font: bold 36px "MicrosoftYaHei-Bold";
    }
  }
  .new_mainbox {
    .left_nav {
      float: left;
      width: 160px;
      background-color: #f5f5f6;
      padding: 0 8px;
      .active {
        color: #2e88f6 !important;
      }
      li {
        padding: 20px 40px;
        width: 100%;
        border-bottom: 1px solid #e6e6e6;
        text-align: center;
        color: #2d2d2d;
        font: 16px "MicrosoftYaHei";
        &:hover {
          color: #258ce3;
        }
      }
    }
    .right_newslist {
      padding: 20px;
      width: 1040px;
      float: right;
      //   height: 700px;
      //   background-color: red;
      .newsitem {
        padding: 20px 5px;
        h1 {
          //   margin-top: 40px;
          color: #2d2d2d;
          font: 20px bold "MicrosoftYaHei-Bold";
        }
        span {
          display: inline-block;
          margin-top: 10px;
          color: #767976;
          font: 14px "MicrosoftYaHei";
        }
        p {
          margin-top: 20px;
          color: #2d2d2d;
          font: 14px "MicrosoftYaHei";
          line-height: 22px;
        }
        width: 100%;
        background-color: white;
      }
    }
  }
}
</style>
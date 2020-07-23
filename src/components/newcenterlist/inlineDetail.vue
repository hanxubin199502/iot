<template>
  <div class="news_detail">
    <headerBar/>
    
    <div class="new_mainbox center clearfix">
      <div class='detail_box'>
        <span class='detail_title' @click='jumpBack'>{{newsType==1?'公司动态':'行业资讯'}}</span><span class='detail_v'>></span><span class='detail_x'>详情</span>
      </div>
      <!-- 新闻主体 -->
      <div class="right_newslist" v-loading="loading">
        <div class="newsitem">
          <h1>{{news.newsTheme}}</h1>
          <p class='dete'>{{$moment(news.updateTime).format('YYYY-MM-DD')}}</p>
          <el-divider></el-divider>
          <div style="margin:24px 0;font-size:16px;color:#333">{{news.newsAbstract}}</div>
          <p v-html="news.newsContent"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import footerBar from "../common/footer";
import headerBar from "../common/header2";
export default {
  components: {
    footerBar,
    headerBar
  },
  data() {
    return {
      newsType:'',
      news: [],
      loading:true
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
          this.loading = false
          this.news = res.data;
        });
    },
    //    跳回
    jumpBack() {
      this.$router.push({
        path: "/newsCenter",
        query: {
          newsType: this.newsType
        }
      });

    }
  }
};
</script>

<style lang="less" scoped>
.news_detail {
  .new_mainbox {
    .detail_box{
      width:1200px;
      margin-top:95px;
      // padding:20px;
      .detail_title{
        font-size:18px;
        color:#1A66FF;
        cursor: pointer;
      }
      .detail_x{
        font-size:18px;
        color:#333;
      }
      .detail_v{
        margin:0 10px;
        font-size:18px;
      }
    }
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
      width: 1200px;
      .newsitem {
        margin:12px 0;
        // padding: 20px 0px;
        .dete{
          color:#999;
          font-size:16px;
        }
        h1 {
          color: #2d2d2d;
          font: 22px bold "MicrosoftYaHei-Bold";
        }
        span {
          display: inline-block;
          margin-top: 10px;
          color: #767976;
          font: 14px "MicrosoftYaHei";
        }
        p {
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
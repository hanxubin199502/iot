<template>
  <div class="news_list">
    <headerBar/>
    <!-- 头部banner -->
    <div class="news_banner">
      <div class="center">
        <div class="news_banner_title">{{newsType=='1'?"新闻动态":newsType=='2'?"产品动态":"合作福利"}}</div>
        <div class="new_menuhead">News</div>
      </div>
    </div>
    <!-- 主体 -->
    <div class="new_mainbox center clearfix">
      <!-- 左边导航 -->
      <div class="left_nav">
        <ul>
          <li style="cursor: not-allowed;">公司介绍</li>
          <li style="cursor: pointer;" @click="newsType=1" :class="{active:newsType=='1'}">新闻动态</li>
          <li style="cursor: pointer;" @click="newsType=2" :class="{active:newsType=='2'}">产品动态</li>
          <li style="cursor: pointer;" @click="newsType=3" :class="{active:newsType=='3'}">合作福利</li>
          <li style="cursor: not-allowed;">生态合作</li>
          <li style="cursor: not-allowed;">联系我们</li>
        </ul>
      </div>

      <div class="right_newslist">
        <div class="newsitem" v-for="(item,index) in newsList" :key="index">
          <h1 @click="jump(item.id)">{{item.newsTheme}}</h1>
          <span>发布于</span>
          <span>{{item.newsType == 1?'新闻动态':item.newsType == 2?'产品动态':'合作福利'}}</span>
          <span>发布时间：</span>
          <span>{{$moment(item.updateTime).format('YYYY-MM-DD HH:mm:ss')}}</span>
          <p>{{item.newsAbstract}}</p>
        </div>
        <el-pagination
          style="margin-top:20px; float:left; padding-bottom:20px;"
          background
          layout="prev, pager, next"
          :total="Number(total)"
          :page-size="pageSize"
          :current-page.sync="pageNum"
          @current-change="currentPage"
          v-show="total !== 0"
        ></el-pagination>
      </div>
    </div>
    <footerBar/>
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
      newsList: [],
      pageSize: 10,
      pageNum: 1,
      total: null,
      newsType: "1",
      newsStatus: "1"
    };
  },
  created() {
    if(this.$route.query.newsType) {
      this.newsType = this.$route.query.newsType;
    }
    this.getList();
    
  },
  watch: {
    newsType: "getList"
  },
  methods: {
    getList() {
      let params = {
        pageSize: this.pageSize,
        pageNum: this.pageNum,
        newsType: this.newsType,
        newsStatus: this.newsStatus
      };
      this.$http
        .get(
          this.$api.getApiAddress(
            "/operationplatformmgn/o/saas/platform-news/query_news_all",
            "API_ROOT"
          ),
          params
        )
        .then(res => {
          this.newsList = res.data.list;
          this.total = res.data.total;
        });
    },
    // 页码
    currentPage() {
      this.getList();
    },
    // 跳转详情页面
    jump(id) {
      this.$router.push({
        path: "/newsDetail" + id,
        query: {
          newsType: this.newsType
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.news_list {
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
    .new_menuhead {
      position: absolute;
      bottom: 0;
      float: left;
      width: 160px;
      height: 57px;
      line-height: 76px;
      background-color: #003f98;
      font: bold 36px "MicrosoftYaHei-Bold";
    }
    .news_banner_title {
      font-size: 40px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -30%);
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
      // height: 700px;
      // background-color: red;
      .newsitem {
        padding: 20px 5px;
        h1 {
          margin-top: 40px;
          color: #2d2d2d;
          font: 20px bold "MicrosoftYaHei-Bold";
          cursor: pointer;
          &:hover {
            color: #258ce3;
          }
        }
        h1:first-child {
          margin-top: 0;
        }
        span {
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
        border-bottom: 1px solid #e9e9e9;
      }
    }
  }
}
</style>
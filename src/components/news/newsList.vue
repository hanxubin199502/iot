<template>
  <div class="news_list">
    <headerBar/>
<!-- 头部banner -->
    <div class="news_banner">
        <div class="center" >
          <div class="news_banner_title">新闻动态</div>
            <div class="new_menuhead">News</div>
        </div>
    </div>
    <!-- 主体 -->
    <div class="new_mainbox center clearfix">
      <!-- 左边导航 -->
        <div class="left_nav">

            <ul>
                <li>公司介绍</li>
                <li>新闻动态</li>
                <li>产品动态</li>
                <li>合作福利</li>
                <li>生态合作</li>
                <li>联系我们</li>
            </ul>
        </div>

        <div class="right_newslist">
            <div class="newsitem">
                    <h1 @click="jump(index)">2018年博彦科技发布物联网云平台V1.0产品</h1>
                    <span>发布与</span><span>新闻动态</span> <span>发布时间：2018-12-22</span>
                    <p>2018年在北京国家会议中心，博彦科技联合创始人、总裁兼首席运营官马强向古德华介绍了博彦科技与微软在人工智能2018年在北京国家会议中心，博彦科技联合创始人、总裁兼首席运营官马强向古德华介绍了博彦科技与微软在人工智能2018年在北京国家会议中心，博彦科技联合创始人、总裁兼首席运营官马强向古德华介绍了博彦科技与微软在人工智能2018年在北京国家会议中心，博彦科技联合创始人、总裁兼首席运营官马强向古德华介绍了博彦科技与微软在人工智能 领域的深度合作，</p>
            </div>
            <div class="newsitem">
                    <h1>2018年博彦科技发布物联网云平台V1.0产品</h1>
                    <span>发布与</span><span>新闻动态</span> <span>发布时间：2018-12-22</span>
                    <p>2018年在北京国家会议中心，博彦科技联合创始人、总裁兼首席运营官马强向古德华介绍了博彦科技与微软在人工智能2018年在北京国家会议中心，博彦科技联合创始人、总裁兼首席运营官马强向古德华介绍了博彦科技与微软在人工智能2018年在北京国家会议中心，博彦科技联合创始人、总裁兼首席运营官马强向古德华介绍了博彦科技与微软在人工智能2018年在北京国家会议中心，博彦科技联合创始人、总裁兼首席运营官马强向古德华介绍了博彦科技与微软在人工智能 领域的深度合作，</p>
            </div>
            <div class="newsitem">
                    <h1>2018年博彦科技发布物联网云平台V1.0产品</h1>
                    <span>发布与</span><span>新闻动态</span> <span>发布时间：2018-12-22</span>
                    <p>2018年在北京国家会议中心，博彦科技联合创始人、总裁兼首席运营官马强向古德华介绍了博彦科技与微软在人工智能2018年在北京国家会议中心，博彦科技联合创始人、总裁兼首席运营官马强向古德华介绍了博彦科技与微软在人工智能2018年在北京国家会议中心，博彦科技联合创始人、总裁兼首席运营官马强向古德华介绍了博彦科技与微软在人工智能2018年在北京国家会议中心，博彦科技联合创始人、总裁兼首席运营官马强向古德华介绍了博彦科技与微软在人工智能 领域的深度合作，</p>
            </div>
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
      data(){
        return{
            // scrollTag:false
        }
    },
    methods: {
      jump (index) {
        this.$router.push('/newsDetail')
      }
    }
};
</script>

<style lang="less" scoped>
.news_list {
  .news_banner {
      position:relative;
    padding-top:78px; 
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
        position:absolute;
        bottom: 0;
        float: left;
        width: 160px;
        height: 57px;
        line-height: 76px;
        background-color: #003F98;
        font:bold 36px "MicrosoftYaHei-Bold";
    }
    .news_banner_title {
      font-size: 40px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-30%)

    }
  }
  .new_mainbox {
    .left_nav {
      float: left;
        width: 160px;
        background-color:#F5F5F6 ;
        padding:  0 8px ;
        li {
          padding:20px 40px;
          width: 100%;
          border-bottom: 1px solid #E6E6E6;
          text-align: center;
          color:#2D2D2D;
          font: 16px 'MicrosoftYaHei';
          &:hover {
            color:#258CE3;
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
          color: #2D2D2D;
          font:20px bold 'MicrosoftYaHei-Bold';
          &:hover {
            color:#258CE3;
          }
        }
        h1:first-child {
          margin-top: 0;
        }
        span {
          margin-top: 10px;
          color: #767976;
          font:14px 'MicrosoftYaHei';
        }
        p {
          margin-top:20px;
          color: #2D2D2D;
          font: 14px 'MicrosoftYaHei';
          line-height: 22px;
        }
        width: 100%;
        background-color:white;
        border-bottom: 1px solid #E9E9E9;
      }
    }
  }
}
</style>
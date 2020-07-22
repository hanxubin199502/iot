<template>
  <div class="cooperate-submit">
    <headerBar/>
    <div class="header_background">
      <div class="solution_title center clearfix">
        <div class="cooperate_slogan">
          <p>{{'新闻中心'}}</p>
          <p class="span"></p>
        </div>
      </div>
    </div>

    <div class="table_list">
      <div class="table_top">
        <div :class="{active:tableStatus==1}" @click="tableClick(1)">{{'公司动态'}}</div>
        <div :class="{active:tableStatus==2}" @click="tableClick(2)">{{'行业资讯'}}</div>
      </div>
    </div>

    <div class="content center">
      <!-- 新闻中心 -->
      <div class="sceneList" v-if="this.tableStatus==1">
        <img src="../../assets/images/title_b.png" alt="" style="margin-bottom:56px">
        <div class="programmeList">
          <div class="programme_one">
             <div class="num_1" v-for='(item,index) in setnews' :key='index' v-if='index<1'>
               <div class="title_img">
                 <div class="title_text" @click='detail(item.id)'>{{item.newsTheme}}</div>
               </div>
               <div class="brief">
                 <div class="brief_top">
                   {{item.newsAbstract}}
                 </div>
                 <div class="brief_date">{{$moment(item.updateTime).format('YYYY-MM-DD')}}</div>
               </div>
             </div>
             <div class="num_1">
               <div class="title_img1">
                 <div class="title_text" @click='detailq(mouthnews.id)'>{{mouthnews.newsTheme}}</div>
               </div>
               <div class="brief">
                 <div class="brief_top">
                   {{mouthract.newsAbstract}}
                 </div>
                 <div class="brief_date">{{$moment(mouthnTime.updateTime).format('YYYY-MM-DD')}}</div>
               </div>
             </div>
             <div class="num_1">
               <div class="title_img2">
                 <div class="title_text" @click='detailw(setnewstr.id)'>{{setnewstr.newsTheme}}</div>
               </div>
               <div class="brief">
                 <div class="brief_top">
                   {{setnewstd.newsAbstract}}
                 </div>
                 <div class="brief_date">{{$moment(setnewsts.updateTime).format('YYYY-MM-DD')}}</div>
               </div>
             </div>
          </div>
          <div class="programme_two" v-loading="loading">
            
              <div class="list_box" v-for="(item,index) in newsList" :key="index" v-if='index>2'>
              <div class="list_left">
                <p class="date_lite">{{($moment(item.updateTime).format('YYYY-MM-DD')).slice(5)}}</p>
                <p class="date_year">{{($moment(item.updateTime).format('YYYY-MM-DD')).slice(0,-6)}}</p>
              </div>
              <div class="list_middle">
                <p class="title_l" @click='jump(item.id)'>{{item.newsTheme}}</p>
                <p class="title_e">{{item.newsAbstract}}</p>
              </div>
              <div class="list_right">
                <img src="../../assets/images/right.png" alt="" @click='jump(item.id)'>
              </div>
            </div>

            <el-pagination
              style="margin:20px 0"
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

      </div>
      <!-- 行业资讯 -->
      <div class="sceneList" v-if="this.tableStatus==2">
        <img src="../../assets/images/title_c.png" alt="" style="margin-bottom:56px">
        <div class="programmeList">
          <div class="programme_one">
             <div class="num_1">
               <div class="title_img">
                 <div class="title_text" @click='detaile(industry.id)'>{{industry.newsTheme}}</div>
               </div>
               <div class="brief">
                 <div class="brief_top">
                   {{industry.newsAbstract}}
                 </div>
                 <div class="brief_date">{{$moment(industry.updateTime).format('YYYY-MM-DD')}}</div>
               </div>
             </div>
             <div class="num_1">
               <div class="title_img1">
                 <div class="title_text" @click='detailr(industryone.id)'>{{industryone.newsTheme}}</div>
               </div>
               <div class="brief">
                 <div class="brief_top">
                   {{industryone.newsAbstract}}
                 </div>
                 <div class="brief_date">{{$moment(industryone.updateTime).format('YYYY-MM-DD')}}</div>
               </div>
             </div>
             <div class="num_1">
               <div class="title_img2">
                 <div class="title_text" @click='detailt(industrytwo.id)'>{{industrytwo.newsTheme}}</div>
               </div>
               <div class="brief">
                 <div class="brief_top">
                   {{industrytwo.newsAbstract}}
                 </div>
                 <div class="brief_date">{{$moment(industrytwo.updateTime).format('YYYY-MM-DD')}}</div>
               </div>
             </div>
          </div>
          <div class="programme_two" v-loading="loading">
            <div class="list_box" v-for="(item,index) in industryList" :key="index" v-if='index>2'>
              <div class="list_left">
                <p class="date_lite">{{($moment(item.updateTime).format('YYYY-MM-DD')).slice(5)}}</p>
                <p class="date_year">{{($moment(item.updateTime).format('YYYY-MM-DD')).slice(0,-6)}}</p>
              </div>
              <div class="list_middle">
                <p class="title_l" @click='jumpid(item.id)'>{{item.newsTheme}}</p>
                <p class="title_e">{{item.newsAbstract}}</p>
              </div>
              <div class="list_right">
                <img src="../../assets/images/right.png" alt="" @click='jumpid(item.id)'>
              </div>
            </div>

            <el-pagination
              style="margin:20px 0"
              background
              layout="prev, pager, next"
              :total="Number(totals)"
              :page-size="pagesize"
              :current-page.sync="pageNo"
              @current-change="currentPage1"
              v-show="totals !== 0"
            ></el-pagination>
          </div>
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
  data() {
    return {
      loading:true,
      tableStatus:1,
      pageSize: 10,
      pageNum: 1,
      pageNo:1,
      pagesize:10,
      totals:null,
      total: null,
      newsType:'1',
      IndustType:'4',
      newsStatus: "1",
      newsList:[],
      setnews:[],
      mouthnews:[],
      mouthract:[],
      mouthnTime:[],
      setnewstr:[],
      setnewstd:[],
      setnewsts:[],
      //行业资讯
      industryList:[],
      industry:[],
      industryone:[]
    };
  },
  created() {
    if(this.$route.query.newsType) {
      this.tableStatus = this.$route.query.newsType;
    }
    this.getList()
    this.getindustList()
  },
    watch:{      
        // 监听type变化
        $route() {
            if(this.$route.query.newsType){
                this.tableStatus = this.$route.query.newsType;
               
            }
            
        }
  },
  methods: {
    //table切换
    tableClick(val){
      this.tableStatus = val
    },
    //新闻列表
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
          this.loading = false
          this.newsList = res.data.list;
          this.total = res.data.total;
          this.setnews = res.data.list;
          if(res.data.list[1] || res.data.list[2]){
            this.mouthnews = this.mouthnTime = this.mouthract = res.data.list[1];
            this.setnewstr = this.setnewstd = this.setnewsts = res.data.list[2];
          }
      });
    },
    //分页
    currentPage() {
      this.getList();
    },
    getindustList(){
      let params = {
        pageSize: this.pagesize,
        pageNum: this.pageNo,
        newsType: this.IndustType,
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
          this.loading = false
          this.industryList = res.data.list;
          this.totals = res.data.total;
          this.industry = res.data.list[0];
          this.industryone = res.data.list[1];
          this.industrytwo = res.data.list[2];
      });
    },
    //行业资讯分页
    currentPage1(){
      this.getindustList()
    },
    //新闻中心查看详情特殊处理
    jump(id){
      this.$router.push({
        path: "/inlineDetail" + id,
        query:{
          newsType:this.tableStatus
        }
      });
    },
    detail(id){
      this.$router.push({
        path: "/inlineDetail" + id,
        query:{
          newsType:this.tableStatus
        }
      });
    },
    detailq(id){
      this.$router.push({
        path: "/inlineDetail" + id,
        query:{
          newsType:this.tableStatus
        }
      });
    },
    detailw(id){
      this.$router.push({
        path: "/inlineDetail" + id,
        query:{
          newsType:this.tableStatus
        }
      });
    },
    //行业资讯查看详情特殊处理
    detaile(id){
      this.$router.push({
        path: "/inlineDetail" + id,
        query:{
          newsType:this.tableStatus
        }
      });
    },
    detailr(id){
      this.$router.push({
        path: "/inlineDetail" + id,
        query:{
          newsType:this.tableStatus
        }
      });
    },
    detailt(id){
      this.$router.push({
        path: "/inlineDetail" + id,
        query:{
          newsType:this.tableStatus
        }
      });
    },
    jumpid(id){
      this.$router.push({
        path: "/inlineDetail" + id,
        query:{
          newsType:this.tableStatus
        }
      });
    }
   }
};
</script>
<style lang="less">
.cooperate-submit {
  .el-input {
    width: 60%;
  }
  .el-textarea {
    width: 60%;
  }
  .el-button {
    width: 20%;
    margin: 30px auto;
    transform: translateX(-40%);
    margin-left: 50%;
  }
}
</style>

<style lang="less" scoped>
.cooperate-submit {
  .header_background {
    // position: relative;
    width: 100%;
    height: 430px;
    background: url(../../assets/images/plo_banner.png) center center;
    .solution_title {
      position: relative;
      color: #ffffff;
      .cooperate_slogan {
        user-select: none;
        position: absolute;
        width: 100%;
        text-align: center;
        top: 170px;
        left: 0;
        font-size: 50px;
        .span{
          margin: auto;
          width: 95px;
          height: 3px;
          background: #fff;
          margin-top: 5px;
        }
      }
    }
  }
  .table_list{
      width: 100%;
      height: 56px;
      background: #f3f6fc;
      .table_top{
        margin: 0 35%;
        height: 56px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        div{
          height:56px;
          line-height: 56px;
          border-top: none;
          border-left: none;
          border-right: none;
          cursor: pointer;
          padding: 0px 10px;
        }
      }
    }
  .active{
    color: #1A66FF;
    border-bottom: 2px solid #1A66FF;
  }
  .content {
    // padding: 15px 0;
    color: #3f3f3f;
    .sceneList{
      width: 100%;
      height: 100%;
      // border: 1px solid red;
      margin-top: 72px;
      text-align: center;
      .programmeList{
        width: 100%;
        margin-top: 72px;
        .programme_one{
          width: 100%;
          margin-top: 72px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .num_1{
            width: 30%;
            height: 150px;
            .title_img{
              width: 100%;
              height: 100px;
              background: url(../../assets/images/num_one.png) no-repeat center center;
              position: relative;
              top: -50px;
              left: -36%;
              .title_text{
                position: relative;
                top: 45px;
                left: 129px;
                font-size: 22px;
                color: #000;
                height: 29px;
                text-align: left;
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
                cursor: pointer;
              }
              .title_text:hover{
                color: #1A66FF;
              }
            }
            .title_img1{
              width: 100%;
              height: 100px;
              background: url(../../assets/images/num_two.png) no-repeat center center;
              position: relative;
              top: -50px;
              left: -36%;
              .title_text{
                position: relative;
                top: 45px;
                left: 129px;
                font-size: 22px;
                color: #000;
                height: 29px;
                text-align: left;
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
                cursor: pointer;
              }
              .title_text:hover{
                color: #1A66FF;
              }
            }
            .title_img2{
              width: 100%;
              height: 100px;
              background: url(../../assets/images/num_three.png) no-repeat center center;
              position: relative;
              top: -50px;
              left: -36%;
              .title_text{
                position: relative;
                top: 45px;
                left: 129px;
                font-size: 22px;
                color: #000;
                height: 29px;
                text-align: left;
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
                cursor: pointer;
              }
              .title_text:hover{
                color: #1A66FF;
              }
            }
            .brief{
              width: 100%;
              margin-top: -30px;
              .brief_top{
                width: 100%;
                height: 52px;
                border: 1px solid #fff;
                text-align: left;
                font-size: 16px;
                color: #333;
                overflow:hidden;
                text-overflow:ellipsis;
                display:-webkit-box;
                -webkit-box-orient:vertical;
                -webkit-line-clamp:2;
              }
              .brief_date{
                color: #999;
                font-size: 14px;
                text-align: left;
              }
            }
          }
        }
        .programme_two{
          width: 100%;
          // height: 300px;
          // border: 1px solid red;
          margin-top: 47px;
          .list_box{
            width: 100%;
            height: 95px;
            margin-top: 25px;
            border-bottom: 1px solid #D6D9DC;
            display: flex;
            justify-content: space-between;
            .list_left{
              width: 117px;
              height: 95px;
              text-align: left;
              .date_lite{
                margin-top: -8px;
                font-size: 34px;
                color: #000;
              }
              .date_year{
                font-size: 16px;
                color: #999;
                margin-left: 5px;
              }
            }
            .list_middle{
              width: 960px;
              height: 95px;
              .title_l{
                font-size: 22px;
                color: #000;
                width: 960px;
                text-align: left;
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
                cursor: pointer;
              }
              .title_l:hover{
                color: #1A66FF;
              }
              .title_e{
                width: 960px;
                height: 49px;
                margin-top: 8px;
                font-size: 16px;
                color: #333;
                border: 1px solid #fff;
                text-align: left;
                overflow:hidden;
                text-overflow:ellipsis;
                display:-webkit-box;
                -webkit-box-orient:vertical;
                -webkit-line-clamp:2;
              }
            }
            .list_right{
              width: 117px;
              height: 95px;
              text-align: right;
              img{
                margin-top: 30px;
                cursor: pointer;
              }
              img:hover{
                opacity: 0.5;
              }
            }
          }
        }
      }
    }
  }
  .finish {
    height: 300px;
    text-align: center;
    font-size: 30px;
    .finish_info {
      margin-top: 100px;
    }
    .finish_countdown {
      margin-top: 50px;
      font-size: 24px;
      .finish_countdown_path {
        color:blue;
        cursor: pointer;
      }
      }
  }
}
</style>

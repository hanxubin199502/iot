<template>
  <div class="cooperate-submit">
    <headerBar/>
    <div class="header_background">
      <div class="solution_title center clearfix">
        <div class="cooperate_slogan">
          <p>{{'产品与方案'}}</p>
          <p class="span"></p>
        </div>
      </div>
    </div>

    <div class="table_list">
      <div class="table_top">
        <div :class="{active:tableStatus==1}" @click="tableClick(1)">{{'场景化'}}</div>
        <div :class="{active:tableStatus==2}" @click="tableClick(2)">{{'功能服务'}}</div>
        <div :class="{active:tableStatus==3}" @click="tableClick(3)">{{'硬件(一体化产品)'}}</div>
      </div>
    </div>

    <div class="content center">
      <!-- 场景化列表 -->
      <div class="sceneList" v-if="this.tableStatus==1">
        <img src="../../assets/images/title_l.png" alt="">
        <div class="programmeList">
          <div class="programme_one">
            <div class="slutionmode">
              <div class="slutionmode_left">
                <img src="../../assets/images/imges1.png" alt="">
              </div>
              <div class="slutionmode_mid">
                <div class="title">博彦智慧工位解决方案</div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>方案功能</span>
                </div>
                <div class="copywriting">
                  博彦智慧工位解决方案支持与各种设备应用集成，真正实现了工位管理与办公室空间管理的一体化智能办公体验，
                  是对日常工作中的各种需求，如：工位预定、工位导航、会议室预定、工位情况统计、办公室环境监测、办公室安防等等多种功能一站式解决方案。
                </div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>开发背景</span>
                </div>
                <div class="copywriting">
                  对于快速扩张中的企业，往往因初期规划与成本控制等原因，在企业急速发展的时候面临办公空间紧张，但又同时存在空间浪费的情况，需求和应用
                  严重不匹配，无形中拖累了企业的高速扩张并形成了资源浪费，对企业人员来说，办公环境的不良状态也制约了工作效率。博彦科技从实际应用场景
                  出发，针对上述情况开发智慧工位解决方案，帮助企业进行工位规划，实时洞察并合理分配办公空间，提高利用效率。
                </div>
              </div>
              <div class="slutionmode_right">查看更多>></div>
            </div>
            <div class="keyword">
              <span>关键字</span>
              <span style="margin-left:20px">
                <span class="label">工位</span>
                <span class="label">企业</span>
                <span class="label">智慧</span>
                <span class="label">效率</span>
                <span class="label">空间</span>
              </span>
            </div>
          </div>

          <div class="programme_one" style="margin-top:20px">
            <div class="slutionmode">
              <div class="slutionmode_left">
                <img src="../../assets/images/imges2.png" alt="">
              </div>
              <div class="slutionmode_mid">
                <div class="title">博彦智慧工位解决方案</div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>方案功能</span>
                </div>
                <div class="copywriting">
                  博彦智慧工位解决方案支持与各种设备应用集成，真正实现了工位管理与办公室空间管理的一体化智能办公体验，
                  是对日常工作中的各种需求，如：工位预定、工位导航、会议室预定、工位情况统计、办公室环境监测、办公室安防等等多种功能一站式解决方案。
                </div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>开发背景</span>
                </div>
                <div class="copywriting">
                  对于快速扩张中的企业，往往因初期规划与成本控制等原因，在企业急速发展的时候面临办公空间紧张，但又同时存在空间浪费的情况，需求和应用
                  严重不匹配，无形中拖累了企业的高速扩张并形成了资源浪费，对企业人员来说，办公环境的不良状态也制约了工作效率。博彦科技从实际应用场景
                  出发，针对上述情况开发智慧工位解决方案，帮助企业进行工位规划，实时洞察并合理分配办公空间，提高利用效率。
                </div>
              </div>
              <div class="slutionmode_right">查看更多>></div>
            </div>
            <div class="keyword">
              <span>关键字</span>
              <span style="margin-left:20px">
                <span class="label">工位</span>
                <span class="label">企业</span>
                <span class="label">智慧</span>
                <span class="label">效率</span>
                <span class="label">空间</span>
              </span>
            </div>
          </div>
          <div class="programme_one" style="margin-top:20px">
            <div class="slutionmode">
              <div class="slutionmode_left">
                <img src="../../assets/images/imges3.png" alt="">
              </div>
              <div class="slutionmode_mid">
                <div class="title">博彦智慧工位解决方案</div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>方案功能</span>
                </div>
                <div class="copywriting">
                  博彦智慧工位解决方案支持与各种设备应用集成，真正实现了工位管理与办公室空间管理的一体化智能办公体验，
                  是对日常工作中的各种需求，如：工位预定、工位导航、会议室预定、工位情况统计、办公室环境监测、办公室安防等等多种功能一站式解决方案。
                </div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>开发背景</span>
                </div>
                <div class="copywriting">
                  对于快速扩张中的企业，往往因初期规划与成本控制等原因，在企业急速发展的时候面临办公空间紧张，但又同时存在空间浪费的情况，需求和应用
                  严重不匹配，无形中拖累了企业的高速扩张并形成了资源浪费，对企业人员来说，办公环境的不良状态也制约了工作效率。博彦科技从实际应用场景
                  出发，针对上述情况开发智慧工位解决方案，帮助企业进行工位规划，实时洞察并合理分配办公空间，提高利用效率。
                </div>
              </div>
              <div class="slutionmode_right">查看更多>></div>
            </div>
            <div class="keyword">
              <span>关键字</span>
              <span style="margin-left:20px">
                <span class="label">工位</span>
                <span class="label">企业</span>
                <span class="label">智慧</span>
                <span class="label">效率</span>
                <span class="label">空间</span>
              </span>
            </div>
          </div>
          <div class="programme_one" style="margin-top:20px">
            <div class="slutionmode">
              <div class="slutionmode_left">
                <img src="../../assets/images/imges4.png" alt="">
              </div>
              <div class="slutionmode_mid">
                <div class="title">博彦智慧工位解决方案</div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>方案功能</span>
                </div>
                <div class="copywriting">
                  博彦智慧工位解决方案支持与各种设备应用集成，真正实现了工位管理与办公室空间管理的一体化智能办公体验，
                  是对日常工作中的各种需求，如：工位预定、工位导航、会议室预定、工位情况统计、办公室环境监测、办公室安防等等多种功能一站式解决方案。
                </div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>开发背景</span>
                </div>
                <div class="copywriting">
                  对于快速扩张中的企业，往往因初期规划与成本控制等原因，在企业急速发展的时候面临办公空间紧张，但又同时存在空间浪费的情况，需求和应用
                  严重不匹配，无形中拖累了企业的高速扩张并形成了资源浪费，对企业人员来说，办公环境的不良状态也制约了工作效率。博彦科技从实际应用场景
                  出发，针对上述情况开发智慧工位解决方案，帮助企业进行工位规划，实时洞察并合理分配办公空间，提高利用效率。
                </div>
              </div>
              <div class="slutionmode_right">查看更多>></div>
            </div>
            <div class="keyword">
              <span>关键字</span>
              <span style="margin-left:20px">
                <span class="label">工位</span>
                <span class="label">企业</span>
                <span class="label">智慧</span>
                <span class="label">效率</span>
                <span class="label">空间</span>
              </span>
            </div>
          </div>
          <div class="programme_one" style="margin-top:20px">
            <div class="slutionmode">
              <div class="slutionmode_left">
                <img src="../../assets/images/imges5.png" alt="">
              </div>
              <div class="slutionmode_mid">
                <div class="title">博彦智慧工位解决方案</div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>方案功能</span>
                </div>
                <div class="copywriting">
                  博彦智慧工位解决方案支持与各种设备应用集成，真正实现了工位管理与办公室空间管理的一体化智能办公体验，
                  是对日常工作中的各种需求，如：工位预定、工位导航、会议室预定、工位情况统计、办公室环境监测、办公室安防等等多种功能一站式解决方案。
                </div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>开发背景</span>
                </div>
                <div class="copywriting">
                  对于快速扩张中的企业，往往因初期规划与成本控制等原因，在企业急速发展的时候面临办公空间紧张，但又同时存在空间浪费的情况，需求和应用
                  严重不匹配，无形中拖累了企业的高速扩张并形成了资源浪费，对企业人员来说，办公环境的不良状态也制约了工作效率。博彦科技从实际应用场景
                  出发，针对上述情况开发智慧工位解决方案，帮助企业进行工位规划，实时洞察并合理分配办公空间，提高利用效率。
                </div>
              </div>
              <div class="slutionmode_right">查看更多>></div>
            </div>
            <div class="keyword">
              <span>关键字</span>
              <span style="margin-left:20px">
                <span class="label">工位</span>
                <span class="label">企业</span>
                <span class="label">智慧</span>
                <span class="label">效率</span>
                <span class="label">空间</span>
              </span>
            </div>
          </div>
          <div class="programme_one" style="margin-top:20px">
            <div class="slutionmode">
              <div class="slutionmode_left">
                <img src="../../assets/images/imges6.png" alt="">
              </div>
              <div class="slutionmode_mid">
                <div class="title">博彦智慧工位解决方案</div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>方案功能</span>
                </div>
                <div class="copywriting">
                  博彦智慧工位解决方案支持与各种设备应用集成，真正实现了工位管理与办公室空间管理的一体化智能办公体验，
                  是对日常工作中的各种需求，如：工位预定、工位导航、会议室预定、工位情况统计、办公室环境监测、办公室安防等等多种功能一站式解决方案。
                </div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>开发背景</span>
                </div>
                <div class="copywriting">
                  对于快速扩张中的企业，往往因初期规划与成本控制等原因，在企业急速发展的时候面临办公空间紧张，但又同时存在空间浪费的情况，需求和应用
                  严重不匹配，无形中拖累了企业的高速扩张并形成了资源浪费，对企业人员来说，办公环境的不良状态也制约了工作效率。博彦科技从实际应用场景
                  出发，针对上述情况开发智慧工位解决方案，帮助企业进行工位规划，实时洞察并合理分配办公空间，提高利用效率。
                </div>
              </div>
              <div class="slutionmode_right">查看更多>></div>
            </div>
            <div class="keyword">
              <span>关键字</span>
              <span style="margin-left:20px">
                <span class="label">工位</span>
                <span class="label">企业</span>
                <span class="label">智慧</span>
                <span class="label">效率</span>
                <span class="label">空间</span>
              </span>
            </div>
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
      tableStatus:1,

    };
  },
  created() {
  },
  methods: {
    tableClick(val){
      this.tableStatus = val
      console.log(val)
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
    background: url(../../assets/images/pro_banner.png) center center;
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
        margin: 0 26%;
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
    padding: 15px 0;
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
          // height:354px;
          background: #FBFBFC;
          border: 1px solid #D6D9DC;
          margin-top: 72px;
          .slutionmode{
            width: 100%;
            height: 280px;
            display: flex;
            margin-top: 26px;
            .slutionmode_left{
              width: 125px;
              height: 100%;
            }
            .slutionmode_mid{
              width: 948px;
              height: 100%;
              border-bottom: 1px solid #D6D9DC;
              text-align: left;
              .title{
                color: #000;
                font-size: 22px;
              }
              .slutionmode_log{
                margin-top: 26px;
                color: #000;
                font-size: 16px;
              }
              .copywriting{
                margin-top: 11px;
                font-size: 14px;
                color: #333333;
              }
            }
            .slutionmode_right{
              width: 125px;
              height: 100%;
              line-height: 300px;
              color: #1A66FF;
              font-size: 16px;
            }
          }
          .keyword{
            text-align: left;
            width: 948px;
            height: 78px;
            line-height: 78px;
            margin-left: 125px;
            color: #000000;
            font-size: 18px;
            .label{
              width: 95px;
              height: 29px;
              border: 1px solid #778495;
              border-radius: 15px;
              padding: 4px 33px;
              color: #333;
              font-size: 14px;
              margin: 0 5px;
            }
          }
        }
        .programme_one:hover{
          box-shadow:4px 4px 5px 2px #D6D9DC;
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

<template>
  <div class="cooperate-submit">
    <headerBar/>
    <div class="header_background">
      <div class="solution_title center clearfix">
        <div class="cooperate_slogan">
          <p>{{'案例分析'}}</p>
          <p class="span"></p>
        </div>
      </div>
    </div>

    <div class="content center">
      <div class="sceneList">
        <img src="../../assets/images/title_a.png" alt="">
        <div class="programmeList">
          <!-- 左侧导航 -->
          <div class="table_left">
            <div class="left_nav">
              <ul>
                <li style="margin-top:0px" :class="{active:newList=='1'}" @click="newList=1">中国石油大厦</li>
                <li @click="newList=2" :class="{active:newList=='2'}">张江-张润大厦</li>
                <li @click="newList=3" :class="{active:newList=='3'}">山东-济宁创意大厦</li>
                <li @click="newList=4" :class="{active:newList=='4'}">上海-连成集团</li>
                <li @click="newList=5" :class="{active:newList=='5'}">北京-博彦科技大厦</li>
                <li @click="newList=6" :class="{active:newList=='6'}">北京-生命科学园</li>
              </ul>
            </div>
          </div>
          <!-- 右侧内容 -->
          <div class="table_right" v-if="newList==1">
            <div class="table_text">
              国内首个应用TR算法的智慧楼宇，实现中央空调全系统的控制逻辑优化升级，保证原有空调服务效果的情况下降低30%以上能耗。
            </div>
            <img class="img" src="../../assets/images/banner_1.png" alt="">
            <div style="margin-bottom:183px">
              <div class="table_title">
                <img src="../../assets/images/blackmore.png" alt=""><span class="table_obj">项目简介</span>
                <div class="obj_text">
                  中国石油大厦是中国石油天然气集团公司和中国石油天然气股份有限公司总部办公大楼，地上22层，地下4层，总建筑面积200838平方米，
                  大厦建设规模大，功能复杂，是面向世界的特大型企业的办公中枢。
                </div>
              </div>
              <div class="table_title" style="margin-top:34px">
                <img src="../../assets/images/blackmore.png" alt=""><span class="table_obj">实现功能</span>
                <div class="obj_text">
                  为楼宇安装智能设备与传感器，并将设备联接组网，实现对楼宇整体能耗、能效的智能化分析，同时利用物联网平台管理设备报
                  警与维护、故障检测诊断、系统异常诊断等工作，赋能楼宇系统运维。
                </div>
              </div>
              <div class="table_title" style="margin-top:34px">
                <img src="../../assets/images/blackmore.png" alt=""><span class="table_obj">方案亮点与价值</span>
                <div class="obj_text">
                  对中央空调全空气系统控制逻辑优化升级，国内第一个应用TR算法的智能楼宇，保证相同风量的状态下，改造后能耗低于原管理
                  算法；对中央空调水系统控制逻辑优化升级，提升环境和舒适地并降低客户投诉率，保证供热效果不降低的情况下，降低水温、
                  水压能耗，实现供水温度与压强设定的配合优化。
                </div>
              </div>
            </div>
          </div>
          
          <div class="table_right" v-if="newList==2">
            <div class="table_text">
              国内首个应用TR算法的智慧楼宇，实现中央空调全系统的控制逻辑优化升级，保证原有空调服务效果的情况下降低30%以上能耗。
            </div>
            <img class="img" src="../../assets/images/banner_3.png" alt="">
            <div style="margin-bottom:183px">
              <div class="table_title">
                <img src="../../assets/images/blackmore.png" alt=""><span class="table_obj">项目简介</span>
                <div class="obj_text">
                  中国石油大厦是中国石油天然气集团公司和中国石油天然气股份有限公司总部办公大楼，地上22层，地下4层，总建筑面积200838平方米，
                  大厦建设规模大，功能复杂，是面向世界的特大型企业的办公中枢。
                </div>
              </div>
              <div class="table_title" style="margin-top:34px">
                <img src="../../assets/images/blackmore.png" alt=""><span class="table_obj">实现功能</span>
                <div class="obj_text">
                  为楼宇安装智能设备与传感器，并将设备联接组网，实现对楼宇整体能耗、能效的智能化分析，同时利用物联网平台管理设备报
                  警与维护、故障检测诊断、系统异常诊断等工作，赋能楼宇系统运维。
                </div>
              </div>
              <div class="table_title" style="margin-top:34px">
                <img src="../../assets/images/blackmore.png" alt=""><span class="table_obj">方案亮点与价值</span>
                <div class="obj_text">
                  对中央空调全空气系统控制逻辑优化升级，国内第一个应用TR算法的智能楼宇，保证相同风量的状态下，改造后能耗低于原管理
                  算法；对中央空调水系统控制逻辑优化升级，提升环境和舒适地并降低客户投诉率，保证供热效果不降低的情况下，降低水温、
                  水压能耗，实现供水温度与压强设定的配合优化。
                </div>
              </div>
            </div>
          </div>

          <div class="table_right" v-if="newList==3">
            <div class="table_text">
              国内首个应用TR算法的智慧楼宇，实现中央空调全系统的控制逻辑优化升级，保证原有空调服务效果的情况下降低30%以上能耗。
            </div>
            <img class="img" src="../../assets/images/banner_5.png" alt="">
            <div style="margin-bottom:183px">
              <div class="table_title">
                <img src="../../assets/images/blackmore.png" alt=""><span class="table_obj">项目简介</span>
                <div class="obj_text">
                  中国石油大厦是中国石油天然气集团公司和中国石油天然气股份有限公司总部办公大楼，地上22层，地下4层，总建筑面积200838平方米，
                  大厦建设规模大，功能复杂，是面向世界的特大型企业的办公中枢。
                </div>
              </div>
              <div class="table_title" style="margin-top:34px">
                <img src="../../assets/images/blackmore.png" alt=""><span class="table_obj">实现功能</span>
                <div class="obj_text">
                  为楼宇安装智能设备与传感器，并将设备联接组网，实现对楼宇整体能耗、能效的智能化分析，同时利用物联网平台管理设备报
                  警与维护、故障检测诊断、系统异常诊断等工作，赋能楼宇系统运维。
                </div>
              </div>
              <div class="table_title" style="margin-top:34px">
                <img src="../../assets/images/blackmore.png" alt=""><span class="table_obj">方案亮点与价值</span>
                <div class="obj_text">
                  对中央空调全空气系统控制逻辑优化升级，国内第一个应用TR算法的智能楼宇，保证相同风量的状态下，改造后能耗低于原管理
                  算法；对中央空调水系统控制逻辑优化升级，提升环境和舒适地并降低客户投诉率，保证供热效果不降低的情况下，降低水温、
                  水压能耗，实现供水温度与压强设定的配合优化。
                </div>
              </div>
            </div>
          </div>

          <div class="table_right" v-if="newList==4">
            <div class="table_text">
              国内首个应用TR算法的智慧楼宇，实现中央空调全系统的控制逻辑优化升级，保证原有空调服务效果的情况下降低30%以上能耗。
            </div>
            <img class="img" src="../../assets/images/banner_2.png" alt="">
            <div style="margin-bottom:183px">
              <div class="table_title">
                <img src="../../assets/images/blackmore.png" alt=""><span class="table_obj">项目简介</span>
                <div class="obj_text">
                  中国石油大厦是中国石油天然气集团公司和中国石油天然气股份有限公司总部办公大楼，地上22层，地下4层，总建筑面积200838平方米，
                  大厦建设规模大，功能复杂，是面向世界的特大型企业的办公中枢。
                </div>
              </div>
              <div class="table_title" style="margin-top:34px">
                <img src="../../assets/images/blackmore.png" alt=""><span class="table_obj">实现功能</span>
                <div class="obj_text">
                  为楼宇安装智能设备与传感器，并将设备联接组网，实现对楼宇整体能耗、能效的智能化分析，同时利用物联网平台管理设备报
                  警与维护、故障检测诊断、系统异常诊断等工作，赋能楼宇系统运维。
                </div>
              </div>
              <div class="table_title" style="margin-top:34px">
                <img src="../../assets/images/blackmore.png" alt=""><span class="table_obj">方案亮点与价值</span>
                <div class="obj_text">
                  对中央空调全空气系统控制逻辑优化升级，国内第一个应用TR算法的智能楼宇，保证相同风量的状态下，改造后能耗低于原管理
                  算法；对中央空调水系统控制逻辑优化升级，提升环境和舒适地并降低客户投诉率，保证供热效果不降低的情况下，降低水温、
                  水压能耗，实现供水温度与压强设定的配合优化。
                </div>
              </div>
            </div>
          </div>

          <div class="table_right" v-if="newList==5">
            <div class="table_text">
              国内首个应用TR算法的智慧楼宇，实现中央空调全系统的控制逻辑优化升级，保证原有空调服务效果的情况下降低30%以上能耗。
            </div>
            <img class="img" src="../../assets/images/banner_4.png" alt="">
            <div style="margin-bottom:183px">
              <div class="table_title">
                <img src="../../assets/images/blackmore.png" alt=""><span class="table_obj">项目简介</span>
                <div class="obj_text">
                  中国石油大厦是中国石油天然气集团公司和中国石油天然气股份有限公司总部办公大楼，地上22层，地下4层，总建筑面积200838平方米，
                  大厦建设规模大，功能复杂，是面向世界的特大型企业的办公中枢。
                </div>
              </div>
              <div class="table_title" style="margin-top:34px">
                <img src="../../assets/images/blackmore.png" alt=""><span class="table_obj">实现功能</span>
                <div class="obj_text">
                  为楼宇安装智能设备与传感器，并将设备联接组网，实现对楼宇整体能耗、能效的智能化分析，同时利用物联网平台管理设备报
                  警与维护、故障检测诊断、系统异常诊断等工作，赋能楼宇系统运维。
                </div>
              </div>
              <div class="table_title" style="margin-top:34px">
                <img src="../../assets/images/blackmore.png" alt=""><span class="table_obj">方案亮点与价值</span>
                <div class="obj_text">
                  对中央空调全空气系统控制逻辑优化升级，国内第一个应用TR算法的智能楼宇，保证相同风量的状态下，改造后能耗低于原管理
                  算法；对中央空调水系统控制逻辑优化升级，提升环境和舒适地并降低客户投诉率，保证供热效果不降低的情况下，降低水温、
                  水压能耗，实现供水温度与压强设定的配合优化。
                </div>
              </div>
            </div>
          </div>

          <div class="table_right" v-if="newList==6">
            <div class="table_text">
              国内首个应用TR算法的智慧楼宇，实现中央空调全系统的控制逻辑优化升级，保证原有空调服务效果的情况下降低30%以上能耗。
            </div>
            <img class="img" src="../../assets/images/banner_6.png" alt="">
            <div style="margin-bottom:183px">
              <div class="table_title">
                <img src="../../assets/images/blackmore.png" alt=""><span class="table_obj">项目简介</span>
                <div class="obj_text">
                  中国石油大厦是中国石油天然气集团公司和中国石油天然气股份有限公司总部办公大楼，地上22层，地下4层，总建筑面积200838平方米，
                  大厦建设规模大，功能复杂，是面向世界的特大型企业的办公中枢。
                </div>
              </div>
              <div class="table_title" style="margin-top:34px">
                <img src="../../assets/images/blackmore.png" alt=""><span class="table_obj">实现功能</span>
                <div class="obj_text">
                  为楼宇安装智能设备与传感器，并将设备联接组网，实现对楼宇整体能耗、能效的智能化分析，同时利用物联网平台管理设备报
                  警与维护、故障检测诊断、系统异常诊断等工作，赋能楼宇系统运维。
                </div>
              </div>
              <div class="table_title" style="margin-top:34px">
                <img src="../../assets/images/blackmore.png" alt=""><span class="table_obj">方案亮点与价值</span>
                <div class="obj_text">
                  对中央空调全空气系统控制逻辑优化升级，国内第一个应用TR算法的智能楼宇，保证相同风量的状态下，改造后能耗低于原管理
                  算法；对中央空调水系统控制逻辑优化升级，提升环境和舒适地并降低客户投诉率，保证供热效果不降低的情况下，降低水温、
                  水压能耗，实现供水温度与压强设定的配合优化。
                </div>
              </div>
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
      newList:'1'
      
    };
  },
  created() {
  },
  methods: {
    
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
    background: url(../../assets/images/pco_banner.png) center center;
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
  
  .content {
    padding: 15px 0;
    color: #3f3f3f;
    .sceneList{
      width: 100%;
      height: 100%;
      margin-top: 72px;
      text-align: center;
      .programmeList{
        width: 100%;
        margin-top: 72px;
        .table_left{
          width: 256px;
          height:100%;
          display:inline-block;
          .left_nav{
            width: 230px;
            li{
              padding: 17px 40px;
              border: 1px solid #F7F8FA;
              background: #F7F8FA;
              margin-top: 15px;
              font-size: 16px;
              cursor: pointer;
            }
            li:hover{
              color: #579DFA;
            }
          }
        }
        .table_right{
          width: 940px;
          display:inline-block;
          // border: 1px solid red;
          vertical-align: top;
          text-align: left;
          .table_text{
            font-size: 16px;
            color: #333;
          }
          .img{
            margin-top: 19px;
          }
          .table_title{
            margin-top: 17px;
            width: 945px;
            .table_obj{
              font-size: 20px;
              color: #000000;
              margin-left: 13px;
              position: relative;
              top: 4px;
            }
            .obj_text{
              margin-top: 12px;
              color: #333;
              font-size: 16px;
            }
          }
        }
        .active{
          color: #fff;
          background:linear-gradient(90deg,rgba(116,226,253,1) 0%,rgba(87,157,250,1) 100%) !important;
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

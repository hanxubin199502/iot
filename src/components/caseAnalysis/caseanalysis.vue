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
              打造安全、高效、互动性强的一流师范办公楼，建立起人与楼宇的智慧互联，并通过对本地成长技术创新型企业发展趋势的分析及区域资源评估，助力能级提升。
            </div>
            <img class="img" src="../../assets/images/banner_3.png" alt="">
            <div style="margin-bottom:183px">
              <div class="table_title">
                <img src="../../assets/images/blackmore.png" alt=""><span class="table_obj">项目简介</span>
                <div class="obj_text">
                  张润大厦总建筑面积61800余平米，包含3栋楼宇建筑，其中两栋办公楼，一栋物业，是以打造张江科学城核心商务典范咫尺之遥，
                  打造张江北区地标智慧灵动、开阔通透的办公空间为目标的综合楼宇建筑。
                </div>
              </div>
              <div class="table_title" style="margin-top:34px">
                <img src="../../assets/images/blackmore.png" alt=""><span class="table_obj">实现功能</span>
                <div class="obj_text">
                  将多栋楼宇的多种管理应用呈现在同一系统，单平台云管理，并实现设备管理、工单管理、报警管理、环境监测与联动、智能空调
                  管理系统，完成可视化展示与BIM系统，平台的使用不受限于终端设备，智能终端、PC一体化应用。
                </div>
              </div>
              <div class="table_title" style="margin-top:34px">
                <img src="../../assets/images/blackmore.png" alt=""><span class="table_obj">方案亮点与价值</span>
                <div class="obj_text">
                  通过信息化、智能化、集成化、可视化，将张润大厦打造成为安全、高效、互动性强的一流示范办公楼；基于物联网和大数据平台，
                  建立起人与楼的智慧互联，提高用户体验。改造后的楼宇自动化管理，将大厦物业人工成本降低30%以上，同时将能耗整体预期降
                  低15%- 20%。对本地成长的技术创新型企业发展趋势进行分析及区域资源评估，并实施全生命周期的帮助，提升张江科学城的能级。
                </div>
              </div>
            </div>
          </div>

          <div class="table_right" v-if="newList==3">
            <div class="table_text">
              实现楼宇的平台化管理与智能化控制，达到管理更科学、数据更真实、工作更高效、运行更安全的管理目标。
            </div>
            <img class="img" src="../../assets/images/banner_5.png" alt="">
            <div style="margin-bottom:183px">
              <div class="table_title">
                <img src="../../assets/images/blackmore.png" alt=""><span class="table_obj">项目简介</span>
                <div class="obj_text">
                  济宁创意大厦的改造目标我为实现平台化管理与智能化控制，使楼宇管理更科学、数据更真实、工作更高效、运行
                  更安全，解决业主与租户之间的纠纷、矛盾；同时做到加强机电设备的现代化管理，提高机电设备的工作效率，创
                  造高效、节能、舒适、高性能价格比、温馨而安全的工作环境。
                </div>
              </div>
              <div class="table_title" style="margin-top:34px">
                <img src="../../assets/images/blackmore.png" alt=""><span class="table_obj">实现功能</span>
                <div class="obj_text">
                  为楼宇改造增加能源计量设备与通讯线路铺设并接入物联网平台，取代原有系统基础设备，进行系统优化，降低维护
                  成本，并实现设备的远程管理与运维。
                </div>
              </div>
              <div class="table_title" style="margin-top:34px">
                <img src="../../assets/images/blackmore.png" alt=""><span class="table_obj">方案亮点与价值</span>
                <div class="obj_text">
                  完成能源数据实时监测，综合管理，实时分析；自动化平台化管理，数据自动采集、存储、分析，图形展示，生成报表；
                  温度设定智能控制，开关控制优化管理，恒温、舒适，高效节能；设备运行信息实时在线远程监控，平台3D动态显示，故障提醒、检修提醒。
                </div>
              </div>
            </div>
          </div>

          <div class="table_right" v-if="newList==4">
            <div class="table_text">
              实现设备、数据、平台以及管理者、客户等各个环节的联结，打造数字化、智慧化的物联生态。
            </div>
            <img class="img" src="../../assets/images/banner_2.png" alt="">
            <div style="margin-bottom:183px">
              <div class="table_title">
                <img src="../../assets/images/blackmore.png" alt=""><span class="table_obj">项目简介</span>
                <div class="obj_text">
                  上海连成 ( 集团 ) 有限公司是一家著名的以研究制造泵、阀等流体输送设备、电气控制系统和环保设备的多元化经营的大型
                  集团企业。旗下产品品种现已达五千多种，涵盖水泵、电机、电气柜、阀门、成套设备、环保设备、热换器、机械配件等系列，
                  其产品性价合理，质量可靠，广泛应用于市政、水利、建筑、消防、电力、环保、石油、化工、矿业、医药等领域。
                </div>
              </div>
              <div class="table_title" style="margin-top:34px">
                <img src="../../assets/images/blackmore.png" alt=""><span class="table_obj">实现功能</span>
                <div class="obj_text">
                  设备地图：对设备进行定位并显示设备数据，可视化控制；<br>
                  设备监控：水流形态模拟可视化、设备状态显示<br>
                  告警通知：站内报警通知、报警实时弹框报警、阈值设置，未处理重复报警<br>
                  在线IM：专人运营、站内在线即时通讯，问题交流<br>
                  数据监测：实时数据展示、对采集到的数据进行分析，为能耗节约做数据支撑<br>
                  能耗管理闭环：数据采集并可视化，能耗基线、KPI考核、异常检测，机电设备故障检测诊断，全系统智能优化控制
                </div>
              </div>
              <div class="table_title" style="margin-top:34px">
                <img src="../../assets/images/blackmore.png" alt=""><span class="table_obj">方案亮点与价值</span>
                <div class="obj_text">
                  打通各设备、子系统全流程数据，通过数据的调用，实现设备数据的监测、远程控制；<br>
                  利用AI技术对设备的运行维护进行分析，防止设备因为缺少维护造成停机所带来的风险，增加隐性收入<br>
                  将资产数据化，对历史数据进行分析对比，逐渐形成舒适、可靠的设备运行方案，降低资产清单的保存难度
                </div>
              </div>
            </div>
          </div>

          <div class="table_right" v-if="newList==5">
            <div class="table_text">
              智慧楼宇整体实施，智能设备+综合管理平台+智慧办公应用，三位一体的智慧化建筑改造。
            </div>
            <img class="img" src="../../assets/images/banner_4.png" alt="">
            <div style="margin-bottom:183px">
              <div class="table_title">
                <img src="../../assets/images/blackmore.png" alt=""><span class="table_obj">项目简介</span>
                <div class="obj_text">
                  博彦科技大厦是博彦科技个份有限公司自建办公楼，位于北京中关村软件园，大厦整体兼职面积4万余平米，地面六层，
                  地下两层，俯瞰图如古钱币造型，可容纳6000余人办公，大厦建设规划有：办公室、会议室、多功能厅、展示厅、餐
                  厅、健身房、篮球场、调控市等区域，是具备整体科学的规划理念，先进的软硬件配套设施与服务的办公楼。
                </div>
              </div>
              <div class="table_title" style="margin-top:34px">
                <img src="../../assets/images/blackmore.png" alt=""><span class="table_obj">实现功能</span>
                <div class="obj_text">
                  多项目云端管理：全部建筑项目、区域建筑项目、分模块汇总统计<br>
                  BIM可视化：设备3D远程监控、运维模拟仿真、基于空间可视化的物业及设备设施管理、建筑全生命周期设备信息贯通<br>
                  设备实时数据：设备所有属性数据、设备执行状态、设备在离线、设备固有参数等<br>
                  设备云端监控：设备属性状态数据监测、设备远程控制<br>
                  能耗分析与诊断：基于空间位置的设备报警数据管理、基于设备类型的报警动态环比分析、基于设备健康的设备日常管理<br>
                  设备报警管理：基于空间位置的设备报警数据管理、基于设备类型的报警动态环比分析、基于设备健康的设备日常管理<br>
                  设备工单管理：报警类工单、点巡检类工单、工单流程信息化<br>
                  设备资产管理：设备维保档案、设备售后管理、设备生命周期管理
                </div>
              </div>
              <div class="table_title" style="margin-top:34px">
                <img src="../../assets/images/blackmore.png" alt=""><span class="table_obj">方案亮点与价值</span>
                <div class="obj_text">
                  完成能源数据实时监测，综合管理，实时分析；自动化平台化管理，数据自动采集、存储、分析，图形展示，生成报表；温度
                  设定智能控制，开关控制优化管理，恒温、舒适，高效节能；设备运行信息实时在线远程监控，平台3D动态显示，故障提醒、检修提醒。
                </div>
              </div>
            </div>
          </div>

          <div class="table_right" v-if="newList==6">
            <div class="table_text">
              园区管理系统智能化集成与能源站智慧化运维管理。
            </div>
            <img class="img" src="../../assets/images/banner_6.png" alt="">
            <div style="margin-bottom:183px">
              <div class="table_title">
                <img src="../../assets/images/blackmore.png" alt=""><span class="table_obj">项目简介</span>
                <div class="obj_text">
                  中关村生命科学园位于北京市昌平区，是以生命科学研究、生物技术和生物医药相关领域研发创新为主的高科技专业园区。
                  国家发改委于2006年10月批准中关村生命科学园为北京“国家生物产业基地”。<br>
                  园区以北京生命科学研究所、北京市药品检验所为基础支撑平台，以北大国际医院为临床试验平台，依托生物芯片北京国
                  家工 程研究中心、蛋白质药物国家工程研究中心等7个国家级工程化产业项目和美国健赞、瑞士先正达、丹麦诺和诺德
                  等8家国际著名生物技术企业的研发中心，将建成集生命科学研究、企业孵化、中试与生产、成果评价鉴定、项目展示
                  发布、风险投资、国际交流、人员培训于一体的国际一流的生物技术园区。<br>
                  生命科学园规划占地总面积为249公顷，其中，一期工程占地130公顷，设计为研发、中试、孵化基地，建筑面积54万
                  平方米；二期119公顷，规划定位于医疗服务及产业化用地。
                </div>
              </div>
              <div class="table_title" style="margin-top:34px">
                <img src="../../assets/images/blackmore.png" alt=""><span class="table_obj">实现功能</span>
                <div class="obj_text">
                  能源站能源管理：服务整个园区的区域能源站的智慧运维管理平台，功能包括能源计量、能耗分析、供冷供热负荷预测、
                  设备管理、故障检测诊断、用户管理、指挥中心驾驶舱等。<br>
                  能源站自动控制：本系统实现区域供冷系统的自动监控，在系统安全可靠运行的前提下，以满足末端用户供冷需求为根本。
                  系统从冷站制冷、二级泵管网稳定输冷和末端用户稳定供冷三个环节进行控制，在满足用户舒适性要求下，对系统进行优化，
                  使系统运行于最佳工况实现经济运行<br>
                  园区系统集成：对整个园区的智能化集成、统一管理，包括楼宇自控系统、安全防范系统、智能照明系统、门禁系统、防盗入侵系统。


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
      newList:'1',
      
    };
  },
 
  created() {
  },
  methods: {
   },
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
    // padding: 15px 0;
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

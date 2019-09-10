<template>
    <div class="economic_park"> 
        <headerBar/> 
        <div class="header_background">
            <div class="solution_title center clearfix">
                <div class="solution_name">
                    {{'智慧园区·'}}
                </div>
                <div class="solution_brief">
                    {{'整体解决方案提供商'}} </div>
            </div>
        </div> 
        <div class="content center clearfix">
                <div class="solution_content">
                    <div class="sologan">
                        {{'顺应智慧城市全球化发展趋势，“智慧园区”专注于帮助产业园区，企业拥抱互联网；利用物联网, 云计算，大数据，人工智能等先进技术，'}}
                    </div>
                    <div class="title1">
                        {{'智慧园区痛点'}}
                    </div>

                    <div class="title2">
                        <div class="title2"></div>
                        
                        <div class="title2_item1 title2_item">
                        {{'园区综合化管理缺乏智慧应用，成本高，消耗大，效率低'}}
                        </div>         
                        <div class="title2_item2 title2_item">
                        {{'信息安全体系弱，园区安防与运营难度大'}}
                        </div>         
                        <div class="title2_item3 title2_item">
                        {{'信息化设施与服务不完备，信息资源整合严重滞后'}}
                        </div>         
                        <div class="title2_item4 title2_item">
                        {{'园区综合化管理缺乏智慧应用，成本高，消耗大，效率低'}}
                        </div>         
                    </div>

                    <div class="title3 clearfix">
                        <div class="advantage">产品优势</div>
                        <div class="title3_item" v-for="(item,index) in p3" :key="index">
                            <img :src="item.img">
                            <div class="title3_item_head">{{item.title}}</div>
                            <div class="title3_item_content">{{item.content}}</div>
                        </div>
                    </div>

                    <div class="title4_1">{{'智慧园区管理系统'}}</div>
                    <div class="title4 clearfix">
                        <div class="title4_word_1 title4_word">车辆出入口采用立体高清纯车牌识别技术。可人脸识别 身份感应出入系统。</div>   
                        <div class="title4_img_1 title4_img">通行管理</div>   
                        <div class="title4_word_2 title4_word">区别于传统的设备运维状况查看方式。 通过移动办公， 手机端监控，信息发布，电子巡更，实时诊断预警等方式 打造运维管理的新方式</div>   
                        <div class="title4_img_2 title4_img">运维管理</div>   
                        <div class="title4_word_3 title4_word">统一平台管理设置用灯时间和灯光亮度。为园区道路、 停车场等提供智能照明，节省能源70%以上</div>   
                        <div class="title4_img_3 title4_img">节能管理</div>   
                        <div class="title4_word_4 title4_word">现在及未来均能满足园区内企业的需求，如足不出户 办理事务等</div>   
                        <div class="title4_img_4 title4_img">服务提升</div>   
                        <div class="title4_word_5 title4_word">以园区智能化平台为核心，接入园区视频监控动环监控 等子系统，“统一管理，安防联动”的整体解决方案。</div>   
                        <div class="title4_img_5 title4_img">安防管理</div>   
                        <div class="title4_word_6 title4_word">时间控制，根据白天、夜晚、深夜设置场景，自动控制， 弱电井设控制面板。根据夜晚无人或人少时设置灯光亮点。</div>   
                        <div class="title4_img_6 title4_img">智能照明</div>   
                        <div class="title4_word_7 title4_word">形成大数据增值服务，对园区内资产一目了然。 数据资产 整合可为后期提供增值服务</div>   
                        <div class="title4_img_7 title4_img">数据资产</div>   
                        <div class="title4_word_8 title4_word">综合运营数据分析制定运营决策，园区智慧化商圈运营， 形成完整的智慧运营体系。</div>   
                        <div class="title4_img_8 title4_img">运营管理</div>
                          
              
                        
                    </div>

                    <div class="title5 clearfix">
                        <div class="title5_name">智慧园区一站式解决方案</div>
                        <div class="title5_item">
                            <img src="../../assets/images/e-park/logo-5.png">
                            <div class="title5_item_name">方案</div>
                            <div class="plus">+</div>
                        </div>
                        <div class="title5_item">
                            <img src="../../assets/images/e-park/logo-6.png">
                            <div class="title5_item_name">实施</div>
                            <div class="plus">+</div>
                        </div>
                        <div class="title5_item">
                            <img src="../../assets/images/e-park/logo-7.png">
                            <div class="title5_item_name">平台</div>
                            <div class="plus">+</div>
                        </div>
                        <div class="title5_item" style="width: 10%;">
                            <img src="../../assets/images/e-park/logo-8.png">
                            <div class="title5_item_name">运营</div>
                        </div>
                        <div class="title5_content">顺应智慧城市全球化发展趋势，“智慧园区”专注于帮助产业园区、企业拥抱物联网； 从前期顶层设计与咨询规划、落地实施方案、产品应用开发、平台搭建到 运营服务，提供全方位全流程的智慧产城社区综合解决方案，助力产业园区和企业全面转型和升级</div>
                    </div>
                </div>
        </div>
        <footerBar/>
    </div>
</template>


<script>
import footerBar from '../common/footer'
import headerBar from '../common/header'
export default {
    components:{
        footerBar,
        headerBar
    },
    data(){
        return{
            p3:[
                {
                    title:'全面物联',
                    content:'智能传感设备将园区公共设施联成网，对园区核心系统实时感测',
                    img:require('../../assets/images/e-park/logo-1.png'),
                },
                {
                    title:'节能降损',
                    content:'通过大数据进行能源诊断分析，提高能源利用效率',
                    img:require('../../assets/images/e-park/logo-2.png'),
                },
                {
                    title:'运维智慧化',
                    content:'基于智慧的蛇蛇，园区进行高效的操作，降低技术应用门槛',
                    img:require('../../assets/images/e-park/logo-3.png'),
                },
                {
                    title:'高效管理',
                    content:'先进的信息化管理后台，提高物业管理效率',
                    img:require('../../assets/images/e-park/logo-4.png'),
                }
            ]
        }
    },
    created(){

    },
     watch: {
    $route() {
      this.id = this.$route.params.id;
    },
    id() {
      this.getsolutionDetail();
    }
  },
    mounted(){     
        // window.addEventListener('scroll',this.handleScroll)
    },
    beforeDestroy() {
            // window.removeEventListener('scroll', this.handleScroll);
        },
    
    methods:{
        //获取解决详情 
        getsolutionDetail () {
            let params = {
        solutionId: this.$route.params.id
      };
      this.$http
        .get(
          this.$api.getApiAddress(
            "operationplatformmgn/o/saas/platform-solution/query_solution",
            "API_ROOT"
          ),
          params
        )
        .then(res => {
          this.solutionList = res.data;
          // console.log(this.solutionList)
        });
        }
    },

}
</script>
<style lang="less" scoped>
.economic_park {

        .content {
                    padding:  15px 0;
                    color: #3F3F3F;
                    .solution_content {
                        margin-top: 35px;
                        font-size: 20px;
                        // img {
                        //     width: 1200px;
                        // }
                    }
                }        
}
</style>
<style lang="less">
.economic_park {
    .header_background {
        // position: relative;
        width:100%;
        height:560px;
        background: url(../../assets/images/e-park/banner.png) center center;
        .solution_title {
        position: relative;
        color: #FFFFFF;
            .solution_name {
                position: absolute;
                top: 210px;
                left: 100px;
                font-size: 54px;
            }
            .solution_brief {
                position: absolute;
                width: 600px;
                top: 237px;
                left: 339px;
                font-size: 41px;
                line-height:34px;
            }               
        }
    }
  .solution_content {
      .title1 {
          color:#000000;
          font-size:38px;
          text-align:center;
          margin:0 auto;
          margin-top: 46px;
          margin-bottom: 32px;
      }
      .sologan {
          width: 100%;
          text-align: center;
          font-size:22px;
          color:#676565;
          padding:0 124px;
          margin-bottom: 70px;
          line-height:40px;
      }
      .logo_bar {
          padding:0 145px;
          .logo_item {
              float: left;
              margin-left: 185px;
              &:first-child {
                  margin-left: 0;
              }
             .logo_item_name {
                 color:#676565;
                 font-size:22px;
                 text-align: center;
             }
             img {
                 
             }
          }
      }
      .title2 {
          background: url(../../assets/images/e-park/bg1.png) center center no-repeat;
          height: 600px;
          text-align: center;
          font-size:30px;
          color:#000000;
          font-size:16px;
          position: relative;
        .title2_item {
            width: 190px;
            height: 90px;
            position: absolute;
            line-height: 30px;
        }
        .title2_item1 {
            left: 219px;
            top: 129px;
        }
        .title2_item2 {
            right: 250px;
            top: 110px;
        }
        .title2_item3 {
            left: 171px;
            bottom: 96px;
            width: 175px;
        }
        .title2_item4 {
            right: 175px;
            bottom: 96px;
        }
      }
      .title3 {
        //   margin-top: 63px;
          height: 492px;
          background-color: #F6F6F6;
          .advantage {
              text-align: center;
              font-size:38px;
              height: 14px;
              line-height: 140px;

          }
        .title3_item {
         
            margin-top: 140px;
            margin-left: 10px;
            width: 290px;
            height: 293px;
            border-right:1px solid #AAAAAA;
            float: left;
            padding: 39px;
            text-align: center;
            color:#294F9C;
            .title3_item_head {
                text-align: center;
                font-size:20px;
                margin-top: 46px;
            }
            .title3_item_content {
                text-align: center;
                font-size:16px;
                margin-top: 22px;

            }
            &:last-child {
                border-right:none;
            }
        }
      }
      .title4_1 {
          text-align: center;
          font-size:38px;
      }
      .title4 {
        margin-top: 120px;
        height: 560px;
        position: relative;
        width: 100%;
        background: url(../../assets/images/e-park/tree.png) no-repeat center;
        .title4_word_1 {
            top:80px;
            left:198px;
            }
        .title4_word_2 {
            top:213px;
            left:195px;
            }
        .title4_word_3 {
            top:342px;
            left:191px;
            }
        .title4_word_4 {
            top:500px;
            left:184px;
            }
        .title4_word_5 {
            top:21px;
            right:191px;
            }
        .title4_word_6 {
            top:157px;
            right:190px;
            }
        .title4_word_7 {
            top:288px;
            right:183px;
            }
        .title4_word_8 {
            top:445px;
            right:165px;
            }
        .title4_word {
            color:#294F9C;
            position: absolute;
            font-size:14px;
            width: 340px;
        }
   
        .title4_img {
            position: absolute;
            width: 146px;
            height: 46px;
            text-indent:55px;
            line-height:46px;
            color:#294F9C;
            font-size:22px;
        }
        .title4_img_1 {
            top:15px;
            left:236px;
            background:url(../../assets/images/e-park/sublogo1.png) left center no-repeat;
            background-size:35%  
        }
        .title4_img_2 {
            top:147px;
            left:233px;
            background:url(../../assets/images/e-park/sublogo2.png) left center no-repeat;
            background-size:35%  
        }
        .title4_img_3 {
            top:282px;
            left:222px;
            background:url(../../assets/images/e-park/sublogo3.png) left center no-repeat;
            background-size:35%  
        }
        .title4_img_4 {
            top:440px;
            left:205px;
            background:url(../../assets/images/e-park/sublogo4.png) left center no-repeat;
            background-size:35%  
        }
        .title4_img_5 {
            top:-33px;
            right:219px;
            background:url(../../assets/images/e-park/sublogo5.png) right center no-repeat;
            background-size:35%;
            text-indent:10px;  
        }
        .title4_img_6 {
            top:101px;
            right:207px;
            background:url(../../assets/images/e-park/sublogo6.png) right center no-repeat;
            background-size:35%;
            text-indent:10px;  
        }
        .title4_img_7 {
            top:229px;
            right:199px;
            background:url(../../assets/images/e-park/sublogo7.png) right center no-repeat;
            background-size:35%;
            text-indent:10px;  
        }
        .title4_img_8 {
            top:387px;
            right:202px;
            background:url(../../assets/images/e-park/sublogo8.png) right center no-repeat;
            background-size:31%;
            text-indent:10px;  
        }
        // .title4_img_1 {
        // top:445px;
        //     right:165px;
        //     background:url(../../assets/images/e-park/sublogo8.png) left center no-repeat;
        // }
        .title4_sologan1 {
            text-align: center;
            width: 100%;
            position: absolute;
            top: 50px;
            font-size:39px;
        }
        .title4_sologan2 {
            position: absolute;
            top: 110px;
            text-align: center;
            width: 100%;
            font-size:23px;
        }
        .percent_row {
            width: 100%;
            height: 268px;
            padding:0 170px;
            position: relative;
            bottom:-30px;
            .percent_row_item {
                position: relative;
                width: 180px;
                height: 200px;
                float: left;
                color:#FFFFFF;
                margin-left: 18.5%;
                top: 190px;
                &:first-child {
                    margin-left: 0;
                }
                .percent_row_item1 {
                    font-size:115px;
                    position: relative;
                    left: 0;
                    top: 0;
                }
                .percent_row_item2 {
                    text-align: center;
                    font-size:28px;
                    position: absolute;
                    width: 42px;
                    height: 42px;
                    border-radius:50%;
                    background-color: #FF0000;
                    right: 0px;
                    top: 0;

                }
                .percent_row_item3 {
                    font-size:58px;
                    position: absolute;
                    top: 50px;
                    right: 0px;

                }
                .percent_row_item4 {
                    font-size:21px;
                    position: absolute;
                    bottom: 0;

                }
            }
        }
      }
      .title5 {
          padding:50px 43px 110px 43px;
          .title5_name {
              font-size:38px;
              text-align: center;
              margin-bottom: 83px;
          }
          .title5_item {
              position: relative;
              float: left;
              margin-left: 55px;
              width:22%;
              &:last-child {
                  width: 10%;
              }
              img {
                //   display: block;
                //   margin:0 auto;
              }
              .plus {
                  position: absolute;
                  right: 0;
                  top:20%;
                  font-size:100px;
              }
              .title5_item_name {
                //   text-align: center;
                text-indent:25px;
                  font-size:30px;
                  margin-top: 57px;
              }
          }
          .title5_content {
              line-height:40px;
              text-align: center;
              margin-left:50px;
              width:1000px;
              float:left;
              color:#294F9C;
              font-size:24px;
              margin-top: 80px;
          }
      }
  }
}
</style>

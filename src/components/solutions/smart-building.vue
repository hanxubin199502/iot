<template>
    <div class="smart_building"> 
        <headerBar/> 
        <div class="header_background">
            <div class="solution_title center clearfix">
                <div class="solution_name">
                    {{'智慧楼宇解决方案'}}
                </div>
                <div class="solution_brief">
                    {{'楼宇管理决策者需要创新的解决方案，以降低能源成本，提高效率，满足企业 可持续发展的目标提高楼宇价值，同时为户保持一个富有成效、舒适宜居的环境'}} </div>
            </div>
        </div> 
        <div class="content center clearfix">
                <div class="solution_content">
                    <div class="title1">
                        {{'智慧楼宇解决方案'}}
                    </div>
                    <div class="sologan">
                        {{'博彦物联平台通过“物联网+互联网”智慧双平台最快的方式,最低的成本,最专业的顾问完成转型升级。以降低能源成本、提高效率、满足企业可持续发展的目标提供楼宇价值，同时为用户保持一个富有成效、舒适宜居的坏境。在有限空间利用无限的资源引入和整合, 最终实现降本增效。'}}
                    </div>
                    
                    <div class="logo_bar clearfix">
                        <div class="logo_item"> 
                        <img src="../../assets/images/smartBuliding/solution3.png" alt>
                        <div class="logo_item_name">
                            {{'节能高效'}}
                        </div>
                        </div>
                        <div class="logo_item"> 
                        <img src="../../assets/images/smartBuliding/solution4.png" alt>
                        <div class="logo_item_name">
                            {{'安全智能'}}
                        </div>
                        </div>
                        <div class="logo_item"> 
                        <img src="../../assets/images/smartBuliding/solution5.png" alt>
                        <div class="logo_item_name">
                            {{'持续稳定'}}
                        </div>
                        </div>
                        <div class="logo_item"> 
                        <img src="../../assets/images/smartBuliding/solution2.png" alt>
                        <div class="logo_item_name">
                            {{'超强兼容'}}
                        </div>
                        </div>
                        
                    </div>
                    <div class="title2">
                        {{'它日积月累，丰富自身组织架构'}}
                    </div>
                    <img src="../../assets/images/smartBuliding/solution0.png" style="margin-left:40px;">
                    
                    <div class="title3">
                        <img src="../../assets/images/smartBuliding/solution6.png" style="height:550px;margin-left:40px;float:left;">
                        <div class="bgc_color clearfix">打造智慧大脑</div>
                        <div class="title3_content">建筑能耗管理 <br/>建筑体的能耗、环境指标提供用能节能预案</div>
                        <div class="title3_content">设备可视化监控<br/>实时数据一目了然，精准定位故障设备，支持远程控制</div>
                        <div class="title3_content">工单自动化管理<br/>由人找事变为事找人模式，提高工作效率</div>
                        <div class="title3_content">提供决策支持<br/>节能、运营数据分析，让运营和管理有据可依</div>
                        <div class="title3_content">设备全生命周期管理<br/>设置健康指数，提前检测预警</div>
                    </div>

                    <div class="title4 clearfix">
                        <div class="title4_sologan title4_sologan1">
                            便捷改装，快速实现楼宇办公智能化
                        </div>
                        <div class="title4_sologan title4_sologan2">
                            楼宇办公软硬件整体解决方案，迅速实现方案落地；标准化按照流程，设备安装简便快捷
                        </div>
                        <div class="percent_row">
                            <div class="percent_row_item">
                                <div class="percent_row_item1">30</div>
                                <div class="percent_row_item2">省</div>
                                <div class="percent_row_item3">%</div>
                                <div class="percent_row_item4">人力成本节省50%</div>
                            </div>
                            <div class="percent_row_item">
                                <div class="percent_row_item1">50</div>
                                <div class="percent_row_item2">省</div>
                                <div class="percent_row_item3">%</div>
                                <div class="percent_row_item4">能耗相比之前节省30%</div>
                            </div>
                            <div class="percent_row_item">
                                <div class="percent_row_item1">70</div>
                                <div class="percent_row_item2">省</div>
                                <div class="percent_row_item3">%</div>
                                <div class="percent_row_item4">运维节钱节省70%</div>
                            </div>
                        </div>
                        
                    </div>

                    <div class="title5 clearfix">
                        <div class="title5_name">成功实施案例</div>
                        <div class="title5_item">
                            <img src="../../assets/images/smartBuliding/solution9.png">
                            <div class="title5_item_name">北京博彦大厦</div>
                        </div>
                        <div class="title5_item">
                            <img src="../../assets/images/smartBuliding/solution8.png">
                            <div class="title5_item_name">上海博彦大厦</div>
                        </div>
                        <div class="title5_item">
                            <img src="../../assets/images/smartBuliding/solution7.png">
                            <div class="title5_item_name">深圳博彦大厦</div>
                        </div>
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
            userInfo:{},
            solutionList: [],
            id: ''
        }
    },
    created(){
        this.getsolutionDetail   ()
        let url = location.href;
        if(url.indexOf('bysiot')>0){
            document.domain = 'bysiot.com'
            this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
             console.log(this.userInfo)
        }
        
        console.log(this.userInfo)
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
.smart_building {

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
.smart_building {
    .header_background {
        // position: relative;
        width:100%;
        height:560px;
        background: url(../../assets/images/banner-bgi-solution.png) center center;
        .solution_title {
        position: relative;
        color: #FFFFFF;
            .solution_name {
                position: absolute;
                top: 170px;
                left: 0;
                font-size: 44px;
            }
            .solution_brief {
                position: absolute;
                width: 600px;
                top: 255px;
                font-size: 18px;
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
              margin-left: 186px;
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
          text-align: center;
          font-size:30px;
          color:#000000;
          margin-top: 100px;
          margin-bottom: 60px;
      }
      .title3 {
          margin-top: 115px;
          border:1px solid white;
        .bgc_color {
            float: left;
            text-align: center;
            margin-bottom: 50px;
            color:#FFFFFF;
            font-size:25px;
            font-weight: bold;
            width: 550px;
            height: 56px;
            line-height:56px;
            background: url(../../assets/images/smartBuliding/solution1.png) no-repeat center;
        }
        .title3_content {
            // text-indent:20px;
            margin-left: 57.5%;
            padding-left: 20px;
            margin-top: 55px;
            font-size :18px;
            margin-bottom: 43px;
        
            &:first-child {
                margin-top: 110px;
            }
        }
      }
      .title4 {
        margin-top: 120px;
        height: 504px;
        position: relative;
        width: 100%;
        background: url(../../assets/images/smartBuliding/solution10.png) no-repeat center;
        .title4_sologan {
            text-align: center;
            color:#FFFFFF;
        }
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
              float: left;
              margin-left: 29px;
              &:first-child {
                  margin-left: 0;
              }
              .title5_item_name {
                  text-align: center;
                  font-size:30px;
                  margin-top: 57px;
              }
          }
      }
  }
}
</style>

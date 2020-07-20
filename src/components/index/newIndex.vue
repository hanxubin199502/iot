<template>
  <div class="home_page">
    <headerBar />
    <div class="swiper banner">
      <el-carousel>
        <el-carousel-item
          v-for="(item, index) in imgList"
          :key="index"
          :style="'background:url(' + item.imagesPath + ')center center'"
        >
          <h3></h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="mainBox clearfix">
        <div class="daohang">
            <div class="min">
                <span  @click.prevent="custormAnchor('box1')">业务架构</span>
                <span @click.prevent="custormAnchor('box2')">应用领域</span>
                <span @click.prevent="custormAnchor('box3')">技术能力</span>
                <span @click.prevent="custormAnchor('box4')">案例与客户</span>
            </div>
        </div>
        <div class="box1">
            <div id="box1"></div>
            <div class="min">
                <div class="tit"></div>
                <div>
                    <div class="left">
                        <el-carousel height="490px" class="yewu">
                            <el-carousel-item>
                                <img src="../../assets/images/newindex/img1.png">
                                <h4 class="small">博彦物联</h4>
                                <p>定位为智慧空间服务运营商，以物联网、大数据、人工智能、云计算等创新技术面向建筑空间提供产品+解决方案的空间智慧化服务。</p>
                                
                            </el-carousel-item>
                             <el-carousel-item>
                                <img src="../../assets/images/newindex/img2.png">
                                <h4 class="small">BY OS</h4>
                           
                                <p>博彦物联旗下的子产品，以智慧空间操作系统的产品形态服务于所有建筑空间场景。</p>
                            </el-carousel-item>
                             <el-carousel-item>
                                <img src="../../assets/images/newindex/img3.png">
                                <h4 class="small">物联能力</h4>
                                <p>博彦物联覆盖的设备类型全面，包含建筑空间的所有数字通信的弱电和智能化子系统。</p>
                            </el-carousel-item>
                             <el-carousel-item>
                                <img src="../../assets/images/newindex/img4.png">
                                <h4 class="small">生态合作</h4>
                                <p>聚焦建筑楼宇场景，博彦物联以开放平台的产品架构，深度展开生态领域拓展。</p>
                            </el-carousel-item>
                        </el-carousel>

                     </div>
                     <div class="right">
                        <div class="div1">
                            <img src="../../assets/images/newindex/icon1.png">
                            <h4>场景应用中心</h4>
                            <p>垂直于细分领域的SaaS应用，支撑物联网应用的多场景业务需求。</p>

                        </div>
                        <div class="div2">
                             <img src="../../assets/images/newindex/icon2.png">
                             <h4>数据智能平台</h4>
                            <p>提供数据云引擎服务，为企业数据化运营提供数据支持。</p>
                            
                        </div>
                        <div class="div3">
                             <img src="../../assets/images/newindex/icon3.png">
                             <h4>开发平台</h4>
                            <p>基于博彦物联网云平台各类服务，提供API/SDK等多种方式。</p>
                        </div>
                        <div class="div4">
                             <img src="../../assets/images/newindex/icon4.png">
                             <h4>设备接入平台</h4>
                            <p>提供亿量级多协议、多平台设备的长连接接入及安全认证能力。</p>
                        </div>

                     </div>
                </div>
            </div>
        </div>
        <div class="box2">
            <div id="box2"></div>
            <div class="min">
                <div class="tit"></div>
                <div>
                    <div class="left">                  
                        <div class="text">
                            <span>智慧城市</span>
                            <p>共享亿万智能城市项目商机，抢占产业红利，加速实现合作伙伴商业化</p>
                        </div>
                        <img src="../../assets/images/newindex/tu1.png">
                    </div>
                    <div class="right">
                        <div class="div1">                          
                            <div class="text">
                                <span>智慧城市</span>
                                <p>共享亿万智能城市项目商机，抢占产业红利，加速实现合作伙伴商业化</p>
                            </div>
                             <img src="../../assets/images/newindex/tu2.png">
                            

                        </div>
                        <div class="div2">
                            
                            <div class="text">
                                <span>智慧城市</span>
                                <p>共享亿万智能城市项目商机，抢占产业红利，加速实现合作伙伴商业化</p>
                            </div>
                            <img src="../../assets/images/newindex/tu3.png">

                        </div>
                        <div class="div3">
                            
                            <div class="text">
                                <span>智慧城市</span>
                                <p>共享亿万智能城市项目商机，抢占产业红利，加速实现合作伙伴商业化</p>
                            </div>
                            <img src="../../assets/images/newindex/tu4.png">

                        </div>
                        <div class="div4">
                           
                            <div class="text">
                                <span>智慧城市</span>
                                <p>共享亿万智能城市项目商机，抢占产业红利，加速实现合作伙伴商业化</p>
                            </div>
                             <img src="../../assets/images/newindex/tu5.png">

                        </div>
                        <div class="div5">
                            
                            <div class="text">
                                <span>智慧城市</span>
                                <p>共享亿万智能城市项目商机，抢占产业红利，加速实现合作伙伴商业化</p>
                            </div>
                            <img src="../../assets/images/newindex/tu6.png">

                        </div>
                        <div class="div6">
                            
                            <div class="text">
                                <span>智慧城市</span>
                                <p>共享亿万智能城市项目商机，抢占产业红利，加速实现合作伙伴商业化</p>
                            </div>
                            <img src="../../assets/images/newindex/tu7.png">

                        </div>

                    </div>
                </div>
            </div>
        </div> 
        <div class="box3">
            <div id="box3"></div>
            <div class="min">
                <div class="tit"></div>
                <div class="div1">
                    <img src="../../assets/images/newindex/1.png">
                    <h4>云服务端
                        <img src="../../assets/images/newindex/dian.png"> 
                    </h4>
                    <p>PaaS层智慧建筑应用平台</p>

                </div>
                <div class="div2">
                    <img src="../../assets/images/newindex/2.png">
                    <h4>硬件开发
                         <img src="../../assets/images/newindex/dian.png"> 
                    </h4>
                    <p>嵌入式编程，高度匹配应用场景的智能化硬件产品</p>

                </div>
                <div class="div3">
                    <img src="../../assets/images/newindex/3.png">
                    <h4>定制开发
                         <img src="../../assets/images/newindex/dian.png"> 
                    </h4>
                    <p>依据项目实际需求，专项专用的定向开发服务</p>

                </div>
            </div>

        </div>
        <div class="box4">
            <div id="box4"></div>
            <div class="min">
                <div class="tit"></div>
                <div class="left">
                    <div class="div1">
                        <p>中国石油大厦</p>
                    </div>
                    <div class="div2">
                        <p>上海-连城集团</p>
                    </div>
                    <div class="div3">
                        <p>北京-博彦科技大厦</p>
                    </div>

                </div>
                <div class="right">
                    <div class="div1">
                        <p>张江-张润大厦</p>
                    </div>
                    <div class="div2">
                        <p>山东-济宁创意大厦</p>

                    </div>
                    <div class="div3">
                        <p>北京-生命科学园</p>

                    </div>

                </div>
            </div>
        </div>
    </div>
    <footerBar />
   
  </div>
</template>
<script>
import Velocity from "velocity-animate";
import footerBar from "../common/footer";
import headerBar from "../common/header1";
export default {
  components: {
    footerBar,
    headerBar
  },
  data() {
    return {
      imgList: [],
      hide: false,
      userInfo: {},
      info1Content: [
        "博彦物联网云平台致力于打造以人为本，以使用者为核心的万物 互联的美好生活应用场景。",
        "目前发布的主要由PaaS层智慧建筑应用平台组成。",
        "博彦物联网设备接入平台为生态合作伙伴提供基于大数据、云计算、人工智能、边缘计，区块链等物联网应用使能平台及应用内容服务，开放的平台应用能力将为各领域的生态合作伙伴提供更丰富的物联网创新功能应用，更低成本且高效融入物联网应用体系。",
        "博彦智慧建筑应用平台是运用物联网、大数据、云计算等技术，将建筑应用场景的空调、供暖、新风、照明、排污、建筑信息化模型BIM等各位要素通过物联网信息传感、通讯等技术进行有机互联，并对采集数据进行实施监测，统计，分析，管理，控制，分配等，优化建筑体能耗使用效率，提高管理响应速度，效率和科预案能力，增强报警等问题的指挥、调度、决策和处置能力。"
      ],
      info2Content: [
        {
          name: "连接设备",
          content:
            "开放生态，物联网终端将更加智能化， 促使终端设备间的协作逐渐成为常态。",
          img: "../../../static/images/homepage/p2-logo1.png"
        },
        {
          name: "连接人",
          content:
            "从连接设备到连接人，物联网将协助 各行业搭建“超级大脑”，智慧生活。",
          img: "../../../static/images/homepage/p2-logo2.png"
        },
        {
          name: "AI驱动",
          content: "人工智能技术融入物联网应用变得更 容易，场景更具赋能空间。",
          img: "../../../static/images/homepage/p2-logo3.png"
        }
      ],
      info3Content: [
        {
          name: "设备接入平台",
          content: "提供亿量级多协议、多平台设备的长连接 接入及安全认证能力。",
          img: "../../../static/images/homepage/p3-logo1.png",
          imgHover: "../../../static/images/homepage/p3-logo1-hover.png",
          hover: false
        },
        {
          name: "场景应用平台",
          content:
            "垂直于细分领域的SaaS应用，支撑物联网 应用的多场景业务需求。",
          img: "../../../static/images/homepage/p3-logo2.png",
          imgHover: "../../../static/images/homepage/p3-logo2-hover.png",
          hover: false
        },
        {
          name: "开发平台",
          content: "基于博彦物联网云平台各类服务，提供API /SDK等多种方式。",
          img: "../../../static/images/homepage/p3-logo3.png",
          imgHover: "../../../static/images/homepage/p3-logo3-hover.png",
          hover: false
        },
        {
          name: "数据智能平台",
          content: "提供数据云引擎服务，为企业数据化运营 提供数据支持。",
          img: "../../../static/images/homepage/p3-logo4.png",
          imgHover: "../../../static/images/homepage/p3-logo4-hover.png",
          hover: false
        }
      ],
      info4Content: [
        {
          name: "简单易用",
          content: "简单易用的控制台及APP,迅速上手操作无需学习成本。",
          img: "../../../static/images/homepage/p4-logo1.png"
        },
        {
          name: "稳定灵活",
          content: "最稳定设备接入稳定能力,极速数据消息日处理能力。",
          img: "../../../static/images/homepage/p4-logo2.png"
        },
        {
          name: "中立开放",
          content: "公有/私有/混合云全球部署,可二次开发。",
          img: "../../../static/images/homepage/p4-logo3.png"
        },
        {
          name: "方案多样",
          content: "成熟的单品、行业解决方案,支持企业ToB、ToC全球业务。",
          img: "../../../static/images/homepage/p4-logo4.png"
        },
        {
          name: "设备接入",
          content: "多协议设备接入 ,多平台设备接入。",
          img: "../../../static/images/homepage/p4-logo5.png"
        },
        {
          name: "安全稳定",
          content: "设备认证保障设备安全与唯一传输加密保障数据安全。",
          img: "../../../static/images/homepage/p4-logo6.png"
        },
        {
          name: "高效管理",
          content: "信息化平台便于信息共享与交接,提升管理效率。",
          img: "../../../static/images/homepage/p4-logo7.png"
        },
        {
          name: "充分整合",
          content: "物联与互联网系统完全连接融合,提供智慧的基础设施。",
          img: "../../../static/images/homepage/p4-logo8.png"
        }
      ],
      info5Content: [
        {
          name: "智慧楼宇",
          content:
            "以降低能源成本、提高效率、满足企业可持续发展的目标提供楼宇价值",
          id: "1",
          refer: "ref1"
        },
        {
          name: "智慧园区",
          content: "以信用体系优化资源共享，以开放平台共建园区服务体系",
          id: "2",
          refer: "ref2"
        },
        {
          name: "智慧场馆",
          content:
            "有整体营销、综合运营、整合产品与商务服务，接入等一整套智慧场馆综合服务体系",
          id: "3",
          refer: "ref3"
        },
        {
          name: "智慧地产",
          content:
            "智慧生活、科技、绿色、健康等元素来提升房产，智慧地产成为当代时代的产物",
          id: "4",
          refer: "ref4"
        },
        {
          name: "智慧商业",
          content: "细分化商业娱乐场景解决方案，助力零售餐饮门店智慧化",
          id: "5",
          refer: "ref5"
        },
        {
          name: "智慧城市",
          content:
            "共享亿万智能城市项目商机，抢占产业红利，加速实现合作伙伴商业化",
          id: "6",
          refer: "ref6"
        }
      ]
    };
  },
  created() {
    this.getList();

    let url = location.href;
    if (url.indexOf("bysiot") > 0) {
      document.domain = "bysiot.com";
      this.userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    // 获取轮播图
    getList() {
      this.$http
        .get(
          this.$api.getApiAddress(
            "/operationplatformmgn/o/saas/platform-images/query_images_all",
            "API_ROOT"
          )
        )
        .then(res => {
          if (res.data) {
            this.imgList = res.data;
          }
        });
    },

    custormAnchor(anchorName) {
      // 找到锚点
      let anchorElement = document.getElementById(anchorName);
      // 如果对应id的锚点存在，就跳转到锚点
      if (anchorElement) {
        anchorElement.scrollIntoView({block: "start", behavior: "smooth"});
      }
    },


    handleScroll() {
      let top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      if (top > 0) {
        this.scrollTag = true;
      } else {
        this.scrollTag = false;
      }
    },
    handleMouseOver(index) {
      //停止动画
      Velocity(this.$refs.titleImg[index], "stop");
      Velocity(this.$refs.titletName[index], "stop");
      Velocity(this.$refs.titleContent[index], "stop");
      Velocity(this.$refs.titleCover[index], "stop");
      //执行动画
      Velocity(
        this.$refs.titleImg[index],
        {
          top: "80px"
        },
        {
          duration: 500
        }
      );
      Velocity(
        this.$refs.titletName[index],
        {
          top: "145px"
        },
        {
          duration: 500
        }
      );
      Velocity(
        this.$refs.titleContent[index],
        {
          bottom: "100px"
        },
        {
          duration: 500
        }
      );
      Velocity(
        this.$refs.titleCover[index],
        {
          opacity: "0.3"
        },
        {
          duration: 500
        }
      );
    },
    handleMouseOut(index) {
      Velocity(this.$refs.titleImg[index], "stop");
      Velocity(this.$refs.titletName[index], "stop");
      Velocity(this.$refs.titleContent[index], "stop");
      Velocity(this.$refs.titleCover[index], "stop");
      //进行动画
      Velocity(
        this.$refs.titleImg[index],
        {
          top: "100px"
        },
        {
          duration: 500
        }
      );
      Velocity(
        this.$refs.titletName[index],
        {
          top: "175px"
        },
        {
          duration: 500
        }
      );
      Velocity(
        this.$refs.titleContent[index],
        {
          bottom: "-200px"
        },
        {
          duration: 500
        }
      );
      Velocity(
        this.$refs.titleCover[index],
        {
          opacity: "0"
        },
        {
          duration: 500
        }
      );
    }
  }
};
</script>
<style lang="less">
.home_page {
    .banner{
        .el-carousel__arrow i {
            cursor: pointer;
            font-size: 40px;
        }
        .el-carousel__container {
            width: 100%;
            height: 560px;
            // z-index: 2;
        }
        .el-carousel__item h3 {
            color: #475669;
            font-size: 18px;
            height: 560px;
            // background: url(../../assets/images/banner.png) no-repeat center center;
            background-size: 1920px 560px;
            margin: 0;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        .el-carousel__button {
            height: 3px;
        }
        .el-carousel__indicators--horizontal {
            bottom: 25px;
        }
        .el-carousel__arrow{
            // display: block !important;
            background:transparent !important;
        }

    }
    .yewu{
        .el-carousel__button{
            background: #E5E5E5;
            height: 3px;
        }
        .is-active{
            .el-carousel__button{
                background: #9BCBFF;
            } 
        }
    }
  
}
</style>
<style lang="less" scoped>
.home_page {
  //页面通用样式
  .min {
    width: 1200px;
    margin: 0 auto;
  }
  .line {
    width: 74px;
    height: 4px;
    background: #1476da;
    margin: 25px auto 35px;
  }
  .title_name {
    text-align: center;
    color: #2d2d2d;
    font-size: 34px;
  }
  //动画
  .slide-down-enter-active {
    animation: slide-in 0.5s;
  }
  .slide-down-leave-active {
    animation: slide-in 0.5s reverse;
  }
  @keyframes slide-in {
    110% {
      transform: opacity(0);
    }
    50% {
      transform: opacity(0.5);
    }
    0% {
      transform: opacity(1);
    }
  }
  .swiper {
    width: 100%;
    // height:560px;
    position: relative;
  }
  .mainBox{
        .daohang{
            height: 56px;
            line-height: 56px;
            background: #F3F6FC;
            
            .min{
                padding-left:168px;
                span{
                    margin-right:198px;
                    color:#333;
                    font-size: 16px;
                    cursor: pointer;
                    &:hover{
                        color:#1A66FF;
                    }
                }
                span:last-child{
                    margin:0;
                }
            }
        }
        .box1{
            position: relative;
            height: 695px;
            padding-top:65px;
            #box1{
                position: absolute;
                top:-78px;
                left:0;
                height: 1px;
            }
            .tit{
              
                height: 65px;
                width:386px;
                margin:0 auto;
                background:url(../../assets/images/newindex/biaoti1.png);
                //   margin-top:65px;

            }
            .left,.right{
                width:50%;
                height:560px;
                float:left;
            }
            .right{
                padding-top:64px;
                padding-left:100px;             
                >div{
                    height: 96px;
                    width:463px;
                    border:1px solid #5BA6F3;
                    border-radius: 3px;
                    margin-bottom:12px;
                    img{
                        margin:23px 25px;
                        float:left;
                    }
                    h4{
                        font-size:16px ;
                        color:#1476DA;
                        margin-top:13px;
                    }
                    p{
                        margin-top:6px;
                        font-size: 14px;
                        color:#333;
                        padding-right:40px;
                    }
                }
            }
            .left{
                .yewu{
                    img{
                        display: block;
                        margin:65px auto 28px;
                    }
                    h4{
                        font-size: 28px;
                        color:#1A66FF;
                        font-weight: normal;
                        margin-bottom:10px;

                    }
                    p{
                        font-size:18px;
                        color: #333;
                        line-height: 1.5;
                        padding-right:30px;

                    }
                }
            }

        }
        .box2{
            position: relative;
            height:837px;
            background: url(../../assets/images/newindex/mengban1.png) center center;         
            padding-top:0.1px;
            color:#fff;
            #box2{
                position: absolute;
                top:-78px;
                left:0;
                height: 1px;
            }
            .tit{
                
                height: 65px;
                width:386px;
                margin:65px auto;
                background:url(../../assets/images/newindex/biaoti2.png);
                // margin-bottom:63px;

            }
            .left{
                height: 540px;
                width: 310px;
                float: left;
                position: relative;
                overflow: hidden;
                .text:hover+img {                  
                    transform:scale(1.3,1.3);                   
                }
                img{
                    transition:all 0.5s ease-out;
                }
                .text{
                    position: absolute;
                    top:0;
                    left:0;
                    padding:15px 26px;
                    width:100%;
                    height: 100%;
                    z-index:9;

                }
                span{
                    font-size: 22px;
                    display: inline-block;
                    padding:6px 0;
                    border-bottom:1px solid #fff;
                    margin-bottom:6px;

                }
                p{
                    font-size:16px ;
                    line-height: 26px;
                    padding-right:35px;
                }
            }
            .right{
                padding-left:30px;
                width:calc(100% - 310px);
                float: right;
                >div{
                    width: 415px;
                    height: 160px;
                    // padding:17px 25px;
                    margin-bottom:30px;
                    float: left;
                    position: relative;
                    overflow: hidden;
                   .text:hover+img {                  
                        transform:scale(1.3,1.3);                   
                    }
                    img{
                        transition:all 0.5s ease-out;
                    }
                    .text{
                        position: absolute;
                        width:100%;
                        height: 100%;
                        top:0;
                        left:0;
                        padding:12px 26px;
                        z-index:9;
                    }
                    span{
                        font-size: 22px;
                        display: inline-block;
                        padding:6px 0;
                        border-bottom:1px solid #fff;
                        margin-bottom:4px;

                    }
                    p{
                        font-size:16px ;
                        line-height: 26px;
                        padding-right:35px;
                    }

                    }
                    .div1,.div3,.div5{
                        margin-right:30px;
                    
                    }
             
                }
        }
        .box3{
            position: relative;
            height: 718px;
            padding-top:65px;
            #box3{
                position: absolute;
                top:-78px;
                left:0;
                height: 1px;
            }
            .tit{
                height: 65px;
                width:386px;
                margin:0 auto;
                background:url(../../assets/images/newindex/biaoti3.png);

            }
            .div1,.div2,.div3{
                margin-top:45px;
                float:left;
                height: 420px;
                width:390px;
                background:url(../../assets/images/newindex/kuang.png);
                margin-right:15px;
                img{
                    display: block;
                    margin:35px auto 0;
                }
                h4{
                    font-size: 26px;
                    color:#1576D9;
                    margin-top:40px;
                    text-align: center;
                    font-weight: normal;
                    position: relative;
                    img{
                        position: absolute;
                        left:168px;
                        top:5px;
                    }
                }
                p{
                    margin-top:32px;
                    font-size: 20px;
                    color:#333;
                    text-align: center;
                    padding:0 70px;

                }
            }
            .div3{
                margin-right: 0;
            }

        }
        .box4{
            position: relative;
            height:846px;
            background: url(../../assets/images/newindex/mengban2.png) center center;         
            padding-top:65px;
            color:#fff;
            margin-bottom:80px;
            #box4{
                position: absolute;
                top:-78px;
                left:0;
                height: 1px;
            }
            .tit{
                height: 65px;
                width:386px;
                margin:0 auto;
                background:url(../../assets/images/newindex/biaoti4.png);
                margin-bottom:75px;

            }
            .left,.right{
                 >div{
                     overflow: hidden;
                    >p{
                        width:100%;
                        height:38px;
                        line-height: 38px;
                        position: absolute;
                        background:rgba(0,0,0,0.5);
                        left:0;
                        bottom:-38px;
                        color:#E8E9E9;
                        font-size: 18px;
                        text-align: center;
                        transition:all 0.3s linear;
                        
                        
                    }
                    &:hover{
                        p{
                            bottom:0;
                            transition:all 0.5s linear;
                        }
                    }
                }
            }
            .left{
               
                width:790px;
                height:540px;
                float:left;
               
                .div1{
                    height: 350px;
                    width:100%; 
                    margin-bottom:30px;                
                    background:url(../../assets/images/newindex/pic1.png);
                    position: relative;
                    
                }
                .div2{
                    height: 160px;
                    width:380px;                 
                    background:url(../../assets/images/newindex/pic2.png);
                    float:left;
                    position: relative;
                }
                .div3{
                    height: 160px;
                    width:380px;                  
                    background:url(../../assets/images/newindex/pic3.png);
                    float:right;
                    position: relative;
                }
            }
            .right{
                float:right;
                width:380px;
                height: 540px;
                .div1{
                    height: 160px;
                    width:100%; 
                    margin-bottom:30px;                
                    background:url(../../assets/images/newindex/pic4.png);
                    position: relative;
                }
                .div2{
                    height: 160px;
                    width:100%; 
                    margin-bottom:30px;                
                    background:url(../../assets/images/newindex/pic5.png);
                    position: relative;
                }
                .div3{
                    height: 160px;
                    width:100%; 
                    position: relative;            
                    background:url(../../assets/images/newindex/pic6.png);
                }
            }
        }

  }
 

  .floating {
    width: 35px;
    height: 115px;
    padding: 18px 12px;
    font-size: 11px;
    background-color: #4dafde;
    position: fixed;
    right: 12px;
    bottom: 90px;
    z-index: 10;
    > span {
      color: #fff;
      display: block;
      text-align: center;
    }
    .i {
      position: absolute;
      width: 10px;
      height: 150px;
      bottom: 0;
      left: -10px;
    }

    // &:hover{
    //     .float-window{
    //         display: block
    //     }
    // }
    .float-window {
      position: absolute;
      width: 230px;
      height: 150px;
      font-size: 11px;
      bottom: 0;
      left: -240px;
      box-shadow: 0px 2px 26px 0px rgba(6, 51, 120, 0.4);
      background: #fff;
      padding: 20px 12px;
      .close {
        position: absolute;
        top: 15px;
        right: 15px;
        font-size: 14px;
      }
      i.icon {
        display: block;
        float: left;
        height: 40px;
        line-height: 40px;
        font-size: 18px;
      }
      .p1 {
        color: #2d2d2d;
      }
      .p2 {
        color: #767976;
        font-weight: 400;
      }
      .call {
        color: #4dafde;
      }
      p {
        height: 20px;
        line-height: 20px;
        padding-left: 25px;
      }
    }
  }
}
</style>

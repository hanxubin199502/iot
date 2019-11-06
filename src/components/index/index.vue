<template>
    <div class="home_page"> 
        <headerBar/> 
        <div class="swiper">
            <el-carousel>
                <el-carousel-item v-for="(item,index) in imgList" 
                :key="index" :style="'background:url('+item.imagesPath+')center center'">               
                    <h3 ></h3>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="info1 center clearfix">
            <div class="clearfix">
                <div class="bar"></div>
                <div class="info1_title">关于博彦物联网平台</div>
            </div>
            <div class="info1_sologan">国内物联网行业领军企业</div>
            <p v-for="(item,index) in info1Content" :key="index" style="">{{item}}</p>
            <img src="../../../static/images/homepage/p1-finger.png" alt="">
        </div> 


        <div class="info2_1 clearfix center"> 
            <div v-for="(item,index) in info2Content" :key="index" class="info2_item" >
                <img :src="item.img" alt="">
                <div class="info2_item_name">{{item.name}}</div>
                <div class="info2_item_content">{{item.content}}</div>
            </div>
        </div>

        <div class="info3_1 clearfix">
            <div class="center">
                <div class="title_name">物联网一站式服务</div>
                <div class="line"></div>
                <div @mouseover="item.hover=true" @mouseleave="item.hover =false" v-for="(item,index) in info3Content" :key="index" class="info3_1_item">
                    <img :src="item.hover?item.imgHover:item.img" alt="">
                    <!-- <img v-show="item.hover" :src="item.imgHover" alt=""> -->
                    <div class="item3_1_item_name">{{item.name}}</div>
                    <div class="item3_1_item_content">{{item.content}}</div>
                </div>

            </div>
        </div>

        <div class="info4_1 center clearfix">
            <div class="title_name">产品优势</div>
            <div class="line"></div>
            <div v-for="(item,index) in info4Content" :key="index" class="info4_1_item">
                    <img :src="item.img" alt="">
                    <div class="item4_1_item_name">{{item.name}}</div>
                    <div class="item4_1_item_content">{{item.content}}</div>
            </div>
        </div>

        <div class="info5">
            <div class="min-info4">
                <div class="title_name">物联网应用场景</div>
                <div class="line"></div>                             
            </div>
            <div class="box">
                 <div class="min-box">
                    <el-row  class="row-content">
                        <el-col :span="4" ref="test" v-for="(item,index) in info5Content" :key="index">
                                <div :class="'grid-content bg'+item.id" @mouseenter="handleMouseOver(index)" @mouseleave="handleMouseOut(index)">
                                    <div ref="titleCover" class="info5_cover"></div>
                                    <p ref="titleImg" class="img"></p>
                                    <p ref="titletName" class="tit">{{item.name}}</p>
                                    <div ref="titleContent" class="info5_content">{{item.content}}</div>
                                    
                                </div>
                            </el-col>
                    </el-row>
                 </div>                
            </div>
        </div>

        <div class="info6 center">
            <div class="title_name">一站式解决方案</div>
            <div class="info6_subtitle info6_subtitle1">咨询规划</div>
            <div class="info6_subtitle info6_subtitle2">落地改造</div>
            <div class="info6_subtitle info6_subtitle3">实施方案</div>
            <div class="info6_subtitle info6_subtitle4">平台运营</div> 
            <div class="line"></div>
            <img src="../../../static/images/homepage/p6-bg.png" alt="">
            <div class="info6_content">顺应智慧城市全球化发展趋势，专注于帮助中国产业园区、 企业拥抱互联网+；</div>
            <div class="info6_content">从前期设计与咨询规划、落地实施方案到运营服务，提供全方位全流程的综合解决方案，助力产业和企业全面转型和升级。</div>
        </div>




        <footerBar/>
        <div class="floating" @mouseover="hide=true" @mouseout="hide=false">            
            <span>意见 · 反馈</span>
            <i class="i"></i>
            <div class="float-window" v-show="hide">
                <i @click="hide=false" class="close el-icon-close"></i>
                <div>
                   <i class="icon icon-dianhuaji"></i>
                   <p class="p1">售前咨询电话</p>
                   <p class="call">400 000 6282</p>
                </div>
                <div style="margin-top:25px;">
                   <i class="icon icon-yijianfankui-"></i>
                   <p class="p1">建议反馈</p>
                   <p class="p2">为万物更智联，我们渴望您的建议</p>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
import Velocity from 'velocity-animate'
import footerBar from '../common/footer'
import headerBar from '../common/header'
export default {
    components:{
        footerBar,
        headerBar
    },
    data(){
        return{
            imgList:[],
            hide:false,
            userInfo:{},
            info1Content:[
                '博彦物联网云平台致力于打造以人为本，以使用者为核心的万物 互联的美好生活应用场景。',
                '目前发布的主要由PaaS层智慧建筑应用平台组成。',
                '博彦物联网设备接入平台为生态合作伙伴提供基于大数据、云计算、人工智能、边缘计，区块链等物联网应用使能平台及应用内容服务，开放的平台应用能力将为各领域的生态合作伙伴提供更丰富的物联网创新功能应用，更低成本且高效融入物联网应用体系。',
                '博彦智慧建筑应用平台是运用物联网、大数据、云计算等技术，将建筑应用场景的空调、供暖、新风、照明、排污、建筑信息化模型BIM等各位要素通过物联网信息传感、通讯等技术进行有机互联，并对采集数据进行实施监测，统计，分析，管理，控制，分配等，优化建筑体能耗使用效率，提高管理响应速度，效率和科预案能力，增强报警等问题的指挥、调度、决策和处置能力。',
            ],
            info2Content:[
                {
                    name:'连接设备',
                    content:'开放生态，物联网终端将更加智能化， 促使终端设备间的协作逐渐成为常态。',
                    img:'../../../static/images/homepage/p2-logo1.png',

                },
                {
                    name:'连接人',
                    content:'从连接设备到连接人，物联网将协助 各行业搭建“超级大脑”，智慧生活。',
                    img:'../../../static/images/homepage/p2-logo2.png',
                },
                {
                    name:'AI驱动',
                    content:'人工智能技术融入物联网应用变得更 容易，场景更具赋能空间。',
                    img:'../../../static/images/homepage/p2-logo3.png',
                },
            ],
            info3Content:[
                {
                    name:'设备接入平台',
                    content:'提供亿量级多协议、多平台设备的长连接 接入及安全认证能力。',
                    img:'../../../static/images/homepage/p3-logo1.png',
                    imgHover:'../../../static/images/homepage/p3-logo1-hover.png',
                    hover:false
                },
                {
                    name:'场景应用平台',
                    content:'垂直于细分领域的SaaS应用，支撑物联网 应用的多场景业务需求。',
                    img:'../../../static/images/homepage/p3-logo2.png',
                    imgHover:'../../../static/images/homepage/p3-logo2-hover.png',
                    hover:false
                },
                {
                    name:'开发平台',
                    content:'基于博彦物联网云平台各类服务，提供API /SDK等多种方式。',
                    img:'../../../static/images/homepage/p3-logo3.png',
                    imgHover:'../../../static/images/homepage/p3-logo3-hover.png',
                    hover:false
                },
                {
                    name:'数据智能平台',
                    content:'提供数据云引擎服务，为企业数据化运营 提供数据支持。',
                    img:'../../../static/images/homepage/p3-logo4.png',
                    imgHover:'../../../static/images/homepage/p3-logo4-hover.png',
                    hover:false
                },
            ],
            info4Content:[
                {
                    name:'简单易用',
                    content:'简单易用的控制台及APP,迅速上手操作无需学习成本。',
                    img:'../../../static/images/homepage/p4-logo1.png'
                },
                {
                    name:'稳定灵活',
                    content:'最稳定设备接入稳定能力,极速数据消息日处理能力。',
                    img:'../../../static/images/homepage/p4-logo2.png'
                },
                {
                    name:'中立开放',
                    content:'公有/私有/混合云全球部署,可二次开发。',
                    img:'../../../static/images/homepage/p4-logo3.png'
                },
                {
                    name:'方案多样',
                    content:'成熟的单品、行业解决方案,支持企业ToB、ToC全球业务。',
                    img:'../../../static/images/homepage/p4-logo4.png'
                },
                {
                    name:'设备接入',
                    content:'多协议设备接入 ,多平台设备接入。',
                    img:'../../../static/images/homepage/p4-logo5.png'
                },
                {
                    name:'安全稳定',
                    content:'设备认证保障设备安全与唯一传输加密保障数据安全。',
                    img:'../../../static/images/homepage/p4-logo6.png'
                },
                {
                    name:'高效管理',
                    content:'信息化平台便于信息共享与交接,提升管理效率。',
                    img:'../../../static/images/homepage/p4-logo7.png'
                },
                {
                    name:'充分整合',
                    content:'物联与互联网系统完全连接融合,提供智慧的基础设施。',
                    img:'../../../static/images/homepage/p4-logo8.png'
                },
            ],
            info5Content:[
                {
                    name:'智慧楼宇',
                    content:'以降低能源成本、提高效率、满足企业可持续发展的目标提供楼宇价值',
                    id:'1',
                    refer:'ref1'
                },
                {
                    name:'智慧园区',
                    content:'以信用体系优化资源共享，以开放平台共建园区服务体系',
                    id:'2',
                    refer:'ref2'
                },
                {
                    name:'智慧场馆',
                    content:'有整体营销、综合运营、整合产品与商务服务，接入等一整套智慧场馆综合服务体系',
                    id:'3',
                    refer:'ref3'
                },
                {
                    name:'智慧地产',
                    content:'智慧生活、科技、绿色、健康等元素来提升房产，智慧地产成为当代时代的产物',
                    id:'4',
                    refer:'ref4'
                },
                {
                    name:'智慧商业',
                    content:'细分化商业娱乐场景解决方案，助力零售餐饮门店智慧化',
                    id:'5',
                    refer:'ref5'
                },
                {
                    name:'智慧城市',
                    content:'共享亿万智能城市项目商机，抢占产业红利，加速实现合作伙伴商业化',
                    id:'6',
                    refer:'ref6'
                },

            ]
        }
    },
    created(){
        this.getList()

        let url = location.href;
        if(url.indexOf('bysiot')>0){
            document.domain = 'bysiot.com'
            this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
             console.log(this.userInfo)
        }
        
        console.log(this.userInfo)
    },
    mounted(){     
        window.addEventListener('scroll',this.handleScroll)
    },
    
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods:{
        // 获取轮播图
        getList() {
            this.$http.get(
                this.$api.getApiAddress(
                    "/operationplatformmgn/o/saas/platform-images/query_images_all",
                    "API_ROOT"
                ),       
            )
            .then(res => {
                if(res.data){              
                    this.imgList = res.data
                }
             
            });
        },
        handleScroll(){          
            let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset        
            if(top>0){
                this.scrollTag=true;           
            }else{
                this.scrollTag=false                
            }
        },
        handleMouseOver(index) {
            //停止动画
            Velocity(this.$refs.titleImg[index],'stop'
            );
            Velocity(this.$refs.titletName[index],'stop'
            );
            Velocity(this.$refs.titleContent[index],'stop'
            );
            Velocity(this.$refs.titleCover[index],'stop'
            );
            //执行动画
            Velocity(this.$refs.titleImg[index], {
                top: '80px'
            }, {
                duration: 500,
            });
            Velocity(this.$refs.titletName[index], {
                top: '145px'
            }, {
                duration: 500,
            });
            Velocity(this.$refs.titleContent[index], {
                bottom: '100px'
            }, {
                duration: 500,
            });
            Velocity(this.$refs.titleCover[index], {
                opacity: '0.3'
            }, {
                duration: 500,
            });
        },
        handleMouseOut(index) {
            Velocity(this.$refs.titleImg[index],'stop'
            );
            Velocity(this.$refs.titletName[index],'stop'
            );
            Velocity(this.$refs.titleContent[index],'stop'
            );
            Velocity(this.$refs.titleCover[index],'stop'
            );
            //进行动画
            Velocity(this.$refs.titleImg[index], {
                top: '100px'
            }, {
                duration: 500,
            });
            Velocity(this.$refs.titletName[index], {
                top: '175px'
            }, {
                duration: 500,
            });
            Velocity(this.$refs.titleContent[index], {
                bottom: '-200px'
            }, {
                duration: 500,
            });
            Velocity(this.$refs.titleCover[index], {
                opacity: '0'
            }, {
                duration: 500,
            });

        }
    }
}
</script>
<style lang="less">
.home_page{
    .el-carousel__arrow i {
        cursor: pointer;
        font-size: 40px;
    }
    .el-carousel__container{
        width:100%;
        height: 560px;
        // z-index: 2;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        height: 560px;
        // background: url(../../assets/images/banner.png) no-repeat center center;     
        background-size:1920px 560px;
        margin: 0;
        text-align:center;
        position: relative;
        overflow: hidden;
    }
    .el-carousel__button{
        height:3px;
    }
    .el-carousel__indicators--horizontal{
        bottom:25px;
    }
}

</style>
<style lang="less" scoped>
    .home_page{
        //页面通用样式
        .center {
            width: 1200px;
            margin: 0 auto;
        }
        .line{
            width: 74px;
            height: 4px;
            background:#1476DA;
            margin:25px auto 35px;
        }
        .title_name {
            text-align: center;
            color: #2D2D2D;
            font-size: 34px;
        }
        //动画
        .slide-down-enter-active{
            animation: slide-in .5s;
        }
        .slide-down-leave-active{
            animation: slide-in .5s reverse;
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
        .swiper{
            width:100%;
            // height:560px;
            position: relative;
        }
        .info1{
            margin-top: 100px;
            position: relative;
            .bar {
                margin-top: 35px;
                float: left;
                width: 80px;
                height: 1px;
                background-color: #1476DA;
            }
            .info1_title {
                float: left;
                margin-left: 20px;
                font-size: 40px;
                color: #2D2D2D;
            }
            .info1_sologan {
                margin-top: 33px;
                font-size: 26px;
                color: #A8A7A7;
            }
            p {
                color: #5B5A5A;
                font-size: 17px;
                line-height: 37px;
                width: 620px;
                margin-top: 23px;
                &:nth-child(1) {
                    margin-top:80px;
                }
            }
            img {
                width: 502px;
                height: 506px;
                position: absolute;
                right: 0;
                top: 160px;
            }
        }


        .info2_1 {
            margin-top: 100px;
            .info2_item {
                width: 33%;
                float: left;

                img {
                    transform: translateX(82%);
                    width: 148px;
                    height: 146px;
                }
                .info2_item_name {
                    margin-top: 22px;
                    text-align: center;
                    font-size: 26px;
                    color: #1476DA;
                }
                .info2_item_content {
                    margin-top: 35px;
                    padding: 0 25px;
                    text-align: center;
                    font-size: 20px;
                    color: #3F3F3F;
                }
            }
        }
        .info3_1 {
            height: 1169px;
            padding-top: 100px;
            background: url(../../../static/images/homepage/p3-bg.png) left center no-repeat;
            .info3_1_item {
                float: left;
                width: 582px;
                height: 204px;
                background-color: #FFFFFF;
                margin-right:18px;
                margin-bottom: 35px;
                position: relative;
                img {
                    position: absolute;
                    // width: 77px;
                    // height: 88px;
                    top: 50px;
                    left: 46px;
                }
                .item3_1_item_name {
                    position: absolute;
                    font-size: 26px;
                    top: 50px;
                    left: 170px;
                    color: #1476DA;
                }
                .item3_1_item_content {
                    position: absolute;
                    font-size: 20px;
                    top: 105px;
                    left: 170px;
                    color: #3F3F3F;
                }
            }
        }

        .info4_1 {
            margin-top: -390px;
            .info4_1_item {
                width: 282px;
                float: left;
                margin-top: 85px;
                margin-right: 18px;
                position: relative;
                transition: box-shadow 0.5s;
                padding: 35px 0;
                &:hover {
                    box-shadow:2px 2px 17px 1px rgba(6,105,206,0.11);
                }
                img {
                    transform: translateX(63%);
                }
                .item4_1_item_name {
                    text-align: center;
                    color:#3F3F3F;
                    font-size:26px;
                    margin-top: 9px;
                    // padding-right: 50px;
                }
                .item4_1_item_content {
                    text-align: center;
                    color:#3F3F3F;
                    font-size:20px;
                    // padding-right: 50px;
                    margin-top: 35px;

                }
            }
        }
        .info5{
            width: 100%;
            height: 600px;
            background:#fff;
             .box{
                    width: 100%;
                    height:362px;
                    background:#003f98;
                    .min-box{
                         width: 1200px;
                         margin:0 auto;
                         height: 100%;
                    }
                    .row-content{                       
                        height:362px;
                        .grid-content{
                            height: 362px;
                            position: relative;
                            overflow: hidden;
                            .info5_cover {
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                                background-color: black;
                                z-index: 100;
                                opacity: 0;
                            }
                            .img{
                                position: absolute;
                                width: 45px;
                                height: 45px;
                                top: 100px;
                                left:80px;
                                z-index: 200;
                            }
                            .tit{
                                position: absolute;
                                color:#fff;
                                top:175px;
                                width: 100%;
                                text-align:center;
                                font-size:17px;
                                z-index: 200;
                            }
                            .info5_content {
                                text-align: center;
                                position: absolute;
                                color: #FFFFFF;
                                font-size: 16px;
                                bottom: -200px;
                                z-index: 200;
                            }
                   
                        }
                         .bg1{
                            background: url(../../assets/images/bg_01.png);
                            background-size:100%;
                            .img{
                                background: url(../../assets/images/zh01.png);
                                background-size:100%;
                            }
                        }
                         .bg2{
                            background: url(../../assets/images/bg_02.png);
                            background-size:100%;
                             .img{
                                background: url(../../assets/images/zh02.png);
                                background-size:100%;
                            }
                        }
                         .bg3{
                            background: url(../../assets/images/bg_03.png);
                            background-size:100%;
                             .img{
                                background: url(../../assets/images/zh03.png);
                                background-size:100%;
                            }
                        }
                         .bg4{
                            background: url(../../assets/images/bg_04.png);
                            background-size:100%;
                             .img{
                                background: url(../../assets/images/zh04.png);
                                background-size:100%;
                            }
                        }
                         .bg5{
                            background: url(../../assets/images/bg_05.png);
                            
                            background-size:100%;
                             .img{
                                background: url(../../assets/images/zh05.png);
                                background-size:100%;
                            }
                        }
                         .bg6{
                            background: url(../../assets/images/bg_06.png);
                            background-size:100%;
                             .img{
                                background: url(../../assets/images/zh06.png);
                                background-size:100%;
                            }
                        }
                    }
                }
            .min-info4{
                width: 1200px;
                margin:0 auto;
                padding-top:68px;
                h2{
                    font-size:34px;
                    text-align:center;
                    font-weight: 400;
                }
                // .line{
                //     width: 74px;
                //     height: 7px;
                //     background:#053982;
                //     margin:25px auto 35px;
                // }

               
                 
            }
        }
        .info6 {
            position: relative;
            margin-bottom: 100px;
            .info6_subtitle{
                position: absolute;
                color: #3F3F3F;
                font-size: 26px;
            }
            .info6_subtitle1{
                left: 39px;
                top: 230px;
            }
            .info6_subtitle2{
                left: 295px;
                top: 260px;
            }
            .info6_subtitle3{
                left: 39px;
                top: 480px;
            }
            .info6_subtitle4{
                left: 295px;
                top: 515px;
            }
       
            .info6_content{
                position: absolute;
                left: 529px;
                top: 222px;
                color: #5B5A5A;
                font-size: 26px;
                width: 665px;
                &:last-child {
                    top: 332px;
                }
            }
        }
      
        .floating{
            width: 35px;
            height: 115px;         
            padding:18px 12px;
            font-size:11px;           
            background-color: #4dafde;
            position: fixed;
            right:12px;
            bottom:90px;            
            z-index:10;
            >span{
                color:#fff;
                display: block;
                text-align:center;
            }
            .i{
                position: absolute;
                width: 10px;
                height: 150px;
                bottom:0;
                left:-10px;
            }

            // &:hover{
            //     .float-window{
            //         display: block
            //     }
            // }
            .float-window{
               
                position: absolute;
                width: 230px;
                height: 150px;
                font-size:11px;
                bottom:0;
                left:-240px;
                box-shadow:0px 2px 26px 0px rgba(6,51,120,0.4);
                background: #fff;
                padding:20px 12px;
                .close{
                    position: absolute;
                    top:15px;
                    right:15px;
                    font-size: 14px;
                }
                i.icon{
                    display: block;
                    float: left;
                    height: 40px;
                    line-height: 40px;
                    font-size:18px;
                }
                .p1{
                    color: #2D2D2D;
                }
                .p2{
                    color:#767976;
                    font-weight: 400;
                }
                .call{
                    color:#4DAFDE;
                }
                p{
                    height: 20px;
                    line-height: 20px;;
                    padding-left:25px;
                }
            }
        }
    }
</style>


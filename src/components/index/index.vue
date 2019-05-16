<template>
    <div class="home_page"> 
        <headerBar/> 
        <div class="swiper">
            <el-carousel>
                <el-carousel-item v-for="(item,index) in imgList" :key="index" :style="'background:url('+item.imagesPath+')center center'">               
                    <h3 ></h3>
                </el-carousel-item>
            </el-carousel>
        </div> 
        <div class="info1">
            <div class="min-info1">
                <div class="item1">
                    <p class="img"></p>
                    <p class="p2">连接设备</p>
                    <p class="p3">开放生态，物联网终端将更加智能化，促使终端设备之间的协作逐渐成为常态。</p>
                </div>
                <div class="item2">
                    <p class="img"></p>
                    <p class="p2">连接人</p>
                    <p class="p3">从连接设备到连接人，物联网将协助各行业搭建“超级大脑”，智慧生活。 </p>
                </div>
                <div class="item3">
                    <p class="img"></p>
                    <p class="p2">AI驱动</p>
                    <p class="p3">人工智能技术融入物联网应用变得更容易，场景更具赋能空间。</p>
                </div>
            </div>
        </div> 
        <div class="info2">
            <div class="min-info2">
                <h2>拥抱未来&nbsp&nbsp&nbsp打造智慧物联生态</h2>
                <div class="line"></div>
                 <el-row :gutter="110" class="row-content">
                    <el-col :span="8"><div class="grid-content bg1"></div></el-col>
                    <el-col :span="8"><div class="grid-content bg2"></div></el-col>
                    <el-col :span="8"><div class="grid-content bg3"></div></el-col>             
                </el-row>
                <p class="describe">博彦物联致力于打造以人为本、以使用者为核心的万物互联的美好生活应用场景</p>
            </div>          
        </div> 
        <div class="info3">
            <div class="min-info3">
                <h2>物联网一站式服务</h2>
                <div class="line"></div>
                <el-row :gutter="40" class="row-content">
                    <el-col :span="6">
                        <div class="grid-content bg1">
                            <p class="img"></p>
                            <p class="tit">设备接入平台</p>
                            <p class="text">设备接入平台设备接入平台设备接入平台设备接入平台设备接入平台设备接入平台</p>
                        </div></el-col>
                    <el-col :span="6">
                        <div class="grid-content bg2">
                            <p class="img"></p>
                            <p class="tit">场景应用平台</p>
                            <p class="text">设备接入平台设备接入平台设备接入平台设备接入平台</p>
                        </div></el-col>
                    <el-col :span="6">
                        <div class="grid-content bg3">
                            <p class="img"></p>
                            <p class="tit">开发平台</p>
                            <p class="text">设备接入平台设备接入平台设备接入平台设备接入平台设备接入平台设备接入平台</p>
                        </div>
                    </el-col> 
                    <el-col :span="6">
                        <div class="grid-content bg4">
                            <p class="img"></p>
                            <p class="tit">数据应用平台</p>
                            <p class="text">设备接入平台设备接入平台设备接入平台设备接入平台设备接入平台设备接入平台</p>
                        </div>
                    </el-col>             
                </el-row>
            </div>
        </div>  
        <div class="info4">
            <div class="min-info4">
                <h2>物联网应用场景</h2>
                <div class="line"></div>                             
            </div>
            <div class="box">
                 <div class="min-box">
                    <el-row  class="row-content">
                        <el-col :span="4">
                            <div class="grid-content bg1">
                                <p class="img"></p>
                                <p class="tit">智慧楼宇</p>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div class="grid-content bg2">
                                 <p class="img"></p>
                                <p class="tit">智慧园区</p>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div class="grid-content bg3">
                                 <p class="img"></p>
                                <p class="tit">智慧场馆</p>
                            </div>
                        </el-col> 
                        <el-col :span="4">
                            <div class="grid-content bg4">
                                 <p class="img"></p>
                                <p class="tit">智慧地产</p>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div class="grid-content bg5">
                                 <p class="img"></p>
                                <p class="tit">智慧商业</p>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div class="grid-content bg6">
                                 <p class="img"></p>
                                <p class="tit">智慧城市</p>
                            </div>
                        </el-col>             
                    </el-row>
                 </div>                
            </div>
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
                   <p class="call">400 000 6262</p>
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
            hide:false
            // scrollTag:false
        }
    },
    created(){
        this.getList()
    },
    mounted(){     
        window.addEventListener('scroll',this.handleScroll)
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
        }
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },

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
        .swiper{
            width:100%;
            height:560px;
            position: relative;
        }
        .info1{
            width: 100%;
            height: 255px;
            background:#003f98;
            .min-info1{
                width: 1200px;
                margin:0 auto;
                div{
                    width:33.33%;
                    float:left;
                    // text-align:center;
                    padding:28px 15px 0 15px;;
                    >.img{
                        width: 85px;
                        height: 85px;
                        // margin-left:142px;
                    }
                    >.p2{
                        margin:15px 0px;
                        font-size:18px;
                        color:#fff;
                    }
                    >.p3{
                        font-size: 14px;
                        color:#fff;
                        // text-align:left;
                        line-height: 1.4;
                        width:289px;
                        
                    }
                }
                .item1{
                    
                    .img{
                        margin-left:103px;
                        background:url(../../assets/images/img1.png);
                        background-size: 100%;
                        &:hover{
                             margin-left:103px;
                            background:url(../../assets/images/img1_1.png);
                            background-size: 100%;
                        }
                    }
                    .p2{
                        padding-left:103px;
                    }
                    .p3{
                        padding-left:25px;
                    }
                }
                 .item2{
                        padding-left:50px;
                    .p2{
                        padding-left:133px;
                    }
                    .p3{
                        padding-left:25px;
                    }
                    .img{
                        margin-left:113px;
                        background:url(../../assets/images/img2.png);
                        background-size: 100%;
                           &:hover{
                             margin-left:113px;
                            background:url(../../assets/images/img2_1.png);
                            background-size: 100%;
                        }
                    }
                }
                 .item3{
                        padding-left:80px;
                    .p2{
                        padding-left:123px;
                    }
                    .p3{
                        padding-left:25px;
                    }
                    .img{
                        margin-left:103px;
                        background:url(../../assets/images/img3.png);
                        background-size: 100%;
                           &:hover{
                             margin-left:103px;
                            background:url(../../assets/images/img3_1.png);
                            background-size: 100%;
                        }
                    }
                }
            }
        }
        .info2{
            width: 100%;
            height: 440px;
            background:#fff;
            .min-info2{
                width: 1200px;
                margin:0 auto;
                padding-top:68px;
                h2{
                    font-size:34px;
                    text-align:center;
                    font-weight: 400;
                }
                .describe{
                    color:#2D2D2D;
                    font-size:24px;
                    margin-top:28px;
                    text-align:center;
                }
                .line{
                    width: 74px;
                    height: 7px;
                    background:#053982;
                    margin:25px auto 35px;
                }
                .row-content{
                    height:155px;
                    .grid-content{
                        height: 155px;
                    }
                    .bg1{
                        background: url(../../assets/images/tu01.png);
                        background-size:100%;
                    }
                     .bg2{
                        background: url(../../assets/images/tu02.png);
                        background-size:100%;
                    }
                     .bg3{
                        background: url(../../assets/images/tu03.png);
                        background-size:100%;
                    }

                }
            }
           
        }
        .info3{
             height: 394px;
             width:100%;
             background-color: #F5F5F6;
             .min-info3{
                width: 1200px;
                height: 100%;
                margin:0 auto;
                padding-top:50px;
                h2{
                    font-size:34px;
                    text-align:center;
                    font-weight: 400;
                }
                .line{
                    width: 74px;
                    height: 7px;
                    background:#053982;
                    margin:20px auto 30px;
                }

                .row-content{
                    height: 250px;;
                    .grid-content{
                       height: 250px;;
                        .img{
                            width: 85px;
                            height: 85px;
                            margin-left:90px;
                        }
                        .tit{
                            font-size:18px;
                            text-align: center;
                            margin:15px 0 20px;
                            color:#3f3f3f;
                        }
                        .text{
                            font-size:14px;
                            padding:0 10px;
                            line-height:1.5;
                            color:#3f3f3f;
                        }
                    }
                    .bg1{
                        .img{
                            background: url(../../assets/images/wu01.png);
                            background-size:100%;
                            &:hover{
                                background:url(../../assets/images/wu01_1.png);
                                background-size: 100%;
                            }
                        }
                    }
                    .bg2{
                        .img{
                            background: url(../../assets/images/wu02.png);
                            background-size:100%;
                             &:hover{
                                background:url(../../assets/images/wu02_1.png);
                                background-size: 100%;
                            }
                        }
                    }
                     .bg3{
                        .img{
                            background: url(../../assets/images/wu03.png);
                            background-size:100%;
                             &:hover{
                                background:url(../../assets/images/wu03_1.png);
                                background-size: 100%;
                            }
                        }
                    }
                      .bg4{
                        .img{
                            background: url(../../assets/images/wu04.png);
                            background-size:100%;
                             &:hover{
                                background:url(../../assets/images/wu04_1.png);
                                background-size: 100%;
                            }
                        }
                    }

                }
            }
        }
        .info4{
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
                            padding-top:100px;
                            
                            .img{
                                width: 45px;
                                height: 45px;
                                margin-left:80px;

                            }
                            .tit{
                                color:#fff;
                                margin-top:30px;
                                text-align:center;
                                font-size:17px;
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
                .line{
                    width: 74px;
                    height: 7px;
                    background:#053982;
                    margin:25px auto 35px;
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


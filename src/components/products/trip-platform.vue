<template>
    <div class="trip_platform"> 
        <headerBar/> 
        <div class="headers">
            <div class="min-header">
                <img src="../../assets/images/chuxing/head.png">
                <div class="text">
                    <h3>出行管理平台</h3>
                    <p>
                        博彦物联网出行管理平台，将完成出行协同化，不仅仅是是“人”与“车”的协同，将实现：人、车、场地、系统乃至周边交通的数据、信息、管理，一席话协同作业。
                    </p>
                    <p>                                
                        博彦出行管理平台系统为客户提供更智能、更便捷、更有效的出行、访客等服务。                           
                    </p>
                </div>
            </div>
        </div> 
        <div class="main_content">
            <div class="min_content">
                <div class="row1 clearfix">
                    <div class="name">痛点分析</div>
                    <div class="item_box">
                        <img src="../../assets/images/anfang/one.png" >
                        <h4>停车位紧张</h4>
                        <p>城市里的停车场已经成为一种稀缺资源，巨大的市场规模和停车缺口以及急需解决</p>
                    </div>
                    <div class="item_box">
                        <img src="../../assets/images/anfang/two.png" >
                        <h4>访客身份确认</h4>
                        <p>随着社会经济快速发展，人员流动因此加快，人员身份也更加复杂，访客身份急需认证</p>

                    </div>
                    <div class="item_box">
                        <img src="../../assets/images/anfang/three.png" >
                        <h4>人流控制疏导</h4>
                        <p>人流量密集压力大，滞留人群拥堵，尤其是节假日，疏导客流和控制人流必不可缺</p>
                    </div>
                    <div class="item_box">
                        <img src="../../assets/images/chuxing/four.png" >
                        <h4>出行提示及服务</h4>
                        <p>如何”高效出行“依然是消费者最大的痛点，一部分是缩短出行时间，另一部分就是丰富出行体验</p>
                    </div>             
                </div>
                <div class="row3 clearfix">
                    <div class="name"></div>
                    <div class="items"></div>
                    <div class="items"></div>
                    <div class="items"></div>
                    <div class="items"></div>                              
                </div>
                <div class="row2 clearfix">
                    <div class="name">需求分析</div>
                    <div class="item_box">
                        <div class="img">停车</div>                   
                        <p class="p1">停车位智能分配，按需优化</p>
                    </div>
                    <div class="item_box">
                        <div class="img">访客</div>                     
                        <p>访客邀请、访客登记无纸化、无人化服务，通行无碍，自动限定访问区域</p>
                    </div>
                    <div class="item_box">
                        <div class="img">人流</div>                     
                        <p>人流波动峰谷动态计算均衡资源配置</p>
                    </div>
                     <div class="item_box">
                        <div class="img">出行</div>                     
                        <p>业主出行温馨提示、全方位人性化服务</p>
                    </div>              
                </div>
                         
            </div>          
        </div>
        <div class="second_content">
            <div class="min">
                <div class="title">
                    功能体现
                </div> 
                <el-row :gutter="26" class="function-content">
                    <el-col :span="8">
                        <div class="grid-content bg1">
                            <img src="../../assets/images/chuxing/img1.png">
                            <h3>访客管理</h3>
                            <p>1、远程邀请，信息录入门禁自动识别</p>
                            <p>2、自动登记，无人化无纸化办理</p>
                            <p>3、访客路线轨迹跟踪，限定区域，保障安全</p>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg1">
                            <img src="../../assets/images/chuxing/img2.png">
                            <h3 class="h">停车管理</h3>
                            <p>1、自动识别车牌，自动引导入位</p>
                            <p>2、车位数量与空位多方提示、进出场自动扣费</p>
                            <p>3、访客车辆在线登记，自动放行</p>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg1">
                            <img src="../../assets/images/chuxing/img3.png">
                            <h3>出行服务</h3>
                            <p>1、周边交通路况信息提示</p>
                            <p>2、车辆限行自动管控并推荐出行方式</p>
                            <p>3、网约车出入等待管理，无需路边等候</p>
                        </div>
                    </el-col>   
                                
                </el-row>   
            </div>
        </div>
        <div class="bottom_content">
            <div class="min">
                <div class="title">
                    价值体现
                </div>
                <el-row :gutter="26" class="row-content">
                    <el-col :span="8">
                        <div class="grid-content bg1">
                            <h3>空间资源合理分配</h3>
                            <span class="line"></span>
                            <p>
                              车位空间高效利用，优化性行车路线避免场内拥堵
                            </p>                             
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg1">
                            <h3>内外联通人性服务</h3>
                            <span class="line"></span>
                            <p>综合周边路况信息与交管信息，对用户温馨提示，节省用户时间成本</p>                        
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg1">
                            <h3>云端管理</h3>
                            <span class="line"></span>
                            <p>云平台，无人值守，系统自动处理工单，节省人工提高效率</p>                              
                        </div>
                    </el-col> 
                                                    
                </el-row>
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

}
</script>

<style lang="less" scoped>
.trip_platform {
    .headers{
        background: #F5F5F6;
        width:100%;
        margin-top:78px;
        .min-header{
            width:1200px;
            height: 450px;
            margin:0 auto;
            padding:65px 0;
            img{
                height: 320px;
                width: 517px;
                float: left;
            }
            .text{
                padding:0 50px;
                width: 680px;
                float: left;
                h3{
                    font-size:42px;
                    font-weight:400;
                    color:#1476DA;
                    margin-top:-10px;
                    
                }
                p{
                    margin-top:30px;
                    color:#3F3F3F;
                    font-size:18px;
                    line-height: 34px;
                }
            }
        }
    }
    .main_content{
        height: 650px;
        width: 100%;;
        background: #fff;
        .min_content{
            width: 1200px;
            margin:0 auto;
            height: 100%;
            padding-top:106px;
            .name{
                font-size:36px;
                line-height: 180px;
                color:#2D2D2D;
                float: left;
                margin-right:10px;
                width:144px;
            }
            .row2 {               
                .name{
                  line-height: 128px;  
                }
                .item_box  {
                    height: 128px;
                    p{
                        margin-top:17px;
                    }
                    .p1{
                        margin-top:40px;
                    }
                }
            }
            .row3 {
                margin:27px 0 53px 0;
                .items{                  
                    width: 232px;
                    margin-left:29px;
                    height: 50px;;
                    float:left;
                    background:url(../../assets/images/chuxing/jian.png) no-repeat center center;
                }
                .name{
                    height:50px;;
                }
            }          
            .item_box{
                width:232px;
                height:186px;
                background:rgba(255,255,255,1);
                box-shadow:0px 0px 12px 1px rgba(1,75,166,0.06);
                margin-left:29px;
                position: relative;
                float: left;
                padding: 20px 19px;
                border:1px solid transparent;
                &:hover{
                    border:1px solid #1476DA;
                }
                img{
                    position: absolute;
                    top:0;
                    left:0;
                }
                .img{
                    position: absolute;
                    top:-34px;
                    left:84px;
                    background:url(../../assets/images/chuxing/yuan.png);
                    width: 64px;
                    height: 64px;
                    text-align:center;
                    line-height: 64px;
                    color:#fff;
                    font-size:18px;
                }
                h4{
                    font-size: 20px;
                    color:#0754B7;
                    text-align:center;
                    text-indent:35px;
                    font-weight: 400;
                    margin-bottom:17px;
                }
                p{
                    color:#2D2D2D;
                    font-size:16px;
                    line-height: 27px;

                }
            }
            .title{
                color:#2D2D2D;
                font-size: 48px;
                text-align: center;
                font-weight: 400;
                margin: 100px 0 90px 0;
            }
        }
    }   
    .second_content{
        height: 502px;
        background:#F5F5F6;
        .min{
            width: 1200px;
            margin:0 auto;
            height: 100%;
            padding-top:70px;
            .title{
                color:#2D2D2D;
                font-size: 48px;
                text-align: center;
                font-weight: 400;
                margin: 0 0 50px 0;
            }
            .function-content{
                height:230px;        
                .grid-content{
                    height: 230px;
                    padding:30px 20px;
                    img{
                        display:block;
                        margin:0 auto;
                    }
                    h3{
                        color:#0754B7;
                        font-size:22px;
                        font-weight: 400;
                        margin:15px 0;
                        text-align:center;
                    }
                    .h{
                        text-indent:-14px;
                    }
                    p{
                        color:#2D2D2D;
                        font-size:16px;
                        line-height: 32px;
                        margin-top:5px;
                    }
                    .line{
                        height: 3px;
                        width: 30px;
                        background:#1476DA;
                        display: block;
                        margin:0 auto;
                    }
                }
            }
               
        }
    }
    .bottom_content{
        height: 502px;
        background:#fff;
        .min{
            width: 1200px;
            margin:0 auto;
            height: 100%;
            padding-top:70px;
            .title{
                color:#2D2D2D;
                font-size: 48px;
                text-align: center;
                font-weight: 400;
                margin: 0 0 80px 0;
            }
            .row-content{
                height:175px;        
                .grid-content{
                    height: 175px;
                    padding:30px 20px;
                    background:#fff;
                    box-shadow:0px 0px 12px 1px rgba(1,75,166,0.06);                  
                    h3{
                        color:#3F3F3F;
                        font-size:22px;
                        font-weight: 400;
                        margin-bottom:9px;
                        text-align:center;
                    }
                    p{
                        color:#2D2D2D;
                        font-size:16px;
                        line-height: 32px;
                        margin-top:5px;
                    }
                    .line{
                        height: 3px;
                        width: 30px;
                        background:#1476DA;
                        display: block;
                        margin:0 auto;
                    }
                }
                .bg1:hover{
                    background:#1476DA
                }
                .bg1:hover span{
                    background:#fff;
                }
                .bg1:hover p{
                    color:#fff;
                }
                .bg1:hover h3{
                    color:#fff;
                }
            }
        }
    }
}
</style>

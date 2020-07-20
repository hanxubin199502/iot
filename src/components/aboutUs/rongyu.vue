<template>
    <div class="rongyu">
        <div class="box1">
            <div class="min">        
                <div class="tit"></div>
                <div class="info">
                    <div>
                        <img src="../../assets/images/aboutus/zizhi1.png">
                        <p>CMMI V2.0 ML3</p>

                    </div>
                    <div>
                         <img src="../../assets/images/aboutus/zizhi2.png">
                         <p>ISO 20000</p>
                    </div>
                    <div>
                         <img src="../../assets/images/aboutus/zizhi3.png">
                         <p>ISO 20000</p>
                    </div>
                   <div>
                       <img src="../../assets/images/aboutus/zizhi4.png">
                       <p>ISO 9001</p>

                   </div>
                   <div>
                       <img src="../../assets/images/aboutus/zizhi5.png">
                       <p>ISO 27001</p>

                   </div>
                   
                    
                    
                    
                </div>
                
            </div>
        </div>
        <div class="box2">
            <div class="min">
                <div class="tit"></div>
                <div class="info">
                    <div class="div1">
                        <img src="../../assets/images/aboutus/zizhi5.png" style="width:100%;height:100%">
                        <p>2018-2019中国数字经济与软件服务业最具竞争力产品</p>
                    </div>
                     <div class="div2">
                        <img src="../../assets/images/aboutus/zizhi5.png" style="width:100%;height:100%">
                        <p>2019中国数字生态大会智能建筑方案商50强</p>
                    </div>
                </div>           
            </div>
        </div>
        <div class="box3">
            <div class="min">
                <div class="tit"></div>
                <el-carousel height="420px" class="zscq">
                    <el-carousel-item>
                        <div class="item">
                            <img src="../../assets/images/aboutus/zscq1.png">
                            <p>博彦科技智能园区社区费用服务平台V1.0-1004股份</p>
                        </div>
                        <div class="item">
                            <img src="../../assets/images/aboutus/zscq2.png">
                            <p>
                               博彦物联网电力管理平台V1.0-1004股份 
                            </p>
                        </div>
                        <div class="item">
                            <img src="../../assets/images/aboutus/zscq3.png">
                            <p>博彦物联网电梯管理平台V1.0-1004股份</p>
                        </div>
                        <div class="item">
                            <img src="../../assets/images/aboutus/zscq4.png">
                            <p>博彦物联网访客管理系统V1.0</p>
                        </div>
                        <div class="item">
                            <img src="../../assets/images/aboutus/zscq5.png">
                            <p>博彦物联网水表管理平台V1.0-1004股份</p>
                        </div>
                            
                    </el-carousel-item>
                    <el-carousel-item>
                        
                        <div class="item">
                            <img src="../../assets/images/aboutus/zscq6.png">
                            <p>
                               博彦物联网锁群管理系统V1.0-1004股份
                            </p>
                        </div>
                        <div class="item">
                            <img src="../../assets/images/aboutus/zscq7.png">
                            <p>博彦物联网停车管理平台V1.0-1004股份</p>
                        </div>
                        <div class="item">
                            <img src="../../assets/images/aboutus/zscq8.png">
                            <p>博彦物联网运营管理平台1.0-股份</p>
                        </div>
                        <div class="item">
                            <img src="../../assets/images/aboutus/zscq9.png">
                            <p>博彦物联网智能灯具管理平台V1.0-1004股份</p>
                        </div>  
                        <div class="item">
                            <img src="../../assets/images/aboutus/zscq10.png">
                            <p>博彦物联网智能空调管理系统V1.0-1004股份</p>
                        </div>                         
                    </el-carousel-item>
                    <el-carousel-item>
                        <div class="item">
                            <img src="../../assets/images/aboutus/zscq11.png">
                            <p>博彦物联网租户管理平台V1.0</p>
                        </div>
                        <div class="item">
                            <img src="../../assets/images/aboutus/zscq12.png">
                            <p>
                              超哥APP
                            </p>
                        </div>
                                               
                    </el-carousel-item>
                                       
                </el-carousel>
            </div>
        </div>
    </div>
</template>
<script>

export default {

}
</script>
<style lang="less">
.rongyu{
    .zscq{
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
.rongyu{
     .box1{
                height: 588px;
                padding-top:72px;
                .tit{          
                    height: 40px;
                    width:194px;
                    margin:0 auto;
                    background:url(../../assets/images/aboutus/biaoti2-1.png);
                    margin-bottom:60px;

                }
               .info{
                   >div{
                       height: 340px;
                       float: left;
                       margin-right:18px;
                       p{
                           text-align: center;
                           font-size: 16px;
                           margin-top:5px;
                       }

                   }
                    div:last-child{
                           margin-right: 0;
                       }
                //    img{
                //        display: block;
                //        float: left;
                //        margin-right:14px;
                      
                //    }

               }
            }
            .box2{
                height: 585px;
                background: #F7F8FA;
                padding-top:75px;
                .tit{          
                    height: 40px;
                    width:192px;
                    margin:0 auto;
                    background:url(../../assets/images/aboutus/biaoti2-2.png);
                    margin-bottom:70px;

                }
                .info{
                    width: 100%;
                    >div{
                        height: 282px;
                        width:572px;
                        float: left;
                        position: relative;
                        p{
                            position: absolute;
                            bottom:-32px;
                            left:0;
                            text-align:center;
                            font-size: 16px;
                            color:#000;
                            width:100%;
                        }

                    }
                     .div2{
                       
                        margin-left:56px;
                   

                    }
                   
                    
                }

            }
            .box3{
                height: 685px;               
                padding-top:72px;
                .tit{          
                    height: 40px;
                    width:194px;
                    margin:0 auto;
                    background:url(../../assets/images/aboutus/biaoti3.png);
                    margin-bottom:70px;

                }
                .zscq{
                    .item{
                       width:234px;
                       height:380px;
                       float: left;
                       margin-right:6px;
                       img{
                            width:234px;
                            height:316px;
                       }
                       p{
                            line-height:26px;
                            font-size:16px;
                            font-family:MicrosoftYaHei;
                            color:rgba(0,0,0,1);
                            letter-spacing:1px;
                            padding:6px 15px ;
                            text-align: center;
                       }
                    }
                    .item:last-child{
                        margin-right: 0;
                    }
                }
            }
}

</style>

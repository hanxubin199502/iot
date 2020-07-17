<template>
    <div class="rongyu">
        <div class="box1">
            <div class="min">        
                <div class="tit"></div>
                <div class="info">
                    <img src="../../assets/images/aboutus/zizhi1.png">
                     <img src="../../assets/images/aboutus/zizhi2.png">
                      <img src="../../assets/images/aboutus/zizhi3.png">
                       <img src="../../assets/images/aboutus/zizhi4.png">
                        <img src="../../assets/images/aboutus/zizhi5.png">
                    
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
               

            </div>

        </div>

    </div>
</template>
<script>

export default {

}
</script>
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
                   img{
                       display: block;
                       float: left;
                       margin-right:14px;
                       img:last-child{
                           margin-right: 0;
                       }
                   }

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
                height: 523px;
                
                padding-top:72px;
                .tit{          
                    height: 40px;
                    width:194px;
                    margin:0 auto;
                    background:url(../../assets/images/aboutus/biaoti3.png);
                    margin-bottom:70px;

                }
                .info{
                    >div{
                        height:214px ;
                        width: 358px;
                        margin-right:63px;
                        float: left;
                        padding-top:104px;
                        p{
                            padding:22px 38px 0 24px;
                            font-size: 16px;
                            color:#333;
                            line-height: 30px;
                            text-align:center;
                        }
                    }
                    .div1{
                        background:url(../../assets/images/aboutus/1.png);
                    }
                    .div2{
                        background:url(../../assets/images/aboutus/2.png);
                    }
                    .div3{
                        background:url(../../assets/images/aboutus/3.png);
                        margin:0;
                        padding-right:10px;
                    }
                }
            }
}

</style>

<template>
    <div class="footer">
        <div class="min-footer">
            <div class="div1">
                <div class="pic1"><img src="https://www.beyondsoft.com/images/erweima_50.png" title="公众号关注二维码"></div>
                <div class="pic2"><img src="../../assets/images/er2.png" title="APP下载二维码"></div>
            </div>
            <div class="div2">
                <p class="p1">产品与服务</p>
                <p class="p2">设备接入平台</p>
                <p class="p2">场景应用平台</p>
                <p class="p2">开发平台</p>
                <p class="p2">数据应用平台</p>               
            </div>
            <div class="div3">
                <p class="p1">解决方案</p>
                <p class="p2">智慧楼宇解决方案</p>
                <p class="p2">智慧园区解决方案</p>                  
                <p class="p2">智慧场馆解决方案</p>
                <p class="p2">智慧地产解决方案</p>
                <p class="p2">智慧商业解决方案</p>
                <p class="p2">智慧城市解决方案</p>             
            </div>
            <div class="div4">
                <p class="p1">关于我们</p>
                <p class="p2">关于博彦科技</p>           
            </div>
            <div class="div5">
                <p class="p1">咨询电话</p>
                <p class="p2">400 000 6282</p>                                 
            </div>
        </div>
        <div class="footer-bottom">@2019 博彦科技 博彦物联   用户协议   隐私权政策   服务状态 </div>           
    </div>
</template>
<script>
export default {
    data(){
        return{
            // appSrc:'https://www.beyondsoft.com/images/erweima_50.png'
        }
    },
    methods:{

    }
}
</script>
<style lang="less" scoped>
      .footer{
            height: 328px;
            background-color:#363636;
            position: relative;
            .footer-bottom{
                width: 100%;
                height: 38px;
                line-height:38px;
                color:#939793;
                text-align: center;
                position: absolute;;
                bottom:0;
                left:0;
                background-color: #252525;
            }
            .min-footer{
                width: 1200px;
                margin:0 auto;                
                .div1{
                    float: left;
                    width: 88px;
                    margin-right:150px;
                    padding-top:12px;
                    .pic1{
                        width:88px;
                        height: 85px;
                        margin:30px 0;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                        // background-color: #4dafde;
                    }
                    .pic2{
                        width:88px;
                        height: 85px;
                        margin:30px 0;
                        padding:4px;
                        background-color: #fff;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
                .div2,.div3,.div4,.div5{
                    .p1{
                        color:#fff;
                        font-size:14px;
                        margin-bottom:15px;
                    }
                    .p2{
                        margin-bottom:15px;
                        color:#939793
                    }
                }
                .div2{
                    float: left;
                    padding-top:50px;
                    width: 120px;
                    margin-right: 140px;
                  
                }
                .div3{
                    float: left;
                    padding-top:50px;
                    width: 120px;
                    margin-right: 140px;
                }
                .div4{
                    float: left;
                    padding-top:50px;
                    width: 120px;
                    margin-right: 140px;
                }
                .div5{
                    float: left;
                    padding-top:50px;
                    width: 120px;
                }
            }
          
        }
</style>



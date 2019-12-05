<template>
    <div class="footer">
        <div class="min-footer">
            <div class="div1">
                <div class="pic1"><img src="https://www.beyondsoft.com/images/erweima_50.png" title="公众号关注二维码">
                公众号</div>
                <div class="pic2"><img src="../../assets/images/QRcode.png" title="APP下载二维码">
                APP下载</div>
            </div>
            <div class="div2">
                    <p class="p1" style="text-align:center;">产品与服务</p>
                <div style="float:left;">
                    <p class="p2">建筑管理平台</p>
                    <p class="p2" @click="$router.push('/asset-platform?showflag')">资产管理平台</p>
                    <p class="p2">物业管理平台</p>
                    <p class="p2" @click="$router.push('/energy-platform?showflag')">能源管理平台</p>
                    <p class="p2" @click="$router.push('/loan-platform?showflag')">租赁管理平台</p>
                    <p class="p2" @click="$router.push('/trip-platform?showflag')">出行管理平台</p>
                </div>
                <div style="float:left;margin-left:40px;">
                    <p class="p2" @click="$router.push('/security-platform?showflag')">安防管理平台</p>
                    <p class="p2" @click="$router.push('/enterprise-platform?showflag')">企业管理平台</p>
                    <p class="p2">商圈管理平台</p>
                    <p class="p2">应急管理平台</p>
                    <p class="p2">数据管理平台</p>
                    <p class="p2">场景管理平台</p>

                </div>
            </div>
            <div class="div3">
                <p class="p1">解决方案</p> 
                <p class="p2" @click="$router.push('/smart-building')">智慧楼宇解决方案</p>
                <p class="p2" @click="$router.push('/economic-park')">智慧园区解决方案</p>               
                <p class="p2" @click="$router.push('/smart-city')">智慧城市解决方案</p> 
                <p class="p2" @click="$router.push('/smart-stadium')">智慧场馆解决方案</p>         
                <p class="p2" @click="$router.push('/smart-commerce')">智慧商业解决方案</p>         
                <!-- <p class="p2" v-for="(item,index) in solutionList" :key="index" @click="changeTab(2,item.id)">{{item.solutionName}}</p> -->
            </div>
            <div class="div3" v-if="solutionListNum > 1">
                <p class="p1" style="text-indent:-99999px;">1</p>
                <p class="p2"  v-for="(item,index) in solutionList[1]" :key="index" @click="changeTab(2,item.id)">{{item.solutionName}}</p>
            </div>
            <!-- <div :class="solutionListNum==2?'div3':'div2'">
                <p class="p1">关于我们</p>
                <p class="p2" @click="aboutUs">关于博彦科技</p>           
            </div> -->
            <div class="div3">
                <p class="p1">联系我们</p>
                <p class="p2">400 000 6282</p>                                 
                <p class="p2">159 1046 2778</p>                                 
                <p class="p2">bys_Iot_yy@beyondsoft.com</p>                                 
            </div>
        </div>
        <div class="footer-bottom">@2019 博彦科技 博彦物联   用户协议   隐私权政策   服务状态 </div>           
    </div>
</template>
<script>
export default {
    data(){
        return{
    prodListNum:0,
    productList: [], //产品
    solutionListNum:0,
    solutionList: [], //解决方案
        }
    },
  mounted() {
     
        this.$bus.$off("productList")
        this.$bus.$on("productList",i=> {
            console.log(i)
            this.productList = i
            this.prodListNum = i.length
        })
        this.$bus.$off("solutionList")
        this.$bus.$on("solutionList",itemList=> {
            // this.solutionListNum = itemList.length
            this.solutionList = itemList
            //   this.solutionList[0].unshift({
            //       'solutionId':'0',
            //       'solutionName':'智慧楼宇解决方案'
            //   })
            // console.log(this.solutionList)
            // console.log(this.solutionListNum)
        })
  },
    methods:{
        // 页面跳转
        changeTab(num, id) {
            if (num ==1) {
                 this.$router.push({
            path: "/products"+id})
            }
            else {
                this.$router.push({
                path: "/solutions"+id,
              });
            }
        },
        // 关于我们
        aboutUs() {
            window.open("https://www.beyondsoft.com/about/index.html");
        }
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
                    width: 220px;
                    margin-right:110px;
                    padding-top:60px;
                    .pic1{
                        text-align: center;
                        color: #939793;
                        float: left;
                        width:88px;
                        height: 85px;
                        margin-top: 40px;
                        img{
                            margin-bottom: 30px;
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .pic2{
                        text-align: center;
                        color: #939793;
                        float: left;
                        width:88px;
                        height: 85px;
                        margin-top: 40px;
                        margin-left: 40px;
                        padding:4px;
                        background-color: #fff;
                        img{
                            margin-bottom: 30px;
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
                .div2,.div3{
                    float: left;
                    padding-top:50px;
                    width: 200px;
                    height: 320px;
                    overflow:hidden; 
                    margin-right: 110px;
                    &:last-child {
                        margin-right: 0;
                    }
                    .p1{
                        color:#fff;
                        font-size:14px;
                        margin-bottom:15px;
                    }
                    .p2{
                          cursor: pointer;

                        margin-bottom:15px;
                        color:#939793;
                    &:hover {
                        color: #228ee8;
                    }
                   }
                }
                .div3 {
                    width: 160px;
                    margin-right: 110px;
                }
            }
          
        }
</style>



<template>
    <div class="footer">
        <div class="min-footer">
            <div class="div1">
                <div class="pic1"><img src="https://www.beyondsoft.com/images/erweima_50.png" title="公众号关注二维码"></div>
                <div class="pic2"><img src="../../assets/images/er2.png" title="APP下载二维码"></div>
            </div>
            <div :class="solutionListNum==2?'div3':'div2'">
                <p class="p1">产品与服务</p>
                <p class="p2" v-for="(item,index) in productList[0]" :key="index" @click="changeTab(1,item.id)">{{item.productName}}</p>
            </div>
            <div :class="solutionListNum==2?'div3':'div2'">
                <p class="p1">解决方案</p> 
                <p class="p2">智慧楼宇解决方案</p> 
                <p class="p2">智慧城市解决方案</p> 
                <p class="p2">智慧场馆解决方案</p>         
                <p class="p2" v-for="(item,index) in solutionList" :key="index" @click="changeTab(2,item.id)">{{item.solutionName}}</p>
            </div>
            <div class="div3" v-if="solutionListNum > 1">
                <p class="p1" style="text-indent:-99999px;">1</p>
                <p class="p2"  v-for="(item,index) in solutionList[1]" :key="index" @click="changeTab(2,item.id)">{{item.solutionName}}</p>
            </div>
            <div :class="solutionListNum==2?'div3':'div2'">
                <p class="p1">关于我们</p>
                <p class="p2" @click="aboutUs">关于博彦科技</p>           
            </div>
            <div :class="solutionListNum==2?'div3':'div2'">
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
                .div2,.div3{
                    float: left;
                    padding-top:50px;
                    width: 160px;
                    height: 320px;
                    overflow:hidden; 
                    margin-right: 90px;
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
                    margin-right: 40px;
                }
            }
          
        }
</style>



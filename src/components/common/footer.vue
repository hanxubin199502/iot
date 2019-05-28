<template>
    <div class="footer">
        <div class="min-footer">
            <div class="div1">
                <div class="pic1"><img src="https://www.beyondsoft.com/images/erweima_50.png" title="公众号关注二维码"></div>
                <div class="pic2"><img src="../../assets/images/er.png" title="APP下载二维码"></div>
            </div>
            <div class="div2">
                <p class="p1">产品与服务</p>
                <p class="p2" v-for="(item,index) in productList" :key="index" @click="changeTab(1,item.id)">{{item.productName}}</p>
                <!-- <p class="p2">场景应用平台</p>
                <p class="p2">开发平台</p>
                <p class="p2">数据应用平台</p>                -->
            </div>
            <div class="div3">
                <p class="p1">解决方案</p>
                <p class="p2"  v-for="(item,index) in solutionList" :key="index" @click="changeTab(2,item.id)">{{item.solutionName}}</p>
                <!-- <p class="p2">智慧园区解决方案</p>                  
                <p class="p2">智慧场馆解决方案</p>
                <p class="p2">智慧地产解决方案</p>
                <p class="p2">智慧商业解决方案</p>
                <p class="p2">智慧城市解决方案</p>              -->
            </div>
            <div class="div4">
                <p class="p1" @click="aboutUs">关于我们</p>
                <p class="p2" @click="aboutUs">关于博彦科技</p>           
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
    productList: [], //产品
    solutionList: [], //解决方案
        }
    },
      created() {
    this.getProduction();
    this.getSolution();
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
         // 获取产品列表
    getProduction() {
      let params = {
        productStatus: 1,
        productContextType:1
      };
      this.$http
        .get(
          this.$api.getApiAddress(
            "/operationplatformmgn/o/saas/platform-productContext/query_productContext_list",
            "API_ROOT"
          ),
          params
        )
        .then(res => {
          this.productList = res.data;
        });
    },
    // 获取解决方案列表
    getSolution() {
      let params = {
        solutionType: 1,
        solutionStatus: 1
      };
      this.$http
        .get(
          this.$api.getApiAddress(
            "/operationplatformmgn/o/saas/platform-solution/query_solution_list",
            "API_ROOT"
          ),
          params
        )
        .then(res => {
          this.solutionList = res.data;
        });
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
                        // background-color: #4dafde;
                    }
                    .pic2{
                        width:88px;
                        height: 85px;
                        margin:30px 0;
                        padding:5px;
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
                          cursor: pointer;

                        margin-bottom:15px;
                        color:#939793;
                    &:hover {
                        color: #228ee8;
                    }
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



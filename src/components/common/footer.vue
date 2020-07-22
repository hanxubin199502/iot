<template>
  <div class="footer">
    <div class="min-footer clearfix">
      <div class="left">
        <div class="pic1">
          <img
            src="https://www.beyondsoft.com/images/erweima_50.png"
            title="公众号二维码"
          />
          <p>公众号</p>
          
        </div>
        <div class="pic1">
          <img src="../../assets/images/QRcode.png" title="APP下载二维码" />
          <p>博彦物联APP</p>
          
        </div>
        <div class="pic2">
          <img src="www.bysiot.com/qrcode/jizhi.png" title="超哥APP" />
          <p>超哥APP</p>
          
        </div>
      </div>
      <div class="right">
          <div class="div1">
              <p class="p1">关于我们</p>
              <p @click="$router.push('/aboutUs?type=1')">企业简介</p>
              <p @click="$router.push('/aboutUs?type=2')">荣誉资质</p>
              <p @click="$router.push('/aboutUs?type=3')">合作伙伴</p>
          </div>
          <div class="div2">
              <p class="p1">产品与方案</p>
              <p @click="$router.push('/solutions?type=1')">场景化</p>
              <p @click="$router.push('/solutions?type=2')">功能服务</p>
              <p @click="$router.push('/solutions?type=3')">硬件</p>
              

          </div>
           <div class="div3">
              <p class="p1">新闻中心</p>
              <p @click="$router.push('/newsCenter?newsType=1')">公司动态</p>
              <p @click="$router.push('/newsCenter?newsType=2')">行业资讯</p>
            
          </div>
           <div class="div4">
              <p class="p1">案例分析</p>
              <p @click="$router.push('/caseAnalysis')">案例</p>
            
          </div>
           <div class="div5">
              <p class="p1">联系我们</p>
              <p @click="$router.push('/contactUs')">联系方式</p>
              
          </div>
           <div class="div6">
              <p class="p1">物联平台入口</p>
              <p @click="$router.push('/platformEntrance')">BY OS</p>
              <p @click="$router.push('/platformEntrance')">设备接入平台</p>
            
          </div>

      </div>
  
    </div>
    <div class="footer-bottom">
      @2019 博彦科技 博彦物联 用户协议 隐私权政策 服务状态
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      prodListNum: 0,
      productList: [], //产品
      solutionListNum: 0,
      solutionList: [], //解决方案
    };
  },
  mounted() {
    this.$bus.$off("productList");
    this.$bus.$on("productList", (i) => {
      console.log(i);
      this.productList = i;
      this.prodListNum = i.length;
    });
    this.$bus.$off("solutionList");
    this.$bus.$on("solutionList", (itemList) => {
      // this.solutionListNum = itemList.length
      this.solutionList = itemList;
      //   this.solutionList[0].unshift({
      //       'solutionId':'0',
      //       'solutionName':'智慧楼宇解决方案'
      //   })
      // console.log(this.solutionList)
      // console.log(this.solutionListNum)
    });
  },
  methods: {
    // 页面跳转
    changeTab(num, id) {
      if (num == 1) {
        this.$router.push({
          path: "/products" + id,
        });
      } else {
        this.$router.push({
          path: "/solutions" + id,
        });
      }
    },
    // 关于我们
    aboutUs() {
      window.open("https://www.beyondsoft.com/about/index.html");
    },
  },
};
</script>
<style lang="less" scoped>
.footer {
  height: 328px;
  background-color: #363636;
  position: relative;
  z-index: 1 !important;
  .footer-bottom {
    width: 100%;
    height: 38px;
    line-height: 38px;
    color: #939793;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #252525;
  }
  .min-footer {
    width: 1200px;
    margin: 0 auto;
    .left {
      float: left;
      width: 480px;
     
      padding-top: 53px;
      .pic1 {
        text-align: center;
        color: #E8E9E9;
        float: left;
        font-size: 16px;
        margin-right:43px;
        img {
          margin-bottom: 10px;
      
          width: 130px;
            height: 130px;
        }
      }
      .pic2 {
        text-align: center;
        color: #E8E9E9;
        float: left;
        font-size: 16px;
        img {
          margin-bottom: 10px;
       
          width: 130px;
            height: 130px;
        }
      }
    }
    .right{
        width:calc(100% - 480px);
        float: right;
        padding: 53px 0 0 80px;
        
        >div{
            float: left;
            margin-right:39px;
            p{
                color:#E8E9E9;
                font-size: 14px;
                margin-top:20px;
                cursor: pointer;
            }
            .p1{
                cursor:default ;
                margin-top:0;
                font-size: 16px;
                color:#fff;
                padding-bottom:10px;
                border-bottom:1px solid #fff;
            }

        }
        .div1,.div3,.div4,.div5{
            width:64px;        
        }
        .div2{
            width:80px;
        }
      
        .div6{
            margin-right:0;
            width:100px;  
        }
    }
  }
}
</style>

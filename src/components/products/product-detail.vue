<template>
  <div class="product_detail">
    <headerBar/>
    <div
      class="header_background"
      :style="'background:url('+productList.imagesPath+') center center'"
    >
      <div class="product_title center clearfix">
        <div class="product_name">{{productList.productName}}</div>
        <div class="product_brief">{{productList.productAbs}}</div>
      </div>
    </div>
    <div class="content center">
      <!-- <div class="product_content_name">{{productList.productName}}</div> -->
      <div class="product_content" v-html="productList.productContext"></div>
    </div>
    <footerBar/>
  </div>
</template>


<script>
import footerBar from "../common/footer";
import headerBar from "../common/header";
export default {
  components: {
    footerBar,
    headerBar
  },
  data() {
    return {
      userInfo: {},
      productList: [],
      id: ''
    };
  },
  created() {
    this.getProductDetail();
    let url = location.href;
    if (url.indexOf("bysiot") > 0) {
      document.domain = "bysiot.com";
      this.userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    }
  },
  watch: {
    $route() {
      this.id = this.$route.params.id;
    },
    id() {
      this.getProductDetail();
    }
  },
  mounted() {
    // this.routerUrl = location.hash
  },
  beforeDestroy() {
    // window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    //获取产品详情
    getProductDetail() {
    //   console.log("hahahahaha");
      let params = {
        productContextId: this.$route.params.id
      };
      this.$http
        .get(
          this.$api.getApiAddress(
            "operationplatformmgn/o/saas/platform-productContext/query_productContext",
            "API_ROOT"
          ),
          params
        )
        .then(res => {
          this.productList = res.data;
          // console.log(this.solutionList)
        });
    }
  }
};
</script>
<style lang="less" scoped>
.product_detail {
  .header_background {
    // position: relative;
    width: 100%;
    height: 560px;
    // background: url(../../assets/images/banner-bgi-product.png) center center;
    .product_title {
      position: relative;
      color: #ffffff;
      .product_name {
        position: absolute;
        top: 170px;
        left: 0;
        font-size: 44px;
      }
      .product_brief {
        position: absolute;
        width: 600px;
        top: 255px;
        font-size: 18px;
      }
    }
  }
  .content {
    padding: 15px 0;
    color: #3f3f3f;
    .product_content_name {
      margin-top: 50px;
      width: 100%;
      text-align: center;
      font-size: 30px;
    }
    .product_content {
      margin-top: 35px;
      font-size: 20px;
     
    }
  }
}
</style>
<style lang="less">
.product_detail {
  .product_content {
    img{
           max-width: 1200px !important;
         }
  }
}
</style>


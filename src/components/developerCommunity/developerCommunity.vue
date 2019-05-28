<template>
    <div class="developer_community"> 
        <headerBar/> 
        <div class="header_background">
          暂未开放，欢迎您持续关注！
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
    data(){
        return{
            userInfo:{},
            productList: []
        }
    },
    created(){
        this.getProductDetail   ()
        let url = location.href;
        if(url.indexOf('bysiot')>0){
            document.domain = 'bysiot.com'
            this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
             console.log(this.userInfo)
        }
        
        console.log(this.userInfo)
    },
    mounted(){     
        // window.addEventListener('scroll',this.handleScroll)
    },
    beforeDestroy() {
            // window.removeEventListener('scroll', this.handleScroll);
        },
    
    methods:{
        //获取产品详情 
        getProductDetail () {
            let params = {
        productContextId: this.$route.query.productContextId
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
    },

}
</script>
<style lang="less" scoped>
.developer_community {
    .header_background {
           width: 100%;
           height: 500px;
           text-align: center;
           line-height: 600px;
           font-size: 22px;
                }        
}
</style>

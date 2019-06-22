<template>
    <div class="solution_detail"> 
        <headerBar/> 
        <div class="header_background" :style="'background:url('+solutionList.imagesPath+') center center'">
            <div class="solution_title center clearfix">
                <div class="solution_name">
                    {{solutionList.solutionName}}
                </div>
                <div class="solution_brief">
                    {{solutionList.solutionAbs}} </div>
            </div>
        </div> 
        <div class="content center">
                
                       <!-- <div class="solution_content_name "> {{solutionList.solutionName}} </div> -->
                       <div class="solution_content" v-html="solutionList.solutionContext">
                      
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
    data(){
        return{
            userInfo:{},
            solutionList: [],
            id: ''
        }
    },
    created(){
        this.getsolutionDetail   ()
        let url = location.href;
        if(url.indexOf('bysiot')>0){
            document.domain = 'bysiot.com'
            this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
             console.log(this.userInfo)
        }
        
        console.log(this.userInfo)
    },
     watch: {
    $route() {
      this.id = this.$route.params.id;
    },
    id() {
      this.getsolutionDetail();
    }
  },
    mounted(){     
        // window.addEventListener('scroll',this.handleScroll)
    },
    beforeDestroy() {
            // window.removeEventListener('scroll', this.handleScroll);
        },
    
    methods:{
        //获取解决详情 
        getsolutionDetail () {
            let params = {
        solutionId: this.$route.params.id
      };
      this.$http
        .get(
          this.$api.getApiAddress(
            "operationplatformmgn/o/saas/platform-solution/query_solution",
            "API_ROOT"
          ),
          params
        )
        .then(res => {
          this.solutionList = res.data;
          // console.log(this.solutionList)
        });
        }
    },

}
</script>
<style lang="less" scoped>
.solution_detail {
    .header_background {
            // position: relative;
            width:100%;
            height:560px;
            background: url(../../assets/images/banner-bgi-solution.png) center center;
            .solution_title {
            position: relative;
            color: #FFFFFF;
                .solution_name {
                    position: absolute;
                    top: 170px;
                    left: 0;
                    font-size: 44px;
                }
                .solution_brief {
                    position: absolute;
                    width: 600px;
                    top: 255px;
                    font-size: 18px;
                }
                
            }

    }
        .content {
                    padding:  15px 0;
                    color: #3F3F3F;
                    .solution_content_name {
                        margin-top: 50px;
                        width: 100%;
                        text-align: center;
                        font-size: 30px;
                    }
                    .solution_content {
                        margin-top: 35px;
                        font-size: 20px;
                        // img {
                        //     width: 1200px;
                        // }
                    }
                }        
}
</style>
<style lang="less">
.solution_detail {
  .solution_content {
    img{
           max-width: 1200px !important;
         }
  }
}
</style>

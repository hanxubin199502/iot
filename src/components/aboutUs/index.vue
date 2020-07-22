<template>
  <div class="about_us">
      <headerBar />
      <div class="banner">
          <h4>关于我们
              <span></span>
          </h4>

      </div>
      <div class="main">
        <div class="daohang">
            <div class="min">
                <span :class="{'active':act==1}" @click="changeTab(1)">企业简介</span>
                <span :class="{'active':act==2}" @click="changeTab(2)">荣誉资质</span>
                <span :class="{'active':act==3}"  @click="changeTab(3)">合作伙伴</span>           
            </div>
        </div>
        <qiye v-show="act==1" />
        <rongyu v-show="act==2" />
        <hezuo v-show="act==3" />
        

      </div>
       <footerBar />
   
  </div>
</template>
<script>
import footerBar from "../common/footer";
import headerBar from "../common/header";
import qiye from "./qiye";
import rongyu from "./rongyu";
import hezuo from "./hezuo";
export default {
  components: {
    footerBar,
    headerBar,
    qiye,
    rongyu,
    hezuo
  },

  data() {
    return {
        act:1
   
    };
  },
  created() {
      this.act=this.$route.query.type || 1
  
  },
  methods: {
      changeTab(n){
          this.act=n
      }
  
   
  },
};
</script>
<style lang="less" scoped>
    .about_us{
        .min {
            width: 1200px;
            margin: 0 auto;
        }
        .banner{
            height: 444px;
            width: 100%;
            background:url(../../assets/images/aboutus/banner.png) center center;
            padding-top:180px;
            h4{
                width:233px;
                font-size: 50px;
                color:#fff;
               margin:0 auto;
                font-weight: normal;
                letter-spacing:8px;
                position: relative;
                span{
                    position: absolute;
                    left:65px;
                    bottom:-20px;
                    width: 95px;
                    height: 3px;
                    background: #fff;            
                }

            }
        }
        .main{
            .daohang{
                height: 56px;
                line-height: 56px;
                background: #F3F6FC;
                
                .min{
                    padding-left:174px;
                    span{
                        margin-right:336px;
                        color:#333;
                        font-size: 16px;
                        cursor: pointer;
                        float:left;
                        height: 56px;
                        
                    }
                    .active{
                        color:#1A66FF;
                        border-bottom:2px solid #1A66FF;
                    }
                    span:last-child{
                        margin:0;
                    }
                }
            }
           
        }
    }
</style>

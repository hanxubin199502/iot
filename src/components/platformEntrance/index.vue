<template>
  <div class="entrance">
    
    <headerBar />
      <div class="banner">
          <h4>物联平台入口
              <span></span>
          </h4>

      </div>
      <div class="main">
         
              <div class="box1">
                  <div class="tit"></div>
                 

              </div>
           

      </div>
      <footerBar/>
  </div>
</template>
<script>
import footerBar from "../common/footer";
import headerBar from "../common/header1";

export default {
  components: {
    footerBar,
    headerBar,
  
  },
  data() {
    return {
   
    };
  },
 
  methods: {
  
  },
};
</script>
<style lang="less" scoped>
    .entrance{
        .min {
            width: 1200px;
            margin: 0 auto;
        }
        .banner{
            height: 444px;
            width: 100%;
            background:url(../../assets/images/contactus/banner.png) center center;
            padding-top:180px;
            h4{
                width:380px;
                font-size: 50px;
                color:#fff;
                margin:0 auto;
                font-weight: normal;
                letter-spacing:8px;
                position: relative;
                span{
                    position: absolute;
                    left:120px;
                    bottom:-20px;
                    width: 95px;
                    height: 3px;
                    background: #fff;            
                }

            }
        }
        .main{
            .box1{
                width: 1200px;
                margin: 0 auto;
                padding-top:70px;
                height: 874px;
                .tit{
                    height: 80px;
                    width:192px;
                    margin:0 auto;
                    background:url(../../assets/images/contactus/biaoti.png);
                    margin-bottom:30px;
                }
                img{
                    width: 1200px;;
                }
            }
            .box2{
                height: 530px;
                padding-top:83px;
                .left,.right{
                    height: 365px;
                    float: left;
                    width:50%;
                    padding-top:10px;
                    h4{
                        font-size: 28px;
                        color:#000;
                        border-left:4px solid #1A66FF;
                        padding-left:12px;
                        font-weight: normal;
                    }
                    span{
                        font-size: 18px;
                        color:#666666;
                        display: block;
                        margin-top:30px;

                    }
                    .last{
                        margin-top:62px;
                    }
                    p{
                        font-size: 18px;
                        color:#333;
                        margin-top:10px;
                    }
                }
                .right{
                    border-left:1px solid #D6D9DC;
                    padding-left:150px;
                }

            }
        }

    }
</style>

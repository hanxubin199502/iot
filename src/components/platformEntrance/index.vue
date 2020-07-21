<template>
  <div class="entrance">
    
    <headerBar />
      <div class="banner">
          <h4>物联平台入口
              <span></span>
          </h4>

      </div>
      <div class="main">
         
              <div class="box1 min">
                  <div class="tit"></div>
                  <div>
                      <div class="left">
                          <h4>BY OS <span></span></h4>
                          <p>
                              博彦物联旗下的子产品，以智慧空间操作系统的产品形态服务于所有建筑空间场景。
                          </p>
                      </div>
                       <div class="right">
                           <h4>物联网设备接入平台 <span></span></h4>
                           <p>提供亿量级多协议、多平台设备的长连接接入及安全认证能力。</p>
                       </div>
                  </div>
                 

              </div>
              <div class="enter min">
                  <span @click="jump">点击进入物联网平台</span>
                  <img src="../../assets/images/contactus/jiantou.png" alt="">

              </div>
           

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
    headerBar,
  
  },
  data() {
    return {
   
    };
  },
 
  methods: {
      jump(){
          window.open('http://portal.bysiot.com')
      }
  
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
            background:url(../../assets/images/contactus/banner1.png) center center;
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
            width:100%;
            .box1{
               
                padding-top:70px;
                height: 440px;
                .tit{
                    height: 80px;
                    width:192px;
                    margin:0 auto;
                    background:url(../../assets/images/contactus/biaoti2.png);
                    margin-bottom:30px;
                }
                .left,.right{
                    width:595px;
                    height: 266px;
                    float: left;
                    padding-top:40px;
                    padding-left:54px;
                    h4{
                        color:#1A66FF;
                        font-size: 28px;
                        position: relative;
                        font-weight: normal;
                        span{
                            width:98px;
                            height:3px;
                            background:rgba(67,127,249,1);
                            position: absolute;
                            left:0;
                            bottom:-16px;
                           

                        }
                    }
                    p{
                        margin-top:45px;
                        color:#333;
                        font-size: 18px;
                        line-height: 34px;
                        padding-right:130px;
                        letter-spacing: 2px;;
                    }

                }
                .left{
                     background:url(../../assets/images/contactus/bg1.png);
                    //  margin-right:20px;
                }
                .right{
                    float: right;
                     background:url(../../assets/images/contactus/bg2.png);
                }
            }
            .enter{
                margin:52px auto 120px;
                color:#1A66FF;
                font-size: 20px;
                text-align: right;
                text-decoration:underline;
                span{
                    cursor: pointer;
                }

            }
            
        }

    }
</style>

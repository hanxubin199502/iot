<template>
  <div class="contactUs">
    
    <headerBar />
        <div class="banner">
            <h4>联系我们
                <span></span>
            </h4>

        </div>
        <div class="main">      
            <div class="box1">
                <div class="tit"></div>
                <div>
                    <img src="../../assets/images/contactus/ditu.png">
                </div>
            </div>
            <div class="box2 min">
                
                <div class="left">
                    <h4>华北区</h4>
                    <span>地址：</span>
                    <p>北京市海淀区西北旺东路10号院东区7号楼博彦科技大厦</p>
                    <span>电话：</span>
                    <p>400 000 6282</p>
                    <p>159 1046 2778</p>
                    <span>邮箱：</span>
                    <p>bys_Iot_yy@beyondsoft.com</p>
                </div>
                <div class="right">
                    <h4>华东区</h4>
                    <span>地址：</span>
                    <p>上海市浦东新区学林路36弄11号楼</p>
                    <span>电话：</span>
                    <p>(021) 6165 6766</p>
                    
                    <span class="last">邮箱：</span>
                    <p>bys_Iot_yy@beyondsoft.com</p>
                </div>

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
    .contactUs{
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

<template>
    <div class="smart_stadium"> 
        <headerBar/> 
        <div class="header_background">
        </div> 
        <div class="stadium_content">
            <div class="min_box">
                <div class="title tit1">
                   正在生病的“超级城市”
                </div>
                <div class="logo_box">
                    <div class="logo_item"> 
                        <img src="../../assets/images/zhcs/img1.png">
                        <div class="logo_item_name">
                            人口挑战
                        </div>
                    </div>
                    <div class="logo_item"> 
                        <img src="../../assets/images/zhcs/img2.png">
                        <div class="logo_item_name">
                            交通挑战
                        </div>
                    </div>
                    <div class="logo_item"> 
                        <img src="../../assets/images/zhcs/img3.png">
                        <div class="logo_item_name">
                            城市废弃物挑战
                        </div>
                    </div>
                    <div class="logo_item"> 
                        <img src="../../assets/images/zhcs/img4.png">
                        <div class="logo_item_name">
                            污染挑战
                        </div>
                    </div>
                    <div class="logo_item"> 
                        <img src="../../assets/images/zhcs/5.png">
                        <div class="logo_item_name">
                            公共资源挑战
                        </div>
                    </div>
                  
                </div>
                <div class="title tit1">
                    智慧城市物联网解决方案
                </div>
                <div class="sologan">
                                            
                     
                         在城市发展过程中，充分利用物联网、互联网、云计算、高性能计算、智能科学等新
                        兴技术手段，对城市居民生活工作、企业经营发展和政府行使职能过程中的相关活动和需
                        求，进行智慧的感知、互联、处理和协调，是城市构建成为一个由新技术涵盖的新城市生
                        态系统，为市民提供一个美好的生活和工作环境为企业创造一个可持续发展的商业环境，
                        为政府构建一个高效的城市运营管理环境。
                                                
                                            
                    
                </div>
                <div class="fzt">
                    <img src="../../assets/images/zhcs/fzt.png">
                </div>                                
            </div>                
            <div class="out_box">
                <div class="min_box info1">
                    <div class="title">
                        “智慧城市”的五大特征
                    </div>                       
                    <div class="logo_item"> 
                        <img src="../../assets/images/zhcs/1.png">
                        <div class="logo_item_name">                           
                            提升市民生活品质
                        </div>
                    </div>
                    <div class="logo_item"> 
                        <img src="../../assets/images/zhcs/2.png">
                        <div class="logo_item_name">
                            提升城市治理效率
                        </div>
                    </div>
                    <div class="logo_item"> 
                        <img src="../../assets/images/zhcs/3.png">
                        <div class="logo_item_name">
                            发展绿色经济
                        </div>
                    </div>
                    <div class="logo_item"> 
                        <img src="../../assets/images/zhcs/4.png">
                        <div class="logo_item_name">
                            数据开放与融合
                        </div>
                    </div>
                    <div class="logo_item"> 
                        <img src="../../assets/images/zhcs/5.png">
                        <div class="logo_item_name">
                            确保网络安全
                        </div>
                    </div>
                    
                </div>               
            </div>
            <div class="min_box">
                <div class="title tit2">                 
                   “智慧城市”的解决方案            
                </div>
               
                <div class="content_box">
                    <el-row :gutter="55" class="row-content">
                        <el-col :span="12">
                            <div class="grid-content">
                                <div class="img_box">
                                    <!-- <img src="../../assets/images/zhcg/tubiao7.png"> -->
                                </div>
                                <div class="info">
                                    <h3>(一）场馆系统监控</h3>
                                    <div class="text">
                                     
                                        一是开展环保设施建设、二是能源设施绿色节能、三是监控设施组网互联。
                        
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content">
                                <div class="img_box tu2">
                                    <!-- <img src="../../assets/images/zhcg/tubiao8.png"> -->
                                </div>
                                <div class="info">
                                    <h3>(二）智慧照明控制系统</h3>
                                    <div class="text">
                                        
                                  
                            一管理流程电子化、二 电子化办公、三各类政务改革全过程。
                        
                        
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content">
                               <div class="img_box tu3">
                                    <!-- <img src="../../assets/images/zhcg/tubiao9.png"> -->
                                </div>
                                <div class="info">
                                    <h3 class="h3">(三）防盗报警系统</h3>
                                    <div class="text">
                                        
                                
                                    </div>
                                </div>
                            </div>
                        </el-col> 
                        <el-col :span="12">
                            <div class="grid-content">
                                <div class="img_box tu4">
                                    <!-- <img src="../../assets/images/zhcg/tubiao1.png"> -->
                                </div>
                                <div class="info">
                                    <h3>(四）让公共服务均等化</h3>
                                    <div class="text">
                                         
                                   一便民服务、二教育、医疗的公平透明化。
                        
                                    </div>
                                </div>
                            </div>
                        </el-col>
                         
                    </el-row>
                </div>
               <div class="title tit2">                 
                   <div class="title tit2">                 
                    “智慧城市”的解决方案            
                    </div> 
                    <div class="fzt">
                        <img src="../../assets/images/zhcs/cjsm.png">
                    </div>             
                </div>
             
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
        
        }
    },
   
    methods:{
      

    },

}
</script>

<style lang="less" scoped>
.smart_stadium {
    .header_background {  
        width:100%;
        height:560px;
        background: url(../../assets/images/zhcs/banner.png) center center;
    }
    .stadium_content {
        width:100%;
        height: auto;
        .min_box{
            width: 1200px;
            margin:0 auto;
        }
        .out_box{
            background:#F5F5F6;
            height: 475px;
            width: 100%;
            margin-top:75px;
            
        }     
        .title {
            color:#000000;
            font-size:43px;
            text-align:center;
            margin:0 auto;
        }
        .tit1{
            margin-top:90px;
            margin-bottom:75px;
        }  
        .tit2{
            margin-top:95px;
            margin-bottom:45px;
        }   
        .sologan {
            width: 100%;
            font-size:24px;
            color:#676565;
            padding:0 50px;
            line-height:40px;
            text-indent: 50px;
        }
        .info1{
            padding-top:68px;
        }   
        .logo_box{
            display: flex;
            justify-content: space-between;
            .logo_item{
                width:220px;
                height: 217px;
                padding-top:55px;
                box-shadow:-2px 4px 25px 4px rgba(186,187,187,0.19);
                border:1px solid transparent;
                &:hover{
                    border:1px solid #0754B7;
                }
                
                .logo_item_name {
                    color:#3F3F3F;
                    font-size:23px;
                    text-align: center;
                    margin-top:30px;
                }
                img{
                    // width: 66px;
                    // height: 66px;
                    display: block;
                    margin:0 auto;
                }
            }
        } 
        .fzt{
            text-align: center;
            margin-top:60px;
           
        }   
        .out_box .logo_item {
            float: left;
            width: 20%;  
            margin-top:90px;           
            .logo_item_name {
                color:#3F3F3F;
                font-size:24px;
                text-align: center;
                width:110px;
                margin:35px auto 0;
            }
            img{
                width: 66px;
                height: 66px;
                display: block;
                margin:0 auto;
            }
        } 
      
  
        .content_box{
            border-top:1px solid #E3E4E5;
            margin-top:45px;
            padding:45px 0;
           
            .row-content{
                height:200px;
              
                .grid-content{
                    height: 105px;
                    margin-bottom:40px;
                    &:hover h3{
                        color:#4DAFDE;
                    }
                    &:hover .img_box{
                        color:#4DAFDE;
                        border:2px solid #4DAFDE;
                    }
                    .img_box{
                        width:99px;
                        height:99px;
                        border:2px solid #BDBDBD;
                        border-radius:50%;
                        float: left;
                        background: url('../../assets/images/zhcs/tu4.png') no-repeat center center;
                    }
                    .tu2{
                        background: url('../../assets/images/zhcs/tu1.png') no-repeat center center; 
                    }
                    .tu3{
                        background: url('../../assets/images/zhcs/tu2.png') no-repeat center center; 
                    }
                    .tu4{
                        background: url('../../assets/images/zhcs/tu3.png') no-repeat center center; 
                    }
                    .info{
                        float: left;
                        width: 430px;
                        padding:0 18px;
                        
                        h3{
                            font-size: 22px;
                            font-weight: 400;
                           
                        }
                        .h3{
                            margin-top:30px;
                        }
                        .text{
                            font-size: 17px;
                            color:#646464;
                            line-height: 30px;
                            padding-top:10px;
                        }
                    }
                }
                .box1{
                    height: 180px;
                }
               
            }
        }
           
        
  
     
    }
}
</style>

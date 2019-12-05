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
         
        }
    },
    created(){
      
    },
    methods:{
      
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

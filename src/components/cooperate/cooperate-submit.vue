<template>
  <div class="cooperate-submit">
    <headerBar/>
    <div class="header_background">
      <div class="solution_title center clearfix">
        <div class="cooperate_slogan">{{'开放共赢 构建万物互联生态'}}</div>
        <div class="cooperate_area">
          <div class="cooperate_item">
              <div class="cooperate_item_logo cooperate_item_logo1"></div>
                <div class="cooperate_item_name">市场合作</div>
          <div class="header_gap"></div>
          </div>
          <div class="cooperate_item">
              <div class="cooperate_item_logo cooperate_item_logo2"></div>
                <div class="cooperate_item_name">业态合作</div>

          <div class="header_gap"></div>
          </div>
          <div class="cooperate_item">
              <div class="cooperate_item_logo cooperate_item_logo3"></div>
                <div class="cooperate_item_name">设备供应商合作</div>

          <div class="header_gap"></div>
          </div>
          <div class="cooperate_item">
              <div class="cooperate_item_logo cooperate_item_logo4"></div>
                <div class="cooperate_item_name">业务系统合作</div>

          </div>
        </div>
      </div>
    </div>

    <div class="content center">
      <el-form v-if="editing" label-position="right" label-width="430px" :model="cooperateForm">
        <div style="text-align:center;font-size:30px;">合作信息提交</div>
        <div class="gap"></div>
        <el-form-item label="合作类型：">
          <el-checkbox-group size="small">
            <el-checkbox>市场合作</el-checkbox>
            <el-checkbox>业态合作</el-checkbox>
            <el-checkbox>设备供应商合作</el-checkbox>
            <el-checkbox>业务系统合作</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="单位名称：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="联系人：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="联系电话：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="邮箱地址：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="合作说明：">
          <el-input></el-input>
        </el-form-item>
        <el-row>
          <el-button type="primary">提交</el-button>
        </el-row>
      </el-form>
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
      editing: true,
      userInfo: {},
      cooperateForm: {}
    };
  },
  created() {
    let url = location.href;
    if (url.indexOf("bysiot") > 0) {
      document.domain = "bysiot.com";
      this.userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
      console.log(this.userInfo);
    }

    console.log(this.userInfo);
  },
  mounted() {
    // window.addEventListener('scroll',this.handleScroll)
  },
  beforeDestroy() {
    // window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {}
};
</script>
<style lang="less">
.cooperate-submit {
  .el-input {
    width: 60%;
  }
  .el-button {
    width: 20%;
    margin: 30px auto;
    transform: translateX(-40%);
    // position: absolute;
    margin-left: 50%;
    // bottom: 0;
  }
}
</style>

<style lang="less" scoped>
.cooperate-submit {
  .header_background {
    // position: relative;
    width: 100%;
    height: 430px;
    background: url(../../assets/images/banner-bgi-cooperate.png) center center;
    .solution_title {
      position: relative;
      color: #ffffff;
      .cooperate_slogan {
           user-select: none;
        position: absolute;
        width: 100%;
        text-align: center;
        top: 170px;
        left: 0;
        font-size: 30px;
      }
      .cooperate_area {
        height: 163px;
        position: absolute;
        width: 100%;

        bottom: 0;

        .cooperate_item {
            user-select: none;
          float: left;
          width: 25%;
          height: 100%;
          position: relative;
          .cooperate_item_logo {
              position: absolute;
                width: 54px;
                height: 50px;
              left: 50%;
              bottom: 80px;
              transform: translateX(-50%) 
          }
          .cooperate_item_logo1 {
              background: url(../../assets/images/cooperate-item-logo1.png) center center;
          }
          .cooperate_item_logo2 {
              background: url(../../assets/images/cooperate-item-logo2.png) center center;
          }
          .cooperate_item_logo3 {
              background: url(../../assets/images/cooperate-item-logo3.png) center center;
          }
          .cooperate_item_logo4 {
              background: url(../../assets/images/cooperate-item-logo4.png) center center;
          }
          .cooperate_item_name {
              position: absolute;
                      bottom: 30px;
              left: 50%;
              transform: translateX(-50%) ;
              font-size:20px;

          }
        }
        .header_gap {
          float: right;
          width: 1px;
          height: 63px;
          margin: 50px 0;
          background-color: #99c1fb;
        }
      }
    }
    // .cooperate_area {
    //     position: absolute;
    //     bottom: 0;

    // }
  }
  .content {
    padding: 15px 0;
    color: #3f3f3f;
    .solution_content_name {
      margin-top: 50px;
      width: 100%;
      text-align: center;
      font-size: 30px;
    }
    .solution_content {
      margin-top: 35px;
      font-size: 20px;
    }
    .gap {
      width: 5%;
      height: 7px;
      background-color: #003f98;
      margin: 25px auto;
    }
  }
}
</style>

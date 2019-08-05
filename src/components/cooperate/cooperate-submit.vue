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
      <el-form v-if="editing" label-position="right" label-width="430px" :model="cooperateForm" :rules="rules" ref="cooperateForm">
        <div style="text-align:center;font-size:30px;">合作信息提交</div>
        <div class="gap"></div>
        <el-form-item label="合作类型：" prop="cooperateTypeList">
          <el-checkbox-group size="small"   v-model="cooperateForm.cooperateTypeList">
            <el-checkbox label="1">市场合作</el-checkbox>
            <el-checkbox label="2">业态合作</el-checkbox>
            <el-checkbox label="3">设备供应商合作</el-checkbox>
            <el-checkbox label="4">业务系统合作</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="单位名称：" prop="cooperateConpanyName">
          <el-input v-model="cooperateForm.cooperateConpanyName"></el-input>
        </el-form-item>
        <el-form-item label="联系人：" prop="cooperateName">
          <el-input v-model="cooperateForm.cooperateName"></el-input>
        </el-form-item>
        <el-form-item label="联系电话：" prop="cooperatePhone">
          <el-input v-model="cooperateForm.cooperatePhone"></el-input>
        </el-form-item>
        <el-form-item label="邮箱地址：" prop="cooperateEmail">
          <el-input v-model="cooperateForm.cooperateEmail"></el-input>
        </el-form-item>
        <el-form-item label="合作说明：" prop="cooperateRemark">
          <el-input v-model="cooperateForm.cooperateRemark" type="textarea"
  :rows="5" :autosize="{ minRows: 5, maxRows: 15}"></el-input>
        </el-form-item>
        <el-row>
          <el-button type="primary" @click="sendForm">提交</el-button>
        </el-row>
      </el-form>
    <!-- 表单提交成功后提示，并跳转页面 -->
      <div v-else class="finish center">
        <div class="finish_info">您的信息已提交，客服人员将在1个工作日内联系您。</div>
        <div class="finish_countdown">将在&nbsp;<span>{{countDown<0?'0':countDown}}</span>&nbsp;秒后跳转至<span @click="toHomePage" class="finish_countdown_path">&nbsp;&nbsp;首页&nbsp;&nbsp;</span></div>
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
    headerBar
  },
  data() {
            let email = (rule, value, callback) => {
            if (!value) {
                callback()
            } else {
                const reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/      
                if (reg.test(value)) {
                    callback();
                } else {
                    return callback(new Error('请输入正确的邮箱'));
                }
            }
        }
        let mobilePhone = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('手机号不能为空'));
            } else {
                const reg = /^\d{10,11}$/       
                if (reg.test(value)) {
                    callback();
                } else {
                    return callback(new Error('请输入正确的手机号'));
                }
            }
        }
    return {
      editing: true,
      countDown:3,
      userInfo: {},
      timer:null,
      cooperateForm: {
        cooperateType:'',
        cooperateStatus:1,
        cooperateTypeList:[]
      },
      rules: {
          cooperateTypeList: [
                { required: true, message: '请选择合作类型', trigger: 'blur' }
                ],
          cooperateConpanyName: [
                { required: true, message: '请填写单位名称', trigger: 'blur' }
                ],
          cooperateName: [
                { required: true, message: '请填写联系人姓名', trigger: 'blur' }
                ],
          cooperatePhone: [
                { required: true, message: '请填写联系电话', trigger: 'blur' },
                { validator: mobilePhone, trigger: 'blur' }
                ],
          cooperateEmail: [
                { required: true, message: '请填写邮箱地址', trigger: 'blur' },
                { validator: email, trigger: 'blur' }
                ],
          cooperateRemark: [
                { required: true, message: '请填写合作说明', trigger: 'blur' }
                ],
      }
    };
  },
  created() {
    let url = location.href;
    if (url.indexOf("bysiot") > 0) {
      document.domain = "bysiot.com";
      this.userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    }
  },
  beforeDestroy() {
    if (!this.editing) {
      clearInterval(this.timer)
    }
  },
  methods: {
    // 发送表单
    sendForm() {
      this.$refs['cooperateForm'].validate((valid) => {
         if (valid) {
           let params = []
           for (var i=0;i<this.cooperateForm.cooperateTypeList.length;i++) {
             // 简单深拷贝
            let obj = JSON.parse(JSON.stringify(this.cooperateForm))
             params.push(obj)
             params[i].cooperateType = this.cooperateForm.cooperateTypeList[i]
           }
           this.$http
             .post(
               this.$api.getApiAddress(
                 "/operationplatformmgn/o/saas/platform-cooperate/add_cooperate",
                 "API_ROOT"
               ),
               params
             )
             .then(res => {
          this.editing =false
          this.timer = setInterval(() => {
            if (this.countDown == 0) {
              this.toHomePage()
            }
            this.countDown--
          }, 1000);
             });
         }
         else {
           this.$message.error('请完善表单')
         }
      })
    },
    toHomePage () {
      this.$router.push("/homePage")
    }
   }
};
</script>
<style lang="less">
.cooperate-submit {
  .el-input {
    width: 60%;
  }
  .el-textarea {
    width: 60%;
  }
  .el-button {
    width: 20%;
    margin: 30px auto;
    transform: translateX(-40%);
    margin-left: 50%;
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
              background: url(../../assets/images/cooperate-item-logo2.png) center center no-repeat;
          }
          .cooperate_item_logo3 {
              background: url(../../assets/images/cooperate-item-logo3.png) center center no-repeat;
              background-size:100%;
          }
          .cooperate_item_logo4 {
              background: url(../../assets/images/cooperate-item-logo4.png) center center no-repeat;
              background-size:100%;
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
  .finish {
    height: 300px;
    text-align: center;
    font-size: 30px;
    .finish_info {
      margin-top: 100px;
    }
    .finish_countdown {
      margin-top: 50px;
      font-size: 24px;
      .finish_countdown_path {
        color:blue;
        cursor: pointer;
      }
      }
  }
}
</style>

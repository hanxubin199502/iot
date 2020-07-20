<template>
  <div class="header" :class="{ act: scrollTag }">
    <div class="min-header">
      <div
        style="float:left;margin-right:38px;line-height:74px;"
        @click="changeTab(0)"
      >
        <span class="logo"></span>
        <span class="logo-text"></span>
      </div>
      <ul>
        <li @mouseover="over" @mouseleave="leave">
          产品
          <div class="product_box" v-show="showProduct" @mouseleave="leave">
            <div class="min">
              <ul>
                <li
                  @mouseover="changeActive(1)"
                  :class="{ active: activeTab == 1 }"
                >
                  <span>建筑管理平台</span>
                  <div class="info_box" v-show="activeTab == 1">
                    <h3>建筑管理平台<span class="dayu">&nbsp;></span></h3>
                    <div class="div1">
                      <p class="p1">建筑信息模型</p>
                      <p>建筑体模型管理</p>
                      <p>设备模型管理</p>
                      <p>用户行为管理</p>
                    </div>
                    <div class="div2">
                      <p class="p1">建筑质量管理</p>
                      <p>建筑巡检管理</p>
                      <p>建筑维保管理</p>
                      <p>建筑质量探测</p>
                      <p>建筑质量历史事件管理</p>
                    </div>
                    <div class="div3">
                      <p class="p1">建筑运营分析</p>
                      <p>建筑健康度分析</p>
                      <p>建筑运营效能分析</p>
                    </div>
                  </div>
                </li>
                <li
                  @mouseover="changeActive(2)"
                  :class="{ active: activeTab == 2 }"
                >
                  <span>资产管理平台</span>
                  <div class="info_box" v-show="activeTab == 2">
                    <h3 @click="$router.push('/asset-platform?showflag')">
                      资产管理平台<span class="dayu">&nbsp;></span>
                    </h3>
                    <div class="div1">
                      <p class="p1">资产概览</p>
                      <p>资产统计</p>
                      <p>资产分析</p>
                      <p>资产估值</p>
                      <p>导出</p>
                    </div>
                    <div class="div2">
                      <p class="p1">资产入档</p>
                      <p>资产登记</p>
                      <p>资产分类</p>
                    </div>
                    <div class="div3">
                      <p class="p1">资产档案</p>
                      <p>区域业态统计</p>
                      <p>区域消费类型统计</p>
                      <p>区域人群分析</p>
                    </div>
                    <div class="div4">
                      <p class="p1">资产更新</p>
                      <p>资产新增</p>
                      <p>资产报废</p>
                      <p>资产变更</p>
                      <p>资产转入转出</p>
                    </div>
                  </div>
                </li>
                <li
                  @mouseover="changeActive(3)"
                  :class="{ active: activeTab == 3 }"
                >
                  <span>物业管理平台</span>
                  <div class="info_box" v-show="activeTab == 3">
                    <h3>物业管理平台<span class="dayu">&nbsp;></span></h3>
                    <div class="div1">
                      <p class="p1">设备管理</p>
                      <p>设备添加</p>
                      <p>设备组态</p>
                      <p>设备控制</p>
                      <p>联动配置</p>
                    </div>
                    <div class="div2">
                      <p class="p1">工单管理</p>
                      <p>工单生成</p>
                      <p>工单推送</p>
                      <p>工单处理</p>
                      <p>历史工单查询</p>
                    </div>
                    <div class="div3">
                      <p class="p1">远程监测</p>
                      <p>设备数据管理</p>
                      <p>设备数据分析</p>
                      <p>远程数据查询</p>
                    </div>
                  </div>
                </li>
                <li
                  @mouseover="changeActive(4)"
                  :class="{ active: activeTab == 4 }"
                >
                  <span>能源管理平台</span>
                  <div class="info_box" v-show="activeTab == 4">
                    <h3 @click="$router.push('/energy-platform?showflag')">
                      能源管理平台<span class="dayu">&nbsp;></span>
                    </h3>
                    <div class="div1">
                      <p class="p1">能耗统计</p>
                      <p>能耗计量</p>
                      <p>能耗分类</p>
                      <p>能耗统计</p>
                      <p>费用收缴</p>
                    </div>
                    <div class="div2">
                      <p class="p1">能耗分析</p>
                      <p>能耗趋势</p>
                      <p>能耗分析</p>
                      <p>能耗优化</p>
                    </div>
                    <div class="div3">
                      <p class="p1">故障检测诊断</p>
                      <p>故障检测</p>
                      <p>故障分析</p>
                      <p>故障诊断</p>
                    </div>
                  </div>
                </li>
                <li
                  @mouseover="changeActive(5)"
                  :class="{ active: activeTab == 5 }"
                >
                  <span>租赁管理平台</span>
                  <div class="info_box" v-show="activeTab == 5">
                    <h3 @click="$router.push('/loan-platform?showflag')">
                      租赁管理平台<span class="dayu">&nbsp;></span>
                    </h3>
                    <div class="div1">
                      <p class="p1">物业租赁</p>
                      <p>物业创建</p>
                      <p>物业租赁管理</p>
                      <p>合同管理</p>
                    </div>
                    <div class="div2">
                      <p class="p1">租赁结算</p>
                      <p>费用状态管理</p>
                      <p>财务管理</p>
                      <p>费用收缴与支付</p>
                    </div>
                    <div class="div3">
                      <p class="p1">租户管理</p>
                      <p>租户注册</p>
                      <p>租户认证</p>
                      <p>租户绑定</p>
                      <p>租户生命周期管理</p>
                      <p>租户内容管理</p>
                    </div>
                  </div>
                </li>
                <li
                  @mouseover="changeActive(6)"
                  :class="{ active: activeTab == 6 }"
                >
                  <span>出行管理平台</span>
                  <div class="info_box" v-show="activeTab == 6">
                    <h3 @click="$router.push('/trip-platform?showflag')">
                      出行管理平台<span class="dayu">&nbsp;></span>
                    </h3>
                    <div class="div1">
                      <p class="p1">业主出行</p>
                      <p>业主车场出行</p>
                      <p>门禁出行</p>
                      <p>电梯出行</p>
                    </div>
                    <div class="div2">
                      <p class="p1">访客出行</p>
                      <p>访客车场出行</p>
                      <p>门禁出行</p>
                      <p>电梯出行</p>
                    </div>
                    <div class="div3">
                      <p class="p1">流量分析</p>
                      <p>流量统计</p>
                      <p>流量分析</p>
                      <p>出行人群分析</p>
                    </div>
                  </div>
                </li>
                <li
                  @mouseover="changeActive(7)"
                  :class="{ active: activeTab == 7 }"
                >
                  <span>安防管理平台</span>
                  <div class="info_box" v-show="activeTab == 7">
                    <h3 @click="$router.push('/security-platform?showflag')">
                      安防管理平台<span class="dayu">&nbsp;></span>
                    </h3>
                    <div class="div1">
                      <p class="p1">报警管理</p>
                      <p>报警机制管理</p>
                      <p>报警流程管理</p>
                      <p>历史报警管理</p>
                      <p>报警分析</p>
                    </div>
                    <div class="div2">
                      <p class="p1">异常分析</p>
                      <p>异常机制管理</p>
                      <p>异常分析</p>
                      <p>异常事件管理</p>
                    </div>
                    <div class="div3">
                      <p class="p1">安防事件管理</p>
                      <p>安防事件分析</p>
                      <p>安防诊断与建议</p>
                      <p>安防等级评估</p>
                    </div>
                  </div>
                </li>
                <li
                  @mouseover="changeActive(8)"
                  :class="{ active: activeTab == 8 }"
                >
                  <span>企业服务平台</span>
                  <div class="info_box" v-show="activeTab == 8">
                    <h3 @click="$router.push('/enterprise-platform?showflag')">
                      企业服务平台<span>&nbsp;></span>
                    </h3>
                    <div class="div1">
                      <p class="p1">区域经济分析</p>
                      <p>区域消费类型统计</p>
                      <p>区域业态统计</p>
                      <p>区域人群分析</p>
                      <p>区域经济结构分析</p>
                      <p>区域经济结论分析</p>
                    </div>
                    <div class="div2">
                      <p class="p1">运营分析</p>
                      <p>总体运营模块分类</p>
                      <p>区域消费类型统计</p>
                      <p>区域人群分析</p>
                    </div>
                    <div class="div3">
                      <p class="p1">效能分析</p>
                      <p>区域业态统计</p>
                      <p>区域消费类型统计</p>
                      <p>区域人群分析</p>
                    </div>
                    <div class="div4">
                      <p class="p1">采购管理</p>
                      <p>区域消费类型统计</p>
                      <p>区域业态统计</p>
                      <p>区域人群分析</p>
                      <p>区域经济结构分析</p>
                      <p>支付与结算流程管理</p>
                      <p>对账管理</p>
                    </div>
                    <div class="div5">
                      <p class="p1">党建管理</p>
                      <p>党建内容管理</p>
                      <p>审核与发布机制</p>
                      <p>党建人员管理</p>
                      <p>学习状态管理</p>
                      <p>督察管理</p>
                      <p>激励奖励机制</p>
                    </div>
                  </div>
                </li>
                <li
                  @mouseover="changeActive(9)"
                  :class="{ active: activeTab == 9 }"
                >
                  <span>商圈管理平台</span>
                  <div class="info_box" v-show="activeTab == 9">
                    <h3>商圈管理平台<span class="dayu">&nbsp;></span></h3>
                    <div class="div1">
                      <p class="p1">商圈经济分析</p>
                      <p>商圈数据录入</p>
                      <p>商圈数据爬取</p>
                      <p>商圈经济模型创建</p>
                      <p>商圈经济算法</p>
                    </div>
                    <div class="div2">
                      <p class="p1">商家管理</p>
                      <p>商家入驻</p>
                      <p>商家退出</p>
                      <p>商家合同管理</p>
                      <p>商家分类</p>
                      <p>商家营业项目管理</p>
                      <p>商家交易管理</p>
                    </div>
                    <div class="div3">
                      <p class="p1">业态分析</p>
                      <p>业态统计</p>
                      <p>业态数据汇总</p>
                      <p>业态结论分析</p>
                    </div>
                    <div class="div4">
                      <p class="p1">商户分析</p>
                      <p>商户交易管理</p>
                      <p>商户产品/服务管理</p>
                      <p>商户营业数据分析</p>
                      <p>商户盈亏模型设计</p>
                      <p>商户经营效果算法配置</p>
                    </div>
                    <div class="div5">
                      <p class="p1">流量管理</p>
                      <p>流量统计</p>
                      <p>流量分类</p>
                      <p>流量群体分析</p>
                      <p>流量分析</p>
                    </div>
                  </div>
                </li>
                <li
                  @mouseover="changeActive(10)"
                  :class="{ active: activeTab == 10 }"
                >
                  <span>应急管理平台</span>
                  <div class="info_box" v-show="activeTab == 10">
                    <h3>应急管理平台<span class="dayu">&nbsp;></span></h3>
                    <div class="div1">
                      <p class="p1">事件管理</p>
                      <p>事件发起条件</p>
                      <p>事件推送机制</p>
                      <p>事件处理机制</p>
                      <p>事件状态管理</p>
                    </div>
                    <div class="div2">
                      <p class="p1">预案联动</p>
                      <p>联动设置</p>
                      <p>联动状态管理</p>
                      <p>联动执行管理</p>
                    </div>
                    <div class="div3">
                      <p class="p1">智能指挥</p>
                      <p>远程数据联动</p>
                      <p>实况分析</p>
                    </div>
                  </div>
                </li>
                <li
                  @mouseover="changeActive(11)"
                  :class="{ active: activeTab == 11 }"
                >
                  <span>数据管理平台</span>
                  <div class="info_box" v-show="activeTab == 11">
                    <h3>数据管理平台<span class="dayu">&nbsp;></span></h3>
                    <div class="div1">
                      <p class="p1">设备数据</p>
                      <p>设备模型</p>
                      <p>设备接入</p>
                      <p>设备分组</p>
                      <p>设备权鉴</p>
                      <p>规则引擎</p>
                      <p>远程控制</p>
                    </div>
                    <div class="div2">
                      <p class="p1">运行数据</p>
                      <p>设备在线状态</p>
                      <p>设备属性数据</p>
                    </div>
                    <div class="div3">
                      <p class="p1">操作数据</p>
                      <p>常规业务操作</p>
                      <p>联动操作</p>
                      <p>定时操作</p>
                      <p>临时操作</p>
                    </div>
                    <div class="div4">
                      <p class="p1">增值分析</p>
                      <p>设备效能数据</p>
                      <p>设备运行分析</p>
                      <p>设备健康度</p>
                    </div>
                  </div>
                </li>
                <li
                  @mouseover="changeActive(12)"
                  :class="{ active: activeTab == 12 }"
                >
                  <span>场景应用中心</span>
                  <div class="info_box" v-show="activeTab == 12">
                    <h3>场景应用中心<span class="dayu">&nbsp;></span></h3>
                    <div class="div1">
                      <p class="p1">智慧家居</p>
                      <p>联动管理</p>
                      <p>情景定义</p>
                      <p>设备管理</p>
                      <p>设备控制</p>
                      <p>设备状态查询</p>
                    </div>
                    <div class="div2">
                      <p class="p1">智慧厕所</p>
                      <p>厕所区域管理</p>
                      <p>状态管理</p>
                      <p>联动管理</p>
                      <p>设备状态管理</p>
                      <p>设备管理</p>
                    </div>
                    <div class="div3">
                      <p class="p1">智慧教室</p>
                      <p>教室区域管理</p>
                      <p>状态管理</p>
                      <p>联动管理</p>
                      <p>设备状态管理</p>
                      <p>设备管理</p>
                    </div>
                    <div class="div4">
                      <p class="p1">智慧工位</p>
                      <p>工位区域管理</p>
                      <p>权限事件管理</p>
                      <p>状态管理</p>
                      <p>联动管理</p>
                      <p>设备状态管理</p>
                      <p>设备管理</p>
                    </div>
                    <div class="div5">
                      <p class="p1">智慧会议室</p>
                      <p>会议室区域管理</p>
                      <p>权限事件管理</p>
                      <p>状态管理</p>
                      <p>联动管理</p>
                      <p>设备状态管理</p>
                      <p>设备管理</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
         <li @click="changeTab(7)">产品与方案</li>
         <li @click="changeTab(8)">案例分析</li>
         <li @click="changeTab(9)">新闻中心</li>
        <li>
          <!-- 解决方案下拉框 -->
          <!-- :width="275*solutionListNum"  -->
          <el-popover
            placement="bottom"
            trigger="hover"
            v-if="solutionList.length >= 0"
          >
            <span slot="reference">解决方案</span>
            <!-- <ul v-for="(item,index) in solutionList" :key="index" >
                        <li v-for="(item1,index1) in solutionLists" :key="index1" @click="changeTab(2,item1.id)">
                            <img :src="item1.outlineImagesPath">
                            <span class="production">{{item1.solutionName}}</span>
                            <span>{{item1.solutionOutline}}</span>
                        </li>
                    </ul> -->
            <ul>
              <li @click="$router.push('/smart-building')">
                <img src="../../assets/images/prod_icon1.png" alt />
                <span class="production">{{ "智慧楼宇解决方案" }}</span>
                <span>{{ "智慧楼宇一体化解决方案" }}</span>
              </li>
              <li @click="$router.push('/economic-park')">
                <img src="../../assets/images/prod_icon4.png" alt />
                <span class="production">{{ "智慧园区解决方案" }}</span>
                <span>{{ "智慧园区一体化解决方案" }}</span>
              </li>
              <li @click="$router.push('/smart-city')">
                <img src="../../assets/images/prod_icon3.png" alt />
                <span class="production">智慧城市解决方案</span>
                <span>{{ "智慧城市一体化解决方案" }}</span>
              </li>
              <li @click="$router.push('/smart-stadium')">
                <img src="../../assets/images/prod_icon2.png" alt />
                <span class="production">智慧场馆解决方案</span>
                <span>{{ "智慧场馆一体化解决方案" }}</span>
              </li>
              <li @click="$router.push('/smart-commerce')">
                <img src="../../assets/images/prod_icon2.png" alt />
                <span class="production">智慧商业解决方案</span>
                <span>{{ "智慧商业一体化解决方案" }}</span>
              </li>
              <li @click="$router.push('/jizhi-commerce')">
                <img src="../../assets/images/prod_icon2.png" alt />
                <span class="production">集智生活解决方案</span>
                <span>{{ "集智生活一体化解决方案" }}</span>
              </li>
            </ul>
          </el-popover>
          <span v-else>解决方案</span>
        </li>
        <li @click="changeTab(3)">合作</li>
        <li @click="changeTab(4)">新闻与动态</li>
        <li @click="changeTab(5)">关于我们</li>
      </ul>
      <p class="right_p">
        <span style="margin-right:32px;" @click="changeTab(6)">开发者社区</span>
        <span>
          <i @click="denglu">管理控制台</i> |
          <i>中文站</i>
        </span>
        <button class="dl" @click="denglu">登录</button>
      </p>
    </div>
  </div>
</template>

<script>
// import eventVue from '../../event.js'
export default {
  data() {
    return {
      prodListNum: 0,
      productList: [], //产品列表
      solutionListNum: 0,
      solutionList: [], //解决方案
      scrollTag: false,
      solutionLists: [],
      showProduct: false,
      activeTab: 1
    };
  },
  created() {
    // this.getProduction();
    // this.getSolution();

    // 根据flag判断头部导航class
    location.hash.search(/showflag/) != -1
      ? (this.scrollTag = true)
      : (this.scrollTag = false);
  },
  mounted() {
    if (location.hash.search(/showflag/) == -1) {
      window.addEventListener("scroll", this.handleScroll);
    }
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    changeActive(n) {
      this.activeTab = n;
    },
    leave() {
      this.showProduct = false;
      this.activeTab = 1;
    },
    over() {
      this.showProduct = true;
    },
    denglu() {
      let url = "";
      url = location.href;

      if (url.indexOf("www-dev.iot.com") > -1) {
        window.open("http://saas-dev.iot.com");
      } else if (url.indexOf("http://localhost") > -1) {
        window.open("http://localhost:8081");
      } else if (url.indexOf("www-qa.iot.com") > -1) {
        window.open("http://saas.iot.com");
      } else if (url.indexOf("www-prod.iot.com") > -1) {
        window.open("http://saas-prod.iot.com");
      } else if (url.indexOf("www.bysiot.com") > -1) {
        window.open("http://portal.bysiot.com");
      }
    },
    // 获取产品列表
    getProduction() {
      let params = {
        productContextStatus: 2,
        productContextType: 1
      };
      this.$http
        .get(
          this.$api.getApiAddress(
            "/operationplatformmgn/o/saas/platform-productContext/query_productContext_list",
            "API_ROOT"
          ),
          params
        )
        .then(res => {
          this.prodListNum = Math.ceil(res.data.length / 6);
          if (this.prodListNum > 0) {
            for (var i = 1; i <= this.prodListNum; i++) {
              this.productList.push(res.data.slice((i - 1) * 6, 6 * i));
            }
          }

          this.$bus.$emit("productList", this.productList);
        });
    },
    // 获取解决方案列表
    getSolution() {
      let params = {
        solutionType: 1,
        solutionStatus: 2
      };
      this.$http
        .get(
          this.$api.getApiAddress(
            "/operationplatformmgn/o/saas/platform-solution/query_solution_list",
            "API_ROOT"
          ),
          params
        )
        .then(res => {
          this.solutionLists = res.data;
          this.solutionListNum = Math.ceil(res.data.length / 6);
          if (this.solutionListNum > 0) {
            for (var i = 1; i <= this.solutionListNum; i++) {
              this.solutionList.push(res.data.slice((i - 1) * 6, 6 * i));
            }
          } else {
            this.solutionList.push(res.data);
          }

          this.$bus.$emit("solutionList", this.solutionLists);
        });
    },
    // 页面跳转
    changeTab(num, id) {
      switch (num) {
        case 0: //点击logo返回首页
          this.$router.push("/homePage");
          break;
        case 1: //产品
          this.$router.push({
            path: "/products" + id
          });
          break;
        case 2: //解决方案
          this.$router.push({
            path: "/solutions" + id
          });
          break;
        case 3: //合作
          this.$router.push("/cooperate");
          break;
        case 4: //新闻与动态
          this.$router.push("/news");
          break;
        case 5: //关于我们
          window.open("https://www.beyondsoft.com/about/index.html");
          break;
        case 6: //开发者社区
          this.$router.push("/developer?showflag");
          break;
        case 7: //产品与方案
          this.$router.push("/solutions");
          break;
        case 8: //案例分析
          this.$router.push("/caseAnalysis");
          break;
        case 9: //新闻中心
          this.$router.push("/newsCenter");
          break;
      }
    },
    // 解决方案跳转
    solutionJump(num) {
      switch (num) {
        case 1:
          this.$router.push("/smart-building");
          break;
        case 2:
          this.$router.push("/economic-park");
          break;
      }
    },
    handleScroll() {
      let top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      if (top > 0) {
        this.scrollTag = true;
      } else {
        this.scrollTag = false;
      }
    }
  }
};
</script>
<style lang="less">
.el-popper[x-placement^="bottom"] {
  margin-top: 38px !important;
}
.el-popover {
  //   padding: 12px 0px;
  ul {
    display: inline-block;
    vertical-align: top;
    padding: 0 15px;
  }

  li {
    cursor: pointer;
    width: 230px;
    padding: 5px 10px;
    border-bottom: 1px solid #f0f0f0;
    &:last-child {
      border-bottom: none;
    }
    &:first-child {
      padding: 0 10px 13px 10px;
    }
    img {
      display: inline-block;
      width: 13px;
      height: 13px;
      vertical-align: center;
    }
    .production {
      display: inline-block;
      font-size: 14px;
      color: #2d2d2d;
      &:hover {
        color: #228ee8;
      }
      // margin-top: 10px;
    }
    span {
      margin-top: 7px;
      color: #767976;
      display: block;
      font-size: 12px;
    }
  }
}
</style>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 78px;
  z-index: 300;
  background: transparent;
  position: fixed;
  top: 0;
  span {
    cursor: pointer;
  }
  &:hover {
    background: #053982;
  }
  .min-header {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    .right_p {
      float: right;
      color: #fff;
      line-height: 78px;
      font-size: 14px;
    }
    .logo {
      width: 28px;
      display: inline-block;
      height: 31px;
      vertical-align: middle;
      background: url(../../assets/images/logo.png);
      background-size: 100%;
    }
    .logo-text {
      width: 78px;
      height: 18px;
      display: inline-block;
      vertical-align: middle;
      background: url(../../assets/images/logo-text.png);
      background-size: 100%;
      margin-left: 8px;
    }
    > ul {
      display: inline-block;

      > li {
        cursor: pointer;
        float: left;
        padding: 0 15px;
        color: #fff;
        line-height: 78px;
        user-select: none;
        font-size: 14px;
        &:hover {
          color: #2791e9;
        }

        .production {
          font: 16px "MicrosoftYaHei";
          color: #2d2d2d;
        }

        .product_box {
          width: 100%;
          height: 500px;
          position: fixed;
          top: 74px;
          left: 0;
          background: #0f4592;
          .min {
            width: 1200px;
            margin: 0 auto;
            height: 100%;
            ul {
              padding: 10px 0;
              width: 180px;
              background: #053982;
              position: relative;
            }
            .active {
              background: #228ee8;
              color: #fff;
            }
            li {
              line-height: 40px;
              text-align: center;
              color: #fff;

              .info_box {
                position: absolute;
                top: 0;
                left: 180px;
                height: 500px;
                width: 1020px;
                padding: 30px 38px;
                text-align: left;

                h3 {
                  font-size: 18px;
                  color: #fff;
                  font-weight: 400;
                  .dayu {
                    font-family: "宋体";
                    color: #2791e9;
                  }
                }
                .div5 {
                  width: 120px;
                }
                > div {
                  width: 206px;
                  float: left;
                  height: 200px;
                  p {
                    color: #c7defd;
                    font-size: 12px;
                    line-height: 45px;
                    &:hover {
                      color: #3ba1f6;
                    }
                  }
                  .p1 {
                    color: #fff !important;
                    font-size: 15px;
                    margin-top: 13px;
                  }
                }
              }
            }
          }
        }
      }
    }
    .dl {
      width: 57px;
      height: 24px;
      line-height: 24px;
      border: 1px solid #fff;
      background: transparent;
      color: #fff;
      margin-left: 32px;
      cursor: pointer;
    }
  }
}
.act {
  background: #053982;
}
</style>

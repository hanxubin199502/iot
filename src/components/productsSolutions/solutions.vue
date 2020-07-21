<template>
  <div class="cooperate-submit">
    <headerBar/>
    <div class="header_background">
      <div class="solution_title center clearfix">
        <div class="cooperate_slogan">
          <p>{{'产品与方案'}}</p>
          <p class="span"></p>
        </div>
      </div>
    </div>

    <div class="table_list">
      <div class="table_top">
        <div :class="{active:tableStatus==1}" @click="tableClick(1)">{{'场景化'}}</div>
        <div :class="{active:tableStatus==2}" @click="tableClick(2)">{{'功能服务'}}</div>
        <div :class="{active:tableStatus==3}" @click="tableClick(3)">{{'硬件(一体化产品)'}}</div>
      </div>
    </div>
    <div class="contact_box">
        <div>
          <transition name="el-zoom-in-right">
            <div v-show="show2" class="transition-box">
               <div class="pc_l">
                 <img src="../../assets/images/pc1.png" alt="">
                 <span>400 000 6282</span>
               </div>
               <div class="pc_l" style="margin-left:18px">
                 <img src="../../assets/images/pc2.png" alt="">
                 <span>159 1046 2778</span>
               </div>
               <div class="pc_l">
                 <img src="../../assets/images/pc3.png" alt="">
                 <span>bys_Iot_yy@beyondsoft.com</span>
               </div>
            </div>
          </transition>
        </div>
        <div class="contact" @click="show2 = !show2">
          <span>资询方式</span>
        </div>
    </div>
    <div class="content center">
      <!-- 场景化列表 -->
      <div class="sceneList" v-if="this.tableStatus==1">
        <img src="../../assets/images/title_l.png" alt="">
        <div class="programmeList">
          <div class="programme_one">
            <div class="slutionmode">
              <div class="slutionmode_left">
                <img src="../../assets/images/imges1.png" alt="">
              </div>
              <div class="slutionmode_mid">
                <div class="title">博彦智慧工位解决方案</div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>方案功能</span>
                </div>
                <div class="copywriting">
                  博彦智慧工位解决方案支持与各种设备应用集成，真正实现了工位管理与办公室空间管理的一体化智能办公体验，
                  是对日常工作中的各种需求，如：工位预定、工位导航、会议室预定、工位情况统计、办公室环境监测、办公室安防等等多种功能一站式解决方案。
                </div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>开发背景</span>
                </div>
                <div class="copywriting">
                  对于快速扩张中的企业，往往因初期规划与成本控制等原因，在企业急速发展的时候面临办公空间紧张，但又同时存在空间浪费的情况，需求和应用
                  严重不匹配，无形中拖累了企业的高速扩张并形成了资源浪费，对企业人员来说，办公环境的不良状态也制约了工作效率。博彦科技从实际应用场景
                  出发，针对上述情况开发智慧工位解决方案，帮助企业进行工位规划，实时洞察并合理分配办公空间，提高利用效率。
                </div>
                <div v-show="showhide">
                  <div class="slutionmode_log">
                    <img src="../../assets/images/icon1.png" alt="">
                    <span>解决方案优点</span>
                  </div>
                  <div class="copywriting">
                    <p>1.降低办公成本：对工位分类灵活管理，利用有限的空间安排更多工作人员使用，降低租赁费用；</p>
                    <p>2.提升办公空间效率：最大化的办公室空间利用，满足企业对工位资源的需求；</p>
                    <p>3 办公室资源精细化管理：办公室空间内集成智能化硬件与智慧管理平台，实现办公资源精细化管理</p>
                  </div>
                  <div class="slutionmode_log">
                    <img src="../../assets/images/icon1.png" alt="">
                    <span>应用场景</span>
                  </div>
                  <div class="copywriting" style="margin-bottom:15px">
                    共享办公空间、孵化器、各类型企业等
                  </div>
                </div>
              </div>
              <div class="slutionmode_right" @click="showDisplay">
                <span v-if="showhide==true">收起</span>
                <span v-else>查看更多>></span>
              </div>
            </div>
            <div class="keyword">
              <span>关键字</span>
              <span style="margin-left:20px">
                <span class="label">工位</span>
                <span class="label">企业</span>
                <span class="label">智慧</span>
                <span class="label">效率</span>
                <span class="label">空间</span>
              </span>
            </div>
          </div>

          <div class="programme_one" style="margin-top:20px">
            <div class="slutionmode">
              <div class="slutionmode_left">
                <img src="../../assets/images/imges2.png" alt="">
              </div>
              <div class="slutionmode_mid">
                <div class="title">博彦智慧家居解决方案</div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>方案功能</span>
                </div>
                <div class="copywriting">
                  博彦智慧家居解决方案从消费者的实际应用场景出发，具体到每一个生活细节，集成家居生活的所需的12大智能生活系列产品，为消费者打造以住
                  宅为平台的智能化住宅设施与家庭日程事务的管理系统，提升家居安全性、便利性、舒适性、艺术性，并实现环保节能的居住环境
                </div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>开发背景</span>
                </div>
                <div class="copywriting">
                  在消费大升级的大背景下，以消费者的个性化需求为中心的变化愈加明显，特别是在智能家居方面，场景化、智能化正成为主流趋势，对应用场景的
                  人性理解，业主与场景的互动，正成为智能家居的核心价值所在。物联网时代，智能家居产品在运用大数据、云计算、人工智能等高新技术的同时，
                  需更加注重业主的使用场景，产品设计应更多围绕业主生活的实际情况和消费习惯展开，而不是简单理解为智能单品简单组合或是智能单品一对一
                  单点解决问题。这样才能真正打造出受业主欢迎的，安全、便捷、高效的智能家居系统。
                </div>
                <div v-show="showhide1">
                  <div class="slutionmode_log">
                    <img src="../../assets/images/icon1.png" alt="">
                    <span>解决方案优点</span>
                  </div>
                  <div class="copywriting">
                    <p>1.场景化：充分考虑业主的每一种应用场景，并将设备使用设定为不同的模式，业主一键式操控，避免多次、重复的操作</p>
                    <p>2.安全性：根据住宅整体安防需求，囊括人员安全、隐私安全、环境安全、设备安全等诸多维度，为业主打造万无一失的住宅环境；</p>
                    <p>3 远程操作：通过智能终端与设备联网，实现对住宅的远程管理，让自己的家时刻都在掌握之中。</p>
                  </div>
                  <div class="slutionmode_log">
                    <img src="../../assets/images/icon1.png" alt="">
                    <span>应用场景</span>
                  </div>
                  <div class="copywriting" style="margin-bottom:15px">
                    消费者家居家装、公寓、酒店等
                  </div>
                </div>
              </div>
              <div class="slutionmode_right" @click="showDisplay1">
                <span v-if="showhide1==true">收起</span>
                <span v-else>查看更多>></span>
              </div>
            </div>
            <div class="keyword">
              <span>关键字</span>
              <span style="margin-left:20px">
                <span class="label">家居</span>
                <span class="label">公寓</span>
                <span class="label">消费者</span>
              </span>
            </div>
          </div>
          <div class="programme_one" style="margin-top:20px">
            <div class="slutionmode">
              <div class="slutionmode_left">
                <img src="../../assets/images/imges3.png" alt="">
              </div>
              <div class="slutionmode_mid">
                <div class="title">博彦智慧教室解决方案</div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>方案功能</span>
                </div>
                <div class="copywriting">
                  博彦智慧教室解决方案，是基于物联网技术并贴合实际教学场景，将物理空间与数字空间相融合，赋予教室课堂人性化的学习环境，
                  实现人与自然、人与空间的交互，促进教学工作的开展与学习效率的提升。
                </div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>开发背景</span>
                </div>
                <div class="copywriting">
                  教室的发展经历了“传统教室——电子教室——多媒体教室——多媒体网络教室——智慧教室”的过程，随着电子信息技术的发展，各种电子信息
                  设备也应用到传统教室帮助教学工作，但经过多年发展，“教室的演进”走入一个瓶颈，而物联网技术的兴趣，则将教室提升到一个新的层面，
                  在帮助教学的同时重构了教室环境，创建了适合学生学习和教师教学的新型教室环境
                </div>
                <div v-show="showhide2">
                  <div class="slutionmode_log">
                    <img src="../../assets/images/icon1.png" alt="">
                    <span>解决方案优点</span>
                  </div>
                  <div class="copywriting">
                    <p>1.智能调整环境：实现对教室温度、湿度、PM2.5、灯光、窗帘、空调状态的读取与控制。一方面，在授课过程中通过智能策略使教室处于适宜学习的状态，在教室没人时关闭所有电子设备，绿色节能；另一方面，通过网络可以实现对所有教室的信息化设备做集中控制，帮助学校建设绿色校园；</p>
                    <p>2.数字班务管理：管理平台具有校园文化展示、家校互通、AI考勤、评先评优查询等基础模块，能为学生和老师提供新颖的师生交流及校园服务平台，从而明显提高校区管理和服务水平，提升学校的社会竞争力和知名度；</p>
                    <p>3 教学录播：基于教室内的探头，接入云录播平台与教务管理平台，实现一机多能、一键操控，巡课、巡考、录课、远程上课、安防等功能一体化。</p>
                  </div>
                  <div class="slutionmode_log">
                    <img src="../../assets/images/icon1.png" alt="">
                    <span>应用场景</span>
                  </div>
                  <div class="copywriting" style="margin-bottom:15px">
                    教学工作空间
                  </div>
                </div>
              </div>
              <div class="slutionmode_right" @click="showDisplay2">
                <span v-if="showhide2==true">收起</span>
                <span v-else>查看更多>></span>
              </div>
            </div>
            <div class="keyword">
              <span>关键字</span>
              <span style="margin-left:20px">
                <span class="label">教务</span>
                <span class="label">教学</span>
                <span class="label">教室</span>
                <span class="label">智能</span>
                <span class="label">智慧</span>
              </span>
            </div>
          </div>
          <div class="programme_one" style="margin-top:20px">
            <div class="slutionmode">
              <div class="slutionmode_left">
                <img src="../../assets/images/imges4.png" alt="">
              </div>
              <div class="slutionmode_mid">
                <div class="title">博彦智慧门店解决方案</div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>方案功能</span>
                </div>
                <div class="copywriting">
                  博彦智慧门店解决方案，是以降本增效为目标，“AI+大数据”为核心能力，帮助线下实体零售业实现商业智能化的一体化运营平台。方案应用
                  AI+数据收集和统计，为零售商铺提供客流分析、入店率、VIP客户识别、店铺热区、商品关注 度、远程巡店等各种服务，精确分析顾客属性
                  和消费特征。为管理者提供运营参考建议，提升商铺运营水平。
                </div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>开发背景</span>
                </div>
                <div class="copywriting">
                  在中国消费升级的大背景下, 消费者的需求日益细分、多变，品牌只有深入了解用户行为，对消费者的需求直接、快速地做出反应，才能在竞争
                  激烈的“战场”上存活。同时，门店货品的进销存工作，也不再是一个简单的流程关系，需要更深入、更近细化的分析货品与顾客行为之间关系。
                  因而，利用”AI+大数据“的智慧零售已经成为零售业的主要发展趋势。
                </div>
                <div v-show="showhide3">
                  <div class="slutionmode_log">
                    <img src="../../assets/images/icon1.png" alt="">
                    <span>解决方案优点</span>
                  </div>
                  <div class="copywriting">
                    <p>1.采用大数据分析能力，帮助客户打造营销大脑，协助客户建立基于线上线下数据融合的 “AI+大数据” 营销能力；</p>
                    <p>2.精准识别到店客户，了解个体消费偏好、精准营销，有效提高门店客单价、转化率；提高营 销收益，降低广告投入成本。</p>
                  </div>
                  <div class="slutionmode_log">
                    <img src="../../assets/images/icon1.png" alt="">
                    <span>应用场景</span>
                  </div>
                  <div class="copywriting" style="margin-bottom:15px">
                    商超、零售门店等
                  </div>
                </div>
              </div>
              <div class="slutionmode_right" @click="showDisplay3">
                <span v-if="showhide3==true">收起</span>
                <span v-else>查看更多>></span>
              </div>
            </div>
            <div class="keyword">
              <span>关键字</span>
              <span style="margin-left:20px">
                <span class="label">零售</span>
                <span class="label">商业</span>
                <span class="label">门店</span>
                <span class="label">消费</span>
              </span>
            </div>
          </div>
          <div class="programme_one" style="margin-top:20px">
            <div class="slutionmode">
              <div class="slutionmode_left">
                <img src="../../assets/images/imges5.png" alt="">
              </div>
              <div class="slutionmode_mid">
                <div class="title">博彦智慧校园解决方案</div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>方案功能</span>
                </div>
                <div class="copywriting">
                  博彦智慧校园是通过物联网、云计算、大数据等新技术，将学校教学、科研、管理等事务以及各类校园资源和应用系统高效整合，从而实现智慧化管理
                  和服务的新型信息化校园建设模式，以促进信息技术与教育教学融合、提高教与学的效果为目的，并能对教育教学、教育管理进行洞察和预测的智慧学习环境。
                </div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>开发背景</span>
                </div>
                <div class="copywriting">
                  信息化“十二五”规划中，浙江大学提出建设一个“令人激动”的“智慧校园”，智慧校园指的是以物联网为基础的智慧化的校园工作、学习和生活一体化环境，
                  无处不在的网络学习、融合创新的网络科研、透明高效的校务治理、丰富多彩的校园文化、方便周到的校园生活。简而言之，“要做一个安全、稳定、环保、节能的校园‘’。
                </div>
                <div v-show="showhide4">
                  <div class="slutionmode_log">
                    <img src="../../assets/images/icon1.png" alt="">
                    <span>解决方案优点</span>
                  </div>
                  <div class="copywriting">
                    <p>1.智慧教育环境：一方面，为受教育者和教育者提供工作学习生活的便利和舒适环境的调整；另一方为学校的运营提供更高效、更节能、更安全的物理空间运营；</p>
                    <p>2.智慧教育资源：为学习与科研的展开提供最大化帮助，实现授课、听课、资料查询、科研实践等教育资源一体化服务；</p>
                    <p>3.智慧服务:通过网络是校园+家庭无缝衔接，并为校园生活提供最便捷的服务。</p>
                  </div>
                  <div class="slutionmode_log">
                    <img src="../../assets/images/icon1.png" alt="">
                    <span>应用场景</span>
                  </div>
                  <div class="copywriting" style="margin-bottom:15px">
                    各个阶段教育场景
                  </div>
                </div>
              </div>
              <div class="slutionmode_right" @click="showDisplay4">
                <span v-if="showhide4==true">收起</span>
                <span v-else>查看更多>></span>
              </div>
            </div>
            <div class="keyword">
              <span>关键字</span>
              <span style="margin-left:20px">
                <span class="label">校园</span>
                <span class="label">教学</span>
                <span class="label">科研</span>
                <span class="label">学校</span>
                <span class="label">智慧</span>
              </span>
            </div>
          </div>
          <div class="programme_one" style="margin-top:20px">
            <div class="slutionmode">
              <div class="slutionmode_left">
                <img src="../../assets/images/imges6.png" alt="">
              </div>
              <div class="slutionmode_mid">
                <div class="title">博彦智慧会议室解决方案</div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>方案功能</span>
                </div>
                <div class="copywriting">
                  博彦智能会议室解决方式是从市场调研得来的实际需求出发，帮助企业、孵化器、共享空间等客户解决会议室资源利用率的相关痛点，通过对会议
                  室数字化、智能化的改造，使会议室内的各类设备高度集成，一体化操作，并通过OA系统，将客户的使用预约、会议提醒、会议应用等多方面资源
                  整合，方便客户的同时提升了会议室利用率，协调使用冲突，优化会议流程。
                </div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>开发背景</span>
                </div>
                <div class="copywriting">
                  当前社会的高效率快节奏运转情况下，对企业的运作效率有了更高的要求，各方面的工作都要求内部高度协作，这时往往需要频繁进行沟通，而会议的
                  频次也因此而增加，许多企业都面临着会议频繁但会议室不够使用的情况。博彦智能会议室解决方案的出现，正是帮助企业对此类情况进行优化，确保
                  会议室使用的效率更高，同时应用物联网技术改造的会议室将为与会者提供更为便捷舒适的会议环境，有助于会议效率的提升。
                </div>
                <div v-show="showhide5">
                  <div class="slutionmode_log">
                    <img src="../../assets/images/icon1.png" alt="">
                    <span>解决方案优点</span>
                  </div>
                  <div class="copywriting">
                    <p>1.中控集成：能够实现一键管理，一键开启电动窗帘的的开合，电动幕布的升降、灯光开关的控制、方便操作管理；</p>
                    <p>2.便捷预定：可查看会议室使用情况，按日期查看可预定情况，预定人员姓名，联系方式，避免会议使用冲突；</p>
                    <p>3.智能提醒：可添加参会人员的基本信息，参会人员接受通知，自动提醒，避免遗漏；</p>
                    <p>4.资源高效：查看会议室的大小以及配置情况，根据参会人数及需求选择最合适的会议室。</p>
                  </div>
                  <div class="slutionmode_log">
                    <img src="../../assets/images/icon1.png" alt="">
                    <span>应用场景</span>
                  </div>
                  <div class="copywriting" style="margin-bottom:15px">
                    共享办公空间、孵化器、各类型企业等
                  </div>
                </div>
              </div>
              <div class="slutionmode_right" @click="showDisplay5">
                <span v-if="showhide5==true">收起</span>
                <span v-else>查看更多>></span>
              </div>
            </div>
            <div class="keyword">
              <span>关键字</span>
              <span style="margin-left:20px">
                <span class="label">会议室</span>
                <span class="label">企业</span>
                <span class="label">智慧</span>
                <span class="label">效率</span>
                <span class="label">空间</span>
              </span>
            </div>
          </div>
        </div>

      </div>

      <!-- 功能服务 -->
      <div class="sceneList" v-if="this.tableStatus==2">
        <img src="../../assets/images/title_m.png" alt="">
        <div class="programmeList">
          <div class="programme_one">
            <div class="slutionmode">
              <div class="slutionmode_left">
                <img src="../../assets/images/imges7.png" alt="">
              </div>
              <div class="slutionmode_mid">
                <div class="title">BY-SmartVent</div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>方案功能</span>
                </div>
                <div class="copywriting">
                  BY Smart Vent是博彦智慧建筑操作系统（BY OS）下的专项解决方案。方案旨为达到对空间内空气流动管理的目的，实现安全通风、优化供冷
                  供热、监控关键指标、诊断故障并报告、工单排发育跟踪等具体功能，简化运营人员工作内容，降低人工工作量的一键式控制解决方案。
                </div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>开发背景</span>
                </div>
                <div class="copywriting">
                  随着工业及交通运输业的不断发展，大量的有害物质被排放到空气中，改变了空气的正常组成，使空气质量变坏。当我们生活在受到污染的空气之中
                  健康就会受到影响。出于健康管理的必要性，通风系统的管理极为重要，通过对通风系统（包含且不限于新风、冷暖风空调等系统）可有效防止空气中的有害物质与致病病菌、病毒的扩散。
                </div>
                <div v-show="showhide6">
                  <div class="slutionmode_log">
                    <img src="../../assets/images/icon1.png" alt="">
                    <span>解决方案的安全原则</span>
                  </div>
                  <div class="copywriting">
                    <p>1.保证通风量。足够的通风量一方面保证带走空气中的各类致病因子，尽量消除污染源；另一方面也起到稀释作用，尽量降低带病飞沫和污染颗粒物浓度；</p>
                    <p>2.避免不同区域的空气串联。共用同一组空调的不同区域空气相互流通，很可能造成交叉感染，这一点应该是很多人担心的地方。应该保证室内空气按可控制的方向有组织的流动；</p>
                    <p>3 及时消毒，有效阻隔。保证对送风口、回风口、表冷器、凝水盘等关键部件进行及时有效消毒，同时保证通风系统的过滤层有足够的过滤功能。</p>
                  </div>
                  <div class="slutionmode_log">
                    <img src="../../assets/images/icon1.png" alt="">
                    <span>应用场景</span>
                  </div>
                  <div class="copywriting" style="margin-bottom:15px">
                    装有新风系统空调系统的建筑物空间或其他非开放式空间。
                  </div>
                </div>
              </div>
              <div class="slutionmode_right" @click="showDisplay6">
                <span v-if="showhide6==true">收起</span>
                <span v-else>查看更多>></span>
              </div>
            </div>
            <div class="keyword">
              <span>关键字</span>
              <span style="margin-left:20px">
                <span class="label">通风</span>
                <span class="label">节能</span>
                <span class="label">智能</span>
                <span class="label">楼宇运营</span>
              </span>
            </div>
          </div>

          <div class="programme_one" style="margin-top:20px">
            <div class="slutionmode">
              <div class="slutionmode_left">
                <img src="../../assets/images/imges8.png" alt="">
              </div>
              <div class="slutionmode_mid">
                <div class="title">区域经济解决方案</div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>方案功能</span>
                </div>
                <div class="copywriting">
                  博彦区域经济解决方案是以数据为核心，汇集基础数据、政策数据、信用数据、舆情数据等四大维度，对相应地区GDP、产业结构、城市化水平等
                  指标进行动态监测，为领导经济决策提供支持、提升区域经济公共服务功能为目的综合解决方案。
                </div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>开发背景</span>
                </div>
                <div class="copywriting">
                  随着全国城市建设步伐的提速，运用技术手段探索高效、高产、低投入的经济发展方式成为政府单位的工作重心。“十二五”核心发展战略中，
                  以区域经济产业结构的转型、社会创新管理等为核心目标，做到充分发挥区位、产业、资源等优势标，必须以信息、数据作为依托。区域经济解决方案正是基于此背景，面向市场实际需求研发而来。
                </div>
                <div v-show="showhide7">
                  <div class="slutionmode_log">
                    <img src="../../assets/images/icon1.png" alt="">
                    <span>解决方案优点</span>
                  </div>
                  <div class="copywriting">
                    <p>1.严谨：数据来自央行授信；评价标准维度多样；系统+人工双重评判；</p>
                    <p>2.丰富；四大类核心数据，9个信息分类，数百种数据类型；</p>
                    <p>3 可视化：帮助领导直观可见辅助决策、可视化展现与交互、政企互动与政府内部交流。</p>
                  </div>
                  <div class="slutionmode_log">
                    <img src="../../assets/images/icon1.png" alt="">
                    <span>应用场景</span>
                  </div>
                  <div class="copywriting" style="margin-bottom:15px">
                    政府公共管理、行政管理等
                  </div>
                </div>
              </div>
              <div class="slutionmode_right" @click="showDisplay7">
                <span v-if="showhide7==true">收起</span>
                <span v-else>查看更多>></span>
              </div>
            </div>
            <div class="keyword">
              <span>关键字</span>
              <span style="margin-left:20px">
                <span class="label">指标</span>
                <span class="label">数据</span>
                <span class="label">企业风险</span>
                <span class="label">产行形式</span>
              </span>
            </div>
          </div>
        </div>

      </div>

      <!-- 硬件 -->
      <div class="sceneList" v-if="this.tableStatus==3">
        <img src="../../assets/images/title_r.png" alt="">
        <div class="programmeList">
          <div class="programme_one">
            <div class="slutionmode">
              <div class="slutionmode_left">
                <img src="../../assets/images/imges9.png" alt="">
              </div>
              <div class="slutionmode_mid">
                <div class="title">博彦边缘计算控制器</div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>方案功能</span>
                </div>
                <div class="copywriting">
                  帮助智能楼宇系统，实现设备侧的数据智能，并内建数据库进行数据管理；打通系统与设备的连接瓶颈，做到互联互通；机电系统等控制的优化落地；
                  隔离外网，将数据与控制逻辑留在本地，保证安全；专家级的咨询服务与运维报告，针对性的问题解决放哪。
                </div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>开发背景</span>
                </div>
                <div class="copywriting">
                  随着信息技术的发展，智能建筑系统已经成为楼宇管理、楼宇控制的重要组成部分。但是，当前的各种智能建筑系统仍然存在诸多痛点，比如：无数据
                  分析、无有效控制策略、数据质量低、无法物联互通等等，有鉴于此，博彦科技针对此类问题推出的全新产品-BY -SmartEdge边缘计送控制器。
                </div>
                <div v-show="showhide8">
                  <div class="slutionmode_log">
                    <img src="../../assets/images/icon1.png" alt="">
                    <span>解决方案优点</span>
                  </div>
                  <div class="copywriting">
                    <p>1.诊断分析：用能统计与分析、关键指标分析、故障检测分析；</p>
                    <p>2.优化控制：机电系统各设备的专家控制策略、机电全系统的优化算法。</p>
                  </div>
                  <div class="slutionmode_log">
                    <img src="../../assets/images/icon1.png" alt="">
                    <span>适用项目</span>
                  </div>
                  <div class="copywriting" style="margin-bottom:15px">
                    <p>1.能源管理、故障诊断分析、节能优化控制等相关项目；</p>
                    <p>2.中小型楼宇项目子系统独立控制；</p>
                    <p>3.对接各种规模楼宇的现有楼控系统；</p>
                    <p>4.大型楼宇项目的综合能源管理与优化控制</p>
                  </div>
                </div>
              </div>
              <div class="slutionmode_right" @click="showDisplay8">
                <span v-if="showhide8==true">收起</span>
                <span v-else>查看更多>></span>
              </div>
            </div>
            <div class="keyword">
              <span>关键字</span>
              <span style="margin-left:20px">
                <span class="label">设备</span>
                <span class="label">能源</span>
                <span class="label">管理</span>
              </span>
            </div>
          </div>

          <div class="programme_one" style="margin-top:20px">
            <div class="slutionmode">
              <div class="slutionmode_left">
                <img src="../../assets/images/imges10.png" alt="">
              </div>
              <div class="slutionmode_mid">
                <div class="title">博彦低温等离子体消毒灭菌系统解决方案</div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>方案功能</span>
                </div>
                <div class="copywriting">
                  博彦低温等离子体系统解决方案，是博彦智慧楼宇操作系统（BY OS）的功能性子系统，是为客户同时解决空间内消毒杀菌与空气质量改善两大需求
                  的智慧化解决方案。方案基于物联网和互联网技术，对环境进行监测和治理，有效改善环境的空气质量，无死角全方位主动式治理，高能电子会迅速
                  将有害分子还原成氧气和水分子，无二次污染，同时利用静电作用高效杀灭细菌病毒，保障室内空气安全。
                </div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>开发背景</span>
                </div>
                <div class="copywriting">
                  近些年来随着各类流行性传染疾病，如SARS、禽流感、甲型H1N1等病毒的频繁来袭，使得人们对室内空气质量越来越关注。作为新兴技术，低温等离
                  子体技术在空气治理方面具有高效、清洁、低能耗等独特优势，博彦正是基于此项技术的多重优势，研发低温等离子体消毒灭菌系统解决方案，作为
                  BY OS的重要组成部分，保障建筑物空间内的空气质量，提升建筑物的运营服务水平
                </div>
                <div v-show="showhide9">
                  <div class="slutionmode_log">
                    <img src="../../assets/images/icon1.png" alt="">
                    <span>解决方案优点</span>
                  </div>
                  <div class="copywriting">
                    <p>1.监测空气质量：可同时监测有毒有害气体、监测负氧离子浓度、监测室内环境等</p>
                    <p>2.治理空气：调整负离子浓度、增加氧浓度、释放消毒因子消毒、分解当量污染物等；</p>
                    <p>3 无需耗材：以空气中的氧气和水分子为原料，经高压介质阻挡放电形成消毒因子。</p>
                  </div>
                  <div class="slutionmode_log">
                    <img src="../../assets/images/icon1.png" alt="">
                    <span>应用场景</span>
                  </div>
                  <div class="copywriting" style="margin-bottom:15px">
                    可接入电源及网络的建筑物及其他非开放式空间。
                  </div>
                </div>
              </div>
              <div class="slutionmode_right" @click="showDisplay9">
                <span v-if="showhide9==true">收起</span>
                <span v-else>查看更多>></span>
              </div>
            </div>
            <div class="keyword">
              <span>关键字</span>
              <span style="margin-left:20px">
                <span class="label">杀菌</span>
                <span class="label">消毒</span>
                <span class="label">改善空气质量</span>
              </span>
            </div>
          </div>
          <div class="programme_one" style="margin-top:20px">
            <div class="slutionmode">
              <div class="slutionmode_left">
                <img src="../../assets/images/imges11.png" alt="">
              </div>
              <div class="slutionmode_mid">
                <div class="title">博彦智能卫士解决方案</div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>方案功能</span>
                </div>
                <div class="copywriting">
                  采用模块化与微服务的形式，软硬件综合安防监控，对进出人员识别、测温，并依据监测结果给出指引性的隔离防护，为疫情特殊事件的处理
                  提供科学指引。支持应急临时处理需求，软硬件集成封箱，轻松架设部署，外部接口齐全，高度可扩展。
                </div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>开发背景</span>
                </div>
                <div class="copywriting">
                  面对新型冠状病毒带来的威胁，如何高效监测、识别、追踪、过滤复工复产人员信息，使企业、社区等实现精准管控，高效运行，成为智慧卫士需要解决的基本痛点
                </div>
                <div v-show="showhide10">
                  <div class="slutionmode_log">
                    <img src="../../assets/images/icon1.png" alt="">
                    <span>解决方案优点</span>
                  </div>
                  <div class="copywriting">
                    <p>1.部署便捷：采用航空箱、便携电脑、超高精多感探头、数据采集器等多种硬件设备、搭配集智智慧物联管控平台，为用户安防布控、人员出入核验、处理突发应急情况提供多方位的辅助和保障</p>
                    <p>2.智能识别：集成大数据分析系统、监测日志管理系统、动态监测系统、人员信息采集系统，实现不停留体温检测、人员身份识别、人员特征分析等多重功能。</p>
                  </div>
                  <div class="slutionmode_log">
                    <img src="../../assets/images/icon1.png" alt="">
                    <span>应用场景</span>
                  </div>
                  <div class="copywriting" style="margin-bottom:15px">
                    开放和非开放区域的入口安全防疫检查
                  </div>
                </div>
              </div>
              <div class="slutionmode_right" @click="showDisplay10">
                <span v-if="showhide10==true">收起</span>
                <span v-else>查看更多>></span>
              </div>
            </div>
            <div class="keyword">
              <span>关键字</span>
              <span style="margin-left:20px">
                <span class="label">防疫检查</span>
                <span class="label">测温</span>
                <span class="label">行为跟踪</span>
                <span class="label">便携</span>
              </span>
            </div>
          </div>
          <div class="programme_one" style="margin-top:20px">
            <div class="slutionmode">
              <div class="slutionmode_left">
                <img src="../../assets/images/imges12.png" alt="">
              </div>
              <div class="slutionmode_mid">
                <div class="title">博彦智能消毒灯解决方案</div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>方案功能</span>
                </div>
                <div class="copywriting">
                  博彦智能消毒灯解决方案，是博彦智慧楼宇操作系统（BY OS）的功能性子系统，为用户解决空间内部灭菌消毒的紧迫需求，方案选用
                  紫外线+臭氧双重功能的消毒设备，并实现该系统与BY OS的接通，确保消毒灯的运维操作在BY OS中统一调度与管理。
                </div>
                <div class="slutionmode_log">
                  <img src="../../assets/images/icon1.png" alt="">
                  <span>开发背景</span>
                </div>
                <div class="copywriting">
                  近年来多种呼吸系统疾病流行，这些疾病大多带有传染性，建筑物空间或其他非开放式空间内，人员的往来出入与工作学习等活动，
                  会携带不同的细菌或病毒进入空间并随着人员之间的接触而传播。有鉴于此，空间内的消毒杀菌工作成为刚需，为解决一般单位没
                  有消毒设备的管理与维护人员，并且消毒过程中空间内不能滞留人员等问题，博彦科技研发智能消毒灯解决方案。
                </div>
                <div v-show="showhide11">
                  <div class="slutionmode_log">
                    <img src="../../assets/images/icon1.png" alt="">
                    <span>解决方案优点</span>
                  </div>
                  <div class="copywriting">
                    <p>1.智能控制，随时随地可知道消毒灯的开关状态，可远程开启或者关闭消毒灯，并可监测消毒灯的使用情况与使用寿命；</p>
                    <p>2.高效消毒，快速破坏微生物机体细胞中的DNA或RNA的分子结构，造成生长性细胞死亡和(或)再生性细胞死亡，达到杀菌消毒的效果。</p>
                  </div>
                  <div class="slutionmode_log">
                    <img src="../../assets/images/icon1.png" alt="">
                    <span>应用场景</span>
                  </div>
                  <div class="copywriting" style="margin-bottom:15px">
                    可接入电源及网络的建筑物及其他非开放式空间。
                  </div>
                </div>
              </div>
              <div class="slutionmode_right" @click="showDisplay11">
                <span v-if="showhide11==true">收起</span>
                <span v-else>查看更多>></span>
              </div>
            </div>
            <div class="keyword">
              <span>关键字</span>
              <span style="margin-left:20px">
                <span class="label">杀菌</span>
                <span class="label">消毒</span>
                <span class="label">紫外</span>
                <span class="label">智能</span>
                <span class="label">遥控</span>
              </span>
            </div>
          </div>
        </div>

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
    return {
      tableStatus:1,
      showhide:false,
      showhide1:false,
      showhide2:false,
      showhide3:false,
      showhide4:false,
      showhide5:false,
      showhide6:false,
      showhide7:false,
      showhide8:false,
      showhide9:false,
      showhide10:false,
      showhide11:false,
      show2:false
    };
  },
  created() {
  },
  methods: {
    tableClick(val){
      this.tableStatus = val
      console.log(val)
    },
    showDisplay(){
      if(this.showhide==false){
        this.showhide = true
      }else{
        this.showhide = false
      } 
    },
    showDisplay1(){
      if(this.showhide1==false){
        this.showhide1 = true
      }else{
        this.showhide1 = false
      } 
    },
    showDisplay2(){
      if(this.showhide2==false){
        this.showhide2 = true
      }else{
        this.showhide2 = false
      } 
    },
    showDisplay3(){
      if(this.showhide3==false){
        this.showhide3 = true
      }else{
        this.showhide3 = false
      } 
    },
    showDisplay4(){
      if(this.showhide4==false){
        this.showhide4 = true
      }else{
        this.showhide4 = false
      } 
    },
    showDisplay5(){
      if(this.showhide5==false){
        this.showhide5 = true
      }else{
        this.showhide5 = false
      } 
    },
    showDisplay6(){
      if(this.showhide6==false){
        this.showhide6 = true
      }else{
        this.showhide6 = false
      } 
    },
    showDisplay7(){
      if(this.showhide7==false){
        this.showhide7 = true
      }else{
        this.showhide7 = false
      } 
    },
    showDisplay8(){
      if(this.showhide8==false){
        this.showhide8 = true
      }else{
        this.showhide8 = false
      } 
    },
    showDisplay9(){
      if(this.showhide9==false){
        this.showhide9 = true
      }else{
        this.showhide9 = false
      } 
    },
    showDisplay10(){
      if(this.showhide10==false){
        this.showhide10 = true
      }else{
        this.showhide10 = false
      } 
    },
    showDisplay11(){
      if(this.showhide11==false){
        this.showhide11 = true
      }else{
        this.showhide11 = false
      } 
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
    background: url(../../assets/images/pro_banner.png) center center;
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
        font-size: 50px;
        .span{
          margin: auto;
          width: 95px;
          height: 3px;
          background: #fff;
          margin-top: 5px;
        }
      }
    }
  }
  .table_list{
      width: 100%;
      height: 56px;
      background: #f3f6fc;
      .table_top{
        margin: 0 20%;
        height: 56px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        div{
          height:56px;
          line-height: 56px;
          border-top: none;
          border-left: none;
          border-right: none;
          cursor: pointer;
          padding: 0px 10px;
        }
      }
    }
  .active{
    color: #1A66FF;
    border-bottom: 2px solid #1A66FF;
  }
  .contact_box{
      width: 300px;
      height: 200px;
      text-align: right;
      position: fixed;
      top: 65%;
      right: 0;
      display: flex;
      .transition-box{
        background: #fff;
        color: black;
        width: 225px;
        height: 130px;
        border: 1px solid #5CACF5;
        position: relative;
        left: 1px;
        top: 56px;
        .pc_l{
          text-align: left;
          margin: 15px 10px;
          span{
            color: #000;
            font-size: 12px;
            margin-left: 10px;
          }
        }
      }
    .contact{
      width: 100px;
      height: 200px;
      text-align: right;
      position: fixed;
      top: 65%;
      right: 0;
      cursor: pointer;
      background: url(../../assets/images/information.png) no-repeat center center;
      span{
        width: 20px;
        writing-mode:vertical-lr;
        position: relative;
        right: 41px;
        top: 80px;
        padding-top: 10px;  
        font-size: 16px;
        color: #000;
      }
    }
  }
  .content {
    padding: 15px 0;
    color: #3f3f3f;
    .sceneList{
      width: 100%;
      height: 100%;
      // border: 1px solid red;
      margin-top: 72px;
      text-align: center;
      .programmeList{
        width: 100%;
        margin-top: 72px;
        .programme_one{
          width: 100%;
          // height:354px;
          background: #FBFBFC;
          border: 1px solid #D6D9DC;
          margin-top: 72px;
          .slutionmode{
            width: 100%;
            height: 100%;
            display: flex;
            margin-top: 26px;
            .slutionmode_left{
              width: 125px;
              height: 100%;
            }
            .slutionmode_mid{
              width: 948px;
              // height: 100%;
              border-bottom: 1px solid #D6D9DC;
              text-align: left;
              .title{
                color: #000;
                font-size: 22px;
              }
              .slutionmode_log{
                margin-top: 26px;
                color: #000;
                font-size: 16px;
              }
              .copywriting{
                margin-top: 11px;
                font-size: 14px;
                color: #333333;
              }
            }
            .slutionmode_right{
              width: 125px;
              height: 100%;
              line-height: 300px;
              color: #1A66FF;
              font-size: 16px;
              cursor: pointer;
            }
          }
          .keyword{
            text-align: left;
            width: 948px;
            height: 78px;
            line-height: 78px;
            margin-left: 125px;
            color: #000000;
            font-size: 18px;
            .label{
              width: 95px;
              height: 29px;
              border: 1px solid #778495;
              border-radius: 15px;
              padding: 4px 33px;
              color: #333;
              font-size: 14px;
              margin: 0 5px;
            }
          }
        }
        .programme_one:hover{
          box-shadow:4px 4px 5px 2px #D6D9DC;
        }
      }
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

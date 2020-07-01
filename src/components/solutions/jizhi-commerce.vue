<template>
  <div class="solution_detail">
    <headerBar />
    <div class="jizhi-con"></div>
    <footerBar />
  </div>
</template>

<script>
import footerBar from "../common/footer";
import headerBar from "../common/header";
export default {
  components: {
    footerBar,
    headerBar
  }
};
</script>
<style lang="less" scoped>
.solution_detail {
  .jizhi-con {
    height: 5914px;
    background: url('../../assets/images/jizhishenghuo.jpg') no-repeat center;
  }
}
</style>
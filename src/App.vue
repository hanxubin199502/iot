<template>
  <div id="app">   
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
 @import url(./assets/iconfont/iconfont.css);
@import './assets/less/reset.css';
@import './assets/less/reset-element.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  
}
</style>

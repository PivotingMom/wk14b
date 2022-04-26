<template>
<div id="app">
   <img alt="blackgirlgamerslogo" src="https://nitter.net/pic/pbs.twimg.com%2Fprofile_images%2F1476151936403521536%2F4p31wxCt.jpg" height="110">
  <HomeView/>
<AppFooter/>
<router-view/>
    
</div>
</template>

<script>
import HomeView from '@/components/HomeView.vue'

import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'App',
  components : {
    HomeView, AppFooter
  },

  data: () => ({
    //
  }),
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #462c50;
  background-color: aqua;
}
</style>
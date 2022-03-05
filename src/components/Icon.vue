<template>
  <i class="iconfont"
  :class="[iconClass,extraClass]"></i>
</template>

<script>
var map = {
  pause:'icon-zanting',
  play:'icon-bofang',
  menu:'icon-caidan',
  search:'icon-sousuo',
  load:'icon-xiazai',
  goback:'icon-fanhui',
  like:'icon-shoucang'
}
export default {
  props:{
    type:{
      type:String,
      require:true
    },
    extraClass:{
      type:String,
      default:''
    }
  },
  computed:{
    iconClass(){
      return map[this.type];
    }
  }
}
</script>

<style scoped>
@import "../assets/font/iconfont.css";
</style>
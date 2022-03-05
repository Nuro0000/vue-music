<template>
  <div class="th-back-top" v-show="show" @click="goTop">
    <span class="bg-back-icon"></span>
  </div>
</template>

<script>
export default {
  name:'BackTop',
  data(){
    return{
      show:false
    }
  },
  created(){
    //滚动超过屏幕高度时显示
    const winHeight = document.documentElement.clientHeight;
    window.addEventListener("scroll",()=>{
      let scrollHeight = document.documentElement.scrollTop;
      if(winHeight<scrollHeight){
        this.show = true;
      }else{
        this.show = false;
      }
    })
  },
  methods:{
    goTop(){
      document.documentElement.scrollTop = 0;
    }
  }
}
</script>

<style>
.th-back-top {
    position: fixed;
    right: 15px;
    bottom: 104px;
    height: 39px;
    width: 80px;
    z-index: 0;
    opacity: 0.8;
    text-align: right;
}

.bg-back-icon {
    display: inline-block;
    background: url(//img.lanrentuku.com/img/allimg/1206/5-120601160002-50.png)
        no-repeat 0 0;
    -webkit-background-size: 39px 39px;
    background-size: 39px 39px;
    width: 39px;
    height: 39px;
}
</style>
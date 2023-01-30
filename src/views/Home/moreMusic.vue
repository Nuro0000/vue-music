<template>
  <div>
    <div class="list clearfix">
      <div class="header">
        <span class="goback" @click="goback">&lt;</span>
        <h3>更多(热门歌单)</h3>
      </div>
      <router-link
        class="item"
        v-for="(item,index) in moreDatas"
        :to="`/detail/${item.id}`"
        :key="index"
        :class="{'clear-padding':index%3!==1}"
      >
        <div class="img-wrapper">
          <img :src="item.coverImgUrl" />
        </div>
        <div class="main">{{cutString(item.name)}}</div>
      </router-link>
    </div>
    <div class="more" ref="loadmore">下拉加载更多…</div>
  </div>
</template>

<script>
export default {
  name: "More",
  data () {
    return {
      moreDatas: [],
      getParmas: {
        offset: 0,
        limit: 18
      }

    }
  },
  mounted () {
    //获取更多音乐
    this.getMoreMusic();

    //触底加载更多数据
    //添加滚动到底部的监听

    var timer = null;
    window.addEventListener("scroll", () => {
      //滚动高度
      const scrollTop = document.documentElement.scrollTop;
      //视口高度
      const clientHeiht = document.documentElement.clientHeight;
      //总高度
      const scrollHeight = document.documentElement.scrollHeight;

      if (scrollTop + clientHeiht >= scrollHeight-1) {   //滑动到底部
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          //获取新数据
          this.getMoreMusic();
        }, 300)
      }
    })
  },
  methods: {
    cutString (str) {
      if(str){
      if (str.length > 8) {
        return str.substring(0, 8) + "..."
      }
      return str;
      }
      return '';
    },
    getMoreMusic () {
      this.$api.getMoreMusic(this.getParmas).then(res => {
        if (res.playlists == 0) {
          this.$refs.loadmore.innerHTML = "已加载到尽头……";
          return
        }
        this.getParmas.offset += this.getParmas.limit;
        this.moreDatas.push.apply(this.moreDatas, res.playlists);
      })
    },
    goback(){
      this.$router.go(-1);
    }
  }
}
</script>

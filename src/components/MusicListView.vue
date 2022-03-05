<template>
  <div class="collection-block">
    <div class="block-padding">
      <div class="title">
        <h3>{{title}}</h3>
        <router-link to="/more">更多</router-link>
      </div>
      <div class="list clearfix">
        <router-link
          tag="div"
          :to="entry(item)"
          class="item"
          v-for="(item,index) in songsData"
          :key="index"
          :class="{'clear-padding':index%3!==1}"
        >
          <div class="img-wrapper">
            <img :src="item.picUrl" />
          </div>
          <div class="main">{{cutString(item.name)}}</div>
          <!-- <div class="gray">{{cutString(item.copywriter)}}</div> -->
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    songsData: {
      type: Array,
      default: function () { return [] }
    },
    MusicType: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      map: { 1: '推荐歌单', 2: '推荐新歌', 3: '摇滚榜' }
    }
  },
  computed:{
    title(){
      if(this.MusicType == "1"){
        return "推荐歌单"
      }else{
        return "新歌榜"
      }
    }
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
    entry(item){
      if(this.MusicType == "1"){
        return `/detail/${item.id}`
      }else{
        return `/player/${item.id}/${item.name}/${encodeURIComponent(item.picUrl)}`
      }
    }
  }
}

</script>

<style>
</style>
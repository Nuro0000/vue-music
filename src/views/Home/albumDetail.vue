<template>
  <div>
    <div class="header">
      <span class="goback" @click="goback">&lt;</span>
      <h3>歌单详细</h3>
    </div>
    <div class="list clearfix">
      <router-link
        tag="div"
        class="item"
        v-for="(item,index) in musics"
        :to="`/player/${item.id}/${item.name}/${setUrl(item.al.picUrl)}`"
        :key="index"
        :class="{'clear-padding':index%3!==1}"
      >
        <div class="img-wrapper">
          <img :src="item.al.picUrl" />
        </div>
        <div class="main">{{cutString(item.name)}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Details",
  props: ['id'],
  data () {
    return {
      musics: []
    }
  },
  mounted () {
    this.$api.getMusicDetails({
      id: this.id
    }).then(res => {
      this.musics = res.playlist.tracks;
    })
  },
  methods: {
    cutString (str) {
      if (str) {
        if (str.length > 8) {
          return str.substring(0, 8) + "..."
        }
        return str;
      }
      return '';
    },
    goback(){
      this.$router.go(-1);
    },
    setUrl(url){
      if(url){
        return encodeURIComponent(url);
      }
    }
  }
}
</script>

<style>
</style>
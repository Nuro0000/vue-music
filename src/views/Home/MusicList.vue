<template>
  <div>
    <MusicListView MusicType="1" :songsData="recommends" />
    <MusicListView MusicType="2" :songsData="newSongs" />
  </div>
</template>

<script>
import MusicListView from "@/components/MusicListView.vue"
export default {
  components: {
    MusicListView
  },
  data () {
    return {
      recommends:[],
      newSongs: []
    }
  },
  created () {
    this.$api.getRecommends({limit:12}).then(res => {
      this.recommends = res.result;
    }),
    this.$api.getNewSongs().then(res=>{
      this.newSongs = res.result;
      console.log('this.newSongs: ', this.newSongs);

    })
  }
}
</script>

<style>
</style>
<template>
  <div>
    <input
      type="text"
      v-model="searchText"
      @keydown.enter="searchHandle"
      autocomplete="on"
    />
    <button @click="searchHandle">搜索</button>
    <ul>
      <router-link
        tag="li"
        v-for="(item,index) in searchData"
        :key="index"
        :to="{name:'Player',params:{id:item.id,name:item.name,image:encodeURIComponent(item.album.artist.img1v1Url)}}"
      >{{item.name}}</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Search",
  data () {
    return {
      searchText: "",
      searchData: []
    }
  },
  methods: {
    searchHandle () {
      this.$api.getSearch({
        keywords: this.searchText
      }).then(res => {
        this.searchData = res.result.songs;
      })
    }
  }

}
</script>

<style scoped>
</style>
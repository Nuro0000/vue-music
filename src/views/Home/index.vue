<template>
  <div class="home">
    <MusicList />
    <DJTabs />
  </div>
</template>

<script>
import MusicList from "./MusicList.vue"
import DJTabs from "./DJTabs.vue"

export default {
  name: 'Home',
  components: {
    MusicList,
    DJTabs
  }
}
</script>

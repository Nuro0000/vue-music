<template>
  <div class="play">
    <div class="D-header">
      <div class="D-title">
        <div @click="goback">
          <Icon type="goback" class="left" />
        </div>

        <!-- 标题 -->
        <div class="music-info">
          <p>{{name}}</p>
        </div>
        <router-link to="/search">
          <Icon type="search" class="right" />
        </router-link>
      </div>
    </div>

    <div class="song-info">
      <!-- 图片 -->
      <div class="song-info-img">
        <img :src="picUrl" alt />
      </div>
      <div class="iconbox">
        <Icon type="like" class="left" />
        <i class="box"></i>
        <Icon type="load" class="right" />
      </div>
    </div>
    <div class="song">
      <Lrc :id="id" :currentTime="currentTime"/>
      <audio ref="player" controls :src="musicData.url"></audio>
    </div>
  </div>
</template>

<script>
import Lrc from "@/components/Lrc.vue";
export default {
  props: [
    'id',
    'name',
    'image'
  ],
  components: {
    Lrc
  },
  computed: {
    picUrl () {
      return decodeURIComponent(this.image);
    }
  },
  data () {
    return {
      musicData: {},
      currentTime:0
    }
  },
  mounted () {
    //获取播放数据
    this.$api.getPlayer({
      id: this.id
    }).then(res => {
      this.musicData = res.data[0];
    });
    this.addEventHandle();
  },
  beforeDestroy(){
    this.removeEventHandle();
  },
  methods: {
    goback () {
      this.$router.go(-1);
    },
    addEventHandle(){
      this.$refs.player.addEventListener("timeupdate",this.getCurrentTime);
    },
    removeEventHandle(){
      this.$refs.player.removeEventListener("timeupdate",this.getCurrentTime);
    },
    getCurrentTime(){
      this.currentTime = this.$refs.player.currentTime;
    }
  }
}
</script>

<style scoped>
.D-header {
  padding: 15px;
}

.music-info {
  flex: 1;
  font-size: 20px;
}

.D-title {
  display: flex;
  text-align: center;
}

.left {
  font-size: 30px;
}

.ca {
  color: red;
}

.right {
  font-size: 30px;
}

.song-info {
  padding: 15px;
}

.song-info-img {
  text-align: center;
}

.song-info-img img {
  width: 50%;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(50, 50, 50, 0.31);
}

.song-lrc {
  margin-top: 10px;
  min-height: 50px;
}

.iconbox {
  display: flex;
  margin-top: 30px;
}

.iconbox .box {
  flex: 1;
}

.song {
  width: 100%;
  text-align: center;
}

.song audio {
  width: 80%;
}

.active {
  color: #222;
}

.author {
  font-size: 12px;
  color: #999;
}
</style>
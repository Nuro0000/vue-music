<template>
  <div class="lrcContainer">
    <div class="lrc" ref="lrc">
      <p
        class="lrc-p"
        :class="{active:isActiveLrc(index)}"
        v-for="(item,index) in LrcNodes"
        :key="index"
      >{{item}}{{scrollLrc(index)}}</p>     <!-- 所有元素都设有该事件,满足条件(歌词对应上)的元素会触发 -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Lrc",
  props: {
    id: {
      type: [String, Number],
      require: true
    },
    currentTime: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      lrcData: "",
      timeNodes: [],
      LrcNodes:[]
    }
  },
  mounted () {
    this.$api.getLrc({
      id: this.id
    }).then(res => {
      this.lrcData = res.lrc.lyric;
      this.filterLRC(this.lrcData);
    })
  },
  methods: {
    filterLRC (values) {
      if (!values) return;
      var lyrics = values.split("\n");
      var reg = /\[\d*:\d*(\.|:)\d*]/g;

      for (let i = 0; i < lyrics.length; i++) {
        //获取时间(文本)
        var timeRegArr = lyrics[i].match(reg);
        if (!timeRegArr) continue;    //最后一个为null，不处理

        //获取歌词
        var content = lyrics[i].replace(timeRegArr, "");

        //时间解析
        var t = timeRegArr[0];
        var min = parseInt(t.match(/\[\d*/i).toString().slice(1));
        var sec = parseInt(t.match(/\:\d*/i).toString().slice(1));
        var time = min * 60 + sec;
        this.timeNodes.push(time);
        this.LrcNodes.push(content);
      }

      // this.lrcData = lrc;
    },
    isActiveLrc (index) {
      return this.currentTime > this.timeNodes[index] && this.currentTime < this.timeNodes[index + 1];
    },
    scrollLrc (index) {
      if (this.isActiveLrc(index)) {
        this.$refs.lrc.style.top = -30 * (index - 2) + "px";
      }
    }
  }
}
</script>

<style>
.active {
  color: red;
}

.lrcContainer {
  width: 100%;
  height: 150px;
  overflow: scroll;
  position: relative;
}

.lrc {
  width: 100%;
  position: absolute;
  top: 0;
}

.lrc-p {
  height: 30px;
  line-height: 30px;
}

.up30 {
  margin-top: -30px;
}
</style>
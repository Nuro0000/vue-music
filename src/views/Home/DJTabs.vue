<template>
  <div>
    <tabs>
      <tab
        v-for="(item,index) in DJdatas"
        :key="index"
        :label="titles[index]"
        :index="(index+1).toString()"
      >
        <div class="panel hotsongs on">
          <ul class="list">
            <li class="song url" v-for="(dj,index) in item.djRadios" :key="index">
              <div class="poster">
                <img :src="dj.picUrl" alt="">
              </div>
              <div class="info">
                <div class="desc">{{dj.desc}}</div>
                <div class="author">{{dj.name}}</div>
              </div>
            </li>
          </ul>
        </div>
      </tab>
    </tabs>
  </div>
</template>

<script>
import axios from "@/utils/request.js";
export default {
  name: 'DJTabs',
  data () {
    return {
      titles: ['情感故事', '情感调频', '创作|翻唱'],
      DJdatas: []
    }
  },
  mounted () {
    const thisvm = this;
    function getDJ1 () {
      return thisvm.$api.getDJcategory({ type: 2 })
    }
    function getDJ2 () {
      return thisvm.$api.getDJcategory({ type: 3 })
    }
    function getDJ3 () {
      return thisvm.$api.getDJcategory({ type: 2001 })
    }
    axios.all([getDJ1(), getDJ2(), getDJ3()]).then(axios.spread((dj1, dj2, dj3) => {
      console.log(dj1, dj2, dj3);
      this.DJdatas.push(dj1, dj2, dj3);
    }))

  }
}
</script>

<style scoped>
.tabs {
    padding: 10px;
    background: #fff;
}
.musictop {
    background: #fff;
    padding: 10px;
}

.panel {
    border-top: 1px solid #eee;
    position: relative;
    top: -1px;
    display: block;
    background: #fff;
}

.list {
    padding-top: 0;
    height: 450px;
}

.panel .list li {
    height: 60px;
    border-bottom: 1px solid #eee;
    padding-left: 0;
    display: flex;
    padding-top: 10px;
}

.panel .list li .poster {
    position: relative;
    width: 45px;
    margin-right: 8px;
}

.panel .list li .poster img {
    border: 1px solid #eee;
}
.info {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.info .desc {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    color: #333;
}

.info .author {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: #999;
    margin-top: 2px;
}

.more-songs {
    color: #999;
    margin-top: 9px;
    font-size: 12px;
    text-align: center;
    height: 32px;
    line-height: 32px;
}
</style>
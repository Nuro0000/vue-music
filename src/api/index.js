import {get} from "@/utils/request.js"

const api = {
  getRecommends(params){     //推荐歌单
    return get("/api/personalized",params);
  },
  getMoreMusic(params){     //更多歌曲--热门歌单
    return get("/api/top/playlist",params);
  },
  getNewSongs(){            //推荐新歌
    return get("/api/personalized/newsong");
  },
  getMusicDetails(params){  //歌单详细
    return get("/api/playlist/detail",params)
  },
  getPlayer(params){        //歌曲播放页
    return get("/api/song/url",params);
  },
  getDJcategory(params){    //电台分类
    return get("/api/dj/recommend/type",params);
  },
  getLrc(params){           //获取歌词
    return get("/api/lyric",params);
  },
  getSearch(params){        //搜索歌曲
    return get("/api/search",params);
  }
  
}

export default api;
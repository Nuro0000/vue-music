### 组件分类
    1.智能组件(数据获取、数据过滤)
    2.木偶组件(渲染视图)
### 网易云音乐api
  根目录：http://iwenwiki.com:3000
#### 接口
1.热门歌单：/top/playlist
  允许带参：order(hot/new),cat(如: 华语、古风、欧美)，limit(默认50)，offset
2.推荐歌单：/personalized
  允许带参：limit(默认30)
3.新歌榜：/personalized/newsong
4.歌单详细页：/playlist/detail
  必须带参：id
5.电台分类: /dj/recommend/type
  带参：type:2 - 情感故事 type:3 - 情感调频 type:2001 - 创作|翻唱
6.获取歌词：/lyric
  必带参数：id
7.搜索：/search
  必带参数：keywords

## 组件复用
  歌单详细页和新歌榜页的区别
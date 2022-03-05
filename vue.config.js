module.exports = {
  devServer: {     //开发服务器的配置
    open: true,
    proxy:{
      '/api':{
        target:'http://iwenwiki.com:3000',
        changOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }//配置改动后,需要重新运行serve

}
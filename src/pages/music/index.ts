//index.js
//获取应用实例

// import Request from '../../utils/request'

Page({
  data: {
    theaters: []
  },
  //事件处理函数
  handleLinkSearch() {
    // wx.navigateTo({
    //   url: '../search/index'
    // })
  },

  getIndexData() {
    // Request.get(
    //   '/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a'
    // ).then((res: any) => {
    //   console.log(res.data)
    // })
  },
  onLoad() {
    this.getIndexData()
  }
})

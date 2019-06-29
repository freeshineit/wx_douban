//index.js
//获取应用实例

// import Request from '../../utils/request'

Page({
  data: {
    detail: [],
    total: 0,
    title: ''
  },

  getIndexData() {
    // Request.get('/v2/movie/in_theaters').then((res: any) => {
    //   this.setData!({
    //     theaters: res.data.subjects,
    //     title: res.data.title,
    //     total: res.data.total
    //   })
    // })
  },
  onLoad() {
    this.getIndexData()
  }
})

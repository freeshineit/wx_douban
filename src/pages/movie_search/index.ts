//index.js
//获取应用实例

import Request from '../../utils/request'

Page({
  data: {
    list: [],
    total: 0,
    query: {
      q: '张艺谋'
      //   tag: undefined,
      //   start: 0,
      //   count: 20
    }
  },

  getMovieList() {
    const { query } = this.data
    Request.get('/v2/movie/search', query).then((res: any) => {
      console.log(res)
      //   this.setData!({
      //     theaters: res.data.subjects,
      //     title: res.data.title,
      //     total: res.data.total
      //   })
    })
  },
  handleformSubmit(e: any) {
    console.log(e)
  },
  onLoad() {
    this.getMovieList()
  }
})

import { top250Api, comingSoonApi, inTheatersApi } from '../../utils/api'
import { showLoading, hideLoading } from '../../utils/util'
Page({
  data: {
    list: [],
    type: '',
    total: 0,
    query: {
      start: 0,
      count: 15
    },
    loading: false
  },
  switchApi() {
    const { type } = this.data
    switch (type) {
      case 'intheaters': // 正在热映
        this.getInTheaters()
        break
      case 'comingsoon': // 即将上映
        this.getComingSoon()
        break
      case 'top250': // top250
        this.getTop250()
        break
    }
  },
  getInTheaters() {
    const { query } = this.data
    wx.setNavigationBarTitle({
      title: '正在热映'
    })
    this.firstLoading(query)
    inTheatersApi(query).then((res: any) => {
      this.setMovieList(res.data)
    })
  },
  getComingSoon() {
    const { query } = this.data
    wx.setNavigationBarTitle({
      title: '即将上映'
    })
    this.firstLoading(query)
    comingSoonApi(query).then((res: any) => {
      this.setMovieList(res.data)
    })
  },
  getTop250() {
    const { query } = this.data
    wx.setNavigationBarTitle({
      title: 'top250'
    })
    this.firstLoading(query)
    top250Api(query).then((res: any) => {
      this.setMovieList(res.data)
    })
  },
  firstLoading(query: any) {
    if (query.start == 0) {
      showLoading()
    } else {
      this.setData!({
        loading: true
      })
    }
  },
  setMovieList(data: any) {
    const { query, list } = this.data
    this.setData!({
      list: list.concat(data.subjects),
      total: data.total,
      query: Object.assign(query, { start: query.count + query.start }),
      loading: false
    })
    hideLoading()
  },
  onLoad(options: any) {
    const type = options.type
    if (!type) {
      return
    }
    this.setData!(
      {
        type: type
      },
      () => {
        this.switchApi()
      }
    )
  },
  onReachBottom() {
    const { loading, query, total } = this.data
    if (!loading && query.start < total) {
      this.switchApi()
    }
  }
})

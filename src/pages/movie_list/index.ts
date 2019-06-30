import { top250Api, comingSoonApi, inTheatersApi } from '../../utils/api'

Page({
  data: {
    list: [],
    type: '',
    total: 0,
    query: {
      start: 0,
      count: 21
    }
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
    inTheatersApi(query).then((res: any) => {
      console.log(res.data.subjects)
      this.setData!({
        list: res.data.subjects,
        total: res.data.total
      })
    })
  },
  getComingSoon() {
    const { query } = this.data
    wx.setNavigationBarTitle({
      title: '即将上映'
    })
    comingSoonApi(query).then((res: any) => {
      this.setData!({
        list: res.data.subjects,
        total: res.data.total
      })
    })
  },
  getTop250() {
    const { query } = this.data
    wx.setNavigationBarTitle({
      title: 'top250'
    })
    top250Api(query).then((res: any) => {
      this.setData!({
        list: res.data.subjects,
        total: res.data.total
      })
    })
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
  }
})

//index.js
//获取应用实例

import {
  top250Api,
  USBoxApi,
  weeklyApi,
  newMoviesApi,
  comingSoonApi,
  inTheatersApi
} from '../../utils/api'
Page({
  data: {
    detail: [],
    title: '',
    query: {
      start: 0,
      count: 9
    },
    currentTab1: 0,
    currentTab2: 0,
    currentTab3: 0,
    inTheaters: [], // 正在热映
    inTheatersTotal: 0,
    comingSoons: [], // 即将上映
    comingSoonsTotal: 0,
    top250s: [], //Top250
    weeklys: [], // 口碑榜
    USboxs: [], // 北美票房榜
    newMovies: [] // 新片榜
  },
  //事件处理函数
  handleLinkSearch() {
    wx.navigateTo({
      url: '../movie_search/index'
    })
  },
  handleTabsChange(e: any) {
    const { type, current } = e.target.dataset
    this.setTabsActive(type, current)
  },
  handleLinkList1() {},
  handleLinkList2() {},
  handleLinkList3() {},
  // ajax 获取正在热映
  getinTheatersData() {
    const { query } = this.data
    inTheatersApi(query).then((res: any) => {
      this.setData!({
        inTheaters: res.data.subjects,
        inTheatersTotal: res.data.total
      })
    })
  },
  // ajax 获取即将上映
  getComingSoonData() {
    //   comingSoons
    const { query } = this.data
    comingSoonApi(query).then((res: any) => {
      this.setData!({
        comingSoons: res.data.subjects,
        comingSoonsTotal: res.data.total
      })
    })
  },
  // ajax 获取Top250
  getTop250Data() {
    const { query } = this.data
    top250Api(query).then((res: any) => {
      this.setData!({
        top250s: res.data.subjects
      })
    })
  },
  // ajax 获取口碑榜
  getWeeklyData() {
    const { query } = this.data
    weeklyApi(query).then((res: any) => {
      this.setData!({
        weeklys: this.convertData(res.data.subjects)
      })
    })
  },
  //   ajax 获取北美票房榜
  getUSboxData() {
    const { query } = this.data
    USBoxApi(query).then((res: any) => {
      this.setData!({
        USBoxs: this.convertData(res.data.subjects)
      })
    })
  },
  //   ajax 获取新片榜
  getNewMoviesData() {
    const { query } = this.data
    newMoviesApi(query).then((res: any) => {
      this.setData!({
        newMovies: res.data.subjects
      })
    })
  },
  //   handleSwiperChange
  handleSwiperChange(e: any) {
    const { type } = e.target.dataset
    const current = e.detail.current
    this.setTabsActive(type, current)
  },
  setTabsActive(type: number, current: number) {
    if (type == 1) {
      this.setData!({
        currentTab1: current
      })
    } else if (type == 2) {
      this.setData!({
        currentTab2: current
      })
    } else if (type == 3) {
      this.setData!({
        currentTab3: current
      })
    }
  },
  convertData(data: any[]) {
    let tempData: Object[] = []
    data.map(item => {
      tempData.push(item.subject)
    })

    return tempData
  },
  onLoad() {
    this.getinTheatersData()
    this.getComingSoonData()
    this.getTop250Data()
    this.getWeeklyData()
    this.getUSboxData()
    this.getNewMoviesData()
  }
})

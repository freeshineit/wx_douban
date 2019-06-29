//index.js
//获取应用实例

// import Request from '../../utils/request'
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
    currentTab3: 1,
    inTheaters: [], // 正在热映
    theaters: [], // 即将上映
    top250: [], //Top250
    weekly: [], // 口碑榜
    USboxs: [], // 北美票房榜
    newmovies: [], // 新片榜
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  //事件处理函数
  handleLinkSearch() {
    wx.navigateTo({
      url: '../movie_search/index'
    })
  },
  handleTabsChange1(e: any) {
    console.log(e)
  },
  handleTabsChange2(e: any) {
    console.log(e)
  },
  handleTabsChange3(e: any) {
    console.log(e)
  },
  handleLinkList1() {},
  handleLinkList2() {},
  handleLinkList3() {},

  // ajax 获取正在热映
  getinTheatersData() {
    inTheatersApi()
  },
  // ajax 获取即将上映
  getComingSoonData() {
    comingSoonApi()
  },
  // ajax 获取Top250
  getTop250Data() {
    top250Api()
  },
  // ajax 获取口碑榜
  getWeeklyData() {
    weeklyApi()
  },
  //   ajax 获取北美票房榜
  getUSboxData() {
    USBoxApi()
  },
  //   ajax 获取新片榜
  getNewMoviesData() {
    newMoviesApi()
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

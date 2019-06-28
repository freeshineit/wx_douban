//index.js
//获取应用实例

import Request from '../../utils/request'
import { showLoading, hideLoading } from '../../utils/util'
// interface ISearch {
//   q?: string
//   tag?: string
//   count?: number
//   start?: number
// }

Page({
  data: {
    musics: [],
    total: 0,
    loading: false,
    query: {
      start: 0,
      count: 15,
      q: undefined,
      tag: '流行'
    },
    tags: [
      '流行',
      '轻音乐',
      '摇滚',
      '古典',
      '电子',
      '世界音乐',
      '民谣',
      '说唱',
      '爵士',
      '原声'
    ]
  },
  //   跳转到详情页
  handeLinkDetail(e: any) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `../music_detail/index?id=${id}`
    })
  },
  handleformSubmit(e: any) {
    const { query } = this.data
    const q = e.detail.value
    if (q === '' || q === undefined) {
      console.error('搜索必须要有内容')
      return
    }
    delete query['tag']
    this.setData!(
      {
        query: Object.assign(query, { q, start: 0 }),
        start: 0,
        musics: []
      },
      () => {
        this.searchMusic()
      }
    )
  },
  searchMusic() {
    this.getMusics()
  },
  getMusics() {
    const { musics, query } = this.data
    this.setData!({
      loading: true
    })
    query.start == 0 && showLoading() // 第一次展示loading
    Request.get(`/v2/music/search`, query).then((res: any) => {
      query.start == 0 && hideLoading()
      this.setData!({
        musics: musics.concat(res.data.musics),
        total: res.data.total,
        query: Object.assign(query, { start: query.count + query.start }),
        loading: false
      })
    })
  },
  handeChangeTag(e: any) {
    const { query } = this.data
    const tag = e.currentTarget.dataset.tag
    if (tag === '' || tag === undefined) {
      console.error('搜索必须要有内容')
      return
    }
    delete query['q']
    this.setData!(
      {
        query: Object.assign(query, { tag, start: 0 }),
        musics: []
      },
      () => {
        this.searchMusic()
      }
    )
  },
  onLoad() {
    this.getMusics()
  },
  onReachBottom() {
    const { loading, query, total } = this.data
    if (!loading && query.start + query.count < total) {
      this.getMusics()
    }
  }
})

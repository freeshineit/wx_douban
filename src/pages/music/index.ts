//index.js
//获取应用实例

import Request from '../../utils/request'
Page({
  data: {
    musics: [],
    total: 0,
    start: 0,
    count: 10,
    q: '',
    loading: false
  },
  //   跳转到详情页
  handeLinkDetail(e: any) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `../muic_detail/index?id=${id}`
    })
  },
  handleformSubmit(event: any) {
    this.setData!(
      {
        q: event.detail.value,
        start: 0,
        books: []
      },
      () => {
        this.getMusics()
      }
    )
  },
  getMusics() {
    const { musics, start, count, q } = this.data
    if (q === '' || q === undefined) {
      console.error('搜索必须要有内容')
      return
    }
    this.setData!({
      loading: true
    })
    Request.get(`/v2/music/search`, {
      q: q,
      start,
      count
    }).then((res: any) => {
      this.setData!({
        musics: musics.concat(res.data.musics),
        total: res.data.total,
        start: count + start,
        loading: false
      })
    })
  },
  onLoad() {},
  onReachBottom() {
    const { loading, start, count, total } = this.data
    if (!loading && start + count < total) {
      this.getMusics()
    }
  }
})

//index.js
//获取应用实例

import Request from '../../utils/request'
import { showLoading, hideLoading } from '../../utils/util'
Page({
  data: {
    books: [],
    total: 0,
    query: {
      q: '经典',
      //   tag: '经典',
      start: 0,
      count: 10
    },
    loading: false
  },
  //   跳转到详情页
  handeLinkDetail(e: any) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `../book_detail/index?id=${id}`
    })
  },
  handleformSubmit(event: any) {
    const { query } = this.data
    const q = event.detail.value
    if (q === '' || q == undefined) {
      query['q'] = '经典'
    }
    this.setData!(
      {
        query: Object.assign(query, { q }),
        start: 0,
        books: []
      },
      () => {
        this.getBooks()
      }
    )
  },
  getBooks() {
    const { books, query } = this.data
    query.start == 0
      ? showLoading()
      : this.setData!({
          loading: true
        })
    Request.get(`/v2/book/search`, query).then((res: any) => {
      query.start == 0 && hideLoading()
      this.setData!({
        books: books.concat(res.data.books),
        total: res.data.total,
        query: Object.assign(query, { start: query.count + query.start }),
        loading: false
      })
    })
  },
  onLoad() {
    this.getBooks()
  },
  onReachBottom() {
    const { loading, query, total } = this.data
    if (!loading && query.start < total) {
      this.getBooks()
    }
  }
})

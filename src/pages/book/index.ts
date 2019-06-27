//index.js
//获取应用实例

import Request from '../../utils/request'
Page({
  data: {
    books: [],
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
      url: `../book_detail/index?id=${id}`
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
        this.getBooks()
      }
    )
  },
  getBooks() {
    const { books, start, count, q } = this.data
    if (q === '' || q === undefined) {
      console.error('搜索必须要有内容')
      return
    }
    this.setData!({
      loading: true
    })
    Request.get(`/v2/book/search`, {
      q: q,
      start,
      count
    }).then((res: any) => {
      this.setData!({
        books: books.concat(res.data.books),
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
      this.getBooks()
    }
  }
})

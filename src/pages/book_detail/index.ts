//获取应用实例
import Request from '../../utils/request'
Page({
  data: {
    detail: {},
    id: undefined
  },

  /**
   * 获取图书的详情
   * @param  {number} id 图书id
   *
   */
  getBookDetail(id: number) {
    Request.get(`/v2/book/${id}`).then((res: any) => {
      this.setData!({
        detail: res.data
      })
    })
  },
  onLoad(options: any) {
    // url 中id
    this.getBookDetail(options.id)
  }
})

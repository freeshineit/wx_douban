//获取应用实例
import Request from '../../utils/request'
Page({
  data: {
    detail: {},
    id: undefined,
    catalog: ''
  },
  /**
   * 把目录字符串转化为数组
   * @param content 目录字符串
   */
  //   transferStringToArray(content: string) {
  //     let string = content
  //     try {
  //       string = string.replace(/\r\n/g, '<br>')
  //       string = string.replace(/\n/g, '<br>')
  //     } catch (e) {
  //       alert(e.message)
  //     }
  //     this.setData!({
  //       catalog: string.split('<br>')
  //     })
  //     return
  //   },
  /**
   * 获取图书的详情
   * @param  {number} id 图书id
   *
   */
  getBookDetail(id: number) {
    Request.get(`/v2/music/${id}`).then((res: any) => {
      this.setData!({
        detail: res.data
      })
      //   this.transferStringToArray(res.data.catalog)
    })
  },
  onLoad(options: any) {
    // url 中id
    this.getBookDetail(options.id)
  }
})

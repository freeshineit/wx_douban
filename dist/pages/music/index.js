"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../../utils/request");
Page({
    data: {
        musics: [],
        total: 0,
        start: 0,
        count: 10,
        q: '',
        loading: false
    },
    handeLinkDetail: function (e) {
        var id = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../muic_detail/index?id=" + id
        });
    },
    handleformSubmit: function (event) {
        var _this = this;
        this.setData({
            q: event.detail.value,
            start: 0,
            books: []
        }, function () {
            _this.getMusics();
        });
    },
    getMusics: function () {
        var _this = this;
        var _a = this.data, musics = _a.musics, start = _a.start, count = _a.count, q = _a.q;
        if (q === '' || q === undefined) {
            console.error('搜索必须要有内容');
            return;
        }
        this.setData({
            loading: true
        });
        request_1.default.get("/v2/music/search", {
            q: q,
            start: start,
            count: count
        }).then(function (res) {
            _this.setData({
                musics: musics.concat(res.data.musics),
                total: res.data.total,
                start: count + start,
                loading: false
            });
        });
    },
    onLoad: function () { },
    onReachBottom: function () {
        var _a = this.data, loading = _a.loading, start = _a.start, count = _a.count, total = _a.total;
        if (!loading && start + count < total) {
            this.getMusics();
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL211c2ljL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsK0NBQXlDO0FBQ3pDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRSxFQUFFO1FBQ1YsS0FBSyxFQUFFLENBQUM7UUFDUixLQUFLLEVBQUUsQ0FBQztRQUNSLEtBQUssRUFBRSxFQUFFO1FBQ1QsQ0FBQyxFQUFFLEVBQUU7UUFDTCxPQUFPLEVBQUUsS0FBSztLQUNmO0lBRUQsZUFBZSxFQUFmLFVBQWdCLENBQU07UUFDcEIsSUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFBO1FBQ3JDLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsNkJBQTJCLEVBQUk7U0FDckMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELGdCQUFnQixFQUFoQixVQUFpQixLQUFVO1FBQTNCLGlCQVdDO1FBVkMsSUFBSSxDQUFDLE9BQVEsQ0FDWDtZQUNFLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7WUFDckIsS0FBSyxFQUFFLENBQUM7WUFDUixLQUFLLEVBQUUsRUFBRTtTQUNWLEVBQ0Q7WUFDRSxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDbEIsQ0FBQyxDQUNGLENBQUE7SUFDSCxDQUFDO0lBQ0QsU0FBUyxFQUFUO1FBQUEsaUJBcUJDO1FBcEJPLElBQUEsY0FBdUMsRUFBckMsa0JBQU0sRUFBRSxnQkFBSyxFQUFFLGdCQUFLLEVBQUUsUUFBZSxDQUFBO1FBQzdDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQy9CLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDekIsT0FBTTtTQUNQO1FBQ0QsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFBO1FBQ0YsaUJBQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUU7WUFDOUIsQ0FBQyxFQUFFLENBQUM7WUFDSixLQUFLLE9BQUE7WUFDTCxLQUFLLE9BQUE7U0FDTixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtZQUNmLEtBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ3RDLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUs7Z0JBQ3JCLEtBQUssRUFBRSxLQUFLLEdBQUcsS0FBSztnQkFDcEIsT0FBTyxFQUFFLEtBQUs7YUFDZixDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxNQUFNLGdCQUFJLENBQUM7SUFDWCxhQUFhO1FBQ0wsSUFBQSxjQUE0QyxFQUExQyxvQkFBTyxFQUFFLGdCQUFLLEVBQUUsZ0JBQUssRUFBRSxnQkFBbUIsQ0FBQTtRQUNsRCxJQUFJLENBQUMsT0FBTyxJQUFJLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtTQUNqQjtJQUNILENBQUM7Q0FDRixDQUFDLENBQUEiLCJmaWxlIjoicGFnZXMvbXVzaWMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2luZGV4LmpzXG4vL+iOt+WPluW6lOeUqOWunuS+i1xuXG5pbXBvcnQgUmVxdWVzdCBmcm9tICcuLi8uLi91dGlscy9yZXF1ZXN0J1xuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBtdXNpY3M6IFtdLFxuICAgIHRvdGFsOiAwLFxuICAgIHN0YXJ0OiAwLFxuICAgIGNvdW50OiAxMCxcbiAgICBxOiAnJyxcbiAgICBsb2FkaW5nOiBmYWxzZVxuICB9LFxuICAvLyAgIOi3s+i9rOWIsOivpuaDhemhtVxuICBoYW5kZUxpbmtEZXRhaWwoZTogYW55KSB7XG4gICAgY29uc3QgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZFxuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vbXVpY19kZXRhaWwvaW5kZXg/aWQ9JHtpZH1gXG4gICAgfSlcbiAgfSxcbiAgaGFuZGxlZm9ybVN1Ym1pdChldmVudDogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhIShcbiAgICAgIHtcbiAgICAgICAgcTogZXZlbnQuZGV0YWlsLnZhbHVlLFxuICAgICAgICBzdGFydDogMCxcbiAgICAgICAgYm9va3M6IFtdXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLmdldE11c2ljcygpXG4gICAgICB9XG4gICAgKVxuICB9LFxuICBnZXRNdXNpY3MoKSB7XG4gICAgY29uc3QgeyBtdXNpY3MsIHN0YXJ0LCBjb3VudCwgcSB9ID0gdGhpcy5kYXRhXG4gICAgaWYgKHEgPT09ICcnIHx8IHEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc29sZS5lcnJvcign5pCc57Si5b+F6aG76KaB5pyJ5YaF5a65JylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGxvYWRpbmc6IHRydWVcbiAgICB9KVxuICAgIFJlcXVlc3QuZ2V0KGAvdjIvbXVzaWMvc2VhcmNoYCwge1xuICAgICAgcTogcSxcbiAgICAgIHN0YXJ0LFxuICAgICAgY291bnRcbiAgICB9KS50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIG11c2ljczogbXVzaWNzLmNvbmNhdChyZXMuZGF0YS5tdXNpY3MpLFxuICAgICAgICB0b3RhbDogcmVzLmRhdGEudG90YWwsXG4gICAgICAgIHN0YXJ0OiBjb3VudCArIHN0YXJ0LFxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgfSlcbiAgICB9KVxuICB9LFxuICBvbkxvYWQoKSB7fSxcbiAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICBjb25zdCB7IGxvYWRpbmcsIHN0YXJ0LCBjb3VudCwgdG90YWwgfSA9IHRoaXMuZGF0YVxuICAgIGlmICghbG9hZGluZyAmJiBzdGFydCArIGNvdW50IDwgdG90YWwpIHtcbiAgICAgIHRoaXMuZ2V0TXVzaWNzKClcbiAgICB9XG4gIH1cbn0pXG4iXX0=

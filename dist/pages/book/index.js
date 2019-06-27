"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../../utils/request");
Page({
    data: {
        books: [],
        total: 0,
        start: 0,
        count: 10,
        q: '',
        loading: false
    },
    handeLinkDetail: function (e) {
        var id = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../book_detail/index?id=" + id
        });
    },
    handleformSubmit: function (event) {
        var _this = this;
        this.setData({
            q: event.detail.value,
            start: 0,
            books: []
        }, function () {
            _this.getBooks();
        });
    },
    getBooks: function () {
        var _this = this;
        var _a = this.data, books = _a.books, start = _a.start, count = _a.count, q = _a.q;
        if (q === '' || q === undefined) {
            console.error('搜索必须要有内容');
            return;
        }
        this.setData({
            loading: true
        });
        request_1.default.get("/v2/book/search", {
            q: q,
            start: start,
            count: count
        }).then(function (res) {
            _this.setData({
                books: books.concat(res.data.books),
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
            this.getBooks();
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Jvb2svaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSwrQ0FBeUM7QUFDekMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsQ0FBQztRQUNSLEtBQUssRUFBRSxDQUFDO1FBQ1IsS0FBSyxFQUFFLEVBQUU7UUFDVCxDQUFDLEVBQUUsRUFBRTtRQUNMLE9BQU8sRUFBRSxLQUFLO0tBQ2Y7SUFFRCxlQUFlLEVBQWYsVUFBZ0IsQ0FBTTtRQUNwQixJQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUE7UUFDckMsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSw2QkFBMkIsRUFBSTtTQUNyQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsZ0JBQWdCLEVBQWhCLFVBQWlCLEtBQVU7UUFBM0IsaUJBV0M7UUFWQyxJQUFJLENBQUMsT0FBUSxDQUNYO1lBQ0UsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSztZQUNyQixLQUFLLEVBQUUsQ0FBQztZQUNSLEtBQUssRUFBRSxFQUFFO1NBQ1YsRUFDRDtZQUNFLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUNqQixDQUFDLENBQ0YsQ0FBQTtJQUNILENBQUM7SUFDRCxRQUFRLEVBQVI7UUFBQSxpQkFxQkM7UUFwQk8sSUFBQSxjQUFzQyxFQUFwQyxnQkFBSyxFQUFFLGdCQUFLLEVBQUUsZ0JBQUssRUFBRSxRQUFlLENBQUE7UUFDNUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFDL0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUN6QixPQUFNO1NBQ1A7UUFDRCxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUE7UUFDRixpQkFBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRTtZQUM3QixDQUFDLEVBQUUsQ0FBQztZQUNKLEtBQUssT0FBQTtZQUNMLEtBQUssT0FBQTtTQUNOLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRO1lBQ2YsS0FBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDbkMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSztnQkFDckIsS0FBSyxFQUFFLEtBQUssR0FBRyxLQUFLO2dCQUNwQixPQUFPLEVBQUUsS0FBSzthQUNmLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELE1BQU0sZ0JBQUksQ0FBQztJQUNYLGFBQWE7UUFDTCxJQUFBLGNBQTRDLEVBQTFDLG9CQUFPLEVBQUUsZ0JBQUssRUFBRSxnQkFBSyxFQUFFLGdCQUFtQixDQUFBO1FBQ2xELElBQUksQ0FBQyxPQUFPLElBQUksS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLEVBQUU7WUFDckMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1NBQ2hCO0lBQ0gsQ0FBQztDQUNGLENBQUMsQ0FBQSIsImZpbGUiOiJwYWdlcy9ib29rL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xuLy/ojrflj5blupTnlKjlrp7kvotcblxuaW1wb3J0IFJlcXVlc3QgZnJvbSAnLi4vLi4vdXRpbHMvcmVxdWVzdCdcblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgYm9va3M6IFtdLFxuICAgIHRvdGFsOiAwLFxuICAgIHN0YXJ0OiAwLFxuICAgIGNvdW50OiAxMCxcbiAgICBxOiAnJyxcbiAgICBsb2FkaW5nOiBmYWxzZVxuICB9LFxuICAvLyAgIOi3s+i9rOWIsOivpuaDhemhtVxuICBoYW5kZUxpbmtEZXRhaWwoZTogYW55KSB7XG4gICAgY29uc3QgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZFxuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vYm9va19kZXRhaWwvaW5kZXg/aWQ9JHtpZH1gXG4gICAgfSlcbiAgfSxcbiAgaGFuZGxlZm9ybVN1Ym1pdChldmVudDogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhIShcbiAgICAgIHtcbiAgICAgICAgcTogZXZlbnQuZGV0YWlsLnZhbHVlLFxuICAgICAgICBzdGFydDogMCxcbiAgICAgICAgYm9va3M6IFtdXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLmdldEJvb2tzKClcbiAgICAgIH1cbiAgICApXG4gIH0sXG4gIGdldEJvb2tzKCkge1xuICAgIGNvbnN0IHsgYm9va3MsIHN0YXJ0LCBjb3VudCwgcSB9ID0gdGhpcy5kYXRhXG4gICAgaWYgKHEgPT09ICcnIHx8IHEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc29sZS5lcnJvcign5pCc57Si5b+F6aG76KaB5pyJ5YaF5a65JylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGxvYWRpbmc6IHRydWVcbiAgICB9KVxuICAgIFJlcXVlc3QuZ2V0KGAvdjIvYm9vay9zZWFyY2hgLCB7XG4gICAgICBxOiBxLFxuICAgICAgc3RhcnQsXG4gICAgICBjb3VudFxuICAgIH0pLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgYm9va3M6IGJvb2tzLmNvbmNhdChyZXMuZGF0YS5ib29rcyksXG4gICAgICAgIHRvdGFsOiByZXMuZGF0YS50b3RhbCxcbiAgICAgICAgc3RhcnQ6IGNvdW50ICsgc3RhcnQsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG4gIG9uTG9hZCgpIHt9LFxuICBvblJlYWNoQm90dG9tKCkge1xuICAgIGNvbnN0IHsgbG9hZGluZywgc3RhcnQsIGNvdW50LCB0b3RhbCB9ID0gdGhpcy5kYXRhXG4gICAgaWYgKCFsb2FkaW5nICYmIHN0YXJ0ICsgY291bnQgPCB0b3RhbCkge1xuICAgICAgdGhpcy5nZXRCb29rcygpXG4gICAgfVxuICB9XG59KVxuIl19

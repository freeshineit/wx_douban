"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../../utils/request");
Page({
    data: {
        detail: {},
        id: undefined
    },
    getBookDetail: function (id) {
        var _this = this;
        request_1.default.get("/v2/book/" + id).then(function (res) {
            _this.setData({
                detail: res.data
            });
        });
    },
    onLoad: function (options) {
        this.getBookDetail(options.id);
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Jvb2tfZGV0YWlsL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsK0NBQXlDO0FBQ3pDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRSxFQUFFO1FBQ1YsRUFBRSxFQUFFLFNBQVM7S0FDZDtJQU9ELGFBQWEsRUFBYixVQUFjLEVBQVU7UUFBeEIsaUJBTUM7UUFMQyxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxjQUFZLEVBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7WUFDMUMsS0FBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUk7YUFDakIsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsTUFBTSxFQUFOLFVBQU8sT0FBWTtRQUVqQixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNoQyxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwiZmlsZSI6InBhZ2VzL2Jvb2tfZGV0YWlsL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy/ojrflj5blupTnlKjlrp7kvotcbmltcG9ydCBSZXF1ZXN0IGZyb20gJy4uLy4uL3V0aWxzL3JlcXVlc3QnXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGRldGFpbDoge30sXG4gICAgaWQ6IHVuZGVmaW5lZFxuICB9LFxuXG4gIC8qKlxuICAgKiDojrflj5blm77kuabnmoTor6bmg4VcbiAgICogQHBhcmFtICB7bnVtYmVyfSBpZCDlm77kuaZpZFxuICAgKlxuICAgKi9cbiAgZ2V0Qm9va0RldGFpbChpZDogbnVtYmVyKSB7XG4gICAgUmVxdWVzdC5nZXQoYC92Mi9ib29rLyR7aWR9YCkudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBkZXRhaWw6IHJlcy5kYXRhXG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG4gIG9uTG9hZChvcHRpb25zOiBhbnkpIHtcbiAgICAvLyB1cmwg5LitaWRcbiAgICB0aGlzLmdldEJvb2tEZXRhaWwob3B0aW9ucy5pZClcbiAgfVxufSlcbiJdfQ==

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../../utils/request");
Page({
    data: {
        detail: {},
        id: undefined,
        catalog: ''
    },
    transferStringToArray: function (content) {
        var string = content;
        try {
            string = string.replace(/\r\n/g, '<br>');
            string = string.replace(/\n/g, '<br>');
        }
        catch (e) {
            alert(e.message);
        }
        this.setData({
            catalog: string.split('<br>')
        });
        return;
    },
    getBookDetail: function (id) {
        var _this = this;
        request_1.default.get("/v2/book/" + id).then(function (res) {
            _this.setData({
                detail: res.data
            });
            _this.transferStringToArray(res.data.catalog);
        });
    },
    onLoad: function (options) {
        this.getBookDetail(options.id);
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Jvb2tfZGV0YWlsL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsK0NBQXlDO0FBQ3pDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRSxFQUFFO1FBQ1YsRUFBRSxFQUFFLFNBQVM7UUFDYixPQUFPLEVBQUUsRUFBRTtLQUNaO0lBS0QscUJBQXFCLEVBQXJCLFVBQXNCLE9BQWU7UUFDbkMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFBO1FBQ3BCLElBQUk7WUFDRixNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUE7WUFDeEMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFBO1NBQ3ZDO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQ2pCO1FBQ0QsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLE9BQU8sRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztTQUM5QixDQUFDLENBQUE7UUFDRixPQUFNO0lBQ1IsQ0FBQztJQU1ELGFBQWEsRUFBYixVQUFjLEVBQVU7UUFBeEIsaUJBT0M7UUFOQyxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxjQUFZLEVBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7WUFDMUMsS0FBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUk7YUFDakIsQ0FBQyxDQUFBO1lBQ0YsS0FBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDOUMsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsTUFBTSxFQUFOLFVBQU8sT0FBWTtRQUVqQixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNoQyxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwiZmlsZSI6InBhZ2VzL2Jvb2tfZGV0YWlsL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy/ojrflj5blupTnlKjlrp7kvotcbmltcG9ydCBSZXF1ZXN0IGZyb20gJy4uLy4uL3V0aWxzL3JlcXVlc3QnXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGRldGFpbDoge30sXG4gICAgaWQ6IHVuZGVmaW5lZCxcbiAgICBjYXRhbG9nOiAnJ1xuICB9LFxuICAvKipcbiAgICog5oqK55uu5b2V5a2X56ym5Liy6L2s5YyW5Li65pWw57uEXG4gICAqIEBwYXJhbSBjb250ZW50IOebruW9leWtl+espuS4slxuICAgKi9cbiAgdHJhbnNmZXJTdHJpbmdUb0FycmF5KGNvbnRlbnQ6IHN0cmluZykge1xuICAgIGxldCBzdHJpbmcgPSBjb250ZW50XG4gICAgdHJ5IHtcbiAgICAgIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9cXHJcXG4vZywgJzxicj4nKVxuICAgICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xcbi9nLCAnPGJyPicpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgYWxlcnQoZS5tZXNzYWdlKVxuICAgIH1cbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGNhdGFsb2c6IHN0cmluZy5zcGxpdCgnPGJyPicpXG4gICAgfSlcbiAgICByZXR1cm5cbiAgfSxcbiAgLyoqXG4gICAqIOiOt+WPluWbvuS5pueahOivpuaDhVxuICAgKiBAcGFyYW0gIHtudW1iZXJ9IGlkIOWbvuS5pmlkXG4gICAqXG4gICAqL1xuICBnZXRCb29rRGV0YWlsKGlkOiBudW1iZXIpIHtcbiAgICBSZXF1ZXN0LmdldChgL3YyL2Jvb2svJHtpZH1gKS50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIGRldGFpbDogcmVzLmRhdGFcbiAgICAgIH0pXG4gICAgICB0aGlzLnRyYW5zZmVyU3RyaW5nVG9BcnJheShyZXMuZGF0YS5jYXRhbG9nKVxuICAgIH0pXG4gIH0sXG4gIG9uTG9hZChvcHRpb25zOiBhbnkpIHtcbiAgICAvLyB1cmwg5LitaWRcbiAgICB0aGlzLmdldEJvb2tEZXRhaWwob3B0aW9ucy5pZClcbiAgfVxufSlcbiJdfQ==

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../../utils/request");
Page({
    data: {
        theaters: [],
        total: 0,
        title: ''
    },
    handleLinkSearch: function () {
    },
    getIndexData: function () {
        var _this = this;
        request_1.default.get('/v2/movie/in_theaters').then(function (res) {
            _this.setData({
                theaters: res.data.subjects,
                title: res.data.title,
                total: res.data.total
            });
        });
    },
    onLoad: function () {
        this.getIndexData();
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL21vdmllL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsK0NBQXlDO0FBRXpDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxFQUFFO1FBQ1osS0FBSyxFQUFFLENBQUM7UUFDUixLQUFLLEVBQUUsRUFBRTtLQUNWO0lBRUQsZ0JBQWdCO0lBSWhCLENBQUM7SUFFRCxZQUFZLEVBQVo7UUFBQSxpQkFRQztRQVBDLGlCQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtZQUNqRCxLQUFJLENBQUMsT0FBUSxDQUFDO2dCQUNaLFFBQVEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVE7Z0JBQzNCLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUs7Z0JBQ3JCLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUs7YUFDdEIsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsTUFBTTtRQUNKLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwiZmlsZSI6InBhZ2VzL21vdmllL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xuLy/ojrflj5blupTnlKjlrp7kvotcblxuaW1wb3J0IFJlcXVlc3QgZnJvbSAnLi4vLi4vdXRpbHMvcmVxdWVzdCdcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICB0aGVhdGVyczogW10sXG4gICAgdG90YWw6IDAsXG4gICAgdGl0bGU6ICcnXG4gIH0sXG4gIC8v5LqL5Lu25aSE55CG5Ye95pWwXG4gIGhhbmRsZUxpbmtTZWFyY2goKSB7XG4gICAgLy8gd3gubmF2aWdhdGVUbyh7XG4gICAgLy8gICB1cmw6ICcuLi9zZWFyY2gvaW5kZXgnXG4gICAgLy8gfSlcbiAgfSxcblxuICBnZXRJbmRleERhdGEoKSB7XG4gICAgUmVxdWVzdC5nZXQoJy92Mi9tb3ZpZS9pbl90aGVhdGVycycpLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgdGhlYXRlcnM6IHJlcy5kYXRhLnN1YmplY3RzLFxuICAgICAgICB0aXRsZTogcmVzLmRhdGEudGl0bGUsXG4gICAgICAgIHRvdGFsOiByZXMuZGF0YS50b3RhbFxuICAgICAgfSlcbiAgICB9KVxuICB9LFxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5nZXRJbmRleERhdGEoKVxuICB9XG59KVxuIl19

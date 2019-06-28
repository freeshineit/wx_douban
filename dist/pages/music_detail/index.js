"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../../utils/request");
Page({
    data: {
        detail: {},
        id: undefined,
        catalog: ''
    },
    getBookDetail: function (id) {
        var _this = this;
        request_1.default.get("/v2/music/" + id).then(function (res) {
            _this.setData({
                detail: res.data
            });
        });
    },
    onLoad: function (options) {
        this.getBookDetail(options.id);
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL211c2ljX2RldGFpbC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLCtDQUF5QztBQUN6QyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixNQUFNLEVBQUUsRUFBRTtRQUNWLEVBQUUsRUFBRSxTQUFTO1FBQ2IsT0FBTyxFQUFFLEVBQUU7S0FDWjtJQXVCRCxhQUFhLEVBQWIsVUFBYyxFQUFVO1FBQXhCLGlCQU9DO1FBTkMsaUJBQU8sQ0FBQyxHQUFHLENBQUMsZUFBYSxFQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRO1lBQzNDLEtBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJO2FBQ2pCLENBQUMsQ0FBQTtRQUVKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELE1BQU0sRUFBTixVQUFPLE9BQVk7UUFFakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDaEMsQ0FBQztDQUNGLENBQUMsQ0FBQSIsImZpbGUiOiJwYWdlcy9tdXNpY19kZXRhaWwvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL+iOt+WPluW6lOeUqOWunuS+i1xuaW1wb3J0IFJlcXVlc3QgZnJvbSAnLi4vLi4vdXRpbHMvcmVxdWVzdCdcblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgZGV0YWlsOiB7fSxcbiAgICBpZDogdW5kZWZpbmVkLFxuICAgIGNhdGFsb2c6ICcnXG4gIH0sXG4gIC8qKlxuICAgKiDmiornm67lvZXlrZfnrKbkuLLovazljJbkuLrmlbDnu4RcbiAgICogQHBhcmFtIGNvbnRlbnQg55uu5b2V5a2X56ym5LiyXG4gICAqL1xuICAvLyAgIHRyYW5zZmVyU3RyaW5nVG9BcnJheShjb250ZW50OiBzdHJpbmcpIHtcbiAgLy8gICAgIGxldCBzdHJpbmcgPSBjb250ZW50XG4gIC8vICAgICB0cnkge1xuICAvLyAgICAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvXFxyXFxuL2csICc8YnI+JylcbiAgLy8gICAgICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xcbi9nLCAnPGJyPicpXG4gIC8vICAgICB9IGNhdGNoIChlKSB7XG4gIC8vICAgICAgIGFsZXJ0KGUubWVzc2FnZSlcbiAgLy8gICAgIH1cbiAgLy8gICAgIHRoaXMuc2V0RGF0YSEoe1xuICAvLyAgICAgICBjYXRhbG9nOiBzdHJpbmcuc3BsaXQoJzxicj4nKVxuICAvLyAgICAgfSlcbiAgLy8gICAgIHJldHVyblxuICAvLyAgIH0sXG4gIC8qKlxuICAgKiDojrflj5blm77kuabnmoTor6bmg4VcbiAgICogQHBhcmFtICB7bnVtYmVyfSBpZCDlm77kuaZpZFxuICAgKlxuICAgKi9cbiAgZ2V0Qm9va0RldGFpbChpZDogbnVtYmVyKSB7XG4gICAgUmVxdWVzdC5nZXQoYC92Mi9tdXNpYy8ke2lkfWApLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgZGV0YWlsOiByZXMuZGF0YVxuICAgICAgfSlcbiAgICAgIC8vICAgdGhpcy50cmFuc2ZlclN0cmluZ1RvQXJyYXkocmVzLmRhdGEuY2F0YWxvZylcbiAgICB9KVxuICB9LFxuICBvbkxvYWQob3B0aW9uczogYW55KSB7XG4gICAgLy8gdXJsIOS4rWlkXG4gICAgdGhpcy5nZXRCb29rRGV0YWlsKG9wdGlvbnMuaWQpXG4gIH1cbn0pXG4iXX0=

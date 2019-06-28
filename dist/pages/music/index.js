"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../../utils/request");
var util_1 = require("../../utils/util");
Page({
    data: {
        musics: [],
        total: 0,
        loading: false,
        query: {
            start: 0,
            count: 15,
            q: undefined,
            tag: '流行'
        },
        tags: [
            '流行',
            '轻音乐',
            '摇滚',
            '古典',
            '电子',
            '世界音乐',
            '民谣',
            '说唱',
            '爵士',
            '原声'
        ]
    },
    handeLinkDetail: function (e) {
        var id = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../music_detail/index?id=" + id
        });
    },
    handleformSubmit: function (e) {
        var _this = this;
        var query = this.data.query;
        var q = e.detail.value;
        if (q === '' || q === undefined) {
            console.error('搜索必须要有内容');
            return;
        }
        delete query['tag'];
        this.setData({
            query: Object.assign(query, { q: q, start: 0 }),
            start: 0,
            musics: []
        }, function () {
            _this.searchMusic();
        });
    },
    searchMusic: function () {
        this.getMusics();
    },
    getMusics: function () {
        var _this = this;
        var _a = this.data, musics = _a.musics, query = _a.query;
        this.setData({
            loading: true
        });
        query.start == 0 && util_1.showLoading();
        request_1.default.get("/v2/music/search", query).then(function (res) {
            query.start == 0 && util_1.hideLoading();
            _this.setData({
                musics: musics.concat(res.data.musics),
                total: res.data.total,
                query: Object.assign(query, { start: query.count + query.start }),
                loading: false
            });
        });
    },
    handeChangeTag: function (e) {
        var _this = this;
        var query = this.data.query;
        var tag = e.currentTarget.dataset.tag;
        if (tag === '' || tag === undefined) {
            console.error('搜索必须要有内容');
            return;
        }
        delete query['q'];
        this.setData({
            query: Object.assign(query, { tag: tag, start: 0 }),
            musics: []
        }, function () {
            _this.searchMusic();
        });
    },
    onLoad: function () {
        this.getMusics();
    },
    onReachBottom: function () {
        var _a = this.data, loading = _a.loading, query = _a.query, total = _a.total;
        if (!loading && query.start + query.count < total) {
            this.getMusics();
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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SUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFBO1FBQ3ZDLElBQUksR0FBRyxLQUFLLEVBQUUsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25DLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDekIsT0FBTTtTQUNQO1FBQ0QsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDakIsSUFBSSxDQUFDLE9BQVEsQ0FDWDtZQUNFLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsS0FBQSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUM5QyxNQUFNLEVBQUUsRUFBRTtTQUNYLEVBQ0Q7WUFDRSxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDcEIsQ0FBQyxDQUNGLENBQUE7SUFDSCxDQUFDO0lBQ0QsTUFBTTtRQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtJQUNsQixDQUFDO0lBQ0QsYUFBYTtRQUNMLElBQUEsY0FBcUMsRUFBbkMsb0JBQU8sRUFBRSxnQkFBSyxFQUFFLGdCQUFtQixDQUFBO1FBQzNDLElBQUksQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBRTtZQUNqRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7U0FDakI7SUFDSCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwiZmlsZSI6InBhZ2VzL211c2ljL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xuLy/ojrflj5blupTnlKjlrp7kvotcblxuaW1wb3J0IFJlcXVlc3QgZnJvbSAnLi4vLi4vdXRpbHMvcmVxdWVzdCdcbmltcG9ydCB7IHNob3dMb2FkaW5nLCBoaWRlTG9hZGluZyB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnXG4vLyBpbnRlcmZhY2UgSVNlYXJjaCB7XG4vLyAgIHE/OiBzdHJpbmdcbi8vICAgdGFnPzogc3RyaW5nXG4vLyAgIGNvdW50PzogbnVtYmVyXG4vLyAgIHN0YXJ0PzogbnVtYmVyXG4vLyB9XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbXVzaWNzOiBbXSxcbiAgICB0b3RhbDogMCxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBxdWVyeToge1xuICAgICAgc3RhcnQ6IDAsXG4gICAgICBjb3VudDogMTUsXG4gICAgICBxOiB1bmRlZmluZWQsXG4gICAgICB0YWc6ICfmtYHooYwnXG4gICAgfSxcbiAgICB0YWdzOiBbXG4gICAgICAn5rWB6KGMJyxcbiAgICAgICfovbvpn7PkuZAnLFxuICAgICAgJ+aRh+a7micsXG4gICAgICAn5Y+k5YW4JyxcbiAgICAgICfnlLXlrZAnLFxuICAgICAgJ+S4lueVjOmfs+S5kCcsXG4gICAgICAn5rCR6LCjJyxcbiAgICAgICfor7TllLEnLFxuICAgICAgJ+eIteWjqycsXG4gICAgICAn5Y6f5aOwJ1xuICAgIF1cbiAgfSxcbiAgLy8gICDot7PovazliLDor6bmg4XpobVcbiAgaGFuZGVMaW5rRGV0YWlsKGU6IGFueSkge1xuICAgIGNvbnN0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWRcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uL211c2ljX2RldGFpbC9pbmRleD9pZD0ke2lkfWBcbiAgICB9KVxuICB9LFxuICBoYW5kbGVmb3JtU3VibWl0KGU6IGFueSkge1xuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHRoaXMuZGF0YVxuICAgIGNvbnN0IHEgPSBlLmRldGFpbC52YWx1ZVxuICAgIGlmIChxID09PSAnJyB8fCBxID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+aQnOe0ouW/hemhu+imgeacieWGheWuuScpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgZGVsZXRlIHF1ZXJ5Wyd0YWcnXVxuICAgIHRoaXMuc2V0RGF0YSEoXG4gICAgICB7XG4gICAgICAgIHF1ZXJ5OiBPYmplY3QuYXNzaWduKHF1ZXJ5LCB7IHEsIHN0YXJ0OiAwIH0pLFxuICAgICAgICBzdGFydDogMCxcbiAgICAgICAgbXVzaWNzOiBbXVxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5zZWFyY2hNdXNpYygpXG4gICAgICB9XG4gICAgKVxuICB9LFxuICBzZWFyY2hNdXNpYygpIHtcbiAgICB0aGlzLmdldE11c2ljcygpXG4gIH0sXG4gIGdldE11c2ljcygpIHtcbiAgICBjb25zdCB7IG11c2ljcywgcXVlcnkgfSA9IHRoaXMuZGF0YVxuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgbG9hZGluZzogdHJ1ZVxuICAgIH0pXG4gICAgcXVlcnkuc3RhcnQgPT0gMCAmJiBzaG93TG9hZGluZygpIC8vIOesrOS4gOasoeWxleekumxvYWRpbmdcbiAgICBSZXF1ZXN0LmdldChgL3YyL211c2ljL3NlYXJjaGAsIHF1ZXJ5KS50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgcXVlcnkuc3RhcnQgPT0gMCAmJiBoaWRlTG9hZGluZygpXG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgbXVzaWNzOiBtdXNpY3MuY29uY2F0KHJlcy5kYXRhLm11c2ljcyksXG4gICAgICAgIHRvdGFsOiByZXMuZGF0YS50b3RhbCxcbiAgICAgICAgcXVlcnk6IE9iamVjdC5hc3NpZ24ocXVlcnksIHsgc3RhcnQ6IHF1ZXJ5LmNvdW50ICsgcXVlcnkuc3RhcnQgfSksXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG4gIGhhbmRlQ2hhbmdlVGFnKGU6IGFueSkge1xuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHRoaXMuZGF0YVxuICAgIGNvbnN0IHRhZyA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnRhZ1xuICAgIGlmICh0YWcgPT09ICcnIHx8IHRhZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfmkJzntKLlv4XpobvopoHmnInlhoXlrrknKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGRlbGV0ZSBxdWVyeVsncSddXG4gICAgdGhpcy5zZXREYXRhIShcbiAgICAgIHtcbiAgICAgICAgcXVlcnk6IE9iamVjdC5hc3NpZ24ocXVlcnksIHsgdGFnLCBzdGFydDogMCB9KSxcbiAgICAgICAgbXVzaWNzOiBbXVxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5zZWFyY2hNdXNpYygpXG4gICAgICB9XG4gICAgKVxuICB9LFxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5nZXRNdXNpY3MoKVxuICB9LFxuICBvblJlYWNoQm90dG9tKCkge1xuICAgIGNvbnN0IHsgbG9hZGluZywgcXVlcnksIHRvdGFsIH0gPSB0aGlzLmRhdGFcbiAgICBpZiAoIWxvYWRpbmcgJiYgcXVlcnkuc3RhcnQgKyBxdWVyeS5jb3VudCA8IHRvdGFsKSB7XG4gICAgICB0aGlzLmdldE11c2ljcygpXG4gICAgfVxuICB9XG59KVxuIl19

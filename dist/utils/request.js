"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../config/index");
var methods = ['get', 'post', 'put', 'delete'];
var Request = {};
methods.forEach(function (item) {
    Request[item] = function (url, data, options) {
        return new Promise(function (resolve, reject) {
            var _url = /^http[s]?:\/\/|^\/\//.test(url) ? url : "" + index_1.BASEHONST + url;
            var _options = {};
            if (options) {
                _options = Object.assign(_options, options);
            }
            data = Object.assign({
                apikey: index_1.APIKEY
            }, data);
            var requestOptions = Object.assign({
                url: _url,
                method: item || 'GET',
                data: data,
                success: function (res) {
                    resolve(res);
                },
                fail: function (e) {
                    reject(e);
                }
            }, _options);
            wx.request(requestOptions);
        });
    };
});
exports.default = Request;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3JlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBbUQ7QUFFbkQsSUFBTSxPQUFPLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQTtBQUVoRCxJQUFJLE9BQU8sR0FBUSxFQUFFLENBQUE7QUFFckIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7SUFDbEIsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQ2QsR0FBVyxFQUNYLElBQW9DLEVBQ3BDLE9BQTBCO1FBRzFCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxJQUFNLElBQUksR0FBRyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBRyxpQkFBUyxHQUFHLEdBQUssQ0FBQTtZQUUxRSxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUE7WUFFakIsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFBO2FBQzVDO1lBRUQsSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQ2xCO2dCQUNFLE1BQU0sRUFBRSxjQUFNO2FBQ2YsRUFDRCxJQUFJLENBQ0wsQ0FBQTtZQUVELElBQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQ2xDO2dCQUNFLEdBQUcsRUFBRSxJQUFJO2dCQUNULE1BQU0sRUFBRSxJQUFJLElBQUksS0FBSztnQkFDckIsSUFBSSxNQUFBO2dCQUNKLE9BQU8sRUFBUCxVQUFRLEdBQW9DO29CQVUxQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2QsQ0FBQztnQkFDRCxJQUFJLEVBQUosVUFBSyxDQUEyQjtvQkFDOUIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNYLENBQUM7YUFDRixFQUNELFFBQVEsQ0FDVyxDQUFBO1lBQ3JCLEVBQUUsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDNUIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDLENBQUE7QUFDSCxDQUFDLENBQUMsQ0FBQTtBQUVGLGtCQUFlLE9BQU8sQ0FBQSIsImZpbGUiOiJ1dGlscy9yZXF1ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQkFTRUhPTlNULCBBUElLRVkgfSBmcm9tICcuLi9jb25maWcvaW5kZXgnXG5cbmNvbnN0IG1ldGhvZHMgPSBbJ2dldCcsICdwb3N0JywgJ3B1dCcsICdkZWxldGUnXVxuXG5sZXQgUmVxdWVzdDogYW55ID0ge31cblxubWV0aG9kcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICBSZXF1ZXN0W2l0ZW1dID0gKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGRhdGE/OiBzdHJpbmcgfCBvYmplY3QgfCBBcnJheUJ1ZmZlcixcbiAgICBvcHRpb25zPzogd3guUmVxdWVzdE9wdGlvblxuICApID0+IHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBfdXJsID0gL15odHRwW3NdPzpcXC9cXC98XlxcL1xcLy8udGVzdCh1cmwpID8gdXJsIDogYCR7QkFTRUhPTlNUfSR7dXJsfWBcblxuICAgICAgbGV0IF9vcHRpb25zID0ge31cblxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgX29wdGlvbnMgPSBPYmplY3QuYXNzaWduKF9vcHRpb25zLCBvcHRpb25zKVxuICAgICAgfVxuXG4gICAgICBkYXRhID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIGFwaWtleTogQVBJS0VZXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGFcbiAgICAgIClcblxuICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsOiBfdXJsLFxuICAgICAgICAgIG1ldGhvZDogaXRlbSB8fCAnR0VUJyxcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIHN1Y2Nlc3MocmVzOiB3eC5SZXF1ZXN0U3VjY2Vzc0NhbGxiYWNrUmVzdWx0KSB7XG4gICAgICAgICAgICAvLyBpZiAocmVzLmRhdGEuY29kZSA9PSA0MDEpIHtcbiAgICAgICAgICAgIC8vICAgbGV0IGN1cnJlbnRQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV0gLy8g6I635Y+W5b2T5YmN6aG16Z2i55qE5a+56LGhXG4gICAgICAgICAgICAvLyAgIGlmIChjdXJyZW50UGFnZS5yb3V0ZSAhPT0gJ3BhZ2VzL2xvZ2luL2luZGV4Jykge1xuICAgICAgICAgICAgLy8gICAgIC8vIOacqueZu+mZhlxuICAgICAgICAgICAgLy8gICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgLy8gICAgICAgdXJsOiAnLi4vbG9naW4vaW5kZXgnXG4gICAgICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsKGU6IHd4LkdlbmVyYWxDYWxsYmFja1Jlc3VsdCkge1xuICAgICAgICAgICAgcmVqZWN0KGUpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBfb3B0aW9uc1xuICAgICAgKSBhcyB3eC5SZXF1ZXN0T3B0aW9uXG4gICAgICB3eC5yZXF1ZXN0KHJlcXVlc3RPcHRpb25zKVxuICAgIH0pXG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RcbiJdfQ==

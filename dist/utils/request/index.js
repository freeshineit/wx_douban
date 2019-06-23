"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var login_1 = require("../../api/login");
var check_session_1 = require("./check-session");
var global_config_1 = require("../../config/global-config");
var TRY_LOGIN_LIMIT = 3;
function request(obj) {
    if (obj === void 0) { obj = {}; }
    return new Promise(function (resolve, reject) {
        check_session_1.checkSession()
            .then(function () {
            var _a;
            var session = wx.getStorageSync(global_config_1.SESSION_KEY);
            var url = obj.url, data = obj.data, method = obj.method, header = obj.header, dataType = obj.dataType;
            if (method === 'POST') {
                header['content-type'] = 'application/x-www-form-urlencoded';
            }
            var tryLoginCount = obj.tryLoginCount || 0;
            var dataWithSession = __assign({}, data, (_a = {}, _a[global_config_1.SESSION_KEY] = session, _a));
            console.log('check session:', dataWithSession);
            wx.request({
                url: url,
                data: dataWithSession,
                method: method,
                header: header,
                dataType: dataType,
                success: function (res) {
                    if (res.statusCode === 200) {
                        var dataResponse = res.data;
                        console.log('dataResponse:', dataResponse);
                        if (global_config_1.LOGIN_FAIL_CODES.indexOf(dataResponse.return_code) > -1 &&
                            tryLoginCount < TRY_LOGIN_LIMIT) {
                            wx.removeStorageSync(global_config_1.SESSION_KEY);
                            console.log('doLogin:', obj);
                            login_1.doLogin().then(function () {
                                obj.tryLoginCount = ++tryLoginCount;
                                request(obj)
                                    .then(function (response) {
                                    dealWithCode({ response: response, reject: reject, resolve: resolve });
                                })
                                    .catch(function (err) {
                                    reject(err);
                                });
                            });
                        }
                        else {
                            dealWithCode({ response: res, reject: reject, resolve: resolve });
                        }
                    }
                    else {
                        reject(res);
                    }
                },
                fail: function (err) {
                    reject(err);
                }
            });
        })
            .catch(function (err) {
            reject(err);
        });
    });
}
exports.request = request;
function dealWithCode(_a) {
    var response = _a.response, reject = _a.reject, resolve = _a.resolve;
    var dataResponse = response.data;
    if (dataResponse.return_code === 0) {
        resolve(response);
    }
    else {
        wx.showModal({
            title: '接口请求出错',
            showCancel: false,
            content: dataResponse.return_msg + ("(" + dataResponse.return_code + ")")
        });
        reject(dataResponse);
    }
}
exports.dealWithCode = dealWithCode;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QkF3REM7QUFPRCxTQUFnQixZQUFZLENBQUMsRUFJUDtRQUhwQixzQkFBUSxFQUNSLGtCQUFNLEVBQ04sb0JBQU87SUFFUCxJQUFNLFlBQVksR0FBb0IsUUFBUSxDQUFDLElBQUksQ0FBQTtJQUVuRCxJQUFJLFlBQVksQ0FBQyxXQUFXLEtBQUssQ0FBQyxFQUFFO1FBQ2xDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTtLQUNsQjtTQUFNO1FBQ0wsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNYLEtBQUssRUFBRSxRQUFRO1lBQ2YsVUFBVSxFQUFFLEtBQUs7WUFDakIsT0FBTyxFQUFFLFlBQVksQ0FBQyxVQUFVLElBQUcsTUFBSSxZQUFZLENBQUMsV0FBVyxNQUFHLENBQUE7U0FDbkUsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFBO0tBQ3JCO0FBQ0gsQ0FBQztBQWpCRCxvQ0FpQkMiLCJmaWxlIjoidXRpbHMvcmVxdWVzdC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElDb21tb25SZXNwb25zZSB9IGZyb20gJy4uLy4uL2FwaS9jb21tb24nXG5pbXBvcnQgeyBkb0xvZ2luIH0gZnJvbSAnLi4vLi4vYXBpL2xvZ2luJ1xuaW1wb3J0IHsgY2hlY2tTZXNzaW9uIH0gZnJvbSAnLi9jaGVjay1zZXNzaW9uJ1xuaW1wb3J0IHsgU0VTU0lPTl9LRVksIExPR0lOX0ZBSUxfQ09ERVMgfSBmcm9tICcuLi8uLi9jb25maWcvZ2xvYmFsLWNvbmZpZydcblxuY29uc3QgVFJZX0xPR0lOX0xJTUlUID0gM1xuXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdChvYmo6IGFueSA9IHt9KTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjaGVja1Nlc3Npb24oKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCBzZXNzaW9uID0gd3guZ2V0U3RvcmFnZVN5bmMoU0VTU0lPTl9LRVkpXG4gICAgICAgIGNvbnN0IHsgdXJsLCBkYXRhLCBtZXRob2QsIGhlYWRlciwgZGF0YVR5cGUgfSA9IG9ialxuICAgICAgICBpZiAobWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgICAgICBoZWFkZXJbJ2NvbnRlbnQtdHlwZSddID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgICAgfVxuICAgICAgICBsZXQgdHJ5TG9naW5Db3VudCA9IG9iai50cnlMb2dpbkNvdW50IHx8IDBcbiAgICAgICAgLy8g5aaC5p6c6ZyA6KaB6YCa6L+HIGRhdGEg5oqK55m75b2V5oCBIHNlc3Npb25JZCDluKbkuIpcbiAgICAgICAgY29uc3QgZGF0YVdpdGhTZXNzaW9uID0geyAuLi5kYXRhLCBbU0VTU0lPTl9LRVldOiBzZXNzaW9uIH1cbiAgICAgICAgY29uc29sZS5sb2coJ2NoZWNrIHNlc3Npb246JywgZGF0YVdpdGhTZXNzaW9uKVxuICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgZGF0YTogZGF0YVdpdGhTZXNzaW9uLFxuICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICBoZWFkZXIsXG4gICAgICAgICAgZGF0YVR5cGUsXG4gICAgICAgICAgc3VjY2VzczogKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1c0NvZGUgPT09IDIwMCkge1xuICAgICAgICAgICAgICBjb25zdCBkYXRhUmVzcG9uc2U6IElDb21tb25SZXNwb25zZSA9IHJlcy5kYXRhXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhUmVzcG9uc2U6JywgZGF0YVJlc3BvbnNlKVxuICAgICAgICAgICAgICAvLyDnmbvpmYbmgIHlpLHmlYjnibnlrprplJnor6/noIHliKTmlq3vvIzkuJTph43or5XmrKHmlbDmnKrovr7liLDkuIrpmZBcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIExPR0lOX0ZBSUxfQ09ERVMuaW5kZXhPZihkYXRhUmVzcG9uc2UucmV0dXJuX2NvZGUpID4gLTEgJiZcbiAgICAgICAgICAgICAgICB0cnlMb2dpbkNvdW50IDwgVFJZX0xPR0lOX0xJTUlUXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHd4LnJlbW92ZVN0b3JhZ2VTeW5jKFNFU1NJT05fS0VZKSAvLyDmuIXpmaTmnKzlnLDnvJPlrZhcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZG9Mb2dpbjonLCBvYmopXG4gICAgICAgICAgICAgICAgZG9Mb2dpbigpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgb2JqLnRyeUxvZ2luQ291bnQgPSArK3RyeUxvZ2luQ291bnRcbiAgICAgICAgICAgICAgICAgIHJlcXVlc3Qob2JqKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgZGVhbFdpdGhDb2RlKHsgcmVzcG9uc2UsIHJlamVjdCwgcmVzb2x2ZSB9KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVhbFdpdGhDb2RlKHsgcmVzcG9uc2U6IHJlcywgcmVqZWN0LCByZXNvbHZlIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdChyZXMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOiBlcnIgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICByZWplY3QoZXJyKVxuICAgICAgfSlcbiAgfSlcbn1cblxuaW50ZXJmYWNlIElEZWFsV2l0aENvZGVPcHRpb24ge1xuICByZXNwb25zZTogYW55XG4gIHJlamVjdDogKHJlczogYW55KSA9PiB2b2lkXG4gIHJlc29sdmU6IChlcnI6IGFueSkgPT4gdm9pZFxufVxuZXhwb3J0IGZ1bmN0aW9uIGRlYWxXaXRoQ29kZSh7XG4gIHJlc3BvbnNlLFxuICByZWplY3QsXG4gIHJlc29sdmVcbn06IElEZWFsV2l0aENvZGVPcHRpb24pIHtcbiAgY29uc3QgZGF0YVJlc3BvbnNlOiBJQ29tbW9uUmVzcG9uc2UgPSByZXNwb25zZS5kYXRhXG4gIC8vIOatpOWkhOeUqOS9nOS4muWKoemUmeivr+eggeWIpOaWreWSjOWkhOeQhlxuICBpZiAoZGF0YVJlc3BvbnNlLnJldHVybl9jb2RlID09PSAwKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSlcbiAgfSBlbHNlIHtcbiAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgdGl0bGU6ICfmjqXlj6Por7fmsYLlh7rplJknLFxuICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICBjb250ZW50OiBkYXRhUmVzcG9uc2UucmV0dXJuX21zZyArIGAoJHtkYXRhUmVzcG9uc2UucmV0dXJuX2NvZGV9KWBcbiAgICB9KVxuICAgIHJlamVjdChkYXRhUmVzcG9uc2UpXG4gIH1cbn1cbiJdfQ==

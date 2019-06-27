小程序 DEMO

- 使用 gulp 构建（支持 typescript 和 less）
- 使用 typescript 编译
- 使用 tslint + prettier 格式代码规范
- 使用小程序官方 typing 库

```bash
# 安装依赖
npm install

# 全局安装依赖
npm install gulp prettier typescript --global

# 启动代码
npm run dev

# 需要在小程序开发工具里【工具】-【构建npm】

# 打包代码
npm run build
```

## api 配置

### 使用 nginx 代理

```sh
    server {
        listen      5555;
        server_name  localhost;

        location /v2/ {
            proxy_store off;
            proxy_redirect off;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header Referer 'no-referrer-when-downgrade';
            proxy_set_header User-Agent 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36';
            proxy_connect_timeout 600;
            proxy_read_timeout 600;
            proxy_send_timeout 600;
            proxy_pass https://api.douban.com/v2/;
        }
    }
```

## 项目结构

```
├─dist                              //编译之后的项目文件（带 sorcemap，支持生产环境告警定位）
├─src                               //开发目录
│  │  app.ts                        //小程序起始文件
│  │  app.json
│  │  app.less
│  │
│  ├─assets                     	//静态资源
│     ├─less						//公共less
│     ├─img						    //图片资源
│  ├─components                     //组件
│  ├─utils                           //工具库
│  ├─config                           //配置文档
│     ├─cgi-config.ts                //cgi接口配置
│     ├─global-config.ts                //全局配置
│  ├─pages                          //小程序相关页面
│
│  project.config.json              //小程序配置文件
│  gulpfile.js                      //工具配置
│  package.json                     //项目配置
│  README.md                        //项目说明
│  tsconfig.json                     //typescript配置
│  tslint.json                     //代码风格配置
```

**注意：`package.json`中的`dependencies`字段，依赖的包会被自动打包到`dist`里。**

## 公共库使用说明

### utils/request

通用请求，处理包括 session 过期自动拉取登录接口续期等逻辑。（适用于有单个登录接口来获取 session 的场景）
使用方式：

1. 在`config/global-config.ts`文件里，更新`SESSION_KEY`的值（后台接口协议返回 key，例如`"sessionId"`）。
2. 如果有其他需要全局携带的参数，需要在`utils/request/index.ts`文件里，`dataWithSession`中带上。
3. 在`config/global-config.ts`文件里，更新`LOGIN_FAIL_CODES`的值（错误码若为该数组中的一个，则会重新拉起登录，再继续发起请求）。

## 事件定义规范

- handleLinkXXXXX 链接跳转

- handleTapXXXXXX 点击事件

## api 规范

<!-- https://segmentfault.com/a/1190000018716657 -->

### movie api

### book api

- [x] /v2/book/search
- [x] /v2/book/:id
- [ ] /v2/book/isbn/:name
- [ ] /v2/book/:id/tags
- [ ] /v2/book/user/:name/tags
- [ ] /v2/book/user/:name/collections
- [ ] /v2/book/:id/collection
- [ ] /v2/book/user/:name/annotations
- [ ] /v2/book/:id/annotations
- [ ] /v2/book/annotation/:id
- [ ] /v2/book/annotation/:id
- [ ] /v2/book/series/:id/books
- [ ] /v2/book/:id/collection [POST]
- [ ] /v2/book/:id/collection [PUT]
- [ ]/v2/book/:id/collection [DELETE]
- [ ] /v2/book/:id/annotations [POST]
- [ ] /v2/book/annotation/:id [PUT]
- [ ] /v2/book/annotation/:id [DELETE]
- [ ] /v2/book/reviews [POST]
- [ ]/v2/book/review/:id [PUT]
- [ ] /v2/book/review/:id [DELETE]
- [ ] /v2/book/user_tags/:id [GET](deprecated)

### music api

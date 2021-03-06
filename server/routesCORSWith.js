/**
 * Created by ruifengwei on 2017/4/14.
 */
/**
 * Created by Administrator on 2017/4/8.
 */
'use strict';
const bodyParser = require('koa-bodyparser');

module.exports = (router) => {
    router.get('/userInfo/:id', bodyParser(), function(ctx, next) {
        // 用bodyParser解析出来参数
        // console.log(`get ${ctx.url}`, ctx.request);
        ctx.body = {
            status: 200,
            data: {
                explain: '我是带credentials参数的请求，我的Access-Control-Allow-Origin头部必须为指定的域名，可以携带身份凭证',
                params: ctx.params
            }
        };
    });

    router.put('/userGroup', bodyParser(), function (ctx, next) {
        ctx.body = {
            status: 200,
            msg: "success",
            data: {
                explain: '我是PUT请求，需要先有预检请求(OPTION),对js是透明的，通过后再来发送真正的请求'
            }
        };
    });
};
const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');

const index = require('./routes/index');
const wechat = require('co-wechat');
// error handler
onerror(app);

// middlewares
app.use(bodyparser);
app.use(json());
app.use(logger());
app.use(require('koa-static')(__dirname + '/public'));

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}));

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

var config = {
  token: 'xumj8955',
  appid: 'wxf7420a1829a1e158',
  appSecret: 'ebec8b16c12162f369bb2440bf774f26',
  encodingAESKey: 'hMlbEtcang9FqJu2mnLfEFk5Vv89eEMJSINHk3RpFfA',
  checkSignature: true // 可选，默认为true。由于微信公众平台接口调试工具在明文模式下不发送签名，所以如要使用该测试工具，请将其设置为false
};
app.use(wechat(config).middleware(async (message) => {
  // 微信输入信息就是这个 message
  console.log(message);
  if (message.FromUserName === 'h') {
    // 回复屌丝(普通回复)
    return 'hehe';
  }
}));

// routes
app.use(index.routes(), index.allowedMethods());

module.exports = app;

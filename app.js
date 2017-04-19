const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');

const index = require('./routes/index');
// const wechat = require('co-wechat');
// const config = require('./wechatConfig');
const wechat = require('./routes/wechat');
// var wechatControl = require('./controllers/wechatController');
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

// routes
app.use(index.routes(), index.allowedMethods());
app.use(wechat.routes(),wechat.allowedMethods());
// app.use(wechat(config).middleware(async (message) => {
//   return(wechatControl(message))
// }));


module.exports = app;

const Koa = require('koa');
const app = new Koa();
var router = require('koa-router')();
const wechat = require('co-wechat');
const config = require('../wechatConfig');
var wechatControl = require('../controllers/wechatController');
router.prefix('/wechat');
app.use(wechat(config).middleware(async (message) => {
  console.log(message);
  return(wechatControl(message))
}));

module.exports = router;

var router = require('koa-router')();
const wechat = require('co-wechat');
router.prefix('/wechat');

var config = {
  token: 'xumj8955',
  appid: 'wxf7420a1829a1e158',
  appSecret: 'ebec8b16c12162f369bb2440bf774f26',
  encodingAESKey: 'hMlbEtcang9FqJu2mnLfEFk5Vv89eEMJSINHk3RpFfA',
  checkSignature: true // 可选，默认为true。由于微信公众平台接口调试工具在明文模式下不发送签名，所以如要使用该测试工具，请将其设置为false
};

router.all('/', wechat(config).middleware(async(message)=>{
  if (message.FromUserName === 'diaosi') {
    // 回复屌丝(普通回复)
    return 'hehe';
  }
}));

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response';
});

module.exports = router;

var router = require('koa-router')();
router.prefix('/api');
router.get('/',(ctx,next)=>{
  ctx.body = {
    msg:'这是api接口'
  }
});
module.exports = router;
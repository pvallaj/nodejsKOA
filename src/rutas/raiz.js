const Router = require('@koa/router');
const router = new Router({ prefix: '/' })

router.get('/', async (ctx, next) => {
  ctx.body = 'raiz'
})

module.export = router
const Router = require('@koa/router');
const router = new Router({ prefix: '/diario' })

router.post('/', async (ctx, next) => {
  ctx.body = 'registros individuales'
})

module.export = router
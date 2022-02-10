//const Router = require('@koa/router');
const Router = require('koa-router');
const router = new Router({ prefix: '/regventas' })

router.post('/', async (ctx, next) => {
  ctx.body = 'a subir el archivo...'
})

module.export = router;
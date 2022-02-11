//const Router = require('@koa/router');
const Router = require('koa-router');
const router = new Router({ prefix: '/regventas' })
const cargaVentaDiaria= require('../controladores/carga');

router.post('/', async (ctx, next) => {
  console.log(ctx.request.body.datos);
  const vts=JSON.parse(ctx.request.body.datos);
  console.log(vts.data.venta);
  
  vts.data.venta.forEach(reg => cargaVentaDiaria(reg, ctx));

  ctx.body = 'a subir el archivo...'
})

module.exports = router;
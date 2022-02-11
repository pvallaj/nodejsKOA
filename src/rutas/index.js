const combineRouters = require('koa-combine-routers');

const rtDiario = require('./diario');
const rtVentas = require('./ventas');
const rtRaiz = require('./raiz');

const router = combineRouters(
    rtRaiz,
    rtVentas,
    rtDiario
  )
  
  module.exports = router
const Koa = require("koa");
const swagger = require("swagger2");
const { ui, validate } = require("swagger2-koa");
const mongoose = require('mongoose');

//const rutas = require('./rutas/index');
//const rventas = require('./rutas/ventas');

const combineRouters = require('koa-combine-routers');

const rtDiario = require('./rutas/diario');
const rtVentas = require('./rutas/ventas');
const rtRaiz = require('./rutas/raiz');

const router = combineRouters(
    rtRaiz,
    rtVentas,
    rtDiario
  )

mongoose.connect('mongodb://yml-usuario:Usuario1596@dbs-yml:27017/yml')
.then((res)=>{
  console.log('Conectado a MONGO');
})
.catch((err)=>{
  console.log('NO HAY BD');
  console.log(err);
});

const swaggerDocument = swagger.loadDocumentSync("src/api.yaml");
const app = new Koa();

app
  .use(ui(swaggerDocument, "/swagger"))
  //.use(rventas.routes())
  //.use(rventas.allowedMethods())
  .use(router())
  .listen(3000);

console.log("API started");
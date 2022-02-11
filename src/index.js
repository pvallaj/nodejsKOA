const Koa = require("koa");
const swagger = require("swagger2");
const { ui, validate } = require("swagger2-koa");
const mongoose = require('mongoose');
const bp = require('koa-bodyparser');

/*
* * Se obtiene las rutas
* ! Alerta
* ? Pregunta
* TODO: hay que rehacer
* @param: nomParam: descripción
*/
const rutas = require('./rutas');

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
  .use(bp())
  .use(ui(swaggerDocument, "/swagger"))
  .use(rutas());
app.listen(3000);
  /*.then(()=>{
    console.log('Escuchando en el 3000');
  });*/

console.log("API started");
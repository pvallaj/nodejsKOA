const router = require('koa-router')()  // Importar función de enrutamiento
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerDefinition = {
    info: {
        title: 'Excusa de la API del sitio web personal',
        version: '1.0.0',
        description: 'API',
    },
    host: 'localhost:3000',
    basePath: '/' // Base path (optional)
};
const options = {
    swaggerDefinition,
    apis: [path.join(__dirname,'../routes/*.js')], // La dirección de almacenamiento del enrutador anotado, preferiblemente path.join()
};
const swaggerSpec = swaggerJSDoc(options)
 // Obtener el archivo de anotaciones generado mediante enrutamiento
router.get('/swagger.json', async function (ctx) {
    ctx.set('Content-Type', 'application/json');
    ctx.body = swaggerSpec;
})
module.exports = router
const VDS= require('../modelos/ventadiaria');

cargaVentaDiaria = async function  (reg, ctx) {
  console.log(ctx.request.body.datos);
  const vts=JSON.parse(ctx.request.body.datos);
  console.log(vts.data.venta);
  vts.data.venta.forEach(reg => {
    const rvd=VDS(reg);
    if(rvd['1']) rvd.id_suc=1;
    if(rvd['6']) rvd.id_suc=6;
    rvd
    .save()
    .then(
        (d)=>console.log(d)
    )
    .catch(
        (e)=>console.error(e)
    )
});
  ctx.body = 'a subir el archivo...'
};

module.exports = cargaVentaDiaria;
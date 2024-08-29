function getHora(req,res,next) {
    var fecha = new Date();
    var hora = fecha.getHours();
    var fecha = Date.now();
    console.log("Ingreso a la ruta a las " + hora);
    next();
}


module.exports = getHora;
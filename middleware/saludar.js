function saludar(req,res,next) {
    console.log("Hola, esperemos que te lo pases bien en la ruta");
    next();
}

module.exports = saludar;
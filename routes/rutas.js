const ruta = require("express").Router();
const hora = require("../middleware/hora");
const saludar = require("../middleware/saludar");

ruta.get("/", hora, saludar, (req,res) =>{
    res.send("Bienvenido a la ruta raiz");
})

ruta.get("/home", hora, saludar, (req,res) =>{
    res.send("Bienvenido a la ruta home");
})

module.exports = ruta;
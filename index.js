const express = require("express");
const rutas = require("./routes/rutas");
const app = express();

app.use(express.urlencoded({extended:true}));
app.use("/", rutas);

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("Servidor en http://127.0.0.1:"+port);
});
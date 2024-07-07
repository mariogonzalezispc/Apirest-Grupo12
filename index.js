const express = require ("express");
const cors = require ("cors");
const Listado = require ("./routes/listado.js");
const Nuevolibro = require ("./routes/crea.js");
const Modifica = require ("./routes/modifica.js");
const Borra = require ("./routes/borra.js");
const app = express();
const port = 3030;



app.use(cors());
app.use(express.json());




app.get("/", (req, res)=>{
    res.send("Hola Mundo");
})

app.get("/crea", Nuevolibro);
app.get("/lista", Listado);
app.get("/modifica", Modifica);
app.get("/borra", Borra);



app.get("/acerca", (req, res)=>{
    res.send("proyecto realizado por alumnos del grupo 12 de CaC Comision 24255");
})

app.listen(port,()=>{
    console.log(`Server Corriendo en puerto ${port}`);
} );



// correr con este comando nodemon
// npm run dev
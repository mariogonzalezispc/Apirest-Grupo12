// const express = require ("express");
// const cors = require ("cors");
// const Listado = require ("./routes/listado.js");
// const Agrega = require ("./routes/agrega.js");
// const Modifica = require ("./routes/modificar.js");
// const Borra = require ("./routes/borra.js");
// const app = express();
// const port = 3030;

// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res)=>{
//     res.send("Hola Mundo");
// })
// app.use("/lista", Listado);
// app.use("/agregar", Agrega);
// app.use("/modificar", Modifica);
// app.use("/borrar", Borra);

// app.get("/acerca", (req, res)=>{
//     res.send("proyecto realizado por alumnos del grupo 12 de CaC Comision 24255");
// })

// app.listen(port,()=>{
//     console.log(`Server Corriendo en puerto ${port}`);
// } );



// correr con este comando nodemon
// npm run dev


const express = require("express");
const cors = require("cors");
const postRouter = require("./routes/postRouter.js");
const app = express();
const port = 3030;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hola Mundo");
});

app.use("/", postRouter);

app.get("/acerca", (req, res) => {
    res.send("proyecto realizado por alumnos del grupo 12 de CaC Comision 24255");
});

app.listen(port, () => {
    console.log(`Server corriendo en puerto ${port}`);
});
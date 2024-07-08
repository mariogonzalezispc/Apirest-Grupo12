const express = require("express");
const cors = require("cors");
const postRouter = require("./routes/postRouter.js");
const app = express();
const port = 3030;
const db = require("./data/db.js");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Estas en el Home");
    res.json({ message: "Estas en el Home" });
});

app.use("/", postRouter);

app.get("/acerca", (req, res) => {
    res.send("proyecto realizado por alumnos del grupo 12 de CaC Comision 24255");
});
const conexionDB = async ()=>{
    try {
        await db.authenticate();
        console.log('conexion exitosa a la BD');
    } catch (error) {
        console.log('no conectado a la BD');
    }
}
conexionDB();
app.listen(port, () => {
    console.log(`Server corriendo en puerto ${port}`);
});
// npm run dev
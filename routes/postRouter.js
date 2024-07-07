const express = require("express");
const router = express.Router();
const Listado = require("./listado.js");
const Agrega = require("./agrega.js");
const Modifica = require("./modificar.js");
const Borra = require("./borra.js");

router.use("/lista", Listado);
router.use("/agregar", Agrega);
router.use("/modificar", Modifica);
router.use("/borrar", Borra);

module.exports = router;

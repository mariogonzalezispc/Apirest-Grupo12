const express = require("express");
const router = express.Router();
const listadoController = require("../controllers/listadoController.js");

router.get("/lista", listadoController.getLista);
router.get("/lista/:id", listadoController.traerUnLibro);
router.delete("/borrar/:id", listadoController.deleteItem);
router.post("/agregar", listadoController.addItem);
router.put("/modificar/:id", listadoController.updateItem);

module.exports = router;







module.exports = router;

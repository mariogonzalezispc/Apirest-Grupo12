const express = require("express");
const router = express.Router();
const listadoController = require("../controllers/listadoController");

router.get("/lista", listadoController.getLista);
router.get("/lista/:id", listadoController.getItem);
router.delete("/borrar/:id", listadoController.deleteItem);
router.post("/agregar", listadoController.addItem);
router.put("/modificar/:id", listadoController.updateItem);

module.exports = router;
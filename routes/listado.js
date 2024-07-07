const express = require("express");
const router = express.Router();
const listadoController = require("../controllers/listadoController");

router.get("/", listadoController.getLista);

module.exports = router;

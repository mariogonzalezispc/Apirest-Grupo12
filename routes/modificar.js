const express = require("express");
const router = express.Router();
const modificaController = require("../controllers/modificaController");

router.put("/:id", modificaController.updateItem);

module.exports = router;
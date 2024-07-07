const express = require("express");
const router = express.Router();
const agregaController = require("../controllers/agregaController");

router.post("/", agregaController.addItem);

module.exports = router;
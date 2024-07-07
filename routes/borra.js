const express = require("express");
const router = express.Router();
const borraController = require("../controllers/borraController");

router.delete("/:id", borraController.deleteItem);
module.exports = router;
const express = require("express")

const {enviarPosts,enviarUnPost} = require("../controllers/postControllers.js")
const router = express.Router()

router.get("/",enviarPosts)
router.get("/:id",enviarUnPost)

router.get("/",(req, res) => {
    res.send("aca van los posteos")
})



module.exports = router
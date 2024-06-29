const express = require("express")
const cors = require("cors")
const postRouter = require("./routes/postRouter.js")
const app = express()
const port = 3030

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("estas en el home")
})

app.use("/posteos",postRouter)

app.listen(port, () => {
    console.log(`Servidor OK en el puerto ${port}`);
})
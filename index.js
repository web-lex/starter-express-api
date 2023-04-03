const express = require('express')
const app = express()
const router = require("./routes/routes")
const port = 3000
require("./db/conn")
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use(router)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
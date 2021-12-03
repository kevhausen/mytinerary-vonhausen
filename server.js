require('dotenv').config()
const express = require("express")
const cors = require("cors")
const router = require("./routers/routes.js")
require("./config/database.js")
const app = express()


app.use(cors())
app.use(express.json());


app.use("/api", router)



app.listen(4000, ()=>{
    console.log('listening in port 4000...')
})
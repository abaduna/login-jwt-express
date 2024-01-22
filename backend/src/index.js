const express = require("express")
const cors = require('cors');
const app = express()
const port = 3001

const router = require("./api/endpoing.JS")

app.use("/",router)
app.use(cors());
app.listen(port,()=>{
    console.log(`corriendo puerto 3000 `);
})
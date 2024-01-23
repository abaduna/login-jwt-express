const express = require("express")
const router = express.Router()

const {ping} = require("../controlers/pingControler")
const {login} = require("../controlers/logincontrolers")
router.get("/ping",ping)

router.post("/login",login)

const {data} = require("../controlers/data.controler.js")

router.get("/api/data", data)

module.exports = router
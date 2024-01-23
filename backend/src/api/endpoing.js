const express = require("express")
const router = express.Router()

const {ping} = require("../controlers/pingControler")
const {login} = require("../controlers/logincontrolers")
router.get("/ping",ping)

router.post("/login",login)
module.exports = router
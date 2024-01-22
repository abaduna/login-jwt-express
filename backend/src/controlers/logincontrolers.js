const conection = require("../models/db");

module.exports.login =(req,res)=>{
    const {username,password}= req.body
    console.log(username);
}
const mysql = require("mysql");

const conection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "project_jwt",
});

module.exports = conection;

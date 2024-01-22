const conection = require("../models/db");

module.exports.ping = (req, res) => {
  const consulta = "select * from login";
  try {
    conection.query(consulta, (err, results) => {
      console.log(results);
      console.log(`erorr ${err}`);
      res.json(results)
    });
  } catch (error) {
    console.log(error);
  }
};

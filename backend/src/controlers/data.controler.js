const conection = require("../models/db");
const jwt = require('jsonwebtoken');

module.exports.data = (req, res) => {
    const token = req.header('Authorization');
  const consult = "SELECT * FROM data";
  if (!token) {
    return res.status(401).json({ message: 'Acceso no autorizado. Token no proporcionado.' });
  }

  try {
    const decoded = jwt.verify(token, "Stack");
    conection.query(consult, (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Error en la consulta a la base de datos.' });
      }
      if (result.length > 0) {
        res.status(200).json({ message: result});
      }
    });
  } catch (error) {
    console.log(error);
    res.send({ message: error });
  }
};

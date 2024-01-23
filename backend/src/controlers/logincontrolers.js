const conection = require("../models/db");
const jwt = require("jsonwebtoken");
module.exports.login = (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  console.log(username);
  const conulst = "SELECT * FROM login WHERE username = ? AND password = ?";
  try {
    const { username, password } = req.body;
    conection.query(conulst, [username, password], (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result.length > 0) {
        const token = jwt.sign({ username }, "Stack", {
            expiresIn: '3m'
        });
        res.send({"token": token});
      } else {
        console.log('wrong user')
        res.send({message: 'wrong user'})
      }
    });
  } catch (error) {
    console.log(error);
    res.send({ message: error });
  }
};

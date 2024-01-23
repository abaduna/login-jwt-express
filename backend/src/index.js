const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

const router = require("./api/endpoing.js");

app.use(cors());
app.use(express.json());


app.use("/", router);



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

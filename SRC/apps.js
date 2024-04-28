const express = require("express");
const app = express();

const path = require("path");

app.use(require("./routes/index.routes"));

app.use(express.static(path.join(__dirname, "../Public")));
app.js;

app.listen(3000, () => {
  console.log("servidor a la espera de conexion");
});



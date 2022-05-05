const express = require("express");
require("express-async-errors");
//INSERER EXPRES ASUNC AVENT D'	PPELEER express()

const app = express();

app.get("/", (req, res, next) => {
  throw new Error("ceci est un bug");
  res.send("Je n'enverrai jamais ceci");
});

app.use((err, req, res, next) => {
  res.status(500).json({ erreur: err.message });
});

app.listen(3000);

const express = require("express");
const db = require("../../db");
//INSERER EXPRES ASUNC AVENT D'	PPELEER express()

const app = express();
app.use(express.json()) 

app.post("/names", (req, res) => {
  const paylaod = req.body;
  db.insertOne(paylaod);

  console.log(db.getAll());
  res.status(201).json(paylaod);
});

app.listen(3000);

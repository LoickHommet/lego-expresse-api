const express = require("express");
const db = require("../../db");
const app = express();
const Joi = require('joi')



app.use(express.json()) 

app.post("/names", (req, res) => {
  const paylaod = req.body;
  schema = Joi.object({
    nom: Joi.string().min(2).max(50).required()
  })
 const {value, error} = schema.validate(paylaod)
 if(error)  res.status(400).send({erreur: error.details[0].message});
  db.insertOne(value);

  console.log(db.getAll());
  res.status(201).json(value);
});

app.listen(3000);

const express = require('express')
const app = express() // convention c'est d'appeler notre variable app au lieu de server quand on utilise expresse
const path = require("path")

// pour servir des fichiers statiques automatiquement
// càd: préciser le content-type, les lire et les envoyer
// on va utiliser notre premier middleware

// command a utiliser http GET localhost:3000/public/html/500.html


app.use('/public',express.static(path.join(__dirname, 'public')))

app.listen(3000);





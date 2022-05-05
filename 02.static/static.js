const express = require('expresse')
const app = express() // convention c'est d'appeler notre variable app au lieu de server quand on utilise expresse
const path = require("path")


app.use('/public',express.static(path.join(__dirname__, 'public')))

app.listen(3000);





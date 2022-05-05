const express = require('express')
const app = express() // convention c'est d'appeler notre variable app au lieu de server quand on utilise expresse


app.get('/', (req,res) => {
    res.send("Hello World")
    // il faut appeler une methode d'expresse pour 
    // terminer la fonction
})

app.listen(4000);


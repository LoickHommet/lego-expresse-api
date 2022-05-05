const express = require('express')
const app = express()


//commande a utiliser  http POST localhost:3000/ hello=world

app.use(express.json());

app.post('/', (req, res) => {
    console.log(req.body)
    res.send('fin de la requete')
})


app.listen(3000)
const express = require('express')
const app = express()


//commande a utiliser  http POST localhost:3000/ hello=world

app.use(express.urlencoded({extended:true}));

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})


app.listen(3000)
const express = require('express')
const app = express()


app.post('/', (req, res) => {
    console.log(req.body)
    res.send('fin de la requete')
})


app.listen(3000)
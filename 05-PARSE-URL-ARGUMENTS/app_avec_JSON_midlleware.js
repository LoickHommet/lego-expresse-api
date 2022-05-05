const express = require('express')
const app = express()

// http GET :3000/hey/blabla/2


app.get('/:arg1/blabla/:arg2', (req, res) => {
    console.log(req.params)
    res.send(req.params)
})

app.listen(3000)
const express = require('express')
const app = express()

// def midllewae
function logRequest1(req, res, next) {
    console.log('#1',req.method, req.url);
    next()
}
function logRequest2(req, res, next) {
    console.log('#2',req.method, req.url);
    next()
}

//utilsation du midlleware
app.use(logRequest1)
app.use(logRequest2)
app.use(logRequest2)
app.use(logRequest1)

app.post('/', (req, res) => {
    console.log(req.body)
    res.send("hello")
})

app.listen(3000)
const express = require('express');
const app = express();



function myErrorMiddleware(err, req, res, next){
	//res.status(500).json({erreur: err.message});
	res.status(500)
	res.json({erreur: err.message});

}



app.get('/', (req, res, next) => {
	try {
		throw new Error('ceci est un bug');
	}catch(err){
		next(err)
	}
	
})
app.get('/route2', (req, res, next) => {
	try {
		throw new Error('ceci est un bug dans la route 2');
	}catch(err){
		next(err)
	}
	
})

app.use(myErrorMiddleware); // midlleware d'erreur a la fin

app.listen(3000);
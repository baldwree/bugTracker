const express = require('express')

const BugController = require('./BugController');
const bugController = new BugController();

const bodyParser = require('body-parser');

const app = express()
const port = 3000

// use EJS by default
app.set('view engine', 'ejs');

// parse body of request if present
app.use(bodyParser.urlencoded({ extended: true }));



// linked to bugIndex.ejs
app.get('/bugs', (req, res) => { 
	bugController.index(req, res); 
})

// bugNew.ejs
app.get('/bugs/new', (req, res) => { 
	bugController.newBug(req, res); 
})

// bugNew.ejs
app.post('/bugs', (req, res) => {
	bugController.createBug(req, res);
})

// bugShow.ejs
app.get('/bugs/:id', (req, res) => {
	bugController.showBug(req, res);
})

// launch server
app.listen(port, () => console.log(`Bug app listening on port ${port}!`))
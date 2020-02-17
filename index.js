const express = require('express')

const BugController = require('./BugController');
const bugController = new BugController();

const app = express()
const port = 3000

app.set('view engine', 'ejs');

// linked to bugIndex.ejs
app.get('/bugs', (req, res) => { bugController.index(req, res); })

app.get('/bugs/new', (req, res) => { bugController.newBug(req, res); })

// launch server
app.listen(port, () => console.log(`Bug app listening on port ${port}!`))
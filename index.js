const express = require('express')

const BugController = require('./BugController');
const bugController = new BugController();

const app = express()
const port = 3000

app.set('view engine', 'ejs');

// linked to bugIndex.ejs
app.get('/', (req, res) => { bugController.index(req, res); });
app.get('/bugs', (req, res) => { bugController.index(req, res); });

/* Create a new bug */
app.post('/bugs', (req, res) => {
    bugController.create(req, res);
});

/* Display a form to create a new bug */
app.get('/bugs/new', (req, res) => {
    bugController.newBug(req, res);
});

// launch server
app.listen(port, () => console.log(`Bug app listening on port ${port}!`))

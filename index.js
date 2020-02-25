const express = require('express')

const BugController = require('./BugController');
const bugController = new BugController();

const UserController = require('./UserController');
const userController = new UserController();

const bodyParser = require('body-parser');

const app = express()
const port = 3000

// use EJS by default
app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

// parse body of request if present
app.use(bodyParser.urlencoded({ extended: true }));

// same as app.get below
app.get('/', (req, res) => {
	bugController.index(req, res);
})

//users methods
// linked to bugIndex.ejs
app.get('/users', (req, res) => {
	userController.index(req, res);
})

// linked to bugIndex.ejs
app.get('/users/new', (req, res) => {
	userController.newUser(req, res);
})

// userNew.ejs
app.post('/users', (req, res) => {
	userController.createUser(req, res);
})

// userShow.ejs
app.get('/users/:id', (req, res) => {
	userController.showUser(req, res);
})

// userEdit.ejs
app.get('/users/:id/edit', (req, res) => {
	userController.editUser(req, res);
})

// update user
app.post('/users/:id', (req, res) => {
	userController.updateUser(req, res);
})


// delete bug
app.get('/users/:id/delete', (req, res) => {
	userController.deleteUser(req, res);
})

app.get('/users/:id/kill', (req, res) => {
	userController.killUser(req, res);
})






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

// bugEdit.ejs
app.get('/bugs/:id/edit', (req, res) => {
	bugController.editBug(req, res);
})

// update bug
app.post('/bugs/:id', (req, res) => {
	bugController.updateBug(req, res);
})

// delete bug
app.get('/bugs/:id/delete', (req, res) => {
	bugController.deleteBug(req, res);
})

app.get('/bugs/:id/kill', (req, res) => {
	bugController.killBug(req, res);
})

// launch server
app.listen(port, () => console.log(`Bug app listening on port ${port}!`))

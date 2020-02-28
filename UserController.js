const User = require('./User');
const Bug = require('./Bug');

class UserController {
	// list
	index(req, res) {
		let users = User.all();
    console.log(users);
		res.render('userIndex', { users: users });
	}

  // create
  newUser(req, res) {
    res.render('userNew', { user: new User() })
  }

	createUser(req, res) {
		console.log("Creating new user...");
		console.log(req.body);
		let newUser = User.create(req.body.user);

		if (newUser.isValid()) {
			console.log("Adding new user...");
			console.log(newUser);

			// send redirect to 'show' for new user
			res.writeHead(302, { 'Location': `/users/${newUser.id}` });
			res.end();
		} else {
			res.render('userNew', { user: newUser });
		}
	}

	// read
	showUser(req, res) {
		let id = req.params.id;
		let user = User.get(id);
		if (!user) {
			res.send("Could not find user with id of " + id);
		} else {
			res.render('userShow', { user: user })
		}
	}

	// update
	editUser(req, res) {
		let id = req.params.id;
		let user = User.get(id);
		if (!user) {
			res.send("Could not find user with id of " + id);
		}
		else {
			res.render('userEdit', { user: user });
		}
	}

	updateUser(req, res) {
		let id = req.params.id;
		let user = User.get(id);

		// check if user updates are valid
		let testUser = new User(req.body.user);
		if (!testUser.isValid()) {	// if updates are invalid, send user back to edit
			testUser.id = user.id;
			res.render('userEdit', { user: testUser });
			return;
		}
		// updates are valid, continue as normal
		if (!user) {
			res.send("Could not find user with id of " + id);
		} else {
			user.fname = req.body.user.fname;
			user.lname = req.body.user.lname;
			user.email = req.body.user.email;
			user.thumbnail = req.body.user.thumbnail;

			// send redirect to 'show' for new bug
			res.writeHead(302, { 'Location': `/users/${user.id}` });
			res.end();
		}
	}

	// delete
	deleteUser(req, res) {
		let id = req.params.id;
		let user = User.get(id);

		if (!user) {
			res.send("Could not find user with id of " + id);
		} else {
			res.render('userDelete', { user: user });
		}
	}

	killUser(req, res) {
		let id = req.params.id;
		let user = User.get(id);

		if (!user) {
			res.send("Could not find user with id of " + id);
		} else if (User.all().length <= 1) {
			res.send("Must have at least one active user");
		} else {
			// deletes all bugs associated with user being deleted
			let bugs = Bug.all();
			bugs.forEach(bug => {
				if (bug.userId == user.id) {
					Bug.delete(bug);
				}
			});

			User.delete(user);

			res.writeHead(302, { 'Location': `/users` });
			res.end();

		}
	}

}

module.exports = UserController;

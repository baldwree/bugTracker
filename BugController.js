const Bug = require('./Bug');

class BugController {
	// list
	index(req, res) {
		let bugs = Bug.all();
		res.render('bugIndex', { bugs: bugs });
	}

	// create
	newBug(req, res) {
		res.render('bugNew', { bug: new Bug() })
	}

	createBug(req, res) {
		console.log("Creating new bug...");
		console.log(req.body);
		let newBug = Bug.create(req.body.bug);

		if (newBug.isValid()) {
			console.log("Adding new bug...");
			console.log(newBug);

			// send redirect to 'show' for new bug
			res.writeHead(302, { 'Location': `/bugs/${newBug.id}` });
			res.end();
		} else {
			res.render('bugNew', { bug: newBug });
		}
	}

	// read
	showBug(req, res) {
		let id = req.params.id;
		let bug = Bug.get(id);
		if (!bug) {
			res.send("Could not find bug with id of " + id);
		} else {
			res.render('bugShow', { bug: bug })
		}
	}

	// update
	editBug(req, res) {
		let id = req.params.id;
		let bug = Bug.get(id);
		if (!bug) {
			res.send("Could not find bug with id of " + id);
		}
		else {
			res.render('bugEdit', { bug: bug });
		}
	}

	updateBug(req, res) {
		let id = req.params.id;
		let bug = Bug.get(id);

		// check if bug updates are valid
		let testBug = new Bug(req.body.bug);
		if (!testBug.isValid()) {	// if updates are invalid, send user back to edit
			testBug.id = bug.id;
			res.render('bugEdit', { bug: testBug });
			return;
		}
		// updates are valid, continue as normal
		if (!bug) {
			res.send("Could not find bug with id of " + id);
		} else {
			bug.title = req.body.bug.title;
			bug.description = req.body.bug.description;
			bug.type = req.body.bug.type;
			bug.priority = req.body.bug.priority;
			bug.status = req.body.bug.status;
			// database would use 'save' method here

			// send redirect to 'show' for new bug
			res.writeHead(302, { 'Location': `/bugs/${bug.id}` });
			res.end();
		}
	}

	// delete

}

module.exports = BugController;
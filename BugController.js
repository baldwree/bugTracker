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

	// delete

}

module.exports = BugController;
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
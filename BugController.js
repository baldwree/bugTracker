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

	// update

	// delete

}

module.exports = BugController;
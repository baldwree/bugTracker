const Bug = require('./Bug');

class BugController {
	// list
	index(req, res) {
		let bugs = Bug.all();
		res.render('bugIndex', { bugs: bugs });
	}

	// create
	create(req, res) {
		res.render('bugCreate', { bug: new Bug() })
	}

	// read

	// update

	// delete

}

module.exports = BugController;
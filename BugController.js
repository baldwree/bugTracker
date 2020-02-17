const Bug = require('./Bug');

class BugController {
	// list
	index(req, res) {
		let bugs = Bug.all();
		res.render('bugIndex', { bugs: bugs });
	}

	newBug(req, res) {
		res.render('bugNew', { toy: new Bug() });
	}

	// create
	create(req, res) {
		res.render('bugCreate', { bug: new Bug() })
		let newBug = Bug.create(req.body.bug);

        if (newBug.isValid()) {

            console.log("New bug is valid: ");
            console.log(newBug);

            // Send a redirect to the "show" route for the new toy.
            res.writeHead(302, { 'Location': `/bugs/${newBug.id}` });
            res.end();
        } else {
            res.render('bugNew', { bug: newBug });
        }
	}

	// read

	// update

	// delete

}

module.exports = BugController;

let Bug = require('./Bug');

console.log("Here 1");

class MemoryBugDB {

	static allBugs() {
		return this.bugsList;
	}

	static find(id) {
		return this.bugsList.find((item) => item.id == id);
	}

	static create(bugDescription) {
		let newBug = new Bug(bugDescription);
		if (newBug.isValid()) {
			newBug.id = this.bugsList.length + 1;
			this.bugsList.push(newBug);
		}
		return newBug;
	}

	static update(bug) {

	}

}

MemoryBugDB.bugsList = [];
MemoryBugDB.create({ title: 'Newbug', description: 'A bug', type: 'issue', priority: 'high', status: 'open'});
MemoryBugDB.create({ title: 'Website testing suite not working', description: 'This testing suite isnt doing what its supposed to!', type: 'feature', priority: 'medium', status: 'closed' });
MemoryBugDB.create({ title: 'Notabug', description: 'This is working as intended', type: 'issue', priority: 'low', status: 'monitor' });

//console.log(MemoryBugDB.bugsList);

module.exports = MemoryBugDB;
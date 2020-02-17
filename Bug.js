class Bug {

	constructor(info) {

		if (info) {
			this.title = info.title;
			this.description = info.description;
			this.type = info.type;
			this.priority = info.priority;
			this.status = info.status;
		}
		this.errors = [];
	}

	// error checking for creating bugs
	isValid() {
		this.errors = [];
		if (!this.title || this.title.length <= 2){
			this.errors.push("The title must be at least 3 characters");
		}
		if (!this.description || this.description.length <= 0) {
			this.errors.push("The bug must have a description");
		}
		if (!this.type || this.type.lengh <= 0) {
			this.errors.push("The bug must have an issue type");
		}
		if (!this.priority || this.priority <= 0) {
			this.errors.push("The bug must have a priority");
		}
		if (!this.status || this.status <= 0) {
			this.errors.push("The bug must have a status");
		}
		// return true if there are no errors
		return this.errors.length <= 0;
	}

	static all() {
		return this.bugCollection;
	}

	static get(id) {
		return this.bugCollection.find((item) => item.id == id);
	}

	static create(bugInfo) {
		let newBug = new Bug(bugInfo);
		if (newBug.isValid()) {
			newBug.id = ++Bug.idNo;
			this.bugCollection.push(newBug);
		}
		return newBug;
	}
}

Bug.idNo = 0;
Bug.bugCollection = [];

Bug.create({ title: 'crasheroo', description: 'Divide by zero error.', type: 'issue', priority: 'medium', status: 'closed' });
Bug.create({ title: 'Validation not working', description: 'The title validation check is not firing!', type: 'issue', priority: 'high', status: 'open' });
Bug.create({ title: 'Styling Needed', description: 'This site needs to be jazzed up!', type: 'feature', priority: 'high', status: 'open' });

console.log(Bug.bugCollection);

module.exports = Bug;
class Bug {

	/* title;
	description;
	type;
	priority;
	status; */

	constructor(info) {

		if (info) {
			this.id = ++Bug.idNo;
			this.title = info.title;
			this.description = info.description;
			this.type = info.type;
			this.priority = info.priority;
			this.status = info.status;
		}
	}


	isValid() {
		this.errors = [];
		if (!this.title || this.title.length <= 2) {
				this.errors.push('The title must contain at least three characters');
		}
		if (!this.description || this.description.length <= 0) {
				this.errors.push('The toy must have a description.');
		}
		if (this.type != 'issue' && this.type != 'enhancement' && this.type != 'feature') {
				this.errors.push('The bug must have a type of issue, enhancement, or feature.');
		}
		if (this.priority != 'low' && this.priority != 'medium' && this.priority != 'high') {
				this.errors.push('The bug must have a priority of low, medium, or high.');
		}
		if (this.status != 'open' && this.status != 'closed' && this.status != 'monitor') {
				this.errors.push('The bug must have a priority of open, closed, or monitor.');
		}

		return this.errors.length <= 0;
	}

	static all() {
		return this.bugCollection;
	}

	static get(id) {
		return this.bugCollection.find((item) => item.id === id);
	}

	static create(bugInfo) {
		let newBug = new Bug(bugInfo);
		this.bugCollection.push(newBug);
		return newBug;
	}
}

Bug.idNo = 0;

Bug.bugCollection = [new Bug({ title: 'crasheroo', description: 'Divide by zero error.', type: 'issue', priority: 'medium', status: 'closed' }),
	new Bug({ title: 'Validation not working', description: 'The title validation check is not firing!', type: 'issue', priority: 'high', status: 'open' }),
	new Bug({ title: 'Styling Needed', description: 'This site needs to be jazzed up!', type: 'feature', priority: 'high', status: 'open' })
];

console.log(Bug.bugCollection);

module.exports = Bug;

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
const BugController = require('../BugController');

const Bug = require('../Bug');
jest.mock('../Bug');

const BugDB = require('../MemoryBugDB');
jest.mock('../MemoryBugDB');

let c;
let res;
let req;

//let allBugs = [new Bug({ title: 'My Bug', description: 'just a bug', type: 'feature', priority: 'high', status: 'closed' })];
let allBugs = Bug.all();

beforeEach(() => {

	Bug.mockClear();
	BugDB.mockClear();
	BugDB.all = jest.fn(() => allBugs);

	c = new BugController()
	req = {};
	res = {
		render: jest.fn(),
		send: jest.fn()
	}
});

describe("#index", () => {
	it("renders the index view", async() => {
		await c.index(req, res);
		expect(res.render).toHaveBeenCalledTimes(1);
		expect(res.render).toHaveBeenCalledWith('bugIndex', { bugs: allBugs });
	});
});

describe("#showBug", () => {

	let ken;
	beforeEach(() => {
		ken = [new Bug({ title: 'My Bug', description: 'just a bug', type: 'feature', priority: 'high', status: 'closed' })];
	});

	it("renders show view if given id is valid", async() => {
		BugDB.find = jest.fn((id) => id == 22 ? ken : null);
		req.params = { id: 22 };
		await c.showBug(req, res);
		expect(res.send).toHaveBeenCalledTimes(0);
		expect(res.render).toHaveBeenCalledTimes(1);
		expect(res.render).toHaveBeenCalledWith('bugShow', { bug: ken });
	});
});

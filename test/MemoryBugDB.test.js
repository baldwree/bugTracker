const MemoryBugDB = require('../MemoryBugDB');

describe("MemoryBugDB", () => {
	describe(".create", () => {
		it('saves the bug if valid', () => {
			let bugsBefore = MemoryBugDB.allBugs().length;
			let newBug = MemoryBugDB.create({ title: 'test', description: 'a bug', type: 'issue', priority: 'low', status: 'open' });
			expect(MemoryBugDB.allBugs().length).toBe(bugsBefore + 1);
			expect(newBug.id).toBeTruthy();
			expect(MemoryBugDB.find(newBug.id)).toEqual(newBug);
		});

		it('does save bug if not valid', () => {
			let bugsBefore = MemoryBugDB.allBugs().length;
			let newBug = MemoryBugDB.create({ title: 'bg', description: 'unique', type: 'issue', priority: 'low', status: 'open' });
			expect(MemoryBugDB.allBugs().length).toBe(bugsBefore);
			expect(newBug.id).toBeFalsy();
			expect(MemoryBugDB.allBugs().find((item) => item.description === 'unique')).toBeFalsy();
		});
	}); // end create
});
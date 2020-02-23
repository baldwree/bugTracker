const Bug = require('../Bug');

describe("Bug", () => {
	describe(".constructor", () => {
		it('should generate an empty error list', () => {
			let bug = new Bug({ title: 'testbug', description: 'a test bug', type: 'issue', priority: 'high', status: 'open' });
			expect(bug.errors.length).toBe(0);
		});
	});
}); // end Bug
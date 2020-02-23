const Bug = require('../Bug');

describe("Bug", () => {

	describe(".constructor", () => {
		it('should generate an empty error list', () => {
			let bug = new Bug({ title: 'testbug', description: 'a test bug', type: 'issue', priority: 'high', status: 'open' });
			expect(bug.errors.length).toBe(0);
		});
	});

	describe("#isValid", () => {

		// testing isValid
		it('recognizes a valid bug', () => {
			let bug = Bug.create({ title: 'testbug', description: 'a test bug', type: 'issue', priority: 'high', status: 'open' });
			expect(bug.isValid()).toBe(true);
		});

		// testing title
		it('recognizes missing title as invalid', () => {
			let bug = Bug.create({ description: 'a test bug', type: 'issue', priority: 'high', status: 'open' });
			expect(bug.isValid()).toBe(false);
		});

		it('recognizes title of fewer than three characters as invalid', () => {
			let bug = Bug.create({ title: 'bg', description: 'a bug', type: 'issue', priority: 'high', status: 'open' });
			expect(bug.isValid()).toBe(false);
		});

		it('sets error message properly when title is missing', () => {
			let bug = Bug.create({ description: 'a bug', type: 'issue', priority: 'high', status: 'open' });
			expect(bug.errors.length).toBe(1);
            expect(bug.errors[0]).toMatch('The title must be at least 3 characters');
		});

		// testing description
		it('recognizes missing description as invalid', () => {
			let bug = Bug.create({ title: 'testbug', type: 'issue', priority: 'high', status: 'open' });
			expect(bug.isValid()).toBe(false);
		});

		it('recognizes empty description as invalid', () => {
			let bug = Bug.create({ title: 'bug', description: '', type: 'issue', priority: 'high', status: 'open' });
			expect(bug.isValid()).toBe(false);
		});

		it('sets error message properly when description is missing', () => {
			let bug = Bug.create({ title: 'bug', type: 'issue', priority: 'high', status: 'open' });
			expect(bug.errors.length).toBe(1);
            expect(bug.errors[0]).toMatch('The bug must have a description');
		});

		// testing type
		it('recognizes missing type as invalid', () => {
			let bug = Bug.create({ title: 'testbug', description: 'a test bug', priority: 'high', status: 'open' });
			expect(bug.isValid()).toBe(false);
		});

		it('recognizes empty type as invalid', () => {
			let bug = Bug.create({ title: 'bg', description: 'a bug', type: '', priority: 'high', status: 'open' });
			expect(bug.isValid()).toBe(false);
		});

		it('sets error message properly when type is missing', () => {
			let bug = Bug.create({ title: 'testbug', description: 'a bug', priority: 'high', status: 'open' });
			expect(bug.errors.length).toBe(1);
            expect(bug.errors[0]).toMatch('The bug must have an issue type');
		});

		// testing priority
		it('recognizes missing priority as invalid', () => {
			let bug = Bug.create({title: 'testbug', description: 'a test bug', type: 'issue', status: 'open' });
			expect(bug.isValid()).toBe(false);
		});

		it('recognizes title of fewer than three characters as invalid', () => {
			let bug = Bug.create({ title: 'bug', description: 'a bug', type: 'issue', priority: '', status: 'open' });
			expect(bug.isValid()).toBe(false);
		});

		it('sets error message properly when type is missing', () => {
			let bug = Bug.create({ title: 'testbug', description: 'a bug', type: 'issue', status: 'open' });
			expect(bug.errors.length).toBe(1);
            expect(bug.errors[0]).toMatch('The bug must have a priority');
		});

		// testing status
		it('recognizes missing status as invalid', () => {
			let bug = Bug.create({title: 'testbug', description: 'a test bug', type: 'issue', priority: 'high' });
			expect(bug.isValid()).toBe(false);
		});

		it('recognizes empty status as invalid', () => {
			let bug = Bug.create({ title: 'bug', description: 'a bug', type: 'issue', priority: 'high', status: '' });
			expect(bug.isValid()).toBe(false);
		});

		it('sets error message properly when status is missing', () => {
			let bug = Bug.create({ title: 'testbug', description: 'a bug', type: 'issue', priority: 'high' });
			expect(bug.errors.length).toBe(1);
            expect(bug.errors[0]).toMatch('The bug must have a status');
		});

		// multiple errors
		it('stores multiple errors', () => {
			let bug = Bug.create({ title: 'testbug', description: '', type: 'issue', status: 'closed' });
			expect(bug.errors.length).toBe(2);
		});

	});
}); // end Bug
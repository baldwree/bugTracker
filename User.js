const Bug = require('./Bug');

class User {

	constructor(info) {

		if (info) {
			this.fname = info.fname;
			this.lname = info.lname;
			this.email = info.email;
			this.thumbnail = info.thumbnail;
		}
		this.errors = [];
	}

	// error checking for creating users
	isValid() {
		this.errors = [];
		if (!this.fname || this.fname.length <= 1){
			this.errors.push("The first name cannot be blank");
		}
	    if (!this.lname || this.lname.length <= 1){
	      this.errors.push("The last name cannot be blank");
	    }
	    if (!this.email || this.email.length <= 1){
	      this.errors.push("The email cannot be blank");
	    }
			if (!this.validateEmail(this.email)){
	      this.errors.push("You have entered an invalid email address!");
	    }
		if (!this.thumbnail || !(this.thumbnail.endsWith(".png") || this.thumbnail.endsWith('.gif') || this.thumbnail.endsWith('.jpg'))) {
			this.errors.push("Thumbnail must end in .png, .gif, or .jpg");
		}
		// return true if there are no errors
		return this.errors.length <= 0;
	}

	validateEmail(mail) {
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
			return (true)
		}
		return (false)
	}

	static all() {
		return this.userCollection;
	}

	static get(id) {
		return this.userCollection.find((item) => item.id == id);
	}

	static create(userInfo) {
		let newUser = new User(userInfo);

		if (newUser.isValid()) {

			newUser.id = ++User.idNo;
			this.userCollection.push(newUser);
		}
		return newUser;
	}

	static delete(user) {
		this.userCollection.splice(this.userCollection.indexOf(user), 1);
	}
}

User.idNo = 0;
User.userCollection = [];

User.create({ fname: 'Kelly', lname: 'Hancox', email: 'kelso@gvsu.edu', thumbnail: 'public/tinafey.gif'});
User.create({ fname: 'Reece', lname: 'Baldwin', email: 'reece@gvsu.edu', thumbnail: 'public/tracymorgan.gif'});
User.create({ fname: 'David', lname: 'Bowie', email: 'davidbowie@gvsu.edu', thumbnail: 'public/davidbowie.jpg'});

console.log(User.userCollection);

module.exports = User;

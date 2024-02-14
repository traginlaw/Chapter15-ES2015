function createInstructor(firstName, lastName) {
	return {
		firstName,
		lastName,
	};
}

// let firstName = "Mary";
// let instructor = {
//     [firstName]: "That's me!"
// }

// instructor.Mary; // "That's me!"

const favoriteNumber = 45;
var instructor = {
	firstName: 'Colt',
};

instructor[favoriteNumber] = 'That is my favorite';

var instructor = {
	firstName: 'Colt',
	sayHi() {
		return 'Hi!!';
	},
	sayBye() {
		return this.firstName + 'says bye!';
	},
};

const createAnimal = (species, noise, sound) => {
	return {
		species,
		[noise]() {
			return sound;
		},
	};
};

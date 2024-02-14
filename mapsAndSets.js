new Set([1, 1, 2, 2, 3, 4]);
//returns new Set([
//     1,
//     2,
//     3,
//     4
// ])

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// [...new Set('referee')].join('');
//returns 'ref'

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let m = new Map();
// m.set([1, 2, 3], true);
// m.set([1, 2, 3], false);

// console.log(m);

//returns
// {
// 0:{
//     "key": [
//         1,
//         2,
//         3
//     ],
//     "value": true
// },

// 1:{
//     'key' : [
//     1,
//     2,
//     3
//     ],
//     "value" : false
// }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

hasDuplicate([1, 3, 2, 1]); // true
hasDuplicate([1, 5, -1, 4]); // false

vowelCount('awesome'); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt'); // Map { 'o' => 1 }

function isVowel(char) {
	return 'aeiou'.includes(char);
}

function vowelCount(str) {
	const vowels = new Map();
	for (let char of str) {
		let lowerCase = char.toLowerCase();
		if (isVowel(lowerCase)) {
			if (vowels.has(lowerCase)) {
				vowels.set(lowerCase, vowels.get(lowerCase) + 1);
			} else {
				vowels.set(lowerCase, 1);
			}
		}
	}
	return vowels;
}

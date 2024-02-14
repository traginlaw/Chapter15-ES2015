//var
//can be reassigned, redeclared and even mutated
var musician = 'Elton John';
musician = 'Alanis Morissette';
musician = 57;
var musician = true;
//
var song = 'Goodbye Yellow Brick road';
//var is global scope
//type window in console, its a menu that tells you all about the windows properties Includes var variables. Let and const do not do this

function sing() {
	// if we set the var in the function, it will return undefined. vars in a function are only accessible in the function
}

//some built in methods/objects can be overwritten, overrided or removed completely if we use var with a conflicting name like (var = console)
// const = const
//let
//can be reassigned but not redeclared.
// let x = 10 //declared
// let x = 20 // attempted redeclaration that doesnt work because reasons
// x = 30

//codeBlocks are chunks of code inside the curly braces {}(excluding object literals {x:10, y:20}) and the block goes from the opening curly brace to the ending one. Usually the ending one is the one on the furthest left side of the ide, with the opening brace being the one that corresponds with the ending bracket.

// if(true){
//     //codeblock starts
//     let color = 'teal'
//     console.log(color);
//     if(true){
//         console.log(color);
//     }
// }//all of this is one code block
// //if I place a clg here for color it will return undefined
// console.log(color);

// function dance() {
//     let danceType = 'tango'
//     console.log(danceType);
// }

// let mood = 'fantastic'
// function getMood(num){
//     let mood = 'meh'
//     if(num < 3){
//         let mood = 'bad :('
//         console.log(mood);
//     }
//     return mood
// }
// console.log(mood); // this will return as 'fantastic' because its pointing to the variable outside the codeblock
// getMood(2)
// // this will return 'meh' because the return statement is outside of the block with if Statement. The return statement is technically inside the yellow brackets

// //const is the same syntax as let and var, but it cannot be redeclared or reassigned. Will result in a type error

// //for non primitive data type (or reference type like objects and arrays) you can mutate and update the contents of the reference type for example
// let chickens;
// const myCats =[]
// myCats.push('monty')
// myCats[1] = 'rocket'
// //myCats = ['monty', 'rocket']
// var name;

// //cannot do this
// myCats = ['bobo']
// //this variable has already been declared as a const (typeError)

// //same with objects

// const pi = 3.14
// const pi = 4.56
// //syntax error

// //const is also block scoped

// const PI = 3.14
// if(true){
//     const PI = 4.56
//     console.log(PI); //this will log the 4.56
// }
// console.log(PI);//this will log the 3.14

// //Hoisting (weird topic)
// console.log(chickens);//what happens, has not been declared or initialized, returns undefined. however if you
// console.log(cats); //it will return with a reference error because the variable does not exist at all

// // var chickens = ['butters', 'nancy', 'junior', 'tilda', 'Stevie Chicks']
// // console.log(chickens);//what happens\

// chickens = ['butters', 'nancy', 'junior', 'tilda', 'Stevie Chicks']
// console.log(chickens);//this is just defining a let/var variable that was noted earlier in the document (line 58) doesnt really make sense.
// //key difference between let and var,

// console.log(chickens);
// let chickens = ['butters', 'nancy', 'junior', 'tilda', 'Stevie Chicks']
// console.log(chickens);// assuming this is the only variable with that name the clg statement in line 94 will return with an uncaught Reference error "cannot access chickens before initialization" variables using the let/const method are not hoisted, meaning they will result in a reference error,

// let bird;
// //you can initialize let and declare a value later but you cannot do
// const birds;
// // Syntax error Missing initializer in const declaration

// //never use var unless you are working in an old codebase
// //always start with const first, if it wont worker for what you need, such as a counter for example
// const count = 0
// //you cannot change it from 0 so you cant
// count+=1
// //uncaught type error Assignment to constant (const) variable

// //you can write an entire project with just const. There are companies out there that prohibit the use of let and var

// // ARROW FUNCTIONS
// Array.map(function(x){
//     return x * 2
// })
// // const add = function(x,y) {
// //     return x + y
// // } standard function

// const add = (x,y) => {
//     return x + y
// }
// //arrow function
// //do not have to use the function keyword, can be used as a callback

// [2, 3, 6, 78, 99, 104, 23].reduce(max, currNum){
//   return Math.max(max, currNum)
// };

// // [2, 3, 6, 78, 99, 104, 23].reduce((max, currNum)=> {
// //   return Math.max(max, currNum)
// // })

// //ARROW FUNCTION GOTCHAS
// // const doMath = (num) => {
// //         square: num * num,
// //         double: num * 2
// //     }
// // } This arrow function will not run it is expecting a semi colon after the word double. As an object it is valid, however the arrow function thinks that the curly braces signify the code block of an actual function instead of an object.

// //Arrow functions and this

// // Arrow functions do not have their own "this" context. If your function uses the keyword this, be wary.
// //Dont use arrow functions in object methods, or if your function contains this

// const cat = {
//     name: 'bubs',
//     eat: function() {
//         console.log(this);
//         return `${this.name} says chow down!!!`
//     },
//     //cat.eat() this will refer to the entire object
//     name: 'bubs',
//     meow: () => {
//         console.log(this);
//         return `${this.name} says Meow!!!`
//     }
//     //cat.meow() will refer to the window object, the globabl scope of JavaScript

// }
// arrow functions can only be used as shorthand for anonymous function expressions, Return statement is implied if you leave out curly braces, and they do not make their own this.

//if you are referring to an object dont use an arrow function

//Babel is a javascript compiler. Takes more modern javascript and will transpile it and turn it into code that will work in all browsers (looking at you Internet Explorer)

function double(arr) {
	return arr.map(function (val) {
		return val * 2;
	});
}

const doubles = (arr) => arr.map((val) => val * 2);

function squareAndFindEvens(numbers) {
	var squares = numbers.map(function (num) {
		return num ** 2;
	});
	var evens = squares.filter(function (square) {
		return square % 2 === 0;
	});
	return evens;
}

// const squaresAndEvens = (numbers) =>
// 	numbers.map(val => val ** 2).filter(square => square % 2 === 0);

// const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0)

const squaresEven = (numbers) => numbers.map(val => val ** 2).filter(square => square % 2 === 0) 

//Rest/Spread

//How it used to be done
function max() {
	console.log(arguments);
}
//will show all the arguments, items in the parentheses, passed in 

function sum(){
	arguments.reduce((sum, val) => {
		return sum + val
	})
};
//arguments object is not an actual array, it is an array-like-object, it has a length property and can be accessed at a specific index, but does not have built in array methods lik map and filter. 

//can turn the arguments into an array by making a copy of an array and setting the target of the copy to be the arguments alo

function doubleArgs(){
	let arrayFromArguments = [].slice.call(arguments)
	return arrayFromArguments.map(function(arg){
		return arg * 2
	})
}
//This was the old method

//This is a newer array method
// Array.from(arguments)

function sums() {
	const args = Array.from (arguments);
	return args.reduce((sum, val) => {
		return sum + val
	})
}
//arguments do not exist in arrow functions
// for example
const maxs = () => {
	console.log(arguments);
}
//this returns arguments undefined

const maxe = function() {
	const args = Array.from(arguments)
	args.reduce((max, curVal) => {
		return curVal >max ? curVal : max
	})
}


//Rest and Spread 
// spread and rest operator is ... (just 3 dots,) 
//Depending on the context it will act differently

// function doSomething(... asd) This is the rest operator

function sumY (...nums) {
	console.log(nums);
}
//sum(1,2,3)
// this will clg the nums as an array

const sumAll = (...values) => {
	return values.reduce((sum, n) => sum + n)
}

function makeFamily()

makeFamily(parent1, parent2, ...kids) {
	console.log(parent1, parent2);
	console.log(kids);
}
makeFamily('Judy', 'Pamala', 'Bonnie', 'junior')
//first clg
//judy = parent1, Pamala = parent2
//second clg
//[bonnie, junior]
// if there are no kids return an empty array

//you could also return it as an object

makeFamily(parent1, parent2, ...kids){
	return {
		parents : [parent1, parent2],
		children : kids.length ? kids : 0
	}
}

const filterByType = (type, ...vals) => {
	return vals.filter(v => typeof v === type)
}


filterByType('number', 1,2,3,a,r,4,6,6, true)
filterByType('string', 1,2,3,a,r,4,6,6, true)
filterByType('boolean', 1,2,3,a,r,4,6,6, true)

//if you try to use rest in the middle instead of the end parentheses

function printStuff(a,...rest,b){
	//this will not work as the ... needs to be the last argument rest parameter must be last formal parameter
}

max(...something)

[...something]
{...something}

// spread an interval in seperate parts

const nums = [4,5,88,123,.92, 34]
Math.max(nums)
//will return NaN because it looks at the array as a whole

Math.max(...nums)
//this will spread the array out into separate values, anf the answer is 123

const filterByType = (type, ...vals) => {
	return vals.filter(v => typeof v === type)
}

filterByType('number', 1,2,3,'a','r',4,6,6, true)
filterByType('string', 1,2,3,'a','r',4,6,6, true)
filterByType('boolean', 1,2,3,'a','r',4,6,6, true)

const things = [1,2,3,a,r,4,6,6, true]

filterByType('string', things) //NaN
filterByType('string', ...things) // a,r

//iterables 
//arrays can be iterable, they can also be spread

console.log(things);

//if you clg things it will print out the whole array, if you spread things the values are printed

console.log(...'Hello'); // this will result in H E L L O

//spread in array literals

const pallete = ['lavender', 'blue', 'white']

//some methods to make a copy of this array

const paletteCopy = pallete
//if you change the original pallete it will change the copy

const paletteCopy2 = palette.slice() //this can create a copy 

const paletteCopy3 = [...palette]
//this will create a clone of the original

const paletteCopy4 = ['sky blue',...palette,'grass Green'] //array will be in this exact order as well

palette.concat('deep Purple')
//this will add to the palette array

const greenTeas = ['snow jasmine', 'fragrant leaf']
const oolongTeas = ['honey Orchid', 'winter Sprout']
const herbalTeas = ['african solstice', 'marshmallow root']
const coffees = ['guatamala red cat', 'snow Leapord blend']

const allTeas = [...greenTeas, ...oolongTeas, ...herbalTeas]
//this does not change or mutate the original arrays

const withCaffeine = [...greenTeas, ...oolongTeas, ...coffees, 'Earl Grey']

const vowels = 'aeiou'
const vowelArray = [...vowels, 'and sometime y']

//spread with objects

const tea = {
	type: 'oolong',
	name: 'winter Sprout',
	origin: 'taiwan'
}

const arr = [...tea]
//objects are not iterables
//tea is not iterable
doThing(...tea)
//tea is not iterable

const tea2 = {...tea}
//will make a copy of an object. 
//unique references 
//different properties

const teaTin = {...tea, price: 29.99}

const newTea = {...tea, name: 'golden Frost'}
//this will change the name

const newTea2 = {name: 'golden', ...tea}
//inside this will change the name but once tea is spread it will be overwritten

const teaData = {
	steepTime:'30s',
	brewTemp: 175,
	origin: 'Japan'
}

const fullTea = {...tea, ...teaData} //{...tea,...teaData, origin: china}
//this will return the origin of the tea as Japan as that array is spread second, causing taiwan to be overwritten, if we add in the origin of china after both spread operators it will overwrite Japan

//what happens if you try to spread an array into an object

const colors = ['red', 'orange', 'blue']
const dummy = {...colors}
//this will return an object with the key as the index and the value as the color
const dummyObj = {...colors, ...'cat'}
//this will return the object with c a t as the values because it overwrites the values of colors based on order

//cloning and making copies of nested data sctructures using nested data sets

//spread does not create a deep copy so it will not copy of these objects in an array

const shoppingCart = [
	{
		name: 'honey orchid',
		quantity: 2,
		price: 13.50
	},
	{
		name: 'african solstice',
		quantity: 4,
		price: 12.00
	}
	
]

const cartCopy = [...shoppingCart]

//will create an array with two objects

//object enhancment

// function makePerson (first, last, age){
// 	return {
// 		first : first,
// 		last : last,
// 		age : age,
// 		isAlive : true
// 	}
// }

function makePerson (first, last, age) {
	return {
		first,
		last,
		age,
		isAlive : true
	}
}

const mathStuff = {
	x : 200,
	add :function(a,b) {
		return a + b
	},
	square : function(a) {
		return a * a
	} 
}

//

const mathStuff = {
	x : 200,
	add(a,b) {
		return a + b
	},
	square(a) => { //it doesnt like this and will throw an error
		return a * a
	}
	multiply : (a,b) => { //you can use this if necessary
		return a * b
	}
}
//you can have a function inside an object, with the function body inside curly braces. You dont need to use the function keyword
//dont use arrow functions because arrow functions are unnamed and do not have a property

//'periwinkle' '9c88ff'
// 'bright ube' 'D6A2E8'

const color = {
	'periwinkle' : '9c88ff',
	'9c88ff' : 'periwinkle'
}

function makeColor(name, hex){
	return {
		name : hex,
		hex : name
	}
}
//will return those exact strings as the key/value

function makeColor(name, hex){
	const color = {}
		color[name] = hex
		color[hex] = name
		return color
	}// This is the old way

function makeColor2 (name, hex) {
	return {
		[name] : hex,
		[hex] : name
	}
}
	
// const mystery = {
// 	[6 + 7] : 'thirteen'
// }
//different ways to do it shorthand version is above
const obj = {} 

	obj[6 + 7] = 'thirteen'

function _defineProperty(obj, key, value){
	if (key in obj) {
	Object.defineProperty(obj, key,{ 
		value : value,
		enumerable : true,
		configurable : true,
		writable : true
	})
}
 	else {
	obj[key] = value
}
	return obj
}	

var mystery = _defineProperty({}, 6 + 7, 13) 
//we are making an empty object so none of the above code runs
//obj {
//	13 : 'thirteen'
//}

//mystery {
//	13 : 'thirteen'
//}

function _defineProperties (obj, key, value) {
	obj[key] = value
	return obj
}

//Array and object restructuring 

const teaOrder = {
	variety : 'oolong',
	teaName : 'winter Sprout',
	origin : 'taiwan',
	price : 12.99,
	hasCaffeine : true,
	quantity : 3,
	brewTemp :190
}

// const price = teaOrder.price
// const quantity = teaOrder.quantity
// const teaName = teaOrder.teaName

const {price, quantity, teaName} = teaOrder
//this will destructure the obj teaOrder { these are essen} this will create the separate variables like the ones above, its just quicker and less typing this way

const {origin} = teaOrder
const {country} = teaOrder.country
const {country} = teaOrder.country
//country returns unDefined because there is no key named Country.

const {price, quantity, teaName, ...rest} = teaOrder
// ...rest will be an object that includes everything that we didnt specifically call
//variety, origin,hasCaffeine 

const newTea = {...teaOrder} //creates a new spreaded object,

function hi(...nums) {

}

const {brewTemp: temp = 175} = teaOrder
//175 is a default value only if it does not find brewTemp, when brewtemp is undefined use the default value of 175. This will aslo rename brewTemp to temp

const {teaName} = teaOrder
const {teaName : tea} = teaOrder
//we can rename and set default all at once 

function checkout (tea) {
	const {quantity = 1, price} = tea //quantity is a default value
	return quantity * price
}

checkout(teaOrder)

const order1 = {
	variety : 'green',
	teaName : 'silver needle',
	origin : 'taiwan',
	price : 12.99,
	hasCaffeine: true
}

//destructuring arrays

const students = [
	{name: 'Amie', gpa: 4.0},
	{name: 'Kristina', gpa : 3.6},
	{name: 'Aaron', gpa : 5.0},
	{name: 'Jessica', gpa: 3.9}
]
const [topStudent, secondBest,,fourth] = students
//based on order in array
// commas will skip as many elements as their are commas

const [first, ...losers] = students
//we dont have to rename it like we do with an object. We can make up the variable name 

//destructuring functions

const order2 = {
	variety : 'green',
	teaName: 'silver needle',
	origin : 'Taiwan',
	price : 12.99,
	hasCaffeine : true,
	quantity : 4
}

function getTotal({quantity, price}){
	// const {quantity, price} = tea;
	return quantity * price
}

const longJumpResults = ['Tammy', 'Jessica', 'violet']
const swimMeetResults = ['Japan', 'France', 'Chile']

function awardMedals([gold, silver, bronze]){
	return{
		gold, 
		silver,
		bronze
	}
}

//Destructuring nested objects
//shortness is not always the best approach
const movie = {
	Title : 'Amadeus',
	Year : '1984',
	Rated : {
		rating :'R',
		advisory : 'Rated R for brief nudity'
	},

	Released : '19 Sept 1984',
	Runtime : '160 min',
	Genres : ['Biography', 'Drama', 'History', 'Music'],
	Director : 'Milos Forman',
	Writer : 'Peter Shaffer (original stage play), Peter Shaffer (original screen play)',
	Actors : 'F. Murray Abraham, Tom Hulce, Elizabeth Berridge, Roy Dotrice',
	Plot : "Antonio Saliere believes that Wolfgang Amadeus Mozart's music is divine and miraculous. He wishes he was himself as good a musician as Mozart so that he can praise the Lord through composing. He began his career as a devout man who believes his success and talent as a composer are God's rewards for his plenty. He's also content as the respected, financially well-off court composer of Austrian Emperor Joseph II. But he's shocked to learn that mozart is such a vulgar creature and cant understand why God favored Mozart is such a vulgar creature and cant understand why God fabored Mozart to be his instrument Salieries envy has made him an enemy of God whose greatness was evident in Mozart. He is ready to take revenge against God and Mozart for his own musical mediocrtity.",

	Language : 'English, Italian, Latin, German',
	Versions : [
		{version : 'Original Realease', runtime : 160},
		{version : "Director's Cut", runtime : 180}
	],
	Country : 'USA, France, Czechoslovakia, Italy',
	Awards : 'won 8 Oscars. Another 33 wins & 14 nominations',
	Poster : 'https://m.media-amazon.com/images/M/MV5BNMJlNzUzNGMtYTAwMS00ZjI2LWFmNWQtODcxNWUxODA5YmU1XkEyXkFqcGdeQXVyNTIzOTk50DM@._V1_SX300.jpg',
	Ratings : [
		{source : 'Internet Movie DataBase', Value : '8.3/10'},
		{source : 'RottenTomatoes', Value: '93%'},
		{Source : 'MetaCritic', Value :'88/100'}
	],
	imbdVotes : '346,056',
	imdbID : 'tt0086879',
	Type : 'movie',
	DVD : '16 Dec 1997',
	BoxOffice : 'N/A',
	Production : 'Warner Bros. Picture',
	WebSite : 'N/A',
	Response : 'true'


}
 
const {Rated : {rating, advisory}} = movie
//This will return 'R', and 'Rated R for brief nudity'

//there is no rated variable created

//const {Rated : {rating, advisory: note}} = movie
//this will change the name of advisory to note

const {Ratings : [{Value: imdbRating}, {Value: rtRating}, {Value: metaRating}
	],
	Versions : [
		{runtime : orginalRunTime },
		{runtime : directorsCutRunTime}
	]
} = movie

//swap variables with destructuring

let delicious = 'mayonnaise'
let disgusting = 'whipped cream'

let temp = delicious
delicious = disgusting 
disgusting = temp

let both = [delicious, disgusting]
[disgusting, delicious ] = both//old way

let [a,b] = ['mayonnaise', 'whipped cream']

[disgusting, delicious] = [delicious, disgusting]//destructuirng method.

//Maps and sets

const myMap = new Map()
myMap.set(7, 'seven')
myMap.set('7', 'seven String')
//in an object the 7 would refer to the same key
//set method will set key/value pairs and get will retrieve that info

const empty = []
myMap.set(empty, 'emptyArray')
myMap.set(true, "truee")

const funcCalls = new Map()
const add = (x,y) => x + y
const mult = (x,y) => x * y

funcCalls.set(add, 1)
funcCalls.set(mult, 9)

//you can use functions as keys

const bandData = [[3, "3 doors down"],
['three', 'three Dog Night']
['nine', 'nine inch nails'],
['four', "the four seasons"]
[41, 'Sum 41']]

const bandMap = new Map(bandData)

bandMap.set(182, 'Blink 182').set('twenty', 'MatchBox 20')

bandMap.has(41)
bandMap.has(9)

bandMap.delete('twenty')
//will delete a pair based on a key
bandMap.has('twenty')

//to empty the map,

bandMap.clear()

bandMap.keys()
//will return a collection of keys
[...bandMap.keys()]
//will reurn an array

bandMap.values()
//will return an array of the values

//order of maps are in insertion order where as objects are can be in different orders based on browser

bandMap.size()

bandMap.forEach((val, key) =>{
	console.log(key + '=>' + val);
})
//call back will have value then the key

for(let [key, value] of bandMap){
	console.log(key, '=', value);
}
//Sets

//all values in a set are unique
//any type of Value can exist in a set
//can only have one of each specific value
//created using the new keyword 
//ES2015 brings sets to javascript

const bannedHashtags = new Set(['nofilter', 'justsaying', 'winning', 'yolo'])
//you can only put one iterable in a set so for example if you 
const newSet = new Set('hello','goodbye')
//returns {'h','e','l', 'o'}


bannedHashtags.add('bestLife').add('selfie')
bannedHashtags.clear()

function filterHashTags(tags){
	const bannedHashtags = new Set(['nofilter', 'justsaying', 'winning', 'yolo'])
	return tags.filter((tag)=> bannedHashtags.has(tag))
}
	//return tags.filter((tag)=> !bannedHashTags.includes(tag))
const susansTags = ['happymonday', 'yolo', 'winning', 'sunset']
//main reason to use set is that they are more efficient. fast at adding and checking values, you dont risk having duplicates in a set, 

const ages = [45, 42, 21, 40, 98, 25, 33, 34, 45,45, 2,2,5]

new Set(ages)
//this will condense the array and remove any and all duplicates

bannedHashtags.forEach(tag) => console.log('STOP USING:', tag);




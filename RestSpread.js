const filterOutOdds = (...arguments) => arguments.filter((v) => v % 2 === 0);

const findMin = (...arguments) => Math.min(...arguments);

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

const doubleAndReturnArgs = (nums, ...args) => [
	...nums,
	...args.map((v) => v * 2),
];

const removeRandom = (items) => {
	const index = Math.floor(Math.random() * items.length);
	return [...items.slice(0, index), ...items.slice(index + 1)];
};

const extend = (arr1, arr2) => [...arr1, ...arr2];

const addKeyVal = (obj, key, val) => {
	const newObj = { ...obj };
	newObj[key] = val;
	return newObj;
};

const removeKey = (obj, key) => {
	const newObj = { ...obj };
	delete newObj[key];
	return newObj;
};

const combine = (obj1, obj2) => {
	const newObj = { ...obj1, ...obj2 };
	return newObj;
};

const update = (obj, key, value) => {
	const newObj = { ...obj };
	newObj[key] = value;
	return newObj;
};

// The point of this assignment is not to use the functional elements that are part of your chosen language (JavScript/Python).
// But, rather, implement the functionality from scratch using pure functions and higher level functions.
// Do the implimentation in order as given.
// We have linked to info at MDN, this is just to give a sence of how the reduce,forEach,map and filter functions should work.
//
// 🛠️ Prerequisite:
// You must create an array persons that will contain the data from https://raw.githubusercontent.com/MM-203/misc/main/data/data.json
// This must be done before the first task
//
// ----------------------------------------------------------------------------------------------------------------------------------
// Bonus challenge 🎉 (a bit hard), the functions forEach, filter and map can all be created using the function reduce.
// If you feel up for a challenge, try doing so. NB! The bonus challenge is optional.
// ----------------------------------------------------------------------------------------------------------------------------------

// 1
// Implement your own reduce function and count the number of people above the age of 50
// You can read about a reduce function https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
function customReduce(array, reducer, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < array.length; i++) {
    accumulator = reducer(accumulator, array[i]);
  }

  return accumulator;
}

const people = [
  { name: "Alice", age: 55 },
  { name: "Bob", age: 45 },
  { name: "Charlie", age: 60 },
  { name: "David", age: 35 },
];

const countAbove50 = customReduce(
  people,
  (count, person) => {
    if (person.age > 50) {
      return count + 1;
    }
    return count;
  },
  0
);

console.log("Number of people above the age of 50:", countAbove50);

// 2
// Implement your own forEach function and use it to greet all the people in the persons array (say Hi, persons name).
// Read about forEach https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
function customForEach(array, action) {
  for (let i = 0; i < array.length; i++) {
    action(array[i], i, array);
  }
}

const persons = ["Alice", "Bob", "Charlie", "David"];

customForEach(persons, (person, index) => {
  console.log(`Hi, ${person} (index ${index})`);
});

// 3
// Implement your own map function and make everyone a year older.
// You can read about what the map function should do https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

function customMap(array, transform) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(transform(array[i], i, array));
  }

  return result;
}

// Example usage:
const persons2 = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 40 },
  { name: "David", age: 35 },
];

const personsOneYearOlder = customMap(persons, (person) => ({
  name: person.name,
  age: person.age + 1,
}));

console.log(personsOneYearOlder);

// 4
// Implement your own filter function, and use it to find evryone under the drinking age.
// Read about filter https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
function customFilter(array, condition) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (condition(array[i], i, array)) {
      result.push(array[i]);
    }
  }

  return result;
}

// Example usage:
const people2 = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 18 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 17 },
];

const drinkingAge = 21;

const peopleUnderDrinkingAge = customFilter(
  people2,
  (person) => person.age < drinkingAge
);

console.log(peopleUnderDrinkingAge);

// 5
// Now create a function sum, that takes a list of numbers and returns the sum
// Try to use your previously created functions to make this function
// Sum the total age of persons using this new function
// NB! Do not manualy create the age listing
function sum(numbers) {
  return customReduce(
    numbers,
    (accumulator, current) => accumulator + current,
    0
  );
}

const persons3 = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 40 },
  { name: "David", age: 35 },
];

const ages = customMap(persons3, (person) => person.age);

const totalAge = sum(ages);

console.log("Total age of persons:", totalAge);

// 6
// Now create a function average, that returns the average of a list of numbers
// Try to use your previously created functions to make this function
// calculate the average age of the persons using this function
// NB! Do not manualy create the age listing
function average(numbers) {
  if (numbers.length === 0) {
    return 0; // To avoid division by zero, return 0 if the array is empty.
  }

  const sumOfNumbers = customReduce(
    numbers,
    (accumulator, current) => accumulator + current,
    0
  );
  return sumOfNumbers / numbers.length;
}

// Example usage:
const persons4 = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 40 },
  { name: "David", age: 35 },
];

const ages1 = customMap(persons4, (person) => person.age);

// Calculate the average age using the 'average' function
const averageAge = average(ages);

console.log("Average age of persons:", averageAge);

// 7
// Finaly create a max and a min function that respectivly returns the maximum value and the minimum value
// Only use previously created functions to acchive this.
// Then find the min and max age of ther persons.
function max(numbers) {
  return customReduce(
    numbers,
    (maxValue, current) => (current > maxValue ? current : maxValue),
    -Infinity
  );
}

function min(numbers) {
  return customReduce(
    numbers,
    (minValue, current) => (current < minValue ? current : minValue),
    Infinity
  );
}

// Example usage:
const persons5 = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 40 },
  { name: "David", age: 35 },
];

const ages3 = customMap(persons5, (person) => person.age);

const minAge = min(ages3);
const maxAge = max(ages3);

console.log("Minimum age of persons:", minAge);
console.log("Maximum age of persons:", maxAge);

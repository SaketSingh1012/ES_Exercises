// Example 1: Destructuring an array
let numbers = [1, 2, 3, 4, 5];
let [a, b, ...rest] = numbers;

console.log(a);
console.log(b);
console.log(rest);

// Example 2: Destructuring an object in function body
function printPersonDetails({ name, age }) {
  console.log(`${name} is ${age} years old.`);
}

let person = { name: "John", age: 30 };
printPersonDetails(person);

// Example 3: Destructuring function argument
function printBookDetails({ title, author }) {
  console.log(`"${title}" by ${author}`);
}

let book = { title: "The Hobbit", author: "J.R.R. Tolkien" };
printBookDetails(book);

// Example 4: Enhanced Object Literals
let propKey = "color";
let propValue = "blue";

let car = {
  brand: "Toyota",
  [propKey]: propValue,
  start() {
    console.log(`${this.brand} is starting.`);
  },
};

console.log(car.color);
car.start();

// Example 5: Sum function with rest parameter syntax
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// Example 6: Using spread syntax to pass array elements as function arguments
let numbersToSum = [1, 2, 3, 4, 5];
console.log(sum(...numbersToSum));

// Example 7: Using for..of loop to iterate through array values
let fruits = ["apple", "orange", "banana"];
for (let fruit of fruits) {
  console.log(fruit);
}

// Example 8: Using Object.keys to iterate through object keys
let student = { name: "Alice", age: 20, grade: "A" };
for (let key of Object.keys(student)) {
  console.log(key);
}

// Example 9: Using Object.values to iterate through object values
for (let value of Object.values(student)) {
  console.log(value);
}

// Example 10: Using Object.entries to iterate through object key/value pairs
for (let [key, value] of Object.entries(student)) {
  console.log(`${key}: ${value}`);
}

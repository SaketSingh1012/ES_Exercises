// Use the let keyword in an example function:

function exampleFunctionWithLet() {
  let variableInsideFunction = "I am a let variable!";
  console.log(variableInsideFunction);
}

exampleFunctionWithLet();

// Use the const keyword in an example function:

function exampleFunctionWithConst() {
  const constantInsideFunction = "I am a const variable!";
  console.log(constantInsideFunction);
}

exampleFunctionWithConst();

// Create an arrow function that finds the square of a number:

const square = (number) => number * number;
console.log(square(5));

// Create an arrow function that adds two numbers:

const addNumbers = (num1, num2) => num1 + num2;
console.log(addNumbers(3, 7));

// Create a multi-line string and then split the string into the corresponding lines and print the lines:

const multiLineString = `My name is
Saket
Singh`;

const lines = multiLineString.split("\n");
lines.forEach((line) => console.log(line));

// Create a function that calculates the area of a circle. If the radius of the circle is not provided, assume that the default radius is 5. Use the JavaScript default parameter feature to implement the function:

function calculateCircleArea(radius = 5) {
  const area = Math.PI * radius * radius;
  return area;
}

console.log(calculateCircleArea());
console.log(calculateCircleArea(8));

let person = {
    name: 'Harry Potter',
    location: 'London'
};

let resultString = `${person.name} is located in ${person.location}.`;

console.log(resultString);

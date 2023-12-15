/*
Filename: ComplexCode.js
Content: A complex code showcasing advanced JavaScript concepts and functionality.
*/

// Importing the fs module for file system operations
const fs = require('fs');

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Promise-based function to read a file
function readFileAsync(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// Async function to process a file
async function processFile() {
  try {
    const filePath = 'data.txt';
    const fileData = await readFileAsync(filePath);
    console.log(`File contents: ${fileData}`);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

// Custom error class
class CustomError extends Error {
  constructor(message, errorCode) {
    super(message);
    this.errorCode = errorCode;
    this.name = 'CustomError';
  }
}

// Example usage of the custom error class
try {
  throw new CustomError('Something went wrong!', 500);
} catch (err) {
  console.error(`${err.name}: ${err.message} (Code ${err.errorCode})`);
}

// Generating a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Mapping the numbers array to double each value
const doubledNumbers = numbers.map((num) => num * 2);

// Printing the doubled numbers
console.log('Doubled numbers:', doubledNumbers);

// Function to find the factorial of a number recursively
function calculateFactorial(num) {
  if (num === 0) {
    return 1;
  }

  return num * calculateFactorial(num - 1);
}

// Calculating the factorial of 5
console.log('Factorial of 5:', calculateFactorial(5));

// Example usage of destructuring assignment
const [a, b, ...rest] = numbers;
console.log('Destructuring assignment:', a, b, rest);

// Exponentiation operator
const powerResult = 2 ** 10;
console.log('Exponentiation:', powerResult);

// Example usage of arrow functions and lexical this
const person = new Person('John Doe', 30);
person.greet();

// Fibonacci sequence using generators
function* fibonacciSequence() {
  let a = 0;
  let b = 1;
  yield a;
  yield b;

  while (true) {
    const next = a + b;
    yield next;
    a = b;
    b = next;
  }
}

console.log('Fibonacci sequence:');
const fibonacciGen = fibonacciSequence();
for (let i = 0; i < 10; i++) {
  console.log(fibonacciGen.next().value);
}

// ...

// Continue adding more complex and creative code here...

// End of complex code.
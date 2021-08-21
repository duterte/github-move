// There are 3 ways to declare variables
// var = stands for variable
// let = stands for let
// const = stands for constant

// // let example
// let name = 'German';
// console.log(name);
// name = 'Delmar';
// console.log(name);

// // const example
// const lastName = 'Ochea';
// console.log(lastName);
// // lastName = 'Duterte';
// console.log(lastName);

// Primitive Data Types

// string type is a primitive data type

let str1 = 'abc';
let str2 = '123';
let str = `hello world`;

// number type is a primitive data type

let num1 = 123;
let num2 = -26;
let num3 = 56.5;

// boolean type is a primitve data type
let bool1 = true;
let bool2 = false;

// object type is dirived from primitive data type

let person = {
  name: 'German',
  lastName: 'Ochea',
  age: 27,
  hairColor: 'black',
  behavior: function () {},
  isUnderAge: false,
};

// console.log(person.age);

// array type is a list of primitive type which is ordered;

let arr1 = ['b', 'a', 'c', 'd', 123, true];

// console.log(arr1[0]);

// Operators

// = assignment operator

// comparison operator

// > greater than
// < less than
// == lossy equal
// === strict equal
//  >= greather than or equal
//  <= less than or equal
// != not equal
// !== strict not equal

//  arithmetic
// typeof

// logical operator

// && = two ampersand is AND logical operator
// returns true if all of the comparison is true
// returns false if one of the comparison is false
const andLogicalOperator = 5 >= 3 && 2 < 6 && 10 === 1;
// console.log(andLogicalOperator);

// || = two pipes is OR logical operator

// returns true if one of the comparison is true

const myVar = 2 < 1 || 2 == 2;
// console.log('OR operator:', myVar);

// ! = exclamation point is "not" operator
// console.log('NOT operator:', !myVar);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  FUNCTION
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// It allows us to reuse block of codes

// its either will return a value or not
// function that doesn't return a value is called void function

// function can store a reusable piece of code
// function can return any data types or just a void function
// function that doesn't return any data types are called void function

// There are two types of function
// A function that will return any data types like string, number or boolean
// And a function that doesn't return anything

// This is an example of void function
// void function doesn't use a "return" keyword

function myFunction(param) {
  capitalize('Testing');
}

console.log(myFunction());

// This function has a return keyword and so it is not a type of void function

function capitalize(str) {
  // convert all string characters into uppercase
  return str.toUpperCase();
}

console.log(capitalize('hello world'));
console.log(capitalize('The quick brown fox jump over the lazy dog'));

function addTwoNumbersAndMulitplyBy2(num1, num2) {
  return num1 + num2 * 2;
}

const myNumber = addTwoNumbersAndMulitplyBy2(5, 6);
console.log(myNumber);

const myNum2 = addTwoNumbersAndMulitplyBy2(10, 10);
console.log(myNum2);

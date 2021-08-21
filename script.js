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
console.log('OR operator:', myVar);

// ! = exclamation point is "not" operator
console.log('NOT operator:', !myVar);

// define a function

// It allows us to reuse block of codes

// its either will return a value or not
// function that doesn't return a value is called void function
function addTwoNumbersAndMultiplyItsResult() {
  console.log('asdsa');
}

addTwoNumbersAndMultiplyItsResult();
// invoke the function

// console.log(addTwoNumbersAndMultiplyItsResult());

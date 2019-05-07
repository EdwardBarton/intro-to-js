repeatStringNumTimes = (string, times) => {
  let repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}
repeatStringNumTimes("abc", 3);

repeatStringNumTimes = (string, times) => {
  if (times > 0)
    return string.repeat(times);
  else
    return "";
}
repeatStringNumTimes("abc", 3);

fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
  }
}
fizzBuzz(15);

factorialize = (num) => {
  let result = num;
  if (num === 0 || num === 1)
    return 1;
  while (num > 1) {
    num--;
    result *= num;
  }
  return result;
}
factorialize(5);


factorialize = (num) => {
  if (num === 0 || num === 1)
    return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
factorialize(5);







/* ################### DATA TYPES ################### */
console.log('DATA TYPES')

// Numbers
console.log('NUMBERS');
console.log(1); // Ints
console.log(5 + 7); // Math
console.log(typeof (9));
console.log(2.2); // Floats
console.log(2.2 + 2.2);
console.log(typeof (4.4));
console.log(10 % 3); // Modulo (remainder)
console.log(typeof (Number("5")));
console.log(typeof (parseInt("6")));
console.log('--------------------------------');

// Strings
console.log('STRINGS');
console.log("Hello World");
console.log('Hello World' + ' again'); // Concatenation
console.log(typeof ("5"));
console.log(typeof (String("999")));
var num = 888;
console.log(typeof (num.toString()));
console.log('--------------------------------');

// Booleans
console.log('BOOLEANS');
console.log(true);
console.log(false);
console.log('hi' || '');
console.log(1 || 0);
console.log("Falsey = false, 0, '', null, undefined, NaN")
console.log('--------------------------------');

// Null
console.log('NULL');
console.log('Intentional absense of a value. i.e. Nothing');
var thisIsNull = null;
console.log(thisIsNull === null);
console.log('--------------------------------');

// Undefined
console.log('UNDEFINED');
console.log('Not assigned a value');
var myName;
console.log(myName === undefined);
console.log('--------------------------------');




/* ################### VARIABLES ################### */
console.log('VARIABLES');

// ES5
var firstName = "Edward";
console.log('firstName:', firstName);
firstName = 'Ed';
console.log('firstName is now:', firstName);

// ES6
let faveFood = "Pizza";
console.log('faveFood:', faveFood);
faveFood = 'Sushi';
console.log('faveFood is now:', faveFood);

let faveNumber = 22;
faveNumber += 4;
faveNumber++;
console.log(faveNumber);

let phrase = 'hello';
phrase += ' world';
console.log(phrase);

const lastName = "Barton";
console.log('lastName:', lastName);
//lastName = 'Stevens';
//console.log('lastName:', lastName);

console.log('--------------------------------');




/* ################### CONDITIONALS ################### */
console.log('CONDITIONALS');

// if
if (true) {
  console.log('this is true');
}

// if/else if
if (false) {
  console.log("I'm ignored");
} else if (true) {
  console.log('this is also true');
}

// if/else
if (false) {
  console.log("Ignore me");
} else if (false) {
  console.log("Ignore me too");
} else {
  console.log("Nothing was true, boohoo");
}

// equality / strict equality
let userAge = prompt('What is your age?');
if (userAge == 21) {
  console.log('welcome!');
} else {
  console.log('get outta here!');
}

// <, >, <=, >=
if (userAge < 21) {
  console.log("You can't drink!");
} else {
  console.log('First round on me');
}

// and, or, not
let hairColor = prompt('What color is your hair?');
if (userAge >= 21 && hairColor != 'yellow') {
  console.log('You drink free!');
} else {
  console.log('Sorry, no free drinks for you!');
}

// ternary
let trueOrFalse = 8 > 7 ? true : false;
console.log(trueOrFalse);

console.log('--------------------------------');




/* ################### LOOPS ################### */
console.log('LOOPS');

// while
let i = 1;
while (i < 11) {
  console.log(i);
  i++;
}

// do while
let userInput;
do {
  userInput = prompt("Type 'yes'");
} while (userInput !== 'yes');

// for
for (let i = 11; i < 21; i++) {
  console.log(i);
}

let myFirstName = 'Edward';
for (let i = 0; i < myFirstName.length; i++) {
  console.log(myFirstName[i]);
}

console.log('--------------------------------');




/* ################### FUNCTIONS ################### */
console.log('FUNCTIONS');

// ES5
function addNums(x, y) {
  return x + y;
}

let num1 = parseInt(prompt('Enter a number'));
let num2 = parseInt(prompt('Enter another number'));

console.log("Your numbers added =", addNums(num1, num2));

// ES6
subtractNums = (x, y) => x - y;

let num3 = parseInt(prompt('Enter a number'));
let num4 = parseInt(prompt('Enter another number'));

console.log("Your numbers subtracted =", subtractNums(num3, num4));

console.log('--------------------------------');




/* ################### ARRAYS ################### */
console.log('ARRAYS');

let myList = ['milk', 'eggs'];
for (let item of myList) {
  console.log(item);
}

myList[0] = 'skim milk';
for (let item of myList) {
  console.log(item);
}

// push (add) / pop (remove) end
myList.push('bread');
for (let item of myList) {
  console.log(item);
}

// shift (remove) / unshift (add) front
myList.unshift('butter');
for (let item of myList) {
  console.log(item);
}

console.log('--------------------------------');




/* ################### OBJECTS ################### */
console.log('OBJECTS');

let person = {
  firstName: 'Edward',
  lastName: 'Barton',
  age: 29,
  isAwesome: true,
  faveFoods: ['Pizza', 'Sushi']
};

for (let key in person) {
  console.log(key + ':', person[key]);
}

person.isAwesome = false;
person['age'] = 30;
person.faveFoods.push('Burgers');

for (let key in person) {
  console.log(key + ':', person[key]);
}

console.log(Object.keys(person));
console.log(Object.values(person));

console.log('--------------------------------');




/*
console.log('CODING CHALLENGES');

console.log('Challenge1: write a function that repeats a string "n" times')
console.log('Ex: repeat("hello", 3) returns "hellohellohello"')

console.log('Challenge2: implement fizzBuzz, a function that prints a list of numbers and returns "Fizz" if the number is divisible by 3, "Buzz" if divisible by 5, "FizzBuzz" if divisible by both 3 and 5, and the number if not divisible by 3 and/or 5');
console.log('Ex: fizzBuzz(15) returns "1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz"');

console.log('Challenge3: write a function that factorializes a number');
console.log('Ex: 5! = 5 * 4 * 3 * 2 * 1 = 120. NOTE: 0! && 1! == 1');
*/
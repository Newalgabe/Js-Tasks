// Task 1
let age = parseInt(prompt("Enter your age:"));

if (age >= 0 && age <= 2) {
  console.log("You are a baby");
} else if (age >= 12 && age < 18) {
  console.log("You are a teenager");
} else if (age >= 18 && age < 60) {
  console.log("You are an adult");
} else if (age >= 60) {
  console.log("You are a senior citizen");
} else {
  console.log("Invalid age");
}

// Task 2
let number = parseInt(prompt("Enter a number from 0 to 9:"));

switch (number) {
  case 0:
    console.log(")");
    break;
  case 1:
    console.log("!");
    break;
  case 2:
    console.log("@");
    break;
  case 3:
    console.log("#");
    break;
  default:
    console.log("Invalid number");
}

// Task 3
let num = parseInt(prompt("Enter a three-digit number:"));
let hasSameDigits =
  num % 10 === Math.floor(num / 10) % 10 || num % 10 === Math.floor(num / 100);

let message = hasSameDigits ? "Contains same digits" : "Does not contain same digits";
console.log(message);

// Task 4
let years = parseInt(prompt("Enter a year:"));
let isLeapYear =
  (years % 400 === 0) || (years % 4 === 0 && years % 100 !== 0);

let leapYearMessage = isLeapYear ? "Leap year" : "Not a leap year";
console.log(leapYearMessage);

// Task 5
let numPalindrome = prompt("Enter a five-digit number:");
let isPalindrome = numPalindrome.split("").reverse().join("") === numPalindrome;

let palindromeMessage = isPalindrome ? "Number is a palindrome" : "Number is not a palindrome";
console.log(palindromeMessage);

// Task 6
let usdAmount = parseFloat(prompt("Enter amount in USD:"));
let currency = prompt("Choose currency to convert to: EUR, UAN, or AZN");

let convertedAmount;
switch (currency.toUpperCase()) {
  case "EUR":
    convertedAmount = usdAmount * 0.85;
    break;
  case "UAN":
    convertedAmount = usdAmount * 27.8;
    break;
  case "AZN":
    convertedAmount = usdAmount * 1.7;
    break;
  default:
    console.log("Invalid currency choice");
}
console.log(`Converted amount: ${convertedAmount.toFixed(2)} ${currency}`);

// Task 7
let purchaseAmount = parseFloat(prompt("Enter purchase amount:"));
let discount;

if (purchaseAmount >= 200 && purchaseAmount < 300) {
  discount = 0.03;
} else if (purchaseAmount >= 300 && purchaseAmount < 500) {
  discount = 0.05;
} else if (purchaseAmount >= 500) {
  discount = 0.07;
} else {
  discount = 0; 
}

let totalAmount = purchaseAmount - purchaseAmount * discount;
console.log(`Total amount after discount: $${totalAmount.toFixed(2)}`);

// Task 8
let circumference = parseFloat(prompt("Enter circumference length:"));
let perimeter = parseFloat(prompt("Enter square perimeter:"));

let canFit = circumference / 4 <= perimeter;
console.log(`Can the circle fit in the square? ${canFit ? "Yes" : "No"}`);

// Task 9
let score = 0;

let q1 = prompt("Question 1: What is 2 + 2?\nA) 3\nB) 4\nC) 5");
if (q1.toUpperCase() === "B") {
  score += 2;
}
let q2 = prompt("Question 2: What is the capital of France?\nA) London\nB) Paris\nC) Rome");
if (q2.toUpperCase() === "B") {
  score += 2;
}
let q3 = prompt("Question 3: What is the largest planet in our solar system?\nA) Earth\nB) Jupiter\nC) Mars");
if (q3.toUpperCase() === "B") {
  score += 2;
}

console.log(`Your score: ${score}`);

// Task 10
let day = parseInt(prompt("Enter day:"));
let month = parseInt(prompt("Enter month (1-12):"));
let year = parseInt(prompt("Enter year:"));

let nextDay = day + 1;
let nextMonth = month;
let nextYear = year;

if (month === 2) {
  let isLeapYear = (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
  if (isLeapYear && day === 28) {
    nextDay = 29;
  } else if (day === 29) {
    nextDay = 1;
    nextMonth = 3;
  } else if (day === 28) {
    nextDay = 1;
    nextMonth = 3;
  }
} else if ((month === 4 || month === 6 || month === 9 || month === 11) && day === 30) {
  nextDay = 1;
  nextMonth++;
} else if (day === 31) {
  nextDay = 1;
  nextMonth++;
  if (nextMonth > 12) {
    nextMonth = 1;
    nextYear++;
  }
}

console.log(`Next date: ${nextDay}-${nextMonth}-${nextYear}`);

// area = 3.14*r*r

let r = 7
let area = 3.14 * r * r
console.log("the area of circle is", area)

// Question-2
// Given the variables a = 10, b = 20,
//  and c = 5, write a JavaScript code 
// to find the value of (a * b) / c + (b - a).
//  Use console.log to display the result.

console.log("\n===question-2===\n")

let a = 10, b = 20, c = 5
let result = (a * b) / c + (b - a)

console.log(result)


// Question-3
// Given the variables x = 5 and y = 10,
//  use assignment operators to increment
//  x by 2 and multiply y by x. Display the
// new values of x and y using console.log.
console.log("\n===question-3===\n")
let x = 5, y = 10
console.log(x += 2)
console.log(y *= x)

// Question-4
// Add 15 to num
// Subtract 5 from num
// Multiply num by 3
// Divide num by 2
// Initialize num to 10, and log the result after each operation.
console.log("\n===question-4===\n")

let num = 10
console.log(num += 15)
console.log(num -= 5)
console.log(num *= 3)
console.log(num /= 2)


// Given the variables score1 = 85 and score2 = 90,
//  write a JavaScript code using comparison operators 
// to check if both scores are greater than 80 and display
//  the result using console.log.
console.log("\n===question-5===\n")

let score1 = 85
let score2 = 90
let result5 = score1 > 80 || score2 > 80
console.log(result5)
// Write a JavaScript code snippet to compare two strings,
//  "apple" and "banana", using comparison operators to check
//  if the first string is less than the second string. Display
//  the result using console.log.
console.log("\n===question-6===\n")
let str = "Apple"
let str2 = "Banana"
let result3 = str < str2
console.log(result)

// Given age = 25 and hasDrivingLicense = true, 
// use logical operators to write a condition that 
// checks if the person is eligible to drive. Print
//  the result using console.log.
console.log("\n===question-7===\n")
let age = 25
let hasDrivingLicense = true
let result4 = 18 < age
console.log(result4)

// Write a JavaScript code snippet that checks if
//  a number is between 10 and 50 (inclusive) or is 
// a multiple of 5 using logical operators. Display 
// the result using console.log.
console.log("\n===question-8===\n")
let rendom_number = 45
let gusse = 10 <= rendom_number && 50 >= rendom_number
let result6 = rendom_number * 5
console.log(gusse)
console.log(result6)
console.log("\n=====question-9=====\n")
// Write a JavaScript code snippet that converts a string
//  "123.45" to a number and adds 10 to it. Display the
//  result using console.log.

let str1 = "123.45"
let result7 = console.log(Number(str1) + 10)
console.log("\n=====question-10=====\n")
// Write a JavaScript code snippet to convert a 
// boolean value true to a string and concatenate
//  it with " is the value". Use console.log to
//  display the result.
let boolean = true
let result8 = String(boolean) + " is he value"
console.log(result8)

console.log("\n=====question-17=====\n")
// Write a JavaScript code snippet that uses arithmetic,
//  comparison, and logical operators to determine if a
// number is both even and greater than 10. Display the
// result using console.log.Write a JavaScript code snippet
//  that uses arithmetic, comparison, and logical operators
//  to determine if a number is both even and greater than 10.
//  Display the result using console.log.

let sev = 15
let result9 = (sev % 2 == 0) && (sev > 10)
console.log("number is both even and greater than 10.", result9)

// Given num1 = 8 and num2 = 3, use a combination of arithmetic,
// assignment, and comparison operators to find if num1 is a
// multiple of num2 after incrementing num1 by 1. Log the result.

let num1 = 8
let num2 = 3
// console.log(num1, "+", num1, "=", num1 + num2)
num1++
if (num1 % num2 == 0) {
    console.log("num1 is a ", num1, " multiple of num2 ", num2)
}
else {
    console.log("num1 is ", num1, " not a multiple of num2 ", num2)
}
// Write a JavaScript code snippet that checks if a given
//  variable age is either less than 18 or greater than 60
//  using logical operators, and displays the message "Not eligible"
//  using console.log. If neither condition is met, display "Eligible".
let age1 = 18
if(age1 >= 18 && age1<= 60){
    console.log("Eligible")
}
else{
    console.log("not eligible")
}
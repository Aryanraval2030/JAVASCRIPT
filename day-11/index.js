// Q1:
// Given the array:
// let numbers = [5, 1, 10, 3];
// Sort the numbers in ascending order using sort().
console.log("\nquestion-1\n")

let numbers = [5, 1, 10, 3];
let result = numbers.sort((a, b) => a - b)
console.log(result)

// Q2:
// Given:
// let names = ["mohit", "arun", "rahul", "deepak"];
// Sort the names alphabetically.
console.log("\nquestion-2\n")

let names = ["mohit", "aryan", "rahul", "deepak", "yuvraj", "jainam"];
let name_result = names.sort()
console.log(name_result)

// Q3:
// Given:
// let scores = [40, 100, 1, 5, 25, 10];
// Sort the values in descending order.
console.log("\nquestion-3\n")
let scores = [40, 100, 1, 5, 25, 10];

let scores_result = scores.sort((a, b) => b - a)
console.log(scores_result)


// Q4:
// Given:
// let fruits = ["apple", "banana", "mango", "orange", "kiwi"];
// Use slice() to extract the first 3 fruits.
console.log("\nquestion-4\n")


let fruits = ["apple", "banana", "mango", "orange", "kiwi"];
let fruits_result = fruits.slice(0, 3)
console.log(fruits)
console.log(fruits_result)

// Q5:
// From the same array, extract the last 2 elements using slice().
console.log("\nquestion-5\n")
let fruits_1 = ["apple", "banana", "mango", "orange", "kiwi"];
let fruits_1_result = fruits_1.slice(-2)
console.log(fruits_1)
console.log(fruits_1_result)

// Q6:
// Given:
// let nums = [10, 20, 30, 40, 50, 60];
// Use slice() to get elements from index 1 to 4 (not including 4)
console.log("\nquestion-6\n")

let nums = [10, 20, 30, 40, 50, 60];
let nums_result = nums.slice(0, 4)
console.log(nums)
console.log(nums_result)

// Q7:
// Given:
// let items = ["a", "b", "d"];
// Insert "c" at index 2 using splice().
console.log("\nquestion-7\n")
let items = ["a", "b", "d"];
items.splice(2, 0, "c")
console.log(items)

// Q8:
// Given:
// let arr = [10, 20, 30, 40, 50];
// Remove 2 elements starting from index 1 using splice().
console.log("\nquestion-8\n")

let arr = [10, 20, 30, 40, 50];
arr.splice(1, 2)
console.log(arr)

// Q9:
// Given:
// let colors = ["red", "blue", "green"];
// Replace "blue" with "yellow" using splice().
console.log("\nquestion-9\n")
let colors = ["red", "blue", "green"];
colors.splice(1, 1, "yellow")
console.log(colors)

console.log("\nquestion-10\n")

// Q10:
// Given:
// let msg = "   hello world   ";
// Remove the extra spaces using trim().

let msg = "   hello world   ";
let msg_result = msg.trim()
console.log(msg_result)

console.log("\nquestion-11\n")

// Q11:
// Given:
// let username = "    aryan    ";
// Clean the user input using trim().

let username = "    aryan    ";
let username_result = username.trim()
console.log(username_result)
console.log("\nquestion-12\n")
// Q12:
// Given:
// let words = ["I", "love", "coding"];
// Join the array into a single string using spaces.

let words = ["I", "love", "coding"];
let words_result = words.join(" ")
console.log(words_result)

console.log("\nquestion-13\n")

// Q13:
// Given:
// let cities = ["Delhi", "Mumbai", "Pune"];
// Join the elements using " - " as a separator.

let cities = ["Delhi", "Mumbai", "Pune"];

let cities_result = cities.join(" - ")
console.log(cities_result)

console.log("\nquestion-14\n")
// Q14:
// Given:
// let nums = [1,2,3,4,5];
// Join all numbers without any separator.
let nums_1 = [1, 2, 3, 4, 5];

let nums_1_result = nums_1.join("")
console.log(nums_1_result)


console.log("\n==================================================\n")
// Q1
// Given:
// let text = "apple,banana,mango";
// Split the string into an array using comma.
console.log("\nquestion-1\n")

let text = "apple,banana,mango";
let text_result = text.split(",")
console.log(text_result)

console.log("\nquestion-2\n")
// Q2
// Given:
// let sentence = "I love JavaScript";
// Split the sentence into words.

 let sentence = "I love JavaScript";
 let sentence_result = sentence.split("")
 console.log(sentence_result)
 console.log("\nquestion-3\n")
 

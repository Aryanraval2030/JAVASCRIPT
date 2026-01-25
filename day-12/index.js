// Given an array of numbers, create a new array where each number is doubled.
console.log("\nanswer-1\n")

let arr1 = [2, 3, 4, 5, 7]
let result1 = arr1.map((Element) => Element * 2)
console.log(result1)

// Convert an array of strings to their lengths.
console.log("\nanswer-2\n")

let arr2 = ["apple", "watermalen", "banana", "gvava"]

let result2 = arr2.map((Element2) => Element2.length)
console.log(result2)

// Add "Mr." in front of each name in an array of names.

console.log("\nanswer-3\n")
let arr3 = ["aman ", "priya ", "rahul"]
let result3 = arr3.map((ele3) => "Mr./Ms." + ele3)
console.log(result3)

console.log("\nfilter==========\n")
console.log("answer-1\n")

let arr4 = [12, 33, 45, 54, 65, 87, 75]

let result4 = arr4.filter((ele4) => ele4 % 2 == 0)
console.log(result4)
console.log("answer-2\n")

let arr5 = [12, 55, 65, 88, 55]
let result5 = arr5.filter((ele5) => ele5 > 18)
console.log(result5)

console.log("answer-3\n")
let arr6 = ["apple", "banana", "wotermalen"]
let result6 = arr6.filter((ele3) => ele3.length > 5)
console.log(result6)
console.log("\nsome==========\n")

console.log("answer-1\n")
let some1 = [5, 0, -1, -2, 1]

let r1 = some1.some((a1) => a1 < 0)
console.log("yeah nagative number is here ?", r1)

console.log("answer-2\n")

let arr7 = ["apple", "banana", "wotermalen"]
let result7 = arr7.some((ele5) => ele5[0] == "a" || "A")
console.log(result7)
console.log("answer-3\n")

console.log("\nevery==========\n")
let a2 = [12, 23, 43, 34, 33]
let r2 = a2.every((e2) => e2 > 0)
console.log(r2)

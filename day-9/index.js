// Write a for loop to iterate over an array of 
// numbers [1, 2, 3, 4, 5] and print each number to
// the console.
console.log("\nanswer-1")
let arr = [1, 2, 3, 4, 5]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
console.log("\nanswer-2")

// Write a while loop to print all the elements 
// of the array [10, 20, 30, 40, 50] to the console.
let arr2 = [10, 20, 30, 40, 50]
let i = 0
while (i < arr2.length) {
    console.log(arr2[i])
    i++
}

console.log("\nanswer-3")

// Given a string let str = "Hello, World!";,
// use a for loop to find and print the length of the string.

let str = "hello, world!"
let count = 0

for (let i = 0; i <= str.length; i++) {
    count++
}
console.log(`${str} length of = ${count}`)

console.log("\nanswer-4")
// Use a for loop to print each character of the string "JavaScript" one by one.

let str1 = "JavaScript"
for (let i = 0; i < str1.length; i++) {
    console.log(str1[i])
}

console.log("\nanswer-5")

// Write a for loop to calculate and print the sum 
// of the elements in the array [1, 2, 3, 4, 5].

let arr3 = [1, 2, 3, 4, 5]
let count1 = 0
for (let i = 0; i < arr3.length; i++) {
    count1 += arr3[i]
}
console.log(count1)

console.log("\nanswer-6")

// Given an array [3, 1, 4, 1, 5, 9],
// use a for loop to find and print the maximum value.

let arr4 = [1, 44, 55, 32, 23, 12]
let maximum = -Infinity//0
for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] > maximum) {
        maximum = arr4[i]//55
    }
}
console.log(`maximum number is ${maximum}`)

console.log("\nanswer-7")

// Write a for loop to reverse the array [1, 2, 3, 4, 5]
// and print the reversed array.
let arr5 = [1, 2, 3, 4, 5]
let reversed = []
for (let i = arr5.length - 1; i >= 0; i--) {
    // console.log(arr5[i])
    reversed.push(arr5[i])
}
console.log(reversed)

console.log("\nanswer-8")

// Given a string let greeting = "hello";,
//  use a for loop to convert each character to uppercase and print the result.

let greeting = "hello";
for (let i = 0; i < greeting.length; i++) {
    let uper = greeting[i].toUpperCase()
    console.log(uper)
}
console.log("\nanswer-9")

// Write a while loop to count the number of elements 
// in the array [2, 4, 6, 8, 10] and print the count.
let arr6 = [2, 4, 6, 8, 10]
let i1 = 1
let count2 = 1

while (i1 <= arr6.length) {
    count2++
    i1++
}
console.log(count2)

console.log("\nanswer-10")
// Given an array [1, 2, 3, 4, 5, 6], use a for loop 
// to print only the even numbers.

let arr7 = [1, 2, 3, 4, 5, 6]

for (let i = 0; i < arr7.length; i++) {
    if (arr7[i] % 2 != 1) {
        console.log(`${arr7[i]} even number`)
    }
}
console.log("\nanswer-11")

// Write a while loop to find and print the length of the array [5, 10, 15].

let array = [5, 10, 15]
let i2 = 0, count3 = 0
while (i2 < array.length) {
    count3++
    i2++
}
console.log(`array length of = ${count3}`)

console.log("\nanswer-12")
// Given an array of strings ["apple", "banana", "cherry"],
// use a for loop to calculate and print the total length of all strings combined.
let arr8 = ["apple", "banana", "cherry"]

let totallength = 0
for (let i = 0; i < arr8.length; i++) {
    totallength += arr8[i].length
}
console.log(totallength)

console.log("\nanswer-13")
// Given an array of strings ["This", "is", "JavaScript"], 
// use a for loop to concatenate them into one string and print it.

let arr9 = ["This ", "is ", "JavaScript"]

let concatenate = ""
for (let i = 0; i < arr9.length; i++) {
    concatenate += arr9[i]
}
console.log(concatenate)

console.log("\nanswer-14")

// Write a for loop to find and print the index of the character
// 'a' in the string "JavaScript".

let character = "JavaScript"
let index = 0
for (let i = 0; i < character.length; i++) {
    if (character[i] == 'a') {
        console.log(character[i], i)
    }
}

console.log("\nanswer-15")

// Write a for loop to count the number of vowels in the
// string "Hello, World!" and print the count.

let string = "Hello, World!"
let cou4 = 0
for (let i = 0; i < string.length; i++) {
    if (string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u") {
        cou4++
    }
}
console.log(`${string} the number of vowels is = ${cou4}`)


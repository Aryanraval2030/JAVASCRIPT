// 1. Write a function capitalizeNames that takes an
//  array of names and returns a new array with each
//  name capitalized. Example:
console.log("\nanswer-1")
function capitalizeNames(array) {
    return array
}

let names = ['john', 'jane', 'doe'];
console.log(capitalizeNames(names));

console.log("\nanswer-2")
// 2. Write a function countWords that takes a sentence as
// input and returns the total number of words in the sentence.
// Example:

function countWords(input) {
    let count = " "
    let total = 0
    for (let i = 0; i < input.length; i++) {

        if (input[i] === count) {
            total++
        }
    }
    return console.log(total + 1)
}

console.log(countWords('JavaScript is awesome'));

console.log("\nanswer-3")

// 3. Create a function findMinNumber that takes an array 
// of numbers and returns the smallest number from the array 
// using a for loop. Example:

let findMinNumber = (smallest) => {
    let infiity = Infinity
    for (let i = 0; i < smallest.length; i++) {
        if (smallest[i] < infiity) {
            infiity = smallest[i]
        }
    }
    return infiity
}

let numbers = [30, 25, 10, 50];
console.log(findMinNumber(numbers));

console.log("\nanswer-4")

// 4. Write a function printNumbers that
//  takes a number n and prints all numbers
//  from 1 to n using a while loop. Example:

function printNumbers(n) {
    let i = 1
    while (i <= n) {
        console.log(i)
        i++

    }
}

printNumbers(5);

console.log("\nanswer-5")

// 5. Write a function joinArrayToString that
// takes an array of strings and joins them into
// a single string with spaces in between using a for loop.
// Example:

function joinArrayToString(string) {
    let joint = ""
    for (let i = 0; i < string.length; i++) {
        joint += string[i]
    }
    return joint
}

let words = ['I ', 'love ', 'coding'];
console.log(joinArrayToString(words));

console.log("\nanswer-6")

// 6. Create a function calculateProduct
// that takes an array of numbers and returns
// the product of all the numbers using a while loop. 
// Example:

function calculateProduct(ary) {
    let total1 = 1
    let i = 0
    while (i < ary.length) {
        total1 *= ary[i]
        i++
    }
    return total1
}
let numbers_1 = [2, 3, 4];
console.log(calculateProduct(numbers_1));

console.log("\nanswer-7")

// 7.Write a function removeSpaces that 
// takes a string and removes all spaces
// from the string using a for loop. 
// Example:

function removeSpaces(remove) {
    let removeSpaces_1 = ""
    for (let i = 0; i < remove.length; i++) {
        if (remove[i] != " ") {
            removeSpaces_1 += remove[i]
        }
    }
    return removeSpaces_1
}
console.log(removeSpaces('hello world'));


console.log("\nanswer-8")

// 8. Create a function doubleNumbers
// that takes an array of numbers and
// returns a new array with each number
// doubled. Example:

function doubleNumbers(removenum) {
    let add = []
    for (let i = 0; i < removenum.length; i++) {
        add.push(removenum[i] * 2)
    }
    return add
}

let numbers_2 = [1, 2, 3, 4];
console.log(doubleNumbers(numbers_2));

// [2, 4, 6, 8]

console.log("\nanswer-9")

// 9. Write a function printOddNumbers 
// that prints all odd numbers between 1 and 10 
// using a while loop. Example:


function odd_1(odd_2) {
    if (odd_2 % 2 == 1) {
        console.log(odd_2, "odd number")
    }
}

let i = 1
while (i <= 10) {
    odd_1(i)
    i++
}

// 10. Create a function createIncrementer 
// that returns another function. The returned 
// function increments a counter each time it is called.
// Demonstrate using this function by calling it multiple 
// times to show how closure works. Example:

function createIncrementer() {
    let counter = 0;
    function increment() {
        counter = counter + 1;
        return counter;
    }
    return increment;
}

let inc = createIncrementer();
console.log(inc()); // 1
console.log(inc()); // 2
console.log(inc()); // 3
console.log(inc()); // 4




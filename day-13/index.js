// Calculate Total Expenses:
// A family wants to calculate their weekly expenses.
// They spent ₹200, ₹150, ₹100, ₹350, and ₹50 over five days.
// Write a function to calculate the total expense.
// Hint: Sum all elements of the array.


console.log("answer=1\n")
function calculate(fam) {
    let total = 0
    for (let i = 0; i < fam.length; i++) {
        total += fam[i]
    }
    return total
}
let calFam = [200, 150, 100, 350, 50]
console.log(`${calFam} = total expense is = `, calculate(calFam))
console.log("\nanswer=2")

// Find the Highest Temperature:
// A weather app shows the temperatures recorded
// in a city over 7 days as [32, 35, 30, 31, 33, 36, 34].
// Write a function to find the highest temperature in the array.

function temperature(max) {
    let highestAry = -Infinity
    for (let i = 0; i < max.length; i++) {
        if (max[i] > highestAry) {
            highestAry = max[i]
        }
    }
    return highestAry
}


let highest = [32, 35, 30, 31, 33, 36, 34]
console.log(`highest temperature in 7 day =`, temperature(highest))


// Find the Lowest Test Score:
// A student got test scores of[56, 72, 48, 90, 65].Write a function to find the lowest score.
// Hint: Use a loop or Math.min.

console.log("\nanswer=3")
function lowestScore(stuScore) {
    let lowest = Infinity
    for (let i = 0; i < stuScore.length; i++) {
        if (stuScore[i] < lowest) {
            lowest = stuScore[i]
        }
    }
    return lowest
}
let student = [56, 72, 48, 90, 65]
console.log(`lowest score of student =`, lowestScore(student))

console.log("\nanswer=4")
// Calculate Average Salary:
// In a company, the monthly salaries of 5 employees are
// [45000, 55000, 30000, 70000, 60000]. Write a function
// to calculate the average salary.
// Hint: Sum all elements and divide by the array length.

function employeesDtls(forAvrg) {
    let sum = 0, average = 0
    for (let i = 0; i < forAvrg.length; i++) {
        sum += forAvrg[i]
    }
    return sum / 5
}

let employeesSalaries = [45000, 55000, 30000, 70000, 60000]
console.log(employeesDtls(employeesSalaries))

console.log("\nanswer=5")
// Reverse the Guest List:
// You have a list of guests for a
// party: ["John", "Aman", "Rita", "Raj"].
// Write a function to reverse the guest list.

function guestsList(gList) {
    let guestFor = []
    for (let i = gList.length - 1; i >= 0; i--) {
        guestFor.push(gList[i])
    }
    return guestFor
}
let guests = ["John", "Aman", "Rita", "Raj"]
console.log(guestsList(guests))


console.log("\nanswer=6")

// Check for Available Seats:
// A movie theater has an array of available seat 
// numbers: [3, 5, 7, 9, 12]. Write a function to 
// check if seat number 7 is available.
// Hint: Use .includes() or a loop.

function available(availableSeat) {
    for (let i = 0; i < availableSeat.length; i++) {
        if (availableSeat[i] === 7) {
            return true
        }
        else {
            return false
        }
    }
}

let numbers = [3, 5, 7, 9, 12]
console.log(available(numbers))

console.log("\nanswer=7")
// Remove the First Task:
// You have a to-do list: ["Buy groceries", 
// "Clean room", "Study"]. Write a function
// to remove the first task from the list 
// and return the updated list.
// Hint: Use .shift().

function task(forRemove) {
    forRemove.shift(0)
    return forRemove
}

let rightArray = ["Buy groceries", "Clean room", "Study"]
console.log(task(rightArray))

console.log("\nanswer=8")

function removeDuplicates(numbers) {
    return [...new Set(numbers)];
}

let phones = [9876543210, 9123456789, 9876543210, 9000000000];

console.log(removeDuplicates(phones));


console.log("\nanswer=9")

// [200, 400, 100, 700, 500]

function largest(findLargest) {

    let short = findLargest.sort()
    console.log(short)
    let add = 0
    for (let i = 0; i < short.length - 1; i++) {
        add = short.pop()
    }
    return add
}

let sal = [200, 400, 100, 700, 800]
console.log(largest(sal))

console.log("\nanswer=10")


const getLastele = (getLast) => {
    return getLast.pop()
}

let elements = ["Shoes", "T-shirt", "Hat"]
console.log(getLastele(elements))


console.log("\nanswer=11")

const chekArray = (ifEmpty) => {
    if (ifEmpty == 0) {
        console.log("cart is empty")
    }
    else {
        console.log("cart is not empty")
    }
}

let cart = []
chekArray(cart)

console.log("\nanswer=12")

function cout(coutBooks) {
    let result
    for (let i = 0; i < coutBooks.length; i++) {
        result = coutBooks.filter(item => item === "Book A")
    }
    return result
}

let booksName = ["Book A", "Book B", "Book A", "Book C", "Book A"]
console.log(cout(booksName))

console.log("\nanswer=13")

function conctinate(firstAry, secondAry) {
    return firstAry.concat(secondAry)
}
let first = ["Rahul", "Neha"]
let second = ["Aman", "Priya"]
console.log(conctinate(first, second))



console.log("question-1\n")
for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(i + " = " + "is even")
    }
}

console.log("\nquestion-2\n")

let a2 = 5
let b1 = 0
for (let i = 1; i <= 10; i++) {
    console.log(+a2 + " * " + i, " = ", (b1 += 5))
}

console.log("\nquestion-3\n")

let a3 = 5
let sum = 1
for (let i = 1; i <= a3; i++) {
    sum *= i
}
console.log(sum)

console.log("\nquestion-4\n")
// Write a JavaScript program that uses a for
//  loop to print numbers from 1 to 100, but for
//  multiples of 3, print “Fizz” instead of the number, 
// and for multiples of 5, print “Buzz.”
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i, " = Fizzbuzz")
    }
    else if (i % 3 == 0) {
        console.log(i, " = Fizz")
    }
    else if (i % 5 == 0) {
        console.log(i, " = Buzz")
    }
}

console.log("\nquestion-5\n")
let total = 0
for (let i = 1; i <= 100; i++) {
    total += i
}
console.log("1 to 100 total is = ", total)

console.log("\nquestion-6\n")

let cube = 2
let total1 = 0
for (i = 1; i < 3; i++) {
    total1 = (cube * cube) * i
}
console.log(cube, "cube is =", total1)

console.log("\nquestion-7\n")

// AI ML/ prompt 
let total3 = 0
for (i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        // total3 = i
        total3 += i * i
        console.log("odd number is", i)
    }
}
console.log(total3)

console.log("\nquestion-8\n")
let total4 = 0
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        total4 += i
        console.log("divisibe of 3 = ", i)
    }
}
console.log(total4)

console.log("\nquestion-9\n")
let total5 = 1
for (i = 1; i <= 10; i++) {
    total5 *= i
}
console.log(total5)

console.log("\nusing while loop\n")

console.log("question-1\n")
let c1 = 10
while (c1 >= 1) {
    console.log(c1)
    c1--
}
console.log("question-2\n")

let c2 = 0, d1 = 1
while (c2 <= 1000) {
    c2 += d1
    d1++
}
console.log(c2)

console.log("question-3\n")
let c3 = 1, total7 = 0
while (c3 <= 100) {
    if (c3 % 2 == 0) {
        total7 += c3
    }
    c3++
}
console.log("under 1 to 100 even number =", total7)

console.log("question-4\n")
let num = 1;
let count = 0;

while (count < 5) {
    if (num % 3 === 0 && num % 7 === 0) {
        console.log(num);
        count++;
    }
    num++;
}

console.log("\nusing do while loop\n")
console.log("question-1\n")
let c4 = 1
do {
    console.log(c4)
    c4++
} while (c4 <= 10)
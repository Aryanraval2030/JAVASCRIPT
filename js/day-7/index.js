console.log("\nq.1= Write a function to add two numbers.")

function add(a, b) {
    return a + b
}
console.log(add(10, 20))

console.log("\nq.2= Write a function to find the square of a number.")

function square(a = 10, b = 15) {
    console.log(a * b)
}
square()

console.log("\nq.3= Write a function that returns the largest of two numbers.")

function largest(a, b) {
    if (a > b) {
        console.log(`${a} is largest than ${b}`)
    }
    else {
        console.log(`${b} is largest than ${a}`)
    }
}
largest(23, 32)

console.log("\nq=4 Write a function to check if a number is even or odd.")

function check(chek_i) {
    if (chek_i % 2 == 0) {
        console.log(`${chek_i} is even number`)
    }
    else {
        console.log(`${chek_i} is odd number `)
    }
}

for (let i = 1; i <= 5; i++) {
    check(i)
}

console.log("\nq=5 Write a function to print “Hello World”.")
function print() {
    return console.log("hello world")
}

print()
console.log("\nq=6 Write a function that returns the cube of a number.")
function cube(cube_1) {


    return console.log(cube_1 * cube_1 * cube_1)
}

cube(5)

console.log("\nq=7 Write a function to find the area of a circle.")
// area = 3.14 *r*r
function area(r) {
    let answer = 3.14 * r * r
    return console.log(`area of circle ${answer}`)
}

area(4)

console.log("\nq=8 Write a function to concatenate two strings.")

function concatenate(str_1, str_2) {
    let ans = str_1 + str_2
    return console.log(ans)
}

concatenate("hello", " world")

console.log("\nq=9 Write a function to convert Celsius to Fahrenheit.")
// Fahrenheit (°F) = (Celsius × 9/5) + 32
function Fahrenheit(C) {
    let Fahrenheit = (C * 9 / 5) + 32
    return console.log(Fahrenheit)
}

Fahrenheit(20)

console.log("\nq=10 Write a function to return the length of a string.")

function length(lnh) {
    return console.log(`${lnh} length of = ${lnh.length}`)
}

length("hello world")

console.log("\nq=11 Write a function to find the factorial of a number.")

function factorial(facto) {
    let facto_result = 0
    for (let i = 1; i < facto; i++) {
        facto_result += facto * i
    }
    return console.log(`${facto} = ${facto_result}`)
}

for (let i = 1; i <= 10; i++) {
    factorial(i)
}

console.log("\nq=12 Write a function to reverse a string.")

let reverse = function (userName) {
    let str_3 = ""
    for (let i = userName.length - 1; i >= 0; i--) {
        str_3 += userName[i]
    }
    return str_3

}
const userName = reverse("aryan")
console.log(userName)


console.log("\nq=13 Write a function to count vowels in a string.")

function ctn_vwl(a) {
    let count = 0
    for (let i = 0; i < a.length; i++) {
        let ch = a[i]
        if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' ||
            ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U'
        ) {
            count++
        }
    }
    return console.log(`count vowels ${a} = ${count}`)

}
ctn_vwl("aryan raval")

console.log("\nq=14 write an arrow funtion to check if a number is even or odd")

let chek_o_e = (i) => {
    if (i % 2 == 0) {
        console.log(i, "even number")
    }
    else {
        console.log(i, "odd number")
    }
}

for (let i = 1; i <= 10; i++) {
    chek_o_e(i)
}

console.log("\nq=15 write an arrow funtion to count the number of vowels in a string")

let vowels_a = (real_wrld) => {
    let count_v = 0
    for (let i = 0; i <= real_wrld.length; i++) {
        if (real_wrld[i] == "a" || real_wrld[i] == "e" || real_wrld[i] == "i" || real_wrld[i] == "o" || real_wrld[i] == "u"
            || real_wrld[i] == "A" || real_wrld[i] == "E" || real_wrld[i] == "I" || real_wrld[i] == "O" || real_wrld[i] == "U"
        ) {
            count_v++
        }
    }
    return count_v
}

let real_wrld_1 = vowels_a("welcome to the real world!")
console.log(real_wrld_1)

console.log("\nq=16 write an arrow funtion that takes temprature and returns")

let temprature = (tem_1) => {
    if (tem_1 <= 30) {
        console.log(tem_1, "cold-!")
    }
    else if (tem_1 <= 40) {
        console.log(tem_1, "normal-!")
    }
    else if (tem_1 >= 40) {
        console.log(tem_1, "hot-!")
    }
}
temprature(35)


console.log("\nq= 17 write an arrow function to calculate student grade from marks")

let ca_fun = (grd) => {
    if (grd <= 40) { console.log(grd, "you are fail") }
    else if (grd > 40 && grd <= 60) { console.log(grd, "you are pass") }
    else if (grd > 60 && grd <= 80) { console.log(grd, "you are good") }
    else if (grd > 80 && grd <= 100) { console.log(grd, "you are excellent") }
}
ca_fun(65)

console.log("\nq=18 write an arrow function to print all prime number between 1 to 100")

let prime_1 = (i) => {
    let count = 0
    for (let j = 1; j <= i; j++) {
        if (i == 1) {
            console.log("co-prime")
        }
        else if (i % j == 0) {
            count++
        }
    }
    if (count == 2) {
        console.log(i, "prime")
    }
    else {
        console.log(i, "not prime")
    }
}
for (let i = 1; i <= 100; i++) {
    prime_1(i)
}







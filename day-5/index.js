console.log("\n=====question-1=====")

let total = 0
for (let i = 1; i <= 15; i++) {
    if (i % 2 == 0 || i % 5 == 0) {
        total += i
    }
}
console.log(total)
console.log("\n=====question-2=====")
let malti = 1
let malti2 = 0
for (let i = 1; i <= 10; i++) {
    console.log("3 * ", i, " =", malti2 += 3)
}
console.log("\n=====question-3=====")
let r = ""
for (let i = 1; i <= 5; i++) {
    for (let k = 1; k <= i; k++) {
        r += "*"
    }
    r += "\n"
}
console.log(r)
console.log("\n=====question-4=====")
let o = 6, sum = 0
for (let i = 1; i < o; i++) {
    if (o % i == 0) {
        sum += i
    }
}
console.log(sum)





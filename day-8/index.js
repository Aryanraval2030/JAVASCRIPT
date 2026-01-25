// Create a function makeAdder(x) that returns a
//  function which adds x to any number.
function outer(otr) {
    function inner() {
        let a = 10
        return console.log(a + otr)
    }
    return inner
}
let retur = outer(5)
retur()

// Write a function wordAnalyzer(sentence) that uses an inner 
// function to count total words
let outer1 = (str) => {
    let inner = () => {
        let count = 0
        for (let i = 0; i <= str.length; i++) {
            count++
        }
        return console.log(`${str} length is = `, count)
    }
    return inner
}
let result1 = outer1("ARYAN")
result1()

// 4. Create a function discount(price) that has an inner function to 
// apply 10% discount and return final price.

let discount = (price) => {
    let inner = () => {
        return console.log(`${price} discount of 10% = `, price / 10)
    }
    return inner
}
let result2 = discount(250)
result2()

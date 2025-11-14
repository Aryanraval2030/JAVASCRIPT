// If the temperature is below 18°C, print "It's too cold, turn on the heater."
// If the temperature is between 18°C and 25°C, print "The temperature is comfortable."
// If the temperature is above 25°C, print "It's too hot, turn on the fan."
console.log("\nQuestion-1")
let temperature = -1
if (temperature < 18) {
    console.log("It's too cold, turn on the heater.")
}
else if (temperature <= 25) {
    console.log("The temperature is comfortable.")
}
else {
    console.log("It's too hot, turn on the fan.")
}
console.log("\nQuestion-2")

let score = 15;

if (score >= 100) {
    console.log("invalid mark")
}
else if (score >= 90) {
    console.log("grade: A");
}
else if (score >= 80) {
    console.log("grade: B");
}
else if (score >= 70) {
    console.log("grade: C");
}
else {
    console.log("grade: D");
}

console.log("\nQuestion-3")

let light = "red";

if (light == "red") {
    console.log("stop");
}
else if (light == "yellow") {
    console.log("ready");
}
else if (light == "green") {
    console.log("go");
}
else {
    console.log("invalid !");
}
console.log("\nquestion-4")
let bill = 85;

if (bill < 50) {
    console.log("no discount.");
}
else if (bill <= 100) {
    console.log("you get a 10% discount.");
}
else {
    console.log("you get a 20% discount.");
}


console.log("\nquestion-5")
let time = 9;

if (time < 7) {
    console.log("it's too early,sleep a bit more.");
}
else if (time < 10) {
    console.log("time for breakfast and morning exercise.");
}
else if (time < 18) {
    console.log("time to work or study.");
}
else {
    console.log("relax for the day.");
}

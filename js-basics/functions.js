
function greet(name) {
    return "Good Morning, " + name + ". I hope you are doing well";
}
console.log(greet("Ameer"));
function add(a,b) {
    return "Sum=" + (a + b);
}
console.log(add(5, 10));
const userData = require("./objects.js");
function printDeveloper (developer) {
    console.log("Developer: " + developer.name);
    console.log("Current Week: " + developer.trainingWeek);
    console.log("Current Focus: " + developer.currentFocus);
}
printDeveloper(userData.developer);
const developer = {
    name: "Muhammad Ameer Hamza",
    trainingWeek: 1,
    currentFocus: "JavaScript",
}
console.log(developer.name, developer.trainingWeek, developer.currentFocus);
console.log(developer["name"]);
console.log(developer["trainingWeek"]);
console.log(developer["currentFocus"]);
developer.trainingWeek = 2;
developer.isLearning = true;
console.log(developer)
console.log("Developer: " + developer.name);
console.log("Current Week: " + developer.trainingWeek);
console.log("Current Focus: " + developer.currentFocus);

module.exports = { developer };
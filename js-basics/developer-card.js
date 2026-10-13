const developer = { name: "Muhammad Ameer Hamza", trainingWeek: 1, currentFocus: "AI-Native Development" };
const tools = ["VS Code", "Node.js", "Git, GitHub", 'npm', 'TypeScript'];
function printDeveloperCard(developer,tools) {
    console.log("Developer: " + developer.name);
    console.log("Current Week: " + developer.trainingWeek);
    console.log("Current Focus: " + developer.currentFocus);
    console.log("Tools: " + tools.join(", "));
}
printDeveloperCard(developer,tools);
const scenarios = [
    "A man robs a bank in Indianapolis.",
    "A woman forges legal documents in Fort Wayne.",
    "A hacker breaches a hospital’s patient database.",
    "A thief steals a rare sports car from a private garage."
];

let scenarioIndex = 0;

document.getElementById("new-scenario").addEventListener("click", () => {
    scenarioIndex = Math.floor(Math.random() * scenarios.length);
    document.getElementById("scenario-text").innerText = scenarios[scenarioIndex];
    enableButtons();
    logAction("Scenario: " + scenarios[scenarioIndex]);
});

document.getElementById("add-defense").addEventListener("click", () => {
    let defense = prompt("What preventative measure does the criminal take?");
    if (defense) {
        logAction("Defense: " + defense);
    }
});

document.getElementById("catch-method").addEventListener("click", () => {
    let catchMethod = prompt("How do they get caught?");
    if (catchMethod) {
        logAction("Caught by: " + catchMethod);
    }
});

function enableButtons() {
    document.getElementById("add-defense").disabled = false;
    document.getElementById("catch-method").disabled = false;
}

function logAction(text) {
    const log = document.getElementById("log");
    const entry = document.createElement("p");
    entry.textContent = text;
    log.appendChild(entry);
}

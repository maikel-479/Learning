// AND operator (&&) is used to check if both conditions are true.
// If both conditions are true, the code inside the if statement will run.
let hasSolvedChallenge = false
let hasHintsLeft = false

// Create an if statement that checks that both variables are false.
if (hasSolvedChallenge === false && hasHintsLeft === false) {
    showSolution()
}
// If so, run the showSolution() function

function showSolution() {
    console.log("Showing the solution....")
}


// ---

// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true

let likesDocumentaries = true
let likesStartups = false

if (likesDocumentaries === true || likesStartups === true) {
    recommendMovie()
}

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}

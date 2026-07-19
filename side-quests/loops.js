// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START           FINISH       STEP SIZE
for ( let count = 1;  count < 11;  count += 1 )  {
  console.log(count)
}

for ( let task = 10;  count < 11;  count += 1 )  {
  console.log(task)
}

for (let i = 0; i < 6; i += 1) {
  console.log(i)
}

// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers

for (let count = 10; count <= 100; count += 10) {
  console.log(count)
}

let cards = [7, 3, 9]

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run

for (let i = 0; i < cards.length; i += 1) {
  console.log(cards[i])
}

let sentence = ["Hello", "my", "name", "is", "Per"]
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent
for (let i = 0; i < sentence.length; i += 1) {
  greetingEl.textContent += sentence[i] + " "
}

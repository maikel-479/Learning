# Test Yourself

No AI predictions allowed. Complete these tasks using only what you've learned.

## Rules
- Disable AI autocomplete/predictions
- No copying from other files
- Only use MDN docs if stuck on syntax
- Time yourself

---

## Task 1: Functions (10 min)
Create a function called `getFullName` that takes two parameters (`firstName` and `lastName`) and returns the full name with a space between them.

```js
// Example: getFullName("John", "Doe") should return "John Doe"
function getFullName() {
  let firstName = John; 
  let lastName = Doe;
  return firstName + " " + lastName
}
```

---

## Task 2: Arrays + Loops (15 min)
Given this array:
```js
let prices = [10, 25, 30, 5, 15]

function getTotal() {
	
}
```
Write a function called `getTotal` that:
- Loops through the array
- Adds up all the prices
- Returns the total

---

## Task 3: DOM + Events (20 min)
Create an HTML file with:
- An `<input>` field
- A `<button>` that says "Add"
- A `<ul>` element

```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="">
  <title>DOM</title>
</head>
<body>
  <input type="text"/>
  <button type="button"></button>
  <ul>
    <li>All done!</li>
  </ul>
</body>
</html>

```

When the user types a value and clicks the button:
- The value should be added as an `<li>` to the `<ul>`
- The input should clear after adding

---

## Task 4: Blackjack Logic (15 min)
Without looking at your existing code, write a function called `hasBlackJack` that:
- Takes an array of cards as a parameter
- Returns `true` if the array has exactly 2 cards that add up to 21
- Returns `false` otherwise

```js
function hasBlackJack() {
let array = [5, 8, 9]

if (let i = 0; i <= 21; i += array.[i]) {
  console.log(true)
} else {
  console.log(false)
}
```

---

## Task 5: Debug This (10 min)
Fix all the errors in this code:

```js
let items = ["apple", "banana", "cherry"]

function logItems(arr) {
  for (let i = 0; i < items.length; i++) {
    console.log(items[i])
  }
}

logItems(items)
logItems("not an array")
```

---

## Task 6: Build a Mini App (30 min)
Build a simple counter app:
- Display showing current count
- "+" button to increase
- "-" button to decrease
- "Reset" button to set back to 0
- Count should never go below 0

---

## Scoring
- Tasks 1-2: Core JS fundamentals
- Tasks 3-4: DOM + combining skills
- Tasks 5-6: Debugging + building from scratch

If you can complete 4+ tasks without help, you know this material.

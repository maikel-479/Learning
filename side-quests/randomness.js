/* Basically, all Random numbers exist between 0 to 1 using the Math.random() function.
 The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range.
 If a random number is multiplied by let's say 6, the numbers will stat from 0 to 5.999999999999.

let randomNumber = Math.random() * 6
*/

let flooredNumber = Math.floor(3.45632) // ==> 3

console.log(flooredNumber)


/*

What does Math.floor() do to positive numbers?

Your answer: It rounds a number down to the nearest integer.

*/
let randomNumber = Math.floor( Math.random() * 6 ) // Adding + 1 moves the range from 0-5 to 1-6

console.log(randomNumber)

/*

Write down all the possible values randomNumber can hold now!
0
1
2
3
4
5
*/

// Create a function, rollDice(), that returns a random number between 1 and 6

function rollDice() {
  let rollDice = Math.floor(Math.random() * 6) + 1
  return rollDice
}

console.log(rollDice())

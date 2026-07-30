// What are greeting and name? They are parameters
// What are "Howdy" and "James"? They are arguments
// What are num1 and num2? They are parameters
// What are 3 and 4? They are arguments


//.                parameters
function greetUser(greeting, name) {
    welcomeEl.textContent = `${greeting}, ${name} 👋`
}

//.        arguments
let hi = "Howdy"
greetUser(hi, "James")


function add(num1, num2) {
    return num1 + num2
}

add(3, 4)

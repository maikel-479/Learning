// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

function renderImages(imgArray) {
  for (let i = 0; i < imgArray.length; i++) {
      document.getElementById("container").innerHTML += `<img src="${imgArray[i]}" alt="team image">`
  }
}

// Call the function to render the images
renderImages(imgs);

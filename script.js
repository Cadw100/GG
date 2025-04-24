console.log("Which Fry Cook are you?");

// Declare all the images as variables (for now, leave the image part blank and you will fill in the source later)
const images = {
    spongebob: "", // Declare the image path for Spongebob here
    squidward: "", // Declare the image path for Squidward here
    jim: ""        // Declare the image path for Jim here
};

// Get the input field and the second options
let firstInput = document.querySelector("#firstInput");
let secondOptions = document.querySelector("#secondOptions");
let imageContainer = document.querySelector("#imageContainer");

// Track the first choice (Nonchalant or Jokey)
let firstChoice = '';

// Function to display the images based on the second choice
function displayImageBasedOnChoice(choice) {
    imageContainer.innerHTML = ''; // Clear any previous images

    if (firstChoice === 'nonchalant') {
        if (choice === 'lazyAndBoring') {
            createImage(images.spongebob, 'Spongebob');
        } else if (choice === 'chill') {
            createImage(images.spongebob, 'Spongebob');
        }
    } else if (firstChoice === 'jokey') {
        if (choice === 'lazyAndBoring') {
            createImage(images.squidward, 'Squidward');
        } else if (choice === 'chill') {
            createImage(images.jim, 'Jim');
        }
    }
}

// Function to create and append an image
function createImage(src, altText) {
    let imgElement = document.createElement("img");
    imgElement.src = src;
    imgElement.alt = altText;
    imageContainer.appendChild(imgElement);
}

// Event listener for the first input (Nonchalant or Jokey)
firstInput.addEventListener('input', function() {
    let inputText = firstInput.value.toLowerCase().trim();

    // If the input matches either 'nonchalant' or 'jokey', show the second options
    if (inputText === 'nonchalant' || inputText === 'jokey') {
        firstChoice = inputText;
        secondOptions.style.display = 'block';  // Show the second options (Lazy and Boring, Chill)
    } else {
        secondOptions.style.display = 'none';  // Hide the second options if input doesn't match
    }
});

// Event listeners for the second set of options (Lazy and Boring or Chill)
document.querySelector(".lazyAndBoring").addEventListener('click', function() {
    displayImageBasedOnChoice('lazyAndBoring');
});
document.querySelector(".chill").addEventListener('click', function() {
    displayImageBasedOnChoice('chill');
});


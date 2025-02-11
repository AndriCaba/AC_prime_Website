// Function to handle image uploads and display the selected image
function handleImageUpload(inputId, displayId, imageId) {
    const input = document.getElementById(inputId);
    const display = document.getElementById(displayId);
    const image = document.getElementById(imageId);

    // Listen for file selection
    input.addEventListener('change', function(event) {
        const file = event.target.files[0];

        if (file) {
            // Check if the file is an image
            if (file.type.startsWith('image/')) {
                const objectURL = URL.createObjectURL(file);
                image.src = objectURL;

                // Free up memory after the image is loaded
                image.onload = () => URL.revokeObjectURL(objectURL);
            } else {
                display.innerHTML = `File selected: ${file.name}`;
            }
        }
    });
}

// Apply the function to multiple file inputs
handleImageUpload('fileInput', 'fileDisplay', 'preImage');
handleImageUpload('fileInput2', 'fileDisplay2', 'preImage2');

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    let textElements = document.querySelectorAll(".editable-text");
    let editButtons = document.querySelectorAll(".editBtn");
    let saveButton = document.getElementById("saveBtn");

    let originalTexts = {}; // Store original text content

    // Loop through all edit buttons and enable editing on click
    editButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            let textElement = textElements[index];

            // Store original content if not already saved
            if (!(index in originalTexts)) {
                originalTexts[index] = textElement.innerHTML;
            }

            // Enable editing and show save button
            textElement.contentEditable = "true";
            textElement.focus();
            saveButton.style.display = "inline";
            button.style.display = "none";
        });
    });

    // Save the edited text and disable editing
    saveButton.addEventListener("click", function () {
        textElements.forEach(text => {
            text.contentEditable = "false";
        });

        saveButton.style.display = "none";

        // Show edit buttons again
        editButtons.forEach(btn => btn.style.display = "inline");
    });
});

// Counter to keep track of the number of elements
let count = 4;

// Function to add a new editable element
function addElement() {
    count++;
    let container = document.getElementById("elements-container");

    let newElement = document.createElement("div");
    newElement.classList.add("element");

    // Add content inside the new element
    newElement.innerHTML = `
        <span class="number">0${count}</span>
        <h3 contenteditable="true">New Title</h3>
        <p contenteditable="true">New description...</p>
    `;

    container.appendChild(newElement);
}

// Function to remove the last added element
function removeElement() {
    let container = document.getElementById("elements-container");

    // Remove the last element if at least one exists
    if (container.children.length > 0) {
        container.removeChild(container.lastElementChild);
        count--;
    }
}


let imageCount = 0;

function addImage() {
    let input = document.getElementById("imageInput");
    let container = document.getElementById("image-container");

    if (input.files.length > 0) {
        let file = input.files[0];
        let reader = new FileReader();

        reader.onload = function (e) {
            let newImage = document.createElement("img");
            newImage.src = e.target.result;
            newImage.classList.add("image-item");
            container.appendChild(newImage);
            imageCount++;
        };

        reader.readAsDataURL(file);
    }
}

function removeImage() {
    let container = document.getElementById("image-container");

    if (container.children.length > 0) {
        container.removeChild(container.lastElementChild);
        imageCount--;
    }
}


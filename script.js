function handleImageUpload(inputId, displayId, imageId) {
    const input = document.getElementById(inputId);
    const display = document.getElementById(displayId);
    const image = document.getElementById(imageId);

    input.addEventListener('change', function(event) {
        const file = event.target.files[0];

        if (file) {
            if (file.type.startsWith('image/')) {
                const objectURL = URL.createObjectURL(file);
                image.src = objectURL;

                // Revoke previous URL after loading to free memory
                image.onload = () => URL.revokeObjectURL(objectURL);
            } else {
                display.innerHTML = `File selected: ${file.name}`;
            }
        }
    });
}

// Apply function to both upload inputs
handleImageUpload('fileInput', 'fileDisplay', 'preImage');
handleImageUpload('fileInput2', 'fileDisplay2', 'preImage2');


document.addEventListener("DOMContentLoaded", function () {
    let textElements = document.querySelectorAll(".editable-text");
    let editButtons = document.querySelectorAll(".editBtn");
    let saveButton = document.getElementById("saveBtn");

    let originalTexts = {};

    editButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            let textElement = textElements[index];

            if (!(index in originalTexts)) {
                originalTexts[index] = textElement.innerHTML;
            }

            textElement.contentEditable = "true";
            textElement.focus();
            saveButton.style.display = "inline";
            button.style.display = "none";
        });
    });

    saveButton.addEventListener("click", function () {
        textElements.forEach(text => {
            text.contentEditable = "false";
        });

        saveButton.style.display = "none";
        editButtons.forEach(btn => btn.style.display = "inline");
    });
});

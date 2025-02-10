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

document.addEventListener("DOMContentLoaded", function () {
    const editBtn = document.getElementById("editBtn");
    const content = document.getElementById("editableContent");
    const editIcon = editBtn.querySelector("img");

    editBtn.addEventListener("click", function () {
        if (content.isContentEditable) {
            content.contentEditable = "false";
            editBtn.innerHTML = '<img src="Edit_Icon.svg" alt="EditLogo"> Edit Text';
        } else {
            content.contentEditable = "true";
            editBtn.innerHTML = '<img src="Save_Icon.svg" alt="SaveLogo"> Save';
        }
    });
});



// document.getElementById('fileInput').addEventListener('change', function(event) {
//     const file = event.target.files[0];
//     const display = document.getElementById('fileDisplay');

//     if (file) {
//         if (file.type.startsWith('image/')) {
//             const img = document.createElement('img');
//             img.src = URL.createObjectURL(file);
//             display.innerHTML = '';
//             display.appendChild(img);
//         } else {
//             display.innerHTML = `File selected: ${file.name}`;
//         }
//     }
// });

document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const display = document.getElementById('fileDisplay');

    if (file) {
        if (file.type.startsWith('image/')) {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            display.innerHTML = ''; // Clear previous content
            display.appendChild(img);
        } else {
            display.innerHTML = `File selected: ${file.name}`;
        }
    }
});
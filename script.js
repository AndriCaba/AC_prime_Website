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

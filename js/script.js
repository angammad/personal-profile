document.addEventListener("DOMContentLoaded", () => {
    console.log("Personal Profile Website Loaded");
    const tags = document.querySelectorAll(".tag");

    tags.forEach(tag => {
        tag.addEventListener("mouseenter", () => {
            tag.style.cursor = "pointer";
        });
    });
});
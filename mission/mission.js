let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;

    if (current == 'dark') {
        // Change background + text
        document.body.style.backgroundColor = "#121212";
        document.body.style.color = "#ffffff";

        // Change logo (optional but your assignment mentions it)
        logo.src = "images/byui-logo-white.webp";

    } else {
        // Light mode (default)
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#000000";

        // Switch logo back
        logo.src = "images/byui-logo-blue.webp";
    }
}
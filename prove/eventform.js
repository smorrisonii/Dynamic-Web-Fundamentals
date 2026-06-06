const form = document.querySelector("form");
const typeSelect = document.querySelector("#type");
const extraField = document.querySelector("#extra-field");
const extraLabel = document.querySelector("#extra-label");
const extraInput = document.querySelector("#extra-input");
const output = document.querySelector("#output");

const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const eventDate = document.querySelector("#event-date");

typeSelect.addEventListener("change", function () {
    output.textContent = "";

    if (typeSelect.value === "Student") {
        extraField.classList.remove("hidden");
        extraLabel.textContent = "Student I#";

        extraInput.value = "";
        extraInput.placeholder = "123456789";
        extraInput.maxLength = 9;
    }
    else if (typeSelect.value === "Guest") {
        extraField.classList.remove("hidden");
        extraLabel.textContent = "Access Code";

        extraInput.value = "";
        extraInput.placeholder = "EVENT131";
        extraInput.maxLength = 8;
    }
    else {
        extraField.classList.add("hidden");
        extraInput.value = "";
    }
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    output.textContent = "";

    // First name validation
    if (firstName.value.trim() === "") {
        output.textContent = "Please enter a first name.";
        return;
    }

    // Last name validation
    if (lastName.value.trim() === "") {
        output.textContent = "Please enter a last name.";
        return;
    }

    // Email validation
    if (email.value.trim() === "") {
        output.textContent = "Please enter an email address.";
        return;
    }

    // Type validation
    if (typeSelect.value === "Choose one") {
        output.textContent = "Please choose a ticket type.";
        return;
    }

    // Date validation
    if (eventDate.value === "") {
        output.textContent = "Please choose an event date.";
        return;
    }

    // Future date validation
    const today = new Date();
    const chosenDate = new Date(eventDate.value);

    today.setHours(0, 0, 0, 0);

    if (chosenDate <= today) {
        output.textContent = "Please choose a future date.";
        return;
    }

    // Student validation
    if (
        typeSelect.value === "Student" &&
        extraInput.value.length !== 9
    ) {
        output.textContent = "Student I# must be 9 digits.";
        return;
    }

    // Guest validation
    if (
        typeSelect.value === "Guest" &&
        extraInput.value !== "EVENT131"
    ) {
        output.textContent = "Access code must be EVENT131.";
        return;
    }

    // Success output
    output.innerHTML = `
        <h2>Ticket Created</h2>
        <p>${firstName.value.trim()} ${lastName.value.trim()}</p>
        <p>${typeSelect.value}</p>
        <p>${eventDate.value}</p>
    `;
});
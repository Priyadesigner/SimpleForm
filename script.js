// Dropdown function
function toggleDropdown() {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("hidden");
}

// Modal functionality
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");

openModalBtn.addEventListener("click", function () {
    modal.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", function () {
    modal.classList.add("hidden");
});

// Form validation
const form = document.getElementById("contactForm");
const errorMsg = document.getElementById("error");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
        errorMsg.textContent = "All fields are required!";
    } else {
        errorMsg.style.color = "green";
        errorMsg.textContent = "Form submitted successfully!";
        form.reset();
    }
});

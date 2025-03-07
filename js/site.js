document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const firstName = document.querySelector(".input-box input[placeholder='Firstname']").value.trim();
        const lastName = document.querySelector(".input-box input[placeholder='Lastname']").value.trim();
        const email = document.querySelector(".input-box input[placeholder='Email']").value.trim();

        if (firstName === "" || lastName === "" || email === "") {
            alert("Please fill out all fields before submitting.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you for registering, " + firstName + "! You have successfully joined our book club.");
        form.reset(); // Reset form fields
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});

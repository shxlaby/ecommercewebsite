document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Get form fields
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

     // Validate Fields
     if (!name || !email || !message) {
        alert("All fields are required.");
        return;
    }

    // Validate Email
    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
    }

     // Show Thank You Message
     document.getElementById("contactForm").style.display = "none";
     document.getElementById("thankYouMessage").style.display = "block";
 });
(function() {
    emailjs.init("3vIFdmGfxToy93K2s"); // Public Key EmailJS
})();

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const feedbackMessage = document.getElementById("feedbackMessage");

    if (name === "" || email === "" || message === "") {
        feedbackMessage.textContent = "Please fill in all fields.";
        feedbackMessage.classList.remove("hidden", "text-green-400");
        feedbackMessage.classList.add("text-red-400");
        return;
    }

    emailjs.sendForm('service_3xez466', 'template_7w82bhy', this)
    .then(function() {
        feedbackMessage.textContent = "Message sent successfully!";
        feedbackMessage.classList.remove("hidden", "text-red-400");
        feedbackMessage.classList.add("text-green-400");
        document.getElementById("contactForm").reset();
    }, function(error) {
        feedbackMessage.textContent = "Failed to send message. Please try again.";
        feedbackMessage.classList.remove("hidden", "text-green-400");
        feedbackMessage.classList.add("text-red-400");
        console.error("EmailJS error:", error);
    });
});

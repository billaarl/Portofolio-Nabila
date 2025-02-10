document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah reload halaman
    
    // Ambil nilai input
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const feedbackMessage = document.getElementById("feedbackMessage");

    // Validasi sederhana
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Simulasi pengiriman data
    setTimeout(() => {
        feedbackMessage.classList.remove("hidden");
        feedbackMessage.textContent = "Message sent successfully!";
        feedbackMessage.classList.add("text-green-400");

        // Kosongkan input setelah sukses
        document.getElementById("contactForm").reset();
    }, 1000);
});
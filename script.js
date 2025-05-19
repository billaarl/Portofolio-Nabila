// Inisialisasi EmailJS
(function () {
    emailjs.init("3vIFdmGfxToy93K2s"); // Public Key EmailJS kamu
  })();
  
  // Event listener untuk form submit
  document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah reload
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const feedbackMessage = document.getElementById("feedbackMessage");
  
    // Validasi input kosong
    if (name === "name" || email === "email" || message === "") {
      feedbackMessage.textContent = "Harap isi semua field.";
      feedbackMessage.classList.remove("hidden", "text-green-400");
      feedbackMessage.classList.add("text-red-400");
      alert("❗ Harap isi semua field.");
      return;
    }
  
    // Kirim email melalui EmailJS
    emailjs.sendForm('service_cbhaqh7', 'template_7w82bhy', this)
      .then(function () {
        feedbackMessage.textContent = "Pesan berhasil dikirim!";
        feedbackMessage.classList.remove("hidden", "text-red-400");
        feedbackMessage.classList.add("text-green-400");
        document.getElementById("contactForm").reset();
  
        // Tampilkan alert sukses
        alert("✅ Pesan berhasil dikirim!");
      }, function (error) {
        feedbackMessage.textContent = "Gagal mengirim pesan. Silakan coba lagi.";
        feedbackMessage.classList.remove("hidden", "text-green-400");
        feedbackMessage.classList.add("text-red-400");
        console.error("EmailJS error:", error);
  
        alert("❌ Gagal mengirim pesan. Silakan coba lagi.");
      });
  });
  

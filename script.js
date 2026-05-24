// Memaksa browser selalu mulai dari paling atas saat di-refresh
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

// Inisialisasi Animasinya
AOS.init({ offset: 0 });

// Logika Buka Tutup Menu Mobile
function hamburg() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(0px)";
}

function cancel() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(-100%)";
}

// Logika Efek Mengetik (Typewriter Effect)
const texts = ["Customer Service", "Administration", "Communicator"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

const textElement = document.querySelector(".typewriter-text");

function typeWriter() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    // Proses menghapus tulisan
    textElement.innerHTML = currentText.substring(0, charIndex - 1);
    charIndex--;
    typeSpeed = 50; // Kecepatan menghapus lebih cepat
  } else {
    // Proses mengetik tulisan
    textElement.innerHTML = currentText.substring(0, charIndex + 1);
    charIndex++;
    typeSpeed = 150; // Kecepatan ngetik biasa
  }

  // Jika kata selesai diketik
  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    typeSpeed = 1500; // Jeda sebentar sebelum mulai menghapus
  }
  // Jika kata selesai dihapus
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length; // Pindah ke kata selanjutnya
    typeSpeed = 500; // Jeda sebelum mulai ngetik kata baru
  }

  setTimeout(typeWriter, typeSpeed);
}

// Jalankan efek ngetik saat website pertama kali dibuka
window.onload = typeWriter;
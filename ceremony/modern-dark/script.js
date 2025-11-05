// ==================== COUNTDOWN ====================
const targetDate = new Date("2025-12-20T10:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = targetDate - now;
  const container = document.getElementById("countdown");

  if (diff <= 0) {
    container.innerHTML = "<p>Hari bahagia telah tiba 💍</p>";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  container.innerHTML = `
    <div class="unit"><strong>${days}</strong><small>Hari</small></div>
    <div class="unit"><strong>${hours}</strong><small>Jam</small></div>
    <div class="unit"><strong>${minutes}</strong><small>Menit</small></div>
    <div class="unit"><strong>${seconds}</strong><small>Detik</small></div>
  `;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// ==================== RSVP FORM ====================
document.getElementById("rsvpForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  document.getElementById("rsvpMessage").textContent = `Terima kasih ${name}, konfirmasi kamu telah diterima!`;
  e.target.reset();
});


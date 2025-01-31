document.getElementById("paymentForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Ambil data dari form
  const name = document.getElementById("name").value;
  const amount = document.getElementById("amount").value;
  const paymentMethod = document.getElementById("paymentMethod").value;

  // Tampilkan rincian pembayaran
  document.getElementById("paymentSummary").style.display = "block";
  document.getElementById("summaryName").innerText = `Nama: ${name}`;
  document.getElementById("summaryAmount").innerText = `Jumlah Pembayaran: Rp ${amount}`;
  document.getElementById("summaryPaymentMethod").innerText = `Metode Pembayaran: ${paymentMethod}`;

  // Reset form
  document.getElementById("paymentForm").reset();
});

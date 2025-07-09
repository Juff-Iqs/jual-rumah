
  document.getElementById("waForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Ambil data form
    const nama = document.getElementById("nama").value;
    const wa = document.getElementById("wa").value;
    const email = document.getElementById("email").value;
    const lokasi = document.getElementById("lokasi").value;
    const status = document.getElementById("status").value;
    const dokumen = document.getElementById("dokumen").value;

    // Nomor tujuan WA (ganti dengan nomor admin kamu, misalnya 6281234567890)
    const target = "6289637215435";

    // Format pesan WhatsApp
    const message = `Halo Admin,%0A
Nama: ${nama}%0A
Nomor WA: ${wa}%0A
Email: ${email}%0A
Lokasi Properti: ${lokasi}%0A
Status: ${status}%0A
Kelengkapan Dokumen: ${dokumen}`;

    // Redirect ke WhatsApp
    window.location.href = `https://wa.me/${target}?text=${message}`;
  });


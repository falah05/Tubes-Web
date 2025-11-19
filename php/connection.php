<?php
// Konfigurasi database
$host     = "localhost";    // Nama host (biasanya localhost)
$user     = "root";         // Username MySQL
$password = "";             // Password MySQL (kosongkan jika tidak ada)
$database = "findHappiness"; // Ganti dengan nama database kamu

// Membuat koneksi
$koneksi = mysqli_connect($host, $user, $password, $database);

// Mengecek koneksi
if (!$koneksi) {
    die("Koneksi gagal: " . mysqli_connect_error());
} else {
    echo "Koneksi berhasil!";
}
?>

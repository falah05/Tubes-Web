<?php
session_start();
include "connection.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = mysqli_real_escape_string($koneksi, $_POST['email']);
    $password = mysqli_real_escape_string($koneksi, $_POST['password']);

    $query = "SELECT * FROM user WHERE email='$email' AND password='$password'";
    $result = mysqli_query($koneksi, $query);

    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);

        $_SESSION['id_user'] = $row['id_user'];
        $_SESSION['fullName'] = $row['fullName'];
        $_SESSION['role'] = $row['role'];

        // Redirect berdasarkan role
        if ($row['role'] == "Admin") {
            header("Location: ../html/admin.html");
        } elseif ($row['role'] == "Fotografer") {
            header("Location: ../html/Homepage.html");
        } else {
            header("Location: ../html/Homepage.html");
        }
        exit;

    } else {
        echo "<script>alert('Email atau password salah!'); window.location='../html/Login.html';</script>";
    }
}
?>

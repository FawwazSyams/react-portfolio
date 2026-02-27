<?php
// Koneksi ke database
$koneksi = mysqli_connect("localhost", "root", "", "db_crud");

// CREATE
if (isset($_POST['simpan'])) {
    $nama  = $_POST['nama'];
    $email = $_POST['email'];
    mysqli_query($koneksi, "INSERT INTO users (nama, email) VALUES ('$nama','$email')");
}

// UPDATE
if (isset($_POST['update'])) {
    $id    = $_POST['id'];
    $nama  = $_POST['nama'];
    $email = $_POST['email'];
    mysqli_query($koneksi, "UPDATE users SET nama='$nama', email='$email' WHERE id=$id");
}

// DELETE
if (isset($_GET['hapus'])) {
    $id = $_GET['hapus'];
    mysqli_query($koneksi, "DELETE FROM users WHERE id=$id");
}

// Ambil data
$result = mysqli_query($koneksi, "SELECT * FROM users");
?>
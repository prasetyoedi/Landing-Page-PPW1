<?php
    // koneksi ke database
    $host = "localhost";
    $username = "root";
    $password = "";
    $database = "db_ocean";

    $conn = new mysqli($host, $username, $password, $database);

    if (!$conn) {
        die("Koneksi gagal: " . mysqli_connect_error());
    }
?>
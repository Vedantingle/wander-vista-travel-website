<?php
include "db.php";

// Validate request
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $email = $_POST["email"];
    $password = password_hash($_POST["password"], PASSWORD_DEFAULT);
    $phone = $_POST["phone"];
    $country = $_POST["country"];
    $interests = $_POST["interests"] ?? "[]"; // Store as JSON

    // Check if email exists
    $checkEmail = $conn->prepare("SELECT id FROM users WHERE email = ?");
    $checkEmail->bind_param("s", $email);
    $checkEmail->execute();
    $result = $checkEmail->get_result();

    if ($result->num_rows > 0) {
        echo "<script>
                alert('Email already registered!');
                window.location.href='create.html';
              </script>";
        exit();
    }

    // Insert user data
    $sql = "INSERT INTO users (first_name, last_name, email, password, phone, country, interests) VALUES (?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssssss", $firstName, $lastName, $email, $password, $phone, $country, $interests);

    if ($stmt->execute()) {
        echo "<script>
                alert('Account created successfully!');
                window.location.href='index.html';
              </script>";
    } else {
        echo "<script>
                alert('Error creating account.');
                window.location.href='create.html';
              </script>";
    }

    $stmt->close();
    $conn->close();
} else {
    echo "<script>
            alert('Invalid request method.');
            window.location.href='create.html';
          </script>";
}
?>

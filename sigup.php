<?php
session_start();
require 'db.php'; // Database connection file

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = trim($_POST["email"]);
    $password = trim($_POST["password"]);

    if (empty($email) || empty($password)) {
        die("Email and password are required.");
    }

    // Check if the user exists
    $stmt = $conn->prepare("SELECT id, password FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($user_id, $hashed_password);
        $stmt->fetch();

        // Verify password
        if (password_verify($password, $hashed_password)) {
            $_SESSION['user_id'] = $user_id;
            $_SESSION['email'] = $email;

            // Redirect to dashboard or home page
            header("Location: index.html");
            exit();
        } else {
            echo "<script>
            alert('Incorrect password!');
            window.location.href='sigup.html';
          </script>";
        }
    } else {
        echo "<script>
            alert('Account Not Found! Plz Create an Account!');
            window.location.href='create.html';
          </script>";
    }

    $stmt->close();
    $conn->close();
}
?>

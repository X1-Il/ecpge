<?php
// Establish MySQL connection
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get the email and password from the request
$email = $_POST['email'];
$password = $_POST['password'];

// Define the verification data
$users = array(
  "ibrahim.laklaa@ecpge.mp" => "Ibrahim2004",
  "mohamed.elghachi@ecpge.mp" => "Mohamed2001",
  "yassine.khalil@ecpge.mp" => "Khalilxporn",
  "basma.nahiz@ecpge.mp" => "Nahiz#x-ens",
  "youssef.cherrabi@ecpge.mp" => "Youssef#kh24",
  "user@ecpge.mp" => "admin@1234",
  "othmane.fatih@ecpge.mp" => "OthmaneX2004"
);

if (isset($users[$email]) && $users[$email] === $password) {
  // Successful login
  echo json_encode(['success' => true]);

  // Send email notification
  $to = $email;
  $subject = "Login Notification";
  $message = "You have successfully logged in.";
  $headers = "From: ibrahimlaklaa@gmail.com"; // Replace with your own email address
  mail($to, $subject, $message, $headers);
} else {
  // Invalid credentials
  echo json_encode(['success' => false, 'message' => 'Invalid credentials']);
}

$conn->close();
?>

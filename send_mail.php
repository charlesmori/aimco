<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input
    $name = htmlspecialchars($_POST['full_name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars($_POST['phone']);
    $service = htmlspecialchars($_POST['service']);
    $message = htmlspecialchars($_POST['message']);

    // Compose email
    $to = "info@aimco-int.com"; 
    $subject = "New Contact Form Submission";
    $body = "You have received a new message from your website:\n\n";
    $body .= "Full Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Service Interest: $service\n\n";
    $body .= "Message:\n$message\n";

    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Message sent successfully!'); window.location.href='contact.html';</script>";
    } else {
        echo "<script>alert('Failed to send message. Please try again.'); window.history.back();</script>";
    }
} else {
    echo "Invalid request method.";
}
?>

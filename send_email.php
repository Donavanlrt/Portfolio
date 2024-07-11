<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Adresse email où vous souhaitez recevoir les messages
    $to = "donavanlrt@gmail.com";

    $subject = "Nouveau message depuis le formulaire de contact";
    $message = "Nom: $name\n\nEmail: $email\n\nMessage:\n$message";

    // En-têtes pour l'envoi de l'email
    $headers = "From: $name <$email>";

    // Envoi de l'email
    if (mail($to, $subject, $message, $headers)) {
        echo "Votre message a été envoyé avec succès.";
    } else {
        echo "Erreur lors de l'envoi du message. Veuillez réessayer.";
    }
}
?>

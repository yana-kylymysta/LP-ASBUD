<?php 
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $text = isset($_POST['text']) ? $_POST['text'] : '';
    $name = htmlspecialchars($name);
    $email = htmlspecialchars($email);
 
    $fromName = "ASBUD";

    $subject = "Wniosek o informację zwrotną z witryny";
    
    $message = "<html>
                    <head>
                        <title>Wniosek o informację zwrotną z witryny</title>
                    </head>
                    <body>
                         <p style='margin: 20px 10px; font-size: 12pt;'><strong>Imię:</strong> " . $name . "</p>
                          <p style='margin: 20px 10px; font-size: 12pt;'><strong>E-mail:</strong> " . $email . "</p>";
    
    if (!empty($text)) {
        $message .= "<p style='margin: 10px 10px; font-size: 12pt;'><strong>Wiadomość:</strong> " . $text . "</p>";
    }
    
    $message .= "</body>
                </html>";

    $headers = "From: $fromName <asbudtomasz@wp.pl>\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    if (mail("zozulyaweb@gmail.com", $subject, $message, $headers)) {
        echo "Well";
    } else {
        echo "Error";
    }
}

?>
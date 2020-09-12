<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

$company = $_POST['company'];
$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$messageTitle = $_POST['messageTitle'];
$message = $_POST['message'];

$mail = new PHPMailer();

$mail->setFrom('noreply@elloredutores.com.br');
$mail->addAddress('contato@elloredutores.com.br');
$mail->Subject = 'Formulário de contato do site';

$mail->isHTML(true);
$mail->CharSet = 'UTF-8';
$mail->Encoding = 'base64';

$message = "De: $name <br>Email: $email <br>Empresa: $company <br>Telefone para contato: $tel <br>Motivo de contato: $messageTitle <br>Mensagem: $message <br> <br>Informações enviadas do formuário de contato do site ELLO REDUTORES.";
$mail->Body = $message;
$mail->AltBody = $message;

$sended = $mail->Send();

$mail->ClearAllRecipients();
$mail->ClearAttachments();

if ($sended) {
    echo "E-mail enviado com sucesso!";
    echo '<script>window.history.back();</script>';
} else {
    echo "Não foi possível enviar o e-mail.
    
    ";
    echo "Informações do erro: 
    " . $mail->ErrorInfo;
    echo '<script>window.history.back();</script>';
}

?>
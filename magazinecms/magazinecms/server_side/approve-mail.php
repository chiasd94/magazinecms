<?php
date_default_timezone_set('Etc/UTC');
// require 'PHPMailerAutoload.php';
function sendApproveMailToStudent($mmName,$studentName,$articleTitle,$magazine,$toEmail)
{
  $mail = new PHPMailer;
  $mail->isSMTP();
  $mail->SMTPDebug = 0;
  $mail->Debugoutput = 'html';
  $mail->Host = 'smtp.gmail.com';
  $mail->Port = 587;
  $mail->SMTPSecure = 'tsl';
  $mail->SMTPAuth = true;
  $mail->Username = "ndthinh94@gmail.com";
  $mail->Password = "nguyentranthao";
  $mail->setFrom('ndthinh94@gmail.com', 'Magazine CMS');
  // $mail->addReplyTo('replyto@example.com', 'First Last');
  $mail->addAddress($toEmail, 'MM');
  $mail->Subject = 'Your article '.$articleTitle.' has been aprroved';
  $mail->msgHTML('Dear '.$studentName.'! </br> MM '.$mmName.' has approve your article '.$articleTitle.' for magazine '.$magazine.' </br> Happy with it! ');
  $mail->AltBody = 'This is a plain-text message body';
  $mail->send();
  // if (!$mail->send()) {
  //     echo "Mailer Error: " . $mail->ErrorInfo;
  // } else {
  //     echo "Message sent!";
  // }
}

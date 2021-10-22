<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'phpmailer/src/Exception.php';
  require 'phpmailer/src/PHPMailer.php';

  $mail = new PHPMailer(true);
  $mail->Charset = 'UTF-8';
  $mail->setLanguage('ru', 'phpmailer/language');
  $mail->IsHTML(true);

  //От кого письмо
  $mail->setFrom('Заявка с сайта', 'Didi');
  //Кому отправить
  $mail->addAddress('didi.global.ua@gmail.com');
  //Тема письма
  $mail->Subject = 'Didi-Ua';

  //Тело письма
  $body = '<h1> Тестовое письмо</h1>';

  if(trim(!empty($_POST['name']))) {
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'<p>';
  }

  if(trim(!empty($_POST['email']))) {
    $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'<p>';
  }

  if(trim(!empty($_POST['tel']))) {
    $body.='<p><strong>Телефон:</strong> '.$_POST['tel'].'<p>';
  }

  $mail->Body = $body;

  //Отправляем
  if(!$mail->send()) {
    $message = 'Ошибка';
  } else {
    $message = 'Данные отправлены';
  }

  $response = ['message' => $message];


  header('Content-type: application/json');
  echo json_encode($response);
  ?>

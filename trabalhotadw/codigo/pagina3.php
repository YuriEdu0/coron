<?php
// inicia a session
session_start();

// armazena em uma variável o valor do campo 'nome' enviado via GET
$email = $_GET['email'];
$senha = $_GET['senha'];

// armazena o valor da variável 'nome' na session
$_SESSION['email'] = $email;
$_SESSION['senha'] = $senha;


header('Location: pagina2.php');

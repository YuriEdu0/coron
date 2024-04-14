<?php
// inicia a session
session_start();

// armazena em uma variável o valor do campo 'nome' enviado via GET
$nome = $_GET['nome'];
$sobrenome = $_GET['sobrenome'];

// armazena o valor da variável 'nome' na session
$_SESSION['nome'] = $nome;
$_SESSION['sobrenome'] = $sobrenome;



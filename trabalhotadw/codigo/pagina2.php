<?php
// inicia a session
session_start();

// armazena em uma variável o valor do campo 'nome' enviado via GET
$idade = $_GET['idade'];
$endereco = $_GET['endereco'];
$telefone = $_GET['telefone'];


// armazena o valor da variável 'nome' na session
$_SESSION['idade'] = $idade;
$_SESSION['endereco'] = $endereco;
$_SESSION['telefone'] = $telefone;


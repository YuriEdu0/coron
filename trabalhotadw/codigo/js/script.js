function validar() {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let idade = document.getElementById("idade").value;
    let endereco = document.getElementById("endereco").value;
    let telefone = document.getElementById("telefone").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
       
    if (nome == "") {
        // alert("erro");
        document.getElementById("nome").focus();
        document.getElementById("avisos").innerHTML = "Campo nome não pode ficar em branco!";
       
        return false;
    }
    if (sobrenome == "") {
        document.getElementById("sobrenome").focus();
        document.getElementById("avisos").innerHTML = "Campo sobrenome não pode ficar em branco!";
        return false;
    }
    if (idade == "") {
        document.getElementById("idade").focus();
        document.getElementById("avisos").innerHTML = "Campo idade não pode ficar em branco!";
        return false;
    }
    if (endereco == "") {
        document.getElementById("endereco").focus();
        document.getElementById("avisos").innerHTML = "Campo endereço não pode ficar em branco!";
        return false;
    }
    if (telefone == "") {
        document.getElementById("telefone").focus();
        document.getElementById("avisos").innerHTML = "Campo telefone não pode ficar em branco!";
        return false;
    }
    if (email == "") {
        document.getElementById("email").focus();
        document.getElementById("avisos").innerHTML = "Campo email não pode ficar em branco!";
        return false;
    }
    if (email == "") {
        document.getElementById("email").focus();
        document.getElementById("avisos").innerHTML = "Campo email não pode ficar em branco!";
        return false;
    }
    if (senha == "") {
        document.getElementById("senha").focus();
        document.getElementById("avisos").innerHTML = "Campo senha não pode ficar em branco!";
        return false;
    }

    
    
    
    
    alert("oi");
}



    function cadastrar(){
        var email = inpemail.value;
        var cnpj = inpcnpj.value;
        var senha1 = inpsenha.value;
        var senha2 = inpsenha2.value;
       
        if(email == '' || cnpj == '' || senha1 == '' || senha2 == '') {
            alert("Preencha todos os campos corretamente");
        } else if(senha1 != senha2){
            alert("As senhas não correspondem!");
        } else {
            alert("Perfeito, Cadastro realizado!")
        }
    }

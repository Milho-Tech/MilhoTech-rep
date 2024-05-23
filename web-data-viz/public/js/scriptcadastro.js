
    function cadastrar(){
        var email = email_ipnut.value;
        var cpf = cpf_input.value;
        var senha1 = senha_input.value;
        var senha2 = commfirmacao_senha_input.value;
       
        if(email == '' || cpf == '' || senha1 == '' || senha2 == '') {
            alert("Preencha todos os campos corretamente");
        } else if(senha1 != senha2){
            alert("As senhas não correspondem!");
        } else {
            alert("Perfeito, Cadastro realizado!");
            window.location.href = "indexlogin.html"

        }
    }

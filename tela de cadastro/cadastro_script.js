
    function cadastrar(){
        var empresa = input_empresa.value;
        var email = input_email.value;
        var cnpj = input_cnpj.value;
        var senha1 = input_senha1.value;
        var senha2 = input_senha2.value;

        if(empresa === '' || cnpj === '' || email === '' || senha1 === '' || senha2 === '') {
            alert("Preencha todos os campos corretamente");
        }else {
            if(senha1 !== senha2){
                alert("As senhas não correspondem!");
            } else {
                div_mensagem.innerHTML = "Perfeito, seja bem vindo! Se quiser que nosso sistema lembre de você, marque a opção na checkbox abaixo"
            }
        }
    }
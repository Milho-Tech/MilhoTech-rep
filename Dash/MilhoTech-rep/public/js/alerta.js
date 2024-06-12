var alertas = [];

function obterdados(idSilo) {
    fetch(`/medidas/tempo-real/${idSilo}`)
        .then(resposta => {
            if (resposta.status == 200) {
                resposta.json().then(resposta => {

                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    alertar(resposta, idSilo);
                });
            } else {
                console.error(`Nenhum dado encontrado para o id ${idSilo} ou erro na API`);
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados do aquario p/ gráfico: ${error.message}`);
        });

}

function obterdados2(idSilo) {
    fetch(`/medidas/tempo-real2/${idSilo}`)
        .then(resposta => {
            if (resposta.status == 200) {
                resposta.json().then(resposta => {

                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    alertar(resposta, idSilo);
                });
            } else {
                console.error(`Nenhum dado encontrado para o id ${idSilo} ou erro na API`);
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados do aquario p/ gráfico: ${error.message}`);
        });

}

function alertar(resposta, EmpresaId) {
    var temp = resposta[0].temperatura;

    var grauDeAviso = '';

    var limites = {
        muito_quente: 21,
        quente: 18,
        ideal: 16,
        frio: 14,
        muito_frio: 13
    };

    var classe_temperatura = 'cor-alerta';

    if (temp >= limites.muito_quente) {
        classe_temperatura = 'cor-alerta perigo-quente';
        grauDeAviso = 'perigo quente'
        grauDeAvisoCor = 'cor-alerta perigo-quente'
        exibirAlerta(temp, EmpresaId, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp < limites.muito_quente && temp >= limites.quente) {
        classe_temperatura = 'cor-alerta alerta-quente';
        grauDeAviso = 'alerta quente'
        grauDeAvisoCor = 'cor-alerta alerta-quente'
        exibirAlerta(temp, EmpresaId, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp < limites.quente && temp > limites.frio) {
        classe_temperatura = 'cor-alerta ideal';
        removerAlerta(EmpresaId);
    }
    else if (temp <= limites.frio && temp > limites.muito_frio) {
        classe_temperatura = 'cor-alerta alerta-frio';
        grauDeAviso = 'alerta frio'
        grauDeAvisoCor = 'cor-alerta alerta-frio'
        exibirAlerta(temp, EmpresaId, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp <= limites.muito_frio) {
        classe_temperatura = 'cor-alerta perigo-frio';
        grauDeAviso = 'perigo frio'
        grauDeAvisoCor = 'cor-alerta perigo-frio'
        exibirAlerta(temp, EmpresaId, grauDeAviso, grauDeAvisoCor)
    }

    var card;

    if (document.getElementById(`temp_aquario_${EmpresaId}`) != null) {
        document.getElementById(`temp_aquario_${EmpresaId}`).innerHTML = temp + "°C";
    }

    if (document.getElementById(`card_${EmpresaId}`)) {
        card = document.getElementById(`card_${EmpresaId}`)
        card.className = classe_temperatura;
    }
}

function exibirAlerta(temp, EmpresaId, grauDeAviso, grauDeAvisoCor) {
    var indice = alertas.findIndex(item => item.EmpresaId == EmpresaId);

    if (indice >= 0) {
        alertas[indice] = { EmpresaId, temp, grauDeAviso, grauDeAvisoCor }
    } else {
        alertas.push({ EmpresaId, temp, grauDeAviso, grauDeAvisoCor });
    }

    exibirCards();
}

function removerAlerta(EmpresaId) {
    alertas = alertas.filter(item => item.EmpresaId != EmpresaId);
    exibirCards();
}

function exibirCards() {
    alerta.innerHTML = '';

    for (var i = 0; i < alertas.length; i++) {
        var mensagem = alertas[i];
        alerta.innerHTML += transformarEmDiv(mensagem);
    }
}

function transformarEmDiv({ EmpresaId, temp, grauDeAviso, grauDeAvisoCor }) {

    var descricao = JSON.parse(sessionStorage.AQUARIOS).find(item => item.id == EmpresaId).descricao;
    return `
    <div class="mensagem-alarme">
        <div class="informacao">
            <div class="${grauDeAvisoCor}">&#12644;</div> 
            <h3>${descricao} está em estado de ${grauDeAviso}!</h3>
            <small>Temperatura capturada: ${temp}°C.</small>   
        </div>
        <div class="alarme-sino"></div>
    </div>
    `;
}

function atualizacaoPeriodica() {
    JSON.parse(sessionStorage.AQUARIOS).forEach(item => {
        obterdados(item.id)
    });
    setTimeout(atualizacaoPeriodica, 5000);
}

function atualizacaoPeriodica2() {
    JSON.parse(sessionStorage.AQUARIOS).forEach(item => {
        obterdados(item.id)
    });
    setTimeout(atualizacaoPeriodica2, 5000);
}
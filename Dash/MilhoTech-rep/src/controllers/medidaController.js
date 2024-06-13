var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {


    var idSilo = req.params.idSilo;
    var idEmpresa = req.params.idEmpresa;
    console.log("id silo:" + idSilo);
    console.log("id empresa:" + idEmpresa);

    console.log(`Recuperando as ultimas medidas`);

    medidaModel.buscarUltimasMedidas(idSilo, idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}



function buscarUltimasMedidastemp(req, res) {
    var idSilo = req.params.idSilo;
    var idEmpresa = req.params.idEmpresa;
    console.log("id empresa:" + idEmpresa);

    console.log(`Recuperando as ultimas medidas`);

    medidaModel.buscarUltimasMedidastemp(idSilo, idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// silo 2
function buscarUltimasMedidasSilo2(req, res) {
    var idSilo = req.params.idSilo;
    var idEmpresa = req.params.idEmpresa;
    console.log("id silo:" + idSilo);
    console.log("id empresa:" + idEmpresa);

    console.log(`Recuperando as ultimas medidas`);

    medidaModel.buscarUltimasMedidasSilo2(idSilo, idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarUltimasMedidastemp2(req, res) {
    var idSilo = req.params.idSilo;
    var idEmpresa = req.params.idEmpresa;
    console.log("id empresa:" + idEmpresa);

    console.log(`Recuperando as últimas medidas`);

    medidaModel.buscarUltimasMedidastemp2(idSilo, idEmpresa)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log("Houve um erro ao buscar as últimas medidas.", erro);
            res.status(500).json({ erro: erro.message });
        });
}

// silo 3
function buscarUltimasMedidasSilo3(req, res) {
    var idSilo = req.params.idSilo;
    var idEmpresa = req.params.idEmpresa;
    console.log("id silo:" + idSilo);
    console.log("id empresa:" + idEmpresa);

    console.log(`Recuperando as ultimas medidas`);

    medidaModel.buscarUltimasMedidasSilo3(idSilo, idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarUltimasMedidastemp3(req, res) {
    var idSilo = req.params.idSilo;
    var idEmpresa = req.params.idEmpresa;
    console.log("id empresa:" + idEmpresa);

    console.log(`Recuperando as últimas medidas`);

    medidaModel.buscarUltimasMedidastemp3(idSilo, idEmpresa)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log("Houve um erro ao buscar as últimas medidas.", erro);
            res.status(500).json({ erro: erro.message });
        });
}

// silo 4
function buscarUltimasMedidasSilo4(req, res) {
    var idSilo = req.params.idSilo;
    var idEmpresa = req.params.idEmpresa;
    console.log("id silo:" + idSilo);
    console.log("id empresa:" + idEmpresa);

    console.log(`Recuperando as ultimas medidas`);

    medidaModel.buscarUltimasMedidasSilo4(idSilo, idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarUltimasMedidastemp4(req, res) {
    var idSilo = req.params.idSilo;
    var idEmpresa = req.params.idEmpresa;
    console.log("id empresa:" + idEmpresa);

    console.log(`Recuperando as últimas medidas`);

    medidaModel.buscarUltimasMedidastemp4(idSilo, idEmpresa)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log("Houve um erro ao buscar as últimas medidas.", erro);
            res.status(500).json({ erro: erro.message });
        });
}

// medidada em tempo real
function buscarMedidasEmTempoReal(req, res) {

    var idSilo = req.params.idSilo;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idSilo).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarUltimasMedidastemp,
    buscarUltimasMedidasSilo2,
    buscarUltimasMedidastemp2,
    buscarUltimasMedidasSilo3,
    buscarUltimasMedidastemp3,
    buscarUltimasMedidasSilo4,
    buscarUltimasMedidastemp4
}
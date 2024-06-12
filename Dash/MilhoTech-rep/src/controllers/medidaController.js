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

    console.log(`Recuperando as ultimas medidas`);

    medidaModel.buscarUltimasMedidastemp2(idSilo, idEmpresa).then(function (resultado) {
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
    buscarUltimasMedidastemp2
}
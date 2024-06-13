var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

//silo1
router.get("/ultimas/:idSilo/:idEmpresa", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/ultimas/:idSilo/:idEmpresa", function (req, res) {
    medidaController.buscarUltimasMedidastemp(req, res);
});

router.get("/tempoReal/:idSilo", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
});

// silo2
router.get("/ultimas2/:idSilo/:idEmpresa", function (req, res) {
    medidaController.buscarUltimasMedidasSilo2(req, res);
});

router.get("/ultimas2/:idSilo/:idEmpresa", function (req, res) {
    medidaController.buscarUltimasMedidastemp2(req, res);
});

// silo 3
router.get("/ultimas3/:idSilo/:idEmpresa", function (req, res) {
    medidaController.buscarUltimasMedidasSilo3(req, res);
});

router.get("/ultimas3/:idSilo/:idEmpresa", function (req, res) {
    medidaController.buscarUltimasMedidastemp3(req, res);
});

// silo 3
router.get("/ultimas4/:idSilo/:idEmpresa", function (req, res) {
    medidaController.buscarUltimasMedidasSilo4(req, res);
});

router.get("/ultimas4/:idSilo/:idEmpresa", function (req, res) {
    medidaController.buscarUltimasMedidastemp4(req, res);
});

// VISÃO GERAL DA DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH

router.get("/maiortemp", function (req, res) {
    medidaController.maiortemp(req, res);
});


module.exports = router;



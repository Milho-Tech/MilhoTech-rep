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

router.get("/tempo-real/:idSilo", function (req, res) {
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

// silo 4
router.get("/ultimas4/:idSilo/:idEmpresa", function (req, res) {
    medidaController.buscarUltimasMedidasSilo4(req, res);
});

router.get("/ultimas4/:idSilo/:idEmpresa", function (req, res) {
    medidaController.buscarUltimasMedidastemp4(req, res);
});

// gerais
router.get("/ultimaMedicaoTemp1/:idSilo", function (req, res) {
    medidaController.ultimaMedicaoTemp1(req, res);
})

router.get("/ultimaMedicaoUmid1/:idSilo", function (req, res) {
    medidaController.ultimaMedicaoUmid1(req, res);
})

router.get("/ultimaMedicaoTemp2/:idSilo", function (req, res) {
    medidaController.ultimaMedicaoTemp2(req, res);
})

router.get("/ultimaMedicaoUmid2/:idSilo", function (req, res) {
    medidaController.ultimaMedicaoUmid2(req, res);
})

router.get("/ultimaMedicaoTemp3/:idSilo", function (req, res) {
    medidaController.ultimaMedicaoTemp3(req, res);
})

router.get("/ultimaMedicaoUmid3/:idSilo", function (req, res) {
    medidaController.ultimaMedicaoUmid3(req, res);
})

router.get("/ultimaMedicaoTemp4/:idSilo", function (req, res) {
    medidaController.ultimaMedicaoTemp4(req, res);
})

router.get("/ultimaMedicaoUmid4/:idSilo", function (req, res) {
    medidaController.ultimaMedicaoUmid4(req, res);
})

router.get("/ultimaMedicao/:idSilo", function (req, res) {
    medidaController.ultimaMedicao(req, res);
});

router.get("/maiorTemp/:idSilo", function (req, res) {
    medidaController.maiorTemp(req, res);
})

router.get("/menorTemp/:idSilo", function (req, res) {
    medidaController.menorTemp(req, res);
})

router.get("/menorUmid/:idSilo", function (req, res) {
    medidaController.menorUmid(req, res);
})

router.get("/maiorUmid/:idSilo", function (req, res) {
    medidaController.maiorUmid(req, res);
})



module.exports = router;

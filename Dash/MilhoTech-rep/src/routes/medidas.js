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

// silo2
router.get("/ultimas2/:idSilo/:idEmpresa", function (req, res) {
    medidaController.buscarUltimasMedidasSilo2(req, res);
});

router.get("/ultimas2/:idSilo/:idEmpresa", function (req, res) {
    medidaController.buscarUltimasMedidastemp2(req, res);
});

module.exports = router;
var express = require("express"); 
var router = express.Router(); 
var medidaController = require("../controllers/medidaController"); 
//silo1 
router.get("/ultimas/:idSilo/:idEmpresa", function (req, res) { 
    medidaController.buscarUltimasMedidas(req, res); }); 
    
    
router.get("/ultimas/temp/:idSilo/:idEmpresa", function (req, res) { 
    medidaController.buscarUltimasMedidastemp(req, res); }); 
    
// silo2 
router.get("/ultimas2/:idSilo/:idEmpresa", function (req, res) { 
    medidaController.buscarUltimasMedidasSilo2(req, res); }); 
    
router.get("/ultimas2/temp/:idSilo/:idEmpresa", function (req, res) { 
    medidaController.buscarUltimasMedidastemp2(req, res); }); 
    
module.exports = router;




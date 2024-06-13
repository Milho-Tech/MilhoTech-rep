require("../controllers/medidaController");
var database = require("../database/config");

function buscarUltimasMedidas(idSilo, idEmpresa) {

    var instrucaoSql = `SELECT fkEmpresa,
        umidade,
        temperatura,
                        dtRegistro,
                        DATE_FORMAT(dtRegistro,'%H:%i:%s') as dtRegistro
                    FROM Registro join silos on idsilos = fkSilo where fkSilo = ${idSilo} and fkEmpresa = ${idEmpresa};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidastemp(idSilo) {

    var instrucaoSql = `
 SELECT  
        temperatura,
                        DATE_FORMAT(dtRegistro,'%H:%i:%s') as momento_grafico, 
                        fkSilo 
                        FROM Registro WHERE fkSilo = 1
                    ORDER BY fkSilo ASC LIMIT 1

    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idSilo) {

    var instrucaoSql = `
 SELECT  
        umidade,
                        DATE_FORMAT(dtRegistro,'%H:%i:%s') as momento_grafico, 
                        fkSilo 
                        FROM Registro WHERE fkSilo = 2
                    ORDER BY fkSilo ASC
    `;

    console.log("Executando a instrução SQL : \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// silo2
function buscarUltimasMedidasSilo2() {

    var instrucaoSql = ` SELECT  
    umidade,
        temperatura,
                        DATE_FORMAT(dtRegistro,'%H:%i:%s') as momento_grafico, 
                        fkSilo 
                        FROM Registro WHERE fkSilo = 2
                    ORDER BY fkSilo ASC LIMIT 7;`

    console.log("Executando a instrução  SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidastemp2() {

    var instrucaoSql = `
 SELECT  
 temperatura,
       umidade ,
                        DATE_FORMAT(dtRegistro,'%H:%i:%s') as momento_grafico, 
                        fkSilo 
                        FROM Registro WHERE fkSilo = 2
                    ORDER BY fkSilo

    `;

    console.log("Executando a instrução  SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// silo3
function buscarUltimasMedidasSilo3() {

    var instrucaoSql = ` SELECT  
    umidade,
        temperatura,
                        DATE_FORMAT(dtRegistro,'%H:%i:%s') as momento_grafico, 
                        fkSilo 
                        FROM Registro WHERE fkSilo = 3
                    ORDER BY fkSilo ASC;`

    console.log("Executando a instrução  SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidastemp3() {

    var instrucaoSql = `
 SELECT  
 temperatura,
       umidade ,
                        DATE_FORMAT(dtRegistro,'%H:%i:%s') as momento_grafico, 
                        fkSilo 
                        FROM Registro WHERE fkSilo = 3
                    ORDER BY fkSilo

    `;

    console.log("Executando a instrução  SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// silo4
function buscarUltimasMedidasSilo4() {

    var instrucaoSql = ` SELECT  
    umidade,
        temperatura,
                        DATE_FORMAT(dtRegistro,'%H:%i:%s') as momento_grafico, 
                        fkSilo 
                        FROM Registro WHERE fkSilo = 4
                    ORDER BY fkSilo ASC;`

    console.log("Executando a instrução  SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidastemp4() {

    var instrucaoSql = `
 SELECT  
 temperatura,
       umidade ,
                        DATE_FORMAT(dtRegistro,'%H:%i:%s') as momento_grafico, 
                        fkSilo 
                        FROM Registro WHERE fkSilo = 4
                    ORDER BY fkSilo

    `;

    console.log("Executando a instrução  SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function maiortemp() {

    var instrucaoSql = `
 SELECT 
  fkSilo,
  temperatura,
  dtRegistro
FROM 
  Registro
ORDER BY 
  temperatura DESC
LIMIT 1;


    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarUltimasMedidastemp,
    buscarMedidasEmTempoReal,
    buscarUltimasMedidasSilo2,
    buscarUltimasMedidastemp2,
    buscarUltimasMedidasSilo3,
    buscarUltimasMedidastemp3,
    buscarUltimasMedidasSilo4,
    buscarUltimasMedidastemp4,
    maiortemp
}
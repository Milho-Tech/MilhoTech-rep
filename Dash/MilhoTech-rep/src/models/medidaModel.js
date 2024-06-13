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

    var instrucaoSql = ` SELECT  
    umidade,
        temperatura,
                        DATE_FORMAT(dtRegistro,'%H:%i:%s') as momento_grafico, 
                        fkSilo 
                        FROM Registro 
                    ORDER BY fkSilo ASC 
                    LIMIT 7`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idSilo) {

    var instrucaoSql = `
 SELECT  
        umidade,
        temperatura,
                        DATE_FORMAT(dtRegistro,'%H:%i:%s') as momento_grafico, 
                        fkSilo 
                        FROM Registro WHERE fkSilo = 1
                    ORDER BY fkSilo ASC LIMIT 7
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
                        FROM Registro 
                    ORDER BY fkSilo ASC 
                    LIMIT 7;`

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
                        FROM Registro 
                    ORDER BY fkSilo
                    LIMIT 7;
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
                        FROM Registro 
                    ORDER BY fkSilo ASC
                    LIMIT 7;`

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
                        FROM Registro 
                    ORDER BY fkSilo
                    LIMIT 7;
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
                        FROM Registro 
                    ORDER BY fkSilo 
                    LIMIT 7;`

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
                        FROM Registro 
                    ORDER BY fkSilo
                    LIMIT 7

    `;

    console.log("Executando a instrução  SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

<<<<<<< HEAD
function ultimaMedicaoTemp1(idSilo) {
    var instrucaoSql = `
        SELECT temperatura as temperatura_atual
        FROM registro
        WHERE fkSilo = 1
        ORDER BY dtRegistro DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function ultimaMedicaoUmid1(idSilo) {
    var instrucaoSql = `
        SELECT umidade as umidade_atual
        FROM registro
        WHERE fkSilo = 1
        ORDER BY dtRegistro DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function ultimaMedicaoTemp2(idSilo) {
    var instrucaoSql = `
        SELECT temperatura as temperatura_atual2
        FROM registro
        WHERE fkSilo = 2
        ORDER BY dtRegistro DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function ultimaMedicaoUmid2(idSilo) {
    var instrucaoSql = `
        SELECT umidade as umidade_atual2
        FROM registro
        WHERE fkSilo = 2
        ORDER BY dtRegistro DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function ultimaMedicaoTemp3(idSilo) {
    var instrucaoSql = `
        SELECT temperatura as temperatura_atual3
        FROM registro
        WHERE fkSilo = 3
        ORDER BY dtRegistro DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function ultimaMedicaoUmid3(idSilo) {
    var instrucaoSql = `
        SELECT umidade as umidade_atual3
        FROM registro
        WHERE fkSilo = 3
        ORDER BY dtRegistro DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function ultimaMedicaoTemp4(idSilo) {
    var instrucaoSql = `
        SELECT temperatura as temperatura_atual4
        FROM registro
        WHERE fkSilo = 4
        ORDER BY dtRegistro DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function ultimaMedicaoUmid4(idSilo) {
    var instrucaoSql = `
        SELECT umidade as umidade_atual4
        FROM registro
        WHERE fkSilo = 4
        ORDER BY dtRegistro DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function maiorTemp(idSilo) {
    var instrucaoSql = `
        SELECT fkSilo as silo_maiortemp
FROM registro
ORDER BY temperatura DESC
LIMIT 1;
    `;
=======
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

>>>>>>> d4be01abb084276aa7e168e00a0f0e79deeb9f85
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

<<<<<<< HEAD
function menorTemp(idSilo) {
    var instrucaoSql = `
        SELECT fkSilo as silo_menortemp
FROM registro
ORDER BY temperatura ASC
LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function menorUmid(idSilo) {
    var instrucaoSql = `
        SELECT fkSilo as silo_menorumid, MIN(umidade) as menor_umidade
FROM registro
GROUP BY fkSilo
ORDER BY menor_umidade ASC
LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function maiorUmid(idSilo) {
    var instrucaoSql = `
        SELECT fkSilo as silo_maiorumid, MAX(umidade) as maior_umidade
FROM registro
GROUP BY fkSilo
ORDER BY maior_umidade DESC
LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function ultimaMedicao(idSilo) {
    var instrucaoSql = `
        SELECT DATE_FORMAT(dtRegistro, '%d/%m/%y') as data_formatada
        FROM registro
        ORDER BY dtRegistro DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
=======
>>>>>>> d4be01abb084276aa7e168e00a0f0e79deeb9f85
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
<<<<<<< HEAD
    ultimaMedicaoUmid1,
    ultimaMedicaoTemp1,
    ultimaMedicaoUmid2,
    ultimaMedicaoTemp2,
    ultimaMedicaoUmid3,
    ultimaMedicaoTemp3,
    ultimaMedicaoUmid4,
    ultimaMedicaoTemp4,
    maiorTemp,
    menorTemp,
    menorUmid,
    maiorUmid,
    ultimaMedicao
=======
    maiortemp
>>>>>>> d4be01abb084276aa7e168e00a0f0e79deeb9f85
}
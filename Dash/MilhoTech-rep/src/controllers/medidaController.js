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

function buscarUltimasMedidas2(req, res) {


    var idSilo = req.params.idSilo;
    var idEmpresa = req.params.idEmpresa;
    console.log("id silo:" + idSilo);
    console.log("id empresa:" + idEmpresa);

    console.log(`Recuperando as ultimas medidas`);

    medidaModel.buscarUltimasMedidas2(idSilo, idEmpresa).then(function (resultado) {
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

// medidada em tempo real
function buscarMedidasEmTempoReal2(req, res) {
    var idSilo = req.params.idSilo;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal2(idSilo).then(function (resultado) {
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
// function buscarUltimasMedidasSilo2(req, res) {
//     var idSilo = req.params.idSilo;
//     var idEmpresa = req.params.idEmpresa;
//     console.log("id silo:" + idSilo);
//     console.log("id empresa:" + idEmpresa);

//     console.log(`Recuperando as ultimas medidas`);

//     medidaModel.buscarUltimasMedidasSilo2(idSilo, idEmpresa).then(function (resultado) {
//         if (resultado.length > 0) {
//             res.status(200).json(resultado);
//         } else {
//             res.status(204).send("Nenhum resultado encontrado!")
//         }
//     }).catch(function (erro) {
//         console.log(erro);
//         console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
//         res.status(500).json(erro.sqlMessage);
//     });
// }


// function buscarUltimasMedidastemp2(req, res) {
//     var idSilo = req.params.idSilo;
//     var idEmpresa = req.params.idEmpresa;
//     console.log("id empresa:" + idEmpresa);

//     console.log(`Recuperando as últimas medidas`);

//     medidaModel.buscarUltimasMedidastemp2(idSilo, idEmpresa)
//         .then(function (resultado) {
//             if (resultado.length > 0) {
//                 res.status(200).json(resultado);
//             } else {
//                 res.status(204).send("Nenhum resultado encontrado!");
//             }
//         })
//         .catch(function (erro) {
//             console.log("Houve um erro ao buscar as últimas medidas.", erro);
//             res.status(500).json({ erro: erro.message });
//         });
// }

// // silo 3
// function buscarUltimasMedidasSilo3(req, res) {
//     var idSilo = req.params.idSilo;
//     var idEmpresa = req.params.idEmpresa;
//     console.log("id silo:" + idSilo);
//     console.log("id empresa:" + idEmpresa);

//     console.log(`Recuperando as ultimas medidas`);

//     medidaModel.buscarUltimasMedidasSilo3(idSilo, idEmpresa).then(function (resultado) {
//         if (resultado.length > 0) {
//             res.status(200).json(resultado);
//         } else {
//             res.status(204).send("Nenhum resultado encontrado!")
//         }
//     }).catch(function (erro) {
//         console.log(erro);
//         console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
//         res.status(500).json(erro.sqlMessage);
//     });
// }


// function buscarUltimasMedidastemp3(req, res) {
//     var idSilo = req.params.idSilo;
//     var idEmpresa = req.params.idEmpresa;
//     console.log("id empresa:" + idEmpresa);

//     console.log(`Recuperando as últimas medidas`);

//     medidaModel.buscarUltimasMedidastemp3(idSilo, idEmpresa)
//         .then(function (resultado) {
//             if (resultado.length > 0) {
//                 res.status(200).json(resultado);
//             } else {
//                 res.status(204).send("Nenhum resultado encontrado!");
//             }
//         })
//         .catch(function (erro) {
//             console.log("Houve um erro ao buscar as últimas medidas.", erro);
//             res.status(500).json({ erro: erro.message });
//         });
// }

// // silo 4
// function buscarUltimasMedidasSilo4(req, res) {
//     var idSilo = req.params.idSilo;
//     var idEmpresa = req.params.idEmpresa;
//     console.log("id silo:" + idSilo);
//     console.log("id empresa:" + idEmpresa);

//     console.log(`Recuperando as ultimas medidas`);

//     medidaModel.buscarUltimasMedidasSilo4(idSilo, idEmpresa).then(function (resultado) {
//         if (resultado.length > 0) {
//             res.status(200).json(resultado);
//         } else {
//             res.status(204).send("Nenhum resultado encontrado!")
//         }
//     }).catch(function (erro) {
//         console.log(erro);
//         console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
//         res.status(500).json(erro.sqlMessage);
//     });
// }


// function buscarUltimasMedidastemp4(req, res) {
//     var idSilo = req.params.idSilo;
//     var idEmpresa = req.params.idEmpresa;
//     console.log("id empresa:" + idEmpresa);

//     console.log(`Recuperando as últimas medidas`);

//     medidaModel.buscarUltimasMedidastemp4(idSilo, idEmpresa)
//         .then(function (resultado) {
//             if (resultado.length > 0) {
//                 res.status(200).json(resultado);
//             } else {
//                 res.status(204).send("Nenhum resultado encontrado!");
//             }
//         })
//         .catch(function (erro) {
//             console.log("Houve um erro ao buscar as últimas medidas.", erro);
//             res.status(500).json({ erro: erro.message });
//         });
// }



// gerais
function ultimaMedicaoUmid1(req, res) {
    var idSilo = req.params.idSilo;

    medidaModel.ultimaMedicaoUmid1(idSilo)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]); // Retorna o primeiro (e único) resultado encontrado
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar a última temperatura.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function ultimaMedicaoTemp1(req, res) {
    var idSilo = req.params.idSilo;

    medidaModel.ultimaMedicaoTemp1(idSilo)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]); // Retorna o primeiro (e único) resultado encontrado
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar a última temperatura.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function ultimaMedicaoUmid2(req, res) {
    var idSilo = req.params.idSilo;

    medidaModel.ultimaMedicaoUmid2(idSilo)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]); // Retorna o primeiro (e único) resultado encontrado
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar a última temperatura.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function ultimaMedicaoTemp2(req, res) {
    var idSilo = req.params.idSilo;

    medidaModel.ultimaMedicaoTemp2(idSilo)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]); // Retorna o primeiro (e único) resultado encontrado
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar a última temperatura.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function ultimaMedicaoUmid3(req, res) {
    var idSilo = req.params.idSilo;

    medidaModel.ultimaMedicaoUmid3(idSilo)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]); // Retorna o primeiro (e único) resultado encontrado
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar a última temperatura.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function ultimaMedicaoTemp3(req, res) {
    var idSilo = req.params.idSilo;

    medidaModel.ultimaMedicaoTemp3(idSilo)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]); // Retorna o primeiro (e único) resultado encontrado
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar a última temperatura.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function ultimaMedicaoUmid4(req, res) {
    var idSilo = req.params.idSilo;

    medidaModel.ultimaMedicaoUmid4(idSilo)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]); // Retorna o primeiro (e único) resultado encontrado
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar a última temperatura.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function ultimaMedicaoTemp4(req, res) {
    var idSilo = req.params.idSilo;

    medidaModel.ultimaMedicaoTemp4(idSilo)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]); // Retorna o primeiro (e único) resultado encontrado
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar a última temperatura.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function maiorTemp(req, res) {
    var idSilo = req.params.idSilo;

    medidaModel.maiorTemp(idSilo)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]); // Retorna o primeiro (e único) resultado encontrado
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar a última temperatura.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function menorTemp(req, res) {
    var idSilo = req.params.idSilo;

    medidaModel.menorTemp(idSilo)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]); // Retorna o primeiro (e único) resultado encontrado
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar a última temperatura.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function menorUmid(req, res) {
    var idSilo = req.params.idSilo;

    medidaModel.menorUmid(idSilo)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]); // Retorna o primeiro (e único) resultado encontrado
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar a última temperatura.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function maiorUmid(req, res) {
    var idSilo = req.params.idSilo;

    medidaModel.maiorUmid(idSilo)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]); // Retorna o primeiro (e único) resultado encontrado
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar a última temperatura.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function ultimaMedicao(req, res) {
    var idSilo = req.params.idSilo;

    medidaModel.ultimaMedicao(idSilo)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]); // Retorna o primeiro (e único) resultado encontrado
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar a última medição.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });

    }

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
module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarUltimasMedidastemp,
    buscarUltimasMedidas2,
    buscarMedidasEmTempoReal2,
    buscarUltimasMedidastemp2,
    buscarUltimasMedidasSilo2,
    // buscarUltimasMedidastemp2,
    // buscarUltimasMedidasSilo3,
    // buscarUltimasMedidastemp3,
    // buscarUltimasMedidasSilo4,
    // buscarUltimasMedidastemp4,
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
    ultimaMedicao,
    obterdados
}
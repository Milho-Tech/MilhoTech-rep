-- CRIANDO O BANCO DE DADOS

CREATE DATABASE MilhoTech;

-- SELECIONANDO O BANCO DE DADOS

USE MilhoTech;

-- TABELA REGISTRO

CREATE TABLE registro(
  idregistro INT PRIMARY KEY auto_increment,
  temperatura DECIMAL(4,2),
  umidade CHAR(3),
  dtRegistro DATETIME,
  fkSilo INT,
  CONSTRAINT fkRegistroSilo
    FOREIGN KEY (fkSilo)
    REFERENCES silos(idsilos)
    );
-- TABELA DOS SILOS
    
    CREATE TABLE silos(
  idsilos INT PRIMARY KEY AUTO_INCREMENT,
  localizacao VARCHAR(45),
  fkEmpresa INT,
  CONSTRAINT fk_silos_Empresa1
    FOREIGN KEY (fkEmpresa)
    REFERENCES empresa (idEmpresa)
   );

-- TABELA DA EMPRESA
   
   CREATE TABLE Empresa (
  idEmpresa INT NOT null primary key auto_increment,
  nome VARCHAR(45) ,
  cnpj VARCHAR(45),
  endereco VARCHAR(45),
  cep CHAR(11)
  );

-- TABELA DOS FUNCIONÁRIOS
   
   CREATE TABLE Funcionario(
  idFuncionario INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(45),
  cargo VARCHAR(45),
  dtContrataçao DATE,
  fkEmpresa INT,
  email VARCHAR(45),
  senha VARCHAR(45),
  CONSTRAINT fkFuncionarioEmpresa
    FOREIGN KEY (fkEmpresa)
    REFERENCES Empresa (idEmpresa)
  );
  
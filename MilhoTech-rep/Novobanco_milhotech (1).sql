create database milhotec;
use milhotec;

/* Tabela de usuario fisico: */
create table usuario_fisico (
id_usuariofisico int primary key auto_increment, -- id do usuario fisico, chave primaria
nome varchar(50), -- Nome do usuario com ate 50 letras
cpf char(14) unique not null, -- cpf do usuario que tem 14 digitos, contando com os pontos e traço da formatação do cpf
email varchar(40), -- email do usuario com até 40 digitos
senha varchar(30), -- Senha do usuario com até 30 digitos
cargo varchar(25), -- Cargo do usuario com até 25 letras
constraint chkcargo check (cargo in ('Gerente', 'Supervisor', 'Engenheiro de alimentos') -- COnstraint que limita as opções do campo cargo para apenas Gerente', 'Supervisor', 'Engenheiro de alimentos
);

/* Tabela usuario juridico */

create table usuario_juridico (
id_usuariojuridico int primary key auto_increment, -- Id do usuario juridico.
nome varchar(30), -- Nome do usuario juridico (empresa) com até 30 digitos
cnpj char(18) unique, -- CNPJ do usuario juridico (empresa) com 18 digitos contando com pontos e traços da formatação do CNPJ
email varchar(40), -- Email do usuario juridico com até 40 digitos
senha varchar(30) -- Senha do usuario com até 30 digitos
);

/* Tabela do armazem */

create table armazem (
id_armazem int primary key auto_increment, -- id do armazem
endereco varchar(50), -- Endereço do armazem
cep char(9) -- CEP do armazem
);

/* Tabela de registro de temperatura e humidade */

create table registro (
id_registro int primary key not null auto_increment, -- Id do registro
temperatura int, -- campo da temperatura
humidade int, -- campo da humidade
dtRegistro datetime default current_timestamp, -- campo da data do registro, que tem a data definida como a hora em que o registro foi feito
fk_armazem int, -- chave estrangeira que identifica qual armazem é esse.
foreign key (fk_armazem) references armazem(id_armazem)
);

/* Tabela que relaciona usuarios fisicos e armazens */

create table rel_userfisico_armazem (
fk_userfisico int, -- chave estrangeira do usuario fisico
foreign key (fk_userfisico) references usuario_fisico(id_usuariofisico), 
fk_armazem int, -- chave estangeira do armazem
foreign key (fk_armazem) references armazem(id_armazem)
);

/* Tabela que relaciona usuarios juridicos com armazens */

create table rel_userjuridico_armazem (
fk_userjuridico int, -- Chave estrangeira do usuario juridico
foreign key (fk_userjuridico) references usuario_juridico(id_usuariojuridico),
fk_armazem int, -- chave estrangeira do armazem
foreign key (fk_armazem) references armazem(id_armazem)
);

/* Inserts */

insert into usuario_fisico (nome, cpf, email, senha, cargo) values
('Alexander Cavalcanti', '507.516.938-75', 'alexmota@gmail.com', 'al3xalcanti', 'Gerente'),
('Kaylla Vitória', '607.947.875-85', 'vicvickaylla@hotmail.com', 'f4v3l4v1v3', 'Engenheiro de alimentos'),
('Ana Beatris', '485.584.934-85', 'beatrisana@gmail.com', 'amosushi2006', 'Gerente'),
('Damiana Gomes', '124.975.435-13', 'daminhagoomes@hotmail.com', 'vovo19042004', 'Supervisor'),
('Alice Rocha', '238.482.327-24', 'ilicaroch@gmail.com', 'lilidragon', 'Supervisor');


insert into usuario_juridico (nome, cnpj, email, senha) values
('Viscontes & Sabugosas', '45.345.345/0001-82', 'viscontedesabugosa@hotmail.com', 'picapauamarelo'),
('Milhos Nobres', '75.347.345/0001-45', 'nobresmilhos@gmail.com', 'milhosdanobreza1500'),
('Good Corns', '45.234.432/0001-63', 'contactgoodcorns@hotmail.com', 'corns123good'),
('O Show do Milho', '23.456.425/0001-34', 'milhoshowcontato@gmail.com', 'silviomilhosantos'),
('SP Milho Farm', '12.344.543/0001-23', 'milhofarmail@hotmail.com', 'saopaulomilhofarm2021');


insert into armazem (endereco, cep) values
('Rua Dos Milharais, 234', '56745-765'),
('Rua Arthur Zacarias', '67885-87'),
('Rua Viola Davis', '50751-76'),
('Rua Laranjeiras', '23456-43'),
('Rua Haddok Lobo', '34563-83'),
('Rua 19 de abril', '93482-28'),
('Rua da Solitude', '93748-94'),
('Rua Pimenteiras', '34567-45'),
('Rua dos Tijolos Amarelos', '23479-93'),
('Rua Texas Carvalho', '84527-83');


insert into registro (temperatura, humidade, fk_armazem) values
(20, 57, 1),
(24, 60, 2),
(19, 62, 3),
(21, 55, 4),
(23, 59, 5);


insert into rel_userfisico_armazem values
(1,5),
(2,4),
(3,3),
(4,2),
(5,1);


insert into rel_userjuridico_armazem values
(1,2),
(1,6),
(2,7),
(3,8),
(4,9),
(5,10);
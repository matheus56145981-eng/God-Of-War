-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database gow;
use gow;

create table usuario(
id int primary key auto_increment,
nome_completo varchar(100),
email varchar(50),
senha varchar(10)
);

 create table perguntas(
 id int primary key auto_increment,
 pergunta varchar(200) 
 );
 
 create table respostas(
 usuario int,
 pergunta int,
 certa int,
 constraint fk_usuario foreign key(usuario) references usuario(id),
 constraint fk_pergunta foreign key(pergunta) references perguntas(id),
 constraint pk_composta primary key(usuario, pergunta)
 );
 insert into perguntas(pergunta) values
 ("Quem é o pai de Kratos na franquia"),
 ('')
 do arduino - dat-acqu-ino */
create database gow;
use gow;

create table usuario(
id int primary key auto_increment,
nome_completo varchar(100),
email varchar(50),
senha varchar(10)
);

 create table perguntas(
 id int primary key auto_increment,
 pergunta varchar(200) 
 );
 
 create table respostas(
 usuario int,
 pergunta int,
 certa int,
 constraint fk_usuario foreign key(usuario) references usuario(id),
 constraint fk_pergunta foreign key(pergunta) references perguntas(id),
 constraint pk_composta primary key(usuario, pergunta)
 );
 insert into perguntas(pergunta) values
 ("Quem é o pai de Kratos na franquia"),
 ('Qual o nome das Lâminas entregues por Ares a Kratos'),
 ('De acordo com o enredo de God of War II, qual Titã carrega os pilares do mundo em suas costas?'),
 ('Qual divindade da sabedoria guia Kratos durante sua jornada de vingança contra o Olimpo?'),
 ('Qual desses deuses foi o primeiro grande antagonista que Kratos derrotou no jogo original de 2005?'),
 ('Como Kratos escapou do submundo após ser traído e morto por Zeus no início de God of War II?');
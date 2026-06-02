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

var database = require("../database/config")

function registrarResposta(usuario, pergunta, certa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    var instrucaoSql = `
    INSERT INTO respostas (usuario, pergunta, certa) VALUES ('${usuario}', '${pergunta}', '${certa}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarAcertos(usuario){
    console.log("ACESSEI O MODEL respostasModel.js")

    var instrucaoSql = `
    SELECT SUM(certa) AS ACERTOS FROM respostas WHERE usuario = ${usuario};
    `;
    console.log("Executando instrução SQL \n" + instrucaoSql)
    return database.executar(instrucaoSql);
}

function mediaPontos(){
    console.log("ACESSEI O MODEL respostasModel.js")

    var instrucaoSql = `
    SELECT AVG(certa) AS ACERTOS FROM respostas;
    `;
    console.log("Executando instrução SQL \n" + instrucaoSql)
    return database.executar(instrucaoSql);
}
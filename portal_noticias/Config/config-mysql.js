// Fazendo o uso do modulo do MySQL 
var mysql = require('mysql'); 

// Atribuindo á variavel uma função que criará e realizará a conexão com a base de dados
var connMySQL = function(){

        // Setando os parametros da Conexão
        return mysql.createConnection({ 
            host: 'localhost',
            user: 'vinicius',
            password: '?3.K4@7MJB][',
            database: 'portal_noticias'
    });
}

// Retornando uma função que contem a função de conexão com o mysql
module.exports = function(){
    return connMySQL;
}
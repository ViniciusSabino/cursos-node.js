// Importando as bibliotecas necessarios para o projeto
var express = require('express'); 
var consign = require('consign');
var body_parser = require('body-parser');
var express_validator = require('express-validator'); 


// Funcão do Modulo do Expresss
var app = express(); 

 // Definindo que o EJS será agora o motor para geração de Views (HTML) da Aplicação
app.set('view engine','ejs');

// Apontando o Caminho Padrão das Views da Aplicação
app.set('views','./App/Views'); 

// Middleawares - São Funções que tem acesso aos objetos (req e res), 
app.use(body_parser.urlencoded({extended: true}));
app.use(express_validator());
app.use(express.static('./App/Public')); 

// Consign: Incluir automáticamente modulos da aplicação na subida do servidor
// Recuperar de forma única modulos da aplicação e automáticamente fazer todos os requires necessarios para o App.js
consign().include('App/Routes')
.then('Config/config-mysql.js')
.then('App/Models')
.then('App/Controllers')
.then('App/Repository')
.into(app);

module.exports = app;
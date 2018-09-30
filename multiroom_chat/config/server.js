// Importando os modulos para o projeto
var express = require('express');
var consign = require('consign');
var body_parser = require('body-parser');
var express_validator = require('express-validator');

// Iniciar o objeto do express
var app = express();

// Setar as variaveis 'view engine' e 'views do express
app.set('view-engine','ejs');
app.set('views','./app/views');

// Configurando os Middlewre 
app.use(express.static('./app/public')); // express.static 
app.use(body_parser.urlencoded({extended: true})); // body-parser
app.use(express_validator()); // Express-Validator


// Efetua o Autoload das rotas, dos models e dos controllers para o objeto app
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

// Exportar o objeto app
module.exports = app;
// Importando o modulo do MongoDb
var mongo = require('mongodb').MongoClient;
var assert = require('assert');

// Constantes informando o servidor do mongo e nome do banco de dados
const url =  "mongodb://localhost:27017";
const dbName = "got";

// Variavel contendo uma função de criação da conexão com o mongodb
var connMongoDB = function(dados, req, res){
    mongo.connect(url,function(err, client){
        assert.equal(null, err);
        const db = client.db(dbName);
        query(db,dados, req, res);
        client.close();
    });
};

function query(db, dados, req, res){
    var collection = db.collection(dados.collection);
    switch(dados.operacao){
        case "inserir":
            collection.insertOne(dados.modelo, dados.callback);
            break;
        case "buscar":
            
            if(dados.collection == 'usuarios'){
            collection.find(dados.modelo).toArray(function(err, result){

                // Caso possua o documento no resultado da consulta no mongo
                if(result[0] != undefined){

                    // Cria as variaveis de sessão com dados do cadastro
                    req.session.autorizado = true;
                    req.session.usuario = result[0];
                    req.session.username_usuario = result[0].usuario;
                    req.session.casa = result[0].casa;
                }
                // caso esteja autotorizado redireciona para a controller do jogo senão retorna para a index
                if(req.session.autorizado){
                   res.redirect("jogo");
                }else{
                   res.render("index",{validacao:{}});
                }
            });
        }
        if(dados.collection == 'jogo'){

            console.log(dados.modelo.valida);
            collection.find({usuario: dados.modelo.user}).toArray(function(err, result){

                // Verificando se possui os parametros do jogo
                if(result != undefined){

                    req.session.dados_jogo = result[0];
                    res.render('jogo.ejs',{img_casa: req.session.casa, game: req.session.dados_jogo, msg : dados.modelo.valida});
                }
                else{
                    res.send('não encontrou parametros para o jogo');
                }
                
            });
        }
            break;
        default:
            break;
    }
}

module.exports = function(){
        return connMongoDB;
};
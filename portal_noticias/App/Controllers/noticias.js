module.exports.noticias = function(application, req, res){
    
     // Como realizamos o autoload do arquivo dbConnection para dentro do app, podemos acessar diretamente esse arquivo que está no Config e 
    // atribuir a variavel connection o retorno desse modulo, que no caso é a criação da conexão com o banco
    var connection = application.Config.Infraestrutura_mysql.dbConnection();

    // Criação de uma variavel responsavel por realizar o acesso ao Banco de Dados, recebendo o modulo (noticiasModel)
    var noticiasDAO = new application.App.Models.DAL.NoticiasDAL(connection);
        
    // Chamando a função que o modulo retorna, enviando a conexão aberta e o callback que será executado quando a consulta for realizada
    noticiasDAO.getNoticias(function(error, result){
            
    // Enviando o resultado da consulta na View para quem realizou a requisição 
    res.render("noticias/noticias", {noticias : result}); 
         
    }); 
};

module.exports.noticia = function(application, req, res){

    var connection = application.Config.Infraestrutura_mysql.dbConnection();
    var noticiasDAO = new application.App.Models.DAL.NoticiasDAL(connection);
    var noticia = req.query.id_noticia;

    // Chamando a função responsavel por realizar a busca de uma notifia especifica
    noticiasDAO.getNoticia(function(error,result){
        res.render("noticias/noticia", {noticia : result})
    }, noticia);
};
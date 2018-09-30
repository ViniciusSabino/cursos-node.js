module.exports.index = function(application, req, res){

    var connection = application.Config.Infraestrutura_mysql.dbConnection();
    var noticiasDAO = new application.App.Models.DAL.NoticiasDAL(connection);

    noticiasDAO.get4UltimasNoticias(function(error, result){
        res.render("home/index", {noticias : result});
    });
}
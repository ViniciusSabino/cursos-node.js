module.exports.home = function(application, req, res){
    res.render("index.ejs",{validacao: {}});
}

module.exports.autenticar = function(application, req, res){
    
    var dados_form = req.body;
    
    req.assert('usuario','Usuario não pode ser vazio').notEmpty();
    req.assert('senha', 'Senha não pode ser vazia').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.render("index.ejs",{validacao:erros});
        return;
    }

    var connection = application.config.mongodb_config;
    var usuarios_dao = new application.app.repository.UsuariosRepository(connection);

    usuarios_dao.autenticar(dados_form,req, res);

}
module.exports.cadastro = function(application, req, res){
    res.render("cadastro.ejs", {validacao : {}, dados: {}});
}

module.exports.cadastrar = function(application, req, res){
    
    var dadosForm = req.body;

    req.assert('nome','Nome não pode ser vazio').notEmpty();
    req.assert('usuario','Usuario não pode ser vazio').notEmpty();
    req.assert('senha','Senha não pode ser vazio').notEmpty();
    req.assert('casa','Casa não pode ser vazio').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.render('cadastro.ejs',{validacao : erros, dados : dadosForm});
        return;
    }


    // Criando uma conexão com o mongodb
    var connection = application.config.mongodb_config;

    // variavel de acesso aos dados
    var usuarios_dao = new application.app.repository.UsuariosRepository(connection);
    var jogo_dao = new application.app.repository.JogoRepository(connection);

    usuarios_dao.inserirUsuario(dadosForm, req, res);
    jogo_dao.gerarParametros(dadosForm, req,res);


    res.send('Podemos Cadastrar');
}
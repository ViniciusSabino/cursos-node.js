module.exports.jogo = function(application, req, res){

    if(req.session.autorizado !== true){
        res.send('não autorizado');
        return;
    }

    var msg = ''
    
    if(req.query.msg != ''){
        msg = req.query.msg;
    }


    var connection = application.config.mongodb_config;
    var jogo_dao = new application.app.repository.JogoRepository(connection);
    
    // como a autenticação foi bem sucedida podemos recuperar os dados do usuario na variavel de sessao
    var usuario = req.session.username_usuario;
    jogo_dao.iniciaJogo(usuario, req, res, msg);
};


module.exports.sair = function(application, req, res){

    // Destroi a sessão atual e a função de callback, renderiza novamente a view index 
    req.session.destroy(function(err){
        res.render('index',{validacao:[]});
    });
};

module.exports.suditos = function(application, req, res){
    if(req.session.autorizado !== true){
        res.send('não autorizado');
        return;
    }
    res.render('aldeoes',{validacao:[]});
};

module.exports.pergaminhos = function(application, req, res){

    if(req.session.autorizado !== true){
        res.send('não autorizado');
        return;
    }
    res.render('pergaminhos',{validacao:[]});
};

module.exports.ordernar_acao_sudito = function(application, req, res){
    
    if(req.session.autorizado !== true){
        res.send('não autorizado');
        return;
    }
    var dados_form = req.body;

    req.assert('acao','Ação deve ser informada').notEmpty();
    req.assert('quantidade','Quantidade deve ser informada').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.redirect('jogo?msg=A');
        return;
    }

    dados_form.usuario = req.session.usuario;

    var connection = application.config.mongodb_config;
    var JogoDAO = new application.app.repository.JogoRepository(connection);

    JogoDAO.acao(dados_form, req, res);
};
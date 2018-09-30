module.exports.formulario_inclusao_noticia = function(application, req, res){
    
    // informando o arquivo .ejs (View) que será renderizado quando a requisição for feita, enviando alguns dados vazios para a view
    res.render("admin/form_add_noticia", {validacao : {}, noticia : {}}); 
}

module.exports.noticias_salvar = function(application, req, res){

    // Abrindo uma conexão com o MySQL
    var connection = application.Config.config-mysql();

    // Criando uma varivel de acesso aos dados do banco
    var dao = new application.App.Models.Respository.NoticiasRepository(connection);

    //Retornando o Json com os dados vindo da requisição post
     var dados_form = req.body;

    // Validação de campos preenchidos com o Express-Validator
    req.assert('titulo','Titulo é Obrigatório').notEmpty(); // titulo não pode ser vazio
    req.assert('resumo','Resumo é Obrigatório').notEmpty();
    req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100); // No mínimo 10 e no maximo 100 caracteres
    req.assert('autor','Autor é Obrigatório').notEmpty();
    req.assert('data_noticia', 'Data dos fatos é obrigatório').notEmpty();
    req.assert('data_noticia').isDate({format: 'YYYY-MM-DD'});
    req.assert('noticia','Noticia é Obrigatório').notEmpty();

    //Retornará true ou false caso tenha erros durante o processo de validação
    var erros = req.validationErrors();

    if(erros){

        // Caso possua erros de validação um objeto json será enviado para a View onde será representado os erros 
        res.render("admin/form_add_noticia", {validacao : erros, noticia : noticia});

        // apos ter feito o render já sai da controller
        return;
    }
    
    // caso não possua erros de validação
    dao.salvarNoticia(noticia, function(error, result){
        
        // Salvando a noticia e o calback irá retornar para a view noticias caso a inserção no banco ocorra de forma correta
        res.redirect('/noticias');
    });

}
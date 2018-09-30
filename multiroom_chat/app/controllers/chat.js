
module.exports.iniciaChat = function(application, request, response){
    
    var dados_form = request.body;
    
    request.assert('apelido','Nome ou Apelido é Obrigatório').notEmpty();
    
    request.assert('apelido','Nome ou Apelido precisa ter entre 3 e 15 caracteres').len(3,15);
    var dados_form = request.body;
    
    var erros = request.validationErrors();
    if(erros){
        response.render('index.ejs', {validacao : erros})
        return;
    }
    
    // Ao Realizar a requisição de entrar no chat podemos enviar um evento para disparar no lado do cliente e támbem enviar dados
    
    // msgParaCliente => Nome do evento que será transmitido para o cliente 
    application.get('io').emit('MsgParaCliente',
        {apelido : dados_form.apelido, 
            mensagem : ' acabou de entrar no chat'});

    // Apost emitir a mensagem para o lado do cliente, renderizamos a view do chat
    response.render('chat.ejs',{dados_form: dados_form});
    
};
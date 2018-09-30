module.exports = function(application){
    
    // Formulário para inclusão de uma noticia
    application.get('/formulario_inclusao_noticia', function(req, res){ 
        
        // Controller sendo responsavel por tratar as requisições e renderizar a exibição para o cliente
        application.App.Controllers.admin.formulario_inclusao_noticia(application, req, res);

     });

     // Recebendo os dados do fomulário de inclusão de noticia
     application.post('/noticias/salvar', function(req, res){ 
        
        application.App.Controllers.admin.noticias_salvar(application, req,res);

     });
}
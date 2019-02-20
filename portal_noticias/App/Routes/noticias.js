module.exports = function(application){ 

    // Listagem de Noticias
    application.get('/noticias', function(req, res){

        application.App.Controllers.noticias.noticias(application, req, res);
       
        });

        // Lista uma Noticia em Especifico 
        application.get('/noticia', function(req, res){

           application.App.Controllers.noticias.noticia(application, req, res);
      
        });
}
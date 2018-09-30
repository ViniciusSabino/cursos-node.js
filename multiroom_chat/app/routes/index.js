module.exports = function(application){

    application.post('/',function(request, response){
        response.render('index.ejs');        
    });

    application.get('/',function(request, response){
         application.app.controllers.index.home(application, request, response);  
    });
}
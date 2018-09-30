module.exports = function(application){
    
    // Com base na request da página Principal 'Home' (/) podemos executar uma ação (callback) que no caso chama a Controller
    application.get('/', function(req, res){ 
      application.App.Controllers.home.index(application, req, res); 
    });
  
};
// Importando o modulo que contem as configurações do servidor
var app = require('./Config/server'); 

 // O método listen irá escutar requisições na Porta 3000 e uma função de callback será executada na subida do servidor 
app.listen(3000, function(){
    console.log("Servidor em execução...");
});

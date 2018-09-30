// Semelhante a uma classe
function UsuariosRepository(connection){
    this._connection = connection;
}

UsuariosRepository.prototype.inserirUsuario = function(usuario,req, res){
    
    var dados = {

        operacao: "inserir", // Operação a ser realizada
        modelo: usuario, // Dado que será utilizada na operação com o mongodb
        collection: "usuarios", // Qual collection será manipulada no mongodb
        callback: function(err, result){ // função para ser executada como resposta da execução da operação no banco de dados
        
        }
    };

    this._connection(dados, req, res);  // Chamando a conexão e passando os dados necessarios para a operação 
}

UsuariosRepository.prototype.autenticar = function(usuario,req, res){

    var dados = {

        operacao: "buscar",
        modelo: usuario,
        collection: "usuarios", 
        callback: function(err, result){ 
    
        }
    };

    this._connection(dados, req, res);

};
module.exports = function(){
    return UsuariosRepository;
}
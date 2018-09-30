// Semelhante a uma classe
function JogoRepository(connection){
    this._connection = connection;
}

JogoRepository.prototype.gerarParametros = function(usuario,req, res){

    // Variavel contendo os parametros necessarios para serem exibidas na view do game
    var jogo = {usuario:usuario, 
                moeda:15,
                suditos:10,
                temor: Math.floor(Math.random() * 1000),
                sabedoria:  Math.floor(Math.random() * 1000),
                comercio:  Math.floor(Math.random() * 1000),
                magia:  Math.floor(Math.random() * 1000)
            };

    var dados = {

        operacao: "inserir", // Operação a ser realizada
        modelo: jogo, // Dado que será utilizada na operação com o mongodb
        collection: "jogo", // Qual collection será manipulada no mongodb
        callback: function(err, result){ // função para ser executada como resposta da execução da operação no banco de dados
        
        }
    };

    this._connection(dados, req, res);
};

JogoRepository.prototype.iniciaJogo = function(usuario,req, res, msg){

    var model = {user: usuario, valida: msg};

    var dados = {

        operacao: "buscar", // Operação a ser realizada
        modelo: model, // Dado que será utilizada na operação com o mongodb
        collection: "jogo", // Qual collection será manipulada no mongodb
        callback: function(err, result){ // função para ser executada como resposta da execução da operação no banco de dados
        
        }
    };

    this._connection(dados, req, res);
};

JogoRepository.prototype.acao = function(acao, req, res){

    let tempo = null;
    switch(acao.acao){
        case 1: tempo = 1 * 60 * 60000;
        case 2: tempo = 2 * 60 * 60000;
        case 3: tempo = 5 * 60 * 60000;
        case 4: tempo = 5 * 60 * 60000; 
    }

    var date = new Date();
    acao.acao_termina_em = date.getTime() + tempo;

    var dados = {
        operacao: "inserir",
        modelo: acao,
        collection:"acao",
        callback: function(err, result){
            
        }
    };

    this._connection(dados,req,res);

    res.redirect('jogo?msg=B');
}

module.exports = function(){
    return JogoRepository;
}
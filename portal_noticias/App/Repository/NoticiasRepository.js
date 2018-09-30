// Método de Implementação semelhando a uma classe em OO
function NoticiasRepository(connection){
    
    this._connection = connection;
}

// Funções contidas em atributos da classe 

NoticiasRepository.prototype.getNoticias =  function(callback){ // Lista todas as Noticias
    
    // Executando uma Query dentro do banco de dados, a função de callback diz o que será feito após a consulta ser realizada 
    this._connection.query('select * from noticias order by data_noticia desc', callback);
};


NoticiasRepository.prototype.getNoticia = function(callback, noticia){ // Lista uma noticia pelo seu id 

    this._connection.query('select * from noticias where id_noticia =' + noticia, callback)
};


NoticiasRepository.prototype.salvarNoticia = function(noticia,callback){ // Adicionando uma noticia
    this._connection.query('insert into noticias set ? ',noticia, callback)
};

NoticiasRepository.prototype.get4UltimasNoticias = function(callback){ // Lista as 5 ultimas noticias salvas 
    this._connection.query('select * from noticias order by data_noticia desc limit 4', callback);
}

module.exports = function(){
    
    return NoticiasRepository;
    
}
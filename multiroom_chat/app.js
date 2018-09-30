// Importando as configurações do servidor 
var app = require('./config/server');

// Parametrizando a porta de escuta
var server = app.listen(81, function(){
    console.log('servidor online');
});

// Socket.IO irá escutar na mesma porta que o servidor escuta requisições HTTP
var io = require('socket.io').listen(server);

// Criando uma variavel dentro do objeto do express
app.set('io',io);

// Criar a conexão por WebSocket 
io.on('connection', function(socket){
    
    console.log('Usuário Conectou');

    // Evento quando o usuário é disconectado
    socket.on('disconnect', function(){
        console.log('Usuário Desconectou');
    });

    // Evento que será disparando aqui no lado do servidor quando o cliente enviar uma mensagem
    socket.on('MsgParaServidor',function(data){
        
        // Emitindo o evento para o lado do cliente
        socket.emit('MsgParaCliente',{apelido: data.apelido, mensagem: data.mensagem}); // Para o cliente que enviou a mensagem
        socket.broadcast.emit('MsgParaCliente',{apelido: data.apelido, mensagem: data.mensagem}); // Para todos os usuário da Sala

        if(parseInt(data.apelido_atualizado_nos_clientes) == 0){
            
            // Atualiza a Relação de Participantes do Chat 
            socket.emit('ParticipantesCliente',{apelido: data.apelido});
            socket.broadcast.emit('ParticipantesCliente',{apelido: data.apelido});
        }
    });
});


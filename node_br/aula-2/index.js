// Objetivos:

// 0: Obter um usuário
// 1: Obter o número de telefone de um usuário a partir de um Id
// 2: Obter o endereço pelo id

function obterUsuario(callback) {
  setTimeout(function() {
    return callback(
      null,
      {
        id: 1,
        nome: "Vinicius",
        dataNascimento: new Date()
      },
      1000
    );
  });
}

function obterTelefone(idUsuario, callback) {
  setTimeout(function() {
    return callback(null, {
      telefone: 996806760,
      ddd: 19
    });
  }, 2000);
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: "Tereza Cristina",
      numero: 1
    });
  }, 2000);
}

const usuario = obterUsuario(function resolverUsuario(error, usuario) {
  if (error) {
    console.error("Deu ruim em  -> USUÁRIO", error);
    return;
  }

  obterTelefone(usuario.id, function resolverUsuario(error1, telefone) {
    if (error1) {
      console.error("Deu ruim em -> TELEFONE", error1);
      return;
    }

    obterEndereco(usuario.id, function resolverUsuario(error2, endereco) {
      if (error2) {
        console.error("Deu ruim em -> ENDEREÇO", error2);
        return;
      }

      console.log(
        `Nome do usuário: ${usuario.nome} ID: ${usuario.id} Data Nascimento: ${
          usuario.dataNascimento
        }`
      );
      console.log(`Telefone: ${telefone.telefone} DDD: ${telefone.ddd}`);
      console.log(`Endereço: ${endereco.rua} Número: ${endereco.numero}`);
    });
  });
});

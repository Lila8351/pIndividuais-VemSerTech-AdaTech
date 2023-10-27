// Não alterar este código, a menos que haja uma boa justificativa.
import arrayClientes from './clientes.js';
import { body } from './bodyTemplate.js'

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
// ARQUIVO DAS FUNCOES

// const enviarEmail = (addressee, body) => {
//     try {
//         if (!addressee) {
//             throw new Error("Um destinatário precisa ser fornecido ao enviar um e-mail.");
//           }
        
//         if (!body) {
//            throw new Error("O corpo da mensagem precisa ser fornecido ao enviar um e-mail.");  
//         }
//         // comandos para enviar o email

//     } catch (error) {
//         console.error(error.message);
//     }
    
//     }
  
  //   console.log(
  //     `
  //       De: news@carstore.com
  //       Para: ${addressee}
  //       Assunto: ${subject}
        
  //       ${body}
        
  //       CarStore - Aqui você encontra o seu carro novo
  //     `
  //   );
  
  //   return { status: "Sucess", message: "E-mail enviado com sucesso!" };
  // ;

  function incluirCliente(){
    const clienteNovo = {};

    rl.question("Digite o nome do cliente", (nome) => {
        clienteNovo.nome = nome;
        rl.question("Cliente quer receber propaganda? Para sim, digite 1, para não, digite 0", (propaganda) =>{
            clienteNovo.recebePropaganda = propaganda;
            rl.question("Digite o e-mail do cliente", (email) => {
                clienteNovo.email = email;
                rl.close();
                arrayClientes.push(clienteNovo);
            })
        })
    })
    //arrayClientes.push(clienteNovo);
}

function addInfoCliente(n){
  const nome = arrayClientes[n].nome;

  rl.question("Digite a opção do que deseja fazer: 1-carro de entrada  2-adicionar restricao 3-opcao consorcio", (opcao) => {
    switch (opcao) {
      case 1:
      const carroEntrada = prompt( nome +  ' usará carro como entrada? 1-sim 2-nao');
      arrayClientes[n].carroEntrada = carroEntrada;
        break;
      case 2:
      const temRestricao = prompt( nome + ' possui restricao de credito? 1-sim 2-nao');
      arrayClientes[n].restricao = temRestricao;
        break;
      case 3:
      const consorcio = prompt( nome + ' tem interesse em adquirir consorcio? 1-sim 2-nao');
      arrayClientes[n].consorcio = consorcio;
        break;
      default:
        console.log("Não entendi te entendi. Digita um número de 1 a 3 para dizer o que você quer fazer.");
    }
  
    rI.close()
  });
}

function selecionaCliente(n) {
  const cliente = arrayClientes[n];
  return {
    nome: cliente.nome,
    email: cliente.email,
    propaganda: cliente.recebePropaganda,
    restricao: cliente.restricao,
    consorcio: cliente.consorcio
  };
}

// const informacoesCliente = selecionaCliente(0); // Exemplo de uso com o primeiro cliente
// console.log(informacoesCliente.nome);
// console.log(informacoesCliente.propaganda);


const verificarData = () => {
  const hoje = new Date();
  const diaSemana = hoje.getDay();
  return diaSemana;
}

function enviarEmail (n){
  
  if (selecionaCliente(n).propaganda === "1" && verificarData() === "1"){
    //construir o email
  }
}

module.exports = { enviarEmail, incluirCliente, addInfoCliente, verificarData, selecionaCliente }

// Não alterar este código, a menos que haja uma boa justificativa.
import arrayClientes from './clientes.js';
import { body } from './bodyTemplate.js'

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

function verificarData(){
  const hoje = new Date();
  const diaSemana = hoje.getDay();
  return diaSemana;
}
const segundaFeira = verificarData();
const aceitaPropaganda = selecionaCliente(n).propaganda;

function enviarEmail (n){
  
  `De: news@carstore.com
   Para: ${selecionaCliente(n).email}
   Assunto: Oferta imperdível!
   ${body(selecionaCliente(n))}
   CarStore - Aqui você encontra o seu carro novo
   `
}


// ARQUIVO DAS FUNCOES

// const enviarEmail = (addressee, body) => {
  function construirEmail(){
    try {
      if (selecionaCliente(n).email === null){  
        throw new Error("Um destinatário precisa ser fornecido ao enviar um e-mail.");
      }
      if (segundaFeira === "1" && aceitaPropaganda === "1"){
        enviarEmail(n);
      }
              
      //CODIGO PRA MANDAR O EMAIL
    } catch (error) {
      console.error(error.message);
    }
  }
        
//           console.log(
//             `
//               De: news@carstore.com
//               Para: ${addressee}
//               Assunto: ${subject}
              
//               ${body}
              
//               CarStore - Aqui você encontra o seu carro novo
//             `
//           );
        
//           return { status: "Sucess", message: "E-mail enviado com sucesso!" };
//         ;
// //    

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

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

module.exports = { enviarEmail, incluirCliente, addInfoCliente, verificarData, selecionaCliente }

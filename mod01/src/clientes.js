import { ClientRequest } from 'http';

// armazena array dos objetos "clientes".
arrayClientes = [{"nome": "fulanin", 
"recebePropaganda": "1", 
"email": "fulanin@gmail.com"
},
{"nome": "betazin",
"recebePropaganda": "1", 
"email": "betazin@gmail.com"
}];

export function incluiCliente(){
    const clienteNovo = {};
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

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
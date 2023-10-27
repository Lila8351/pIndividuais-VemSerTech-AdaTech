import { descontoKit, ofertaTrocaUsado } from './ofertas.js';
import arrayClientes from './clientes.js'

function selecionaCliente(n){
    const nome = arrayClientes[n].nome;
    const consorcio = arrayClientes[n].consorcio;
    const restricao = arrayClientes[n].restricao;
    const adresse = arrayClientes[n].email;
    const propaganda = arrayClientes[n].recebePropaganda;
    return nome, propaganda, restricao, adresse, consorcio;
}


export const body = () =>`
Oi, ${nome}! 
${ofertaTrocaUsado}
Podemos conversar mais para a realização do seu sonho de cheirinho de carro novo?
Também tem novidade sobre os acessórios! 
${descontoKit}
E ai, o que me diz?`
;
// filtrar clientes que aceitam consorcio
// filtrar clientes com restricao

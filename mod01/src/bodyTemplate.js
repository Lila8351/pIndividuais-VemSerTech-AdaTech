import { descontoKit, ofertaTrocaUsado } from './ofertas.js';
import clientes from './clientes.js'

export const body = ( clientes, descontoKit, ofertaTrocaUsado) =>`
Oi, ${clientes.nome}! 
Lembra que voce queria trocar seu carro ainda este ano?
Tenho uma novidade que pode tornar isso possível!
${ofertaTrocaUsado}
Podemos conversar mais para a realização do seu sonho de cheirinho de carro novo?
Também tem novidade sobre os acessórios! 
${descontoKit}
E ai, o que me diz?`
;


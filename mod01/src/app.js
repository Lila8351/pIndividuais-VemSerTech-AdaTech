// Não alterar este código, a menos que haja uma boa justificativa.
import clientes from './clientes.js';
import { body } from './bodyTemplate.js'


const enviarEmail = (addressee, subject, body) => {
    try {
        if (!addressee) {
            throw new Error("Um destinatário precisa ser fornecido ao enviar um e-mail.");
          }
        
        if (!subject) {
            throw new Error("O campo de assunto não deveria estar vazio ao enviar um e-mail.");
          }
        
        if (!body) {
           throw new Error("O corpo da mensagem precisa ser fornecido ao enviar um e-mail.");  
        }
        // comandos para enviar o email

    } catch (error) {
        console.error(error.message);
    }
    
    }
  
    console.log(
      `
        De: news@carstore.com
        Para: ${addressee}
        Assunto: ${subject}
        
        ${body}
        
        CarStore - Aqui você encontra o seu carro novo
      `
    );
  
    return { status: "Sucess", message: "E-mail enviado com sucesso!" };
  ;
  
  module.exports = enviarEmail;
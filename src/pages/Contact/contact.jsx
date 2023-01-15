import React from "react";
import './contact.css';
import fundo from './download.jpeg';

const envioDados = (event) => {
  event.preventDefault()
}

export const Contact = () => {

  return(
    <div className="container">
    <div className="image">
    <img src={fundo}/>
    
    </div>
    <div>
      <h1> Fale com a gente!</h1>
      <article>
        <h2>
        <p>Nos escreva uma mensagem ou se preferir nos adicione no WhatsApp</p>
        <p>+55 XX 9XXXX-XXXX</p>
        </h2>
      </article>
      <form onSubmit={envioDados}>
        <input type="text" name="Nome" size="40" autoFocus placeholder="Digite seu Nome" required></input><br/>
        
        <input type="email" name="email" size="40" placeholder="Digite seu email" required></input><br/>

        <input type='tel' name="fone" size="40" placeholder="Digite seu Telefone" required></input><br/><br/>

      <textarea id="mensagem" name="mensagem" rows={10} cols={50} placeholder="Digite sua mensagem!" required></textarea><br/><br/>

        <button>Enviar</button>
      </form>
      
    </div>
   
    </div>
    ); 

}
    


export default Contact; 
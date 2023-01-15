import './login.css'; 
import avatar from './polar2.jpeg'; 

export default function LoginPage () {
    return (
        <div className="login">
        <div className="avatar">
            <img src={avatar}/> 
        </div>
       <h2>Login</h2>
       <h3>Bem-Vindo de Volta!</h3>
       <form className='loginForm'>
        <div className='textbox'>
        <input type='email' placeholder='Nome de Usuário'/>
        </div>
        <div className='textbox'>
        <input type='password' placeholder='Senha'/>
        </div>
        <button type='submit'> LOGIN </button>
        <a href='http://website.com'> Esqueceu a senha?</a>
        </form>
        </div>
    );
}
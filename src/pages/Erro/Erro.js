import { Link } from 'react-router-dom'; 
import './erro.css'; 

function Erro(){
    return(
        <div className='container'>
            <div id="clouds">
            <div className='cloud x1'></div>
            <div className='cloud x1_5'></div>
            <div className='cloud x2'></div>
            <div className='cloud x3'></div>
            <div className='cloud x4'></div>
            <div className='cloud x5'></div>
        </div>
        <div className='c'>
            <div className='_404'>404</div>
            
            <div className='_1'>A PÁGINA</div>
            <div className='_2'> NÃO FOI ENCONTRADA</div>
            <br/>
            <br/>
            <br/>
            <div className='notFound'>
            <Link to='/'> Página inicial </Link>
            </div>
        </div>

        </div>
        
    ); 
}

export default Erro; 
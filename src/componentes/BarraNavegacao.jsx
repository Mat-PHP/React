import estilo from'./BarraNavegacao.module.css';
import { Link } from 'react-router-dom';

export function BarraNavegacao(){

    return(
        <nav className={estilo.barranavegacao}>
            <ul>
               <li><Link to='/'>Home</Link></li>
                <li><Link to ='livro'>Livro</Link></li>
                <li><Link to= ' cruriosidade'>Curiosidade</Link></li>                
                
                <li>Livro</li>
                <li>Curiosidade</li>
            </ul>
        </nav>
    )
}
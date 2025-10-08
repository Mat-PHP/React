import estilo from'./BarraNavegacao.module.css';

export function BarraNavegacao(){

    return(
        <nav className={estilo.barranavegacao}>
            <ul>
                <li>Home</li>
                <li>Livro</li>
                <li>Curiosidade</li>
            </ul>
        </nav>
    )
}
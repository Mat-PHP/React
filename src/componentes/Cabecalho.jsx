//etou fazemdo uma função que pode ser chamada em outro lugar
//cabecalho o do meu componente e o mesmo do arquivo 
//()receba paramentros
//{} e o script da minha funcao 
//todo return executa somente uma tag maior
import estilo from './Cabecalho.module.css';

export function Cabecalho(){
    return(
        <header className={estilo.cabecalho}>
            <h1 className={estilo.titulo}>Cabecalho</h1>

        </header>
    )
}
import { Cabecalho } from '../componentes/Cabecalho'
import { BarraNavegacao } from '../componentes/BarraNavegacao'
import { Outlet } from 'react-router-dom'

export function Inicial(){
    return(

    
    
    <>
    <Cabecalho/>
    <BarraNavegacao/>
    <Outlet/>
    </>
    )
}
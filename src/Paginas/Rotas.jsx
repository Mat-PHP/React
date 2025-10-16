import { Route  } from "react-router-dom";
import{Home} from '../Paginas/Home';
import { Livros } from '../Paginas/Livro';
import { Curiosidade } from "../Paginas/Curiosidade";
import { Inicial } from "./Inicial";

export function Rotas(){
    return(
        <Routes>
            <Route path='/' element={<Inicial/>}>
                <Route index element={<Home/>}/>
                <Route path='livro' element={<Livros/>}/>
                <Route path= 'curiosidade' element= {<Curiosidade/>}/>

            
            </Route>
        </Routes>
    )

}
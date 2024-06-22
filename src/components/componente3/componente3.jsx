import { DivMarcas,Img } from "./componente3";
import Times from '../../assets/images/b-2.png';
import Cean from '../../assets/images/b-3.png';


const Marcas = () =>{
    return(
        <DivMarcas>
            <Img src={Times}/>
            <Img src={Cean}/>
        </DivMarcas>
    )
}
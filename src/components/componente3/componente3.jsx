import { Comp3 } from "./comp3";


const Componente3 = ({url, titulo2, parrafo}) => {
    return (
        <>
        <Comp3>
            <img src={url} alt="" />
            <h2>{titulo2}</h2>
            <p>{parrafo}</p>
        </Comp3>
        </>
    );
}

export default Componente3;
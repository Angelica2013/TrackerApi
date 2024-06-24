import { Container3 } from "./comp3";


const Componente3 = ({url, titulo, parrafo}) => {
    return (
        <>
        <Container3>
            <img src={url} alt="" />
            <h2>{titulo}</h2>
            <p>{parrafo}</p>
        </Container3>
        </>
    );
}

export default Componente3;

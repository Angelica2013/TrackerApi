import { Container1 } from "./styleComponents1";



const Componente1 = ({titulo, parrafo, nomButton}) => {


    return (
        <>
            <Container>
                <h1>{titulo}</h1>
                <p>{parrafo}</p>
                <button>{nomButton}</button>
            </Container>
        </>
    );
}

export default Componente1;
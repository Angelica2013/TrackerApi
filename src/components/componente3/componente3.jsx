import { Container3 } from "./comp3";


const Card = ({url, titulo2, parrafo}) => {
    return (
        <>
        <Container3>
            <img src={url} alt="" />
            <h2>{titulo2}</h2>
            <p>{parrafo}</p>
        </Container3>
        </>
    );
}

export default Card;
import { Container6 } from "./styleComponente6";

const Componente6 = ({ parrafo, imgUrl }) => {
    return (
        <>
            <Container6>

                <img src={imgUrl}></img>
                <div>
                    <h3>9 Sept 2020  21Comment</h3>
                    <p>{parrafo}</p>
                </div>
                <button>Continue</button>

            </Container6>
        </>
    )
}

export default Componente6;
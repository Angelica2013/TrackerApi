import { Comp4 } from "./styleComponente4";



const Component4 = ({ imgUrl, titulo2, parrafo2 }) => {
    return (
        <>
            <Comp4>

                <img src={imgUrl} alt="" />
                <h2>{titulo2}</h2>
                <p>{parrafo2}</p>

            </Comp4>
        </>
    );
}

export default Component4;
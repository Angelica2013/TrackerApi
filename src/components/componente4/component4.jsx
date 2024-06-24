import styled from "styled-components";


const Componente4 = ({imgUrl, titulo2, parrafo2}) => {
    return (
        <>
        <img src={imgUrl} alt="" />
        <h2>{titulo2}</h2>
        <p>{parrafo2}</p>
        </>
    );
}

export default Componente4;
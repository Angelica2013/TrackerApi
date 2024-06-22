import styled from "styled-components";
import GlobalStyle from "../styled/GlobalStyles";
import Componente1 from "../components/component1/compo";
import Componente2 from "../components/componente2/Componente2";
import Phones from '../assets/images/phones.png'
import Marcas from "../components/componente3/componente3";


const Home = () => {
    return (
        <>
            <GlobalStyle/>
            <ContainerHome1>
                

                <Componente1
                    titulo="Download the covid app for get latest update"
                    parrafo="Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.The corona virus COVID-19 is affecting 210 countries & territories around the world and 2 international conveyances. "
                    nomButton="HOW TO PROJECT"
                />
                <Componente2 
                phones1 = {Phones}
                />
            </ContainerHome1>



            <ContainerHome2>
                <p>App Feature</p>
                <h1>Basic Feature You Will Get When You Use</h1>

            </ContainerHome2>
            <Marcas/>
        </>
    );
}


export const ContainerHome1 = styled.div`
    display: flex;
    margin-top: 50px;
    padding: 60px 120px;
    justify-content: center;
    height: 80vh;
    align-items: center;
    background: linear-gradient(to bottom, #06cdec, rgb(29, 12, 157));
`
export const ContainerHome2 = styled.div`
    display: flex;
    padding: 60px 120px;
    justify-content: center;
    background-color: #171133;
    height: 100vh;
`


export default Home;
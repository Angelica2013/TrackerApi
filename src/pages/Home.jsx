import GlobalStyle from "../styled/GlobalStyles";
import Componente1 from "../components/component1/compo";
import Componente2 from "../components/componente2/Componente2";
import Phones from '../assets/images/phones.png';
import { ContainerHome1, ContainerHome2 } from "../styled/Home";
import Componente3 from "../components/componente3/componente3";
import icono1 from "../assets/images/icons/covid-orange.svg"



const Home = () => {
    return (
        <>
            <GlobalStyle />
            <ContainerHome1>
                <Componente1
                    titulo="Download the covid app for get latest update"
                    parrafo="Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.The corona virus COVID-19 is affecting 210 countries & territories around the world and 2 international conveyances."
                    nomButton="HOW TO PROJECT"
                />
                <Componente2 phones1={Phones} />
            </ContainerHome1>

            <ContainerHome2>
                <p>App Feature</p>
                <h1>Basic Feature You Will Get When You Use</h1>
            </ContainerHome2>

            <Componente3
            url = {icono1}
            titulo2 = "holas"
            parrafo="lorem osandisabndkjsa aheosaijdsa hdosandsa"
            />

        </>
    );
}

export default Home;

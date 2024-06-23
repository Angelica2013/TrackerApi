import GlobalStyle from "../styled/GlobalStyles";
import Componente1 from "../components/componente1/componente1";
import Componente2 from "../components/componente2/Componente2";
import Card from "../components/componente3/componente3"
import Componente5 from "../components/componente5/componente5";
import Phones from '../assets/images/phones.png';
import { Section1,Section1B } from "../styled/styleSections";

import icono1 from "../assets/images/icons/covid-orange.svg"



const Home = () => {
    return (
        <>
            <GlobalStyle />
            <Section1>
            <Componente1
                titulo="Download the covid app for get latest update"
                parrafo="Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.The corona virus COVID-19 is affecting 210 countries & territories around the world and 2 international conveyances."
                nomButton="HOW TO PROJECT"
                />
                <Componente2 phones1={Phones} />
            </Section1>

            <Section1>
            <Componente2 phones1={Phones} />
                <Componente1
                    titulo="Download the covid app for get latest update"
                    parrafo="Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.The corona virus COVID-19 is affecting 210 countries & territories around the world and 2 international conveyances."
                    nomButton="HOW TO PROJECT"
                />
                </Section1>
                <Section1B>
                <p>App Feature</p>
                <h1>Basic Feature You Will Get When You Use</h1>
                </Section1B>

            <Componente3
            url = {icono1}
            titulo2 = "holas"
            parrafo="lorem osandisabndkjsa aheosaijdsa hdosandsa"
            />
            <>
                <Componente5
                />
            </>
        </>
    );
}

export default Home;

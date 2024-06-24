import GlobalStyle from "../styled/GlobalStyles";
import Componente2 from "../components/componente2/Componente2";
import Phones from '../assets/images/phones.png';
import Phone1 from '../assets/images/mobiles.png';
import { Section1, Section1B, Section3, Section4, Section5, Titulos } from "../styled/styleSections";
import Component1 from "../components/componente1/componente1"
import icono1 from "../assets/images/icons/covid-orange.svg"
import Component3 from "../components/componente3/componente3"
import Component4 from "../components/componente4/component4";
import Componente5 from "../components/componente5/componente5";


const Home = () => {
    return (
        <>
            <GlobalStyle />

            <Section1>

                <Component1
                    titulo="Download the covid app for get latest update"
                    parrafo="Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.The corona virus COVID-19 is affecting 210 countries & territories around the world and 2 international conveyances."
                    nomButton="HOW TO PROJECT"
                />
                <Componente2 phones1={Phones} />
            </Section1>

            <Titulos>
                <h2>App Feature</h2>
                <h1>Basic Feature You Will Get <br /> When You Use</h1>
            </Titulos>


            <Component3
                url={icono1}
                titulo="holas"
                parrafo="lorem osandisabndkjsa aheosaijdsa hdosandsa"
            />


            <Section3>

                <Componente2 phones1={Phone1} />
                <Component1
                    titulo="Stay Home, And Prayer For Victim"
                    parrafo="Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold. Shortness of breath can be a third -- and very serious -- manifestation of Covid-19, and it can occur on its own, without a cough."
                    nomButton="DOWNLOAD NOW"
                />

            </Section3>

            <Section4>

                <Component4
                    imgUrl={icono1}
                    titulo2="403"
                    parrafo2="STARTUPS"
                />
                <Component4
                    imgUrl={icono1}
                    titulo2="403"
                    parrafo2="STARTUPS"
                />
                <Component4
                    imgUrl={icono1}
                    titulo2="403"
                    parrafo2="STARTUPS"
                />
                <Component4
                    imgUrl={icono1}
                    titulo2="403"
                    parrafo2="STARTUPS"
                />

            </Section4>

            <Titulos>
                <h2>Faqs</h2>
                <h1>Frequently Asked <br /> Questions</h1>
            </Titulos>

            <Section5>
                <Componente5
                    titulo="01 . Unique and bold website design"
                    parrafo="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
                <Componente5
                    titulo="02 . We're are ready to start now"
                />
                <Componente5
                    titulo="03. We deliver the highest quality design"
                />
                <Componente5
                    titulo="04. We deliver the highest quality design"
                />
            </Section5>

        </>
    );
}

export default Home;

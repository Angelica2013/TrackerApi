import GlobalStyle from "../styled/GlobalStyles";
import Componente2 from "../components/componente2/Componente2";
import Phones from '../assets/images/phones.png';
import Phone1 from '../assets/images/mobiles.png';
import { Section1, Section6, Section3, Section4, Section5, Titulos, Section7, SectionCarrusel } from "../styled/styleSections";
import Component1 from "../components/componente1/componente1"
import icono1 from "../assets/images/icons/covid-orange.svg"
import Component3 from "../components/componente3/componente3"
import Component4 from "../components/componente4/component4";
import Componente5 from "../components/componente5/componente5";
import PhoneImg from ".././assets/images/phone-1.png"
import Componente6 from "../components/componente6/componente6";
import Parrafo1 from "../assets/images/blog-1.jpg"
import DataHome from "../services/DataHome.json"
import Footer from '../components/common/Footer';


const Home = () => {
    const componente3Data = DataHome.home.find(item => item.component === 3).elements;


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

            <SectionCarrusel>
                {componente3Data.map((item, index) => (
                    <Component3
                        key={index}
                        url={item.image}
                        titulo={item.title}
                        parrafo={item.paragraph}
                    />
                ))}
            </SectionCarrusel>

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

            <Section6>
            <Component1
                    titulo="Get the simple app for latest news"
                    parrafo="Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold."
                    nomButton="DOWNLOAD NOW"
                />
                <Componente2 phones1={PhoneImg} />
            </Section6>

            <Section7>
                <Componente6
                    imgUrl={Parrafo1}
                    parrafo="Can COVID-19 be caught from a person who has no symptoms?"
                />
                <Componente6
                    imgUrl={"https://covimap.dexignzone.com/xhtml/images/blog-2.jpg"}
                    parrafo="What you need to know About Novel Corona Virus Covid 19"
                />
                <Componente6
                    imgUrl="https://covimap.dexignzone.com/xhtml/images/blog-3.jpg"
                    parrafo="What can I do to protect myself and prevent the spread of disease?"
                />

            </Section7>
            <Footer/>
        </>
    );
}

export default Home;

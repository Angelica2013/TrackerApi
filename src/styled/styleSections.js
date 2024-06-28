import styled from "styled-components";

export const Section1 = styled.div`
    display: flex;
    margin-top: 0px;
    padding: 60px 120px;
    justify-content: center;
    height: 80vh;
    align-items: center;
    background: linear-gradient(to bottom, #06cdec, rgb(29, 12, 157));
`;

export const Section1B = styled.div`
    display: flex;
    padding: 60px 120px;
    justify-content: center;
    background-color: #171133;
    height: 25vh;
`;

export const Section3 = styled.div`
    display: flex;
    margin-top: 0px;
    padding: 60px 0px;
    justify-content: center;
    height: 80vh;
    align-items: center;
    gap: 100px;
    & div{
        & h1{
            line-height: 55px;
            font-size: 45px;
        }
        & p{
            font-weight: 100;
            line-height: 34px;
        }
        & button{
            border-radius: 5px;
            font-size: 14px;
            width: 200px;
            height: 60px;
        }
    }
`;


export const Section4 = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
`

export const Section5 = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    flex-direction: column;
`

export const Titulos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-bottom: 30px;
    & h2{
        color: white;
        font-size: 14px;
    }
    & h1{
        margin-top: -10px;
        font-weight: bold;
    }
`

export const Section6 = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 450px;
    margin-top: 250px;
    background: linear-gradient(to right, #1e0c9d, #06cdec);
    width: 60%;
    margin-left: 20%;
    padding: 20px;
    border-radius: 10px;
    & div{
        position: relative;
        & img{
            position: absolute;
            bottom: 50px;
            right: 50px;
            height: 520px;
        }
        & button{
            background-color: #fff;
            color: #000;
            border-radius: 5px;
            height: 50px;
            width: 160px;
        }
    }
`

export const Section7 = styled.div`
    height: 60%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    gap: 30px;
    margin-bottom: 60px;
`


export const SectionCarrusel = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
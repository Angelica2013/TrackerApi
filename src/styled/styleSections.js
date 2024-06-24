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


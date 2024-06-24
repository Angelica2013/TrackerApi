import styled from "styled-components";


export const Container1 = styled.div`
    width: 500px;
    padding: 25px;
    font-family: sans-serif;
    & h1{
        font-size: 40px;
        font-weight: 800;
        line-height: 40px;
        color: #fff;
        line-height: 50px;
    }
    & p{
        font-size: 18px;
        line-height: 20px;
        color: #fff;
        line-height: 30px;
    }
    & button {
        width: 150px;
        height: 40px;
        border-radius: 20px;
        border: none;
        background-color: #3639AE;
        color: #fff;
        font-size: 10px;
        font-weight: bold;
    }
`;
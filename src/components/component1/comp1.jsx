import styled from "styled-components";


export const Container = styled.div`
    width: 500px;
    padding: 25px;
    font-family: sans-serif;
    & h1{
        font-size: 40px;
        font-weight: 800;
        line-height: 40px;
        color: #fff;
    }
    & p{
        font-size: 16px;
        line-height: 25px;
        color: #fff;

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
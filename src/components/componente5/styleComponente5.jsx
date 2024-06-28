import styled from "styled-components";

export const Container5 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex-wrap: wrap;
    width: 80%;
    height: 50%;
    background-color: #1b2a4e;
    padding: 0px 50px;
    @media (max-width: 600px) {
        width: 100%;
        height: auto;
        padding: 0px 20px;
    }
`;

export const H2 = styled.h3`
    text-align: left;
    color: white;
    @media (max-width: 600px) {
        font-size: 15px;
    }
`;

export const P = styled.p`
    color: white;
    @media (max-width: 600px) {
        font-size: 15px;
    }
`;

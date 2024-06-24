import styled from "styled-components";

export const Container6 = styled.div`
    display: flex;
    position: relative;
    width: 60%;
    padding: 10px;
    & img{
        height: 110px;
    }
    & button{
        background-color: transparent;
        color: #fff;
        border: none;
        position: absolute;
        top: 0;
        right: -100px;
        text-decoration: underline;
        cursor: pointer;
    }
    & div{
        margin-left: 30px;
        & h3{
            color: #b0b0b0;
            font-weight: 100;
            margin-top: 5px;
            font-size: 15px;
        }
        & p{
            font-weight: 900;
            margin-top: 0px;
        }
    }
`;

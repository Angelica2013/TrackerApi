import styled from "styled-components";


export const Menu = styled.nav`
    background-color: #fff;
    width: 100%;
    height: 40px;
    align-items: center;
    display: flex;
    justify-content: center;

    & ul{
        display: flex;
        justify-content: space-around;
        list-style: none;
        width: 80%;
        align-items: center;
        margin-top: 40px;
        & li{
            & button{
                background-color: #3639AE;
                color: #fff;
                width: 120px;
                height: 35px;
                border-radius: 20px;
                border: none;
                & a {
                    color: #fff;
                }
                &:hover {
                    background-color: #4446a8;
                }
            }


            & a{
                color: #515184;
                text-decoration: none;
            }
        } 
    }
`
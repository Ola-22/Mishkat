import styled from "styled-components"

export const LoginFooter = styled.div`
width: 100%;
/* height: 100vh; */
background: url("./assets/images/Login.png");
display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 26px;
`

export const HeaderLogin = styled.div`
    width: 73%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 49px;
    & select{
        height: 20px;
    border: none;
    background: inherit;
    outline: none;
    text-transform: capitalize;
    }
    & img{
        max-width: 100%;
        @media (max-width: 900px) {
            width: 100px;
        }
    }

    @media (max-width: 1200px) {
            width: 85%
        }

`

export const LoginBox = styled.div`
    background-color: #ffffff;
    max-width: 829px;
    width: 100%;
    height: 519px;
    box-shadow: 0 15px 20px rgba(0, 145, 255, .10);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 92.5px;

    & h2{
        font-size: 35px;
        color: #3D4354;
        text-transform: capitalize;
        padding-top: 65.6px;
        @media (max-width: 900px) {
       padding-top: 30px;
       font-size: 25px;
    }
    }

    & p{
        font-size: 14px;
        color: #6E7187;
        
    max-width: 662px;
    width: 100%;

        text-align: center;
        margin-top: 20px;
        margin-bottom: 45px;
        @media (max-width: 900px) {
        width: 90%;
        font-size: 12px;
    }
    }
    & input{
        max-width: 480px;
    width: 100%;
        height: 50px;
        border: 1px solid #DEDEDE;
        border-radius: 40px;

        &::placeholder{
            padding-inline-start: 26px;
            text-transform: capitalize;
            font-size: 15px;
            color: #818181;

            @media (max-width: 900px) {
       font-size: 12px;
    }
        }

        &:last-of-type{
            margin-top: 20px;
        }

        @media (max-width: 900px) {
        width: 90%;
        height: 40px;
    }
    }

    & button{
        background: linear-gradient(to left, #FA6400, #FFA214);
        width: 191.4px;
        height: 50px;
        border-radius: 25px;
        box-shadow: 0 6px 15px rgba(250, 100, 0, .5);
        border: none;
        font-size: 14px;
        text-transform: capitalize;
        color: #ffffff;
        margin-top: 33px;
        margin-bottom: 51px;
        @media (max-width: 900px) {
            width: 142.4px;
    height: 40px;
        }
    }

    & .forget-pass{
        color: #3D4354;
        font-size: 14px;
        text-transform: capitalize;
        @media (max-width: 900px) {
           font-size: 12px;
        }

    }

    @media (max-width: 900px) {
        width: 80%;
        height: 430px;
    }
`

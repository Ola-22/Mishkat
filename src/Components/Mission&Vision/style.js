import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & div{
        display: flex;
    align-items: center;
    justify-content: center;
    width: 93px;
            height: 93px;
    @media (max-width: 700px) {
            width: 65px;
            height: 65px;
        }
        &::after{
            content: "";
            width: 93px;
            height: 93px;
            background-color: #fff;
            position: absolute;
            border-radius: 50%;
            @media (max-width: 700px) {
                width: 65px;
                height: 65px;
            }
        }
        & img{
            position: relative;
            z-index: 2;

            @media (max-width: 700px) {
                width: 30px;
                
            }
        }
    }
    & h6{
        margin-top: 54.7px;
        font-size: 40px;
        color: #ffffff;
        text-transform: capitalize;
        @media (max-width: 900px) {
               font-size: 20px;
            }
    }
    & p{
        font-size: 16px;
        color: #ffffff;
        max-width: 451px;
        text-transform: uppercase;
        margin-top: 26px;
        font-weight: normal;
        line-height: 1.5;
        @media (max-width: 900px) {
               font-size: 14px;
            }

            @media (max-width: 1100px) {
              width: 95%;
            }
    }

    & .img-back{
        position: absolute;
        left: -130px;
        opacity: 0.2;
        @media (max-width: 1100px) {
            width: 110px;
            left: -50px;
        }
    }

    & span{
        height: 80%;
        display: flex;
        flex-direction: column;
        width: 95%;

        @media (max-width: 700px) {
            align-items: center;
        }
    }

`

export const Container = styled.div`
    display: flex;
    height: 441px;
    width: 100%;
    margin-top: 141px;
     ${Box} {
        &:first-of-type{
            background-color: #FF6765;
            width: 50%;
            position: relative;
            
    @media (max-width: 700px) {
        width: 100%;
        padding-top: 30px;
        padding-bottom: 20px;
    }
            
        }

        &:last-of-type{
            background-color: #694BED;
            width: 50%;
            position: relative;

            & .img-vision{
                position: absolute;
                opacity: 0.2;
                right: 0px;
                bottom: -105px;
                @media (max-width: 1100px) {
            width: 110px;
            bottom: -23px;
        }
            }
            @media (max-width: 700px) {
                width: 100%;
                padding-top: 30px;
                padding-bottom: 20px;
            }
        }
    }

    @media (max-width: 700px) {
        flex-direction: column;
        height: auto;
        margin-top: 40px;
    }
`


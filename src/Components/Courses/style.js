import styled from "styled-components"

export const CoursesContainer = styled.div`

display: flex;
flex-direction: column;
width: 85%;
margin-top: 141px;

& .buttons{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 64px;

    & button{
    min-width: 107px;
    height: 59px;
    border-radius: 86px;
    border: none;
    box-shadow: 0 15px 30px rgba(0, 145, 255, 0.16);
    background-color: #ffffff;
    font-size: 16px;
    color: #3D4354;
    font-family: Montserrat;
    padding-left: 20px;
    padding-right: 20px;
    cursor: pointer;
    transition: 1s ease-in-out;
    &.active{
        background: linear-gradient(to left, #FA6400,#FFA214);
        color: #ffffff;
        box-shadow: 0 6px 15px rgba(0, 145, 255, 0.16);
    }

    @media (max-width: 700px) {
       min-width: auto;
       max-width: 107px;
       font-size: 12px;
       height: 30px;
        }
    }

    @media (max-width: 700px) {
        flex-wrap: wrap;
        }
}

& .title-main{
    display: flex;
    flex-direction: column;

    & h1{
        font-size: 40px;
    font-weight: normal;
    color: #3D4354;    
    }

    & h6{
        color: #6E7187;
        font-size: 16px;
        font-weight: normal;
        text-transform: capitalize;
        margin-bottom: 42px;
    }

}

@media (max-width: 700px) {
            margin-top: 40px;
 
        }
`

export const ItemContainer = styled.div`
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    

    & img{
        max-width: 315px;
        /* border-radius: 20px; */
        @media (max-width: 500px) {
            width: 100%;
            max-width: 100%;
        }
        @media (min-width: 500px) and (max-width: 760px) {
            max-width: 200px;
           
        }
    }

    & .container{
        display: flex;
        justify-content: space-between;
        margin-top: 17px;
        margin-bottom: 9px;

        & h3{
            font-size: 24px;
            color: #3D4354;
            @media (max-width: 700px) {
                font-size: 20px;
            }
        }
        & span{
            color: #1DCD9F;
            font-size: 24px;
            @media (max-width: 700px) {
                font-size: 18px;
            }
        }

    }

    & h6{
        color: #6E7187;
        font-weight: normal;
        margin-bottom: 17px;
    }
    & button{
        background: linear-gradient(to left, #008EFA, #14C7FF);
        max-width: 158px;
        width: 100%;
        height: 53px;
        box-shadow: 0 6px 15px rgba(7, 161, 252, .5);
        font-size: 14px;
        border-radius: 30px;
        border: none;
        color: #ffffff;
        text-transform: capitalize;
        cursor: pointer;
        transition: all 1s ease-in;

        &:hover{
            color: #008EFA;
            background: #fff;
            border: 1px solid #008EFA;
            box-shadow: 0 6px 10px rgba(7, 161, 252, .5);
        }
        @media (max-width: 760px) {
            max-width: 100px;
            height: 35px;
        }
    }

    & .data{
        margin-bottom: 56.4px;
        @media (max-width: 500px) {
            width: 100%;

        }
    }
    `

    export const Btn = styled.button`
        background: rgba(254, 150, 16, 0.2);
        /* opacity: 0.8; */
        max-width: 208px;
        width: 100%;
        height: 59px;
        border-radius: 86px;
        border: none;
        font-size: 18px;
        color: #FA6400;
        text-transform: capitalize;
        align-self: center;
        cursor: pointer;
    `
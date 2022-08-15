import styled from "styled-components";

export const BannerContainer = styled.div`
    display: flex;
    /* background-image: url("./assets/images/background.png"); */
    justify-content: space-between;
    width: 85%;

    @font-face {
    font-family: "Montserrat-extra";
    src: local("Montserrat-extra"),
    url("./") format("truetype");
    font-display: fallback;
   }
    & h2{
        font-size: 47px;
        color: #3D4354;
        font-weight: normal;
        text-transform: capitalize;
        margin-bottom: 43.7px;
        margin-top: 122px;
        font-family: Montserrat-extra;
        /* max-width: 453px; */
    }

    & p{
        font-size: 18px;
        color: rgba(61, 67, 84, 0.7);
        max-width: 397px;
        width: 100%;
        margin-bottom: 45px;
    }

    & .back{
        position: absolute;
        left: -127px;
        width: 100%;
    }

    & .main{
        display: flex;
        align-items: center;
        /* width: 85%; */
        @media (max-width: 700px) {
            flex-wrap: wrap;
            width: 100%;
        }
    }
    `

    export const BannerContent = styled.div`
    z-index: 5;
    display: flex;
    flex-direction: column;

    & button{
        background-image: linear-gradient(to left, #008EFA , #14C7FF);
        width: 158px;
        height: 52px;
        box-shadow: 0 6px 15px rgba(7, 161, 252, 0.5);
        border-radius: 30px;
        border: none;
        font-size: 14px;
        color: #ffffff;
        text-transform: capitalize;
        margin-inline-end: 40.3px;
    }

    `

    export const PlayContainer = styled.div`
        display: flex;
        align-items: center;

        & div{
            display: flex;
            align-items: center;
            & .img-container{
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
             &::after{
                content: "";
                position: absolute;
                width: 53px;
                height: 53px;
                background-color: #fff;
                box-shadow: 0 15px 30px rgba(0, 145, 255, 0.16);
                border-radius: 50%;
            } 
            & img{
                z-index: 2;
                position: relative;
            }
            }
            & h6{
                margin-inline-start: 28.2px;
                color: #3D4354;
                font-size: 16px;
                font-weight: normal;
            }
 
        }
    `

    export const RightBanner = styled.div`
  /* background-image: url("./assets/images/background-banner.png");
    background-repeat: no-repeat; */

    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 27px;
    z-index: 5;
    margin-inline-end: -30px;
    position: relative;
    & .boy-image{
        position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    right: 124px;
    top: 71px;

    @media (max-width: 700px) {
        right: 55px;
        top: -63px;
        max-width: 100%;
    }
    }
    & .background-boy{
        @media (max-width: 700px) {
            max-width: 100%;
        }
    }

    `


// position: absolute;
//     width: 100%;
//     left: 0;
//     transform: rotate(-8deg);
//     overflow: hidden;
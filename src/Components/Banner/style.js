import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  background: url(./assets/images/Artboard.svg) no-repeat;
    background-size: 100% 105%;
  justify-content: center;
  width: 100%;
  align-items: center;
  padding-top: 10%;
  padding-bottom: 9%;
  @font-face {
    font-family: "Montserrat-extra";
    src: local("Montserrat-extra"), url("./assets/fonts/Montserrat-ExtraBold.ttf") format("truetype");
    font-display: fallback;
  }
  
  & h2 {
    font-size: 47px;
    color: #3d4354;
    font-weight: normal;
    text-transform: capitalize;
    margin-bottom: 43.7px;
    margin-top: 122px;
    font-family: Montserrat-extra;
    margin-top: -4px;

    @media (max-width: 700px) {
      margin-top: 20px;
      font-size: 25px;
      margin-bottom: 20px;
    }
    @media (max-width: 300px) {
      font-size: 20px;
    }

    @media (min-width: 700px) and (max-width: 950px) {
      margin-top: 28%;
    }
  }

  & p {
    font-size: 18px;
    color: rgba(61, 67, 84, 0.7);
    max-width: 397px;
    width: 100%;
    margin-bottom: 45px;
    font-weight: 500;
    @media (max-width: 700px) {
      font-size: 16px;
    }

    @media (max-width: 300px) {
      font-size: 14px;
    }
  }

  & .back {
    position: absolute;
    left: -127px;
    width: 100%;
  }

  & .main {
    display: flex;
    align-items: center;
    width: 85%;
    margin-bottom: 4%;
    @media (max-width: 950px) {
      flex-wrap: wrap;
    }
  }

  @media (max-width: 650px) {
    height: auto;
    background-size: cover;
    margin-top: 10%;
  }

  @media (min-width: 650px) and (max-width: 700px) {
    height: auto;
    background-size: cover;
    padding-top: 25%;
  }

  @media  (max-width: 1000px) {
    height: auto;
    background-size: cover;
  }
  @media (max-width: 375px) {
    margin-top: 25%;
  }

  
  @media (min-width: 1000px) and (max-width: 1200px) {
      padding-top: 14%;
    }
`;

export const BannerContent = styled.div`
  z-index: 5;
  display: flex;
  flex-direction: column;

  & button {
    background-image: linear-gradient(to left, #008efa, #14c7ff);
    width: 158px;
    height: 52px;
    box-shadow: 0 6px 15px rgba(7, 161, 252, 0.5);
    border-radius: 30px;
    border: none;
    font-size: 14px;
    color: #ffffff;
    text-transform: capitalize;
    margin-inline-end: 40.3px;
    transition: 1s all ease-out;
    @media (max-width: 760px) {
      width: 100px;
      height: 38px;
      font-size: 12px;
    }

    &:hover{
      border: 1px solid #14c7ff;
      color: #14c7ff;
      background: #ffffff;
      cursor: pointer;
    }
  }
`;

export const PlayContainer = styled.div`
  display: flex;
  align-items: center;

  & div {
    display: flex;
    align-items: center;
    & .img-container {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &::after {
        content: "";
        position: absolute;
        width: 53px;
        height: 53px;
        background-color: #fff;
        box-shadow: 0 15px 30px rgba(0, 145, 255, 0.16);
        border-radius: 50%;

        @media (max-width: 760px) {
          width: 16px;
          width: 40px;
          height: 40px;
        }
      }
      & img {
        z-index: 2;
        position: relative;

        @media (max-width: 760px) {
          width: 16px;
        }
      }
    }
    & h6 {
      margin-inline-start: 28.2px;
      color: #3d4354;
      font-size: 16px;
      font-weight: normal;
    }
  }
`;

export const RightBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 27px;
  z-index: 5;
  margin-inline-end: -30px;
  position: relative;
  & .boy-image {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    align-self: center;
    right: 52px;
    top: -63px;

    @media (max-width: 700px) {
      right: 142px;
      top: -56px;
      max-width: 100%;
    }

    @media (min-width: 600px) and (max-width: 700px) {
      height: 90%;
    }
    @media (min-width: 800px) and (max-width: 950px) {
      right: 119px;
    }

    @media (max-width: 300px) {
      top: 19px;
      right: 45px;
    }

    @media (min-width: 300px) and (max-width: 400px) {
      right: 61px;
      top: 25px;
    }

    @media (min-width: 400px) and (max-width: 500px) {
      right: 85px;
      top: 31px;
    }

    @media (min-width: 500px) and (max-width: 600px) {
      right: 113px;
      top: 41px;
    }
  }
  & .background-boy {
    @media (max-width: 700px) {
      max-width: 100%;
    }
  }

  @media (max-width: 950px) {
    width: 100%;
  }
`;

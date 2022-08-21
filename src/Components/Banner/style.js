import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  /* background-image: url("./assets/images/background.png"); */
  justify-content: space-between;
  width: 85%;

  @font-face {
    font-family: "Montserrat-extra";
    src: local("Montserrat-extra"), url("./") format("truetype");
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

    @media (max-width: 700px) {
      margin-top: 20px;
      font-size: 25px;
      margin-bottom: 20px;
    }
  }

  & p {
    font-size: 18px;
    color: rgba(61, 67, 84, 0.7);
    max-width: 397px;
    width: 100%;
    margin-bottom: 45px;
    @media (max-width: 700px) {
      font-size: 16px;
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
    /* width: 85%; */
    @media (max-width: 950px) {
      flex-wrap: wrap;
      width: 100%;
    }
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

    @media (max-width: 760px) {
      width: 100px;
      height: 38px;
      font-size: 12px;
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

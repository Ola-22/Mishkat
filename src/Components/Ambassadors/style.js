import styled from "styled-components";

export const Main = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TitleContainer = styled.div`
  text-align: center;
  padding-top: 114px;
  & p{
    color: #6E7187;
    font-size: 16px;
  }
`;

export const AmbassadorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & .img-container {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    object-fit: cover;
    width: 367px;
    height: 465px;
    & img {
      display: inline-block;
      width: 100%;
      height: 593px;
      margin-top: 28px;
      clip-path: circle(40%);
      z-index: 2;
      @media (max-width: 700px) {
        margin-top: -27px !important;
        max-width: 100%;
        height: 391px !important;
        width: 45% !important;
      }

      @media (max-width: 1000px) and (min-width: 699px) {
        width: 80%;
    height: 515px;
    margin-top: -64px;
      }

      @media (max-width: 1100px) and (min-width: 1000px) {
        width: 70%;
    height: 552px;
    margin-top: -85px;
      }
    }

    @media (max-width: 700px) {
       height: 265px;
      }
  }

  & h2 {
    font-size: 28px;
    color: #3d4354;
    @media (max-width: 700px) {
          font-size: 16px;
        }
  }
  & h6 {
    color: #3d4354;
    font-size: 18px;
    font-weight: normal;
    margin-top: 8px;
    margin-bottom: 17.5px;
    @media (max-width: 700px) {
          font-size: 14px;
        }
  }

  & p {
    font-size: 18px;
    color: #6e7187;
    width: 337px;
    text-align: center;
    font-weight: normal;
    line-height: 1.4;
    @media (max-width: 700px) {
          font-size: 14px;
          max-width: 67%;
    width: 75%;
        }
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  width: 85%;
  margin-top: 69px;
  align-items: center;
  justify-content: space-evenly;

  & ${Card} {
    &:first-of-type {
      &::after {
        content: "";
        width: 367px;
        height: 375px;
        border-radius: 231px;
        border: 30px solid #657fff;
        position: absolute;
        background: #ebf2f5;

        @media (max-width: 700px) {
          width: 200px;
          height: 200px;
          border: 20px solid #657fff;
        }
        @media (max-width: 1100px) and (min-width: 699px) {
        width: 300px;
    height: 300px;
      }
      }
    }
    &:last-of-type {
      &::after {
        content: "";
        width: 367px;
        height: 375px;
        border-radius: 231px;
        border: 30px solid #fee665;
        position: absolute;
        background: #ebf2f5;

        @media (max-width: 700px) {
          width: 200px;
          height: 200px;
          border-width: 20px;
        }

        @media (max-width: 1100px) and (min-width: 699px) {
        width: 300px;
    height: 300px;
      }
      }

      @media (max-width: 700px) {
          margin-top: 20px;
        }
    }
  }

  @media (max-width: 750px) {
       flex-wrap: wrap;
      }
`;

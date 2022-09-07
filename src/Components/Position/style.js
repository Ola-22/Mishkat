import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 315px;
  width: 100%;
  height: 315px;
  border-radius: 20px;
  box-shadow: 0 15px 30px rgba(0, 145, 255, 0.16);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;

  @media (max-width: 1200px) {
    max-width: 100%;
    width: 90%;
  
  }

  @media (max-width: 600px) {
    width: 100%;
    box-shadow: none;
  }

  & p{
    margin-top: 44px;
  }
`;

export const PositionContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("./assets/images/background-position.png") #f9fbfc;
  & ${CardContainer} {
    margin-bottom: 187.6px;
    &:first-of-type {
      margin-inline-start: 20px;
      @media (max-width: 600px) {
    margin-inline-start: 0;
  }
    }
  }

  & .title-container {
    padding-top: 165.6px;
    justify-content: flex-start;
    display: flex;
    flex-direction: column;
    width: 82%;
    & p {
      font-size: 16px;
      color: #6e7187;
      margin-bottom: 70px;
      @media (max-width: 650px) {
        font-size: 14px;
      }
    }

    @media (max-width: 650px) {
      padding-top: 50px;
      }
  }

  & .slick-prev {
    right: 0 !important;
    left: 88% !important;

    &::before {
      content: url("./assets/images/prev.png");
    }

    &::after {
      content: "";
      width: 40px;
      height: 40px;
      background: inherit;
      border: 1px solid #3d4354;
      position: absolute;
      border-radius: 50%;
    }
  }

  & .slick-next {
    right: 0 !important;
    left: 94% !important;

    &::before {
      content: url("./assets/images/next.png");
    }

    &::after {
      content: "";
      width: 40px;
      height: 40px;
      background: inherit;
      border: 1px solid #fe9610;
      position: absolute;
      border-radius: 50%;
    }
  }
`;

export const paginateDot = styled.div`
  width: 10px;
  height: 10px;
  color: #ffa214;
  border-radius: 50%;
  background-color: #ffa214;
`;

export const UlPaginate = styled.ul`
  margin: 0;
  display: flex;
  justify-content: center;
  & li {
    margin-left: 20px;

    & ${paginateDot} {
      width: 10px;
      height: 10px;
      color: #ffa214;
      border-radius: 50%;
      background-color: #ffa214;
    }
    &.slick-active {
      & ${paginateDot} {
        width: 47px;
        border-radius: 72px;
      }
      border-radius: 72px;
      width: 47px;
      height: 10px;
    }
  }
`;

export const PrevArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: inherit;
  opacity: 0.25;
  position: absolute;
  right: 0px;
  top: -90px;

  @media (max-width: 900px) {
  display: none;
  }
`;

export const NextArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: inherit;
  position: absolute;
  right: 0px;
  top: -90px;

  @media (max-width: 900px) {
  display: none;
  }
`;

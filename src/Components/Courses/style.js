import styled from "styled-components";

export const CoursesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin-top: 141px;

  & .buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    width: 67%;

    & button {
      min-width: 107px;
      height: 59px;
      border-radius: 86px;
      border: none;
      box-shadow: 0 15px 30px rgba(0, 145, 255, 0.16);
      background-color: #ffffff;
      font-size: 16px;
      color: #3d4354;
      font-family: Montserrat;
      padding-left: 20px;
      padding-right: 20px;
      cursor: pointer;
      transition: 1s ease-in-out;
      font-weight: 500;
      &.active {
        background: linear-gradient(to left, #fa6400, #ffa214);
        color: #ffffff;
        box-shadow: 0 6px 15px rgba(250, 100, 0, .50);
      }

      @media (max-width: 700px) {
        min-width: auto;
        font-size: 12px;
        height: 30px;
        
      }
    }

    @media (max-width: 700px) {
      flex-wrap: wrap;
      gap: 10px;
    }
  }

  & .title-main {
    display: flex;
    flex-direction: column;

    & h1 {
      font-size: 40px;
      font-weight: bold;
      color: #3d4354;
    }

    & h6 {
      color: #6e7187;
      font-size: 16px;
      font-weight: normal;
      text-transform: capitalize;
      margin-bottom: 42px;
    }
  }

  @media (max-width: 700px) {
    margin-top: 40px;
  }
`;

export const ItemContainer = styled.div`
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  & img {
    max-width: 315px;
    /* border-radius: 20px; */
    @media (max-width: 500px) {
      width: 100%;
      max-width: 100%;
    }
    @media (min-width: 501px) and (max-width: 760px) {
      max-width: 200px;
    }
  }

  & .container {
    display: flex;
    justify-content: space-between;
    margin-top: 17px;
    margin-bottom: 9px;

    & h3 {
      font-size: 24px;
      color: #3d4354;
      @media (max-width: 700px) {
        font-size: 20px;
      }
    }
    & span {
      color: #1dcd9f;
      font-size: 24px;
      @media (max-width: 700px) {
        font-size: 18px;
      }
    }
  }

  & h6 {
    color: #6e7187;
    font-weight: 500;
    margin-bottom: 17px;
  }
  & button {
    background: linear-gradient(to left, #008efa, #14c7ff);
    max-width: 158px;
    width: 100%;
    height: 53px;
    box-shadow: 0 6px 15px rgba(7, 161, 252, 0.5);
    font-size: 14px;
    border-radius: 30px;
    border: none;
    color: #ffffff;
    text-transform: capitalize;
    cursor: pointer;
    transition: all 1s ease-in;

    &:hover {
      color: #008efa;
      background: #fff;
      border: 1px solid #008efa;
      box-shadow: 0 6px 10px rgba(7, 161, 252, 0.5);
    }
    @media (max-width: 760px) {
      max-width: 100px;
      height: 35px;
      font-size: 12px;
    }
  }

  & .data {
    margin-bottom: 56.4px;
    @media (max-width: 500px) {
      width: 100%;
    }
  }
`;

export const Btn = styled.button`
  background: rgba(254, 150, 16, 0.08);
  max-width: 208px;
  width: 100%;
  height: 59px;
  border-radius: 86px;
  border: none;
  font-size: 18px;
  color: #fa6400;
  text-transform: capitalize;
  align-self: center;
  cursor: pointer;

  @media (max-width: 760px) {
    max-width: 127px;
    height: 39px;
    font-size: 14px;
  }
`;


export const BtnContainer = styled.div`
display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 64px;
    margin-bottom: 64px;

    & .prev-next{
      display: flex;
      align-items: center;

      & img{
        cursor: pointer;
             &:last-of-type{
        margin-inline-start: 9.4px;
      } 
      }

    }
    `
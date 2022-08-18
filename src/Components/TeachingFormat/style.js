import styled from "styled-components";

export const TeachingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  margin-top: 79px;

  & h2 {
    font-size: 50px;
    color: #694bed;
    text-transform: capitalize;
    margin-bottom: 89px;
    align-self: flex-start;
    & span {
      color: #ff6765;
    }

    @media (max-width: 650px) {
      font-size: 25px;
    }
  }

  & h4 {
    font-size: 50px;
    color: #3d4354;
    text-transform: capitalize;
  }

  @media (max-width: 800px) {
    width: 90%;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  & .one {
    background: #fee665;
    border-radius: 15px;
    height: 463px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    border-radius: 0.4em;
    width: 500px;
    /* padding: 47px; */
    align-items: center;

    @media (max-width: 1000px) {
      width: 400px;
      padding: 20px;
    }
    @media (max-width: 650px) {
      width: 100%;
      height: 300px;
    }

    &::before {
      content: url("./assets/images/settings.png");
      position: absolute;
      top: -43px;
    }

    &:after {
      content: "";
      position: absolute;
      height: 0;
      border: 20px solid transparent;
      border-left-color: #fee665;
      border-right: 0;
      right: -20px;
      top: 14%;
    }
  }

  & ul {
    list-style: inside;
    height: 352px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-evenly;
    width: 324px;

    & li {
      color: #694bed;
      text-decoration: line-through;
      font-size: 26px;
      &::marker {
        color: #ff6765;
      }

      @media (max-width: 900px) {
        font-size: 22px;
      }

      @media (max-width: 650px) {
        font-size: 18px;
      }
    }

    @media (max-width: 900px) {
      width: 200px;
    }

    @media (max-width: 650px) {
      width: 80%;
      height: auto;
    }
  }

  @media (max-width: 650px) {
    flex-wrap: wrap;

  }
`;

export const OfflineTeaching = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (max-width: 650px) {
    width: 100%;
    margin-top: 20px;
  }
  & h4 {
    color: #3d4354;
    font-size: 40px;
    position: absolute;
    top: -50px;
    left: 44px;

    @media (max-width: 650px) {
      position: relative;
      top: 0;
      left: 0;
      align-self: flex-start;
      font-size: 25px;
    }
  }

  & .two {
    border: 10px solid #694bed;
    border-radius: 15px;
    width: 450px;
    height: 463px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-inline-start: 50px;
    /* padding: 47px; */

    @media (max-width: 1000px) {
      width: auto;
      padding: 20px;
    }
    @media (max-width: 650px) {
      width: 100%;
      margin-inline-start: 0;
      height: 300px;
    }

    & li {
      text-decoration: none;
      &::marker {
        color: #21d373;
      }
    }
  }
`;

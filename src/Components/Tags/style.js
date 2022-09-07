import styled from "styled-components";

export const CardMain = styled.div`
  display: flex;
  max-width: 315px;
  width: 100%;
  height: 228px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & h6 {
    font-size: 22px;
    color: #3d4354;
    text-transform: capitalize;
    margin-top: 10.4px;
    margin-bottom: 2px;
    font-weight: normal;
  }
  & p {
    color: #716c80;
    font-size: 22px;
    font-weight: normal;
  }

  @media (max-width: 1100px) and (min-width: 700px) {
    max-width: 195px;
  }

  @media (max-width: 1200px) and (min-width: 1100px) {
    max-width: 195px;
  }
`;

export const TagsMain = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  background: url("./assets/images/tags.svg") no-repeat;
  width: 100%;
  justify-content: space-evenly;
  background-size: contain;
  padding-top: 70px;
  flex-direction: column;

  @media (max-width: 700px) {
    background-size: contain;
    padding-top: 0;
  }

  & .container {
    display: flex;
    justify-content: space-between;
    width: 93%;
    @media (max-width: 700px) {
      flex-wrap: wrap;
      width: auto;
    }
  }

  & ${CardMain} {
    &:not(:first-of-type) {
      margin-inline-start: -60px;
      @media (max-width: 700px) {
        margin-inline-start: 0;
        margin-top: 10px;
      }
    }
  }
`;

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 93%;
  & h6 {
    color: #3d4354;
    font-size: 16px;
    font-weight: normal;
    margin-top: 214.5px;
    text-align: center;

    @media (max-width: 700px) {
      margin-top: 20px;
    }
  }

  & div {
    display: flex;
    align-items: center;
    margin-top: 50.5px;
    width: 82%;
    justify-content: space-between;
    gap: 10px;
    & img {
        @media (max-width: 450px) {
          width: 50px;
        }
      &:not(:first-of-type) {
        @media (max-width: 700px) {
          margin-inline-start: 20px;
        }

        @media (max-width: 420px) {
          margin-inline-start: 0;
        }
      }
    }

    @media (max-width: 402px) {
      width: 100%;
    }

    @media (max-width: 700px) {
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }
`;
export const Container = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

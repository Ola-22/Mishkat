import styled from "styled-components";

export const SocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 49px;
  width: 11%;
  margin-bottom: 39px;
  & .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    &:after {
      content: "";
      position: absolute;
      background: #3d4354;
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }

    & img {
      z-index: 2;
    }
  }

  @media (max-width: 700px) {
    width: 45%;
    margin-top: 35px;
  }


  
  @media (min-width: 700px) and (max-width: 1000px){
        width: 16%;
  }
`;

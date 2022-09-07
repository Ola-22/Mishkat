import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 85%;
  margin-bottom: 61px;
  position: relative;
  & .about-title {
    margin-top: 155px;
    text-align: center;
    & p {
      color: #6e7187;
      font-size: 16px;
      text-transform: capitalize;
      margin-bottom: 47px;
      @media (max-width: 650px) {
          font-size: 14px;
      }
    }
  }

  & .background-about{
    position: absolute;
    right: -150px;
    top: 42%;
    @media (max-width: 700px) {
      display: none;
    }

    @media (max-width: 1200px) {
      width: 100px;
    object-fit: cover;
    right: -95px;
    height: 206px;
    top: 51%;
    }
    @media (min-width: 1199px) and (max-width: 1335px) {
      width: 230px;
    height: 270px;
    right: -180px;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 650px) {
    flex-wrap: wrap;
    justify-content: center;
    }

  & img {
    max-width: 100%;
    @media (max-width: 1200px) {
        width: 50%;   
    }
  }

  & .card-body {
    margin-inline-start: 51px;
    & .back-number {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      /* width: 110.8px; */
      margin-bottom: 62px;
      content: "";
    /* position: absolute; */
    width: 110.8px;
    height: 110.8px;
    background: #00bded;
    border-radius: 50%;
    
    @media (max-width: 1200px) {
         width: 60px;
        height: 60px; 
        }

        @media (max-width: 750px) {
         width: 35px;
        height: 35px; 
        }
      /* &::after {
        content: "";
        position: absolute;
        width: 110.8px;
        height: 110.8px;
        background: #00bded;
        border-radius: 50%;

      } */
      & h2 {
        z-index: 2;
        color: #ffffff;
        font-size: 42px;
        @media (max-width: 750px) {
        font-size: 20px;

        }
      }

      @media (max-width: 650px) {
    margin-bottom: 2%;
  }
    }
    & h3 {
      font-size: 32px;
      color: #3d4354;
      text-transform: capitalize;
      margin-bottom: 35px;
      @media (max-width: 750px) {
        font-size: 20px;
        margin-bottom: 2px;
        }

        @media (max-width: 650px) {
          margin-inline-start: 8%;
        }
      & span {
        color: #00bded;
      }
    }
    & p {
      max-width: 409px;
      font-size: 18px;
      color: #3d4354;
      @media (max-width: 750px) {
        font-size: 16px;
        }
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

export const TitleContainer = styled.div`

@media (max-width: 650px) {
        display: flex;
margin-top: 8%;
width: 100%;  
        }


`
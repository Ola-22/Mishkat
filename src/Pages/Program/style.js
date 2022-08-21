import styled from "styled-components";


export const ProgramContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25px;

  & .banner {
    width: 100%;
    background: url("./assets/images/program.png") no-repeat;
    background-size: 102% 100%;
    height: 630px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-inline-end: 13.2%;
    padding-top: 13.4%;
    & img {
      max-width: 100%;
    }

    @media (max-width: 700px) {
      height: auto;
    }
  }

  & .footer {
    width: 100%;
    margin-top: 47.6px;
    position: relative;

    & .footer-img {
      position: absolute;
      bottom: 49%;
      left: 25px;
      z-index: 2;
      max-width: 100%;
      @media (max-width: 900px) {
        width: 200px;
      }

      @media (max-width: 700px) {
        width: 135px;
      }

      @media (max-width: 500px) {
        display: none;
      }
    }
  }
`;

export const HeaderProgram = styled.div`
  display: flex;
  width: 82%;
  justify-content: space-between;
  padding-bottom: 28.7px;
  & .register-btn {
    @media (max-width: 980px) {
      display: flex;
    }

    @media (max-width: 450px) {
      width: 80px;
      font-size: 10px;
      margin-inline-start: 7px;
      margin-inline-end: 7px;
    }
  }

  & .login-btn {
    @media (max-width: 980px) {
      display: flex;
    }
  }

  & img {
    max-width: 100%;

    @media (max-width: 650px) {
      width: 65px;
    }
  }
  & a,
  select {
    color: #3d4354;

    @media (max-width: 980px) {
      color: #3d4354;
    }
  }
`;

export const ProgramDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  & p {
    padding-top: -3.4px;
    font-size: 22px;
    color: #3d4354;
    margin-bottom: 56.4px;
    width: 85%;
    @media (max-width: 700px) {
      font-size: 18px;
    }
  }

  & .paragraph {
    position: relative;
    width: 92%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    margin-top: 58.2px;

    & .back-p {
      position: absolute;
      width: 92%;
      top: 0;
      left: 20px;
      opacity: 0.2;
    }
  }
`;

export const Programs = styled.div`
  background: #f9fbfc;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 83px;
  position: relative;
  padding-bottom: 261px;

  @media (max-width: 450px) {
    padding-bottom: 20px;
  }
  & .background-program {
    position: absolute;
    top: 17.5px;
    opacity: 0.2;
  }

  & .title-container {
    background: url("./assets/images/back-title.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 74%;
    display: flex;
    justify-content: center;

    & .title {
      width: 80%;
      padding-bottom: 7%;
      padding-top: 4%;
      @media (max-width: 800px) {
        font-size: 25px;
      }
    }

    @media (max-width: 800px) {
      width: 90%;
    }
  }
`;

export const LearnContainer = styled.div`
  display: flex;
  width: 64%;
  & ul {
    height: 950px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    & li {
      display: flex;
      align-items: center;
      position: relative;
      &::before {
        clip-path: polygon(50% 0, 100% 50%, 52% 100%, 29% 80%, 0 53%, 25% 26%);
        width: 111px;
        min-width: 111px;
        height: 111px;
        background: #694bed;
        content: attr(data-content);
        position: relative;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        font-size: 30px;

        @media (max-width: 450px) {
          width: 80px;
          min-width: 80px;
          height: 80px;
          display: none;
        }
      }

      &:not(:last-of-type) {
        &:nth-of-type(even) {
          margin-left: 135px;

          @media (max-width: 450px) {
            margin-left: 0;
          }
        }

        &:nth-of-type(odd) {
          &:after {
            position: absolute;

            top: 84%;
            left: 49px;
            display: inline-block;
            height: 200px;
            width: 133px;
            margin-right: 5px;
            content: "";
            background: url(./assets/images/curve.png) no-repeat;

            @media (max-width: 450px) {
              display: none;
            }
          }
        }

        &:nth-of-type(even) {
          &:after {
            position: absolute;

            top: 83%;
            left: -100px;
            display: inline-block;
            height: 144%;
            width: 100%;
            margin-right: 5px;
            content: "";
            background: url(./assets/images/curve2.png) no-repeat;
            @media (max-width: 450px) {
              display: none;
            }
          }
        }
      }

      &:last-of-type {
        &:after {
          position: absolute;
          top: 89%;
          height: 100%;
          width: 100%;
          right: 7%;
          content: "";
          background: url(./assets/images/plane.png) no-repeat;
          background-size: contain;
          @media (max-width: 450px) {
            display: none;
          }
        }
      }
    }

    @media (max-width: 450px) {
      height: 400px;
    }
  }

  & .group {
    max-width: 100%;
    width: 412px;
    position: absolute;
    left: 7%;
    margin-top: 20px;
  }

  @media (max-width: 1000px) {
    width: 68%;
  }

  @media (max-width: 785px) {
    width: 86%;
  }
`;

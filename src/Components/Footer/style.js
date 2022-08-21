import styled from "styled-components";

export const FooterContainer = styled.div`
  background: url("./assets/images/background-footer.png");
  background-size: 103% 100%;
  background-repeat: no-repeat;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  & h6 {
    font-size: 12px;
    color: #3d4354;
    padding-bottom: 63.5px;
    font-weight: normal;
    @media (max-width: 700px) {
    font-size: 10px;
    padding-bottom: 45px;
  }
  }

  &::before {
    content: "";
    position: absolute;
    background-color: #fff;
  }

  @media (max-width: 700px) {
    background: #f5f5f5;
    margin-top: 20px;
  }

  & img{
    max-width: 100%;
    @media (max-width: 700px) {
      width: 100px;
    }
  }
`;

export const inputContainer = styled.div`
  background: #ffffff;
  border-radius: 25px;
  border: 1px solid #ebebeb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 54.6px;
  margin-top: 300.5px;
  width: 423px;
  height: 50px;
  & input {
    border: none;
    width: 100%;
    outline: none;
    height: 48px;
    border-radius: 25px;
    background: inherit;
    padding-inline-start: 23px;
    text-transform: capitalize;

    @media (max-width: 700px) {
      height: 33px;
    }
  }

  & button {
    box-shadow: 0 6px 15px rgba(250, 100, 0, 0.5);
    border-radius: 22px;
    background: linear-gradient(to left, #fa6400, #ffa214);
    width: 147px;
    height: 44px;
    border: none;
    font-size: 14px;
    color: #ffffff;
    text-transform: capitalize;
    @media (max-width: 700px) {
      height: 33px;
    }
  }

  @media (max-width: 700px) {
    margin-top: 75px;
    width: 80%;
    max-width: 80%;
    margin-bottom: 15px;
    height: 40px;
  }
`;

export const MenuFooter = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 24%;
  margin-bottom: 62px;

  & li {
    font-size: 14px;
    color: #3d4354;
    @media (max-width: 700px) {
        font-size: 12px;
  }
  }


  @media (max-width: 700px) {
    width: 90%;
    margin-bottom: 30px;
  }

  @media (min-width: 700px) and (max-width: 1200px){
        width: 45%;
  }
`;

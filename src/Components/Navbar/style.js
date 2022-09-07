import styled from "styled-components";

export const NavMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 28.7px;
  background-color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 33;
  padding-top: 25px;
  & .nav-container {
    display: flex;
    align-items: center;
    & img {
      margin-inline-end: 4px;

      @media (max-width: 650px) {
        width: 65px;
      }
    }

    & ul {
      display: flex;
      align-items: center;
      & li {
        margin-inline-start: 25px;
        @media (min-width: 980px) and (max-width: 1200px) {
          margin-inline-start: 15px;
        }
      }
    }

    @media (max-width: 980px) {
      justify-content: space-between;
      width: 100%;
    }
  }

  & a {
    transition: 1s all ease-in-out;
    &:hover {
      color: #fe9610;
    }

    @media (min-width: 980px) and (max-width: 1100px) {
      font-size: 10px !important;
    }
 
  }

  & .top-container {
    display: flex;
    width: 85%;
    align-items: center;
    justify-content: space-between;
  }
`;

export const RightNav = styled.div`
  display: flex;
  align-items: center;
  & .register-btn {
    background-image: linear-gradient(to left, #fa6400, #ffa214);
    width: 120px;
    height: 40px;
    border-radius: 22px;
    color: #ffffff;
    box-shadow: 0 6px 15px rgba(250, 100, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    text-transform: capitalize;
    margin-inline-start: 28px;
    margin-inline-end: 19.6px;
    @media (max-width: 980px) {
      display: none;
    }

    &:hover {
      border: 1px solid #ffa214;
      color: #ffa214;
      background: #ffffff;
      cursor: pointer;
    }
  }

  & select {
    border: none;
    outline: none;
    @media (max-width: 980px) {
      display: none;
    }
  }

  & .login-btn {
    @media (max-width: 980px) {
      display: none;
    }
  }

  & a,
  select {
    color: #3d4354;
    font-size: 12px;
    text-transform: capitalize;

    @media (max-width: 980px) {
      color: #ffffff;
    }

    @media (min-width: 980px) and (max-width: 1100px) {
      font-size: 10px;
    }
    &:hover {
      color: #fe9610;
    }
  }
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;

  @media (max-width: 980px) {
    cursor: pointer;
    flex-flow: column nowrap;
    background: linear-gradient(#008efa, #14c7ff);
    position: fixed;
    align-items: center;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: ${({ open }) =>
      open ? "transform 0.3s ease-in-out" : "translateX(100%)"};
    z-index: 222;
    max-width: 100% !important;
    width: 100%;
    padding-bottom: 20px;
  }
  & li > a, select {
    @media (max-width: 980px) {
      color: #ffffff;
    }
  }

  & .media-btn {
    display: none;
    @media (max-width: 980px) {
      display: flex;
      flex-direction: column;
    }
  }

  & a,
  select {
    color: #3d4354;
    font-size: 12px;
    text-transform: capitalize;
  

    @media (max-width: 980px) {
      color: #ffffff;

      border: none;
    background: inherit;
    outline: none;
    }

    @media (min-width: 980px) and (max-width: 1000px) {
      font-size: 10px;
    }
  }

  & select{
    display: none;
    @media (max-width: 980px) {
      display: flex;
    }
  }
`;

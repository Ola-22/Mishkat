import styled from "styled-components";

export const NavMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85%;
    & .nav-container{
        display: flex;
        align-items: center;
        & img{
            margin-inline-end: 4px;
        }

        & ul{
           display: flex;
           align-items: center;
            & li{
                margin-inline-start: 25px;
            }
        }
    }

    &  a, select{
        color: #3D4354;
        font-size: 12px;
        text-transform: capitalize;

        @media (max-width: 980px) {
            color: #ffffff;
        }
        } 

`

export const RightNav = styled.div`
    display: flex;
    align-items: center;
        & .register-btn{
        background-image: linear-gradient(to left, #FA6400 , #FFA214);
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
        }

        & select{
            border: none;
            outline: none;
        }

        & .login-btn{
            @media (max-width: 980px) {
            display: none;
        }
        }
`


export const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
 

  @media (max-width: 980px) {
    flex-flow: column nowrap;
    background: linear-gradient(#008EFA ,#14C7FF);
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

  & .media-btn{
      display: none;
    @media (max-width: 980px) {
        display: flex;
        flex-direction: column;
    }
  }
`;
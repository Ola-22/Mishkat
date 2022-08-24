import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 @font-face {
font-family: "Montserrat";
src: local("Montserrat"),
    url("./assets/fonts/Montserrat-Regular.ttf") format("truetype");
    font-display: fallback;
   }

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul{
    list-style: none;
}
a{
    text-decoration: none;
}

.home-container{
    display: flex;
    width: 100%;
    flex-direction:column;
    align-items: center;
   
}

.App{
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;
    font-family: Montserrat;
    overflow: hidden;
}

.title{

      font-size: 40px;
      color: #3d4354;
      text-transform: capitalize;
      margin-bottom: 7px;
      & span {
        color: #fe9610;
      }

      @media (max-width: 650px) {
          font-size: 25px;
      }
    
}

.active{
display: block;
}
.inActive{
display: none;
}

.scroll-top{
    width: 45px;
    height: 45px;
    background: linear-gradient(to bottom, #FA6400, #FFA214);
    position: fixed;
    bottom: 97.6px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 46px;
    box-shadow: 0 6px 15px rgba(250, 100, 0, .5);
    z-index: 42;
    cursor: pointer;

    & svg{
        fill: #fff;
    }
}
`;

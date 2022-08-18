import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 @font-face {
font-family: "Montserrat";
src: local("Montserrat"),
    url("./fonts/Montserrat-Regular.ttf") format("truetype");
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
    padding-top: 25px;
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
`
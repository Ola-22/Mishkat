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
}

.App{
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;
    padding-top: 25px;
    font-family: Montserrat;
    overflow: hidden;
}
`
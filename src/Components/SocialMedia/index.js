import React from "react";
import * as S from "./style";

function SocialMedia() {
  return (
    <S.SocialContainer>
      <div className="img-container">
        <img src="./assets/images/facebook.png" alt="facebook" />
      </div>
      <div className="img-container">
        <img src="./assets/images/twitter.png" alt="twitter" />
      </div>
      <div className="img-container">
        <img src="./assets/images/instagram.png" alt="instagram" />
      </div>
      <div className="img-container">
        <img src="./assets/images/linkedin.png" alt="linkedin" />
      </div>
    </S.SocialContainer>
  );
}

export default SocialMedia;

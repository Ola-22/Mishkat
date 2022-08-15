import React from "react";
import * as S from "./style";

function MissionVision() {
  return (
    <S.Container>
      <S.Box>
          <img src="./assets/images/background-mission.png" className="img-back" alt="background" />
       <span>
             <div>
          <img src="./assets/images/target.png" alt="target" />
        </div>
        <h6>mission</h6>
        <p>
          To achieve our vision, we aim to make learning enjoyable by while
          providing a localized experience that is based on high-quality
          education focused on creativity, quality, and safety.{" "}
        </p>    
       </span>

      </S.Box>

      <S.Box>
      <img src="./assets/images/background-vision.png" className="img-vision" alt="background" />
        <span>
                 <div>
          <img src="./assets/images/eye.png" alt="target" />
        </div>
        <h6>vision</h6>
        <p>
        To be the leader in edutainment creation in
the region. 
        </p> 
        </span>

      </S.Box>
    </S.Container>
  );
}

export default MissionVision;

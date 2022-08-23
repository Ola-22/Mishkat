import React from "react";
import CardAmbassadors from "./CardAmbassadors";
import * as S from "./style";

function Ambassadors() {
  return (
    <S.Main id="ambassadors">
      <S.TitleContainer>
        <h2 className="title">
          The Edutainment <span>Ambassadors</span>
        </h2>
        <p>Our Fantastic Team</p>
      </S.TitleContainer>


      <S.ContainerCard>
        <CardAmbassadors
          src="./assets/images/man2.png"
          job="The Problem Solver"
          name="Mohannad AlSaif "
          content="Mohannad is a highly experienced mechanical engineer, project manager and Riyadh native who has a passion for solving all sorts of problems. One of his most important tools is his own creativity."
        />

        <CardAmbassadors
          src="./assets/images/man2.png"
          job="The Creative Thinker "
          name="Brent Corley"
          content="Brent is a talented project management and financial professional with a drive to create educational environments that stimulate innovation. His passion for teaching helps drive success and inspire students to do great things. "
       />
      </S.ContainerCard>
    </S.Main>
  );
}

export default Ambassadors;

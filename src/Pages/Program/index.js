import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import RightNav from "../../Components/Navbar/RightNav";
import Questions from "../../Components/Questions";
import TeachingFormat from "../../Components/TeachingFormat";
import * as S from "./style";

function Program() {
  return (
    <S.ProgramContainer>
      <S.HeaderProgram>
        <Link to="/">
          <img src="./assets/images/logo.png" alt="logo mishkat" />
        </Link>
        <RightNav />
      </S.HeaderProgram>
      <div className="banner">
        <img src="./assets/images/children.png" alt="children" />
      </div>

      <S.ProgramDetails>
        <div className="paragraph">
          <img src="./assets/images/background-p.png" className="back-p" alt="background" />
                 <p>
          Available in English and Arabic, the Inventionland Institute
          curriculum promotes innovation literacy and teaches participants to
          understand the process of inventing. Specifically, the Instructor-led
          learning framework allows for students to be active and engaged
          learners. By making the learning process fun and interactive, the
          curriculum can immerse youth in the learning experience and allow them
          to explore their own creativity.
        </p> 
        </div>


        <S.Programs>
          <img className="background-program" src="./assets/images/background-program.png" alt="prorram" />
          <div className="title-container">
            <h2 className="title">
              you child <span>will learn to</span>
            </h2>
            <div className="shape"></div>
          </div>
          <S.LearnContainer>
              {/* <img className="group" src="./assets/images/Group 408.png" alt="" /> */}
            <ul>
              <li>Develop a culture of innovation in education</li>
              <li>
                Bring real-world experiences to a curriculum that is hands-on
              </li>
              <li>Create optimum learning environments</li>
              <li>
                Create interactive teaching moments with available teacher
                resources
              </li>
              <li>Introduce students to a variety of professional careers</li>
            </ul>
          </S.LearnContainer>
        </S.Programs>
      </S.ProgramDetails>

      <TeachingFormat />
      <Questions />
      <div className="footer">
        <img className="footer-img" src="./assets/images/footer-img.png" alt="footer" />
        <Footer/>
      </div>
    </S.ProgramContainer>
  );
}

export default Program;

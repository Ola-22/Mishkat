import React from "react";
import Menu from "./Menu";
import RightNav from "./RightNav";
// import "./style.css";
import * as S from "./style"

function Navbar() {
  return (
    <S.NavMain>
      <div className="nav-container">
        <img src="./assets/images/logo.png" alt="logo mishkat" />
        <Menu />
      </div>

     <RightNav />
    </S.NavMain>
  );
}

export default Navbar;

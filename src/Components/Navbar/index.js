import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
// import "./style.css";
import * as S from "./style"

function Navbar() {
  return (
    <S.NavMain>
      <div className="nav-container">
        <img src="./assets/images/logo.png" alt="logo mishkat" />
        <Menu />
      </div>

      <S.RightNav>
          <Link to="/login" className="login-btn">login</Link>
          <Link to="/register" className="register-btn">register now</Link>
          <select>
              <option>En</option>
          </select>
      </S.RightNav>
    </S.NavMain>
  );
}

export default Navbar;

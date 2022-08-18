import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

function RightNav() {
  return (
    <S.RightNav>
      <Link to="/login" className="login-btn">
        login
      </Link>
      <Link to="/register" className="register-btn">
        register now
      </Link>
      <select>
        <option>En</option>
      </select>
    </S.RightNav>
  );
}

export default RightNav;

import * as S from "./style";
import { Link } from "react-router-dom";

function Navbar({ open }) {
  return (
    <S.Ul open={open}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/our-program">our program</Link>
      </li>
      <li>
        <a href="#courses">courses</a>
      </li>
      <li>
        <a href="#position">our value position</a>
      </li>
      <li>
        <a href="#about-us">about us</a>
      </li>
      <li>
        <a href="#ambassadors">ambassadors</a>
      </li>
<div className="media-btn">
      <li>
      <Link to="/login" className="login-btn">login</Link>
      </li>
</div>

<div className="media-btn">
      <li>
      <Link to="/register" className="register-btn">register now</Link>
      </li>
</div>
<select>
        <option>En</option>
      </select>
    </S.Ul>
  );
}

export default Navbar;

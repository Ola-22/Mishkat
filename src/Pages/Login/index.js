import {useState} from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

function Login() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  return (
    <S.LoginFooter>
      <S.HeaderLogin>
        <Link to="/">
          <img src="./assets/images/logo.png" alt="logo" />
        </Link>
        <select>
          <option>en</option>
        </select>
      </S.HeaderLogin>
      <S.LoginBox>
        <h2>login</h2>
        <p>
          You can contact us at any time from the contact form below or call us
          on the unified number (from Sunday to Thursday from 9 am to 5 pm)
        </p>
        <input placeholder="name" value={name} onChange={e => setName(e.target.value)} />
        <input placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button>register now</button>
        <Link className="forget-pass" to="/forget-password">
          forget password ?
        </Link>
      </S.LoginBox>
    </S.LoginFooter>
  );
}

export default Login;

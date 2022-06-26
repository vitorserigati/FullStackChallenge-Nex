import { useState } from "react";
import { Logo } from "../../components";
import "../../styles/loginpage.css";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="main">
      <div>
        <form className="login-form">
          <div className="logo-div">
            <Logo />
          </div>
          <div className="input-wraper">
            <input
              className={email !== "" ? "has-val input-input" : "input-input"}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Email" />
          </div>

          <div className="input-wraper">
            <input
              className={
                password !== "" ? "has-val input-input" : "input-input"
              }
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Password" />
          </div>
          <div className="button-wraper">
            <button className="button-class" type="submit">
              Login
            </button>
          </div>
        </form>
        <div className="register">
          <p>Still don't have an accont?</p>
          <a href="#">
            <strong>Register here </strong>
          </a>
        </div>
      </div>
    </div>
  );
};

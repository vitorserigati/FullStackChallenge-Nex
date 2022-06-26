import { Logo } from "../../components";
import "../../styles/loginpage.css";

export const LoginPage = () => {
  return (
    <div className="main">
      <div>
        <form className="login-form">
          <div className="logo-div">
            <Logo />
          </div>
          <div className="input-wraper">
            <div>
              <label className="input-label">E-Mail</label>
            </div>
            <input
              className="input-imput"
              type="email"
              placeholder="email@email.com"
            />
          </div>
          <div className="input-wraper">
            <div>
              <label className="input-label">Password</label>
            </div>
            <input
              className="input-imput"
              type="password"
              placeholder="password"
            />
          </div>
          <button className="button-class" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

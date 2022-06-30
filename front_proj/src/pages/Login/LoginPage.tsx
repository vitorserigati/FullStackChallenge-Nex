import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { SyntheticEvent, useContext, useState } from "react";
import { Logo } from "../../components";
import "../../styles/loginpage.css";

export const LoginPage = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (email && password) {
      const isLogged = await auth.signin(email, password);
      if (isLogged) {
        navigate("/home");
      } else {
        alert("Did not Connected");
      }
    } else {
      return alert("something go whrong");
    }
  };

  console.log(auth.signed);
  return (
    <div className="main">
      <div>
        <form className="login-form" onSubmit={handleSubmit}>
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
          <Link to={`/register`}>
            <strong>Register here </strong>
          </Link>
        </div>
      </div>
    </div>
  );
};

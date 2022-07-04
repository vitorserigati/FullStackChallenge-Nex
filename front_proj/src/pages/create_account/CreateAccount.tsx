import { SyntheticEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import "../../styles/createaccount.css";

export const CreateAccount = () => {
  const auth = useApi();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (name && email && password) {
      await auth.createUser(name, email, password);
      navigate("/login");
    }
  };

  return (
    <main className="register-main-class">
      <section className="register-section-class">
        <form className="register-form-class" onSubmit={handleSubmit}>
          <div className="register-register-text">Register</div>
          <div className="register-wraper">
            <input
              type="text"
              required={true}
              className={
                name !== "" ? "register-inputs has-val" : "register-inputs"
              }
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span className="register-focus-input" data-placeholder="Name" />
          </div>
          <div className="register-wraper">
            <input
              type="email"
              required={true}
              className={
                email !== "" ? "register-inputs has-val" : "register-inputs"
              }
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="register-focus-input" data-placeholder="E-mail" />
          </div>
          <div className="register-wraper">
            <input
              type="password"
              required={true}
              className={
                password !== "" ? "register-inputs has-val" : "register-inputs"
              }
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="register-focus-input"
              data-placeholder="Password"
            />
          </div>
          <div className="register-wraper">
            <input
              type="register-password"
              required={true}
              className={
                confirmPass !== ""
                  ? "register-inputs has-val"
                  : "register-inputs"
              }
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />
            <span
              className="register-focus-input"
              data-placeholder="Confirm Password"
            />
          </div>
          <span className="register-warning">
            Please, make sure all fields are filled in and the information is
            correct
          </span>
          <div className="register-btn-wrapper">
            <Link to={"/login"} className="register-back-btn">
              Return
            </Link>
            {password === confirmPass &&
              password &&
              confirmPass &&
              name &&
              email !== "" && (
                <button type="submit" className="register-form-submit-btn">
                  Confirm
                </button>
              )}
          </div>
        </form>
      </section>
    </main>
  );
};

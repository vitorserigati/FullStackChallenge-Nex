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
    <main className="main-class">
      <section className="section-class">
        <form className="form-class" onSubmit={handleSubmit}>
          <div className="register-text">Register</div>
          <div className="wraper">
            <input
              type="text"
              required={true}
              className={name !== "" ? "inputs has-val" : "inputs"}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Name" />
          </div>
          <div className="wraper">
            <input
              type="email"
              required={true}
              className={email !== "" ? "inputs has-val" : "inputs"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="focus-input" data-placeholder="E-mail" />
          </div>
          <div className="wraper">
            <input
              type="password"
              required={true}
              className={password !== "" ? "inputs has-val" : "inputs"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Password" />
          </div>
          <div className="wraper">
            <input
              type="password"
              required={true}
              className={confirmPass !== "" ? "inputs has-val" : "inputs"}
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Confirm Password" />
          </div>
          <span className="warning">
            Please, make sure all fields are filled in and the information is
            correct
          </span>
          <div className="btn-wrapper">
            <Link to={"/login"} className="back-btn">
              Return
            </Link>
            {password === confirmPass &&
              password &&
              confirmPass &&
              name &&
              email !== "" && (
                <button type="submit" className="form-submit-btn">
                  Confirm
                </button>
              )}
          </div>
        </form>
      </section>
    </main>
  );
};

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import "../../styles/home.css";
import { useApi } from "../../hooks/useApi";

export const HomePage = () => {
  const auth = useContext(AuthContext);

  const navigate = useNavigate();
  const handleLogout = () => {
    auth.signout();
    navigate("/login");
  };

  return (
    <div className="body">
      <header className="header-class">
        <nav className="nav-bar">
          <div className="name">
            <h1>
              Welcome <strong>{auth.user?.name} </strong>
            </h1>
          </div>
          <button className="logout-link" onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </header>
      <section className="main-view">
        <div className="sideBar"></div>
        <div className="main"></div>
      </section>
    </div>
  );
};

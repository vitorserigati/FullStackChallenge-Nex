import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import "../../styles/HomePage.css";
import { Button, TableHeader, TableItem } from "../../components";
import { useApi } from "../../hooks/useApi";
import { useItems } from "../../hooks";

export const HomePage = () => {
  const { items, getAll } = useItems();
  const auth = useContext(AuthContext);
  const api = useApi();
  const userName = auth.user?.name.split(" ");
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.signout();
    navigate("/login");
  };
  const [list, setList] = useState([]);

  useEffect(() => {
    getAll();
    console.log(items);
  }, [list]);

  return (
    <div className="body">
      <header className="header-class">
        <nav className="nav-bar">
          <div className="name">
            <h1>
              Welcome
              <strong>{userName?.slice(0, 1)}</strong>
            </h1>
          </div>
          <button className="logout-link" onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </header>
      <section className="main-view">
        <div className="sideBar"></div>
        <div className="session-main">
          <div className="table-container">
            <table className="items-table">
              <thead className="table-header">
                <tr>
                  <TableHeader className="table-rows">Name</TableHeader>
                  <TableHeader className="table-rows">Description</TableHeader>
                  <TableHeader className="table-rows">Value</TableHeader>
                  <TableHeader className="table-rows">Edit</TableHeader>
                  <TableHeader className="table-rows">Delete</TableHeader>
                </tr>
              </thead>
              <tbody className="table-bodie">
                <tr>
                  <TableItem className="table-items">Nome do Item</TableItem>
                  <TableItem className="table-items">
                    Descrição sei lá oque
                  </TableItem>
                  <TableItem className="table-items">
                    Preço dessa bagaça
                  </TableItem>
                  <TableItem className="table-items">
                    <Button classname="delete-btn" onClick={() => {}}>
                      Edit
                    </Button>
                  </TableItem>
                  <TableItem className="table-items">
                    <Button classname="delete-btn" onClick={() => {}}>
                      Delete
                    </Button>
                  </TableItem>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

import { useNavigate } from "react-router-dom";
import {
  FormEvent,
  SyntheticEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import "../../styles/HomePage.css";
import { Button, TableHeader } from "../../components";
import { useApi } from "../../hooks/useApi";
import { IItems } from "../../interfaces";
import { TableRowsRead } from "../../components";
import { TableRowsEdit } from "../../components/TableRowsEdit";
import Swal from "sweetalert2";

export const HomePage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState<Float32Array>();
  const [items, setItems] = useState<IItems[]>([]);
  const [editItemId, setEditItemId] = useState<string | null>(null);
  const auth = useContext(AuthContext);
  const api = useApi();
  const userName = auth.user?.name.split(" ");
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.signout();
    navigate("/login");
  };

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Do you wish to delete this item?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        api.deleteItembyId(id).then((result) => {
          if (result instanceof Error) {
            Swal.fire("error", result.message, "warning");
          } else {
            Swal.fire("Changes Have Been Saved", "", "info");
            setItems((oldItems) => [
              ...oldItems.filter((oldItem) => oldItem.id !== id),
            ]);
          }
        });
        // alert(result.message);
      } else if (result.isDenied) {
        Swal.fire("Canceled!", "the Operation Is canceled");
      }
    });
  };

  const handleEdit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { name, description, value } = event.target as typeof event.target & {
      name: { value: string };
      description: { value: string };
      value: { value: Float32Array };
    };
    if (editItemId) {
      const addChange = await api.editItemsById(
        editItemId,
        name.value,
        value.value,
        description.value
      );

      const newList = [...items];
      const index = newList.findIndex((item) => item.id === editItemId);
      newList[index] = {
        id: editItemId,
        name: name.value,
        value: value.value,
        description: description.value,
      };
      setItems(newList);
      setEditItemId(null);
    }
  };

  const handleAddItem = (event: SyntheticEvent) => {
    event.preventDefault();
    if (name && description && value) {
      const reload = async () => {
        const response = await api.addNewItem(name, description, value);
        if (response instanceof Error) {
          alert("an error occured");
        } else {
          const newItems = [...items, response];
          setItems(newItems);
        }
      };
      reload();
      setName("");
      setDescription("");
      setValue(0);
    } else {
      alert("Fill all information first");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.getAllItem();

      setItems(data);
      return data;
    };
    fetchData();
  }, []);

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
          <Button className="logout-link " onClick={handleLogout}>
            Logout
          </Button>
        </nav>
      </header>
      <section className="main-view">
        <div className="sideBar"></div>
        <div className="session-main">
          <div className="table-container">
            <form className="table-form" onSubmit={handleEdit}>
              <table className="items-table">
                <thead className="table-header">
                  <tr>
                    <TableHeader className="table-rows">Name</TableHeader>
                    <TableHeader className="table-rows">
                      Description
                    </TableHeader>
                    <TableHeader className="table-rows">Value</TableHeader>
                    <TableHeader className="table-rows">Edit</TableHeader>
                    <TableHeader className="table-rows">Delete</TableHeader>
                  </tr>
                </thead>
                <tbody className="table-bodie">
                  {Array.isArray(items) &&
                    items.map((items) => (
                      <>
                        {editItemId === items.id ? (
                          <TableRowsEdit
                            id={items.id}
                            name={items.name}
                            description={items.description}
                            value={items.value}
                            onClickCancel={() => setEditItemId(null)}
                          />
                        ) : (
                          <TableRowsRead
                            id={items.id}
                            description={items.description}
                            value={items.value}
                            name={items.name}
                            onClickEdit={() => setEditItemId(items.id)}
                            onClickDelete={() => handleDelete(items.id)}
                          />
                        )}
                      </>
                    ))}
                </tbody>
              </table>
            </form>

            <div className="new-items">
              <h2>Add New Item</h2>
              <form className="form-class" onSubmit={handleAddItem}>
                <input
                  type="text"
                  name="name"
                  value={name}
                  required={true}
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  name="description"
                  value={description}
                  required={true}
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                />
                <input
                  type="number"
                  name="value"
                  step="0.01"
                  required={true}
                  placeholder="Value"
                  value={value?.toString()}
                  onChange={(e) => setValue(e.target.value)}
                />
                <Button className="new-btn" type="submit">
                  + New Item
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

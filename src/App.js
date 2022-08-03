import "./App.css";
import React, { useState, useEffect } from "react";
import { Form } from "./form/Form";
import { EditForm } from "./editForm/EditForm";
import { List } from "./list/List";
import { Spinner } from "./spinner/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [listData, setListData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetchAllData();
  }, []);

  const notify = () => toast("Created person succesfully!");
  const notifyUpdate = () => toast("Updated person succesfully!");
  const cancelEdit = () => setIsEdit(false);

  const fetchAllData = () => {
    fetch(`https://edbtestback.herokuapp.com/person`, {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        setListData(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  const onSubmit = (data) => {
    const person = {
      name: data.name,
      lastName: data.lastName,
      telephone: data.telephone,
      email: data.email,
      age: data.age,
      state: data.state,
    };

    createPerson(person);
  };

  const onEdit = (data) => {
    const person = {
      id: data.id,
      name: data.name,
      lastName: data.lastName,
      telephone: data.telephone,
      email: data.email,
      age: data.age,
      state: data.state,
    };
    updatePerson(person);
  };

  const editUser = (person) => {
    setCurrentUser(person);
    setIsEdit(true);
  };

  const createPerson = async (person) => {
    fetch(`https://edbtestback.herokuapp.com/person`, {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(person),
    })
      .then((response) => response.json())
      .then((json) => {
        fetchAllData();
        notify();
      })
      .catch((err) => console.log(err));
  };

  const updatePerson = async (person) => {
    fetch(`https://edbtestback.herokuapp.com/person/${person.id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(person),
    })
      .then((response) => response.json())
      .then((json) => {
        fetchAllData();
        notifyUpdate();
        setIsEdit(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {isEdit ? (
        <EditForm currentUser={currentUser} submit={onEdit} cancelAction={cancelEdit} />
      ) : (
        <Form submit={onSubmit} />
      )}

      <br />
      {loading ? (
        <div className="spinner">
          <Spinner />
        </div>
      ) : (
        <List listData={listData} rowClick={editUser} />
      )}
      {error && <div>{error}</div>}

      <ToastContainer />
    </div>
  );
}

export default App;

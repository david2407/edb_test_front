import React from "react";
import "./List.scss";

export const List = ({ listData, rowClick }) => {
  const handleClick = (person) => {
    rowClick(person);
  };

  return (
    <div className="list">
      <table className="list__table">
        <caption>Person Information table - select person row for updating</caption>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>LastName</th>
            <th>Telephone</th>
            <th>Email</th>
            <th>Age</th>
            <th>State</th>
            <th>Input Date</th>
          </tr>
        </thead>
        <tbody>
          {listData.map((person, index) => {
            return (
              <tr key={index} >
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.lastName}</td>
                <td>{person.telephone}</td>
                <td>{person.email}</td>
                <td>{person.age}</td>
                <td>{person.state}</td>
                <td>{person.date}</td>
                <td>
                    <button onClick={(e) => handleClick(person)}>Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

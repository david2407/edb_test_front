import React from "react";
import "./Form.scss";
import { useForm } from "react-hook-form";

export const Form = (props) => {
  const { submit } = props;
  const options = [
    "nuevo",
    "no interesado",
    "numero equivocado",
    "informacion equivocada",
    "alto potencial",
    "bajo potencial",
  ];

  const onSubmit = (data) => {
    submit(data);
  };

  const { register, handleSubmit } = useForm();

  return (
    <div className="container">
      <form className="submission-form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Create</h1>

        <label>
          Name:
          <input {...register("name")} type="text" name="name" />
        </label>
        <label>
          LastName:
          <input {...register("lastName")} type="text" name="lastName" />
        </label>
        <label>
          Telephone:
          <input {...register("telephone")} type="tel" name="telephone" />
        </label>
        <label>
          Email:
          <input {...register("email")} type="email" name="email" />
        </label>
        <label>
          Age:
          <input {...register("age")} type="text" name="age" />
        </label>
        <label>
          State:
          <select {...register("state")}>
            {options.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </select>
        </label>
        <input type="submit" value="  Create  " id="send" />
      </form>
    </div>
  );
};

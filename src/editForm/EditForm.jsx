import React from "react";
import "./EditForm.scss";
import { useForm } from "react-hook-form";

export const EditForm = (props) => {
  const { submit, currentUser } = props;
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

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: currentUser,
  });

  setValue("name", currentUser.name);
  setValue("lastName", currentUser.lastName);
  setValue("telephone", currentUser.telephone);
  setValue("email", currentUser.email);
  setValue("age", currentUser.age);
  setValue("state", currentUser.state);

  return (
    <div className="container">
      <form className="submission-form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Edit</h1>
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
        <input type="submit" value="  Edit  " id="send" />
      </form>
    </div>
  );
};

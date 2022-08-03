import React from "react";
import "./Form.scss";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

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
    reset();
  };

  const handleEmailValidation = (email) => {
    console.log("ValidateEmail was called with", email);

    const isValidEmail = (email) =>
      // eslint-disable-next-line
      /\S+@\S+\.\S+/.test(email);

    const isValid = isValidEmail(email);

    const validityChanged =
      (errors.email && isValid) || (!errors.email && !isValid);
    if (validityChanged) {
      console.log("Fire tracker with", isValid ? "Valid" : "Invalid");
    }

    return isValid;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <div className="container">
      <form className="submission-form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Create</h1>

        <label>
          Name:
          <input
            {...register("name", { required: "name is required" })}
            type="text"
            name="name"
          />
        </label>
        <ErrorMessage errors={errors} name="name" />
        <label>
          LastName:
          <input
            {...register("lastName", { required: "last name is required" })}
            type="text"
            name="lastName"
          />
        </label>
        <ErrorMessage errors={errors} name="lastName" />
        <label>
          Telephone:
          <input
            {...register("telephone", { required: "telephone is required" })}
            type="tel"
            name="telephone"
          />
        </label>
        <ErrorMessage errors={errors} name="telephone" />
        <label>
          Email:
          <input
            {...register("email", {
              required: "email is no valid",
              validate: handleEmailValidation,
            })}
            type="email"
            name="email"
          />
        </label>
        <ErrorMessage errors={errors} name="email" />
        <label>
          Age:
          <input
            {...register("age", { required: "age is required" })}
            type="text"
            name="age"
          />
        </label>
        <ErrorMessage errors={errors} name="age" />
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
